// Fichier généré par tools/bsdata/build.py : ne pas modifier à la main.
// Données de jeu extraites de BSData/mordheim, traduites dans tools/bsdata/fr.json.
export const BANDES = [
 {
  "id": "reikland",
  "nom": "Mercenaires du Reikland",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Discipline du Reikland",
    "resume": "Rompus à la discipline militaire, les guerriers peuvent utiliser le Commandement de leur capitaine jusqu'à 12 ps au lieu de 6. Les Tireurs, fameux archers du Reikland, ont +1 en CT (déjà compté dans leur profil)."
   }
  ],
  "guerriers": [
   {
    "id": "reikland/mercenary-captain",
    "nom": "Capitaine mercenaire",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "reikland/champion",
    "nom": "Champion",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Tir",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "reikland/youngblood",
    "nom": "Jeune sang",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Tir",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "reikland/swordsmen",
    "nom": "Spadassins",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "reikland/marksmen",
    "nom": "Tireurs",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 7,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       }
      ]
     }
    ]
   },
   {
    "id": "reikland/warriors",
    "nom": "Guerriers",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Reiklanders (1a) (révision 10)"
 },
 {
  "id": "middenheim",
  "nom": "Mercenaires de Middenheim",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Carrure de Middenheim",
    "resume": "Les gens du Nord sont bâtis comme des bœufs : le capitaine et les champions commencent avec une Force de 4 au lieu de 3 (déjà compté dans leur profil)."
   }
  ],
  "guerriers": [
   {
    "id": "middenheim/mercenary-captain",
    "nom": "Capitaine mercenaire",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de loup",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "middenheim/champion",
    "nom": "Champion",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de loup",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "middenheim/youngblood",
    "nom": "Jeune sang",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de loup",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "middenheim/swordsmen",
    "nom": "Spadassins",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "middenheim/marksmen",
    "nom": "Tireurs",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 7,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       }
      ]
     }
    ]
   },
   {
    "id": "middenheim/warriors",
    "nom": "Guerriers",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Middenheimers (1a) (révision 8)"
 },
 {
  "id": "marienburg",
  "nom": "Mercenaires de Marienburg",
  "tresor": 600,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Grands marchands",
    "resume": "Grâce à leurs contacts dans les guildes, les Marienbourgeois ajoutent +1 à leurs jets pour trouver des objets rares. Leur fortune leur donne 600 co au départ d'une campagne au lieu de 500 (+20 % en partie isolée)."
   }
  ],
  "guerriers": [
   {
    "id": "marienburg/mercenary-captain",
    "nom": "Capitaine mercenaire",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "marienburg/champion",
    "nom": "Champion",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Tir",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "marienburg/youngblood",
    "nom": "Jeune sang",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Tir",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "marienburg/swordsmen",
    "nom": "Spadassins",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "marienburg/marksmen",
    "nom": "Tireurs",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 7,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       }
      ]
     }
    ]
   },
   {
    "id": "marienburg/warriors",
    "nom": "Guerriers",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Marienburgers (1a) (révision 8)"
 },
 {
  "id": "possedes",
  "nom": "Culte des Possédés",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "possedes/magister",
    "nom": "Magister",
    "categorie": "heros",
    "cout": 70,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Sorcier (Rituels du Chaos)",
      "resume": "Lance des sorts tirés des Rituels du Chaos."
     }
    ],
    "competences": [
     "Vitesse",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "possedes/possessed",
    "nom": "Possédés",
    "categorie": "heros",
    "cout": 90,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "2",
     "I": "4",
     "A": "2",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Mutations",
      "resume": "La figurine peut commencer avec une ou plusieurs mutations, achetées au recrutement. Un mutant doit en avoir au moins une."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse"
    ],
    "equipement": []
   },
   {
    "id": "possedes/mutants",
    "nom": "Mutants",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Mutations",
      "resume": "La figurine peut commencer avec une ou plusieurs mutations, achetées au recrutement. Un mutant doit en avoir au moins une."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "possedes/beastmen",
    "nom": "Hommes-bêtes",
    "categorie": "hdm",
    "cout": 45,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "2",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "possedes/darksouls",
    "nom": "Âmes damnées",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Démence",
      "resume": "Rendues folles par la possession démoniaque, les Âmes damnées ne connaissent pas la peur et réussissent automatiquement tous leurs tests de Commandement."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "possedes/brethren",
    "nom": "Frères du culte",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 10
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Cult of the Possessed (1a) (révision 11)"
 },
 {
  "id": "repurgateurs",
  "nom": "Répurgateurs",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [],
  "guerriers": [
   {
    "id": "repurgateurs/witch-hunter-captain",
    "nom": "Capitaine répurgateur",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Au bûcher !",
      "resume": "Le répurgateur voue une haine féroce à tous les lanceurs de sorts (voir Haine)."
     },
     {
      "nom": "Haine",
      "resume": "Lors du premier tour de chaque corps à corps contre un ennemi qu'elle hait, la figurine peut relancer tous ses jets pour toucher ratés."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     }
    ]
   },
   {
    "id": "repurgateurs/warrior-priest",
    "nom": "Prêtre-guerrier",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Prières de Sigmar",
      "resume": "Peut invoquer les Prières de Sigmar comme un sorcier lance ses sorts."
     }
    ],
    "competences": [
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     }
    ]
   },
   {
    "id": "repurgateurs/witch-hunter",
    "nom": "Répurgateur",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 3,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Au bûcher !",
      "resume": "Le répurgateur voue une haine féroce à tous les lanceurs de sorts (voir Haine)."
     },
     {
      "nom": "Haine",
      "resume": "Lors du premier tour de chaque corps à corps contre un ennemi qu'elle hait, la figurine peut relancer tous ses jets pour toucher ratés."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     }
    ]
   },
   {
    "id": "repurgateurs/flagellants",
    "nom": "Flagellants",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "10"
    },
    "regles": [
     {
      "nom": "Fanatique",
      "resume": "Portés par leur foi, les Flagellants réussissent automatiquement tous leurs tests de Commandement mais ne peuvent jamais devenir chef de la bande."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "repurgateurs/zealots",
    "nom": "Zélotes",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     }
    ]
   },
   {
    "id": "repurgateurs/warhounds",
    "nom": "Chiens de guerre",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": []
   }
  ],
  "source": "BSData/mordheim · Witch Hunters (1a) (révision 10)"
 },
 {
  "id": "soeurs",
  "nom": "Sœurs de Sigmar",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "soeurs/sigmarite-matriarch",
    "nom": "Matriarche sigmarite",
    "categorie": "heros",
    "cout": 70,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Prières de Sigmar",
      "resume": "Peut invoquer les Prières de Sigmar comme un sorcier lance ses sorts."
     }
    ],
    "competences": [
     "Vitesse",
     "Force",
     "Spéciales (Sœurs de Sigmar)",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
        "cout": 15
       },
       {
        "nom": "Fouet d'acier",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Livre saint",
        "cout": 100
       },
       {
        "nom": "Eau bénite",
        "cout": 10
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "soeurs/sister-superior",
    "nom": "Sœur supérieure",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 3,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Force",
     "Spéciales (Sœurs de Sigmar)",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
        "cout": 15
       },
       {
        "nom": "Fouet d'acier",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Livre saint",
        "cout": 100
       },
       {
        "nom": "Eau bénite",
        "cout": 10
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "soeurs/augur",
    "nom": "Augure",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Vision bénie",
      "resume": "L'Augure peut relancer ses tests de caractéristique ratés et ses jets pour toucher ratés (au tir comme au corps à corps) ; le second résultat est définitif. Si elle n'est pas hors de combat, lancez deux dés pour elle lors de l'exploration et gardez celui de votre choix."
     }
    ],
    "competences": [
     "Vitesse",
     "Spéciales (Sœurs de Sigmar)",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
        "cout": 15
       },
       {
        "nom": "Fouet d'acier",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Livre saint",
        "cout": 100
       },
       {
        "nom": "Eau bénite",
        "cout": 10
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "soeurs/sisters",
    "nom": "Sœurs",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
        "cout": 15
       },
       {
        "nom": "Fouet d'acier",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     }
    ]
   },
   {
    "id": "soeurs/novices",
    "nom": "Novices",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 10,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
        "cout": 15
       },
       {
        "nom": "Fouet d'acier",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Sisters of Sigmar (1a) (révision 11)"
 },
 {
  "id": "morts-vivants",
  "nom": "Morts-Vivants",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "morts-vivants/vampire",
    "nom": "Vampire",
    "categorie": "heros",
    "cout": 110,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "4",
     "F": "4",
     "E": "4",
     "PV": "2",
     "I": "5",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     },
     {
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     }
    ],
    "competences": [
     "Vitesse",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     }
    ]
   },
   {
    "id": "morts-vivants/necromancer",
    "nom": "Nécromancien",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Sorcier (Nécromancie)",
      "resume": "Lance des sorts tirés de la Nécromancie."
     }
    ],
    "competences": [
     "Vitesse",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     }
    ]
   },
   {
    "id": "morts-vivants/dregs",
    "nom": "Larbins",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     }
    ]
   },
   {
    "id": "morts-vivants/dire-wolves",
    "nom": "Loups funestes",
    "categorie": "hdm",
    "cout": 50,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "9",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Non-vivant",
      "resume": "Les Loups funestes ne gagnent jamais d'expérience."
     },
     {
      "nom": "Charge sauvage",
      "resume": "Les Loups funestes ont 2 Attaques au lieu d'1 lors du tour où ils chargent."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "morts-vivants/ghouls",
    "nom": "Goules",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "2",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "morts-vivants/zombies",
    "nom": "Zombies",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "0",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "1",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": []
   }
  ],
  "source": "BSData/mordheim · Undead (1a) (révision 6)"
 },
 {
  "id": "skavens",
  "nom": "Skavens du Clan Eshin",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [],
  "guerriers": [
   {
    "id": "skavens/assassin-adept",
    "nom": "Maître assassin",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "4",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Spéciales (Skavens)",
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Lames suintantes",
        "cout": 50
       },
       {
        "nom": "Griffes de combat",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet à malepierre",
        "cout": 35
       },
       {
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "skavens/eshin-sorcerer",
    "nom": "Sorcier d'Eshin",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Sorcier (Magie du Rat Cornu)",
      "resume": "Lance des sorts tirés de la Magie du Rat Cornu."
     }
    ],
    "competences": [
     "Vitesse",
     "Spéciales (Skavens)",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Lames suintantes",
        "cout": 50
       },
       {
        "nom": "Griffes de combat",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet à malepierre",
        "cout": 35
       },
       {
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "skavens/black-skaven",
    "nom": "Skavens noirs",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Spéciales (Skavens)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Lames suintantes",
        "cout": 50
       },
       {
        "nom": "Griffes de combat",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet à malepierre",
        "cout": 35
       },
       {
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "skavens/night-runners",
    "nom": "Coureurs nocturnes",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "2",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "4"
    },
    "regles": [],
    "competences": [
     "Tir",
     "Spéciales (Skavens)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     }
    ]
   },
   {
    "id": "skavens/rat-ogre",
    "nom": "Rat-ogre",
    "categorie": "hdm",
    "cout": 210,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "3",
     "F": "5",
     "E": "5",
     "PV": "3",
     "I": "4",
     "A": "4",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "skavens/verminkin",
    "nom": "Guerriers vermine",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "5"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     }
    ]
   },
   {
    "id": "skavens/giant-rats",
    "nom": "Rats géants",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "2",
     "CT": "0",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "4"
    },
    "regles": [],
    "competences": [],
    "equipement": []
   }
  ],
  "source": "BSData/mordheim · Skaven (1a) (révision 10)"
 },
 {
  "id": "nains",
  "nom": "Nains chasseurs de trésor",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Tête dure",
    "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
   },
   {
    "nom": "Habitués à l'armure",
    "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
   },
   {
    "nom": "Haine des peaux-vertes",
    "resume": "Tous les Nains haïssent les Orques et les Gobelins (voir Haine)."
   },
   {
    "nom": "Rancuniers",
    "resume": "En souvenir des guerres anciennes, une bande naine ne recrute jamais d'épée à louer ni de personnage elfe."
   },
   {
    "nom": "Mineurs incomparables",
    "resume": "Experts en minerais, les Nains ajoutent +1 au nombre de fragments de malepierre trouvés à la fin de chaque partie."
   },
   {
    "nom": "Durs à cuire",
    "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
   }
  ],
  "guerriers": [
   {
    "id": "nains/noble",
    "nom": "Noble nain",
    "categorie": "heros",
    "cout": 85,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "3",
     "CC": "5",
     "CT": "4",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Tir",
     "Force",
     "Spéciales (Nains)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure en gromril",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hache naine",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "nains/engineer",
    "nom": "Ingénieur",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 1,
    "xp": 10,
    "profil": {
     "M": "3",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Armurier expert",
      "resume": "Tant que l'Ingénieur reste dans la bande, la portée des armes de tir naines augmente de 3 ps pour les pistolets et de 6 ps pour les arbalètes et arquebuses."
     }
    ],
    "competences": [
     "Tir",
     "Spéciales (Nains)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     }
    ]
   },
   {
    "id": "nains/troll-slayer",
    "nom": "Tueurs de trolls",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "3",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Vœu de mort",
      "resume": "Le Tueur cherche une fin glorieuse : insensible à la psychologie, il n'a jamais à tester lorsqu'il combat seul."
     }
    ],
    "competences": [
     "Force",
     "Spéciales (Nains)",
     "Spéciales (Tueurs de trolls)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure en gromril",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hache naine",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "nains/clansmen",
    "nom": "Guerriers du clan",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "3",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "9"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure en gromril",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hache naine",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "nains/thunderers",
    "nom": "Arquebusiers",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "3",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "9"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     }
    ]
   },
   {
    "id": "nains/beardlings",
    "nom": "Jeunes barbes",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "3",
     "CC": "3",
     "CT": "2",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure en gromril",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hache naine",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Dwarf Treasure Hunters (1a) (révision 23)"
 },
 {
  "id": "orques",
  "nom": "Bande d'Orques",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Animosité",
    "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
   },
   {
    "nom": "Compagnie peu recommandable",
    "resume": "Peu de mercenaires acceptent de servir des Orques : seuls les Gladiateurs, Gardes du corps ogres et Sorciers mercenaires peuvent être recrutés."
   }
  ],
  "guerriers": [
   {
    "id": "orques/orc-boss",
    "nom": "Boss orque",
    "categorie": "heros",
    "cout": 80,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Spéciales (Orques)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "orques/orc-big-uns",
    "nom": "Grands Kostauds",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 15,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Tir",
     "Force",
     "Spéciales (Orques)",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "orques/orc-shaman",
    "nom": "Chamane orque",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 10,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Sorcier (Magie de la Waaagh!)",
      "resume": "Lance des sorts tirés de la Magie de la Waaagh!."
     }
    ],
    "competences": [
     "Force",
     "Spéciales (Orques)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "orques/troll",
    "nom": "Troll",
    "categorie": "hdm",
    "cout": 200,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "1",
     "F": "5",
     "E": "4",
     "PV": "3",
     "I": "1",
     "A": "3",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Toujours affamé",
      "resume": "Le Troll coûte 15 co d'entretien après chaque partie. À défaut, le Boss peut lui sacrifier deux Gobelins ou Squigs ; sinon le Troll s'en va chercher pitance ailleurs."
     },
     {
      "nom": "Vomissure",
      "resume": "Au lieu de ses attaques, le Troll peut vomir sur un adversaire au contact : une seule attaque qui touche automatiquement à Force 5, sans sauvegarde d'armure."
     },
     {
      "nom": "Régénération",
      "resume": "Chaque blessure infligée au Troll est ignorée sur 4+, sauf si elle vient du feu ou d'une magie de feu. Le Troll ne lance jamais de blessure grave après la partie."
     },
     {
      "nom": "Monstre stupide",
      "resume": "Trop bête pour apprendre : le Troll ne gagne jamais d'expérience."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "orques/orc-boyz",
    "nom": "Boyz orques",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Animosité",
      "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "orques/cave-squig",
    "nom": "Squigs des cavernes",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "2d6",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Bonds",
      "resume": "Le Squig n'a pas de Mouvement fixe : il bondit de 2D6 ps, ne court jamais et ne déclare pas de charge, mais compte comme chargeant s'il entre en contact avec un ennemi."
     },
     {
      "nom": "Gardiens de squigs",
      "resume": "Chaque Squig doit rester à 6 ps ou moins d'un Gobelin. Sinon, au début de son mouvement, il devient incontrôlable et bondit de 2D6 ps dans une direction aléatoire jusqu'à la fin de la partie."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Pas des Orques",
      "resume": "Pour le test de déroute, chaque Gobelin ou Squig hors de combat ne compte que pour une demi-figurine."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "orques/goblin-warriors",
    "nom": "Guerriers gobelins",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Avortons",
      "resume": "Un Gobelin qui obtient « Ce gars a du talent » est aussitôt tué par ses maîtres orques : retirez-le de la feuille de bande."
     },
     {
      "nom": "Animosité gobeline",
      "resume": "Un Gobelin qui obtient « J'l'ai entendu ! » n'ose jamais charger un Orque ; il peut toutefois lui tirer dessus."
     },
     {
      "nom": "Animosité",
      "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
     },
     {
      "nom": "Pas des Orques",
      "resume": "Pour le test de déroute, chaque Gobelin ou Squig hors de combat ne compte que pour une demi-figurine."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Pique à squig",
        "cout": 15
       },
       {
        "nom": "Boulet et chaîne",
        "cout": 15
       },
       {
        "nom": "Champignons fous",
        "cout": 25
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Orc Mob (1a) (révision 19)"
 },
 {
  "id": "hommes-betes",
  "nom": "Pillards hommes-bêtes",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "hommes-betes/beastmen-chieftain",
    "nom": "Chef homme-bête",
    "categorie": "heros",
    "cout": 65,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Spéciales (Hommes-bêtes)",
     "Vitesse",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/centigors",
    "nom": "Centigor",
    "categorie": "heros",
    "cout": 80,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "8",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Ivrognes",
      "resume": "Au début de chaque tour, lancez 1D6 : sur 1, le Centigor est soumis à la Stupidité ; sur 6, à la Frénésie. Tant qu'il subit l'une ou l'autre, il ignore le reste de la psychologie."
     },
     {
      "nom": "Sylvestre",
      "resume": "Le Centigor ne subit aucune pénalité de mouvement en forêt."
     },
     {
      "nom": "Piétinement",
      "resume": "Les sabots du Centigor lui donnent une attaque supplémentaire qui ne bénéficie d'aucun bonus ni pénalité d'arme."
     }
    ],
    "competences": [
     "Spéciales (Hommes-bêtes)",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/beastmen-shaman",
    "nom": "Chamane homme-bête",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 11,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Sorcier (Rituels du Chaos)",
      "resume": "Lance des sorts tirés des Rituels du Chaos."
     }
    ],
    "competences": [
     "Spéciales (Hommes-bêtes)",
     "Vitesse",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/bestigors",
    "nom": "Bestigors",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Spéciales (Hommes-bêtes)",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/minotaur",
    "nom": "Minotaure",
    "categorie": "hdm",
    "cout": 200,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "3",
     "I": "4",
     "A": "3",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Soif de sang",
      "resume": "Si le Minotaure met hors de combat tous ses adversaires au corps à corps, il devient frénétique sur 4+."
     },
     {
      "nom": "Bête",
      "resume": "Le Minotaure peut gagner de l'expérience mais ne devient jamais un héros."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/gor",
    "nom": "Gors",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/ungor",
    "nom": "Ungors",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Moins que rien",
      "resume": "Au bas de l'échelle, un Ungor ne devient jamais héros : relancez le résultat « Ce gars a du talent »."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ]
   },
   {
    "id": "hommes-betes/warhounds-of-chaos",
    "nom": "Chiens du Chaos",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "7",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": []
   }
  ],
  "source": "BSData/mordheim · Beastmen Raiders (1a) (révision 6)"
 },
 {
  "id": "carnaval",
  "nom": "Carnaval du Chaos",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Fréquentation dangereuse",
    "resume": "Trop pestilentiel pour qu'un mercenaire y survive : le Carnaval ne peut recruter aucune épée à louer."
   }
  ],
  "guerriers": [
   {
    "id": "carnaval/carnival-master",
    "nom": "Maître du Carnaval",
    "categorie": "heros",
    "cout": 70,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Sorcier (Rituels de Nurgle)",
      "resume": "Lance des sorts tirés des Rituels de Nurgle."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 10
       },
       {
        "nom": "Arc",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "carnaval/brutes",
    "nom": "Brutes",
    "categorie": "heros",
    "cout": 60,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "2",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Force surnaturelle",
      "resume": "Les Brutes commencent avec la compétence Homme fort."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse",
     "Force"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "carnaval/tainted-ones",
    "nom": "Corrompus",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Bénédictions de Nurgle",
      "resume": "Le Corrompu commence la partie avec au moins une Bénédiction de Nurgle, achetée au recrutement."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 10
       },
       {
        "nom": "Arc",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "carnaval/plague-cart",
    "nom": "Char de la peste",
    "categorie": "hdm",
    "cout": 120,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "",
     "CC": "",
     "CT": "",
     "F": "",
     "E": "8",
     "PV": "4",
     "I": "",
     "A": "",
     "Cd": ""
    },
    "regles": [
     {
      "nom": "Char de la peste",
      "resume": "Le char augmente de 2 l'effectif maximum de la bande. Porte-peste et Nurglings relancent leurs tests d'instabilité et ajoutent +1 à leurs jets de blessure."
     },
     {
      "nom": "Gardien",
      "resume": "Le Gardien fait corps avec le char : il ne le quitte jamais, n'est blessé que si le char est détruit, ne gagne pas d'expérience et ses attaques transmettent la Pourriture de Nurgle."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     },
     {
      "nom": "Pourriture de Nurgle",
      "resume": "Insensible au poison. Sur un jet pour toucher de 6 au corps à corps, la cible vivante contracte la Pourriture : avant chaque partie, elle doit réussir un test d'Endurance ou perdre définitivement 1 point d'Endurance."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "carnaval/plague-bearers",
    "nom": "Porte-peste",
    "categorie": "hdm",
    "cout": 50,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "4",
     "A": "2",
     "Cd": "10"
    },
    "regles": [
     {
      "nom": "Nuée de mouches",
      "resume": "Les mouches qui l'entourent harcèlent ses adversaires : -1 pour toucher au corps à corps contre lui."
     },
     {
      "nom": "Flot de corruption",
      "resume": "Attaque de tir de 6 ps de portée, Force 3, sans sauvegarde d'armure."
     },
     {
      "nom": "Démon",
      "resume": "Démon fait des forces immuables du Chaos et non de chair : ne gagne jamais d'expérience."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     },
     {
      "nom": "Aura démoniaque",
      "resume": "Sauvegarde spéciale de 5+, modifiée par la Force de l'attaque et annulée par les armes magiques et les sorts. Ses attaques comptent comme magiques."
     },
     {
      "nom": "Instabilité démoniaque",
      "resume": "Mis hors de combat, il est banni sur 1-3 (pas de jet de blessure grave). Si la bande se met en déroute, chacun doit réussir un test de Commandement ou être détruit."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "carnaval/brethren",
    "nom": "Frères du Carnaval",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 10
       },
       {
        "nom": "Arc",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "carnaval/nurglings",
    "nom": "Nurglings",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "0",
     "F": "3",
     "E": "2",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "10"
    },
    "regles": [
     {
      "nom": "Nuée de mouches",
      "resume": "Les mouches qui l'entourent harcèlent ses adversaires : -1 pour toucher au corps à corps contre lui."
     },
     {
      "nom": "Essaim",
      "resume": "Un groupe de Nurglings n'est pas limité à cinq figurines."
     },
     {
      "nom": "Démon",
      "resume": "Démon fait des forces immuables du Chaos et non de chair : ne gagne jamais d'expérience."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     },
     {
      "nom": "Aura démoniaque",
      "resume": "Sauvegarde spéciale de 5+, modifiée par la Force de l'attaque et annulée par les armes magiques et les sorts. Ses attaques comptent comme magiques."
     },
     {
      "nom": "Instabilité démoniaque",
      "resume": "Mis hors de combat, il est banni sur 1-3 (pas de jet de blessure grave). Si la bande se met en déroute, chacun doit réussir un test de Commandement ou être détruit."
     }
    ],
    "competences": [],
    "equipement": []
   }
  ],
  "source": "BSData/mordheim · Carnival of Chaos (1a) (révision 4)"
 },
 {
  "id": "kislevites",
  "nom": "Kislevites",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Recrutement",
    "resume": "Une bande kislevite peut recruter les mêmes épées à louer que les bandes de mercenaires humains."
   },
   {
    "nom": "Ennemis ancestraux",
    "resume": "Une bande kislevite ne peut jamais s'allier à une bande du Chaos (Possédés, Hommes-bêtes, Skavens, Elfes noirs, Nains du Chaos…)."
   }
  ],
  "guerriers": [
   {
    "id": "kislevites/druzhina-captain",
    "nom": "Capitaine druzhina",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       }
      ]
     }
    ]
   },
   {
    "id": "kislevites/bear-tamer",
    "nom": "Dresseur d'ours",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Dresseur d'ours",
      "resume": "Permet de recruter un Ours dressé. À 6 ps ou moins du dresseur (même à terre ou sonné), l'ours réussit automatiquement ses tests de Stupidité."
     }
    ],
    "competences": [
     "Vitesse",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "kislevites/esaul",
    "nom": "Esaoul",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Tir",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "kislevites/youths",
    "nom": "Jeunes",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "kislevites/trained-bear",
    "nom": "Ours dressé",
    "categorie": "hdm",
    "cout": 125,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "5",
     "E": "5",
     "PV": "2",
     "I": "2",
     "A": "2",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Dressé",
      "resume": "Soumis à la Stupidité, sauf à 6 ps ou moins du Dresseur d'ours, dont il peut seul utiliser le Commandement. L'ours ne joue pas si le dresseur est absent."
     },
     {
      "nom": "Étreinte de l'ours",
      "resume": "Si l'ours touche la même cible de ses deux attaques, il peut les remplacer par une étreinte : chacun lance 1D6 + Force ; si l'ours égale ou bat son adversaire, celui-ci subit une blessure sans sauvegarde d'armure."
     },
     {
      "nom": "Fidélité farouche",
      "resume": "Tant que son ours n'est pas mis hors de combat, le dresseur traite les résultats « Vendu aux arènes », « Dépouillé » et « Capturé » des blessures graves comme une guérison complète."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": []
   },
   {
    "id": "kislevites/cossacks",
    "nom": "Cosaques",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Haine du Chaos",
      "resume": "Les Cosaques haïssent toutes les forces du Chaos (voir Haine)."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "kislevites/warriors",
    "nom": "Guerriers",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Couteaux et étoiles de lancer",
        "cout": 15
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "kislevites/streltsi",
    "nom": "Streltsi",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Appui de tir",
      "resume": "Armé d'une hallebarde et d'une arquebuse, le Streltsi qui ne bouge pas peut appuyer son arme sur la hallebarde : +1 pour toucher avec l'arquebuse."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Kislevites (1a) (révision 8)"
 },
 {
  "id": "averland",
  "nom": "Mercenaires d'Averland",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "averland/captain",
    "nom": "Capitaine",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ]
   },
   {
    "id": "averland/bergjaeger",
    "nom": "Bergjaeger",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 4,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Poseur de pièges",
      "resume": "En passant un tour sans rien faire d'autre, le Bergjaeger pose un pion piège. Toute figurine qui passe à 2 ps le déclenche sur 3+ et subit une touche de F4 ; le pion est ensuite retiré."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 25
       }
      ]
     }
    ]
   },
   {
    "id": "averland/sergeant",
    "nom": "Sergent",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ]
   },
   {
    "id": "averland/youngblood",
    "nom": "Jeune sang",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Vitesse",
     "Tir",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ]
   },
   {
    "id": "averland/mountainguard",
    "nom": "Gardes des montagnes",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ]
   },
   {
    "id": "averland/marksmen",
    "nom": "Tireurs",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       }
      ]
     }
    ]
   },
   {
    "id": "averland/halflings-scouts",
    "nom": "Éclaireurs halflings",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Promotion",
      "resume": "Un halfling promu héros (« Ce gars a du talent ») ne peut pas choisir la liste Force."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 25
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Averlanders (1a) (révision 4)"
 },
 {
  "id": "ostland",
  "nom": "Mercenaires d'Ostland",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Autarcie",
    "resume": "Les Ostlandais ne paient pas d'étrangers : ils ne recrutent aucune épée à louer, sauf des Ogres."
   }
  ],
  "guerriers": [
   {
    "id": "ostland/elder",
    "nom": "Ancien",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Vitesse",
     "Tir",
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "ostland/priest-of-taal",
    "nom": "Prêtre de Taal",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Préceptes",
      "resume": "Un Prêtre de Taal ne peut jamais porter d'armure lourde."
     },
     {
      "nom": "Prières de Taal",
      "resume": "Peut invoquer les Prières de Taal comme un sorcier lance ses sorts."
     }
    ],
    "competences": [
     "Vitesse",
     "Force",
     "Combat",
     "Érudition"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "ostland/blood-brothers",
    "nom": "Frères de sang",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Force",
     "Combat"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "ostland/ogre",
    "nom": "Ogre",
    "categorie": "hdm",
    "cout": 160,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "2",
     "F": "4",
     "E": "4",
     "PV": "3",
     "I": "3",
     "A": "2",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Lent d'esprit",
      "resume": "L'Ogre doit accumuler deux fois plus d'expérience que les autres pour chaque progression."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "ostland/kin",
    "nom": "Parentèle",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ]
   },
   {
    "id": "ostland/jaeger",
    "nom": "Jaegers",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 7,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 30
       },
       {
        "nom": "Fusil de chasse à deux canons",
        "cout": 300
       }
      ]
     }
    ]
   },
   {
    "id": "ostland/ruffians",
    "nom": "Ruffians",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "10"
    },
    "regles": [
     {
      "nom": "Ivres",
      "resume": "Imbibés de tord-boyaux, les Ruffians réussissent automatiquement tous leurs tests de Commandement."
     },
     {
      "nom": "Aucun respect",
      "resume": "Objets de pitié et de crainte, les Ruffians ne peuvent jamais devenir chef de la bande."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     }
    ]
   }
  ],
  "source": "BSData/mordheim · Ostlanders (1a) (révision 6)"
 }
];
