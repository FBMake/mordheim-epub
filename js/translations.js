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
