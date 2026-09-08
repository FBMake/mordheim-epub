/**
 * translations.js
 * ----------------
 * Dictionnaire de traduction FR utilisé par parser.js.
 *
 * Stratégie choisie avec l'utilisateur :
 *  - Si une règle existe en double dans le JSON (une version EN + une
 *    version FR, ce qui arrive côté BattleScribe pour certaines règles
 *    déjà traduites par la communauté), on utilise TOUJOURS la version FR.
 *  - Si une règle n'existe qu'en anglais, on utilise la traduction
 *    manuelle ci-dessous (préparée à partir du contenu réel du fichier
 *    fourni).
 *  - Si un texte anglais apparaît sans traduction connue (JSON différent
 *    à l'avenir, nouvelle règle, etc.), le texte original est conservé
 *    tel quel et signalé dans l'aperçu / l'EPUB avec un marqueur
 *    "[non traduit]" pour rester honnête plutôt que d'inventer.
 */

// --- Détection heuristique du français (accents + mots-outils) ---
export function isFrenchText(s) {
  if (!s) return false;
  const accented = /[àâçéèêëîïôùûüœ]/i.test(s);
  const frenchWords = /\b(les|des|une|dans|avec|pour|est|sont|peut|figurine)\b/i.test(s);
  return accented || frenchWords;
}

// --- Traductions manuelles des règles/compétences 100% anglaises ---
// Clé = "name" de la règle telle qu'elle apparaît dans le JSON.
export const RULE_TRANSLATIONS = {
  "Impeccable Care": {
    name: "Soin Impeccable",
    description:
      "Une des premières choses que l'on enseigne aux élèves est de prendre soin de leur équipement et la bonne manière d'en assurer l'entretien. Une fois cette compétence maîtrisée, ils apprennent à réparer eux-mêmes leurs armes lorsqu'elles sont endommagées ; grâce à cela, ils peuvent acheter ces armes à poudre noire à bas prix et les remettre rapidement en état de marche. Ils peuvent donc se procurer ces armes à un tarif nettement réduit ! Ils peuvent TOUJOURS utiliser le coût réduit des armes à poudre noire indiqué dans leur liste d'équipement de départ, et bénéficient d'un bonus supplémentaire de +2 sur les jets de rareté pour trouver ce type d'armes, car personne ne rechigne à vendre une arme cassée !",
  },
  "Properly Used": {
    name: "Bon Usage",
    description:
      "Les élèves savent utiliser correctement leurs armes, ayant passé de nombreuses heures sur le stand de tir de l'école. C'est considéré comme une bonne occupation du temps entre les cours et c'est recommandé par tous les instructeurs de l'école — après tout, si les élèves se faisaient sans cesse exploser avec leurs propres armes, il y aurait bien peu de diplômés. Lorsque l'on utilise les règles optionnelles d'enrayage, si un 1 est obtenu, relancez un second dé. Sur un résultat de 3+, l'enrayage est ignoré (le tir rate quand même, mais l'arme n'explose PAS).",
  },
  "Proud To A Fault!": {
    name: "Fierté Mal Placée !",
    description:
      "Quiconque étudie à l'École d'Artillerie en est extrêmement fier, tant il est un grand honneur d'y être accepté. Après avoir commencé à utiliser des armes à poudre noire, les élèves reconnaissent la supériorité de ces armes et refusent de s'abaisser à utiliser des armes de tir « inférieures ». Les membres de cette bande n'utilisent JAMAIS d'armes à distance qui ne soient pas des armes à poudre noire (cette interdiction ne s'applique PAS aux Épées Louées ni aux Personae Dramatis, qui sont des auxiliaires n'ayant pas reçu la formation propre à Nuln).",
  },
  "Core": {
    name: "Officielle",
    description: "Publiée dans le livre de règles original de Mordheim.",
  },
  "1a": {
    name: "1a",
    description:
      "Règles GW/Fanatic jugées « officielles » lors de la révision des règles de 2005.",
  },
  "Crack Shot": {
    name: "Tireur Hors Pair",
    description:
      "Experts du pistolet au corps à corps, ils ont un don étrange pour transformer un tir manqué en réussite. Lorsqu'ils utilisent des pistolets en combat rapproché, ils peuvent relancer tout jet pour toucher raté avec le pistolet lors du premier round de combat.",
  },
  "Quick Reload": {
    name: "Rechargement Rapide",
    description:
      "Les Tireurs formés à l'École d'Artillerie s'entraînent jour après jour à de nombreux exercices, notamment ceux qui leur apprennent à recharger rapidement leurs armes dans des conditions de forte pression. Les Tireurs possèdent la compétence Chasseur du livre de règles de Mordheim. Un Tireur qui devient Héros ne tire aucun bénéfice supplémentaire à prendre la compétence Chasseur en plus de celle-ci.",
  },
  "Chef": {
    name: "Chef",
    description:
      "Toute figurine de la bande située à moins de 12 ps de l'Officier d'Artillerie Chevronné peut utiliser sa valeur de Commandement lors des tests de Commandement.",
  },
  "Maître Armurier": {
    name: "Maître Armurier",
    description:
      "Les Instructeurs connaissent toutes les ficelles du métier lorsqu'il s'agit de manier les armes à poudre noire. Tant qu'un Instructeur fait partie de la bande, tous les pistolets bénéficient d'un bonus de portée de +3 ps, et toutes les autres armes à poudre noire d'un bonus de portée de +6 ps.",
  },
};

// --- Traductions des textes d'armes (caractéristique "Spéciale") ---
// Clé = nom de l'objet d'équipement.
export const WEAPON_SPECIAL_TRANSLATIONS = {
  "Dague":
    "+1 à la sauvegarde d'armure ennemie : les dagues ne sont pas les meilleures armes pour percer l'armure d'un adversaire. Une figurine blessée par une dague bénéficie d'un bonus de +1 à sa sauvegarde d'armure, et d'une sauvegarde d'armure de 6+ si elle n'en possède normalement aucune.",
  "Arquebuse":
    "Préparation du tir : une arquebuse nécessite un tour complet pour être rechargée ; vous ne pouvez donc tirer qu'un tour sur deux. Se déplacer ou tirer : vous ne pouvez pas vous déplacer et tirer avec une arquebuse le même tour, sauf pour pivoter sur place afin de faire face à votre cible ou pour vous relever. Modificateur de sauvegarde : les arquebuses sont encore meilleures pour percer les armures que ne le laisse penser leur Force de 4. Un guerrier blessé par une arquebuse doit effectuer sa sauvegarde d'armure avec un malus de -2.",
  "Rondache":
    "Parade : une figurine équipée d'une rondache peut parer le premier coup de chaque round de combat au corps à corps. Lorsque son adversaire obtient une touche, la figurine munie d'une rondache peut lancer 1D6. Si le résultat est supérieur au meilleur score pour toucher de son adversaire, le coup est paré et cette attaque est annulée. Une figurine ne peut pas parer les attaques portées par une Force égale ou supérieure au double de la sienne — elles sont tout simplement trop puissantes pour être arrêtées.",
  "Épée":
    "Parade : les épées offrent un excellent équilibre entre attaque et défense. Une figurine armée d'une épée peut parer les coups. Lorsque son adversaire lance ses dés pour toucher, la figurine armée d'une épée peut lancer un D6. Si le résultat est supérieur au meilleur score pour toucher de son adversaire, le coup est paré et cette attaque est annulée. Une figurine ne peut pas parer les attaques portées par une Force égale ou supérieure au double de la sienne — elles sont tout simplement trop puissantes pour être arrêtées.",
  "Casque":
    "Éviter l'étourdissement : une figurine équipée d'un casque bénéficie d'une sauvegarde spéciale de 4+ sur 1D6 contre le résultat étourdi. Si la sauvegarde est réussie, traitez le résultat étourdi comme un résultat à terre à la place. Cette sauvegarde n'est pas modifiée par la Force de l'adversaire.",
  "Hallebarde":
    "Arme à deux mains : une figurine armée d'une hallebarde ne peut pas utiliser de bouclier, de rondache ou d'arme supplémentaire au corps à corps. Si la figurine possède un bouclier, elle conserve tout de même le bonus de +1 à sa sauvegarde d'armure contre le tir.",
  "Pistol (Brace)":
    "Préparation du tir : un pistolet nécessite un tour complet pour être rechargé ; vous ne pouvez donc tirer qu'un tour sur deux. Si vous possédez une paire de pistolets (c'est-à-dire deux), vous pouvez tirer chaque tour. Modificateur de sauvegarde : les pistolets sont encore meilleurs pour percer les armures que ne le laisse penser leur Force de 4. Une figurine blessée par un pistolet doit effectuer sa sauvegarde d'armure avec un malus de -2. Corps à corps : les pistolets peuvent être utilisés au corps à corps aussi bien qu'au tir. Une figurine armée d'un pistolet et d'une autre arme de corps à corps gagne +1 Attaque, résolue à une Force de 4 avec un malus de -2 à la sauvegarde. Cette attaque bonus ne peut être utilisée qu'une seule fois par combat. Si vous tirez avec une paire de pistolets, votre figurine peut combattre avec 2 Attaques au premier round du combat au corps à corps. Ces attaques sont résolues avec la Capacité de Combat de la figurine comme n'importe quelle attaque de corps à corps normale, et peuvent donc être parées. Les touches réussies sont résolues à Force 4 avec un malus de -2 à la sauvegarde, quelle que soit la Force du tireur.",
  "Pistols":
    "Préparation du tir : un pistolet nécessite un tour complet pour être rechargé ; vous ne pouvez donc tirer qu'un tour sur deux. Si vous possédez une paire de pistolets (c'est-à-dire deux), vous pouvez tirer chaque tour. Modificateur de sauvegarde : les pistolets sont encore meilleurs pour percer les armures que ne le laisse penser leur Force de 4. Une figurine blessée par un pistolet doit effectuer sa sauvegarde d'armure avec un malus de -2. Corps à corps : les pistolets peuvent être utilisés au corps à corps aussi bien qu'au tir. Une figurine armée d'un pistolet et d'une autre arme de corps à corps gagne +1 Attaque, résolue à une Force de 4 avec un malus de -2 à la sauvegarde. Cette attaque bonus ne peut être utilisée qu'une seule fois par combat. Si vous tirez avec une paire de pistolets, votre figurine peut combattre avec 2 Attaques au premier round du combat au corps à corps. Ces attaques sont résolues avec la Capacité de Combat de la figurine comme n'importe quelle attaque de corps à corps normale, et peuvent donc être parées. Les touches réussies sont résolues à Force 4 avec un malus de -2 à la sauvegarde, quelle que soit la Force du tireur.",
};

// --- Traductions de noms courts (unités, groupes, libellés) ---
export const NAME_TRANSLATIONS = {
  "Warband Rating": "Valeur de Bande (WR)",
  "gc": "po",
  "Characteristic Increases": "Augmentations de Caractéristiques",
  "Human max": "Maximum Humain",
  "Instructor": "Instructeur",
  "Pistol (Brace)": "Pistolet (paire)",
  "Pistols": "Pistolets",
  "Senior Gunnery Officer": "Officier d'Artillerie Chevronné",
  "Serious Injury": "Blessure Grave",
  "Sons of the Guns": "Fils des Armes à Feu",
  "Underclassmen": "Élève",
  "Uncategorized": "Non classé",
  "Promue": "Promu(e)",
  "Experience": "Expérience",
  "Équipement": "Équipement",
  "Compétences": "Compétences",
};

// --- Traductions de valeurs de caractéristiques d'armes ---
export const VALUE_TRANSLATIONS = {
  "As User": "Comme l'utilisateur",
  "As user": "Comme l'utilisateur",
};

/**
 * Normalise une clé de caractéristique liée aux "Augmentations de
 * Caractéristiques" (ex: "1+ CT" -> "+1 CT").
 */
export function normalizeStatBump(name) {
  const m = name.match(/^(-?)1\+?\s*([A-Za-zÀ-ÿ]+)$/);
  if (m) {
    const sign = m[1] === "-" ? "-" : "+";
    return `${sign}1 ${m[2]}`;
  }
  return name;
}


// --- Compétences de base BSData/mordheim (Combat, Tir, Vitesse, Force,
// Académiques, Cavalerie) — 49 compétences communes à (quasi) toutes les
// bandes, traduites depuis https://github.com/BSData/mordheim (100% EN).
Object.assign(RULE_TRANSLATIONS, {
  "Sorcery": {
    name: "Sorcellerie",
    description:
      "Cette compétence ne peut être prise que par des Héros capables de lancer des sorts. Un guerrier possédant cette compétence bénéficie d'un bonus de +1 sur ses jets pour déterminer s'il parvient à lancer un sort. Notez que les Sœurs de Sigmar et les Prêtres Guerriers ne peuvent pas prendre cette compétence.",
  },
  "Battle Tongue": {
    name: "Voix de Commandement",
    description:
      "Cette compétence ne peut être choisie que par un chef. Le guerrier a entraîné sa bande à suivre de brefs ordres aboyés. Cela augmente de 6 ps la portée de sa capacité de Chef. Notez que les chefs Morts-Vivants ne peuvent pas prendre cette compétence.",
  },
  "Streetwise": {
    name: "Débrouillardise",
    description:
      "Un guerrier possédant cette compétence a de bons contacts et sait où se procurer des objets rares. Il peut ajouter +2 au jet déterminant ses chances de trouver de tels objets.",
  },
  "Haggle": {
    name: "Marchandage",
    description:
      "Il peut déduire 2D6 pièces d'or du prix d'un objet (jusqu'à un coût minimum de 1 po), une fois par séquence d'après-bataille.",
  },
  "Scribe": {
    name: "Scribe",
    description:
      "Le guerrier est naturellement doué pour l'écriture et la confection de parchemins. Tout guerrier capable de lancer des sorts ou d'utiliser des prières peut prendre cette compétence. Elle lui permet de préparer un parchemin avant la bataille et d'y inscrire un unique sort ou une prière qu'il maîtrise. Le parchemin peut être utilisé juste avant qu'il ne lance ce sort ou cette prière, et accorde à l'invocateur un bonus de +2 à son jet de difficulté. Une fois utilisé, le parchemin tombe en poussière et devient inutilisable. Les parchemins non utilisés ne peuvent pas être conservés d'une bataille à l'autre.",
  },
  "Wyrdstone Hunter": {
    name: "Chasseur de Pierre Magique",
    description:
      "Le guerrier a un don étrange pour dénicher les éclats cachés de pierre magique. Si un Héros possédant cette compétence explore les ruines pendant la phase d'exploration, vous pouvez relancer un dé sur la table d'Exploration. Le second résultat est définitif.",
  },
  "Warrior Wizard": {
    name: "Sorcier Guerrier",
    description:
      "Cette compétence ne peut être prise que par des lanceurs de sorts. Les pouvoirs mentaux du sorcier lui permettent de porter une armure tout en continuant à lancer des sorts.",
  },
  "Mind Focus": {
    name: "Concentration",
    description:
      "Le guerrier possède une grande force mentale qui lui permet de se concentrer au-delà des capacités de la plupart des hommes. Cette compétence ne peut être prise que par un guerrier capable d'utiliser des prières ou de lancer des sorts. Lorsqu'il utilise un sort ou une prière, le guerrier possédant cette compétence peut relancer un des dés utilisés pour son jet de difficulté.",
  },
  "Tactician": {
    name: "Tacticien",
    description:
      "Le guerrier a un grand sens tactique et sait souvent trouver les meilleures positions pour que ses hommes affrontent l'assaut ennemi. Cette compétence ne peut être prise que par le chef de la bande. Dans n'importe quel scénario, le chef de bande peut repositionner ses guerriers une fois que son adversaire a terminé son déploiement, et peut même les faire avancer jusqu'à 12 ps sur la table au lieu de 8 ps.",
  },
  "Hunch": {
    name: "Intuition",
    description:
      "Le guerrier a un don étrange pour placer ses hommes au bon endroit au bon moment, comme s'il sentait le danger par instinct. Cette compétence ne peut être prise que par le chef de bande. Dans n'importe quel scénario, le chef de bande peut positionner jusqu'à 3 de ses guerriers capables de gagner de l'expérience dans n'importe quel bâtiment en ruine du champ de bataille, à au moins 12 ps d'une figurine ennemie et hors de la zone de déploiement adverse.",
  },
  "Magical Aptitude": {
    name: "Aptitude Magique",
    description:
      "Cette compétence ne peut être prise que par un guerrier capable de lancer des sorts. Elle ne peut pas être utilisée par les Sœurs de Sigmar ou les Prêtres Guerriers. Le guerrier a une grande aptitude pour la magie et peut se dépasser pour produire une véritable tempête de sorts. Le guerrier peut tenter de lancer deux sorts par tour, tant qu'il n'est pas engagé au corps à corps. Après avoir tenté le premier sort, il doit réussir un test d'Endurance. S'il le réussit, il peut tenter un second sort ce tour-ci, ou même lancer le même sort une seconde fois. S'il échoue, il doit immédiatement effectuer un jet sur la table des blessures, sans sauvegarde possible, en traitant les résultats « hors de combat » comme des résultats « étourdi ».",
  },
  "Arcane Lore": {
    name: "Savoir Arcanique",
    description:
      "Les Chasseurs de Sorcières, les Sœurs de Sigmar et les Prêtres Guerriers ne peuvent pas posséder cette compétence. Tout guerrier possédant cette compétence peut apprendre la Magie Mineure s'il possède un Tome de Magie.",
  },
  "Beast Handler": {
    name: "Dresseur",
    description:
      "Cette compétence est particulièrement utile si des animaux non montés doivent être inclus dans une bande. Elle doit être prise pour un animal précis et peut être prise plusieurs fois pour différents animaux. Elle représente la connaissance des soins généraux et du bien-être de l'animal, ainsi que des techniques de dressage. Un guerrier possédant cette compétence a un effet bénéfique sur les animaux dont il a la charge. Si un guerrier possède la compétence de Dressage pour un animal particulier, cet animal peut utiliser son Commandement s'il se trouve à moins de 6 ps. Si le chef de la bande est également à proximité, un joueur peut choisir lequel des deux Commandements utiliser, sauf si l'animal est stupide, auquel cas seul le Commandement du dresseur peut être utilisé. De plus, les animaux têtus au contact socle à socle avec leur dresseur ignorent les effets de la Ténacité. Ceci compte comme une compétence académique.",
  },
  "Step Aside": {
    name: "Esquive Latérale",
    description:
      "Chaque fois qu'il subit une blessure au corps à corps, il peut effectuer une sauvegarde supplémentaire de 5+. Cette sauvegarde n'est jamais modifiée et se fait après toutes les autres sauvegardes d'armure.",
  },
  "Strike To Injure": {
    name: "Frappe Précise",
    description:
      "Ajoutez +1 à tous les jets sur la table des blessures causées par cette figurine au corps à corps.",
  },
  "Expert Swordsman": {
    name: "Épéiste Expert",
    description:
      "La figurine peut relancer toutes ses attaques ratées si elle utilise une épée pendant la phase de corps à corps du tour où elle charge. Notez que cela ne s'applique qu'aux épées normales ou aux lames pleureuses, et non aux épées à deux mains ou à toute autre arme.",
  },
  "Web Of Steel": {
    name: "Toile d'Acier",
    description:
      "La figurine bénéficie d'un bonus de +1 à tous ses jets sur les tables de Coups Critiques au corps à corps.",
  },
  "Weapons Traning": {
    name: "Entraînement aux Armes",
    description:
      "La figurine peut utiliser n'importe quelle arme de corps à corps qu'elle trouve, pas seulement celles disponibles dans ses options d'équipement.",
  },
  "Combat Master": {
    name: "Maître du Combat",
    description:
      "Lorsqu'il affronte plusieurs adversaires au corps à corps, il gagne une Attaque supplémentaire à chaque phase de corps à corps. De plus, ce guerrier est immunisé contre les tests de « Seul contre tous ».",
  },
  "Trick Shooter": {
    name: "Tireur Habile",
    description:
      "Il ignore tous les modificateurs de couvert lorsqu'il utilise une arme de tir.",
  },
  "Nimble": {
    name: "Agile",
    description:
      "Le guerrier peut se déplacer et tirer avec des armes normalement utilisables uniquement si le tireur n'a pas bougé. Notez que cette compétence ne peut pas être combinée avec la compétence Tir Rapide.",
  },
  "Weapons Expert": {
    name: "Expert en Armement",
    description:
      "Il peut utiliser n'importe quelle arme de tir qu'il trouve, pas seulement celles disponibles dans la liste de sa bande.",
  },
  "Eagle Eyes": {
    name: "Yeux d'Aigle",
    description:
      "Il ajoute +6 ps à la portée de toute arme de tir qu'il utilise.",
  },
  "Pistolier": {
    name: "Pistolier",
    description:
      "Le guerrier est un expert dans le maniement de tous types de pistolets. S'il est équipé d'une paire de pistolets, quel qu'en soit le type (y compris les pistolets-arbalètes), il peut tirer deux fois pendant la phase de Tir (les règles normales de rechargement s'appliquent). S'il ne possède qu'un seul pistolet, il peut tirer avec dès le tour où il l'a rechargé.",
  },
  "Quick Shot": {
    name: "Tir Rapide",
    description:
      "Le guerrier peut tirer deux fois par tour avec un arc ou une arbalète (mais pas avec un pistolet-arbalète).",
  },
  "Hunter": {
    name: "Chasseur",
    description:
      "Il peut tirer chaque tour avec une arquebuse ou une carabine longue de Hochland.",
  },
  "Knife Fighter": {
    name: "Lanceur de Couteaux",
    description:
      "Le guerrier est un expert incontesté du maniement des couteaux et étoiles de lancer. Il peut lancer un maximum de trois de ces projectiles pendant sa phase de tir et peut répartir ses tirs entre plusieurs cibles à portée comme il le souhaite. Notez que cette compétence ne peut pas être combinée avec la compétence Tir Rapide.",
  },
  "Scale Sheer Surfaces": {
    name: "Escalade",
    description:
      "Un guerrier possédant cette compétence peut escalader même les murs ou clôtures les plus hauts avec aisance. Il peut monter ou descendre une hauteur égale au double de son Mouvement normal, sans avoir besoin d'effectuer de test d'Initiative pour cela.",
  },
  "Dodge": {
    name: "Esquive",
    description:
      "Il peut éviter tout tir d'une arme de missile sur un jet de D6 de 5+. Notez que ce jet est effectué contre les tirs dès qu'une touche est obtenue, pour déterminer si le guerrier l'esquive ou non, avant le jet pour blesser et avant tout effet d'autres compétences ou équipements (comme les porte-bonheur).",
  },
  "Jump Up": {
    name: "Prompt Rétablissement",
    description:
      "Le guerrier peut ignorer les résultats « à terre » lors des jets sur la table des blessures, sauf s'il est mis à terre grâce à une sauvegarde réussie due au port d'un casque, ou parce qu'il possède la règle spéciale Insensible à la Douleur.",
  },
  "Lightning Reflexes": {
    name: "Réflexes Foudroyants",
    description:
      "Si le guerrier est chargé, il « frappe en premier » contre ceux qui l'ont chargé ce tour-ci. Comme le ou les chargeurs bénéficient normalement aussi de « frapper en premier » (du fait de la charge), l'ordre des attaques entre le ou les chargeurs et le guerrier possédant cette compétence est déterminé en comparant les valeurs d'Initiative.",
  },
  "Acrobat": {
    name: "Acrobate",
    description:
      "Il peut tomber ou sauter d'une hauteur allant jusqu'à 12 ps sans subir de dommage s'il réussit un simple test d'Initiative, et peut relancer les jets de Charge Plongeante ratés. Il ne peut cependant effectuer une charge plongeante que depuis une hauteur maximale de 6 ps.",
  },
  "Leap": {
    name: "Bond",
    description:
      "Le guerrier peut bondir de D6 ps pendant la phase de mouvement, en plus de son mouvement normal. Il peut se déplacer et bondir, courir et bondir, ou charger et bondir, mais ne peut bondir qu'une seule fois par tour. Un guerrier bondissant peut sauter par-dessus des figurines adverses de taille humaine, y compris des ennemis, et des obstacles de moins de 1 ps de haut, sans pénalité. Le bond peut aussi être utilisé pour franchir un vide, mais dans ce cas vous devez engager le guerrier dans le bond avant de lancer le dé déterminant la distance sautée. S'il ne parvient pas à traverser entièrement, il tombe dans le vide.",
  },
  "Sprint": {
    name: "Sprint",
    description:
      "Le guerrier peut tripler sa valeur de Mouvement lorsqu'il court ou charge, au lieu de la doubler comme c'est normalement le cas.",
  },
  "Mighty Blow": {
    name: "Coup Puissant",
    description:
      "Le guerrier sait utiliser sa force au maximum de son efficacité et bénéficie d'un bonus de +1 en Force au corps à corps (hors pistolets). Comme sa Force sert de base pour les armes de corps à corps, ce bonus s'applique à toutes ces armes.",
  },
  "Pit Fighter": {
    name: "Combattant de Fosse",
    description:
      "Le guerrier a appris à combattre dans des espaces restreints lors de son passage dans les dangereuses fosses de combat de l'Empire. Expert du combat en milieu confiné, il bénéficie de +1 en CC et +1 en Attaques lorsqu'il combat à l'intérieur d'un bâtiment ou de ruines.",
  },
  "Resilient": {
    name: "Robuste",
    description:
      "Déduisez -1 à la Force de toutes les attaques le touchant au corps à corps. Cela n'affecte pas les modificateurs de sauvegarde d'armure.",
  },
  "Fearsome": {
    name: "Effrayant",
    description:
      "La figurine inspire la peur aux figurines adverses.",
  },
  "Strongman": {
    name: "Costaud",
    description:
      "Il peut utiliser une arme à deux mains sans la pénalité habituelle de toujours frapper en dernier. Déterminez l'ordre des attaques comme pour toute autre arme.",
  },
  "Unstoppable Charge": {
    name: "Charge Irrésistible",
    description:
      "Lorsqu'il charge, le guerrier est presque impossible à arrêter. Il bénéficie d'un bonus de +1 en Capacité de Combat lorsqu'il charge.",
  },
  "Ride": {
    name: "Monte",
    description:
      "Cette compétence est indispensable si un cavalier souhaite combattre monté. Elle est spécifique à un type d'animal donné et doit être acquise à nouveau si le guerrier souhaite pouvoir monter un animal différent. Par exemple, un guerrier possédant la compétence Monte (Cheval) devrait acquérir la compétence Monte (Cheval de Guerre) pour pouvoir chevaucher une monture aussi fougueuse.",
  },
  "Cavalry Commander": {
    name: "Commandant de Cavalerie",
    description:
      "Les héros montés offrent un spectacle impressionnant. Grâce à un bon point de vue, ils peuvent voir (et être vus) bien plus facilement que s'ils étaient à pied. Si le chef de la bande possède cette compétence et est monté, ajoutez 6 ps supplémentaires à la distance à laquelle les autres guerriers de la bande peuvent utiliser son Commandement. Ceci s'ajoute à tout autre bonus augmentant la portée d'influence du chef.",
  },
  "Trick Riding": {
    name: "Voltige",
    description:
      "En se tenant athlétiquement sur le côté de sa monture, un cavalier se rend plus difficile à toucher. Tant qu'un cavalier pratique la voltige, toutes les attaques de tir contre lui subissent un malus de -1 pour toucher, en plus des autres modificateurs. Le cavalier doit déclarer qu'il pratique la voltige avant de se déplacer. Il doit ensuite réussir un test d'Initiative pour se déplacer de sa distance complète. S'il échoue, il perd le contrôle de sa monture et doit immédiatement lancer sur la table Oh là là !. Cette compétence ne peut pas être utilisée avec une armure lourde en raison de l'agilité requise. De plus, la voltige nécessite les deux mains : la figurine ne peut donc pas utiliser de bouclier ni d'arme de tir en l'utilisant. Les guerriers sans la compétence Monte ne peuvent pas utiliser cette compétence.",
  },
  "Combat Riding": {
    name: "Combat Monté",
    description:
      "Le cavalier a entraîné sa monture à utiliser sa masse pour piétiner tout ennemi non monté se trouvant devant elle. Un guerrier possédant cette compétence peut effectuer une attaque supplémentaire à Force 4 lorsqu'il charge un adversaire non monté. Lors des rounds suivants, ou s'il est chargé par des guerriers ennemis, le cavalier combat normalement.",
  },
  "Evade": {
    name: "Dérobade",
    description:
      "Le cavalier a entraîné sa monture à se dérober d'un côté à l'autre au combat, déstabilisant son adversaire. Un cavalier possédant cette compétence frappe toujours en premier au corps à corps contre des adversaires non montés. Lorsqu'il est chargé par un adversaire, ou combat un ennemi ayant également droit de frapper en premier, les attaques sont résolues par ordre d'Initiative. En cas d'égalité, la figurine ayant le plus d'expérience frappe en premier. Les guerriers sans la compétence Monte ne peuvent pas utiliser cette compétence.",
  },
  "Running Dismount": {
    name: "Mise à Pied Rapide",
    description:
      "Le cavalier est capable de descendre rapidement de sa monture. Il peut chevaucher jusqu'à la distance de mouvement normale de sa monture, puis mettre pied à terre immédiatement. Aucun mouvement ou tir supplémentaire n'est alors possible. Cette compétence peut être utilisée pour entrer en contact avec l'ennemi, ce qui compte comme une Charge Plongeante depuis une hauteur de 2 ps — toutes les règles habituelles des charges plongeantes s'appliquent. Notez que le cavalier compte alors comme démonté et ne bénéficie plus d'aucune assistance de sa monture. Les guerriers sans la compétence Monte ne peuvent pas utiliser cette compétence.",
  },
  "Athletic Mount": {
    name: "Monture Athlétique",
    description:
      "Sans rompre sa foulée, le guerrier est capable de bondir sur le dos de sa monture et de la lancer immédiatement au galop. Une fois le guerrier en selle, la monture peut effectuer un mouvement de course ou de charge normalement. Le guerrier doit se trouver à moins de la moitié de sa distance de mouvement complète de sa monture pour utiliser cette compétence.",
  },
  "Horse Archer": {
    name: "Archer Monté",
    description:
      "Le cavalier a appris les techniques des nomades des steppes et peut tirer depuis une monture au galop. Il peut tirer sur un arc de 360 degrés tout en étant monté, et peut tirer même lorsque sa monture court ; le tir subit cependant un malus de -1 pour toucher, en plus de tous les autres modificateurs habituels. Les guerriers sans la compétence Monte ne peuvent pas utiliser cette compétence.",
  },
  "Mounted Combat Master": {
    name: "Maître du Combat Monté",
    description:
      "Le cavalier est particulièrement doué au combat contre un adversaire monté. Si la figurine combat montée contre un adversaire monté et parvient à le blesser, la figurine blessée doit ajouter +1 à son jet sur la table Oh là là !.",
  },
});


// --- Règles d'équipement BSData/mordheim (armes uniques, traits d'armes
// génériques type Peu Maniable/Allonge/Poison, armures spéciales) — 37
// règles traduites depuis https://github.com/BSData/mordheim (100% EN).
Object.assign(RULE_TRANSLATIONS, {
  "Improved Criticals": {
    name: "Critiques Améliorés",
    description:
      "Cette épée inflige un coup critique sur un jet pour blesser de 5 ou 6.",
  },
  "Ienh-Khain": {
    name: "Ienh-Khain",
    description:
      "Ienh-Khain (la Main de Khaine). Ienh-Khain est une épée à un tranchant incroyablement longue, qu'Aenur manie avec une adresse consommée. Cette épée permet à Aenur de parer ; elle ajoute +1 à sa Force et inflige un coup critique sur un jet de 5-6 pour blesser.",
  },
  "Incredible Force": {
    name: "Force Incroyable",
    description:
      "Aucune sauvegarde d'armure n'est autorisée contre les blessures causées par une Masse à Chaîne, et toute touche blessant avec succès inflige 1D3 blessures au lieu d'une seule.",
  },
  "Random:": {
    name: "Aléatoire",
    description:
      "Le premier tour où il commence à faire tournoyer la Masse à Chaîne, la figurine est déplacée de 2D6 ps dans une direction choisie par le joueur qui la contrôle. Lors de ses phases de Mouvement suivantes, lancez un D6 pour déterminer ce que fait la figurine : 1) La figurine est mise hors de combat. Lors du jet de Blessure après la partie, un résultat de 1 à 3 signifie qu'elle est hors jeu de façon permanente, au lieu du habituel 1-2. 2-5) La figurine se déplace de 2D6 ps dans une direction choisie par le joueur qui la contrôle. 6) La figurine se déplace de 2D6 ps dans une direction aléatoire (si le joueur possède un dé de dispersion). Si la figurine maniant la Masse à Chaîne entre en contact avec une autre figurine (amie ou ennemie), elle compte comme chargeant au corps à corps, et reste engagée jusqu'à sa prochaine phase de Mouvement. Les adversaires souhaitant attaquer une figurine maniant une Masse à Chaîne subissent un malus de -1 pour toucher, devant esquiver la masse tournoyante pour s'approcher suffisamment. Le porteur de la Masse à Chaîne ne peut pas être retenu au corps à corps et se déplacera automatiquement même s'il commence sa phase de Mouvement au contact socle à socle d'une autre figurine. Si la figurine entre en contact avec un bâtiment, un mur ou un autre obstacle, elle est automatiquement mise hors de combat. Elle ignore les règles spéciales d'Animosité.",
  },
  "CumbersomE": {
    name: "Encombrant",
    description:
      "Une figurine équipée de cette arme ne peut porter aucune autre arme ni équipement, à l'exception des Champignons Fous, qu'elle doit obligatoirement posséder.",
  },
  "Unwieldy:": {
    name: "Peu Maniable",
    description:
      "À la fin de la bataille, le joueur qui la contrôle doit effectuer un jet de Blessure pour chaque figurine ayant utilisé une Masse à Chaîne, comme si elle avait été mise hors de combat. Si la figurine a réellement été mise hors de combat normalement, effectuez un seul jet de Blessure.",
  },
  "Hand to Hand": {
    name: "Corps à Corps",
    description:
      "Les pistolets peuvent être utilisés au corps à corps aussi bien qu'au tir. Une figurine armée d'un pistolet et d'une autre arme de corps à corps gagne +1 Attaque, résolue à Force 4 avec un malus de -2 à la sauvegarde. Cette attaque bonus ne peut être utilisée qu'une seule fois par combat. Si vous tirez avec une paire de pistolets, votre figurine peut combattre avec 2 Attaques au premier round du combat au corps à corps. Ces attaques sont résolues avec la Capacité de Combat de la figurine comme n'importe quelle attaque de corps à corps normale, et peuvent donc être parées. Les touches réussies sont résolues à Force 4 avec un malus de -2 à la sauvegarde, quelle que soit la Force du tireur.",
  },
  "accuracy": {
    name: "Précision",
    description:
      "Un pistolet de duel est conçu pour la précision, un duelliste expérimenté étant capable de toucher une pièce de monnaie à vingt pas. Tous les tirs et attaques de corps à corps effectués avec un pistolet de duel bénéficient d'un bonus de +1 pour toucher.",
  },
  "Hand-to-hand": {
    name: "Corps à Corps",
    description:
      "Les pistolets peuvent être utilisés au corps à corps aussi bien qu'au tir. Une figurine armée d'un pistolet et d'une autre arme de corps à corps gagne +1 Attaque, résolue à Force 4 avec un malus de -2 à la sauvegarde. Cette attaque bonus ne peut être utilisée qu'une seule fois par combat. Si vous tirez avec une paire de pistolets, votre figurine peut combattre avec 2 Attaques au premier round du combat au corps à corps. Ces attaques sont résolues avec la Capacité de Combat de la figurine comme n'importe quelle attaque de corps à corps normale, et peuvent donc être parées. Les touches réussies sont résolues à Force 4 avec un malus de -2 à la sauvegarde, quelle que soit la Force du tireur.",
  },
  "Barding": {
    name: "Barde",
    description:
      "La barde est à un cheval ce que l'armure légère ou lourde est à un humain. Elle couvre la robe de la monture et, dans certains cas, sa tête. Une figurine montée sur un cheval bardé reçoit un bonus supplémentaire de +1 à sa sauvegarde d'armure (+2 au lieu de +1 pour le fait d'être monté). De plus, une monture portant une barde n'est tuée que sur un jet de D6 de 1 si la figurine est mise hors de combat. Chevaux de guerre uniquement.",
  },
  "Random": {
    name: "Aléatoire",
    description:
      "Le premier tour où il commence à faire tournoyer la Masse à Chaîne, la figurine est déplacée de 2D6 ps dans une direction choisie par le joueur qui la contrôle. Lors de ses phases de Mouvement suivantes, lancez un D6 pour déterminer ce que fait la figurine : 1) La figurine est mise hors de combat. Lors du jet de Blessure après la partie, un résultat de 1 à 3 signifie qu'elle est hors jeu de façon permanente, au lieu du habituel 1-2. 2-5) La figurine se déplace de 2D6 ps dans une direction choisie par le joueur qui la contrôle. 6) La figurine se déplace de 2D6 ps dans une direction aléatoire (si le joueur possède un dé de dispersion). Si la figurine maniant la Masse à Chaîne entre en contact avec une autre figurine (amie ou ennemie), elle compte comme chargeant au corps à corps, et reste engagée jusqu'à sa prochaine phase de Mouvement. Les adversaires souhaitant attaquer une figurine maniant une Masse à Chaîne subissent un malus de -1 pour toucher, devant esquiver la masse tournoyante pour s'approcher suffisamment. Le porteur de la Masse à Chaîne ne peut pas être retenu au corps à corps et se déplacera automatiquement même s'il commence sa phase de Mouvement au contact socle à socle d'une autre figurine. Si la figurine entre en contact avec un bâtiment, un mur ou un autre obstacle, elle est automatiquement mise hors de combat. Elle ignore les règles spéciales d'Animosité.",
  },
  "Cumbersome": {
    name: "Encombrant",
    description:
      "Une figurine équipée de cette arme ne peut porter aucune autre arme ni équipement, à l'exception des Champignons Fous, qu'elle doit obligatoirement posséder.",
  },
  "Unwieldy": {
    name: "Peu Maniable",
    description:
      "À la fin de la bataille, le joueur qui la contrôle doit effectuer un jet de Blessure pour chaque figurine ayant utilisé une Masse à Chaîne, comme si elle avait été mise hors de combat. Si la figurine a réellement été mise hors de combat normalement, effectuez un seul jet de Blessure.",
  },
  "Shot": {
    name: "Tir en Ligne",
    description:
      "Lorsque votre figurine tire avec le tromblon, tracez une ligne de 16 ps de long et 1 ps de large dans n'importe quelle direction depuis le tireur (la ligne doit être parfaitement droite). Toutes les figurines se trouvant sur son passage sont automatiquement touchées par un tir de Force 3.",
  },
  "Fire Once": {
    name: "Un Seul Tir",
    description:
      "Un tromblon est très long à recharger, il ne peut donc être tiré qu'une seule fois par bataille.",
  },
  "Price Modifier": {
    name: "Modificateur de Prix",
    description:
      "+ 3D6",
  },
  "Fire twice at half range": {
    name: "Tir Double à Demi-Portée",
    description:
      "Un frondeur peut tirer deux fois pendant la phase de tir s'il ne se déplace pas pendant la phase de mouvement. Il ne peut cependant pas tirer au-delà de la demi-portée (9 ps) s'il tire deux fois. S'il tire deux fois, chaque tir subit un malus de -1 pour toucher.",
  },
  "Squig Prodder": {
    name: "Aiguillon à Squig",
    description:
      "Un Gobelin possédant un aiguillon à squig peut maintenir tous les Squigs des Cavernes à moins de 12 ps sous le coup de la règle spéciale de l'entrée Squig des Cavernes. De plus, un aiguillon à squig est traité exactement comme une lance au corps à corps.",
  },
  "Holy Weapon": {
    name: "Arme Sacrée",
    description:
      "Le marteau de guerre bénéficie d'un bonus de +1 sur tous les jets pour blesser contre les figurines Possédées ou Morts-Vivantes. Notez qu'un 6 avant modificateurs reste nécessaire pour infliger un coup critique. Seules les Matriarches et Sœurs Supérieures peuvent porter deux marteaux de guerre sigmarites.",
  },
  "Mastercrafted": {
    name: "Chef-d'œuvre",
    description:
      "Les attaques effectuées avec cette épée longue cathayenne accordent à son porteur +1 en Initiative et +1 en Capacité de Combat.",
  },
  "Dangerous": {
    name: "Dangereux",
    description:
      "Si le jet pour toucher est un 1 naturel, le bolas assomme le lanceur d'une touche de Force 3.",
  },
  "Entangle": {
    name: "Entrave",
    description:
      "Une figurine touchée par un bolas n'est pas blessée, mais se retrouve entravée : elle est incapable de se déplacer et subit un malus de -2 en Capacité de Combat au corps à corps. La figurine peut tout de même tirer et peut tenter de se libérer pendant la phase de récupération. Si elle obtient 4+ sur un D6, elle est libérée et peut se déplacer et combattre normalement.",
  },
  "Javelins/Harpoons": {
    name: "Javelots/Harpons",
    description:
      "Les javelots sont de courtes lances de jet spécialement équilibrées pour parcourir une distance appréciable. Bien que leur portée soit bien plus réduite que celle d'une flèche, ils peuvent infliger des dégâts considérables lorsqu'ils sont lancés par une personne d'une grande Force.",
  },
  "Claw of the Old Ones": {
    name: "Griffe des Anciens",
    description:
      "Il s'agit d'une arme très ancienne, forgée dans un métal étrange insensible à l'âge et à la corrosion. Les pouvoirs de cet artefact ne peuvent être libérés que par un rituel connu d'une poignée d'Amazones seulement. La lame de cette arme rougeoie d'une blancheur incandescente et peut trancher l'armure comme si elle n'était que du papier.",
  },
  "Poison": {
    name: "Poison",
    description:
      "Les aiguilles tirées par une sarbacane sont enduites d'un venin dont les effets sont très proches de ceux du Lotus Noir (si vous obtenez un 6 au jet pour toucher, la victime est automatiquement blessée). Une sarbacane ne peut jamais infliger de coup critique.",
  },
  "Stealthy": {
    name: "Furtif",
    description:
      "Un Gobelin armé d'une sarbacane peut tirer alors qu'il est caché sans révéler sa position à l'ennemi. La figurine ciblée peut effectuer un test d'Initiative pour tenter de repérer le Gobelin tireur. Si le test réussit, le Gobelin ne compte plus comme caché.",
  },
  "Toughened Leathers": {
    name: "Cuirs Renforcés",
    description:
      "Les cuirs renforcés fonctionnent exactement comme une armure légère, offrant une sauvegarde d'armure de 6+, mais ne peuvent pas être combinés avec les effets d'une autre armure, à l'exception d'un casque ou d'une rondache. Les cuirs renforcés ne peuvent pas être revendus aux Comptoirs Marchands ; leur seule odeur suffit à faire fuir même l'acheteur le plus désespéré !",
  },
  "Strike First": {
    name: "Frappe en Premier",
    description:
      "Une figurine maniant une pique frappe en premier lors du premier round de combat, même si elle est chargée par une figurine armée d'une lance. Après ce premier round, les coups sont résolus par ordre d'Initiative. La figurine peut changer pour une arme de corps à corps normale après le premier round.",
  },
  "Reach": {
    name: "Allonge",
    description:
      "En raison de sa longueur considérable, une figurine possédant une pique peut attaquer une autre figurine jusqu'à 3 ps de distance sans être engagée directement dans la mêlée.",
  },
  "Human sized": {
    name: "Taille Humaine",
    description:
      "Seules les créatures de taille humaine ou plus grandes peuvent utiliser des piques. Les Skavens, Skinks, Halflings, etc. ne le peuvent pas.",
  },
  "One Attack, No shields": {
    name: "Une Seule Attaque, Sans Bouclier",
    description:
      "Les piques doivent être utilisées à deux mains ; la figurine ne peut donc pas tirer parti d'un bouclier ou d'une rondache. De plus, une seule Attaque est autorisée, quel que soit le nombre indiqué sur le profil du porteur.",
  },
  "Thrown Weapon": {
    name: "Arme de Jet",
    description:
      "Les figurines utilisant des poinçons de marin ne subissent aucune pénalité liée à la distance, mais subissent tout de même un malus de -1 pour toucher si elles les utilisent après s'être déplacées ce tour-ci.",
  },
  "Sunbolt": {
    name: "Rayon Solaire",
    description:
      "Le porteur du bâton solaire peut décharger, pendant la phase de tir, un rayon d'énergie semblable aux rayons du soleil. Le Rayon Solaire a une portée de 12 ps et touche à Force 4. Hormis les sauvegardes de protection et d'esquive, un Rayon Solaire ignore les sauvegardes d'armure et les pénalités de longue portée.",
  },
  "Starblade": {
    name: "Lame Stellaire",
    description:
      "Parmi les nombreuses armes étranges que possèdent les Amazones, la Lame Stellaire est façonnée comme une dague amazonienne. Elle est généralement peinte de couleurs exotiques et recèle des propriétés magiques qui accroissent les prouesses martiales des Amazones. C'est une arme de corps à corps qui attaque comme une dague, mais qui peut parer la première touche réussie de chaque combat sur un résultat de 4+.",
  },
  "Starsword": {
    name: "Épée Stellaire",
    description:
      "Il s'agit d'une épée ancienne et légendaire capable de trancher l'armure comme si elle n'était qu'une simple feuille. Cette épée confère un bonus de +1 en Force et ignore toutes les sauvegardes d'armure, à l'exception des sauvegardes de protection et d'esquive.",
  },
  "Cannot be parried": {
    name: "Ne Peut Être Paré",
    description:
      "Le fouet d'acier est une arme flexible que les Prêtresses manient avec une grande expertise. Toute tentative de parer ses coups est vaine. Une figurine attaquée par un fouet d'acier ne peut pas effectuer de parade avec une épée ou une rondache.",
  },
  "Whipcrack": {
    name: "Claquement de Fouet",
    description:
      "Lorsque le porteur charge, il gagne +1 Attaque pour ce tour. Cette attaque bonus s'ajoute après toute autre modification. Lorsque le porteur est chargé, il gagne +1 Attaque qu'il ne peut utiliser que contre le chargeur. Cette attaque supplémentaire « frappe en premier ». Si le porteur est chargé simultanément par deux adversaires ou plus, il ne reçoit toujours qu'un total de +1 Attaque. Si le porteur utilise deux fouets en même temps, il gagne +1 Attaque pour l'arme de main supplémentaire, mais seul le premier fouet accorde le bonus de Claquement de Fouet.",
  },
});


// --- Étape 3 : table des Blessures Graves + règles communes diverses
// (rare items génériques, traits de gardes/marchands/animaux, grades de
// légalité 1b/1c) — 65 règles traduites depuis BSData/mordheim (100% EN).
Object.assign(RULE_TRANSLATIONS, {
  "Leg Wound": {
    name: "Jambe Cassée",
    description:
      "La jambe du guerrier est cassée. Il subit désormais un malus permanent de -1 en Mouvement.",
  },
  "Severe Arm Wound": {
    name: "Blessure Grave au Bras",
    description:
      "Blessure grave au bras. Le bras doit être amputé. Le guerrier ne peut plus utiliser qu'une seule arme à une main désormais.",
  },
  "Madness: Stupidity": {
    name: "Folie : Stupidité",
    description:
      "Le choc du combat a brisé l'esprit du guerrier. Il est désormais soumis en permanence à la règle spéciale de Stupidité.",
  },
  "Madness: Frenzy": {
    name: "Folie : Frénésie",
    description:
      "Le choc du combat a plongé le guerrier dans une rage incontrôlable. Il est désormais soumis en permanence à la règle spéciale de Frénésie.",
  },
  "Chest Wound": {
    name: "Blessure à la Poitrine",
    description:
      "Le guerrier a été gravement blessé à la poitrine. Il survit, mais cette blessure l'affaiblit : son Endurance est réduite de 1.",
  },
  "Blind In one Eye": {
    name: "Borgne",
    description:
      "Un guerrier ayant perdu un œil voit sa Capacité de Tir réduite de -1. S'il perd ensuite l'usage de son autre œil, il doit se retirer définitivement de la bande.",
  },
  "Old Battle Wound": {
    name: "Vieille Blessure de Guerre",
    description:
      "Le guerrier survit, mais sa blessure l'empêchera de combattre si vous obtenez un 1 sur 1D6 en début de bataille. Effectuez ce jet au début de chaque bataille désormais.",
  },
  "Nervous Condition": {
    name: "Nerfs Fragilisés",
    description:
      "Le système nerveux du guerrier a été endommagé. Son Initiative est réduite en permanence de -1.",
  },
  "Hand Injury": {
    name: "Blessure à la Main",
    description:
      "La main du guerrier est gravement blessée. Sa Capacité de Combat est réduite en permanence de -1.",
  },
  "Bitter Emity": {
    name: "Haine Tenace",
    description:
      "Le guerrier voue une haine tenace à quelqu'un ou à un groupe entier.",
  },
  "Hardened": {
    name: "Endurci",
    description:
      "Le guerrier survit et s'endurcit face aux horreurs de Mordheim. Il est désormais immunisé contre la peur.",
  },
  "Horrible Scars": {
    name: "Horribles Balafres",
    description:
      "Le guerrier inspire désormais la peur.",
  },
  "Smashed Leg": {
    name: "Jambe Écrasée",
    description:
      "Le guerrier ne peut plus courir, mais peut toujours charger.",
  },
  "Berserker": {
    name: "Forcené",
    description:
      "Le Nain peut ajouter +1 à ses jets pour toucher pendant le tour où il charge.",
  },
  "Loner": {
    name: "Solitaire",
    description:
      "Peu de gens apprécient de passer du temps en compagnie d'un prêtre de Morr — même lorsque c'est leur devoir de le faire. De ce fait, un prêtre de Morr a l'habitude d'être seul et préfère probablement qu'il en soit ainsi. Les prêtres de Morr ne sont pas soumis aux règles de Seul Contre Tous.",
  },
  "Fey": {
    name: "Fantasque",
    description:
      "Les sorts de magie hostile n'affectent pas l'Elfe sur un jet de D6 de 4+.",
  },
  "Immune to Poison": {
    name: "Immunisé au Poison",
    description:
      "En tant que Vampire, Marianna est totalement immunisée aux effets du poison.",
  },
  "Immune to Psychology": {
    name: "Immunisé à la Psychologie",
    description:
      "En tant que Vampire, Marianna est totalement immunisée aux effets de la psychologie et ne quittera jamais le combat.",
  },
  "Hard to Kill": {
    name: "Dur à Cuire",
    description:
      "Les Tueurs de Trolls sont des individus robustes et résistants qui ne peuvent être mis hors de combat que sur un jet de D6 de 6, au lieu de 5-6, lors des jets sur la table des Blessures. Traitez un résultat de 5 comme étourdi.",
  },
  "No Pain": {
    name: "Insensible à la Douleur",
    description:
      "Veskit ignore les résultats à terre et étourdi sur la table des Blessures. Il doit perdre son dernier point de vie et être mis hors de combat avant de pouvoir être retiré de la bataille.",
  },
  "Poisoner": {
    name: "Empoisonneur",
    description:
      "Les Assassins sont spécialisés dans l'usage des poisons. L'Assassin commence chaque partie avec ses armes enduites soit de Lotus Noir, soit de Venin Sombre. Le joueur qui le contrôle décide de quel poison l'Assassin est équipé avant le début de la partie, et ce poison n'a pas besoin d'être échangé. L'Assassin ne peut pas empoisonner les armes des autres membres de la bande, ni prêter les siennes !",
  },
  "Backstabber": {
    name: "Attaque Sournoise",
    description:
      "L'Assassin est spécialisé dans l'attaque de sa cible lorsqu'elle a le dos tourné. L'Assassin peut charger un adversaire qu'il ne peut pas voir (il sait que vous êtes là !) tant que la figurine ciblée se trouve à portée de charge. S'il le fait, il surprend son adversaire et bénéficie d'un bonus de +1 pour le toucher, ainsi que d'un bonus de +1 sur les jets de la table des Blessures Graves. Ce bonus ne dure que le premier round de combat, son adversaire reprenant vite ses esprits s'il survit à l'assaut initial.",
  },
  "Steady Hands": {
    name: "Mains Sûres",
    description:
      "La visée du Tireur d'Élite Tiléen ne faiblit jamais. Il ignore les modificateurs pour toucher liés à la longue portée lorsqu'il tire à l'arbalète.",
  },
  "Predator": {
    name: "Prédateur",
    description:
      "Le Chasseur de Bêtes est un prédateur de toutes les créatures maudites, et particulièrement des Bêtes du Chaos. Dans toute bataille se déroulant en pleine nature (c'est-à-dire hors de Mordheim) impliquant des Bêtes du Chaos, le Chasseur de Bêtes peut être déployé une fois que les deux bandes ont terminé leur déploiement. Il peut être placé n'importe où sur la table, à condition d'être caché et hors de la zone de déploiement ennemie.",
  },
  "Guardian": {
    name: "Garde du Corps",
    description:
      "Le Marchand s'est « procuré » un garde du corps pour le protéger lors des batailles à venir. Le garde du corps ne protège que le Marchand et ne peut pas remplir les objectifs de la bande, fouiller, piller ou accomplir toute autre fonction que celle de protéger le Marchand ; il doit donc rester en permanence à moins de 1 ps de lui. Le garde du corps ne gagne pas d'expérience et n'est pas payé (on suppose qu'il a été « offert » au Marchand par l'un de ses contacts). Si le garde du corps meurt, le Marchand devra en engager un autre en resélectionnant cette compétence la prochaine fois qu'il gagnera un point de compétence.",
  },
  "Freelancer": {
    name: "Franc-Tireur",
    description:
      "Entretien : 20 po. Valeur de Bande : +21 (+1/exp). Équipement : armure lourde, bouclier, lance et épée. Peut être engagé par : les Mercenaires et les Chasseurs de Sorcières peuvent engager des Francs-Tireurs.",
  },
  "Hire Fee": {
    name: "Conditions d'Engagement",
    description:
      "Aucun frais. Bertha viendra en aide à toute bande des Sœurs de Sigmar si celle-ci envoie une ou plusieurs de ses Héroïnes à sa recherche de la manière habituelle, en effectuant un jet sous leur Initiative (représentant leurs efforts pour obtenir une audience auprès de la Haute Matriarche). Si elle accorde cette audience, elle peut décider que son aide personnelle est nécessaire pour la bataille à venir. Elle ne viendra en aide à une bande des Sœurs de Sigmar que si son adversaire a une Valeur de Bande supérieure. Consultez le tableau ci-dessous et lancez 1D6 pour savoir si Bertha acceptera d'aider la bande. Différence de Valeur de Bande / Jet requis : 0-49 : aucun ; 50-99 : 6+ ; 100-149 : 5+ ; 150-199 : 4+ ; 200 et plus : 3+.",
  },
  "Lucky Charm": {
    name: "Porte-Bonheur",
    description:
      "La première fois qu'une figurine possédant un porte-bonheur est touchée dans une bataille, elle lance 1D6. Sur un résultat de 4+, la touche est ignorée et aucun dommage n'est subi. Posséder deux porte-bonheur ou plus n'apporte aucun bénéfice supplémentaire : la figurine ne peut toujours annuler que la première touche.",
  },
  "Luck": {
    name: "Chance",
    description:
      "L'Éclaireur Elfe est béni par Lileath, déesse elfe de la chance. Une fois par partie, il peut relancer n'importe quel jet de dé qu'il effectue lui-même (mais pas un jet effectué par un autre membre de la bande).",
  },
  "Cursed": {
    name: "Maudit",
    description:
      "Nicodemus ne s'intéresse pas à l'argent : il a désespérément besoin d'éclats de pierre magique pour retarder sa croissance anormale. Lorsqu'il rejoint la bande, et après chaque bataille qu'il livre, y compris la première, vous devez le payer avec un éclat de pierre magique. Si vous n'en avez pas, ou si vous préférez le vendre plutôt que de le donner à Nicodemus, le pèlerin maudit quittera la bande pour ne jamais y revenir.",
  },
  "Holy Relic": {
    name: "Relique Sacrée",
    description:
      "Une figurine possédant une relique sacrée réussit automatiquement le premier test de Commandement qu'elle doit effectuer dans la partie. Si elle est portée par le chef, elle lui permet de réussir automatiquement le premier test de Déroute s'il n'a effectué aucun test de Commandement auparavant. Vous ne pouvez ignorer qu'un seul test de Commandement par partie de cette façon — posséder deux reliques sacrées ou plus ne permet pas d'ignorer un second test, ni les suivants.",
  },
  "Tome Of Magic": {
    name: "Tome de Magie",
    description:
      "Si une bande comprend un sorcier, celui-ci gagne un sort supplémentaire du tome, de façon permanente. Il peut générer aléatoirement ce nouveau sort depuis sa propre liste ou depuis la liste de Magie Mineure. Voir la section Magie pour plus de détails. Les bénéfices de chaque Tome de Magie ne s'appliquent qu'à une seule figurine.",
  },
  "Wizard’s Staff": {
    name: "Bâton de Sorcier",
    description:
      "Nicodemus peut utiliser son bâton au corps à corps de deux façons différentes : il peut l'utiliser à deux mains, auquel cas le bâton compte comme un gourdin mais permet aussi à Nicodemus de parer comme s'il était équipé d'une rondache ; ou bien il peut utiliser le bâton dans sa main gauche comme un gourdin normal tout en maniant l'Épée de Rezhebel (voir les sorts de Magie Mineure) dans sa main droite. Notez que l'Épée de Rezhebel est un sort et non une épée normale ; elle ne peut donc pas être utilisée pour parer.",
  },
  "Net": {
    name: "Filet",
    description:
      "Une fois par partie, le filet peut être lancé pendant la phase de tir à la place d'un tir avec une arme de missile. Traitez le filet comme une arme de tir à tous égards, avec une portée de 8 ps. Utilisez la CT de la figurine pour déterminer si le filet touche — il n'y a aucun modificateur de mouvement ou de portée. S'il touche, la cible doit immédiatement lancer 1D6. Si le résultat est inférieur ou égal à sa Force, elle déchire le filet. Si le résultat est supérieur, elle ne peut ni se déplacer, ni tirer, ni lancer de sorts lors de son prochain tour, bien qu'elle ne soit pas affectée autrement. Dans les deux cas, le filet est perdu.",
  },
  "Rope And Hook": {
    name: "Corde et Grappin",
    description:
      "Un guerrier équipé d'une corde et d'un grappin peut relancer les tests d'Initiative ratés lorsqu'il grimpe ou descend.",
  },
  "Lantern": {
    name: "Lanterne",
    description:
      "Une figurine possédant une lanterne ajoute +4 ps à la distance à laquelle elle peut repérer des ennemis cachés.",
  },
  "Torch": {
    name: "Torche",
    description:
      "Les guerriers n'ayant pas les moyens de s'offrir une lanterne doivent parfois se contenter d'une torche. Les torches fonctionnent exactement comme des lanternes, ajoutant +4 ps à la distance de détection des ennemis cachés, mais possèdent également quelques règles spéciales supplémentaires. Une torche ne dure qu'une seule partie. Une figurine armée d'une torche inspire la peur aux animaux (chiens de chasse, montures, ours, loups, etc.), et peut l'utiliser comme un gourdin de fortune. Utilisée au combat, une torche est traitée comme un gourdin normal, mais avec un malus de -1 pour toucher. Toute figurine possédant la règle spéciale de Régénération (comme les Trolls) ne pourra pas régénérer les blessures causées par une torche pendant la bataille.",
  },
  "Mad Cap Mushrooms": {
    name: "Champignons Fous",
    description:
      "Tout guerrier ayant pris des Champignons Fous avant une bataille est soumis à la Frénésie. Le Champignon Fou n'a aucun effet sur les Morts-Vivants comme les Vampires et les Zombies, ni sur les Possédés. Effet secondaire : après la bataille, lancez 1D6. Sur un résultat de 1, la figurine devient définitivement stupide. Usage unique.",
  },
  "Black Lotus": {
    name: "Lotus Noir",
    description:
      "Une arme enduite de la sève du Lotus Noir blesse automatiquement sa cible si vous obtenez un 6 pour toucher. Notez que vous devez tout de même lancer un dé pour chaque blessure infligée de cette façon : si vous obtenez un 6, vous infligez un coup critique ; sinon, vous infligez une blessure normale. Les sauvegardes d'armure s'effectuent normalement.",
  },
  "Healing Herbs": {
    name: "Herbes Curatives",
    description:
      "Un Héros possédant des herbes curatives peut les utiliser au début de n'importe laquelle de ses phases de récupération, tant qu'il n'est pas engagé au corps à corps. Cela restaure tous les points de vie qu'il a perdus au cours de la partie.",
  },
  "Bugman's Ale": {
    name: "Bière de Bugman",
    description:
      "Une bande qui boit un tonneau de Bière de Bugman avant une bataille est immunisée à la peur pour toute la durée de la bataille. Les Elfes ne peuvent pas boire de Bière de Bugman, étant bien trop délicats pour en supporter les effets. Il n'y a assez de bière que pour approvisionner la bande pour une seule bataille.",
  },
  "Mandrake Root": {
    name: "Racine de Mandragore",
    description:
      "L'Endurance est augmentée de +1 pour la durée d'une bataille, et tous les résultats étourdi sont traités comme à terre à la place. La Racine de Mandragore n'a aucun effet sur les Morts-Vivants, comme les Vampires et les Zombies, ni sur les Possédés. Effets secondaires : la Racine de Mandragore est hautement toxique. À la fin de la bataille, lancez 2D6. Sur un résultat de 2-3, la figurine perd 1 point d'Endurance de façon permanente.",
  },
  "Garlic": {
    name: "Ail",
    description:
      "Un Vampire doit réussir un test de Commandement pour pouvoir charger une figurine portant une gousse d'ail. L'ail ne dure que le temps d'une bataille, qu'il soit utilisé ou non.",
  },
  "Blessed Water": {
    name: "Eau Bénite",
    description:
      "Une fiole d'eau bénite ne contient assez de liquide que pour un seul usage, et a une portée de lancer égale à deux fois la Force du lanceur, en ps. Effectuez le jet pour toucher avec la CT de la figurine ; aucun modificateur de portée ou de mouvement ne s'applique. L'eau bénite inflige automatiquement 1 blessure aux figurines Mortes-Vivantes, Démoniaques ou Possédées touchées. Aucune sauvegarde d'armure n'est autorisée. Les figurines Mortes-Vivantes ou Possédées ne peuvent pas utiliser d'eau bénite.",
  },
  "Excellent Sight": {
    name: "Vue Perçante",
    description:
      "L'Éclaireur Elfe repère les ennemis cachés deux fois plus loin que les autres guerriers (c'est-à-dire à une distance en ps égale à deux fois sa valeur d'Initiative).",
  },
  "Extra Arm": {
    name: "Bras Supplémentaire",
    description:
      "Le mutant peut utiliser n'importe quelle arme à une main dans son bras supplémentaire, ce qui lui donne +1 Attaque au corps à corps. Il peut également porter un bouclier ou une rondache dans ce bras supplémentaire. Si un Possédé choisit cette option, il gagne une attaque supplémentaire mais ne peut toujours pas porter d'arme.",
  },
  "Metallic Body": {
    name: "Corps Métallique",
    description:
      "Cette mutation confère à Veskit sa haute Endurance ainsi qu'une sauvegarde d'armure de 3+.",
  },
  "Hideous": {
    name: "Hideux",
    description:
      "Le mutant inspire la peur.",
  },
  "Stern": {
    name: "Impassible",
    description:
      "Habitué à travailler seul et dans l'obscurité pour l'essentiel de sa profession, le Garde des Routes est fait d'une étoffe robuste. Il peut relancer tout test de Commandement raté lié à la panique ou à la peur, et est immunisé aux règles de Seul Contre Tous.",
  },
  "Unfeeling": {
    name: "Insensible",
    description:
      "Veskit est une machine à tuer froide et calculatrice, ressentant peu des émotions propres aux êtres vivants. Il est donc immunisé à toute forme de psychologie.",
  },
  "Wardog": {
    name: "Chien de Guerre",
    description:
      "Si vous achetez un chien de guerre, il combattra exactement comme un membre de votre bande, bien qu'il soit traité comme faisant partie de l'équipement du Héros qui l'a acheté. Vous aurez besoin d'une figurine pour le représenter sur le champ de bataille. Les chiens de guerre ne gagnent jamais d'expérience, et s'ils sont mis hors de combat, ils ont exactement les mêmes chances de s'en remettre que les Hommes de Main (c'est-à-dire 1-2 : mort ; 3-6 : vivant). Les chiens de guerre comptent dans le nombre maximal de guerriers autorisés dans votre bande.",
  },
  "Warhorse": {
    name: "Cheval de Guerre",
    description:
      "Seuls les Humains peuvent acheter ou utiliser des chevaux de guerre. Vous pouvez monter l'un de vos Héros sur un cheval de guerre pour les batailles à venir.",
  },
  "Horse": {
    name: "Cheval",
    description:
      "Seuls les Humains peuvent acheter ou utiliser des chevaux. Vous pouvez monter l'un de vos Héros sur un cheval pour les batailles à venir.",
  },
  "Marketeer": {
    name: "Négociant",
    description:
      "Le Marchand possède de nombreux contacts utiles dans la pègre et parmi les commerçants étrangers pour dénicher toutes sortes d'objets spéciaux. Après chaque bataille (s'il n'a pas été mis hors de combat), le Marchand peut visiter l'un des trois marchés suivants : le Marché Noir, les Marchandises Étrangères ou le Fourgueur, à la recherche d'objets pour la bande. Lancez 1D6 sur la table correspondante pour découvrir ce qui est proposé.",
  },
  "Cook": {
    name: "Cuisinier",
    description:
      "Les Halflings sont réputés pour leurs talents culinaires. Une bande possédant un Éclaireur Halfling peut augmenter sa taille maximale de +1, les guerriers des environs étant attirés par l'odeur d'une bonne cuisine ! Notez que cela n'augmente pas le nombre maximal de Héros que vous pouvez avoir.",
  },
  "Pawnbroker": {
    name: "Prêteur sur Gages",
    description:
      "Le Marchand est habile pour obtenir le meilleur prix des objets vendus et gagne ainsi 2D6 pièces d'or supplémentaires par objet vendu par la bande (jusqu'à sa pleine valeur), s'il n'a pas été mis hors de combat pendant la bataille.",
  },
  "Seeker": {
    name: "Traqueur",
    description:
      "Lors des jets sur la table d'Exploration, l'Éclaireur Elfe permet de modifier un jet de dé de -1 ou +1.",
  },
  "Set Traps": {
    name: "Poser des Pièges",
    description:
      "Le Chasseur peut placer jusqu'à six marqueurs représentant des pièges sur le champ de bataille, immédiatement après avoir été placé lui-même. Ils doivent être placés au sol, avec au moins 6 ps entre eux. Toute figurine (sauf le Chasseur) se déplaçant à moins de 3 ps d'un marqueur de piège doit lancer 1D6. Sur un résultat de 1-3, il ne se passe rien. Sur un résultat de 4-6, la figurine subit automatiquement une touche à la Force indiquée par le dé. Le marqueur de piège est alors retiré. Une seule figurine peut déclencher un piège à la fois. Si un animal quelconque est mis hors de combat par un piège, il est automatiquement capturé après la partie pour être envoyé dans le Vieux Monde.",
  },
  "Stone Cutter": {
    name: "Tailleur de Pierre",
    description:
      "Le Marchand a le talent nécessaire pour raffiner les éclats de pierre magique et en augmenter la valeur. Chaque fois qu'une bande vend sa pierre magique, le Marchand peut tenter d'en raffiner la source. Lancez 1D6 pour déterminer le supplément d'or obtenu : sur 1-2, la bande perd 2D6 pièces d'or ; sur 3-5, elle gagne 2D6 pièces d'or ; sur 6, elle gagne 3D6 pièces d'or.",
  },
  "Wanderer": {
    name: "Vagabond",
    description:
      "Aenur ne reste jamais avec une bande plus longtemps que la durée d'une bataille. Une bande ayant fait appel à Aenur lors de sa dernière bataille ne peut pas le rechercher à nouveau avant d'avoir livré au moins une bataille sans lui.",
  },
  "Skull Rack": {
    name: "Râtelier de Crânes",
    description:
      "Le Chasseur de Bêtes porte un macabre râtelier orné de crânes de bêtes. Il inspire la peur à toutes les Bêtes du Chaos.",
  },
  "Trap Blade:": {
    name: "Lame à Piège",
    description:
      "Les deux pointes servant à piéger l'arme d'un adversaire se déploient lorsque le guerrier effectue une parade. Chaque fois que vous réussissez une tentative de parade, lancez 1D6. Sur un résultat de 4+, vous brisez l'arme utilisée par votre adversaire. L'arme devient inutilisable et il doit en utiliser une autre, ou combattre à mains nues s'il n'en a pas d'autre.",
  },
  "Hunting Arrows": {
    name: "Flèches de Chasse",
    description:
      "Une figurine utilisant un arc court, un arc, un arc long ou un arc elfique peut utiliser ces flèches. Elles ajoutent +1 à tous les jets sur la table des Blessures.",
  },
  "1b": {
    name: "1b",
    description:
      "Non officielle, mais publiée par GW/Fanatic. Qualité professionnelle.",
  },
  "1c": {
    name: "1c",
    description:
      "Expérimentale, non publiée par GW/Fanatic. Approuvée par des personnes ayant déjà soumis du matériel de grade 1a/1b et garantissant sa qualité.",
  },
});


// --- Étape 4 : Épées Louées & Personae Dramatis (Characters.cat) — 81
// règles traduites depuis BSData/mordheim (100% EN à l'origine). Ferme
// le lot des règles "communes" (384 au total dans le dépôt : 279 communes
// + 105 propres à une bande officielle précise, restant à traduire).
Object.assign(RULE_TRANSLATIONS, {
  "(2 2 2 2 2) Alchemist’s Laboratory": {
    name: "Laboratoire de l'Alchimiste",
    description:
      "Dans les ruines, vous trouvez un butin d’une valeur de 3D6 Co et un vieux carnet en piteux état. L’un de vos Héros peut étudier le carnet de l’Alchimiste ; la sagesse supplémentaire qu’il en tirera lui permettra de choisir parmi les compétences Académiques lorsqu’il gagnera une nouvelle compétence, en plus des compétences qui lui sont normalement accessibles.",
  },
  "(5 5 5 5 5 5) Fighting Arena": {
    name: "Fosse de Combat",
    description:
      "Vous trouvez un manuel d’entraînement, que vous pouvez soit vendre pour 100 Co, soit laisser lire à l’un de vos Héros. Les connaissances supplémentaires acquises par votre Héros en lisant le manuel lui permettent de choisir parmi les compétences de Combat lorsqu’il gagne une nouvelle compétence, et sa Capacité de Combat peut désormais être augmentée d’un point supplémentaire au-delà de son maximum racial normal (par exemple, un Humain possédant ce livre aura désormais une Capacité de Combat maximale de 7).",
  },
  "(un)Holy Relic": {
    name: "Relique Sacrée",
    description:
      "Une figurine portant une relique sacrée réussit automatiquement le premier test de Commandement qu’elle doit effectuer au cours de la partie. Si la relique est portée par le chef, elle lui permet de réussir automatiquement le premier test de Déroute s’il n’a effectué aucun test de Commandement auparavant. Vous ne pouvez ignorer que le premier test de Commandement au cours d’une même partie : posséder deux reliques sacrées ou plus ne permet pas d’ignorer les tests suivants.",
  },
  "A Fistful of Crowns": {
    name: "Une Poignée de Couronnes",
    description:
      "Ces gars-là feraient littéralement n’importe quoi pour de l’argent/de la malepierre et sont connus pour changer de camp et poignarder leurs anciens employeurs dans le dos pour quelques couronnes seulement.\n\nPour représenter cela, le ou les joueurs adverses peuvent tenter de soudoyer le duo afin qu’il trahisse ses employeurs et change de camp.\nAu début de la partie, tout joueur souhaitant tenter cela doit secrètement inscrire la somme qu’il est prêt à leur offrir (celle-ci doit bien entendu être supérieure à leur coût initial de recrutement !).\n\nIl est également conseillé au joueur qui les contrôle/emploie d’inscrire secrètement une contre-offre au début de la partie.\nLe joueur qui tente le pot-de-vin peut alors, au début de n’importe lequel de ses tours, tenter de les soudoyer (même s’ils sont engagés au corps à corps !).\n\nS’il le fait, il doit révéler la somme inscrite et, si celle-ci est supérieure au coût de recrutement du duo augmenté du montant de la contre-offre du joueur qui les contrôle, il prend le contrôle du duo jusqu’à la fin de la partie.\nSeul le joueur qui contrôle le duo doit payer la somme supplémentaire ; ainsi, si le joueur qui les contrôlait initialement en perd le contrôle à la suite d’un pot-de-vin, il n’a pas à payer sa contre-offre.\n\nCes histoires de pots-de-vin peuvent bien sûr devenir particulièrement intéressantes dans les parties multijoueurs, lorsque différents joueurs tentent de les soudoyer à des moments différents.\nQuel que soit le joueur qui réussit à les soudoyer, ou si le joueur qui les contrôle conserve le contrôle, celui-ci doit payer cette somme supplémentaire.",
  },
  "Aenur Sword of Twilight": {
    name: "Aenur, Épée du Crépuscule",
    description:
      "Peut être recruté : toute bande, à l’exception des Skavens, des Morts-vivants et des Possédés, peut recruter Aenur.\n\n150 couronnes d’or pour le recruter.",
  },
  "Amulet of the Moon": {
    name: "Amulette de la Lune",
    description:
      "Une fois activé, cet ancien dispositif crée une aura scintillante autour de son porteur, ce qui rend les ennemis plus à même de le distinguer difficilement.\n\nTout tir visant une figurine équipée de l’amulette subit un malus de -1 pour toucher.\nL’amulette confère également une sauvegarde spéciale de 5+ contre les tirs.",
  },
  "Arabian Merchant": {
    name: "Marchand Arabien",
    description:
      "Peut être recruté : toute bande d’alignement bon peut recruter un Marchand Arabien (c’est-à-dire les Mercenaires, les Nains, les Chasseurs de Sorcières, les Pillards des Tombes, etc.).\n\n20 couronnes d’or pour le recruter + 10 couronnes d’or d’entretien.",
  },
  "Beast Hunter": {
    name: "Chasseur de Bêtes",
    description:
      "Peut être recruté : toute bande autre que les Skavens, les Hommes-bêtes, les Morts-vivants, les Orques & Gobelins, les Possédés et le Carnaval du Chaos peut recruter un Chasseur de Bêtes.\n\n35 couronnes d’or pour le recruter + 15 couronnes d’or d’entretien.",
  },
  "Beastmen Vengeance": {
    name: "Vengeance sur les Hommes-Bêtes",
    description:
      "Le Chasseur de Bêtes hait tous les Hommes-bêtes (cela inclut les Gors, les Ungors, les Centigors et les Minotaures) et combat sans frais d’entretien lors des parties contre des Hommes-bêtes.",
  },
  "Bertha Bestraufrung, high matriarch of the sisterhood": {
    name: "Bertha Bestraufrung, Haute Matriarche des Sœurs",
    description:
      "Peut être recrutée : Bertha Bestraufrung ne rejoindra que les bandes de Sœurs de Sigmar.",
  },
  "Bicker": {
    name: "Chamaillerie",
    description:
      "Lancez 1D6 au début du tour pour chaque Gnoblar situé à 2\" ou moins d’un autre Gnoblar et qui n’est pas engagé au corps à corps.\nSur un résultat de 1, le Gnoblar commence à se chamailler, à insulter et/ou à intimider l’autre Gnoblar et ne peut rien faire d’autre durant ce tour.",
  },
  "Big Game Hunter": {
    name: "Grand Chasseur de Gibier",
    description:
      "Peut être recruté : le Grand Chasseur de Gibier peut être recruté par toute bande humaine.\n\n40 couronnes d’or pour le recruter + 18 couronnes d’or d’entretien.",
  },
  "BlackBlood": {
    name: "Sang Noir",
    description:
      "Si la figurine perd une Blessure au corps à corps, toute figurine en contact socle à socle avec elle subit une touche de Force 3 (sans coup critique) provenant de son sang corrosif qui gicle.",
  },
  "Blessed Stag Hide": {
    name: "Peau de Cerf Bénie",
    description:
      "Cette peau animale est portée comme une cape et constitue un symbole d’honneur une fois bénie par les hiérarques de Taal.\nUne peau bénie confère à son porteur une grâce inégalée, lui permettant de relancer une fois par tour un test d’Initiative raté.",
  },
  "Cathayan Silk Clothes": {
    name: "Vêtements de Soie Cathayane",
    description:
      "Toute bande de Mercenaires dont le chef porte des vêtements de soie peut relancer son premier test de Déroute raté. Cependant, après chaque bataille au cours de laquelle le chef est mis hors de combat, lancez 1D6. Sur un résultat de 1 à 3, les vêtements sont ruinés et doivent être jetés.",
  },
  "Cloven Hoofs": {
    name: "Sabots Fourchus",
    description:
      "Gagne +1 en Mouvement.",
  },
  "Conch Shell Horn": {
    name: "Cor en Coquillage",
    description:
      "Le cor en coquillage est utilisé par les guerriers Piranhas expérimentés pour avertir la bande de l’approche d’ennemis.\n\nAu début de la partie, un guerrier Piranha peut utiliser le cor pour relancer le jet déterminant qui déploie en premier et qui joue en premier.\nPlusieurs figurines possédant un cor ne peuvent pas imposer une deuxième relance. (Guerriers Piranhas uniquement.)",
  },
  "Countess Marianna Chevaux": {
    name: "Comtesse Marianna Chevaux",
    description:
      "Peut être recrutée : toute bande, à l’exception des Chasseurs de Sorcières, des Sœurs de Sigmar, des Morts-vivants, des Elfes et de toute autre bande dévouée à Sigmar, peut recruter Marianna (notez que les Mercenaires sont des hommes à la foi laxiste et ne sont pas concernés ici).\n\n150 couronnes d’or pour la recruter ; 75 couronnes d’or d’entretien.",
  },
  "Crimson Shade": {
    name: "Teinte Cramoisie",
    description:
      "Une figurine utilisant de la Teinte Cramoisie voit son Initiative augmenter de +D3 points, et son Mouvement et sa Force de +1 (cet effet dure une partie). La Teinte Cramoisie n’a aucun effet sur les Morts-vivants tels que les Vampires et les Zombies, ni sur les Possédés.\n\nEffets secondaires : après la bataille, lancez 2D6. Sur un résultat de 2-3, la figurine devient dépendante et vous devez essayer de lui acheter une nouvelle dose de Teinte Cramoisie avant chaque bataille à partir de maintenant. Si vous ne parvenez pas à en acheter, elle quittera votre bande. Sur un résultat de 12, l’Initiative de la figurine augmente définitivement de +1.",
  },
  "Daemon Soul": {
    name: "Âme Démoniaque",
    description:
      "La figurine bénéficie d’une sauvegarde de 4+ contre les effets des sorts ou des prières.",
  },
  "Dark Venom": {
    name: "Venin Noir",
    description:
      "Toute touche causée par une arme enduite de Venin Noir compte comme ayant +1 en Force ; les sauvegardes d’armure sont modifiées pour tenir compte de l’augmentation de Force de l’attaque.",
  },
  "Dead Eye Shot": {
    name: "Œil de Lynx",
    description:
      "Le Tireur d’élite possède les yeux d’un aigle et peut atteindre les plus petites cibles.\nIl ignore les modificateurs de tir dus aux couverts lorsqu’il tire avec son arbalète.",
  },
  "Deathwish": {
    name: "Vœu de Mort",
    description:
      "Les Tueurs de Troll recherchent une mort honorable au combat.\nIls sont totalement immunisés à toute psychologie et n’ont jamais besoin d’effectuer de test lorsqu’ils combattent seuls.",
  },
  "Dodge.": {
    name: "Esquive",
    description:
      "Il peut éviter toute touche provenant d’une arme de tir sur un résultat de 5+ sur 1D6. Notez que ce jet est effectué contre les tirs dès qu’une touche est obtenue, pour déterminer si le guerrier l’esquive ou non, avant de jeter pour blesser et avant tout effet provenant d’autres compétences ou équipements (tels que les porte-bonheur).",
  },
  "Dwarf Troll Slayer": {
    name: "Tueur de Troll Nain",
    description:
      "Peut être recruté : les Mercenaires et les Chasseurs de Sorcières peuvent recruter un Tueur de Troll Nain.\n\nLes bandes comprenant des Elfes peuvent recruter des Tueurs, mais doivent payer 20 couronnes d’or après chaque bataille au lieu de 10.\n\nLes Nains ne supportent pas les faibles oreilles pointues, à moins d’y être obligés ou d’être convenablement dédommagés pour leur souffrance.",
  },
  "Elf Ranger": {
    name: "Ranger Elfe",
    description:
      "Entretien : 20 Co\nValeur : +12 pts (+1/exp)\nPeut être recruté : les Mercenaires et les Chasseurs de Sorcières peuvent recruter des Rangers Elfes. Les bandes comprenant des Nains peuvent recruter des Rangers Elfes, mais doivent payer 40 couronnes d’or après chaque bataille au lieu de 20.",
  },
  "Elven Cloak": {
    name: "Cape Elfique",
    description:
      "Un guerrier visant avec une arme de tir un guerrier portant une cape elfique subit -1 à son jet pour toucher.",
  },
  "Expert Pistolier": {
    name: "Pistolier Expert",
    description:
      "La maîtrise d’un Bandit de grand chemin avec une paire de pistolets est sans égale ; il combine ainsi les effets des compétences Pistolier et Tireur d’élite.",
  },
  "Expert Rider": {
    name: "Cavalier Expert",
    description:
      "Un Bandit de grand chemin est un cavalier hors pair. Lorsqu’il est monté, il compte comme étant immobile pour tirer (c’est-à-dire qu’il ne subit pas le malus de -1 pour toucher) et bénéficie également de cette compétence, car il peut recharger rapidement à cheval.",
  },
  "Ferocious Charge": {
    name: "Charge Féroce",
    description:
      "Le Nain peut doubler ses Attaques durant le tour où il charge.\nIl subit un malus de -1 pour toucher durant ce tour.",
  },
  "Fighting Undead": {
    name: "Combattre les Morts-Vivants",
    description:
      "En raison de sa vocation de Vampire Assassin devenu Chasseur de Vampires, tous les Vampires Haïssent Marianna.",
  },
  "Freelancer Mount": {
    name: "Monture du Franc-Tireur",
    description:
      "Si vous utilisez les règles optionnelles concernant les figurines montées, un Franc-tireur chevauche un destrier (et possède la compétence Monter un destrier de l’article Des selles flamboyantes).\n\nMonté, le Franc-tireur possède une sauvegarde d’armure de 3+. À pied, sa sauvegarde est de 4+.",
  },
  "Funerary Rites": {
    name: "Rites Funéraires",
    description:
      "Les Prêtres de Morr ne sont en aucun cas des sorciers ; cependant, ils disposent de nombreux Rites Funéraires qu’ils peuvent accomplir.\n\nAinsi, les Prêtres de Morr peuvent choisir un Rite Funéraire dans la liste ci-dessous, en utilisant les règles de Magie de la page 56 du Livre des Règles de Mordheim.",
  },
  "Great Claw": {
    name: "Grande Griffe",
    description:
      "Il ne peut porter aucune arme dans ce bras, mais gagne une Attaque supplémentaire au corps à corps avec un bonus de +1 en Force.",
  },
  "Halfling Cook Book": {
    name: "Livre de Cuisine Halfling",
    description:
      "Le nombre maximum de guerriers autorisés dans votre bande est augmenté de +1 (notez que ni une bande de Morts-vivants ni une bande du Carnaval du Chaos ne peut utiliser cet objet).",
  },
  "Halfling Scout": {
    name: "Éclaireur Halfling",
    description:
      "Entretien : +5 Co\nValeur : +5 pts (+1/exp)\nPeut être recruté : toute bande à l’exception des Skavens, des Morts-vivants et des Possédés peut recruter un Éclaireur Halfling.",
  },
  "Hard Head": {
    name: "Tête Dure",
    description:
      "Les Tueurs de Troll ignorent les règles spéciales des masses, gourdins, etc.\nIls ne sont pas faciles à assommer !",
  },
  "Hide in Shadows": {
    name: "Se Fondre dans l'Ombre",
    description:
      "L’Assassin peut se fondre dans les ombres afin que ses adversaires ne le voient pas.\nTant qu’il se trouve à 1\" ou moins d’un mur ou d’un autre obstacle linéaire (haie, clôture, puits, etc.), les figurines adverses doivent réussir un test d’Initiative pour pouvoir le charger ou lui tirer dessus.",
  },
  "High Matriarch": {
    name: "Haute Matriarche",
    description:
      "En tant que Haute Matriarche de la Miséricorde des Sœurs de Sigmar, Bertha devient automatiquement le chef de toute bande qu’elle rejoint.",
  },
  "Highwayman": {
    name: "Bandit de Grand Chemin",
    description:
      "Peut être recruté : toute bande, à l’exception des Sœurs de Sigmar, des Chasseurs de Sorcières et des Elfes d’alignement bon, peut recruter un Bandit de grand chemin.\n\nUn Bandit de grand chemin ne rejoindra jamais une bande qui contient également un Patrouilleur.\n\n35 couronnes d’or pour le recruter + 20 couronnes d’or d’entretien.",
  },
  "Highwayman Mount": {
    name: "Monture du Bandit de Grand Chemin",
    description:
      "Si vous utilisez les règles optionnelles concernant les figurines montées, un Bandit de grand chemin chevauche un cheval.\n\nMonté, le Bandit de grand chemin possède une sauvegarde d’armure de 6+. À pied, il n’a aucune sauvegarde d’armure.",
  },
  "Holy Tome": {
    name: "Tome Sacré",
    description:
      "Un Prêtre-Guerrier ou une Sœur de Sigmar possédant un tome sacré peut ajouter +1 au résultat lorsqu’il ou elle détermine s’il ou elle peut réciter un sort avec succès.",
  },
  "Imperial Assassin": {
    name: "Assassin Impérial",
    description:
      "Peut être recruté : toute bande, à l’exception des Chasseurs de Sorcières et des Sœurs de Sigmar. Les Orques & Gobelins ou les Skavens peuvent recruter l’Assassin.\n\n40 couronnes d’or pour le recruter + 20 couronnes d’or d’entretien.",
  },
  "Inseparable": {
    name: "Inséparables",
    description:
      "Ces gars-là sont comme des frères (de très mauvais frères, désagréables au possible !) et sont totalement inséparables.\n\nIls doivent être recrutés par paire et doivent rester à 8\" ou moins l’un de l’autre.\n\nSi l’un d’eux est mis hors de combat, l’autre tentera de le traîner hors du champ de bataille et de le mettre en sécurité.\nDans une campagne, si l’un des membres du duo prend sa retraite, l’autre prendra sa retraite.",
  },
  "Intercept": {
    name: "Interception",
    description:
      "Le garde du corps intercepte toute figurine tirant sur le Marchand ou le chargeant.\n\nToutes les attaques sont dirigées contre lui et, s’il est chargé, placez le garde du corps devant le Marchand pour le protéger.\n\nLe garde du corps ne chargera que si le Marchand charge également et ne peut pas intercepter une attaque s’il est déjà engagé au combat.",
  },
  "Invincible Swordsman": {
    name: "Épéiste Invincible",
    description:
      "Aenur touche toujours ses adversaires sur un résultat de 2+ au corps à corps.",
  },
  "Johann the Knife": {
    name: "Johann le Couteau",
    description:
      "Peut être recruté : toute bande à l’exception des Skavens, des Morts-vivants et des Possédés peut recruter Johann.\n\n70 couronnes d’or pour le recruter + 30 couronnes d’or d’entretien.\nJohann est dépendant à la Teinte Cramoisie ; vous pouvez donc le recruter pour une dose de Teinte Cramoisie si vous le souhaitez.",
  },
  "Knife Fighter Extraordinaire": {
    name: "Lanceur de Couteaux Hors Pair",
    description:
      "Johann possède à juste titre la réputation d’être le meilleur combattant au couteau de tout l’Empire.\n\nContrairement aux guerriers normaux, il peut combiner les compétences Combattant au couteau et Tir rapide (oui, il peut lancer six couteaux de lancer en un tour s’il ne se déplace pas !).",
  },
  "Largely Insignificant": {
    name: "Globalement Insignifiants",
    description:
      "Les Gnoblars comptent dans le nombre de guerriers d’une bande mais ne sont pas pris en compte pour les tests de Déroute, ni pour déterminer la taille initiale de la bande ni comme figurines perdues.",
  },
  "Lethal Marksman": {
    name: "Tireur Mortel",
    description:
      "Maître de l’arbalète, un Patrouilleur combine les compétences Tireur d’élite et Œil d’aigle.",
  },
  "Mad Cap Mushrooms (Orcs)": {
    name: "Champignons Bonnet de Fou (Orques)",
    description:
      "Tout guerrier qui prend des Champignons Bonnet de Fou avant une bataille est sujet à la frénésie. Les Champignons Bonnet de Fou n’ont aucun effet sur les Morts-vivants tels que les Vampires et les Zombies, ni sur les Possédés.\nEffet secondaire : après la bataille, lancez 1D6. Sur un résultat de 1, la figurine devient définitivement stupide.\n1 utilisation",
  },
  "Magic Gubbinz": {
    name: "Bricoles Magiques",
    description:
      "Il s’agit de bricoles et d’objets divers transportés par le Chaman afin de concentrer ses pouvoirs.\nLa plupart sont des pattes de chauve-souris, des lèvres de lézard et autres choses du même genre, mais semblent néanmoins procurer des avantages à leur propriétaire.\n\nLe Chaman peut relancer un test de Magie raté sur un résultat de 4+ sur 1D6.",
  },
  "Monster Slayer": {
    name: "Tueur de Monstres",
    description:
      "Le Tueur de Troll blesse toujours n’importe quel adversaire sur un résultat de 4+ sur 1D6, quelle que soit son Endurance, à moins que sa propre Force (avec les modificateurs d’arme) ne lui permette de blesser sur un résultat inférieur.",
  },
  "Mordhiem Map": {
    name: "Carte de Mordheim",
    description:
      "Lorsque vous achetez une carte, lancez 1D6 :\n\n1 Fausse. La carte est fausse et totalement sans valeur. Elle vous entraîne dans une quête inutile. Votre adversaire peut choisir automatiquement le prochain scénario que vous jouerez.\n\n2-3 Imprécise. Bien que grossière, la carte est généralement exacte (enfin… certaines parties… peut-être !). Vous pouvez relancer un dé quelconque durant votre prochaine phase d’Exploration si vous le souhaitez, mais vous devez accepter le résultat du second jet.\n\n4 Carte des catacombes. La carte indique un passage à travers les catacombes jusqu’à la cité. Vous pouvez automatiquement choisir le scénario lors de votre prochaine bataille.\n\n5 Exacte. La carte est récente et très détaillée. Vous pouvez relancer jusqu’à trois dés durant votre prochaine phase d’Exploration si vous le souhaitez. Vous devez accepter le résultat du second jet.\n\n6 Carte maîtresse. Il s’agit de l’une des douze cartes maîtresses de Mordheim réalisées pour le Comte von Steinhardt d’Ostermark. Désormais, vous pouvez toujours relancer un dé lorsque vous jetez sur le tableau d’Exploration, tant que le Héros qui possède cette carte n’a pas été mis hors de combat durant la bataille.",
  },
  "Nicodemus, The Cursed Pilgrim": {
    name: "Nicodemus, le Pèlerin Maudit",
    description:
      "Peut être recruté : toute bande à l’exception des Skavens, des Morts-vivants et des Possédés peut recruter Nicodemus. N’oubliez pas qu’il doit être recherché, comme tous les autres personnages spéciaux.",
  },
  "Ogre Bodyguard": {
    name: "Garde du Corps Ogre",
    description:
      "Entretien : 30 Co\nValeur : +25 (+1/exp)\nArmes/Armure : soit deux épées, haches ou gourdins (ou n’importe quelle combinaison de ceux-ci), soit une arme à deux mains (vous pouvez choisir laquelle). Les Ogres portent une armure légère.\n\nPeut être recruté : toute bande à l’exception des Skavens peut recruter un Garde du corps Ogre.",
  },
  "Pitfighter": {
    name: "Gladiateur",
    description:
      "30 couronnes d’or pour le recruter + 15 couronnes d’or d’entretien.\nValeur : +22 pts (+1/exp)\n\nPeut être recruté : toute bande à l’exception des Skavens, des Morts-vivants et des Possédés peut recruter un Gladiateur.",
  },
  "Rare": {
    name: "Rare",
    description:
      "10",
  },
  "Rarity": {
    name: "Rareté",
    description:
      "Rareté 11",
  },
  "Righteous Fury": {
    name: "Fureur Vertueuse",
    description:
      "La figurine hait toutes les bandes de Skavens, de Morts-vivants ou de Possédés ainsi que toutes les figurines qui les composent.",
  },
  "Roadwarden": {
    name: "Patrouilleur",
    description:
      "Peut être recruté : toute bande d’alignement bon peut recruter un Patrouilleur, comme les Chasseurs de Sorcières, les Sœurs de Sigmar, les Nains et les Mercenaires humains.\nUn Patrouilleur ne rejoindra jamais une bande qui contient également un Bandit de grand chemin.\n\n40 couronnes d’or pour le recruter + 20 couronnes d’or d’entretien.",
  },
  "Roadwarden Mount": {
    name: "Monture du Patrouilleur",
    description:
      "Si vous utilisez les règles optionnelles concernant les figurines montées, un Patrouilleur chevauche un cheval.\n\nMonté, le Patrouilleur possède une sauvegarde d’armure de 4+. À pied, sa sauvegarde est de 5+.",
  },
  "Scorpion Tail": {
    name: "Queue de Scorpion",
    description:
      "Le mutant possède une longue queue barbelée dont l’extrémité est empoisonnée, ce qui lui permet d’effectuer une Attaque supplémentaire de Force 5 à chaque phase de corps à corps. Si la figurine touchée par la queue est immunisée au poison, la Force de la touche est réduite à 2.",
  },
  "Sigmar's Handmaiden": {
    name: "Servante de Sigmar",
    description:
      "Bertha est favorisée par Sigmar plus que toutes les autres Sœurs.\n\nElle gagne +2 à tous ses jets visant à déterminer si ses Prières de Sigmar sont exaucées.",
  },
  "Spines": {
    name: "Épines",
    description:
      "Toute figurine en contact socle à socle avec le mutant subit automatiquement une touche de Force 1 au début de chaque phase de corps à corps. Les Épines ne provoquent jamais de coups critiques.",
  },
  "Strike To injure": {
    name: "Frappe Précise",
    description:
      "Ajoutez +1 à tous les jets de Blessures causés par la figurine au corps à corps.",
  },
  "Superior Black Powder": {
    name: "Poudre Noire Supérieure",
    description:
      "+1 en Force à toutes les armes à poudre noire que possède la figurine. Il y a suffisamment de poudre noire supérieure pour durer une partie.",
  },
  "Tears of Shallaya": {
    name: "Larmes de Shallya",
    description:
      "Une figurine qui boit une fiole de Larmes de Shallya au début d’une bataille est totalement immunisée contre tous les poisons pendant toute la durée du combat. Les guerriers Morts-vivants et Possédés ne peuvent pas utiliser les Larmes de Shallya. Une fiole de Larmes de Shallya contient suffisamment de liquide pour durer toute une bataille.",
  },
  "Tentacle": {
    name: "Tentacule",
    description:
      "Peut agripper son adversaire au corps à corps afin de réduire ses Attaques de -1, jusqu’à un minimum de 1. Le mutant peut décider quelle Attaque son adversaire perd.",
  },
  "The Noctu": {
    name: "Le Noctu",
    description:
      "La gemme volée dans le repaire de Serutat possède de puissantes propriétés de camouflage.\nLe voile d’ombre qu’elle crée réduit de -1 tous les jets pour toucher de tir visant Marianna.",
  },
  "Tilean Marksman": {
    name: "Tireur Tiléen",
    description:
      "Peut être recruté : toute bande à l’exception des Skavens, des Orques et des Morts-vivants peut recruter le Tireur Tilean.\n\n30 couronnes d’or pour le recruter + 15 couronnes d’or d’entretien.",
  },
  "Ulli & Marquand": {
    name: "Ulli & Marquand",
    description:
      "Peut être recruté : toute bande à l’exception des Sœurs de Sigmar et des Chasseurs de Sorcières peut recruter ces vauriens.\n\n30 couronnes d’or pour les recruter par paire.",
  },
  "Unblinking Eye": {
    name: "Œil Sans Sommeil",
    description:
      "Grâce aux dispositifs sorciers construits par les Ingénieurs en Sorcellerie du Clan Skrvre.\n\nVeskit peut repérer les ennemis cachés dans un rayon égal à deux fois sa valeur d’Initiative en pouces.",
  },
  "Unscrupulous": {
    name: "Sans Scrupules",
    description:
      "Un Bandit de grand chemin, malgré tout son talent et sa bravoure, n’est pas digne de confiance.\nÀ la fin de chaque bataille, lancez 1D6 ; sur un résultat de 1, la bande reçoit 1 trésor de moins que normalement, car le Bandit de grand chemin l’a volé pour lui-même (ce Trésor n’est pas dépensé pour le Bandit de grand chemin, il est perdu !).\nÉvidemment, si cela continue à se produire, il appartiendra au chef de la bande de décider s’il souhaite ou non conserver le Bandit de grand chemin à son service…",
  },
  "Veskit, High executioner of clan eshin": {
    name: "Veskit, Grand Bourreau du Clan Eshin",
    description:
      "Peut être recruté : Veskit ne peut être recruté que par les bandes de Skavens.\n\n80 couronnes d’or pour le recruter + 35 couronnes d’or d’entretien.",
  },
  "Wanderers": {
    name: "Vagabonds",
    description:
      "Ulli & Marquand ne restent avec une bande que pour la durée de la bataille.\nUne bande qui a utilisé Ulli & Marquand lors de sa dernière bataille ne peut pas les rechercher avant d’avoir livré au moins une bataille sans eux.",
  },
  "Warlock": {
    name: "Sorcier",
    description:
      "Entretien : 15 Co\nValeur : +16 (+1/exp)\n\nLes Sorciers sont des Magiciens et possèdent deux sorts générés aléatoirement dans la liste de Magie Mineure. Voir la section Magie pour plus de détails.\n\nPeut être recruté : toute bande à l’exception des Chasseurs de Sorcières et des Sœurs de Sigmar peut recruter un Sorcier.",
  },
  "Weapons Master": {
    name: "Maître des Armes",
    description:
      "L’Assassin est un maître des armes et peut utiliser toute arme qu’il trouve.\nVous pouvez acheter des armes pour l’Assassin comme vous le feriez pour n’importe quel autre membre de votre bande. Cependant, contrairement aux autres membres de votre bande, toute arme que vous donnez à un Assassin lui appartient et il ne la donnera pas plus tard à un autre membre de la bande.\nDe plus, bien qu’il sache les utiliser, un Assassin n’utilisera jamais d’arme à poudre noire, car de tels dispositifs sont bien trop voyants pour quelqu’un exerçant sa profession.",
  },
  "Where’s the Money?": {
    name: "Où est l'Argent ?",
    description:
      "Ces gars-là n’accepteront probablement aucune mauvaise excuse si une bande ne peut pas payer leur rémunération supplémentaire.\nSi un joueur ne peut pas payer la somme supplémentaire en couronnes ou en malepierre (la bande doit vendre toute malepierre nécessaire pour payer le recrutement ou le pot-de-vin), le duo privera la bande d’un montant équivalent en équipement (selon sa valeur marchande).\n\nÀ défaut, ils déchaîneront leur colère sur le chef de la bande : jouez immédiatement un combat au corps à corps entre le duo et le chef de la bande seul, à mort !",
  },
  "Wolfcloak": {
    name: "Cape en Loup",
    description:
      "Pour obtenir une Cape en loup, un Héros doit payer 10 Co (pour représenter les frais de déplacement jusqu’à Middenheim et la participation à une chasse). De plus, le Héros doit obtenir un résultat inférieur ou égal à sa Force sur 1D6. S’il réussit, le Héros trouve et tue le loup et peut porter sa cape comme preuve de son habileté et de sa prouesse. Notez que les Middenheimers peuvent acheter des Capes en loup lors de la création de leur bande sans effectuer de test de disponibilité. Une figurine portant une Cape en loup gagne +1 à ses sauvegardes d’armure contre toutes les attaques de tir.",
  },
  "You can never escape your past...": {
    name: "On n'échappe jamais à son passé...",
    description:
      "Au dernier tour de la partie durant lequel Marianna est encore debout, ou dès qu’une bande effectue une Déroute mettant fin à la partie, lancez 1D6 :\n\n1-3  Marianna a découvert que Serutat se rapproche et quittera le service de la bande après la partie.\n4-5  Marianna a découvert une piste utile qu’elle doit poursuivre dans cette région et restera pour une autre partie si la bande peut payer son entretien.\n6      Un groupe de serviteurs de Serutat l’a rattrapée ! Jouez D3 tours supplémentaires comme si la bande perdante n’avait pas effectué de Déroute (dans la confusion, le décompte est réinitialisé).\nUn groupe de serviteurs déterminé aléatoirement « apparaît » à 2D6\" ou moins de Marianna, le joueur adverse choisit où.\nMarianna joue le premier tour, puis les serviteurs, après quoi l’ordre des tours revient à la normale, les serviteurs étant considérés comme un joueur supplémentaire.\nLes serviteurs n’attaquent que Marianna et doivent se déplacer vers elle aussi rapidement que possible, mais attaqueront quiconque se trouve sur leur chemin.\nSi sa bande se bat pour l’aider (en mettant au moins un serviteur hors de combat) et qu’elle survit, Marianna combattra gratuitement lors de la prochaine bataille ; sinon, elle partira.\n\nLancez 1D6  Serviteurs\n1-2  D3+1 Zombies\n3-4  D3+1 Goules\n6      Vampire (épée & armure légère) + 2 Goules",
  },
});


// --- Étape 5 : règles propres aux bandes officielles (96 sur 99 ; 3 noms
// ambigus laissés de côté car leur texte diffère selon la bande et le
// dictionnaire actuel n'est pas namespacé par bande : Animals, Wizard,
// da cunnin' plan — voir discussion avec l'utilisateur).
Object.assign(RULE_TRANSLATIONS, {
  "Absolute Faith": {
    name: "Foi Absolue",
    description:
      "Elle peut relancer tous les tests de Peur et n'a pas à tester si elle combat seule contre plusieurs adversaires.",
  },
  "Always Hungry": {
    name: "Toujours Affamé",
    description:
      "Un Troll nécessite un coût d'entretien.\nCet entretien représente les quantités copieuses de nourriture qui doivent être données au Troll afin de le maintenir loyal envers la bande.\nLa bande doit payer 15 couronnes d'or après chaque partie afin de garder le Troll.\nSi la bande manque d'or pour payer l'entretien, le Boss a la possibilité de sacrifier deux Guerriers Goblins ou Squigs des Cavernes au Troll au lieu d'acheter de la nourriture (les Trolls mangent presque n'importe quoi).\nSi cette taxe n'est pas payée (que ce soit en or ou en membres de la bande), le Troll prend faim et s'éloigne à la recherche de nourriture.",
  },
  "Ancient Enemies": {
    name: "Ennemis Ancestraux",
    description:
      "Les bandes de Kislevites ne peuvent jamais s'allier (voir l'article « Règles multijoueurs pour Mordheim » du Town Cryer pour plus de détails sur les alliances de bandes) avec aucun type de bande du Chaos.\nCette restriction s'applique aux bandes suivantes :\n  Possédés,\n  Hommes-bêtes,\n  Skavens,\n  Elfes Noirs,\n  Nains du Chaos,\net toute autre bande que les joueurs jugent suffisamment « Chaotique »",
  },
  "Animal": {
    name: "Animal",
    description:
      "Un Minotaure est bien plus bestial que ses frères Hommes-bêtes et, bien qu'il puisse gagner de l'Expérience, il ne pourra jamais devenir un Héros.",
  },
  "Animal Friendship": {
    name: "Amitié Animale",
    description:
      "Ayant grandi au milieu des animaux de la forêt, ce guerrier dégage un certain charme envers tous les animaux « normaux » (c'est-à-dire destriers, chiens de guerre, etc.).\nLes animaux ne l'attaqueront jamais et jusqu'à deux chiens de garde (voir livre de règles de Mordheim, page 54) appartenant au guerrier ne comptent pas dans le nombre maximum de modèles de la bande.",
  },
  "Animosity": {
    name: "Animosité",
    description:
      "Au début du tour du joueur Orc, lancez un D6 pour chaque Homme de Main qui est soit un Orc soit un Goblin et qui n'est pas en combat au corps à corps.\n\nLancez sur le tableau ci-dessous si un 1 est obtenu.\n\n1 « J'ai entendu ça ! »\nS'il y a un Homme de Main ou Franc-Tireur Orc ou Goblin allié à portée de charge (s'il y a plusieurs cibles à portée, choisissez la plus proche de la figurine enragée), le guerrier doit immédiatement charger et livrer un tour de combat au corps à corps contre la cible.\nÀ la fin de ce tour de combat, les figurines s'écarteront immédiatement de 1\" et ne seront plus considérées comme étant en combat rapproché.\nS'il n'y a pas d'Hommes de Main ou Francs-Tireurs Orcs ou Goblins alliés à portée de charge et que le guerrier est armé d'une arme à projectile, il tire immédiatement sur l'Homme de Main ou Franc-Tireur Orc ou Goblin allié le plus proche.\nSi rien de ce qui précède ne s'applique, ou si le modèle allié le plus proche est un Héros Orc, le guerrier se comporte comme si un 2-5 avait été obtenu sur ce tableau.\nDans tous les cas, le guerrier en question ne peut faire aucune autre action ce tour-ci, bien qu'il puisse se défendre s'il est attaqué au combat au corps à corps.\n\n2-5 « Qu'est-ce t'as dit ? »\nLe guerrier est à peu près sûr d'avoir entendu un bruit offensant venant de l'Orc ou du Goblin allié le plus proche, mais il n'en est pas tout à fait certain.\nIl passe son tour à lancer des injures à son camarade.\nIl ne peut rien faire d'autre ce tour-ci, bien qu'il puisse se défendre s'il est attaqué au corps à corps.\n\n6 « J'vais leur montrer ! »\nLe guerrier s'imagine que ses camarades rient de lui dans son dos et lui donnent de vilains surnoms.\nPour leur en imposer, il décide qu'il sera le premier au baston !\nCette figurine doit se déplacer aussi vite que possible vers la figurine ennemie la plus proche, en chargeant au combat si possible.\nS'il n'y a pas de figurine ennemie en vue, le guerrier Orc ou Goblin peut effectuer un déplacement normal immédiatement.\nCe déplacement s'ajoute à son déplacement régulier lors de la phase de Mouvement, il peut donc se déplacer deux fois en un seul tour si vous le souhaitez.\nSi le déplacement supplémentaire amène le guerrier Orc ou Goblin à portée de charge d'une figurine ennemie, le guerrier doit charger au combat rapproché pendant son mouvement régulier.",
  },
  "Armour Use": {
    name: "Port de l'Armure",
    description:
      "Les Nains ne subissent jamais de pénalités de mouvement pour le port d'une armure.",
  },
  "Bear Handler": {
    name: "Montreur d'Ours",
    description:
      "Une bande kislevite qui comprend un Dompteur d'Ours est autorisée à acheter un Ours comme homme de main.\nCet ours a été dressé pour obéir aux ordres du Dompteur et réussira donc automatiquement ses tests de Stupidité lorsqu'il se trouve à moins de 6\" du Dompteur d'Ours (même si le Dompteur est À terre ou Assommé).",
  },
  "Bear Hug": {
    name: "Étreinte d'Ours",
    description:
      "Si l'Ours touche le même guerrier ennemi avec ses deux attaques lors du même tour de combat, le joueur peut choisir d'effectuer une seule attaque « Étreinte d'Ours » au lieu de résoudre les attaques normalement.\nSi cette option est choisie, chaque joueur doit lancer un D6 et ajouter la Force de son modèle au résultat.\nSi le total de l'Ours est supérieur ou si les totaux sont égaux, le guerrier adverse subit une seule blessure automatique sans sauvegarde d'Armure autorisée.\nSi le total du guerrier ennemi est supérieur, le guerrier s'est défait de la prise de l'Ours et ne subit aucun dégât de l'attaque.",
  },
  "Bellowing Roar": {
    name: "Rugissement Tonitruant",
    description:
      "Seul le Chef Homme-bête peut posséder cette compétence. Il peut relancer tout test de Déroute raté.",
  },
  "Black Fury": {
    name: "Fureur Noire",
    description:
      "Difficulté : 8\n\nLe Sorcier peut immédiatement charger n'importe quelle figurine ennemie à moins de 12\" (en ignorant les terrains et les figurines interposées) et gagne 2 Attaques supplémentaires et +1 en Force pendant la phase de combat rapproché de ce tour uniquement.",
  },
  "Blackblood": {
    name: "Sang Noir",
    description:
      "Si le modèle perd un PV au combat rapproché, toute figurine en contact socle à socle avec lui subit une touche de Force 3 (pas de coups critiques) à cause de la projection de sang corrosif.",
  },
  "Blessed Sight": {
    name: "Vision Bénie",
    description:
      "Une Augure peut relancer tous les tests de caractéristique ratés (escalade, résistance aux sorts ou toute autre raison), ainsi que tous les jets pour toucher en combat rapproché ou au tir. Vous devez accepter le second résultat.\n\nDe plus, une Augure peut utiliser sa Vision Bénie pour aider la Sœurité lorsqu'elles recherchent de la pierre magique dans la ville. Si l'Augure n'est pas mise Hors de combat pendant la bataille, vous pouvez lancer deux dés pour elle pendant la phase d'exploration et choisir l'un ou l'autre dé comme résultat.",
  },
  "Bloated Foulness": {
    name: "Infâme Difformité",
    description:
      "Le Banni est une masse énorme et répugnante de plis adipeux et malades.\n\nIl gagne +1 PV et +1 Endurance mais son Mouvement est réduit de -1.",
  },
  "Blood Oath": {
    name: "Serment de Sang",
    description:
      "Le chef d'une bande d'Ostland prête parfois un serment du sang de ne jamais abandonner un membre de sa « famille » tombé au combat.\nTelle est sa détermination à protéger ses parents par le sang qu'il est extrêmement difficile de le faire dérouter du terrain.\nSeul le chef d'une bande peut avoir cette compétence, qui lui permet de relancer un seul test de Déroute une fois par partie.",
  },
  "Bloodgreed": {
    name: "Soif de Sang",
    description:
      "Si un Minotaure met tous ses ennemis Hors de combat en combat rapproché, il devient frénétique sur un résultat de 4+ avec un D6.",
  },
  "Bull Rush": {
    name: "Charge de Taureau",
    description:
      "Ce guerrier est énorme, même selon les critères d'Ostland, et peut utiliser son tour de taille massif pour terrasser ses adversaires.\n\nLorsqu'il charge, ce Héros peut tenter de renverser son adversaire au lieu d'effectuer ses attaques normales.\nLancez pour toucher une fois avec un bonus de +1 pour toucher, bien qu'aucun jet « pour blesser » ne soit nécessaire.\nAu lieu de cela, si le guerrier touche avec cette attaque, le modèle adverse est mis À terre.\n\n(Les modèles dotés de la compétence Charge de Taureau doivent avoir un ventre de buveur de bière convenablement gros modelé en mastic quand cela est possible !)",
  },
  "Burn The Witch": {
    name: "Brûlez la Sorcière",
    description:
      "Haït tous les Lanceurs de Sorts",
  },
  "Charge": {
    name: "Charge",
    description:
      "Les Loups Funèbres sont des créatures baveuses qui submergent leurs adversaires lorsqu'ils chargent.\nLes Loups Funèbres combattent avec 2 attaques au lieu d'une lors du tour où ils chargent.",
  },
  "Children of the Horned Rat": {
    name: "Enfants du Rat Cornu",
    description:
      "Difficulté : Auto\n\nCe sort doit être utilisé avant la partie, et ne peut être utilisé qu'une seule fois. Lorsqu'il est lancé, le sort invoque D3 Rats Géants, qui sont placés à moins de 6\" du Sorcier. Le Sorcier ne peut lancer ce sort avec succès qu'une seule fois par bataille, et les rats disparaissent après la bataille. Ils ne comptent pas dans la taille maximale de la bande Skaven.",
  },
  "Cloud of Flies": {
    name: "Nuée de Mouches",
    description:
      "Les Porte-Pestes sont entourés d'une nuée de mouches qui bourdonnent autour d'eux et de leur adversaire en combat.\nElles n'affectent pas le Porte-Peste mais distraient les ennemis en bourdonnant dans leurs yeux, leurs narines et leur bouche.\n\nL'adversaire en combat rapproché d'un Porte-Peste subit un malus de -1 pour toucher sur toutes ses attaques.",
  },
  "Crazed": {
    name: "Frénétique",
    description:
      "Les Âmes Noires ont été rendues folles par la possession démoniaque et ne connaissent pas la peur.\nIls réussissent automatiquement tous les tests de Commandement qu'ils sont tenus de passer.",
  },
  "Daemonic": {
    name: "Démoniaque",
    description:
      "Les Nurglings sont des Démons du seigneur de la maladie Nurgle et ne sont pas faits de chair vivante, mais des forces éternelles et immuables du Chaos.\n\nPar conséquent, ils ne gagnent jamais d'Expérience.",
  },
  "Daemonic Aura": {
    name: "Aura Démoniaque",
    description:
      "En raison de la nature Magique et intangible des Démons, ils bénéficient d'une sauvegarde d'Armure spéciale de 5+.\n\nCelle-ci est modifiée par la Force de l'attaque comme d'habitude et est totalement annulée par les armes magiques et les sorts.\n\nLes attaques des Porte-Pestes sont également considérées comme Magiques.",
  },
  "Daemonic Instability": {
    name: "Instabilité Démoniaque",
    description:
      "Les Porte-Pestes sont liés au monde par une Magie Noire très volatile et instable.\n\nS'il est mis Hors de combat, un Porte-Peste est banni et effectivement détruit sur un jet de D6 de 1-3 (ne lancez pas de jet de blessure grave).\n\nDe plus, si la bande déroute, chaque Porte-Peste de la bande doit immédiatement passer un test de Commandement.\n\nSi ce test est raté, le Porte-Peste est considéré comme détruit.",
  },
  "Dangerous to Know": {
    name: "Fréquentation Dangereuse",
    description:
      "En raison de sa nature plutôt malade, une bande du Carnaval du Chaos aurait beaucoup de mal à garder des Francs-Tireurs en vie ! Par conséquent, un Carnaval du Chaos ne peut jamais engager aucun type de Franc-Tireur.",
  },
  "Demonic": {
    name: "Démoniaque",
    description:
      "Les Porte-Pestes sont des Démons du seigneur de la maladie Nurgle et ne sont pas faits de chair vivante, mais des forces éternelles et immuables du Chaos.\n\nPar conséquent, ils ne gagnent jamais d'Expérience.",
  },
  "Distasteful Company": {
    name: "Compagnie Déplaisante",
    description:
      "De nombreux Francs-Tireurs refusent de travailler pour des Orcs, car ils savent que les Orcs sont tout aussi susceptibles de les manger que de se battre à leurs côtés.\nLes Orcs ne peuvent engager que les Francs-Tireurs suivants :\n  Combattants des Fosses, Gardes du Corps Ogres ou Sorciers.",
  },
  "Drunk": {
    name: "Ivre",
    description:
      "Les Brutes sont complètement imbibées d'alcool frelaté et de bière bon marché.\n\nÀ ce titre, ils réussissent automatiquement tous les tests basés sur le Commandement qu'ils sont tenus de passer.",
  },
  "Drunken": {
    name: "Ivrogne",
    description:
      "Les Centigors ont tendance à boire de vastes quantités de bière infâme, de vin et de spiritueux pillés avant la bataille, se stimulant jusqu'à entrer dans une frénésie d'ivrogne.\n\nLancez 1D6 au début de chaque tour.\n\nSur un 1, ils doivent tester la stupidité pour ce tour.\nSur un 2-5, rien ne se passe.\nSur un 6, ils deviennent sujets à la frénésie pour ce tour.\n\nTant qu'ils sont sujets à la fois à la stupidité et à la frénésie, ils sont immuns à toutes les autres formes de psychologie.",
  },
  "Dumb Monster": {
    name: "Monstre Idiot",
    description:
      "Un Troll est bien trop stupide pour jamais apprendre de nouvelles compétences.\nLes Trolls ne gagnent pas d'expérience.",
  },
  "Expert Weaponsmith": {
    name: "Armurier Expert",
    description:
      "Un Ingénieur Nain peut augmenter la portée des armes à projectile de la bande. Toutes les armes à projectile naines de la bande voient leur portée augmentée de 3\" pour les Pistolets et de 6\" pour les Arbalètes et les Arquebuses. Toute augmentation de portée n'est maintenue que tant que l'Ingénieur Nain reste avec la bande.",
  },
  "Extra Tough": {
    name: "Extrêmement Résistant",
    description:
      "Relancez les dés de Blessures Graves des Héros lorsqu'ils sont mis Hors de combat.",
  },
  "Eye of the Warp": {
    name: "Œil du Warp",
    description:
      "Difficulté : 8\n\nToutes les figurines debout en contact socle à socle avec le Sorcier doivent immédiatement passer un test de Commandement. En cas d'échec, elles subissent chacune une touche de Force 3 et doivent s'enfuir de 2D6 directement à l'opposé du Sorcier, exactement comme si elles avaient perdu leur sang-froid en combattant contre plus d'un adversaire.",
  },
  "Fanatic": {
    name: "Fanatique",
    description:
      "Réussit tous ses tests de commandement, ne peut jamais être le chef",
  },
  "Fearless": {
    name: "Intrépide",
    description:
      "Immunisé à la peur, à la terreur et aux tests de Seul au Monde.",
  },
  "Fiercely Loyal": {
    name: "Farouchement Loyal",
    description:
      "Un tel dévouement est ancré dans la relation entre le Dompteur d'Ours et l'ours que si son dresseur est blessé, l'ours se tiendra souvent au-dessus du corps pour le protéger, ou traînera même le corps du dresseur en lieu sûr.\n\nTant que son ours n'est pas mis Hors de combat pendant une partie, un Dompteur d'Ours ignore les résultats suivants sur la table des Blessures Graves :\n - Vendu dans les fosses\n - Dépouillé\n - Capturé\net ignore les résultats équivalents dans des contextes comme Lustrie qui ont leur propre table spéciale de Blessures Graves.\n\nSi l'un de ces résultats est obtenu pour le Dompteur d'Ours, traitez le résultat comme une « Guérison Complète » à la place.",
  },
  "Foul Odour": {
    name: "Odeur Infecte",
    description:
      "Les Ostlandais sont d'immenses buveurs et pas très hygiéniques ! Ce guerrier surpasse tous les autres.\nAprès une vie de boisson, l'alcool n'a plus beaucoup d'effet sur lui... ce qui ne l'empêche pas d'en consommer d'énormes quantités !\nSes vêtements non lavés et sa sueur puent l'alcool et tous les ennemis vivants (hors Non-morts ou Possédés) ont un malus de -1 pour le toucher au combat rapproché.\nDe plus, le guerrier ne peut porter aucune flamme nue (torche, lanterne, etc.) et les attaques enflammées contre lui sont résolues avec une Force de +1 car ses vêtements imbibés d'alcool brûlent facilement.",
  },
  "Gnawdoom": {
    name: "Rongemort",
    description:
      "Difficulté : 7\n\nLe Rongemort cause 2D6 touches de Force 1 à une seule figurine située à moins de 8\" du lanceur.",
  },
  "Goblin Animosity": {
    name: "Animosité Goblin",
    description:
      "Un Guerrier Goblin qui rate son test d'Animosité et obtient un 1 comme résultat ne chargera jamais un Homme de Main Orc, bien qu'il utilise toujours ses armes à projectile pour attaquer normalement.\nLes Goblins ont bien trop peur des Orcs pour les défier individuellement.",
  },
  "Great Traders": {
    name: "Grands Commerçants",
    description:
      "En tant que commerçants nés ayant des contacts dans les guildes marchandes, les bandes de Marienburg reçoivent un bonus de +1 lorsqu'elles tentent de trouver des objets rares.\nPour refléter leur immense richesse, les Marienbourgeois commencent avec 100 couronnes d'or supplémentaires (600 au total) lorsqu'ils combattent dans une campagne.\nLors d'une partie ponctuelle, ils ont droit à 20 % de couronnes d'or supplémentaires lors du recrutement d'une bande.\nPar exemple, dans une partie à 1 000 couronnes d'or, une bande de Marienbourgeois aura 1 200 co.",
  },
  "Grudgebearers": {
    name: "Rancuniers",
    description:
      "Les Nains gardent une rancune ancestrale envers les Elfes depuis l'époque où les deux races se battaient pour la suprématie dans le Vieux Monde. Une bande de Nains ne peut jamais inclure aucun type de Franc-Tireur ou Dramatis Personae Elfe.",
  },
  "Gun-Rest": {
    name: "Appui-Fusil",
    description:
      "Un guerrier Streltsi armé à la fois d'une hallebarde et d'une arquebuse peut utiliser la hallebarde comme repose-fusil.\n\nLe guerrier reçoit un bonus de +1 à son jet « pour toucher » avec l'arquebuse, tant qu'il n'a pas bougé pendant ce tour (cela s'applique même si le guerrier possède une compétence qui lui permet de bouger et tirer avec son arquebuse - il ne doit pas bouger s'il veut appuyer son arme).",
  },
  "Hate Chaos": {
    name: "Haine du Chaos",
    description:
      "Des années de lutte acharnée contre les forces du Chaos ont laissé des traces chez le peuple Cosaque.\nLes Cosaques sont sujets à la Haine contre toutes les forces du Chaos (par ex. les membres de toute bande à laquelle les joueurs appliqueraient la règle spéciale Ennemis Ancestraux).",
  },
  "Hate Orcs and Goblins": {
    name: "Haine des Orques et Gobelins",
    description:
      "Tous les Nains haïssent les Orcs et les Gobliss",
  },
  "Horned One": {
    name: "Cornu",
    description:
      "L'Homme-bête possède de puissantes cornes et peut effectuer une Attaque supplémentaire avec sa Force de base lors d'un tour où il charge.",
  },
  "Incomparable Miners": {
    name: "Mineurs Incomparables",
    description:
      "Les Nains passent une grande partie de leur vie sous terre à chercher des minéraux précieux, et ils sont les meilleurs au monde dans ce domaine. Dans la cité de Mordheim, ils appliquent des compétences similaires à la recherche de pierre magique. Lors de la recherche de pierre magique à la fin d'une partie, ajoutez +1 au nombre de fragments trouvés pour une bande de Nains.",
  },
  "Infiltration": {
    name: "Infiltration",
    description:
      "Un Skaven possédant cette compétence est toujours placé sur le champ de bataille après la bande adverse et peut être placé n'importe où sur la table tant qu'il est hors de vue de la bande adverse et à plus de 12\" de toute figurine ennemie. Si les deux joueurs ont des figurines qui s'infiltrent, lancez un D6 pour chacun, et le jet le plus bas s'installe en premier.",
  },
  "Inheritance": {
    name: "Héritage",
    description:
      "Lors de la création de la bande kislevite, le Capitaine Druzhina est autorisé à acheter un objet dans la liste d'équipement des Guerriers Kislevites à la moitié de son coût normal.\nCet objet représente un précieux héritage familial transmis de génération en génération.\n\nPerdre un objet ancestral est considéré comme très irrespectueux et si l'objet est perdu (par exemple à la suite d'un résultat « Dépouillé » sur la table des blessures graves), le capitaine DOIT le remplacer par un substitut de facture raffinée aussi rapidement que possible sous peine d'être hanté par les esprits en colère de ses ancêtres.\nPour remplacer un objet ancestral, le Capitaine doit acheter le même équipement à 150 % de son prix normal.\nCe coût plus élevé représente les détails raffinés et les matériaux précieux utilisés dans la fabrication de l'objet.\n\nTant que l'objet n'est pas remplacé, le Capitaine subit un malus de -1 à tous ses tests et jets pour toucher.",
  },
  "Leader": {
    name: "Chef",
    description:
      "Tout guerrier se trouvant à moins de 6\" du Boss Orc peut utiliser sa valeur de Commandement lorsqu'il passe des tests de Commandement.",
  },
  "Lowest of the Low": {
    name: "Le Plus Bas de l'Échelle",
    description:
      "Les Ungors se trouvent au plus bas de l'échelle sociale des Hommes-bêtes et, quelle que soit l'Expérience qu'ils accumulent, ils n'obtiendront jamais une position d'autorité.\n\nSi un Ungor obtient le résultat « Le gars a du talent », le jet doit être relancé.",
  },
  "Manhater": {
    name: "Haine des Hommes",
    description:
      "Sera affecté par les règles de haine lorsqu'il combat contre n'importe quelle bande d'Humains.",
  },
  "Mark of Nurgle": {
    name: "Marque de Nurgle",
    description:
      "Le Banni est marqué du grand symbole de Nurgle, les trois sphères, qui suintent constamment du pus infâme.\n\nIl gagne +1 PV et est immunisé à tous les poisons.",
  },
  "May Hire": {
    name: "Peut Engager",
    description:
      "Une bande kislevite a accès à la même sélection de Francs-Tireurs que les bandes de Mercenaires Humains du livre de règles de Mordheim.",
  },
  "Middenheim Strength": {
    name: "Force de Middenheim",
    description:
      "Les hommes de Middenheim sont célèbres pour leur prouesse physique.\nPour représenter leur avantage en termes de taille et de carrure, les Champions et Capitaines d'une bande de Middenheim commencent avec une Force de 4 au lieu d'une Force de 3.",
  },
  "Minderz": {
    name: "Surveillants",
    description:
      "Chaque Squig des Cavernes doit toujours rester à moins de 6\" d'un Guerrier Goblin qui maintient la créature au pas. Si un Squig des Cavernes se retrouve sans Goblin à moins de 6\" au début de sa phase de Mouvement, il devient sauvage. À partir de ce moment, déplacez le Squig de 2D6\" dans une direction aléatoire à chacune de ses phases de Mouvement. Si son mouvement le met en contact avec une autre figurine (amie ou ennemie), il l'engagera au combat au corps à corps normalement. Le Squig des Cavernes échappe au contrôle du joueur Orc & Goblin jusqu'à la fin de la partie.",
  },
  "Movement": {
    name: "Mouvement",
    description:
      "Les Squigs des Cavernes n'ont pas de valeur de Mouvement fixe mais se déplacent avec une démarche bondissante et lourde. Pour représenter cela, lorsque vous déplacez des Squigs, lancez 2D6 pour la distance de déplacement. Les Squigs ne courent jamais et ne déclarent jamais de charges. Au lieu de cela, ils sont autorisés à entrer en contact avec des figurines ennemies grâce à leur mouvement normal de 2D6\". Si cela se produit, ils sont considérés comme chargeant pour le tour de combat rapproché suivant, tout comme s'ils avaient déclaré une charge.",
  },
  "Mutant": {
    name: "Mutant",
    description:
      "L'Homme-bête peut acheter une mutation.\n\nVoir la section Mutants pour les règles spéciales.",
  },
  "No Respect": {
    name: "Aucun Respect",
    description:
      "Les Brutes font l'objet d'un étrange mélange de pitié et de peur abjecte pour leurs semblables et ne peuvent jamais devenir chef de bande.",
  },
  "Nurgle’s Blessings": {
    name: "Bénédictions de Nurgle",
    description:
      "Les Bannis doivent commencer la partie avec une ou plusieurs Bénédictions de Nurgle.",
  },
  "Nurgle’s Rot": {
    name: "Pourriture de Nurgle",
    description:
      "Le Banni est infecté par la pestilence mortelle de son seigneur – la Pourriture de Nurgle.\n\nDe plus, le Banni est immunisé à tous les poisons.\n\nLa Pourriture de Nurgle est une contagion mortelle pour laquelle il n'existe aucun remède connu.\nCette maladie virulente peut se transmettre lors des combats au corps à corps.\n\nSi le Banni réussit un jet pour toucher de 6, le modèle ciblé contracte la Pourriture (note : la Pourriture de Nurgle n'affecte que les vivants, les Non-morts, les Démons et les Possédés ne sont donc pas affectés).\n\nLorsqu'un guerrier a contracté la Pourriture, notez-le sur la feuille de bande.\n\nPlutôt que de tuer la victime immédiatement, la Pourriture peut mettre un certain temps à s'installer.\nÀ partir de maintenant, avant le début de chaque bataille, le guerrier doit réussir un test d'Endurance.\n\nEn cas de réussite, sa constitution a réussi à repousser les effets de la Pourriture.\n\nEn cas d'échec, le guerrier perd définitivement un point d'Endurance (s'il atteint zéro, il a succombé à la Pourriture et est mort, retirez-le de la feuille de bande).\n\nDe plus, si un 6 est obtenu au test d'Endurance, il a transmis sans le vouloir la Pourriture à un autre membre de la bande (désignez aléatoirement un membre de la bande et notez-le sur la feuille).",
  },
  "Plague Cart": {
    name: "Charrette Pesteuse",
    description:
      "La nature Démoniaque de la Charette Pesteuse remplit d'énergie aussi bien les Démons que les mortels du Carnaval du Chaos.\n\nLe nombre maximum de guerriers autorisés dans la bande est augmenté de +2.\n\nDe plus, l'Instabilité Démoniaque des Démons au sein de la bande est légèrement compensée.\n\nLes Porte-Pestes et les Nurglings peuvent relancer leurs tests de Commandement pour l'Instabilité et bénéficient de +1 à leurs tests de Blessure s'ils sont mis Hors de combat.",
  },
  "Prayers": {
    name: "Prières",
    description:
      "Un Prêtre de Taal peut utiliser les prières de Taal énumérées ci-dessous.",
  },
  "Promotion": {
    name: "Promotion",
    description:
      "Un Halfling promu au rang de héros via l'avancement « Le gars a du talent » ne peut pas choisir la liste de compétences de Force.\nLes Halflings ne sont pas réputés pour leur grande force !",
  },
  "Protection of Sigmar": {
    name: "Protection de Sigmar",
    description:
      "Tout sort qui l'affecterait est annulé sur un jet de D6 de 4+. Notez que si le sort est annulé, il n'affectera pas non plus les autres figurines.",
  },
  "Regeneration": {
    name: "Régénération",
    description:
      "Les Trolls ont une physiologie unique qui leur permet de régénérer leurs blessures.\nChaque fois qu'un ennemi inflige avec succès une blessure à un Troll, lancez un D6 : sur un résultat de 4 ou plus, la blessure est ignorée et le Troll n'est pas blessé.\nLes Trolls ne peuvent pas régénérer les blessures causées par le feu ou la Magie basée sur le feu.\nLes Trolls ne lancent jamais de jet de Blessure après une bataille.",
  },
  "Reikland Leadership": {
    name: "Commandement du Reikland",
    description:
      "Les Mercenaires du Reikland sont habitués aux exigences de la discipline militaire et possèdent une loyauté très développée entre officiers et hommes.\nPour représenter cela, les combattants peuvent utiliser le Commandement de leur Capitaine s'ils se trouvent à moins de 12\" au lieu des 6\" habituels.\n\nUne solide tradition d'entraînement martial est également responsable du niveau élevé de tir à l'arc parmi le peuple du Reikland.\nTous les Tireurs ajoutent donc +1 à leur Capacité de Tir, qu'ils soient recrutés lors de la formation initiale de la bande ou ajoutés plus tard (cela est inclus dans leur profil).",
  },
  "Resource Hunter": {
    name: "Chercheur de Ressources",
    description:
      "Lors d'un jet sur le tableau d'Exploration, le Héros peut modifier un jet de dé de +1/-1.",
  },
  "Runts": {
    name: "Avortons",
    description:
      "Les Goblins peuvent gagner de l'expérience, mais s'ils obtiennent « Le gars a du talent », ils sont immédiatement tués par leurs maîtres Orcs pour être devenus trop « insolents » (retirez le Gobbo de la feuille de bande).",
  },
  "Self Sufficient": {
    name: "Autosuffisant",
    description:
      "Les hommes d'Ostland n'ont aucun désir de donner leur or chèrement gagné à des étrangers.\nPar conséquent, ils ne peuvent jamais engager de Mercenaires, à l'exception des Ogres (qui ne sont pas rares en Ostland).",
  },
  "Sign of Sigmar": {
    name: "Signe de Sigmar",
    description:
      "Les adversaires Possédés ou Non-morts perdent leur première attaque contre la Prêtresse lors du premier tour de combat rapproché (jusqu'à un minimum de 1).",
  },
  "Slow Witted": {
    name: "Esprit Lent",
    description:
      "Bien que les Ogres soient capables de gagner de l'expérience et de s'améliorer, ce ne sont pas les créatures les plus intelligentes.\n\nLes Ogres ne gagnent des avancements qu'à la moitié du rythme des autres (c'est-à-dire qu'ils doivent accumuler deux fois plus d'expérience que la normale pour obtenir un avancement).",
  },
  "Sorcerer's Curse": {
    name: "Malédiction du Sorcier",
    description:
      "Difficulté : 6\n\nLe sort a une portée de 12\" et affecte une seule figurine à portée. La cible doit relancer toutes ses sauvegardes d'armure et ses jets pour toucher réussis pendant la phase de combat rapproché des Skavens ainsi que pendant ses propres phases de tir et de combat rapproché suivantes.",
  },
  "Stream of Corruption": {
    name: "Jet de Corruption",
    description:
      "Les Porte-Pestes peuvent vomir un jet grotesque d'icots, d'entrailles et de crasse.\n\nCeci est considéré comme une attaque de tir d'une portée de 6\" et est résolu avec une Force de 3 sans sauvegarde d'armure autorisée.",
  },
  "Strictures": {
    name: "Restrictions",
    description:
      "Les Prêtres de Taal ne peuvent jamais porter d'Armure Lourde.",
  },
  "Swarm": {
    name: "Essaim",
    description:
      "Vous pouvez invoquer autant de Nurglings que vous le souhaitez (c'est-à-dire que vous pouvez avoir plus de cinq Nurglings dans un groupe de Hommes de Main).",
  },
  "Taunt": {
    name: "Provocation",
    description:
      "Après des années à provoquer ses adversaires dans des bagarres d'ivrognes, cet Ostlandais a appris certaines des insultes les plus viles de l'Empire.\nPendant la phase de Tir, le guerrier peut choisir d'insulter un ennemi au lieu de tirer avec une arme à projectile ou de lancer un sort.\nLe guerrier doit pouvoir voir l'ennemi et l'insulte suit toutes les règles de Ligne de Vue pour le tir (vous devez insulter l'ennemi le plus proche, etc.).\nLe joueur doit insulter la figurine ennemie d'une manière ou d'une autre dans la mesure du possible (peut-être que son chapeau ressemble à un perroquet étranglé ou que sa mère était une Bretonnienne !).\nL'ennemi passe ensuite un test de Commandement.\nS'il réussit, rien ne se passe, mais s'il échoue, il doit passer sa prochaine phase de Mouvement à essayer d'entrer en combat rapproché avec le guerrier qui l'a provoqué.",
  },
  "Thick Skull": {
    name: "Crâne Épais",
    description:
      "Sauvegarde de 3+ sur un D6 pour éviter d'être assommé. Si la sauvegarde est réussie, le résultat assommé devient à terre. Si le Nain porte également un casque, cette sauvegarde passe à 2+ au lieu de 3+.",
  },
  "Trained": {
    name: "Dressé",
    description:
      "Un ours ne se soucie pas de la mission de la bande ni de son inimitié envers les autres bandes - il ne fait que suivre les ordres de son dresseur.\n\nParfois, il s'ennuie en attendant les ordres ; pour cette raison, les Ours Dressés sont soumis aux règles de Stupidité.\nS'il reçoit une « attention particulière » de la part de son dresseur, il obéira un peu mieux ; un ours n'est donc pas tenu de passer ces tests de Stupidité si le Dompteur d'Ours de la bande se trouve à moins de 6\".\n\nEn fait, c'est le seul membre de la bande que l'ours écoutera ; un Ours Dressé n'utilisera jamais le Commandement du chef de bande pour les tests qu'il doit passer.\nIl peut cependant utiliser le Commandement du Dompteur d'Ours s'il se trouve à moins de 6\" de lui.\n\nNotez que la bande ne peut pas contrôler l'ours sans Dompteur d'Ours.\n\nL'Ours Dressé ne peut être utilisé dans aucune partie à laquelle le Dompteur d'Ours de la bande ne participe pas (ce qui signifie que si la bande n'inclut aucun Dompteur d'Ours, la bande doit garder l'ours au camp jusqu'à ce qu'elle en engage un nouveau !).",
  },
  "Trample": {
    name: "Piétinement",
    description:
      "En plus de leurs armes, les Centigors utilisent leurs sabots et leur taille imposante pour écraser leurs ennemis.\nCeci compte comme une attaque supplémentaire, qui ne bénéficie d'aucun bonus ou pénalité d'arme...",
  },
  "True Grit": {
    name: "Cran Véritable",
    description:
      "Lors d'un jet sur la Table des Blessures pour ce Héros, un résultat de 1-3 est traité comme À terre, 4-5 comme Assommé et 6 comme Hors de combat.",
  },
  "Unliving": {
    name: "Non-Vivant",
    description:
      "Les Loups Funèbres ne gagnent pas d'expérience.\nOn n'apprend pas de nouveaux tours à un vieux singe !",
  },
  "Unnatural Strength": {
    name: "Force Contre-Nature",
    description:
      "Les Brutes commencent la partie avec la compétence Costaud de la liste de compétences de Force du livre de règles de Mordheim.",
  },
  "Utter Determination": {
    name: "Détermination Totale",
    description:
      "Seule la Matriarche peut avoir cette compétence, qui lui permet de relancer tout test de Déroute raté.",
  },
  "Vomit Attack": {
    name: "Attaque de Vomi",
    description:
      "Au lieu de ses attaques normales, un Troll peut régurgiter ses sucs digestifs extrêmement corrosifs sur un malheureux adversaire en combat rapproché.\nIl s'agit d'une attaque unique qui touche automatiquement avec une Force de 5 et ignore les sauvegardes d'armure.",
  },
  "Warpfire": {
    name: "Feu du Warp",
    description:
      "Difficulté : 8\n\nLe sort a une portée de 8\", touchant la première figurine sur sa trajectoire. Le sort cause D3 touches de Force 4 à sa cible, et une touche de Force 3 à chaque figurine se trouvant à moins de 2\" de la cible.",
  },
  "Woodland Dwelling": {
    name: "Habitant des Bois",
    description:
      "Les Centigors sont des créatures des forêts profondes et sombres.\nIls ne subissent aucune pénalité de mouvement pour se déplacer à travers les zones boisées.",
  },
  "art of silent death": {
    name: "Art de la Mort Silencieuse",
    description:
      "En combat rapproché, le Skaven peut se battre à mains nues sans aucune pénalité et compte comme ayant deux armes (c'est-à-dire +1 attaque). De plus, un Héros Skaven possédant cette compétence causera un coup critique sur un jet Pour Blesser de 5-6 au lieu de seulement 6. Cette compétence peut être utilisée conjointement avec les Griffes d'Combat Eshin (+2 Attaques au lieu de +1).",
  },
  "black hunger": {
    name: "Faim Noire",
    description:
      "Le Héros Skaven peut déclarer au début de son tour qu'il utilise cette compétence. Le Héros peut ajouter +1 attaque et +D3\" au mouvement total de son profil pour la durée de son propre tour, mais subira D3 touches S3 sans sauvegarde d'armure possible à la fin du tour.",
  },
  "tail fighting": {
    name: "Combat à la Queue",
    description:
      "Le Skaven peut manier un bouclier, un couteau ou une épée avec sa queue. La figurine gagne une attaque supplémentaire avec l'arme appropriée ou un bonus de +1 à sa sauvegarde d'armure.",
  },
  "waaagh!": {
    name: "Waaagh !",
    description:
      "Le guerrier peut ajouter +D3\" à sa portée de charge.",
  },
  "wall runner": {
    name: "Coureur de Murailles",
    description:
      "Le Skaven n'a pas besoin de passer de test d'Initiative lorsqu'il escalade des murs et d'autres surfaces escarpées.",
  },
  "well ’ard": {
    name: "Bien Coriace",
    description:
      "Telle est la résistance de l'Orc qu'il peut ajouter +1 à toutes ses sauvegardes d'armure.",
  },
  "’ard ead": {
    name: "Tête Dure",
    description:
      "Il bénéficie d'une sauvegarde spéciale de 3+ sur un D6 pour éviter d'être assommé. Si la sauvegarde est réussie, traitez un résultat assommé comme à terre à la place. Si l'Orc porte également un casque, cette sauvegarde passe à 2+ au lieu de 3+ (cela remplace la règle spéciale habituelle du casque).",
  },
  "’eadbasher": {
    name: "Fracasse-Crâne",
    description:
      "Tous les résultats À terre causés par l'Orc en combat rapproché comptent comme des résultats Assommé à la place.",
  },
  "’ere we go!": {
    name: "C'est Parti !",
    description:
      "Le modèle peut ignorer les tests de Peur et de Terreur lorsqu'il charge.",
  },
});
