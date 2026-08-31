# Fiches de Bande → Word

Application web statique (HTML/CSS/JS, sans framework) qui convertit un
export JSON de roster **BattleScribe** (Mordheim) en un document
**Word (.docx)** en français, une fiche par page : Bande, Héros,
Hommes de main, Règles — à l'image des gabarits papier fournis.

Le format DOCX a été choisi (à la place d'un EPUB, testé dans un premier
temps) car ses pages sont de taille fixe : contrôle strict des sauts de
page et de la taille des images, ce que l'EPUB — pensé pour un texte
fluide qui s'adapte à l'écran — ne permettait pas correctement.

Tout se passe **dans le navigateur** : le fichier JSON n'est jamais
envoyé vers un serveur, la génération du DOCX se fait en local avec
[docx.js](https://docx.js.org/) (embarqué dans le projet, aucun appel
à un CDN externe).

## Utilisation

1. Ouvrez `index.html` (en local, ou via GitHub Pages une fois déployé).
2. Déposez votre fichier `.json` exporté depuis BattleScribe.
3. Vérifiez l'aperçu (nom de la bande, magot, héros, hommes de main).
4. Personnalisez vos figurines si besoin (nom, bio, photo).
5. Cliquez sur **Générer le DOCX** : le fichier `.docx` est téléchargé
   avec son fichier de personnalisation compagnon.
6. Ouvrez-le dans Word/LibreOffice, imprimez-le, ou envoyez-le à votre
   liseuse via "Envoyer vers Kindle" (Amazon le convertit
   automatiquement).

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
index.html            Interface (upload roster + personnalisation, aperçu, génération)
css/style.css          Identité visuelle (parchemin, gothique, ledger)
js/translations.js     Dictionnaire de traduction EN → FR
js/parser.js           JSON BattleScribe → modèle normalisé
js/personalization.js  Personnalisation (nom/bio/photo) + fichier compagnon
js/docx-builder.js     Modèle normalisé → fichier .docx (via docx.js)
js/app.js              Câblage de l'interface
js/vendor/docx.mjs     docx.js embarqué (pas d'appel à un CDN externe)
sample-data/           Exemple de roster pour les tests
test/                  Scripts Node de test (parseur, docx, personnalisation)
```

## Personnaliser un personnage (nom, bio, photo)

Le JSON exporté par New Recruit ne contient ni nom personnalisé, ni bio,
ni photo — ces informations vivent donc dans un **fichier compagnon**
séparé (`<bande>-personnalisation.json`), jamais dans le JSON
BattleScribe (qui n'est jamais modifié).

Fonctionnement :

1. Chargez votre export JSON New Recruit.
2. Un panneau "Personnaliser les figurines" apparaît sous l'aperçu :
   pour chaque héros/homme de main, vous pouvez saisir un nom, une bio,
   et déposer une photo (redimensionnée et compressée automatiquement
   en JPEG ~500px pour rester léger).
3. Cliquez sur **Générer le DOCX + le fichier de personnalisation** :
   deux fichiers sont téléchargés — le document Word, et le fichier compagnon.
   **Gardez ce dernier** quelque part (même dossier que vos exports New
   Recruit, par exemple).
4. La prochaine fois : chargez le nouvel export JSON New Recruit, PUIS
   le fichier de personnalisation dans la zone dédiée juste en dessous
   — noms, bios et photos sont automatiquement réappliqués.

### Association figurine ↔ personnalisation

Chaque personnalisation est associée à l'identifiant interne (`id`)
stable généré par New Recruit pour cette figurine, tant que vous ne la
supprimez/recréez pas. Si une personnalisation ne retrouve plus sa
figurine (ex. figurine supprimée), l'application vous prévient dans un
encart "Personnalisations orphelines" **et les conserve** dans le
prochain fichier téléchargé plutôt que de les perdre silencieusement.

## Organisation du document

Pour éviter les répétitions du texte des règles, la structure a changé :

1. **Bande** — infos générales + noms des règles de bande (sans le
   détail, renvoi vers le chapitre Règles)
2. **Héros** — fiches avec nom personnalisé, photo, bio, équipement,
   et simple liste des noms de compétences/règles (sans description)
3. **Hommes de main** — idem
4. **Règles** — en fin de document, 3 sous-sections sans doublon :
   Règles des Armes, Règles Spéciales, Règles d'Équipe.

Chaque fiche (Bande exceptée) commence sur une nouvelle page (saut de
page explicite), et les blessures d'un héros/homme de main restent sur
sa propre fiche (elles lui sont spécifiques, contrairement aux
compétences/règles génériques renvoyées en fin de document).

## Comment fonctionne la traduction

Le fichier `sample-data/exemple.json` fourni contient, pour certaines
règles, **deux versions du même nom** : une en anglais et une en
français (ajoutée manuellement par la communauté BattleScribe). Le
parseur applique la règle suivante, décidée ensemble :

1. Pour chaque règle/compétence (identifiée par son `name`), on
   cherche dans **tout** le fichier une version dont le texte est
   détecté comme français (accents, mots-outils). Si elle existe, on
   l'utilise **systématiquement**, partout où cette règle apparaît.
2. Sinon, on utilise la traduction manuelle du dictionnaire
   `js/translations.js` (préparée pour ce fichier).
3. Si aucune des deux n'est disponible (nouveau JSON, règle inconnue),
   le texte anglais d'origine est conservé **tel quel** dans le document,
   et signalé dans l'aperçu de l'application sous "Traduction
   incomplète" — plutôt que de générer une traduction approximative
   sans vous prévenir.

### Ajouter une traduction manquante

Si l'aperçu signale un passage non traduit, ouvrez
`js/translations.js` et ajoutez une entrée dans `RULE_TRANSLATIONS`
(pour une règle/compétence) ou `WEAPON_SPECIAL_TRANSLATIONS` (pour le
texte spécial d'une arme), avec le `name` exact comme clé.

## Ce que l'app NE fait PAS (pour l'instant)

Ces points n'ont volontairement pas été décidés/implémentés sans vous
en parler d'abord :

- Pas de gestion de plusieurs bandes / plusieurs fichiers à la fois.
- Le nom du type de bande affiché dans le chapitre "Bande" reprend le
  nom du catalogue BattleScribe (`Gunnery School Of Nuln (1b)`) : dites-moi
  si vous préférez un intitulé différent.
- La case "Réserve d'équipement" du gabarit "Bande" n'a pas
  d'équivalent trouvé dans le JSON fourni (probablement une réserve
  vide côté association BattleScribe) — elle n'apparaît donc pas dans
  le document. Signalez-moi où la trouver dans le JSON si elle existe.
- Les polices "UnifrakturCook"/"EB Garamond"/"JetBrains Mono" utilisées
  sur le SITE (pas dans le .docx) sont chargées depuis Google Fonts
  (seul appel réseau externe restant, purement décoratif). Le document
  Word utilise la police "Georgia", installée nativement sur
  Windows/Mac ; sur un PC qui ne l'aurait pas, Word substituera
  automatiquement une police proche. docx.js, lui, est embarqué
  localement (`js/vendor/docx.mjs`) pour éviter toute dépendance à un
  CDN.
- Taille de page fixée à A4 (21 × 29,7 cm). Dites-moi si vous préférez
  Letter (US) ou un autre format.
- Le fichier de personnalisation n'est pas chiffré : ne l'hébergez pas
  publiquement si vos photos/bios sont sensibles.

## Tests locaux (optionnel, nécessite Node.js)

```bash
npm install
npm run test:parser   # affiche le modèle normalisé en JSON
npm run test:docx     # génère test-output.docx à la racine
npm run test:perso    # cycle complet personnalisation/orpheline
```

Le projet a aussi été testé de bout en bout dans un vrai navigateur
(Chromium via Playwright) : upload du roster, personnalisation d'une
figurine (nom, bio, photo), génération des deux fichiers, ré-import du
fichier de personnalisation, et détection d'une personnalisation
orpheline.
