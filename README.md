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

## Installer l'application (PWA)

Le site est une PWA : une fois ouvert depuis GitHub Pages
(`https://fbmake.github.io/mordheim-epub/`), il peut être installé comme
une application et fonctionne ensuite **hors ligne** (seules les polices
Google demandent une première visite en ligne).

- **Android (Chrome)** : menu ⋮ → **Installer l'application** (ou
  « Ajouter à l'écran d'accueil »).
- **iPhone / iPad (Safari)** : bouton Partager → **Sur l'écran
  d'accueil**.
- **Ordinateur (Chrome / Edge)** : icône d'installation à droite de la
  barre d'adresse, ou menu → **Installer Fiches de Bande**.

Fichiers concernés : `manifest.webmanifest`, `sw.js` (service worker)
et `icons/`. Si vous ajoutez un fichier nécessaire à la génération du
PDF, ajoutez-le à la liste `PRECACHE` de `sw.js` et incrémentez
`CACHE_VERSION`.

## Structure du projet

```
index.html              Interface (upload roster + personnalisation, aperçu, génération)
manifest.webmanifest    Manifeste PWA (nom, couleurs, icônes)
sw.js                   Service worker PWA (cache hors ligne)
icons/                  Icônes de l'application installée
css/style.css            Identité visuelle du SITE (parchemin, gothique, ledger)
js/translations.js       Dictionnaire de traduction EN → FR
js/parser.js             JSON BattleScribe → modèle normalisé
js/personalization.js    Personnalisation (nom/bio/photo) + fichier compagnon
js/warband-store.js      Emplacements de bande (IndexedDB) et suivi de partie
js/warband-builder.js    Création de bande de zéro → export au format BattleScribe
js/data/bandes.js        Données des bandes officielles (générées, voir tools/bsdata/)
js/data/bandes-en.js     Noms et règles anglais de ces données (générés, voir tools/bsdata/)
js/donnees-langue.js     Données de jeu dans la langue de l'interface (FR / EN)
js/pdf-builder.js        Modèle normalisé → fichier .pdf (via pdf-lib, gabarits image)
js/app.js                Câblage de l'interface
js/vendor/pdf-lib.esm.min.js   pdf-lib embarqué (pas d'appel à un CDN externe)
data/templates/<langue>/ Gabarits à imprimer, un dossier par langue (fr, en, es, de)
tools/coord-picker.html  Outil pour pointer/mesurer les coordonnées d'un gabarit
tools/coords/*.json      Coordonnées actuelles de chaque champ, par gabarit
sample-data/             Exemple de roster pour les tests
test/                    Scripts Node de test (parseur, personnalisation)
```

## Remplissage des gabarits : comment ça marche

Chaque gabarit (`data/templates/fr/hero.png`, `homme_de_main.png`,
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

## Menus de l'application

- **Menu principal** : *Mes bandes* (les 4 emplacements), *Nouvelle
  bande*, *Importer* (export JSON New Recruit / BattleScribe) et, dès
  qu'une bande est ouverte, un raccourci vers elle.
- **Menu de bande** : *Composition*, *Suivi de partie*, *Figurines*
  (nom, bio, photo, XP, état et blessures de chaque figurine) et
  *Imprimer* (PDF + fichier de personnalisation).

## Créer une bande de zéro

*Nouvelle bande* demande un nom, une faction (liste ou saisie libre),
le trésor de départ (500 co par défaut) et l'emplacement où la ranger.
L'onglet *Composition* permet ensuite de recruter, modifier, dupliquer
ou retirer héros et hommes de main : type, coût, XP, les 9
caractéristiques, équipement, compétences et règles spéciales. Le coût
total, le reste du trésor (versé au magot), la valeur de bande et
quelques contrôles (budget dépassé, plus de 6 héros, pas de chef) sont
calculés au fil de la saisie.

Les compétences et règles connues du dictionnaire de traduction sont
proposées en saisie automatique : leur texte français complet est alors
repris dans le PDF. Une bande créée est convertie en export au format
BattleScribe (`js/warband-builder.js`), puis traitée exactement comme
une bande importée. Une règle ou compétence déjà présente sur la
figurine (même saisie en anglais) n'est pas ajoutée une seconde fois.

**Progression.** Quand l'expérience d'un héros franchit un seuil de sa
piste après son recrutement, sa carte propose *Progression* : jet de
2D6 sur le tableau des héros (`js/progression.js`), nouvelle compétence
choisie dans ses listes sur 2-5 ou 10-12. C'est ainsi que s'ajoutent les
compétences ; la fiche du héros garde l'historique (seuil, dés,
résultat), modifiable à la main après une alerte. Les caractéristiques
au-dessus du profil de base sont en vert, celles diminuées (blessures)
en rouge. Une règle qui interdit l'expérience (Animaux, Démon, Sans
cervelle…) grise le champ XP et la piste.

**Bandes officielles de BSData** (livre de base : Reikland, Middenheim,
Marienburg, Culte des Possédés, Répurgateurs, Sœurs de Sigmar,
Morts-Vivants, Skavens du Clan Eshin ; puis Nains chasseurs de trésor,
Bande d'Orques, Pillards hommes-bêtes, Carnaval du Chaos, Kislevites,
Mercenaires d'Averland et d'Ostland) **et bandes des suppléments**
(Amazones, Chevaliers de Bretonnie, Caravanes marchandes, Elfes Noirs,
Gardiens des tombes, Gladiateurs, Gobelins de la forêt, Guerriers des
Ombres, Hommes-Lézards, Mercenaires de Miragliano, Nains du Chaos,
Norses, École d'Artillerie de Nuln, Pirates, Skavens du Clan Pestilens,
Hors-la-loi de Stirwood, et une quarantaine d'autres bandes des grades
1b, 1c et 2a de mordheimer.net) : *Recruter* propose les guerriers de la bande avec leur
profil, leur coût et leur effectif maximum, la fiche du guerrier propose
sa liste d'équipement (le coût suit les achats) et son accès aux
compétences, et la composition est contrôlée (effectifs, taille de la
bande, chef obligatoire, équipement hors liste). Le menu *Règles des
bandes* permet de consulter ces données. Pour une autre faction
(« Autre… », nom libre), tout se saisit à la main.

Une bande importée reste en lecture seule dans *Composition* : on la
modifie dans New Recruit puis on réimporte l'export.

### Données des bandes (`js/data/bandes.js`)

Générées à partir des catalogues communautaires
[BSData/mordheim](https://github.com/BSData/mordheim) : seules les
données de jeu (noms, profils, coûts, effectifs, listes d'équipement,
accès aux compétences) sont extraites. Les noms sont traduits et les
règles **résumées** en français dans `tools/bsdata/fr.json` ; le texte
des livres de règles n'est pas reproduit.

```bash
git clone --depth 1 https://github.com/BSData/mordheim.git /tmp/bsdata
python3 -I tools/bsdata/extract.py /tmp/bsdata /tmp/raw.json   # tous les catalogues de bandes
python3 -I tools/bsdata/build.py /tmp/raw.json tools/bsdata/fr.json js/data/bandes.js
```

Seules les bandes décrites dans `fr.json` sont reprises : pour en ajouter
une, ajoutez sa traduction (`build.py` liste tout ce qui manque). Une
règle ambiguë des données se précise par guerrier avec `remplacer`
(ex. `"Wizard"` → `"Wizard (Chaos Rituals)"`).
BSData ne publie pour l'instant que les 16 bandes officielles « 1a » ;
les bandes plus récentes (annuels, Town Cryer) y ont été retirées
temporairement.

### Bandes des suppléments (`tools/bsdata/supplements/`)

Les bandes absentes de BSData sont saisies à la main d'après
[mordheimer.net](https://mordheimer.net/docs/warbands/), un fichier JSON
par bande, déjà en français : profils, coûts, effectifs, XP de départ,
listes d'équipement (nom anglais et français), accès aux compétences,
liste de compétences spéciales, maximums des nouvelles races et règles
résumées en français et en anglais. Le champ `notes` de chaque fichier
garde les points simplifiés ou à vérifier (montures, objets réservés,
sorts non détaillés…). `build.py` et `build_en.py` les ajoutent
automatiquement à `js/data/bandes.js` et `js/data/bandes-en.js`.
Les bandes des grades 1a, 1b, 1c et 2a du site sont toutes saisies
(69 bandes en tout avec celles de BSData).

### Francs-tireurs (`tools/bsdata/francs-tireurs*.json`)

Les francs-tireurs (Hired Swords) s'engagent depuis la création d'une
bande (« + Engager un franc-tireur ») : les 7 du livre de base
(`francs-tireurs.json`) et 44 des suppléments, grades 1a à 1c
(`francs-tireurs-autres.json`, dont le champ `notes` signale les chiffres
pris d'une source secondaire, à vérifier). Chacun a sa prime d'engagement,
sa solde (à payer après chaque partie, parfois modifiée selon la
composition de la bande : `soldeSi`), sa valeur pour la valeur de bande,
son équipement fourni, ses listes de compétences et ses employeurs
(`employeurs` : `seulement` / `sauf`, avec des identifiants de bande ou
des groupes `@mercenaires`, `@skavens`… définis dans `groupes`).
L'application vérifie qu'un seul franc-tireur de chaque type est engagé,
que la bande peut l'employer, et ne le compte ni parmi les héros ni dans
l'effectif maximum (`effets.effectifMax` l'augmente, ex. le halfling).

### Version anglaise (`js/data/bandes-en.js`)

Quand l'interface passe en anglais, les données s'affichent sous leurs
noms officiels anglais : bandes (« Reikland Mercenaries »…), guerriers,
équipement, listes de compétences, et règles résumées en anglais. Les
noms anglais viennent de BSData (clés de `fr.json`) ; `tools/bsdata/en.json`
donne les noms des bandes, corrige quelques noms, résume les règles en
anglais (règles de bande, compétences de base, blessures graves) et relie
les noms français officiels des compétences à leur règle anglaise.

```bash
python3 -I tools/bsdata/build_en.py tools/bsdata/fr.json tools/bsdata/en.json js/data/bandes-en.js
```

Les bandes restent enregistrées en français : l'aperçu, le PDF et la
composition sont recalculés dans la langue choisie. Pour un export
BattleScribe, le texte anglais d'origine des règles est repris tel quel.

## Mes bandes : 4 emplacements dans le navigateur

Le panneau « Mes bandes » garde jusqu'à **4 bandes** dans une petite
base de données locale (IndexedDB) du navigateur, sur l'appareil
utilisé. Rien n'est envoyé sur un serveur.

- **Enregistrer ici** : range la bande chargée dans un emplacement.
  Si l'emplacement contient déjà la même bande (même nom), elle est
  **mise à jour** avec le nouvel export : noms, bios, photos, états et
  notes de partie sont conservés, les figurines disparues deviennent
  orphelines ; XP et magot reprennent les valeurs du nouvel export.
- **Ouvrir** : réaffiche une bande enregistrée. Toute modification
  (personnalisation ou suivi de partie) est **sauvegardée
  automatiquement**.
- **Suivi de partie** : XP, état (blessé, hors de combat, mort) et
  notes par figurine ; magot, pierres et réserve / notes de bande. Ces
  valeurs remplacent celles de l'export dans le PDF (champ vide = valeur
  de l'export). L'état et les notes apparaissent dans la case
  Compétences/Blessures de la fiche, les notes de bande dans la Réserve
  d'équipement.
- **Blessures graves** : choisies dans la table des blessures (jet de
  D66 indiqué), sur la fiche d'un héros ou à la saisie d'un combat. Les
  blessures permanentes restent sur la figurine et leurs malus sont
  appliqués au profil (ex. blessure à la jambe : M −1) ; les ponctuelles
  (capturé, dépouillé…) restent dans l'historique des combats. Les
  hommes de main ne peuvent que mourir. Table et effets dans
  `js/blessures.js`.
- **Cimetière** : une figurine morte (blessure « Mort » ou état « Mort »)
  passe au cimetière, en bas de l'onglet Figurines. Elle n'a plus de
  fiche dans le PDF et ne compte plus dans l'expérience de la bande ;
  « Ramener parmi les vivants » annule.
- **Exporter / Importer la sauvegarde** : un fichier
  `mordheim-bandes-AAAA-MM-JJ.json` regroupe les 4 emplacements. À faire
  régulièrement, car le navigateur peut effacer ses données (nettoyage
  de l'historique, navigation privée), et pour passer d'un appareil à
  l'autre.

Le code est dans `js/warband-store.js` (fonctions testées par
`node test/test-warband-store.mjs`).

## Ce que l'app NE fait PAS (pour l'instant)

- La Bio de bande reste vide (pas d'équivalent trouvé dans le JSON
  BattleScribe) ; la "Réserve d'équipement" n'est remplie que par les
  notes de bande du suivi de partie.
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
node test/test-warband-store.mjs    # emplacements, suivi de partie, sauvegarde
node test/test-warband-builder.mjs  # création de bande de zéro
node test/test-competences.mjs      # listes de compétences et maximums de race
```

Le PDF lui-même doit être testé dans un navigateur (il dépend de
`fetch()` pour charger les images/JSON de gabarit, donc pas testable
directement en Node) : servez le dossier avec un petit serveur local
(`python3 -m http.server`) et ouvrez `index.html`.
