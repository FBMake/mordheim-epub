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
 }
];
