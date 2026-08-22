# Fiches de Bande → EPUB

Application web statique (HTML/CSS/JS, sans framework) qui convertit un
export JSON de roster **BattleScribe** (Mordheim) en un livre **EPUB**
en français, mis en page comme des fiches façon jeu de rôle : Règles,
Bande, Héros, Hommes de main — à l'image des gabarits papier fournis.

Tout se passe **dans le navigateur** : le fichier JSON n'est jamais
envoyé vers un serveur, la génération de l'EPUB se fait en local avec
[JSZip](https://stuk.github.io/jszip/).

## Utilisation

1. Ouvrez `index.html` (en local, ou via GitHub Pages une fois déployé).
2. Déposez votre fichier `.json` exporté depuis BattleScribe.
3. Vérifiez l'aperçu (nom de la bande, magot, héros, hommes de main).
4. Cliquez sur **Générer l'EPUB** : le fichier `.epub` est téléchargé.
5. Envoyez-le à votre liseuse (ex. "Envoyer vers Kindle", ou copie
   directe si votre liseuse lit l'EPUB nativement).

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
js/epub-builder.js     Modèle normalisé → fichier .epub (via JSZip)
js/app.js              Câblage de l'interface
js/vendor/jszip.min.js JSZip embarqué (pas d'appel à un CDN externe)
sample-data/           Exemple de roster pour les tests
test/                  Scripts Node de test (parseur, epub, personnalisation)
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
3. Cliquez sur **Générer l'EPUB + le fichier de personnalisation** :
   deux fichiers sont téléchargés — l'EPUB, et le fichier compagnon.
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

## Organisation de l'EPUB (mise à jour)

Pour éviter les répétitions du texte des règles, la structure a changé :

1. **Bande** — infos générales + noms des règles de bande (sans le
   détail, renvoi vers le chapitre Règles)
2. **Héros** — fiches avec nom personnalisé, photo, bio, équipement,
   et simple liste des noms de compétences/règles (sans description)
3. **Hommes de main** — idem
4. **Règles** — un seul chapitre en fin d'ouvrage rassemblant **toutes**
   les règles et compétences citées dans le livre, chacune une seule
   fois, triées par ordre alphabétique.

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
   le texte anglais d'origine est conservé **tel quel** dans l'EPUB,
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
  l'EPUB. Signalez-moi où la trouver dans le JSON si elle existe.
- Les polices "UnifrakturCook"/"EB Garamond"/"JetBrains Mono" sont
  chargées depuis Google Fonts (seul appel réseau externe restant :
  purement décoratif, ne transmet aucune donnée de votre bande, et le
  site fonctionne même si ce chargement échoue). JSZip, lui, est
  embarqué localement (`js/vendor/`) pour éviter toute dépendance à un
  CDN.
- Le fichier de personnalisation n'est pas chiffré : ne l'hébergez pas
  publiquement si vos photos/bios sont sensibles.

## Tests locaux (optionnel, nécessite Node.js)

```bash
npm install
npm run test:parser   # affiche le modèle normalisé en JSON
npm run test:epub     # génère test-output.epub à la racine
node test/test-personalization.mjs   # cycle complet personnalisation/orpheline
```

Le projet a aussi été testé de bout en bout dans un vrai navigateur
(Chromium via Playwright) : upload du roster, personnalisation d'une
figurine (nom, bio, photo), génération des deux fichiers, ré-import du
fichier de personnalisation, et détection d'une personnalisation
orpheline.
