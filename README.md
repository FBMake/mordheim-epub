# Fiches de Bande → PDF

Application web statique (HTML/CSS/JS, sans framework) qui convertit un
export JSON de roster **BattleScribe** (Mordheim) en un **PDF** en
français, une fiche par page, en remplissant directement tes gabarits
image (Bande, Héros, Homme de main) aux bons endroits.

Historique des formats essayés : EPUB (mise en page fluide, problèmes
de redimensionnement d'images) → DOCX (pages fixes, mais pas de
gabarit image) → **PDF** (pages fixes + gabarits image superposés,
solution retenue).

Tout se passe **dans le navigateur** : le fichier JSON n'est jamais
envoyé vers un serveur, la génération du PDF se fait en local avec
[pdf-lib](https://pdf-lib.js.org/) (embarqué dans le projet, aucun
appel à un CDN externe).

## Utilisation

1. Ouvrez `index.html` (en local, ou via GitHub Pages une fois déployé).
2. Déposez votre fichier `.json` exporté depuis BattleScribe.
3. Vérifiez l'aperçu (nom de la bande, magot, héros, hommes de main).
4. Personnalisez vos figurines si besoin (nom, bio, photo).
5. Cliquez sur **Générer le PDF** : le fichier `.pdf` est téléchargé
   avec son fichier de personnalisation compagnon.
6. Ouvrez-le, imprimez-le, ou envoyez-le à votre liseuse (le PDF est
   nativement supporté par la plupart des liseuses, y compris Kindle).

## Déploiement sur GitHub Pages

1. Poussez ce dossier sur un dépôt GitHub.
2. Dans les paramètres du dépôt → **Pages** → source = branche
   principale, dossier `/ (root)`.
3. L'application sera disponible à
   `https://<votre-compte>.github.io/<nom-du-depot>/`.

Aucune étape de build n'est nécessaire (pas de bundler) : les fichiers
JS sont chargés en modules ES natifs directement par le navigateur.

## Structure du projet

```
index.html              Interface (upload roster + personnalisation, aperçu, génération)
css/style.css            Identité visuelle du SITE (parchemin, gothique, ledger)
js/translations.js       Dictionnaire de traduction EN → FR
js/parser.js             JSON BattleScribe → modèle normalisé
js/personalization.js    Personnalisation (nom/bio/photo) + fichier compagnon
js/pdf-builder.js        Modèle normalisé → fichier .pdf (via pdf-lib, gabarits image)
js/app.js                Câblage de l'interface
js/vendor/pdf-lib.esm.min.js   pdf-lib embarqué (pas d'appel à un CDN externe)
data/templates/          Tes 4 images de gabarit (+ regles-vierge.png, nettoyée)
tools/coord-picker.html  Outil pour pointer/mesurer les coordonnées d'un gabarit
tools/coords/*.json      Coordonnées actuelles de chaque champ, par gabarit
sample-data/             Exemple de roster pour les tests
test/                    Scripts Node de test (parseur, personnalisation)
```

## Remplissage des gabarits : comment ça marche

Chaque gabarit (`data/templates/hero.png`, `homme_de_main.png`,
`bande.png`) est une image fixe : `pdf-builder.js` la pose en fond de
page PDF, puis écrit le texte par-dessus aux coordonnées définies dans
le fichier JSON correspondant (`tools/coords/hero-coords.json`, etc.).

Format d'un fichier de coordonnées :
```json
{
  "image": "hero.png",
  "width": 1414, "height": 2000,
  "fields": {
    "nom": { "x": 260, "y": 262, "align": "left", "size": 32 },
    "bio": { "x": 90, "y": 400, "maxWidth": 720, "lineHeight": 28 }
  }
}
```
- `x`/`y` : position en pixels, mesurés depuis le **coin haut-gauche**
  de l'image (comme dans un éditeur d'image classique).
- `align` : `left` (défaut), `center` ou `right`.
- `maxWidth` + `lineHeight` (optionnels) : active le retour à la ligne
  automatique pour les champs multi-lignes (bio, équipement...).

### Ajuster ou créer un gabarit (méthode reproductible)

1. Ouvrez `tools/coord-picker.html` dans votre navigateur (double-clic,
   pas besoin de serveur).
2. Chargez l'image du gabarit à pointer.
3. Choisissez la **police du document** (Times Roman, Helvetica ou
   Courier) — un seul choix global, appliqué à tout le PDF généré.
4. Trois modes de placement :
   - **Point** : un clic = un champ texte sur une seule ligne.
   - **Boîte** : cliquez-glissez pour délimiter une zone (photo, ou
     texte multi-ligne avec retour à la ligne automatique).
   - **Grille** : cliquez-glissez pour délimiter une zone, puis
     choisissez le nombre de colonnes/lignes et l'espacement — génère
     toute une rangée de champs d'un coup (ex. les 9 colonnes de
     stats).
5. Cliquez sur un champ déjà placé (dans la liste ou sur l'image) pour
   le modifier, le renommer, ou le glisser/redimensionner directement
   à la souris. Un aperçu au format et à la police choisie s'affiche
   pendant l'édition, pour juger de la taille réelle.
6. **Annuler/Rétablir** (Ctrl+Z / Ctrl+Y) à tout moment.
7. **Téléchargez le JSON**, remplacez le fichier correspondant dans
   `tools/coords/`.

**Note sur la police** : seules les 3 familles standard du PDF (Times
Roman, Helvetica, Courier) sont proposées — elles ne nécessitent aucun
fichier de police à embarquer et fonctionnent partout. Une police plus
décorative (gothique, façon site web) demanderait d'embarquer un
fichier de police externe dont il faudrait d'abord vérifier la licence
d'utilisation ; ce n'est pas fait pour l'instant.

**État actuel des coordonnées** : posées par mesure directe sur vos
images (avec une image de référence graduée pour vérifier), puis
corrigées après plusieurs aperçus. Le placement est globalement bon
mais **pas encore pixel-parfait** sur quelques champs (le badge de
coût "45 po" sur les fiches Héros/Homme de main, et la ligne de calcul
de la Valeur de Bande) — à affiner vous-même avec l'outil ci-dessus si
besoin, ou dites-le et on continue ensemble.

### Le chapitre "Règles"

Le gabarit `Règles.png` d'origine n'a que 15 lignes à puces, très
insuffisant pour les centaines de règles traduites. `regles-vierge.png`
est donc une version nettoyée (bordure + titre "Règles" conservés,
puces effacées), réutilisée par `pdf-builder.js` sur autant de pages
que nécessaire pour lister les Règles des Armes, Règles Spéciales et
Règles d'Équipe, sans limite de longueur.

## Comment fonctionne la traduction

Le fichier `sample-data/exemple.json` fourni contient, pour certaines
règles, **deux versions du même nom** : une en anglais et une en
français (ajoutée manuellement par la communauté BattleScribe). Le
parseur applique la règle suivante :

1. Pour chaque règle/compétence (identifiée par son `name`), on
   cherche dans **tout** le fichier une version dont le texte est
   détecté comme français. Si elle existe, on l'utilise
   **systématiquement**, partout où cette règle apparaît.
2. Sinon, on utilise la traduction manuelle du dictionnaire
   `js/translations.js` (plus de 330 règles ajoutées au fil des
   échanges, sourcées depuis [BSData/mordheim](https://github.com/BSData/mordheim)).
3. Si aucune des deux n'est disponible, le texte anglais d'origine est
   conservé **tel quel**, et signalé dans l'aperçu de l'application
   sous "Traduction incomplète".

### Ajouter une traduction manquante

Ouvrez `js/translations.js` et ajoutez une entrée dans
`RULE_TRANSLATIONS` (règle/compétence) ou
`WEAPON_SPECIAL_TRANSLATIONS` (texte spécial d'une arme), avec le
`name` exact comme clé.

**Limite connue** : le dictionnaire est une liste plate par nom de
règle, sans distinction de bande. 3 noms provenant de bandes
officielles différentes ont un sens différent selon la bande
(`Animals`, `Wizard`, `da cunnin' plan`) et ont été volontairement
laissés non traduits pour cette raison — voir le code si vous voulez
les gérer différemment (namespacer par bande demanderait d'adapter
`parser.js`).

## Personnaliser un personnage (nom, bio, photo)

Fonctionnement inchangé par rapport aux versions précédentes : un
fichier compagnon `<bande>-personnalisation.json` est téléchargé en
même temps que le PDF, à réimporter la prochaine fois à côté de votre
nouvel export JSON. Voir le panneau "Personnaliser les figurines" dans
l'application.

## Ce que l'app NE fait PAS (pour l'instant)

- Pas de gestion de plusieurs bandes / plusieurs fichiers à la fois.
- La "Réserve d'équipement" et la Bio de bande restent vides (pas
  d'équivalent trouvé dans le JSON BattleScribe).
- Coordonnées des gabarits perfectibles (voir section dédiée
  ci-dessus).
- Seules les règles **communes** à (quasi) toutes les bandes et les
  règles des **16 bandes officielles** BattleScribe sont traduites.
  Les bandes "spéciales"/maison (comme l'École d'Artillerie de Nuln)
  ne sont pas dans ce dépôt et doivent être traduites au cas par cas.

## Tests locaux (optionnel, nécessite Node.js)

```bash
node test/test-parser.mjs           # affiche le modèle normalisé en JSON
node test/test-personalization.mjs  # cycle personnalisation/orpheline
```

Le PDF lui-même doit être testé dans un navigateur (il dépend de
`fetch()` pour charger les images/JSON de gabarit, donc pas testable
directement en Node) : servez le dossier avec un petit serveur local
(`python3 -m http.server`) et ouvrez `index.html`.
