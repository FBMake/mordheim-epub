// Fichier généré par tools/bsdata/build.py : ne pas modifier à la main.
// Données de jeu extraites de BSData/mordheim, traduites dans tools/bsdata/fr.json,
// et bandes des suppléments saisies dans tools/bsdata/supplements/.
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
 },
 {
  "id": "amazones-lustrie",
  "nom": "Amazones de Lustrie",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Isolationnistes",
    "resume": "Au premier round de chaque corps à corps contre des Hommes-Lézards ou des Norses, les Amazones relancent leurs attaques ratées."
   },
   {
    "nom": "Sacrifice",
    "resume": "Les Amazones sacrifient leurs captifs à leurs dieux et suivent pour eux les règles des captifs du Culte des Possédés."
   },
   {
    "nom": "Inimitié envers les Norses",
    "resume": "Contre des Norses, les Amazones se battent jusqu'à la mort : elles relancent leur premier test de déroute raté et ne peuvent fuir volontairement que si leur cheffe est hors de combat."
   },
   {
    "nom": "Pas des nôtres",
    "resume": "Les Amazones ne s'allient à personne : elles ne recrutent ni franc-tireur ni personnage spécial qui ne soit pas une Amazone."
   }
  ],
  "guerriers": [
   {
    "id": "amazones-lustrie/serpent-priestess",
    "nom": "Prêtresse du Serpent",
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
      "nom": "Sorcier (Rituels amazones)",
      "resume": "La prêtresse lance des Rituels amazones et commence avec un rituel tiré au hasard."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Vitesse",
     "Spéciales (Amazones de Lustrie)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lame stellaire",
        "cout": 15
       },
       {
        "nom": "Épée stellaire",
        "cout": 30
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
        "nom": "Bâton solaire",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Peaux enchantées",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Amulette de la Lune",
        "cout": 50
       },
       {
        "nom": "Herbes curatives",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones-lustrie/eagle-warrior",
    "nom": "Guerrière Aigle",
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
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Amazones de Lustrie)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lame stellaire",
        "cout": 15
       },
       {
        "nom": "Épée stellaire",
        "cout": 30
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
        "nom": "Bâton solaire",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Peaux enchantées",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Amulette de la Lune",
        "cout": 50
       },
       {
        "nom": "Herbes curatives",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones-lustrie/piranha-warrior",
    "nom": "Guerrière Piranha",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Amazones de Lustrie)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lame stellaire",
        "cout": 15
       },
       {
        "nom": "Épée stellaire",
        "cout": 30
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
        "nom": "Bâton solaire",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Peaux enchantées",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Amulette de la Lune",
        "cout": 50
       },
       {
        "nom": "Herbes curatives",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones-lustrie/amazon-warrior",
    "nom": "Guerrière amazone",
    "categorie": "hdm",
    "cout": 25,
    "min": 1,
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Bâton solaire",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Peaux enchantées",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones-lustrie/jaguar-warrior",
    "nom": "Guerrière Jaguar",
    "categorie": "hdm",
    "cout": 30,
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
      "nom": "Une avec la jungle",
      "resume": "Elle traverse les terrains de jungle sans aucune pénalité de mouvement."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 5
       },
       {
        "nom": "Bolas",
        "cout": 5
       },
       {
        "nom": "Javelots",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Bâton solaire",
        "cout": 35
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
        "nom": "Peaux enchantées",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Amazons of Lustria"
 },
 {
  "id": "amazones",
  "nom": "Amazones",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Sacrifice",
    "resume": "Les Amazones sacrifient leurs captifs à leurs dieux et suivent pour eux les règles des captifs du Culte des Possédés."
   },
   {
    "nom": "Pas des nôtres",
    "resume": "Les Amazones ne s'allient à personne : elles ne recrutent ni franc-tireur ni personnage spécial qui ne soit pas une Amazone."
   }
  ],
  "guerriers": [
   {
    "id": "amazones/priestess",
    "nom": "Prêtresse",
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
      "nom": "Sorcier (Rituels amazones)",
      "resume": "La prêtresse lance des Rituels amazones et commence avec un rituel tiré au hasard."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Griffe des Anciens",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bâton solaire",
        "cout": 50
       },
       {
        "nom": "Gantelet solaire",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Amulette de la Lune",
        "cout": 50
       },
       {
        "nom": "Herbes curatives",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones/champion",
    "nom": "Championne",
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
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Griffe des Anciens",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bâton solaire",
        "cout": 50
       },
       {
        "nom": "Gantelet solaire",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Amulette de la Lune",
        "cout": 50
       },
       {
        "nom": "Herbes curatives",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones/totem-warrior",
    "nom": "Guerrière totem",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
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
      "nom": "Frénésie",
      "resume": "Charge toujours l'ennemi le plus proche à portée et double ses Attaques au corps à corps. Immunisée à la psychologie tant qu'elle n'est pas mise à terre ou sonnée."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Griffe des Anciens",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bâton solaire",
        "cout": 50
       },
       {
        "nom": "Gantelet solaire",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Amulette de la Lune",
        "cout": 50
       },
       {
        "nom": "Herbes curatives",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones/amazon-warriors",
    "nom": "Guerrières amazones",
    "categorie": "hdm",
    "cout": 25,
    "min": 1,
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "amazones/scouts",
    "nom": "Éclaireuses",
    "categorie": "hdm",
    "cout": 30,
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
      "nom": "Furtives",
      "resume": "Les éclaireuses peuvent se déployer à deux fois la distance normale et commencer la bataille cachées."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 5
       },
       {
        "nom": "Javelots",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Amazons"
 },
 {
  "id": "bandits-hochland",
  "nom": "Bandits du Hochland",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Francs-tireurs",
    "resume": "La bande peut recruter tous les francs-tireurs accessibles à une bande de mercenaires humains."
   },
   {
    "nom": "La poudre, ça coûte cher !",
    "resume": "Trop pauvres pour entretenir des armes à poudre, les bandits les paient plus cher ; seuls les héros peuvent en acheter, jamais les hommes de main."
   },
   {
    "nom": "Fourrageurs",
    "resume": "Pour le revenu, la bande utilise la colonne de taille immédiatement inférieure (les bandes de 1 à 3 restent dans la première colonne)."
   },
   {
    "nom": "Savoir à qui vendre",
    "resume": "En revendant de l'équipement, la bande touche la moitié du prix de base plus la moitié de la part aléatoire du prix."
   }
  ],
  "guerriers": [
   {
    "id": "bandits-hochland/bandit-prince",
    "nom": "Prince bandit",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Bandits du Hochland)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/footpad",
    "nom": "Détrousseur",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 2,
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
      "nom": "Discrétion",
      "resume": "Un ennemi qui ne le voit pas (sans qu'il soit déclaré caché) retire 1 à son Initiative avant le test pour le charger ; un 6 fait toujours échouer cette charge."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Bandits du Hochland)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/duelist",
    "nom": "Duelliste",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Maître d'armes",
      "resume": "Ses parades réussissent sur un résultat égal ou supérieur au jet pour toucher adverse ; il doit être armé pour parer."
     },
     {
      "nom": "Connaissance des armes",
      "resume": "Il peut utiliser n'importe quelle arme de corps à corps ou de tir accessible à la bande."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Bandits du Hochland)"
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
        "nom": "Rapière",
        "cout": 15
       },
       {
        "nom": "Main gauche",
        "cout": 7
       },
       {
        "nom": "Épée",
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
        "nom": "Pistolet",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets",
        "cout": 40
       },
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/huckster",
    "nom": "Bonimenteur",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "2",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Bagout",
      "resume": "Un ennemi qui charge un membre de la bande à 12 ps ou moins du bonimenteur doit réussir un test de Cd, sinon la charge échoue ; les créatures stupides et les animaux n'y sont pas sensibles."
     },
     {
      "nom": "Escroc habile",
      "resume": "Entre deux parties, sur 2-6 au D6 la bande gagne 2D6 co ; sur 1, le bonimenteur manque la partie suivante et ne rapporte rien."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Spéciales (Bandits du Hochland)"
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
        "nom": "Lance",
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
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/blackheart",
    "nom": "Cœur-noir",
    "categorie": "hdm",
    "cout": 35,
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
      "nom": "Endurcis",
      "resume": "Ils sont insensibles à la peur et aux tests « Seul contre tous »."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/poacher",
    "nom": "Braconnier",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 2,
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
    "regles": [
     {
      "nom": "Éclaireurs",
      "resume": "Pendant l'exploration, la bande peut relancer un dé par braconnier."
     }
    ],
    "competences": [],
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
       },
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/thug",
    "nom": "Brute",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": null,
    "xp": 0,
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
    "regles": [],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/looter",
    "nom": "Pillard",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 4,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Dépouiller les morts",
      "resume": "Après la bataille, pour chaque guerrier rayé de la feuille, un 4+ au D6 permet au pillard de récupérer son équipement (une fois par guerrier)."
     }
    ],
    "competences": [],
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
        "nom": "Lance",
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
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bandits-hochland/gutterscum",
    "nom": "Racaille",
    "categorie": "hdm",
    "cout": 10,
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Totalement incapables",
      "resume": "La racaille ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
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
        "nom": "Lance",
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
    ],
    "race": "humain",
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Hochland Bandits"
 },
 {
  "id": "bretonnie",
  "nom": "Chevaliers de Bretonnie",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Bénédiction de la Dame du Lac",
    "resume": "Avant chaque partie, le chef fait un test de Commandement : s'il le réussit, chaque figurine adverse doit obtenir 4+ sur 1D6 pour pouvoir tirer avec une arme à poudre noire."
   },
   {
    "nom": "Malédiction protégeant les chevaliers",
    "resume": "Une figurine ennemie qui veut tirer sur un Chevalier de la quête ou un Chevalier errant doit d'abord obtenir 4+ sur 1D6, sinon elle ne peut pas tirer."
   }
  ],
  "guerriers": [
   {
    "id": "bretonnie/questing-knight",
    "nom": "Chevalier de la quête",
    "categorie": "heros",
    "cout": 80,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
     },
     {
      "nom": "Vertu chevaleresque",
      "resume": "Le chevalier ne panique jamais et ne fuit jamais un combat : il n'a pas à faire de test « Seul contre tous »."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Bretonnie)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Barde bretonnienne",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bretonnie/knight-errant",
    "nom": "Chevalier errant",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 2,
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
      "nom": "Vertu chevaleresque",
      "resume": "Le chevalier ne panique jamais et ne fuit jamais un combat : il n'a pas à faire de test « Seul contre tous »."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse",
     "Spéciales (Bretonnie)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Barde bretonnienne",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bretonnie/squire",
    "nom": "Écuyer",
    "categorie": "heros",
    "cout": 15,
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
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Force"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bretonnie/men-at-arms",
    "nom": "Hommes d'armes",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 8,
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "bretonnie/bowmen",
    "nom": "Archers",
    "categorie": "hdm",
    "cout": 20,
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
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Bretonnian Knights"
 },
 {
  "id": "caravanes-marchandes",
  "nom": "Caravanes marchandes",
  "tresor": 600,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Commerce",
    "resume": "Avant la recherche d'objets rares, le marchand peut vendre un objet rare stocké dans le chariot : sur 1D6, 1-2 moitié du prix de base, 3-4 prix de base, 5-6 une fois et demie le prix de base. Il peut aussi le garder pour réessayer plus tard."
   },
   {
    "nom": "Boutique ouverte",
    "resume": "Un héros peut rendre visite au marchand au lieu de chercher des objets rares pour acheter un objet stocké ou vendre un objet à un prix convenu entre les joueurs."
   },
   {
    "nom": "Rareté réduite",
    "resume": "Un objet rare dont la rareté tombe à 2 ou moins (réputation du chariot, Débrouillardise…) s'achète comme un objet courant."
   }
  ],
  "guerriers": [
   {
    "id": "caravanes-marchandes/merchant",
    "nom": "Marchand",
    "categorie": "heros",
    "cout": 50,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "2",
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
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Marchand",
      "resume": "Le marchand dirige la caravane. S'il disparaît, un nouveau chef est désigné et reprend cette règle ; à défaut, un apprenti doit être recruté dès que possible."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Spéciales (Caravane marchande)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Rapière",
        "cout": 15
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de soie de Cathay",
        "cout": 40
       },
       {
        "nom": "Chariot marchand",
        "cout": 180
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "caravanes-marchandes/knights-vanguard",
    "nom": "Chevaliers d'avant-garde",
    "categorie": "heros",
    "cout": 45,
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Réflexes foudroyants",
      "resume": "Quand il est chargé, le chevalier frappe en premier contre les chargeurs ; si ceux-ci frappent aussi en premier, l'Initiative départage."
     },
     {
      "nom": "Cavalier",
      "resume": "Le chevalier est entraîné à monter un cheval de guerre."
     },
     {
      "nom": "Mercenaires engagés",
      "resume": "Payé par le marchand, ce héros ne peut jamais devenir chef de la bande."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Rapière",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Épée dragon",
        "cout": 20
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de soie de Cathay",
        "cout": 40
       },
       {
        "nom": "Cheval de guerre",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "caravanes-marchandes/magician",
    "nom": "Magicien",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Magie mineure)",
      "resume": "Le magicien est un sorcier qui utilise la magie mineure."
     },
     {
      "nom": "Mercenaires engagés",
      "resume": "Payé par le marchand, ce héros ne peut jamais devenir chef de la bande."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Rapière",
        "cout": 15
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de soie de Cathay",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "caravanes-marchandes/apprentice",
    "nom": "Apprenti",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Rapière",
        "cout": 15
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de soie de Cathay",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "caravanes-marchandes/blackguards",
    "nom": "Gardes noirs",
    "categorie": "hdm",
    "cout": 35,
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
      "nom": "Costaud",
      "resume": "Peut utiliser une arme lourde sans frapper systématiquement en dernier : l'ordre des attaques se règle comme pour les autres armes."
     },
     {
      "nom": "Mercenaires peu fiables",
      "resume": "Ces guerriers ne peuvent jamais devenir héros : relancez le résultat « Ce gars a du talent »."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Épée dragon",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "caravanes-marchandes/marksmen",
    "nom": "Tireurs d'élite",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 5,
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "caravanes-marchandes/sell-swords",
    "nom": "Épées à louer",
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Pique",
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
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Merchant Caravans"
 },
 {
  "id": "cavalcade-maudite",
  "nom": "Cavalcade maudite",
  "tresor": 500,
  "effectifMax": 13,
  "regles": [
   {
    "nom": "Noblesse insensée",
    "resume": "La bande compte comme maléfique (traitée comme le Culte des Possédés, par ex. pour l'exploration) et n'engage ni franc-tireur ni personnage spécial, sauf le maître des corbeaux."
   },
   {
    "nom": "Capture !",
    "resume": "Quand un héros met hors de combat un homme de main humain avec une miséricorde, sur 5+ il est capturé (5 serviteurs capturés au plus, 2 captures par partie)."
   },
   {
    "nom": "Le Trône des vers",
    "resume": "Après la bataille, chaque captif est perdu (1-2), devient un serviteur capturé (3-5) ou est sacrifié et un héros au hasard gagne 1 XP (6)."
   }
  ],
  "guerriers": [
   {
    "id": "cavalcade-maudite/aristocrat",
    "nom": "Aristocrate",
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
      "nom": "Cavalier expert",
      "resume": "L'aristocrate sait monter un cauchemar (compétence Monter (cauchemar))."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Cavalcade maudite)"
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
        "nom": "Miséricorde",
        "cout": 5
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
        "nom": "Lance de cavalerie",
        "cout": 20
       },
       {
        "nom": "Épieu de chasse",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       },
       {
        "nom": "Tromblon",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure de soie matelassée de Cathay",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 30
       },
       {
        "nom": "Cauchemar (monture)",
        "cout": 30
       },
       {
        "nom": "Oiseau de proie",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cavalcade-maudite/companion",
    "nom": "Compagnon",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Épéiste expert",
      "resume": "Le compagnon commence avec la compétence Épéiste expert."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Cavalcade maudite)"
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
        "nom": "Miséricorde",
        "cout": 5
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
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       },
       {
        "nom": "Tromblon",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cavalcade-maudite/cursed-piper",
    "nom": "Joueur de flûte maudit",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 6,
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
      "nom": "Danse macabre",
      "resume": "En phase de tir, un ennemi visible à 6 ps rate un test de Commandement et le joueur de flûte contrôle ses déplacements jusqu'à ce qu'il réussisse un test en phase de ralliement ; il ne peut ni tirer, ni charger, ni lancer de sort."
     },
     {
      "nom": "Instrument",
      "resume": "Tient son instrument d'une main : ni arme dans l'autre main, ni arme lourde, ni paire de pistolets, ni arc, ni arbalète."
     }
    ],
    "competences": [
     "Érudition",
     "Spéciales (Cavalcade maudite)"
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
        "nom": "Miséricorde",
        "cout": 5
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
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       },
       {
        "nom": "Tromblon",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cavalcade-maudite/twisted-scholar",
    "nom": "Érudit dévoyé",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 1,
    "xp": 4,
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
      "nom": "Adepte magique",
      "resume": "Option à +10 co : l'érudit devient sorcier de Magie mineure avec un sort au hasard (exclusif avec Conteur)."
     },
     {
      "nom": "Conteur",
      "resume": "Option à +10 co : l'érudit devient chroniqueur et relance un dé d'exploration en gardant le résultat voulu (exclusif avec Adepte magique)."
     }
    ],
    "competences": [
     "Érudition",
     "Spéciales (Cavalcade maudite)"
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
        "nom": "Miséricorde",
        "cout": 5
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
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       },
       {
        "nom": "Tromblon",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cavalcade-maudite/great-bear",
    "nom": "Grand ours",
    "categorie": "hdm",
    "cout": 140,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "0",
     "F": "5",
     "E": "5",
     "PV": "2",
     "I": "3",
     "A": "2",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Fou de douleur",
      "resume": "Gagne une Attaque supplémentaire après avoir subi sa première blessure."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "cavalcade-maudite/fighting-ape",
    "nom": "Singe de combat",
    "categorie": "hdm",
    "cout": 95,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "5",
     "A": "2",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Cymbales",
      "resume": "Option à +15 co : les ennemis à 6 ps ou moins subissent -1 en CT et en Cd."
     },
     {
      "nom": "Agile",
      "resume": "Possède Escalade, Acrobate et Esquive, peut charger en plongeant d'une hauteur de 10 ps et entrer dans les bâtiments."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "cavalcade-maudite/wild-beast",
    "nom": "Bête sauvage",
    "categorie": "hdm",
    "cout": 45,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "5",
     "A": "2",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Charge sauvage",
      "resume": "Les Loups funestes ont 2 Attaques au lieu d'1 lors du tour où ils chargent."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "cavalcade-maudite/thrall",
    "nom": "Serviteur",
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
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Cursed Cavalcade"
 },
 {
  "id": "chasseurs-cornus",
  "nom": "Chasseurs cornus",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Science des bois",
    "resume": "Les figurines de la bande ne subissent aucune pénalité de mouvement en terrain difficile."
   }
  ],
  "guerriers": [
   {
    "id": "chasseurs-cornus/horned-hunter",
    "nom": "Chasseur cornu",
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
      "nom": "Pendez le brigand !",
      "resume": "Ce guerrier hait les bandits et les hors-la-loi (règles de haine)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Chasseurs cornus)"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
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
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 20
       },
       {
        "nom": "Peau de cerf bénie",
        "cout": 40
       },
       {
        "nom": "Fil de piège",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-cornus/priest-of-taal",
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
      "nom": "Prières de Taal",
      "resume": "Peut invoquer les Prières de Taal comme un sorcier lance ses sorts."
     },
     {
      "nom": "Préceptes",
      "resume": "Un Prêtre de Taal ne peut jamais porter d'armure lourde."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Chasseurs cornus)"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
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
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 20
       },
       {
        "nom": "Peau de cerf bénie",
        "cout": 40
       },
       {
        "nom": "Fil de piège",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-cornus/initiates",
    "nom": "Initiés",
    "categorie": "heros",
    "cout": 40,
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
      "nom": "Infiltration",
      "resume": "Se déploie après la bande adverse, n'importe où hors de vue de l'ennemi et à plus de 12 ps de toute figurine ennemie ; si les deux camps ont des infiltrateurs, chacun lance 1D6 et le plus faible se place en premier."
     },
     {
      "nom": "Pendez le brigand !",
      "resume": "Ce guerrier hait les bandits et les hors-la-loi (règles de haine)."
     },
     {
      "nom": "Préceptes",
      "resume": "Un Prêtre de Taal ne peut jamais porter d'armure lourde."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Chasseurs cornus)"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
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
        "nom": "Arc court",
        "cout": 5
       },
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
        "cout": 20
       },
       {
        "nom": "Peau de cerf bénie",
        "cout": 40
       },
       {
        "nom": "Fil de piège",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-cornus/drunken-gang",
    "nom": "Bande d'ivrognes",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 5,
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
      "nom": "Ivres",
      "resume": "Imbibés de tord-boyaux, les Ruffians réussissent automatiquement tous leurs tests de Commandement."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-cornus/zealots",
    "nom": "Fanatiques",
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
    "regles": [
     {
      "nom": "Préceptes",
      "resume": "Un Prêtre de Taal ne peut jamais porter d'armure lourde."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
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
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-cornus/warhounds",
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
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Horned Hunters"
 },
 {
  "id": "chasseurs-vampires",
  "nom": "Chasseurs de vampires de Sylvanie",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [],
  "guerriers": [
   {
    "id": "chasseurs-vampires/vampire-hunter",
    "nom": "Chasseur de vampires",
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
      "nom": "Pieu dans le cœur !",
      "resume": "Le guerrier hait les vampires. Il doit se déplacer vers tout vampire visible, sauf s'il peut lui tirer dessus, auquel cas le joueur choisit."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Chasseurs de vampires de Sylvanie)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Faux",
        "cout": 10
       },
       {
        "nom": "Pieu à pointe d'argent",
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
        "nom": "Pistolet-arbalète",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Eau bénite",
        "cout": 10
       },
       {
        "nom": "Carreaux bénis",
        "cout": 25
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       },
       {
        "nom": "Gorgerin",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-vampires/priest-of-morr",
    "nom": "Prêtre de Morr",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Solitaire",
      "resume": "Le prêtre ignore les règles de combat seul contre plusieurs (« Seul au monde »)."
     },
     {
      "nom": "Prières de Morr (rites funéraires)",
      "resume": "Le prêtre connaît un rite funéraire de Morr tiré au hasard ; il l'accomplit comme un sort, dans la phase de magie."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Chasseurs de vampires de Sylvanie)"
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
        "nom": "Faux",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-vampires/slayers",
    "nom": "Tueurs",
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
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Pieu dans le cœur !",
      "resume": "Le guerrier hait les vampires. Il doit se déplacer vers tout vampire visible, sauf s'il peut lui tirer dessus, auquel cas le joueur choisit."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Chasseurs de vampires de Sylvanie)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Faux",
        "cout": 10
       },
       {
        "nom": "Pieu à pointe d'argent",
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
        "nom": "Pistolet-arbalète",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Eau bénite",
        "cout": 10
       },
       {
        "nom": "Carreaux bénis",
        "cout": 25
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       },
       {
        "nom": "Gorgerin",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-vampires/pilgrims",
    "nom": "Pèlerins",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 4,
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
      "nom": "Fanatiques",
      "resume": "Les pèlerins réussissent automatiquement tous les tests basés sur le Commandement mais ne peuvent jamais devenir chef de la bande."
     },
     {
      "nom": "Armes contondantes",
      "resume": "Les pèlerins n'utilisent ni armes tranchantes ni armes de tir, seulement masses, marteaux et bâtons, à l'exception du pieu à pointe d'argent."
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
        "nom": "Pieu à pointe d'argent",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-vampires/villagers",
    "nom": "Villageois",
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance (fourche)",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "chasseurs-vampires/wolfhounds",
    "nom": "Chiens-loups",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 4,
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
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Vampire Hunters of Sylvania"
 },
 {
  "id": "cour-plaisirs",
  "nom": "Cour des plaisirs profanes",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Corruption de l'esprit et de la chair",
    "resume": "Quand une figurine meurt, on peut dépenser 1 fragment de malepierre pour greffer une caractéristique du mort sur un homme-bête, un cultiste ou un chien de Slaanesh (un héros renonce alors à chercher un objet rare)."
   },
   {
    "nom": "Mutations",
    "resume": "La figurine peut commencer avec une ou plusieurs mutations, achetées au recrutement. Un mutant doit en avoir au moins une."
   }
  ],
  "guerriers": [
   {
    "id": "cour-plaisirs/slaaneshi-whipmaster",
    "nom": "Maître-fouetteur de Slaanesh",
    "categorie": "heros",
    "cout": 70,
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
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Agonie et extase",
      "resume": "Avec un fouet hédoniste, il peut fouetter un ami à 3 ps (touche auto, +1 pour blesser) pour doubler son Endurance ; test de Commandement à chaque tour pour maintenir l'effet."
     },
     {
      "nom": "Douleur et plaisir",
      "resume": "Après une blessure non sauvegardée, il est frénétique jusqu'à la fin de son tour suivant."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet hédoniste",
        "cout": 15
       },
       {
        "nom": "Attrape-homme de Slaanesh",
        "cout": 30
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Ombre pourpre",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/slaaneshi-danseuse",
    "nom": "Danseuse de Slaanesh",
    "categorie": "heros",
    "cout": 70,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Étrange séduction",
      "resume": "Un ennemi doit réussir un test de Commandement avant de l'attaquer ou de lui tirer dessus, sinon il relance ses touches réussies."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet hédoniste",
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Ombre pourpre",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/slaaneshi-flesh-merchant",
    "nom": "Marchand de chair de Slaanesh",
    "categorie": "heros",
    "cout": 65,
    "min": 0,
    "max": 1,
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
    "regles": [
     {
      "nom": "Livre de chair",
      "resume": "Avant la bataille, un misérable peut lui servir de bouclier de chair et encaisser une blessure à sa place (il est alors retiré)."
     },
     {
      "nom": "Sort cruel",
      "resume": "Les captifs obtenus peuvent devenir gratuitement des misérables."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet hédoniste",
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Ombre pourpre",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/slaaneshi-devout",
    "nom": "Dévot de Slaanesh",
    "categorie": "heros",
    "cout": 65,
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
      "nom": "Forme changeante",
      "resume": "Au début de la bataille et à chaque phase de ralliement hors combat, choisit la forme masculine (+1 CC, F, E, A) ou féminine (+1 CT, +2 I, +2 Cd, +2 M)."
     },
     {
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet hédoniste",
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Ombre pourpre",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/slaaneshi-priest-of-obscene",
    "nom": "Prêtre de l'obscène de Slaanesh",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 1,
    "xp": 6,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Rituels du Chaos)",
      "resume": "Lance des sorts tirés des Rituels du Chaos."
     },
     {
      "nom": "Réserve de chair",
      "resume": "Avant la bataille, un misérable lui est attaché : il peut le sacrifier pour relancer un sort raté."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet hédoniste",
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Ombre pourpre",
        "cout": 35
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/slaaneshi-beastman",
    "nom": "Homme-bête de Slaanesh",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "hommeBete",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/cultist",
    "nom": "Cultiste",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "cour-plaisirs/slaaneshi-chaos-hound",
    "nom": "Chien du Chaos de Slaanesh",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 3,
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
     "Cd": "3"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "cour-plaisirs/slaaneshi-wretch",
    "nom": "Misérable de Slaanesh",
    "categorie": "hdm",
    "cout": 10,
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
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Esclaves des ténèbres",
      "resume": "Insensible à la psychologie et au « Seul contre tous » à 6 ps d'un héros ami ; ne devient jamais un héros."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Court of the Profane Pleasures"
 },
 {
  "id": "culte-tueurs",
  "nom": "Culte des Tueurs nains",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Durs à cuire",
    "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
   },
   {
    "nom": "Tête dure",
    "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
   },
   {
    "nom": "Rancuniers",
    "resume": "En souvenir des guerres anciennes, une bande naine ne recrute jamais d'épée à louer ni de personnage elfe."
   },
   {
    "nom": "Chance maudite",
    "resume": "Après les jets de blessure d'après-partie, la bande peut relancer un résultat « mort » d'un seul tueur (héros ou homme de main) ; le second résultat s'applique."
   },
   {
    "nom": "Seulement dans la victoire",
    "resume": "Les héros tueurs ne gagnent de dés d'exploration qu'en cas de victoire, d'égalité ou d'alliance avec le vainqueur (pas le chroniqueur)."
   },
   {
    "nom": "Registre de bravoure",
    "resume": "Si un héros tueur est mis hors de combat par un ennemi ou un PNJ alors que le chroniqueur est sur la table, la bande gagne un dé d'exploration supplémentaire. Un barde franc-tireur peut tenir ce rôle ; deux chroniqueurs ne se cumulent pas."
   }
  ],
  "guerriers": [
   {
    "id": "culte-tueurs/giant-slayer",
    "nom": "Tueur de géants",
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
     "I": "3",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Vœu de mort",
      "resume": "Le Tueur cherche une fin glorieuse : insensible à la psychologie, il n'a jamais à tester lorsqu'il combat seul."
     },
     {
      "nom": "Ni armure ni jouets !",
      "resume": "Les tueurs ne portent ni armure ni cape donnant une sauvegarde permanente (porte-bonheur permis), n'utilisent pas d'armes de tir autres que de jet et n'apprennent pas la magie."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Spéciales (Culte des Tueurs nains)"
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
        "nom": "Masse/Marteau",
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
        "nom": "Épée",
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
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "culte-tueurs/doomseeker",
    "nom": "Chercheur de mort",
    "categorie": "heros",
    "cout": 55,
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
     },
     {
      "nom": "Ni armure ni jouets !",
      "resume": "Les tueurs ne portent ni armure ni cape donnant une sauvegarde permanente (porte-bonheur permis), n'utilisent pas d'armes de tir autres que de jet et n'apprennent pas la magie."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Culte des Tueurs nains)"
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
        "nom": "Masse/Marteau",
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Lames tourbillonnantes (paire)",
        "cout": 30
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "culte-tueurs/rememberer",
    "nom": "Chroniqueur",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "3",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Haine des peaux-vertes",
      "resume": "Tous les Nains haïssent les Orques et les Gobelins (voir Haine)."
     },
     {
      "nom": "Chroniqueur",
      "resume": "Une fois par partie, un héros tueur à 6 ps ou moins peut relancer ses jets pour toucher ratés contre une grande cible ou une créature d'Endurance 5+. Le chroniqueur n'est pas un tueur et ne peut pas être chef."
     },
     {
      "nom": "Prendre le relais",
      "resume": "S'il n'a pas été mis hors de combat, le chroniqueur fait un jet de rareté ou de Dramatis Personae supplémentaire par héros tueur mis hors de combat pendant la partie."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Spéciales (Culte des Tueurs nains)"
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
        "nom": "Masse/Marteau",
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
        "nom": "Haches de lancer",
        "cout": 15
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
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "culte-tueurs/troll-slayer",
    "nom": "Tueur de trolls",
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
    "regles": [
     {
      "nom": "Vœu de mort",
      "resume": "Le Tueur cherche une fin glorieuse : insensible à la psychologie, il n'a jamais à tester lorsqu'il combat seul."
     },
     {
      "nom": "Ni armure ni jouets !",
      "resume": "Les tueurs ne portent ni armure ni cape donnant une sauvegarde permanente (porte-bonheur permis), n'utilisent pas d'armes de tir autres que de jet et n'apprennent pas la magie."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
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
        "nom": "Épée",
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
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "culte-tueurs/axe-hurler",
    "nom": "Lanceur de haches",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "3",
     "CC": "3",
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
      "nom": "Haine des peaux-vertes",
      "resume": "Tous les Nains haïssent les Orques et les Gobelins (voir Haine)."
     },
     {
      "nom": "Bras puissant",
      "resume": "Ajoute sa Force en pas à la portée des armes de jet."
     },
     {
      "nom": "Tireur né",
      "resume": "Sur « Ce gars a du talent », il peut toujours choisir les compétences de Tir."
     },
     {
      "nom": "Craintif",
      "resume": "Commence sans Vœu de mort et subit la psychologie normalement ; sur « Ce gars a du talent », il doit apprendre Vœu de mort."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
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
        "nom": "Épée",
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
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "culte-tueurs/stubbles",
    "nom": "Imberbes",
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
    "regles": [
     {
      "nom": "Haine des peaux-vertes",
      "resume": "Tous les Nains haïssent les Orques et les Gobelins (voir Haine)."
     },
     {
      "nom": "Craintif",
      "resume": "Commence sans Vœu de mort et subit la psychologie normalement ; sur « Ce gars a du talent », il doit apprendre Vœu de mort."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
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
        "nom": "Épée",
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
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Dwarf Slayer Cult"
 },
 {
  "id": "druchii",
  "nom": "Druchii",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Haine fratricide",
    "resume": "Les guerriers de la bande haïssent tous les Hauts Elfes, y compris les Hauts Elfes recrutés comme francs-tireurs."
   },
   {
    "nom": "Acuité féerique",
    "resume": "Si au moins un héros a exploré, la bande trouve un artefact ou un fragment de malepierre de plus lors de la phase d'exploration."
   },
   {
    "nom": "Dédain",
    "resume": "Les Druchii ne peuvent jamais utiliser d'armes à poudre noire."
   },
   {
    "nom": "Esclavagistes druchii",
    "resume": "Sur un résultat « prisonnier » (333) en exploration, la bande peut appliquer les règles de prisonniers des Skavens."
   }
  ],
  "guerriers": [
   {
    "id": "druchii/noble",
    "nom": "Noble",
    "categorie": "heros",
    "cout": 75,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "5",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Druchii)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Draich",
        "cout": 25
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
        "nom": "Arbalète à répétition",
        "cout": 20
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/lordling",
    "nom": "Seigneur",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Druchii)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Draich",
        "cout": 25
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
        "nom": "Arbalète à répétition",
        "cout": 20
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/sorceress",
    "nom": "Sorcière",
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
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Magie noire)",
      "resume": "La sorcière lance des sorts de Magie noire druchii (Éclair funeste, Mot de douleur, Voleur d'âme, Lame noire de Khaine, Spasme mortel, Vol de sorcière) ; elle ne peut pas lancer de sorts si elle porte une armure."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Druchii)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Draich",
        "cout": 25
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
        "nom": "Arbalète à répétition",
        "cout": 20
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/beastmaster",
    "nom": "Maître des bêtes",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Vitesse",
     "Spéciales (Druchii)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Draich",
        "cout": 25
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Fouet de dresseur",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à répétition",
        "cout": 20
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/witch-elves",
    "nom": "Elfes sorcières",
    "categorie": "hdm",
    "cout": 45,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Frénésie",
      "resume": "Charge toujours l'ennemi le plus proche à portée et double ses Attaques au corps à corps. Immunisée à la psychologie tant qu'elle n'est pas mise à terre ou sonnée."
     },
     {
      "nom": "Poison des vierges",
      "resume": "La bande peut acheter du lotus noir à 5 co la dose, réservé aux elfes sorcières ; il doit servir à la bataille suivante et ne peut être ni vendu ni échangé."
     }
    ],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Lance",
        "cout": 10
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
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Lotus noir",
        "cout": 5
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/corsairs",
    "nom": "Corsaires",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à répétition",
        "cout": 20
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 30
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/shades",
    "nom": "Ombres",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Discrétion naturelle (Ombres)",
      "resume": "Quand une ombre est cachée, l'ennemi n'utilise que la moitié de son Initiative pour la repérer."
     }
    ],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arbalète à répétition",
        "cout": 20
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
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
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "druchii/slavehounds",
    "nom": "Chiens d'esclaves",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "7",
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
     },
     {
      "nom": "Sans expérience",
      "resume": "Ce guerrier ne gagne jamais d'expérience."
     },
     {
      "nom": "Travail de meute",
      "resume": "Les chiens utilisent le Commandement du maître des bêtes à 6 ps et ne combattent pas sans lui. Si un chien connaît la position d'un ennemi, le maître et les autres chiens peuvent le charger sans le voir."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Druchii"
 },
 {
  "id": "eclaireurs-imperiaux",
  "nom": "Éclaireurs impériaux",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Bande montée",
    "resume": "Chaque guerrier possède un cheval de selle compris dans son coût ; une figurine sans monture ne peut pas jouer. La bande ignore la limite habituelle de deux montures en terrain dense et ne peut engager que des francs-tireurs montés (Chevalier franc, Garde des routes ; jamais de Bandit de grand chemin). Un cheval mort doit être remplacé avant toute autre dépense."
   }
  ],
  "guerriers": [
   {
    "id": "eclaireurs-imperiaux/knight",
    "nom": "Chevalier",
    "categorie": "heros",
    "cout": 85,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Éclaireurs impériaux)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
        "nom": "Barde",
        "cout": 80
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 90
       },
       {
        "nom": "Armure en gromril",
        "cout": 150
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "eclaireurs-imperiaux/outriders",
    "nom": "Éclaireurs",
    "categorie": "heros",
    "cout": 65,
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
    "regles": [
     {
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Spéciales (Éclaireurs impériaux)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
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
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
        "nom": "Barde",
        "cout": 80
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 90
       },
       {
        "nom": "Armure en gromril",
        "cout": 150
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "eclaireurs-imperiaux/scouts",
    "nom": "Batteurs d'estrade",
    "categorie": "heros",
    "cout": 45,
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
    "regles": [
     {
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Éclaireurs impériaux)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
        "nom": "Barde",
        "cout": 80
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 90
       },
       {
        "nom": "Armure en gromril",
        "cout": 150
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "eclaireurs-imperiaux/hussars",
    "nom": "Hussards",
    "categorie": "hdm",
    "cout": 60,
    "min": 0,
    "max": 5,
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
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     },
     {
      "nom": "Combat monté",
      "resume": "Quand il charge un adversaire non monté, le cavalier gagne une attaque supplémentaire de Force 4 portée par sa monture."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
        "nom": "Barde",
        "cout": 80
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 90
       },
       {
        "nom": "Armure en gromril",
        "cout": 150
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "eclaireurs-imperiaux/chasseurs",
    "nom": "Chasseurs",
    "categorie": "hdm",
    "cout": 55,
    "min": 0,
    "max": 5,
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
    "regles": [
     {
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
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
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 200
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
        "nom": "Barde",
        "cout": 80
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 90
       },
       {
        "nom": "Armure en gromril",
        "cout": 150
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "eclaireurs-imperiaux/grooms",
    "nom": "Palefreniers",
    "categorie": "hdm",
    "cout": 50,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     },
     {
      "nom": "Soin des chevaux",
      "resume": "Le palefrenier a la compétence Dressage d'animaux de Blazing Saddles : il sait calmer et maîtriser les chevaux."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
        "nom": "Barde",
        "cout": 80
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 90
       },
       {
        "nom": "Armure en gromril",
        "cout": 150
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Imperial Outriders"
 },
 {
  "id": "elfes-noirs",
  "nom": "Elfes Noirs",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Haine fratricide",
    "resume": "Les guerriers de la bande haïssent tous les Hauts Elfes, y compris les Hauts Elfes recrutés comme francs-tireurs."
   },
   {
    "nom": "Vue perçante",
    "resume": "Les elfes repèrent les ennemis cachés à une distance égale au double de leur Initiative en pas."
   },
   {
    "nom": "Armes à poudre",
    "resume": "La bande ne peut jamais utiliser d'armes à poudre noire."
   }
  ],
  "guerriers": [
   {
    "id": "elfes-noirs/high-born",
    "nom": "Noble elfe noir",
    "categorie": "heros",
    "cout": 70,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "5",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Elfes Noirs)"
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lame elfe noire (amélioration)",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à répétition",
        "cout": 35
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-noirs/sorceress",
    "nom": "Sorcière",
    "categorie": "heros",
    "cout": 55,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Magie elfe noire)",
      "resume": "La sorcière lance des sorts de la Magie elfe noire et ne peut pas lancer de sort si elle porte une armure."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Elfes Noirs)"
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lame elfe noire (amélioration)",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à répétition",
        "cout": 35
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-noirs/beastmaster",
    "nom": "Maître des bêtes",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chiens de Sang-froid",
      "resume": "Le maître des bêtes peut être accompagné de deux Chiens de Sang-froid au plus, achetés comme hommes de main."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse",
     "Spéciales (Elfes Noirs)"
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet de dresseur",
        "cout": 10
       },
       {
        "nom": "Lame elfe noire (amélioration)",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à répétition",
        "cout": 35
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-noirs/fellblades",
    "nom": "Lame maudite",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 12,
    "profil": {
     "M": "5",
     "CC": "5",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Spécialistes du corps à corps",
      "resume": "Ces guerriers ne peuvent utiliser aucune arme de tir."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse",
     "Spéciales (Elfes Noirs)"
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lame elfe noire (amélioration)",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 15
       },
       {
        "nom": "Cape de dragon des mers",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-noirs/corsairs",
    "nom": "Corsaires",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
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
        "nom": "Arbalète à répétition",
        "cout": 35
       },
       {
        "nom": "Pistolet-arbalète",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de dragon des mers",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-noirs/shades",
    "nom": "Ombres",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Discrétion naturelle",
      "resume": "Un ennemi qui tente de repérer un elfe noir caché subit -1 à son Initiative."
     }
    ],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arbalète à répétition",
        "cout": 35
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
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-noirs/cold-one-beasthounds",
    "nom": "Chiens de Sang-froid",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "1",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Lien avec le maître",
      "resume": "Si le maître des bêtes meurt, les chiens s'enfuient et sont retirés de la liste ; ils ne combattent pas si le maître ne peut pas participer. Ils ne gagnent jamais d'expérience."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Dark Elves"
 },
 {
  "id": "elfes-sylvains",
  "nom": "Elfes sylvains d'Athel Loren",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Haine des Elfes Noirs",
    "resume": "Tous les guerriers de la bande, hors francs-tireurs, haïssent les Elfes Noirs."
   },
   {
    "nom": "Vue perçante",
    "resume": "Les elfes repèrent les ennemis cachés à une distance égale au double de leur Initiative en pas."
   },
   {
    "nom": "Implacables",
    "resume": "En partie à plusieurs joueurs, la bande ne peut jamais s'allier à une bande du Chaos."
   },
   {
    "nom": "Tolérants",
    "resume": "La bande peut recruter des francs-tireurs ni maléfiques ni chaotiques, sauf les spécialistes du poison comme les assassins."
   }
  ],
  "guerriers": [
   {
    "id": "elfes-sylvains/hunt-master",
    "nom": "Maître de chasse",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "5",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Elfes sylvains d'Athel Loren)"
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Dague en ithilmar",
        "cout": 4
       },
       {
        "nom": "Épée en ithilmar",
        "cout": 20
       },
       {
        "nom": "Lance en ithilmar",
        "cout": 20
       },
       {
        "nom": "Arme lourde en ithilmar",
        "cout": 30
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
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       },
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-sylvains/forest-mage",
    "nom": "Mage sylvain",
    "categorie": "heros",
    "cout": 55,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Incantations sylvestres)",
      "resume": "Le mage est un lanceur de sorts et tire ses sorts dans la liste des Incantations sylvestres."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Elfes sylvains d'Athel Loren)"
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Dague en ithilmar",
        "cout": 4
       },
       {
        "nom": "Épée en ithilmar",
        "cout": 20
       },
       {
        "nom": "Lance en ithilmar",
        "cout": 20
       },
       {
        "nom": "Arme lourde en ithilmar",
        "cout": 30
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
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       },
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-sylvains/waywatchers",
    "nom": "Gardes forestiers",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 12,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Tireur embusqué",
      "resume": "Le garde forestier peut tirer tout en restant caché ; après le tir, sur 5+ sur 1D6, il reste caché car personne ne repère d'où vient la flèche."
     },
     {
      "nom": "Camouflage",
      "resume": "Quand il est caché, chaque ennemi doit en plus réussir un test d'Initiative pour le repérer."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Elfes sylvains d'Athel Loren)"
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Dague en ithilmar",
        "cout": 4
       },
       {
        "nom": "Épée en ithilmar",
        "cout": 20
       },
       {
        "nom": "Lance en ithilmar",
        "cout": 20
       },
       {
        "nom": "Arme lourde en ithilmar",
        "cout": 30
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
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       },
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-sylvains/deepwood-scouts",
    "nom": "Éclaireurs des bois profonds",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Feux croisés",
      "resume": "Si plusieurs éclaireurs tirent sur la même cible, ils gagnent +1 au jet de blessure."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       },
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "elfes-sylvains/glade-guard",
    "nom": "Gardes des clairières",
    "categorie": "hdm",
    "cout": 30,
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
     "I": "5",
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
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
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
        "nom": "Épée",
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
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       },
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Wood Elves of Athel Loren"
 },
 {
  "id": "expedition-nippone",
  "nom": "Expédition nipponne",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Esprit stratège",
    "resume": "La bande peut choisir de fuir avec une perte de moins que la normale."
   }
  ],
  "guerriers": [
   {
    "id": "expedition-nippone/hatamoto",
    "nom": "Hatamoto",
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
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Expédition nipponne)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Wakizashi (épée)",
        "cout": 10
       },
       {
        "nom": "Yari (lance)",
        "cout": 10
       },
       {
        "nom": "Naginata (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Kanabo",
        "cout": 15
       },
       {
        "nom": "Katana",
        "cout": 20
       },
       {
        "nom": "Nagamaki (épée longue de Cathay)",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Hankyu (arc court)",
        "cout": 5
       },
       {
        "nom": "Yumi (arc)",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Teppo (arquebuse)",
        "cout": 35
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Horo",
        "cout": 10
       },
       {
        "nom": "Barde",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Sashimono",
        "cout": 15
       },
       {
        "nom": "Cheval",
        "cout": 40
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "expedition-nippone/shinobi",
    "nom": "Shinobi",
    "categorie": "heros",
    "cout": 70,
    "min": 0,
    "max": 1,
    "xp": 15,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Infiltration",
      "resume": "Se déploie après la bande adverse, n'importe où hors de vue de l'ennemi et à plus de 12 ps de toute figurine ennemie ; si les deux camps ont des infiltrateurs, chacun lance 1D6 et le plus faible se place en premier."
     },
     {
      "nom": "Solitaire",
      "resume": "Le prêtre ignore les règles de combat seul contre plusieurs (« Seul au monde »)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Expédition nipponne)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Wakizashi (épée)",
        "cout": 10
       },
       {
        "nom": "Yari (lance)",
        "cout": 10
       },
       {
        "nom": "Katana",
        "cout": 20
       },
       {
        "nom": "Kusarigama",
        "cout": 20
       },
       {
        "nom": "Saï (brise-épée)",
        "cout": 30
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
        "nom": "Hankyu (arc court)",
        "cout": 5
       },
       {
        "nom": "Yumi (arc)",
        "cout": 10
       },
       {
        "nom": "Shuriken (étoiles de lancer)",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Chausse-trappes",
        "cout": 15
       },
       {
        "nom": "Crochets de serrurier",
        "cout": 15
       },
       {
        "nom": "Fil de déclenchement",
        "cout": 15
       },
       {
        "nom": "Poudre aveuglante",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "expedition-nippone/vim-to-mage",
    "nom": "Mage vim-to",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Préceptes de l'ordre",
      "resume": "Vœu de pauvreté : ne peut porter qu'un bâton de marche (gourdin) et une dague."
     },
     {
      "nom": "Sorcier (Magie vim-toïste)",
      "resume": "Chef spirituel de la bande, il lance la magie vim-toïste (magie élémentaire arabienne) et commence avec un sort."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Expédition nipponne)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Gourdin (bâton de marche)",
        "cout": 3
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "expedition-nippone/retainer",
    "nom": "Samouraï vassal",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
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
      "nom": "Monte",
      "resume": "Le guerrier sait monter à cheval et combattre en selle (règles de cavalerie de Blazing Saddles)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Expédition nipponne)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Wakizashi (épée)",
        "cout": 10
       },
       {
        "nom": "Yari (lance)",
        "cout": 10
       },
       {
        "nom": "Naginata (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Kanabo",
        "cout": 15
       },
       {
        "nom": "Katana",
        "cout": 20
       },
       {
        "nom": "Nagamaki (épée longue de Cathay)",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Hankyu (arc court)",
        "cout": 5
       },
       {
        "nom": "Yumi (arc)",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Teppo (arquebuse)",
        "cout": 35
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Horo",
        "cout": 10
       },
       {
        "nom": "Barde",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Sashimono",
        "cout": 15
       },
       {
        "nom": "Cheval",
        "cout": 40
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "expedition-nippone/onnabushi",
    "nom": "Onnabushi",
    "categorie": "hdm",
    "cout": 30,
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
      "nom": "Gardiennes du château",
      "resume": "Cause la peur tant qu'elle se trouve dans un bâtiment ou des ruines (à définir avant la partie)."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Wakizashi (épée)",
        "cout": 10
       },
       {
        "nom": "Yari (lance)",
        "cout": 10
       },
       {
        "nom": "Naginata (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Kanabo",
        "cout": 15
       },
       {
        "nom": "Katana",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Hankyu (arc court)",
        "cout": 5
       },
       {
        "nom": "Yumi (arc)",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Teppo (arquebuse)",
        "cout": 35
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Sashimono",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "expedition-nippone/warrior-monk",
    "nom": "Moine guerrier",
    "categorie": "hdm",
    "cout": 30,
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
     "I": "4",
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
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Wakizashi (épée)",
        "cout": 10
       },
       {
        "nom": "Yari (lance)",
        "cout": 10
       },
       {
        "nom": "Naginata (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Kanabo",
        "cout": 15
       },
       {
        "nom": "Katana",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Yumi (arc)",
        "cout": 10
       }
      ]
     },
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Sashimono",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "expedition-nippone/ashigaru",
    "nom": "Ashigaru",
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Mur d'acier",
      "resume": "Peut manier une lance à deux mains ; elle gagne alors la règle parade."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Tanto (dague)",
        "cout": 2
       },
       {
        "nom": "Tanto gratuit (dague)",
        "cout": 0
       },
       {
        "nom": "Wakizashi (épée)",
        "cout": 10
       },
       {
        "nom": "Yari (lance)",
        "cout": 10
       },
       {
        "nom": "Naginata (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Kanabo",
        "cout": 15
       },
       {
        "nom": "Katana",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Hankyu (arc court)",
        "cout": 5
       },
       {
        "nom": "Yumi (arc)",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Teppo (arquebuse)",
        "cout": 35
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Sashimono",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Nipponese Expedition"
 },
 {
  "id": "garde-chapelle",
  "nom": "Garde de la chapelle bretonnienne",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Chevalerie",
    "resume": "Les chevaliers n'utilisent aucune arme de tir (sauf l'eau bénite), ni drogue, ni poison, et n'apprennent pas de sorts (les prières restent permises)."
   },
   {
    "nom": "Faveur du seigneur",
    "resume": "Chaque chevalier peut commencer avec un cheval de guerre, une armure légère ou une armure lourde à moitié prix ; l'objet ne peut être ni échangé ni vendu et disparaît à sa mort."
   },
   {
    "nom": "Vertu de pureté",
    "resume": "Le chevalier ne quitte jamais volontairement un combat sauf s'il est à terre et ignore « Seul contre tous » ; seuls les effets magiques de fuite l'affectent."
   }
  ],
  "guerriers": [
   {
    "id": "garde-chapelle/questing-knight",
    "nom": "Chevalier de la quête",
    "categorie": "heros",
    "cout": 75,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
     },
     {
      "nom": "Chevalerie",
      "resume": "Les chevaliers n'utilisent aucune arme de tir (sauf l'eau bénite), ni drogue, ni poison, et n'apprennent pas de sorts (les prières restent permises)."
     },
     {
      "nom": "Faveur du seigneur",
      "resume": "Chaque chevalier peut commencer avec un cheval de guerre, une armure légère ou une armure lourde à moitié prix ; l'objet ne peut être ni échangé ni vendu et disparaît à sa mort."
     },
     {
      "nom": "Vertu de pureté",
      "resume": "Le chevalier ne quitte jamais volontairement un combat sauf s'il est à terre et ignore « Seul contre tous » ; seuls les effets magiques de fuite l'affectent."
     },
     {
      "nom": "Cavalier",
      "resume": "Le chevalier est entraîné à monter un cheval de guerre."
     },
     {
      "nom": "Vœu de pauvreté",
      "resume": "Le chevalier de la quête ne peut pas prendre de lance de cavalerie."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Garde de la chapelle bretonnienne)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée large",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Écu",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Barde",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Porte-bonheur",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "garde-chapelle/damsel",
    "nom": "Damoiselle",
    "categorie": "heros",
    "cout": 35,
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Prières de la Dame du Lac",
      "resume": "La damoiselle commence avec une prière de la liste des prières de la Dame et peut en apprendre d'autres selon les règles de magie."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée courte",
        "cout": 7
       },
       {
        "nom": "Lance",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "garde-chapelle/knight-errant",
    "nom": "Chevalier errant",
    "categorie": "heros",
    "cout": 35,
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
      "nom": "Chevalerie",
      "resume": "Les chevaliers n'utilisent aucune arme de tir (sauf l'eau bénite), ni drogue, ni poison, et n'apprennent pas de sorts (les prières restent permises)."
     },
     {
      "nom": "Faveur du seigneur",
      "resume": "Chaque chevalier peut commencer avec un cheval de guerre, une armure légère ou une armure lourde à moitié prix ; l'objet ne peut être ni échangé ni vendu et disparaît à sa mort."
     },
     {
      "nom": "Vertu de pureté",
      "resume": "Le chevalier ne quitte jamais volontairement un combat sauf s'il est à terre et ignore « Seul contre tous » ; seuls les effets magiques de fuite l'affectent."
     },
     {
      "nom": "Vaniteux",
      "resume": "Le chevalier errant ne porte jamais de casque."
     },
     {
      "nom": "Impétueux",
      "resume": "S'il n'est pas au combat, il doit charger un ennemi debout à portée ; les tests de psychologie empêchant cette charge sont réussis automatiquement."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Garde de la chapelle bretonnienne)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée large",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Écu",
        "cout": 10
       },
       {
        "nom": "Barde",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Porte-bonheur",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "garde-chapelle/battle-pilgrim",
    "nom": "Pèlerin combattant",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 5,
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
      "nom": "Basse extraction",
      "resume": "Progresse normalement mais relance « Le gars a du talent » et ne devient jamais un héros."
     },
     {
      "nom": "Haine",
      "resume": "Lors du premier tour de chaque corps à corps contre un ennemi qu'elle hait, la figurine peut relancer tous ses jets pour toucher ratés."
     },
     {
      "nom": "Obstiné",
      "resume": "Peut relancer un test de Commandement raté ; le second résultat s'applique."
     },
     {
      "nom": "Reliques saintes",
      "resume": "Un pèlerin peut porter une relique sacrée ; il devient alors sujet à la frénésie (et insensible à la haine tant qu'il est frénétique) et forme son propre groupe."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée courte",
        "cout": 7
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Relique sacrée",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "garde-chapelle/squire",
    "nom": "Écuyer",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
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
      "nom": "Adoubement",
      "resume": "Sur « Le gars a du talent », l'écuyer reste écuyer (deux listes de compétences au choix) ou devient chevalier errant (peut dépasser la limite de trois)."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée courte",
        "cout": 7
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau",
        "cout": 3
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "garde-chapelle/bowman",
    "nom": "Archer",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 7,
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
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Basse extraction",
      "resume": "Progresse normalement mais relance « Le gars a du talent » et ne devient jamais un héros."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée courte",
        "cout": 7
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
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Bretonnian Chapel Guard"
 },
 {
  "id": "gardiens-tombes",
  "nom": "Gardiens des tombes",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Ni boire ni manger",
    "resume": "Les morts-vivants n'ont besoin ni d'eau ni de nourriture ; seuls les animaux vivants qui les accompagnent suivent les règles normales sur l'eau."
   },
   {
    "nom": "Terrain familier",
    "resume": "La bande lance un dé supplémentaire lors de la phase d'exploration (règle pensée pour le désert ; son usage ailleurs est flou)."
   }
  ],
  "guerriers": [
   {
    "id": "gardiens-tombes/tomb-lord",
    "nom": "Seigneur des tombes",
    "categorie": "heros",
    "cout": 150,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "5",
     "PV": "3",
     "I": "3",
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
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Inflammable",
      "resume": "Les touches d'attaques enflammées infligent au Seigneur des tombes le double de blessures."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Lance",
        "cout": 10
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
        "nom": "Fléau",
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
        "nom": "Flèches d'aspic",
        "cout": 10
       },
       {
        "nom": "Javelot néhékharéen",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "gardiens-tombes/liche-priest",
    "nom": "Prêtre liche",
    "categorie": "heros",
    "cout": 55,
    "min": 0,
    "max": 1,
    "xp": 8,
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
      "nom": "Sorcier (Culte mortuaire)",
      "resume": "Le prêtre liche est un sorcier qui utilise les parchemins du Culte mortuaire (ce n'est pas de la nécromancie). Il ne peut pas porter d'armure."
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
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     }
    ],
    "competences": [
     "Érudition",
     "Spéciales (Gardiens des tombes)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Bâton",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Bâton serpent",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "gardiens-tombes/acolyte",
    "nom": "Acolyte",
    "categorie": "heros",
    "cout": 20,
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
     "Cd": "7"
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Spéciales (Gardiens des tombes)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Bâton",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "gardiens-tombes/tomb-guards",
    "nom": "Gardes des tombes",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "2",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "3",
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Lance",
        "cout": 10
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
        "nom": "Fléau",
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "gardiens-tombes/skeleton-warriors",
    "nom": "Guerriers squelettes",
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
     "I": "2",
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Lance",
        "cout": 10
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
        "nom": "Fléau",
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "gardiens-tombes/tomb-scorpions",
    "nom": "Scorpions des tombes",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "2",
     "CT": "-",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Dard de scorpion",
      "resume": "Le dard du scorpion fonctionne comme une arme enduite de lotus noir. Créature vivante et animal, le scorpion ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Tomb Guardians"
 },
 {
  "id": "gladiateurs",
  "nom": "Gladiateurs",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Styles de combat",
    "resume": "Chaque guerrier adopte un style de combat qui fixe ses armes et armures (l'ogre et le tueur utilisent leur propre liste). Un héros peut sortir de ces styles grâce aux compétences adaptées, et les styles peuvent être échangés ou rachetés à tout moment."
   },
   {
    "nom": "Libérez les esclaves !",
    "resume": "La bande ne vend jamais ses prisonniers aux marchands d'esclaves."
   },
   {
    "nom": "Dans l'arène !",
    "resume": "Un prisonnier peut être opposé à un gladiateur dans les fosses. Le vainqueur gladiateur gagne +2 XP, l'équipement du captif et 50 co ; si le captif gagne, il empoche 50 co et +2 XP et est libéré sur 4+ sur 1D6."
   }
  ],
  "guerriers": [
   {
    "id": "gladiateurs/pit-king",
    "nom": "Roi de l'arène",
    "categorie": "heros",
    "cout": 80,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "4",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Combattant de fosse",
      "resume": "Habitué aux combats en espace clos, le guerrier gagne +1 CC et +1 A lorsqu'il combat dans des ruines, des bâtiments ou dans l'arène."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Gladiateurs)"
    ],
    "equipement": [
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Style orque (casque, dague, hache, bouclier)",
        "cout": 20
       },
       {
        "nom": "Style mort-vivant (casque, dague, gantelet à pointes, épée)",
        "cout": 35
       },
       {
        "nom": "Style impérial (casque, dague, arme lourde, armure légère)",
        "cout": 45
       },
       {
        "nom": "Style du Chaos (casque, dague, fléau, bouclier, armure légère)",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "gladiateurs/dwarf-troll-slayer",
    "nom": "Tueur de trolls nain",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 1,
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
      "nom": "Combattant de fosse",
      "resume": "Habitué aux combats en espace clos, le guerrier gagne +1 CC et +1 A lorsqu'il combat dans des ruines, des bâtiments ou dans l'arène."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
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
      "nom": "Vœu de mort",
      "resume": "Le Tueur cherche une fin glorieuse : insensible à la psychologie, il n'a jamais à tester lorsqu'il combat seul."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Gladiateurs)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Gantelet à pointes",
        "cout": 15
       },
       {
        "nom": "Hache naine",
        "cout": 15
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "gladiateurs/pit-veteran",
    "nom": "Vétéran de l'arène",
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Combattant de fosse",
      "resume": "Habitué aux combats en espace clos, le guerrier gagne +1 CC et +1 A lorsqu'il combat dans des ruines, des bâtiments ou dans l'arène."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Gladiateurs)"
    ],
    "equipement": [
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Style orque (casque, dague, hache, bouclier)",
        "cout": 20
       },
       {
        "nom": "Style mort-vivant (casque, dague, gantelet à pointes, épée)",
        "cout": 35
       },
       {
        "nom": "Style impérial (casque, dague, arme lourde, armure légère)",
        "cout": 45
       },
       {
        "nom": "Style du Chaos (casque, dague, fléau, bouclier, armure légère)",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "gladiateurs/ogre-pit-fighter",
    "nom": "Gladiateur ogre",
    "categorie": "hdm",
    "cout": 165,
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
      "nom": "Combattant de fosse",
      "resume": "Habitué aux combats en espace clos, le guerrier gagne +1 CC et +1 A lorsqu'il combat dans des ruines, des bâtiments ou dans l'arène."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Lent d'esprit",
      "resume": "L'Ogre doit accumuler deux fois plus d'expérience que les autres pour chaque progression."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Gantelet à pointes",
        "cout": 15
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
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "gladiateurs/pit-fighter",
    "nom": "Gladiateur",
    "categorie": "hdm",
    "cout": 35,
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
    "regles": [
     {
      "nom": "Combattant de fosse",
      "resume": "Habitué aux combats en espace clos, le guerrier gagne +1 CC et +1 A lorsqu'il combat dans des ruines, des bâtiments ou dans l'arène."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Style orque (casque, dague, hache, bouclier)",
        "cout": 20
       },
       {
        "nom": "Style mort-vivant (casque, dague, gantelet à pointes, épée)",
        "cout": 35
       },
       {
        "nom": "Style impérial (casque, dague, arme lourde, armure légère)",
        "cout": 45
       },
       {
        "nom": "Style du Chaos (casque, dague, fléau, bouclier, armure légère)",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "gladiateurs/pursuer",
    "nom": "Poursuivant",
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
    "regles": [
     {
      "nom": "Combattant de fosse",
      "resume": "Habitué aux combats en espace clos, le guerrier gagne +1 CC et +1 A lorsqu'il combat dans des ruines, des bâtiments ou dans l'arène."
     },
     {
      "nom": "Dérobade",
      "resume": "Quand il est chargé, le poursuivant peut tenter d'esquiver : un test d'Initiative réussi transforme la charge en charge ratée."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Style skink (casque, dague, trident ou javelots, filet ou rondache)",
        "cout": 25
       },
       {
        "nom": "Style elfe sorcière (casque, dague, 2 épées ou lance et filet)",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Pit Fighters"
 },
 {
  "id": "gobelins-foret",
  "nom": "Gobelins de la forêt",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Natifs",
    "resume": "Le guerrier ignore les pénalités de mouvement en terrain boisé."
   },
   {
    "nom": "Animosité",
    "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
   }
  ],
  "guerriers": [
   {
    "id": "gobelins-foret/chieftain",
    "nom": "Chef",
    "categorie": "heros",
    "cout": 50,
    "min": 1,
    "max": 1,
    "xp": 17,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Chevaucheur d'araignées",
      "resume": "Le chef peut monter les araignées géantes et l'araignée gigantesque (règles optionnelles de monture)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Perche de chef",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-foret/brave",
    "nom": "Brave",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 4,
    "xp": 6,
    "profil": {
     "M": "4",
     "CC": "2",
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
      "nom": "Animosité",
      "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Gobelins de la forêt)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Perche de chef",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-foret/shaman",
    "nom": "Chaman",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 1,
    "xp": 6,
    "profil": {
     "M": "4",
     "CC": "2",
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
      "nom": "Sorcier (Magie des gobelins de la forêt)",
      "resume": "Le chaman est un sorcier : il commence avec un sort tiré au hasard dans la liste des gobelins de la forêt."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance",
        "cout": 5
       },
       {
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Perche de chef",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-foret/gigantic-spider",
    "nom": "Araignée gigantesque",
    "categorie": "hdm",
    "cout": 200,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "5",
     "E": "5",
     "PV": "3",
     "I": "4",
     "A": "2",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Venimeuse",
      "resume": "Après une blessure, le jet de blessure donne : 1 à terre, 2-4 sonné, 5-6 hors de combat."
     },
     {
      "nom": "Natifs",
      "resume": "Le guerrier ignore les pénalités de mouvement en terrain boisé."
     },
     {
      "nom": "Créature sans conscience",
      "resume": "L'araignée est sujette à la stupidité, peut escalader et ne gagne jamais d'expérience."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Monture",
      "resume": "Le chef peut la chevaucher : il gagne +1 en sauvegarde d'armure et se déplace de 6 ps ; les tirs touchent le cavalier sur 1-2 et l'araignée sur 3-6, l'adversaire choisit sa cible au corps à corps. Montée, elle ignore la stupidité."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "gobelins-foret/red-toof-goblin",
    "nom": "Gobelin Dent-Rouge",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Animosité",
      "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
     },
     {
      "nom": "Frénésie",
      "resume": "Charge toujours l'ennemi le plus proche à portée et double ses Attaques au corps à corps. Immunisée à la psychologie tant qu'elle n'est pas mise à terre ou sonnée."
     },
     {
      "nom": "Berserks",
      "resume": "Ces gobelins sont sujets à la frénésie ; s'ils commencent leur tour à portée de charge d'un ennemi, ils ignorent l'animosité ce tour-là."
     }
    ],
    "competences": [],
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
        "nom": "Lance",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Armes de jet",
        "cout": 15
       },
       {
        "nom": "Arc",
        "cout": 10
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
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-foret/slugga",
    "nom": "Slugga",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 5,
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Animosité",
      "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
     },
     {
      "nom": "Sluggas",
      "resume": "Lors de la phase de tir, le slugga peut lancer ses armes de jet jusqu'à trois fois ; non cumulable avec Tir rapide s'il est promu."
     }
    ],
    "competences": [],
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
        "nom": "Lance",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Armes de jet",
        "cout": 15
       },
       {
        "nom": "Arc",
        "cout": 10
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
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-foret/forest-goblin",
    "nom": "Gobelin de la forêt",
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
     "Cd": "6"
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
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Sarbacane",
        "cout": 25
       },
       {
        "nom": "Armes de jet",
        "cout": 15
       },
       {
        "nom": "Arc",
        "cout": 10
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
    ],
    "race": "gobelin",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Forest Goblins"
 },
 {
  "id": "gobelins-nuit",
  "nom": "Gobelins de la nuit",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Animosité des gobelins de la nuit",
    "resume": "Au début de chaque tour, lancez 1D6 : sur 1, les gobelins de la nuit se chamaillent et ne font rien d'autre ce tour ; trolls, squigs et snotlings ne sont pas concernés."
   },
   {
    "nom": "Haine des nabots",
    "resume": "Les gobelins de la nuit haïssent les Nains (sauf les fanatiques)."
   }
  ],
  "guerriers": [
   {
    "id": "gobelins-nuit/big-boss",
    "nom": "Grand chef",
    "categorie": "heros",
    "cout": 45,
    "min": 1,
    "max": 1,
    "xp": 17,
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
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Gobelins de la nuit)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
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
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-nuit/shaman",
    "nom": "Chaman",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 1,
    "xp": 10,
    "profil": {
     "M": "4",
     "CC": "2",
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
      "nom": "Sorcier (Magie de la Waaagh!)",
      "resume": "Lance des sorts tirés de la Magie de la Waaagh!."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
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
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-nuit/boss",
    "nom": "Chef",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 4,
    "xp": 6,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Gobelins de la nuit)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
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
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-nuit/troll",
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
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
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
      "nom": "Toujours affamé",
      "resume": "Le Troll coûte 15 co d'entretien après chaque partie. À défaut, le Boss peut lui sacrifier deux Gobelins ou Squigs ; sinon le Troll s'en va chercher pitance ailleurs."
     },
     {
      "nom": "Vomissure",
      "resume": "Au lieu de ses attaques, le Troll peut vomir sur un adversaire au contact : une seule attaque qui touche automatiquement à Force 5, sans sauvegarde d'armure."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "gobelins-nuit/snotling-mob",
    "nom": "Bande de snotlings",
    "categorie": "hdm",
    "cout": 50,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Bâton pointu",
      "resume": "Arme gratuite comptant comme une dague : +1 à la sauvegarde ennemie (6+ si l'ennemi n'en a pas)."
     },
     {
      "nom": "Grouillement",
      "resume": "Les snotlings se déplacent et combattent en groupe, à 1 ps les uns des autres, et rejoignent les combats ensemble."
     },
     {
      "nom": "Chétif",
      "resume": "Blessé, un snotling est à terre sur 1, sonné sur 2-3 et hors de combat sur 4-6."
     },
     {
      "nom": "Insaisissable",
      "resume": "Sauvegarde d'esquive de 6+ contre les tirs."
     },
     {
      "nom": "Insignifiant",
      "resume": "La bande de snotlings compte pour une seule figurine (déroute, effectif, revenus) ; un héros ennemi ne gagne d'expérience que pour le dernier snotling retiré."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "gobelins-nuit/fanatics",
    "nom": "Fanatiques",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 2,
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
      "nom": "Accro",
      "resume": "Doit recevoir des champignons fous avant chaque partie, sinon il ne joue pas ; il les mange avant la bataille."
     },
     {
      "nom": "Cervelle de champignon",
      "resume": "Le fanatique ne gagne jamais d'expérience."
     },
     {
      "nom": "Cinglé",
      "resume": "Sujet à la frénésie ; doit toujours lancer pour les blessures graves après la bataille."
     },
     {
      "nom": "Frénétique",
      "resume": "Frappe toujours en premier au corps à corps, quels que soient armes et Initiative."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Boulet et chaîne",
        "cout": 15
       },
       {
        "nom": "Dagues empoisonnées",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Champignons fous",
        "cout": 25
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": true
   },
   {
    "id": "gobelins-nuit/night-goblins",
    "nom": "Gobelins de la nuit",
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
    "regles": [],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
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
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "gobelins-nuit/cave-squigs",
    "nom": "Squigs des cavernes",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "2D6",
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
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Night Goblins"
 },
 {
  "id": "guerriers-ombres",
  "nom": "Guerriers des Ombres",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Haine des Elfes Noirs",
    "resume": "Tous les guerriers de la bande, hors francs-tireurs, haïssent les Elfes Noirs."
   },
   {
    "nom": "Vue perçante",
    "resume": "Les elfes repèrent les ennemis cachés à une distance égale au double de leur Initiative en pas."
   },
   {
    "nom": "Dégoût du poison",
    "resume": "Les guerriers de la bande ne peuvent utiliser aucun poison."
   },
   {
    "nom": "Implacables",
    "resume": "En partie à plusieurs joueurs, la bande ne peut jamais s'allier à une bande du Chaos."
   },
   {
    "nom": "Tolérants",
    "resume": "La bande peut recruter des francs-tireurs ni maléfiques ni chaotiques, sauf les spécialistes du poison comme les assassins."
   }
  ],
  "guerriers": [
   {
    "id": "guerriers-ombres/shadow-master",
    "nom": "Maître des ombres",
    "categorie": "heros",
    "cout": 70,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "5",
     "CT": "5",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Guerriers des Ombres)"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Dague en ithilmar",
        "cout": 4
       },
       {
        "nom": "Épée en ithilmar",
        "cout": 20
       },
       {
        "nom": "Lance en ithilmar",
        "cout": 20
       },
       {
        "nom": "Arme lourde en ithilmar",
        "cout": 30
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
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Étendard de Nagarythe",
        "cout": 75
       },
       {
        "nom": "Cor de guerre de Nagarythe",
        "cout": 25
       },
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "guerriers-ombres/shadow-weaver",
    "nom": "Tisseur d'ombres",
    "categorie": "heros",
    "cout": 55,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Magie des ombres)",
      "resume": "Le tisseur d'ombres lance des sorts de Magie des ombres et ne peut pas lancer de sort s'il porte une armure."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Vitesse",
     "Spéciales (Guerriers des Ombres)"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Dague en ithilmar",
        "cout": 4
       },
       {
        "nom": "Épée en ithilmar",
        "cout": 20
       },
       {
        "nom": "Lance en ithilmar",
        "cout": 20
       },
       {
        "nom": "Arme lourde en ithilmar",
        "cout": 30
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
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Étendard de Nagarythe",
        "cout": 75
       },
       {
        "nom": "Cor de guerre de Nagarythe",
        "cout": 25
       },
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       },
       {
        "nom": "Pierres runiques elfiques",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "guerriers-ombres/shadow-walker",
    "nom": "Arpenteur des ombres",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 3,
    "xp": 12,
    "profil": {
     "M": "5",
     "CC": "5",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Guerriers des Ombres)"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Dague en ithilmar",
        "cout": 4
       },
       {
        "nom": "Épée en ithilmar",
        "cout": 20
       },
       {
        "nom": "Lance en ithilmar",
        "cout": 20
       },
       {
        "nom": "Arme lourde en ithilmar",
        "cout": 30
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
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure en ithilmar",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Étendard de Nagarythe",
        "cout": 75
       },
       {
        "nom": "Cor de guerre de Nagarythe",
        "cout": 25
       },
       {
        "nom": "Cape elfique",
        "cout": 75
       },
       {
        "nom": "Vin elfique",
        "cout": 50
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "guerriers-ombres/shadow-warrior",
    "nom": "Guerrier des ombres",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "6",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   },
   {
    "id": "guerriers-ombres/shadow-novice",
    "nom": "Novice des ombres",
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
     "I": "5",
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
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arc elfique",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape elfique",
        "cout": 75
       }
      ]
     }
    ],
    "race": "elfe",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Shadow Warriors"
 },
 {
  "id": "halflings",
  "nom": "Halflings",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Presque humains",
    "resume": "Les halflings peuvent engager tous les francs-tireurs accessibles aux mercenaires humains."
   },
   {
    "nom": "Trop grand",
    "resume": "Les halflings ne peuvent jamais utiliser arc long, arc elfique, arquebuse, long fusil ni tromblon, même via une progression."
   },
   {
    "nom": "Objets halflings",
    "resume": "Les objets halflings (livre de cuisine halfling, etc.) n'apportent aucun bonus à la bande."
   }
  ],
  "guerriers": [
   {
    "id": "halflings/halfling-elder",
    "nom": "Ancien halfling",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "5",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Halflings)"
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
        "nom": "Arme lourde",
        "cout": 15
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
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "halflings/halfling-cook",
    "nom": "Cuisinier halfling",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Maître cuisinier",
      "resume": "À la vente de trésors ou de malepierre, sur 5+ au D6 la bande compte comme d'une taille inférieure."
     }
    ],
    "competences": [
     "Force",
     "Vitesse",
     "Spéciales (Halflings)"
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
        "nom": "Attendrisseur (marteau)",
        "cout": 3
       },
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Machette (épée)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
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
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Marmite (casque)",
        "cout": 10
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "halflings/halfling-thief",
    "nom": "Voleur halfling",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Infiltration",
      "resume": "Se déploie après la bande adverse, n'importe où hors de vue de l'ennemi et à plus de 12 ps de toute figurine ennemie ; si les deux camps ont des infiltrateurs, chacun lance 1D6 et le plus faible se place en premier."
     },
     {
      "nom": "Crocheteur",
      "resume": "Ouvrir une porte verrouillée ne demande qu'un test d'Initiative réussi."
     },
     {
      "nom": "Coupe-bourse",
      "resume": "Si le voleur combat sans être mis hors de combat, la bande gagne un trésor de plus."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Halflings)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet-arbalète",
        "cout": 35
       },
       {
        "nom": "Pistolet",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets",
        "cout": 40
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Crochets de serrurier",
        "cout": 10
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "halflings/halfling-youths",
    "nom": "Jeunes halflings",
    "categorie": "heros",
    "cout": 10,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Tir",
     "Vitesse",
     "Spéciales (Halflings)"
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
        "nom": "Arme lourde",
        "cout": 15
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
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "halflings/village-ogre",
    "nom": "Ogre du village",
    "categorie": "hdm",
    "cout": 140,
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
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Lent d'esprit",
      "resume": "L'Ogre doit accumuler deux fois plus d'expérience que les autres pour chaque progression."
     },
     {
      "nom": "Protecteur",
      "resume": "Une fois l'ogre du village recruté, aucun garde du corps ogre ne peut rejoindre la bande (celui déjà engagé part)."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "halflings/halfling-warriors",
    "nom": "Guerriers halflings",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Arme lourde",
        "cout": 15
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "halflings/halfling-scouts",
    "nom": "Éclaireurs halflings",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 7,
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
    "regles": [],
    "competences": [],
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
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 35
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "halflings/piggies",
    "nom": "Cochons",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 4,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "0",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Sans expérience",
      "resume": "Ce guerrier ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Halflings"
 },
 {
  "id": "hommes-lezards",
  "nom": "Hommes-Lézards",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Peau écailleuse",
    "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
   },
   {
    "nom": "Armure saurienne",
    "resume": "Pour cette bande, l'armure légère coûte toujours 50 co, même achetée au tableau d'équipement général."
   },
   {
    "nom": "Morsure",
    "resume": "Les saurus ont une attaque de morsure supplémentaire à leur propre Force, sans pénalité d'arme ; elle frappe toujours en dernier."
   },
   {
    "nom": "Sang-froid",
    "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
   },
   {
    "nom": "Amphibie",
    "resume": "Se déplace dans l'eau sans pénalité et y compte comme à couvert."
   },
   {
    "nom": "Né dans la jungle",
    "resume": "Les skinks traversent la jungle sans pénalité de mouvement."
   },
   {
    "nom": "Rareté des saurus",
    "resume": "La bande ne peut jamais compter plus de braves saurus que de braves skinks."
   }
  ],
  "guerriers": [
   {
    "id": "hommes-lezards/skink-priest",
    "nom": "Prêtre skink",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "4",
     "F": "3",
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
     },
     {
      "nom": "Sorcier (Magie des Hommes-Lézards)",
      "resume": "Le prêtre skink lance des sorts de la magie des Hommes-Lézards."
     },
     {
      "nom": "Sang-froid",
      "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
     },
     {
      "nom": "Amphibie",
      "resume": "Se déplace dans l'eau sans pénalité et y compte comme à couvert."
     },
     {
      "nom": "Né dans la jungle",
      "resume": "Les skinks traversent la jungle sans pénalité de mouvement."
     },
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Hommes-Lézards)"
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
        "nom": "Hache de pierre",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Bolas",
        "cout": 5
       },
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque en os",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 20
       },
       {
        "nom": "Lotus noir",
        "cout": 10
       }
      ]
     }
    ],
    "race": "skink",
    "sansProgression": false
   },
   {
    "id": "hommes-lezards/saurus-totem-warrior",
    "nom": "Guerrier totem saurus",
    "categorie": "heros",
    "cout": 60,
    "min": 0,
    "max": 1,
    "xp": 11,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1+1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sang-froid",
      "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
     },
     {
      "nom": "Morsure",
      "resume": "Les saurus ont une attaque de morsure supplémentaire à leur propre Force, sans pénalité d'arme ; elle frappe toujours en dernier."
     },
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Hommes-Lézards)"
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
        "nom": "Hache de pierre",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque en os",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 50
       }
      ]
     }
    ],
    "race": "saurus",
    "sansProgression": false
   },
   {
    "id": "hommes-lezards/skink-great-crest",
    "nom": "Grande crête skink",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "2",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Sang-froid",
      "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
     },
     {
      "nom": "Amphibie",
      "resume": "Se déplace dans l'eau sans pénalité et y compte comme à couvert."
     },
     {
      "nom": "Né dans la jungle",
      "resume": "Les skinks traversent la jungle sans pénalité de mouvement."
     },
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     }
    ],
    "competences": [
     "Tir",
     "Vitesse",
     "Spéciales (Hommes-Lézards)"
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
        "nom": "Hache de pierre",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Bolas",
        "cout": 5
       },
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin noir",
        "cout": 20
       },
       {
        "nom": "Lotus noir",
        "cout": 10
       }
      ]
     }
    ],
    "race": "skink",
    "sansProgression": false
   },
   {
    "id": "hommes-lezards/kroxigor",
    "nom": "Kroxigor",
    "categorie": "hdm",
    "cout": 200,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "5",
     "E": "4",
     "PV": "3",
     "I": "1",
     "A": "3",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     },
     {
      "nom": "Amphibie",
      "resume": "Se déplace dans l'eau sans pénalité et y compte comme à couvert."
     },
     {
      "nom": "Sang-froid",
      "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
     },
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Bête",
      "resume": "Le Minotaure peut gagner de l'expérience mais ne devient jamais un héros."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Hallebarde",
        "cout": 0
       }
      ]
     }
    ],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "hommes-lezards/saurus-brave",
    "nom": "Brave saurus",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 4,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "1",
     "A": "1+1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Sang-froid",
      "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
     },
     {
      "nom": "Morsure",
      "resume": "Les saurus ont une attaque de morsure supplémentaire à leur propre Force, sans pénalité d'arme ; elle frappe toujours en dernier."
     },
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     }
    ],
    "competences": [],
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
        "nom": "Hache de pierre",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque en os",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 50
       }
      ]
     }
    ],
    "race": "saurus",
    "sansProgression": false
   },
   {
    "id": "hommes-lezards/skink-brave",
    "nom": "Brave skink",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "2",
     "CT": "3",
     "F": "3",
     "E": "2",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Sang-froid",
      "resume": "Pour les tests de psychologie et de déroute, lancez 3D6 et gardez les deux plus faibles. Le Commandement d'un saurus ou d'un kroxigor ne peut servir aux tests de déroute."
     },
     {
      "nom": "Amphibie",
      "resume": "Se déplace dans l'eau sans pénalité et y compte comme à couvert."
     },
     {
      "nom": "Né dans la jungle",
      "resume": "Les skinks traversent la jungle sans pénalité de mouvement."
     },
     {
      "nom": "Peau écailleuse",
      "resume": "Sauvegarde naturelle de 6+, que les modificateurs de Force ne peuvent pas dégrader au-delà de 6 ; annulée par un coup critique « sans sauvegarde »."
     }
    ],
    "competences": [],
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
        "nom": "Hache de pierre",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Bolas",
        "cout": 5
       },
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Venin de reptile",
        "cout": 5
       }
      ]
     }
    ],
    "race": "skink",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Lizardmen"
 },
 {
  "id": "maitres-horreur",
  "nom": "Maîtres de l'horreur",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Pas de promotion",
    "resume": "Les zombies et les créatures de chair ne peuvent jamais devenir des héros grâce au résultat « Le petit a du talent »."
   }
  ],
  "guerriers": [
   {
    "id": "maitres-horreur/mad-scientist",
    "nom": "Savant fou",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
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
      "nom": "Insensible à la psychologie",
      "resume": "N'est jamais affecté par la psychologie (peur, déroute…) et ne quitte jamais un corps à corps de son plein gré."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Maîtres de l'horreur)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Épée tronçonneuse",
        "cout": 16
       },
       {
        "nom": "Trident électrique",
        "cout": 16
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet à répétition",
        "cout": 28
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "maitres-horreur/thrall",
    "nom": "Thrall",
    "categorie": "heros",
    "cout": 70,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "7"
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Maîtres de l'horreur)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Épée tronçonneuse",
        "cout": 16
       },
       {
        "nom": "Trident électrique",
        "cout": 16
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet à répétition",
        "cout": 28
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "vampire",
    "sansProgression": false
   },
   {
    "id": "maitres-horreur/wolfman",
    "nom": "Homme-loup",
    "categorie": "heros",
    "cout": 65,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "2",
     "I": "2",
     "A": "2",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Crocs et griffes",
      "resume": "Ne peut porter aucun équipement ; il combat avec ses crocs et ses griffes sans pénalité de combat à mains nues."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Maîtres de l'horreur)"
    ],
    "equipement": [],
    "race": "hommeLoup",
    "sansProgression": false
   },
   {
    "id": "maitres-horreur/hunchback",
    "nom": "Bossu",
    "categorie": "heros",
    "cout": 25,
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
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Maîtres de l'horreur)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Épée tronçonneuse",
        "cout": 16
       },
       {
        "nom": "Trident électrique",
        "cout": 16
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Pistolet à répétition",
        "cout": 28
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "maitres-horreur/flesh-construct",
    "nom": "Créature de chair",
    "categorie": "hdm",
    "cout": 80,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "5",
     "PV": "2",
     "I": "2",
     "A": "2",
     "Cd": "6"
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Un peu dérangé",
      "resume": "Après la partie, il doit réussir un test de Commandement pour gagner l'expérience de survie."
     },
     {
      "nom": "Juste une égratignure",
      "resume": "Sur un 1-2 au jet de blessure après une mise hors de combat, la bande peut le réparer pour D6×5 co ; faute de payer, il manque la bataille suivante et reste sur la feuille jusqu'à réparation ou abandon."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "maitres-horreur/the-bitten",
    "nom": "Mordu",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Transformation",
      "resume": "À chaque tour, D6 : sur 1 il est stupide (et reprend forme humaine s'il était transformé), sur 6 il se transforme et gagne Frénésie et Sprint jusqu'au prochain 1 ; transformé, il lâche son équipement sauf une dague et combat à mains nues sans pénalité."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
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
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "maitres-horreur/zombie",
    "nom": "Zombie",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "0",
     "F": "3",
     "E": "4",
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Masters of Horror"
 },
 {
  "id": "mangeurs-hommes",
  "nom": "Mangeurs d'hommes",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Gloutonnerie",
    "resume": "Chaque Ogre compte pour deux figurines à la vente de pierre magique ; les captifs et même les membres de la bande peuvent être mangés, et un héros ogre qui mange gagne autant d'expérience que de figurines dévorées."
   },
   {
    "nom": "Lent d'esprit",
    "resume": "L'Ogre doit accumuler deux fois plus d'expérience que les autres pour chaque progression."
   },
   {
    "nom": "Clients difficiles",
    "resume": "Les héros ogres subissent -1 aux jets de recherche d'objets rares non réservés aux Ogres."
   },
   {
    "nom": "Cannibales",
    "resume": "Seuls les francs-tireurs halflings et le garde du corps ogre peuvent être engagés, sauf exception ; ils peuvent être mangés en fin de contrat."
   }
  ],
  "guerriers": [
   {
    "id": "mangeurs-hommes/captain",
    "nom": "Capitaine",
    "categorie": "heros",
    "cout": 145,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "3",
     "I": "3",
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
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Mangeurs d'hommes)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Gourdin ogre",
        "cout": 10
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Poing de fer",
        "cout": 15
       },
       {
        "nom": "Épée longue de Cathay",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Mortier portatif",
        "cout": 70
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Gnoblar combattant",
        "cout": 15
       },
       {
        "nom": "Gnoblar guetteur",
        "cout": 20
       },
       {
        "nom": "Gnoblar porte-bonheur",
        "cout": 25
       },
       {
        "nom": "Gnoblar bretteur",
        "cout": 30
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "mangeurs-hommes/mountain-guide",
    "nom": "Guide des montagnes",
    "categorie": "heros",
    "cout": 145,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "3",
     "I": "3",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Pisteur",
      "resume": "S'il n'a pas été mis hors de combat, lance deux dés à l'exploration et en garde un (ce n'est pas une relance)."
     },
     {
      "nom": "Solitaire",
      "resume": "Le prêtre ignore les règles de combat seul contre plusieurs (« Seul au monde »)."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Mangeurs d'hommes)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Gourdin ogre",
        "cout": 10
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à harpon",
        "cout": 50
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
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "mangeurs-hommes/youngbloods",
    "nom": "Jeunes sangs",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "4",
     "PV": "2",
     "I": "2",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Mangeurs d'hommes)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Gourdin ogre",
        "cout": 10
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Poing de fer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Mortier portatif",
        "cout": 70
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Gnoblar combattant",
        "cout": 15
       },
       {
        "nom": "Gnoblar guetteur",
        "cout": 20
       },
       {
        "nom": "Gnoblar porte-bonheur",
        "cout": 25
       },
       {
        "nom": "Gnoblar bretteur",
        "cout": 30
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "mangeurs-hommes/bulls",
    "nom": "Taureaux",
    "categorie": "hdm",
    "cout": 140,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "2",
     "F": "4",
     "E": "4",
     "PV": "3",
     "I": "2",
     "A": "3",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Charge du taureau",
      "resume": "En charge, fait une seule attaque à +1 pour toucher ; si elle touche, l'ennemi est mis à terre."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Gourdin ogre",
        "cout": 10
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Poing de fer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Mortier portatif",
        "cout": 70
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Gnoblar combattant",
        "cout": 15
       },
       {
        "nom": "Gnoblar guetteur",
        "cout": 20
       },
       {
        "nom": "Gnoblar porte-bonheur",
        "cout": 25
       },
       {
        "nom": "Gnoblar bretteur",
        "cout": 30
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "mangeurs-hommes/sabretusks",
    "nom": "Dents-de-sabre",
    "categorie": "hdm",
    "cout": 125,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "8",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "2",
     "I": "4",
     "A": "3",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Bête du guide",
      "resume": "Utilise le Commandement du guide des montagnes à 6 ps ; sans guide, il reste en cage au camp."
     },
     {
      "nom": "Instinct sauvage",
      "resume": "Test de Commandement au début du tour : en cas d'échec, l'adversaire le déplace ce tour et il peut charger ses propres alliés."
     },
     {
      "nom": "Négligé",
      "resume": "Hors de combat, il ne compte pas pour les tests de déroute."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "mangeurs-hommes/half-growns",
    "nom": "Demi-portions",
    "categorie": "hdm",
    "cout": 85,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "2",
     "F": "4",
     "E": "4",
     "PV": "2",
     "I": "2",
     "A": "2",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Gourdin ogre",
        "cout": 10
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Poing de fer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Mortier portatif",
        "cout": 70
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Gnoblar combattant",
        "cout": 15
       },
       {
        "nom": "Gnoblar guetteur",
        "cout": 20
       },
       {
        "nom": "Gnoblar porte-bonheur",
        "cout": 25
       },
       {
        "nom": "Gnoblar bretteur",
        "cout": 30
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Maneaters"
 },
 {
  "id": "maraudeurs-chaos",
  "nom": "Maraudeurs du Chaos",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Tribus",
    "resume": "À la création, la bande choisit sa tribu : Norses (bonus aux recherches d'objets rares), Kurgans (chiens illimités, arcs en os, malus aux objets rares) ou Hungs (12 guerriers max., chevaux à 40 co et Cavalier pour tous les héros)."
   },
   {
    "nom": "Œil des dieux",
    "resume": "Après chaque bataille où le chef a combattu, lancez 2D6 pour voir s'il gagne une Marque du Chaos ou devient un rejeton ; le test cesse une fois la Marque obtenue."
   },
   {
    "nom": "Déchéance",
    "resume": "Après une défaite, +1 au jet par héros mis hors de combat ; sur 12+, le chef devient un rejeton du Chaos et perd tout (ou quitte la bande si un rejeton existe déjà)."
   },
   {
    "nom": "Marque du Chaos",
    "resume": "Après une victoire, +1 au jet par ennemi mis hors de combat par le chef ; sur 12+, il peut choisir une Marque du Chaos."
   }
  ],
  "guerriers": [
   {
    "id": "maraudeurs-chaos/marauder-chieftain",
    "nom": "Chef maraudeur",
    "categorie": "heros",
    "cout": 95,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "5",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Marques des dieux sombres",
      "resume": "Chaque Marque (Chaos universel, Tchar, Arkhar, Onogal, Shornaal) donne un effet différent au chef et au voyant ; hors Chaos universel, la bande ne peut mêler deux Marques différentes."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Maraudeurs du Chaos)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Fouet barbelé",
        "cout": 15
       },
       {
        "nom": "Grande hache",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "maraudeurChaos",
    "sansProgression": false
   },
   {
    "id": "maraudeurs-chaos/condemned",
    "nom": "Condamné",
    "categorie": "heros",
    "cout": 55,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "D6",
     "CT": "3",
     "F": "D6",
     "E": "D6",
     "PV": "1",
     "I": "4",
     "A": "D3",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Instabilité",
      "resume": "CC, F, E et A sont relancés à chaque tour."
     },
     {
      "nom": "Expérience du condamné",
      "resume": "Au lieu de progresser normalement, il lance des dés pour ses caractéristiques et peut en fixer les résultats."
     },
     {
      "nom": "Destin",
      "resume": "À 90 points d'expérience, s'il lui reste des caractéristiques non fixées, il devient un rejeton du Chaos (ou s'en va s'il y en a déjà un)."
     }
    ],
    "competences": [
     "Force",
     "Vitesse",
     "Spéciales (Maraudeurs du Chaos)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Fouet barbelé",
        "cout": 15
       },
       {
        "nom": "Grande hache",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "maraudeurChaos",
    "sansProgression": false
   },
   {
    "id": "maraudeurs-chaos/seer",
    "nom": "Voyant",
    "categorie": "heros",
    "cout": 45,
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
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Sorcier (Marques du Chaos)",
      "resume": "Le voyant est un sorcier ; il choisit une Marque au recrutement, qui fixe ses sorts (Rituels du Chaos, de Tchar, d'Onogal, de Shornaal) ou en fait un Père de sang sans sorts (Arkhar)."
     },
     {
      "nom": "Marques des dieux sombres",
      "resume": "Chaque Marque (Chaos universel, Tchar, Arkhar, Onogal, Shornaal) donne un effet différent au chef et au voyant ; hors Chaos universel, la bande ne peut mêler deux Marques différentes."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Spéciales (Maraudeurs du Chaos)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Fouet barbelé",
        "cout": 15
       },
       {
        "nom": "Grande hache",
        "cout": 25
       }
      ]
     }
    ],
    "race": "maraudeurChaos",
    "sansProgression": false
   },
   {
    "id": "maraudeurs-chaos/champions",
    "nom": "Champions",
    "categorie": "heros",
    "cout": 45,
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Maraudeurs du Chaos)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Fouet barbelé",
        "cout": 15
       },
       {
        "nom": "Grande hache",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "maraudeurChaos",
    "sansProgression": false
   },
   {
    "id": "maraudeurs-chaos/spawn-of-chaos",
    "nom": "Rejeton du Chaos",
    "categorie": "hdm",
    "cout": 180,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "2D6",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "5",
     "PV": "3",
     "I": "2",
     "A": "D6+1",
     "Cd": "10"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Attaques du rejeton",
      "resume": "Le nombre d'attaques (D6+1) est tiré à chaque phase de corps à corps."
     },
     {
      "nom": "Mouvement du rejeton",
      "resume": "Se déplace de 2D6 ps en ligne droite."
     },
     {
      "nom": "Psychologie du rejeton",
      "resume": "Réussit automatiquement tous ses tests de Commandement."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "maraudeurs-chaos/chaos-marauders",
    "nom": "Maraudeurs du Chaos",
    "categorie": "hdm",
    "cout": 35,
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
     "I": "4",
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "maraudeurChaos",
    "sansProgression": false
   },
   {
    "id": "maraudeurs-chaos/warhounds-of-chaos",
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
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Marauders of Chaos"
 },
 {
  "id": "marcheurs-reves",
  "nom": "Marcheurs des rêves, culte de Morr",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Ennemis de Morr",
    "resume": "Les membres de la bande ne craignent pas les vampires, nécromanciens et morts-vivants : ils ignorent la Peur qu'ils causent."
   },
   {
    "nom": "Élu de Morr",
    "resume": "Pour recruter le Rêveur, un prêtre de Morr doit l'authentifier : sur 4+ au D6 il rejoint la bande et la mène ; sinon le prêtre est le chef. On peut réessayer après chaque bataille en payant le coût ; une fois un vrai Rêveur mort, on ne peut plus en recruter et le prêtre redevient chef."
   }
  ],
  "guerriers": [
   {
    "id": "marcheurs-reves/priest-of-morr",
    "nom": "Prêtre de Morr",
    "categorie": "heros",
    "cout": 35,
    "min": 1,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Prières de Morr (rites funéraires)",
      "resume": "Le prêtre connaît un rite funéraire de Morr tiré au hasard ; il l'accomplit comme un sort, dans la phase de magie."
     },
     {
      "nom": "Solitaire",
      "resume": "Le prêtre ignore les règles de combat seul contre plusieurs (« Seul au monde »)."
     },
     {
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Marcheurs des rêves, culte de Morr)"
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
        "nom": "Faux",
        "cout": 0
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "marcheurs-reves/dreamer",
    "nom": "Rêveur",
    "categorie": "heros",
    "cout": 70,
    "min": 0,
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
      "nom": "Élu de Morr",
      "resume": "Pour recruter le Rêveur, un prêtre de Morr doit l'authentifier : sur 4+ au D6 il rejoint la bande et la mène ; sinon le prêtre est le chef. On peut réessayer après chaque bataille en payant le coût ; une fois un vrai Rêveur mort, on ne peut plus en recruter et le prêtre redevient chef."
     },
     {
      "nom": "Rêve guide",
      "resume": "Au début de chaque bataille le Rêveur lance 1D6 : 1, -1 ps de Mouvement ; 2-3, +1 pour toucher un héros ennemi choisi ; 4-5, +1 en Force contre lui ; 6, Frénésie contre lui."
     },
     {
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Marcheurs des rêves, culte de Morr)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
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
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "marcheurs-reves/black-guard-of-morr",
    "nom": "Garde noir de Morr",
    "categorie": "heros",
    "cout": 55,
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
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Gardien silencieux",
      "resume": "Un ennemi doit réussir un test d'Initiative pour repérer un garde noir caché ; son armure ne le ralentit pas."
     },
     {
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Marcheurs des rêves, culte de Morr)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
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
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "marcheurs-reves/the-andanti",
    "nom": "Andanti",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 6,
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
    "regles": [
     {
      "nom": "Technique estalienne",
      "resume": "L'Andanti peut parer avec une rapière ou une main gauche en utilisant sa Capacité de Combat."
     },
     {
      "nom": "Savoir des Andanti",
      "resume": "+1 pour toucher les vampires au corps à corps."
     },
     {
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Spéciales (Marcheurs des rêves, culte de Morr)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Rapière",
        "cout": 15
       },
       {
        "nom": "Main gauche",
        "cout": 7
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
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "marcheurs-reves/deaths-heads-of-ostermark",
    "nom": "Têtes de mort d'Ostermark",
    "categorie": "hdm",
    "cout": 40,
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
    "regles": [
     {
      "nom": "Hallebardier expert",
      "resume": "Peut manier une hallebarde d'une main et porter un bouclier de l'autre."
     }
    ],
    "competences": [],
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
        "nom": "Hallebarde",
        "cout": 10
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
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "marcheurs-reves/morr-worshippers",
    "nom": "Fidèles de Morr",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
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
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Dreamwalkers, Cult of Morr"
 },
 {
  "id": "mazzalupo",
  "nom": "Mazzalupo",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "mazzalupo/wandering-knight",
    "nom": "Chevalier errant",
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
      "nom": "Équitation (cheval)",
      "resume": "Possède la compétence d'équitation et peut monter un cheval."
     },
     {
      "nom": "Ordres",
      "resume": "Connaît un Ordre au départ et en apprend d'autres comme des sorts ; lancés en phase de ralliement au lieu de courir, ils affectent les alliés à 6 ps qui l'entendent (pas les animaux, alliés ni francs-tireurs). Ce ne sont pas des sorts."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "mazzalupo/fallen-noble",
    "nom": "Noble déchu",
    "categorie": "heros",
    "cout": 40,
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
    "regles": [
     {
      "nom": "Indolent",
      "resume": "Ne peut pas être visé par les Ordres du Chevalier errant."
     },
     {
      "nom": "Équitation (cheval)",
      "resume": "Possède la compétence d'équitation et peut monter un cheval."
     },
     {
      "nom": "Cède-moi le passage !",
      "resume": "En chargeant un héros, peut lancer un défi : refusé, la charge ne vise plus ce héros et celui-ci subit -1 pour toucher toute la partie ; accepté, seuls les deux combattent, et le vainqueur gagne +1 pour toucher et +1 F pour la partie."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "mazzalupo/master-of-finances",
    "nom": "Maître des finances",
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
      "nom": "Corruption",
      "resume": "Au corps à corps, avant les jets pour blesser, on peut payer 5 co par figurine ennemie qui a touché pour lui faire relancer une touche réussie ; une fois par figurine, sans effet sur les figurines insensibles à la psychologie."
     },
     {
      "nom": "Marchandage",
      "resume": "Possède la compétence Marchandage."
     }
    ],
    "competences": [
     "Tir",
     "Érudition"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "mazzalupo/squire",
    "nom": "Écuyer",
    "categorie": "heros",
    "cout": 20,
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
    "regles": [
     {
      "nom": "Chapardeur",
      "resume": "S'il n'a pas été mis hors de combat, sur 5+ au D6 après la partie, il vole un fragment de malepierre à une bande adverse au hasard."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "mazzalupo/sheepherder",
    "nom": "Berger",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 2,
    "xp": 0,
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
    "regles": [],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape en peau d'ours",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "mazzalupo/churl",
    "nom": "Rustre",
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
     "I": "4",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "mazzalupo/black-sheep",
    "nom": "Mouton noir",
    "categorie": "hdm",
    "cout": 10,
    "min": 0,
    "max": 5,
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
    "regles": [
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Viande de boucherie",
      "resume": "Les ennemis l'ignorent pour déterminer la cible la plus proche au tir ; les Mazzalupo engagés seulement contre des moutons peuvent tirer, la cible touchée étant tirée au hasard."
     },
     {
      "nom": "Animaux de montagne",
      "resume": "Escalade normalement, comme un humain."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Mazzalupo"
 },
 {
  "id": "miragliano",
  "nom": "Mercenaires de Miragliano",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Haine des Skavens",
    "resume": "Depuis l'épidémie de vérole rouge de 1812, tous les Miragliens haïssent les Skavens (règles de haine) ; les francs-tireurs ne sont pas concernés et la bande ne peut pas engager de franc-tireur skaven."
   }
  ],
  "guerriers": [
   {
    "id": "miragliano/captain",
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
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Arbalétriers miragliens",
      "resume": "Les héros miragliens ont +1 pour toucher lorsqu'ils tirent à l'arbalète (uniquement avec cette arme)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "miragliano/champion",
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Arbalétriers miragliens",
      "resume": "Les héros miragliens ont +1 pour toucher lorsqu'ils tirent à l'arbalète (uniquement avec cette arme)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "miragliano/youngblood",
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
    "regles": [
     {
      "nom": "Arbalétriers miragliens",
      "resume": "Les héros miragliens ont +1 pour toucher lorsqu'ils tirent à l'arbalète (uniquement avec cette arme)."
     }
    ],
    "competences": [
     "Tir",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "miragliano/duellists",
    "nom": "Duellistes",
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Cape et dague",
      "resume": "Le duelliste se sert de sa cape pour détourner les coups : il compte comme équipé d'une rondache au corps à corps."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "miragliano/warriors",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "miragliano/marksmen",
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
    "regles": [
     {
      "nom": "Tireurs miragliens",
      "resume": "Ces tireurs ont +1 pour toucher avec toutes leurs armes de tir."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Tileans (Miragleans)"
 },
 {
  "id": "moines-cathay",
  "nom": "Moines guerriers de Cathay",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Préceptes monastiques",
    "resume": "Les moines dragons et les moines guerriers ne portent jamais d'armure."
   },
   {
    "nom": "Dégoût du poison",
    "resume": "Les guerriers de la bande ne peuvent utiliser aucun poison."
   },
   {
    "nom": "Étrangers",
    "resume": "La bande ne peut engager ni franc-tireur ni personnage spécial, sauf si leur description l'autorise expressément."
   }
  ],
  "guerriers": [
   {
    "id": "moines-cathay/emissary",
    "nom": "Émissaire",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "3",
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
      "nom": "Cavalier (cheval)",
      "resume": "L'émissaire sait monter à cheval."
     },
     {
      "nom": "Décret",
      "resume": "Si l'émissaire meurt, la bande doit en recruter un nouveau dès que possible et ne peut acheter ni guerrier ni équipement avant de l'avoir fait."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Vitesse",
     "Spéciales (Moines guerriers de Cathay)"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Épée dragon",
        "cout": 20
       },
       {
        "nom": "Épée longue de Cathay",
        "cout": 75
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cape de soie de Cathay",
        "cout": 40
       },
       {
        "nom": "Cheval",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "moines-cathay/dragon-monk",
    "nom": "Moine dragon",
    "categorie": "heros",
    "cout": 55,
    "min": 0,
    "max": 3,
    "xp": 15,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Préceptes monastiques",
      "resume": "Les moines dragons et les moines guerriers ne portent jamais d'armure."
     },
     {
      "nom": "Dégoût du poison",
      "resume": "Les guerriers de la bande ne peuvent utiliser aucun poison."
     },
     {
      "nom": "Arts martiaux",
      "resume": "Combat à mains nues sans pénalité et gagne +1 Attaque lorsqu'il est désarmé."
     },
     {
      "nom": "Art de la mort silencieuse",
      "resume": "À mains nues, ses attaques infligent un coup critique sur 5-6 pour blesser ; avec un bâton de combat, seules ses attaques à mains nues gardent ce bonus."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Moines guerriers de Cathay)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Bâton de combat",
        "cout": 15
       },
       {
        "nom": "Épée dragon",
        "cout": 20
       },
       {
        "nom": "Bâtons à chaîne",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Hameçons de jet",
        "cout": 10
       },
       {
        "nom": "Étoiles de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "moines-cathay/officer",
    "nom": "Officier",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Épée dragon",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
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
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "moines-cathay/warrior-monk",
    "nom": "Moine guerrier",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Préceptes monastiques",
      "resume": "Les moines dragons et les moines guerriers ne portent jamais d'armure."
     },
     {
      "nom": "Dégoût du poison",
      "resume": "Les guerriers de la bande ne peuvent utiliser aucun poison."
     },
     {
      "nom": "Arts martiaux",
      "resume": "Combat à mains nues sans pénalité et gagne +1 Attaque lorsqu'il est désarmé."
     }
    ],
    "competences": [],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Bâton de combat",
        "cout": 15
       },
       {
        "nom": "Épée dragon",
        "cout": 20
       },
       {
        "nom": "Bâtons à chaîne",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Hameçons de jet",
        "cout": 10
       },
       {
        "nom": "Étoiles de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "moines-cathay/soldier",
    "nom": "Soldat",
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
        "nom": "Épée dragon",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "moines-cathay/raging-peasant",
    "nom": "Paysan enragé",
    "categorie": "hdm",
    "cout": 10,
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
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Bagarreurs",
      "resume": "Les paysans combattent à mains nues sans subir de pénalité."
     },
     {
      "nom": "Petites gens",
      "resume": "Le paysan ne gagne jamais d'expérience."
     },
     {
      "nom": "Grouillement",
      "resume": "Les snotlings se déplacent et combattent en groupe, à 1 ps les uns des autres, et rejoignent les combats ensemble."
     },
     {
      "nom": "Négligé",
      "resume": "Hors de combat, il ne compte pas pour les tests de déroute."
     },
     {
      "nom": "Opprimés",
      "resume": "Un paysan blessé est mis hors de combat sans jet de blessure."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": "humain",
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Battle Monks of Cathay"
 },
 {
  "id": "mootland",
  "nom": "Halflings du Moot",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Halflings",
    "resume": "Les halflings sont si frêles qu'un résultat de 2 sur leurs jets de blessure compte comme « sonné »."
   }
  ],
  "guerriers": [
   {
    "id": "mootland/moot-elder",
    "nom": "Ancien du Moot",
    "categorie": "heros",
    "cout": 55,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "5",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "6",
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
     "Combat",
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Masse",
        "cout": 3
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
       },
       {
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque-marmite",
        "cout": 8
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "mootland/master-chef",
    "nom": "Maître cuisinier",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "2",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Cuisine inspirée",
      "resume": "Les halflings à 6 ps ou moins du maître cuisinier peuvent relancer leurs jets pour toucher ratés au corps à corps, une fois par tour."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couteau de cuisine",
        "cout": 2
       },
       {
        "nom": "Couperet",
        "cout": 3
       },
       {
        "nom": "Louche",
        "cout": 2
       },
       {
        "nom": "Attendrisseur",
        "cout": 3
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "mootland/halfling-thieves",
    "nom": "Voleurs halflings",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "4",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Sournois",
      "resume": "Les tirs visant un voleur halfling subissent toujours -1 pour toucher, en plus des autres modificateurs."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Masse",
        "cout": 3
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
       },
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque-marmite",
        "cout": 8
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "mootland/scouts",
    "nom": "Éclaireurs",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Vue perçante",
      "resume": "L'éclaireur repère les ennemis cachés à une distance égale au double de son Initiative en ps."
     }
    ],
    "competences": [],
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Masse",
        "cout": 3
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
       },
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque-marmite",
        "cout": 8
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   },
   {
    "id": "mootland/warriors",
    "nom": "Guerriers",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Masse",
        "cout": 3
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
       },
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque-marmite",
        "cout": 8
       }
      ]
     }
    ],
    "race": "halfling",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Mootlanders"
 },
 {
  "id": "morts-sans-repos",
  "nom": "Morts sans repos",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [],
  "guerriers": [
   {
    "id": "morts-sans-repos/liche",
    "nom": "Liche",
    "categorie": "heros",
    "cout": 125,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "2",
     "E": "2",
     "PV": "4",
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
      "nom": "Sorcier (Nécromancie des Morts sans repos)",
      "resume": "Lance des sorts de la liste de nécromancie propre aux Morts sans repos (différente de celle du livre de règles) ; la liche en connaît deux tirés au hasard."
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
     },
     {
      "nom": "Éternel",
      "resume": "Peut ignorer une blessure grave (sauf Mort) en perdant définitivement 1 PV ; un résultat Mort coûte D3 PV et la liche meurt si ses PV tombent à 0."
     },
     {
      "nom": "Se nourrir de magie",
      "resume": "Entre deux batailles, en consommant D3 trésors, la liche gagne définitivement +1 PV (pas si elle a cherché des objets rares ou a été mise hors de combat)."
     },
     {
      "nom": "Sorcier guerrier",
      "resume": "Peut porter une armure et lancer des sorts."
     },
     {
      "nom": "Progression de la liche",
      "resume": "Une progression +1 PV peut être remplacée par une nouvelle compétence."
     },
     {
      "nom": "Aucune arme ordinaire",
      "resume": "Ne peut porter aucune arme non magique, sans pénalité ; peut porter les armures de la liste."
     }
    ],
    "competences": [
     "Érudition",
     "Spéciales (Morts sans repos)"
    ],
    "equipement": [
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "liche",
    "sansProgression": false
   },
   {
    "id": "morts-sans-repos/necromancer",
    "nom": "Nécromancien",
    "categorie": "heros",
    "cout": 40,
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
      "nom": "Sorcier (Nécromancie des Morts sans repos)",
      "resume": "Lance des sorts de la liste de nécromancie propre aux Morts sans repos (différente de celle du livre de règles) ; la liche en connaît deux tirés au hasard."
     },
     {
      "nom": "Apprenti",
      "resume": "Commence avec l'un des sorts de la liche et ne peut connaître que des sorts qu'elle connaît, tant qu'elle vit."
     },
     {
      "nom": "Homme à tout faire",
      "resume": "Pour chercher des objets rares, lance 3D6 et garde les deux meilleurs."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Morts sans repos)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "morts-sans-repos/grave-guards",
    "nom": "Gardes des tombes",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 3,
    "xp": 6,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Lames des revenants",
      "resume": "Au corps à corps, un 6 pour toucher blesse automatiquement ; on jette quand même pour blesser afin de déterminer un critique."
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
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Pas d'affaires",
      "resume": "Ne peut pas chercher d'objets rares."
     }
    ],
    "competences": [
     "Combat",
     "Force"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "gardeDesTombes",
    "sansProgression": false
   },
   {
    "id": "morts-sans-repos/scarecrows",
    "nom": "Épouvantails",
    "categorie": "hdm",
    "cout": 65,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "0",
     "F": "3",
     "E": "3(6)",
     "PV": "1",
     "I": "3",
     "A": "2",
     "Cd": "10"
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     },
     {
      "nom": "Sans substance",
      "resume": "Compte comme E6 contre les tirs et projectiles magiques et ignore les critiques de tir."
     },
     {
      "nom": "Très inflammable",
      "resume": "Prend feu sur 3+ au lieu de 4+ et subit le double de dégâts des attaques enflammées."
     },
     {
      "nom": "Construction",
      "resume": "Peut relancer ses jets sur le tableau des blessures, sauf contre les blessures dues au feu."
     },
     {
      "nom": "Construction animée",
      "resume": "Contrôlé par la liche ou le nécromancien (un chacun) ; absent si son maître l'est, et mis hors de combat si ce maître perd un PV et rate un test de Commandement."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "morts-sans-repos/wights",
    "nom": "Revenants",
    "categorie": "hdm",
    "cout": 30,
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
     "I": "2",
     "A": "1",
     "Cd": "6"
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Promotion du revenant",
      "resume": "Promu héros, il ne peut pas chercher d'objets rares, doit choisir Combat et Force et gagne Lames des revenants."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "gardeDesTombes",
    "sansProgression": false
   },
   {
    "id": "morts-sans-repos/skeletons",
    "nom": "Squelettes",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 8,
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "morts-sans-repos/zombies",
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · The Restless Dead"
 },
 {
  "id": "nains-du-chaos",
  "nom": "Nains du Chaos",
  "tresor": 500,
  "effectifMax": 14,
  "regles": [
   {
    "nom": "Esclavagistes",
    "resume": "Les esclaves capturés ne sont jamais libérés : chacun est sacrifié (+1 XP à l'apprenti sorcier) ou mis au travail (+1 fragment de malepierre après la partie, puis sur 1 au D6 l'esclave s'évade avec son équipement, sinon il meurt et la bande garde son équipement)."
   },
   {
    "nom": "Peu nombreux",
    "resume": "Recruter de nouveaux nains du Chaos coûte 1,5 fois l'expérience normale (arrondi au supérieur) ; ne s'applique pas aux hobgobelins."
   },
   {
    "nom": "Serviteurs asservis",
    "resume": "La bande doit compter au moins 4 hobgobelins ; si elle passe en dessous, elle ne peut recruter personne d'autre tant qu'elle n'en a pas de nouveau 4."
   }
  ],
  "guerriers": [
   {
    "id": "nains-du-chaos/apprentice-sorcerer",
    "nom": "Apprenti sorcier",
    "categorie": "heros",
    "cout": 85,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "3",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Sorcier (Magie des Nains du Chaos)",
      "resume": "L'apprenti sorcier est un sorcier qui connaît un sort tiré au hasard dans la liste des Nains du Chaos ; il ne peut pas lancer de sorts s'il porte une armure."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Spéciales (Nains du Chaos)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Arme d'obsidienne",
        "cout": 30
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
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   },
   {
    "id": "nains-du-chaos/bull-centaur",
    "nom": "Centaure-taureau",
    "categorie": "heros",
    "cout": 75,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "7",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "2",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Nains du Chaos)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Arme d'obsidienne",
        "cout": 30
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
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "nains-du-chaos/chaos-dwarf-champion",
    "nom": "Champions nains du Chaos",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "3",
     "CC": "5",
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
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Spéciales (Nains du Chaos)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Arme d'obsidienne",
        "cout": 30
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
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   },
   {
    "id": "nains-du-chaos/hobgoblin",
    "nom": "Hobgobelins",
    "categorie": "hdm",
    "cout": 15,
    "min": 4,
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Maigrelet",
      "resume": "Sur un résultat de 1 à 3 au jet de blessure grave, le hobgobelin abandonne la bande."
     },
     {
      "nom": "Tout le monde s'en fiche",
      "resume": "Un hobgobelin compte pour une demi-figurine pour les tests de déroute et ne peut jamais devenir un héros."
     }
    ],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Dagues empoisonnées hobgobelines",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "nains-du-chaos/chaos-dwarf-warrior",
    "nom": "Guerriers nains du Chaos",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 6,
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
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Arme d'obsidienne",
        "cout": 30
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
        "nom": "Paire de pistolets",
        "cout": 30
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   },
   {
    "id": "nains-du-chaos/blunderbuss-chaos-dwarf",
    "nom": "Nains du Chaos à tromblon",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 3,
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
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Tromblon nain du Chaos",
        "cout": 40
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
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       }
      ]
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Sons of Hashut"
 },
 {
  "id": "nains-noirs",
  "nom": "Nains noirs",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Durs à cuire",
    "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
   },
   {
    "nom": "Tête dure",
    "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
   },
   {
    "nom": "Habitués à l'armure",
    "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
   }
  ],
  "guerriers": [
   {
    "id": "nains-noirs/sorcerer",
    "nom": "Sorcier",
    "categorie": "heros",
    "cout": 85,
    "min": 1,
    "max": 1,
    "xp": 20,
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
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Sorcier (Rituels de Hashut)",
      "resume": "Le sorcier lance des rituels de Hashut ; il commence avec le Rituel sacrificiel et un rituel de Hashut tiré au hasard."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Spéciales (Nains noirs)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure mécanique",
        "cout": 175
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Machine du Chaos",
        "cout": 125
       }
      ]
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   },
   {
    "id": "nains-noirs/bull-centaur",
    "nom": "Centaure-taureau",
    "categorie": "heros",
    "cout": 100,
    "min": 0,
    "max": 1,
    "xp": 10,
    "profil": {
     "M": "8",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "2",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     }
    ],
    "competences": [
     "Combat",
     "Force"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Machine du Chaos",
        "cout": 125
       }
      ]
     }
    ],
    "race": "centaureTaureau",
    "sansProgression": false
   },
   {
    "id": "nains-noirs/gaoler",
    "nom": "Geôlier",
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
      "nom": "Sinistre réputation",
      "resume": "Le geôlier provoque la peur chez les humains."
     },
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Spéciales (Nains noirs)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fouet d'acier",
        "cout": 10
       },
       {
        "nom": "Attrape-homme",
        "cout": 25
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Machine du Chaos",
        "cout": 125
       }
      ]
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   },
   {
    "id": "nains-noirs/chaos-dwarf",
    "nom": "Nain du Chaos",
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
    "regles": [
     {
      "nom": "Durs à cuire",
      "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
     },
     {
      "nom": "Tête dure",
      "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
     },
     {
      "nom": "Habitués à l'armure",
      "resume": "Les Nains ne subissent jamais de pénalité de mouvement due à leur armure."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
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
        "nom": "Pistolet",
        "cout": 15
       },
       {
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "nainDuChaos",
    "sansProgression": false
   },
   {
    "id": "nains-noirs/informer",
    "nom": "Informateur",
    "categorie": "hdm",
    "cout": 15,
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
      "nom": "Corvée",
      "resume": "L'informateur ne peut jamais devenir un héros : relancez le résultat « Le gars a du talent »."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Black Dwarfs"
 },
 {
  "id": "necrarques",
  "nom": "Nécrarques, voleurs d'âmes",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Mort du chef",
    "resume": "Si le Nécrarque meurt, le Thrall prend la tête de la bande et tire un sort ; on ne peut pas recruter de nouveau Nécrarque, mais un Acolyte peut devenir Thrall. Si les deux disparaissent ensemble, la bande est dissoute."
   }
  ],
  "guerriers": [
   {
    "id": "necrarques/necrarch-vampire",
    "nom": "Vampire nécrarque",
    "categorie": "heros",
    "cout": 110,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "2",
     "I": "6",
     "A": "1",
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
      "nom": "Insensible au poison",
      "resume": "Aucun poison n'a d'effet sur cette figurine."
     },
     {
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Sorcier (Parchemins de Nagash)",
      "resume": "Lanceur de sorts : commence avec un sort tiré au hasard sur les Parchemins de Nagash."
     }
    ],
    "competences": [
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Nécrarques, voleurs d'âmes)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Bâton de damnation",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Relique impie",
        "cout": 15
       },
       {
        "nom": "Livre damné",
        "cout": 48
       }
      ]
     }
    ],
    "race": "necrarque",
    "sansProgression": false
   },
   {
    "id": "necrarques/thrall",
    "nom": "Thrall",
    "categorie": "heros",
    "cout": 60,
    "min": 0,
    "max": 1,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "3",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "7"
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     }
    ],
    "competences": [
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Nécrarques, voleurs d'âmes)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Relique impie",
        "cout": 15
       },
       {
        "nom": "Livre damné",
        "cout": 48
       }
      ]
     }
    ],
    "race": "vampire",
    "sansProgression": false
   },
   {
    "id": "necrarques/acolyte",
    "nom": "Acolyte",
    "categorie": "heros",
    "cout": 35,
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
      "nom": "Vassal",
      "resume": "Si le Nécrarque voit l'Acolyte et que celui-ci n'est pas au corps à corps, il peut lancer ses sorts depuis la position de l'Acolyte ; sur un double 1, l'Acolyte fait un jet de blessure à +1."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "necrarques/abomination",
    "nom": "Abomination",
    "categorie": "hdm",
    "cout": 190,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "5",
     "PV": "3",
     "I": "2",
     "A": "3",
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Animé par la malepierre",
      "resume": "Il faut un fragment de malepierre pour l'animer ; celui qui le met hors de combat récupère ce fragment, et un nouveau fragment est nécessaire pour le réanimer."
     },
     {
      "nom": "Pièces de rechange",
      "resume": "Les résultats 1 et 2 au jet de blessure après la bataille sont ignorés : il ne peut pas être détruit."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "necrarques/skeletal-warriors",
    "nom": "Guerriers squelettes",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 5,
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
    ],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "necrarques/waifs",
    "nom": "Orphelins",
    "categorie": "hdm",
    "cout": 20,
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
        "nom": "Dague",
        "cout": 2
       },
       {
        "nom": "Dague gratuite",
        "cout": 0
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "necrarques/zombies",
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
      "nom": "Insensible à la douleur",
      "resume": "Un résultat « Sonné » est traité comme « À terre »."
     },
     {
      "nom": "Lent",
      "resume": "Ne peut pas courir, mais peut charger normalement."
     },
     {
      "nom": "Sans cervelle",
      "resume": "Créature dépourvue d'intelligence : ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Necrarchs, the Soul Stealers"
 },
 {
  "id": "norses",
  "nom": "Norses",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Marins",
    "resume": "Les Norses gagnent +2 en Force lorsqu'ils rament dans une embarcation (ne sert que dans le scénario « Le manuscrit de Sigmar »)."
   }
  ],
  "guerriers": [
   {
    "id": "norses/jarl",
    "nom": "Jarl",
    "categorie": "heros",
    "cout": 70,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Norses)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "norses/wulfen",
    "nom": "Wulfen",
    "categorie": "heros",
    "cout": 90,
    "min": 0,
    "max": 1,
    "xp": 11,
    "profil": {
     "M": "6",
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
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Bestial",
      "resume": "Le Wulfen est insensible à la psychologie, ne peut jamais devenir chef de bande, et n'utilise ni arme ni armure sans subir de pénalité pour combattre à mains nues."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Norses)"
    ],
    "equipement": [],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "norses/berserker",
    "nom": "Berserkers",
    "categorie": "heros",
    "cout": 50,
    "min": 0,
    "max": 2,
    "xp": 11,
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
    "regles": [
     {
      "nom": "Frénésie",
      "resume": "Charge toujours l'ennemi le plus proche à portée et double ses Attaques au corps à corps. Immunisée à la psychologie tant qu'elle n'est pas mise à terre ou sonnée."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Norses)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "norses/bondsman",
    "nom": "Hommes liges",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "2",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Norses)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "norses/marauder",
    "nom": "Maraudeurs",
    "categorie": "hdm",
    "cout": 25,
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
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Haches de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "norses/hunter",
    "nom": "Chasseurs",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Javelots",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "norses/wolf",
    "nom": "Loups",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "9",
     "CC": "3",
     "CT": "0",
     "F": "3",
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
     },
     {
      "nom": "Chef de meute",
      "resume": "Les loups ne peuvent être recrutés et utilisés que si la bande compte un Wulfen ; si celui-ci meurt ou est indisponible, ils restent inutilisables jusqu'à son remplacement."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Norse Explorers"
 },
 {
  "id": "nuln",
  "nom": "École d'Artillerie de Nuln",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Soin impeccable",
    "resume": "La bande achète toujours les armes à poudre noire de sa liste de départ à prix réduit, et gagne +2 aux jets de rareté pour trouver des armes à poudre noire."
   },
   {
    "nom": "Bon usage",
    "resume": "Avec la règle optionnelle des enrayements, un résultat de 1 peut être relancé : sur 3+, l'arme n'explose pas (le tir rate quand même)."
   },
   {
    "nom": "Fierté mal placée !",
    "resume": "Les membres de la bande n'utilisent jamais d'armes de tir autres qu'à poudre noire (les francs-tireurs et personnages spéciaux ne sont pas concernés)."
   }
  ],
  "guerriers": [
   {
    "id": "nuln/senior-gunnery-officer",
    "nom": "Officier artilleur principal",
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
      "nom": "Chasseur",
      "resume": "Possède la compétence de Tir « Chasseur » : peut tirer à chaque tour avec une arquebuse ou un long fusil d'Hochland (rechargement rapide)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel à deux canons",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets de duel à deux canons",
        "cout": 65
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "nuln/instructor",
    "nom": "Instructeur",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 12,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "4",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Armurier expert",
      "resume": "Tant que l'Ingénieur reste dans la bande, la portée des armes de tir naines augmente de 3 ps pour les pistolets et de 6 ps pour les arbalètes et arquebuses."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel à deux canons",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets de duel à deux canons",
        "cout": 65
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       },
       {
        "nom": "Pistolet à répétition",
        "cout": 25
       },
       {
        "nom": "Tromblon",
        "cout": 20
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 100
       },
       {
        "nom": "Arquebuse à répétition",
        "cout": 50
       },
       {
        "nom": "Mortier portatif",
        "cout": 70
       },
       {
        "nom": "Pigeons explosifs",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "nuln/senior-student",
    "nom": "Élève de dernière année",
    "categorie": "heros",
    "cout": 45,
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
     "Combat",
     "Tir",
     "Force",
     "Vitesse"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel à deux canons",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets de duel à deux canons",
        "cout": 65
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "nuln/underclassmen",
    "nom": "Élèves de première année",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
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
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel à deux canons",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets de duel à deux canons",
        "cout": 65
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "nuln/pistoliers",
    "nom": "Pistoliers",
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
    "regles": [
     {
      "nom": "Tireur hors pair",
      "resume": "Au premier round d'un corps à corps, peut relancer les jets pour toucher ratés avec un pistolet."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel à deux canons",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets de duel à deux canons",
        "cout": 65
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "nuln/marksmen",
    "nom": "Tireurs d'élite",
    "categorie": "hdm",
    "cout": 30,
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
    "regles": [
     {
      "nom": "Rechargement rapide",
      "resume": "Entraînés à recharger vite sous le feu, ces tireurs ont la compétence Chasseur ; promus héros, la reprendre n'apporte rien de plus."
     },
     {
      "nom": "Chasseur",
      "resume": "Possède la compétence de Tir « Chasseur » : peut tirer à chaque tour avec une arquebuse ou un long fusil d'Hochland (rechargement rapide)."
     }
    ],
    "competences": [],
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet à répétition",
        "cout": 25
       },
       {
        "nom": "Tromblon",
        "cout": 20
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       },
       {
        "nom": "Long fusil d'Hochland",
        "cout": 100
       },
       {
        "nom": "Arquebuse à répétition",
        "cout": 50
       },
       {
        "nom": "Mortier portatif",
        "cout": 70
       },
       {
        "nom": "Pigeons explosifs",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "nuln/sons-of-the-guns",
    "nom": "Fils du canon",
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
        "nom": "Masse/Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pistolet",
        "cout": 10
       },
       {
        "nom": "Paire de pistolets",
        "cout": 20
       },
       {
        "nom": "Pistolet à deux canons",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets à deux canons",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel",
        "cout": 20
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 35
       },
       {
        "nom": "Pistolet de duel à deux canons",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets de duel à deux canons",
        "cout": 65
       },
       {
        "nom": "Arquebuse",
        "cout": 25
       },
       {
        "nom": "Arquebuse à deux canons",
        "cout": 45
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Poudre noire supérieure",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Gunnery School of Nuln"
 },
 {
  "id": "ogres-chasseurs",
  "nom": "Troupe de chasse ogre",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Peaux-vertes",
    "resume": "Les gnoblars comptent comme des peaux-vertes mais ne subissent pas l'Animosité : ils se chamaillent à la place."
   },
   {
    "nom": "Chamailleries",
    "resume": "Chaque gnoblar homme de main hors combat lance un D6 en début de tour et en fin de phase de ralliement : sur 1, il insulte le gnoblar le plus proche et ne peut ni bouger, ni tirer, ni lancer de sort ce tour."
   },
   {
    "nom": "Folie des grandeurs",
    "resume": "Si le Chasseur ogre meurt, le gnoblar au meilleur Commandement (puis à la plus forte expérience) prend la tête jusqu'au recrutement d'un nouveau Chasseur ogre."
   },
   {
    "nom": "Compagnie peu recommandable",
    "resume": "Peu de mercenaires acceptent de servir des Orques : seuls les Gladiateurs, Gardes du corps ogres et Sorciers mercenaires peuvent être recrutés."
   }
  ],
  "guerriers": [
   {
    "id": "ogres-chasseurs/ogre-hunter",
    "nom": "Chasseur ogre",
    "categorie": "heros",
    "cout": 145,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "3",
     "I": "3",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Énooorme",
      "resume": "Cause la peur, est une grande cible, ignore les tests de seul contre tous et ne peut porter ni ithilmar, ni gromril, ni armure lourde ; il compte pour 20 + son expérience dans la valeur de bande."
     },
     {
      "nom": "Lent d'esprit",
      "resume": "L'Ogre doit accumuler deux fois plus d'expérience que les autres pour chaque progression."
     },
     {
      "nom": "Pas de couteau de table",
      "resume": "Sans arme, il combat à mains nues sans le malus de -1 en Force (l'ennemi garde son +1 de sauvegarde), avec une attaque par point d'Attaque ; il ne peut pas les combiner avec une arme."
     },
     {
      "nom": "Paresseux",
      "resume": "N'ajoute aucun dé d'exploration ni de recherche, sauf si aucun héros gnoblar ne peut le faire."
     },
     {
      "nom": "Figure centrale",
      "resume": "S'il est mis hors de combat, la bande atteint automatiquement son seuil de déroute."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Troupe de chasse ogre)"
    ],
    "equipement": [
     {
      "categorie": "Armes de corps à corps",
      "objets": [
       {
        "nom": "Couperet (hache)",
        "cout": 5
       },
       {
        "nom": "Gourdin ogre",
        "cout": 10
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète à harpon",
        "cout": 50
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
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "ogre",
    "sansProgression": false
   },
   {
    "id": "ogres-chasseurs/trapper",
    "nom": "Trappeur",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 3,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "4",
     "F": "2",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Pisteur vétéran",
      "resume": "Choisit à l'embauche une compétence parmi Infiltration (un seul trappeur), Poseur de pièges, Lanceur de filets ou Fin limier."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Troupe de chasse ogre)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Couperet (hache)",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bric-à-brac pointu gratuit",
        "cout": 0
       },
       {
        "nom": "Bric-à-brac pointu",
        "cout": 3
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Monture cochon",
        "cout": 50
       }
      ]
     }
    ],
    "race": "gnoblar",
    "sansProgression": false
   },
   {
    "id": "ogres-chasseurs/sabre-baiter",
    "nom": "Appât à sabre-dents",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "2",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Appât",
      "resume": "Une fois par tour, quand il est chargé et n'est ni à terre, ni sonné, ni au combat, il peut reculer de D6 ps (2D6 face à un sabre-dents) droit loin du chargeur."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse",
     "Spéciales (Troupe de chasse ogre)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Couperet (hache)",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bric-à-brac pointu gratuit",
        "cout": 0
       },
       {
        "nom": "Bric-à-brac pointu",
        "cout": 3
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Monture cochon",
        "cout": 50
       }
      ]
     }
    ],
    "race": "gnoblar",
    "sansProgression": false
   },
   {
    "id": "ogres-chasseurs/sabretusk-cubs",
    "nom": "Jeunes sabre-dents",
    "categorie": "hdm",
    "cout": 50,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Indompté",
      "resume": "Ne se chamaille pas ; hors combat, sur un 1 au D6 chaque tour, il charge de 3D6 ps la figurine non sabre-dents la plus proche, amie ou ennemie (s'écartant ensuite d'1 ps d'un allié)."
     },
     {
      "nom": "Charge sauvage",
      "resume": "Les Loups funestes ont 2 Attaques au lieu d'1 lors du tour où ils chargent."
     },
     {
      "nom": "Cuir épais",
      "resume": "Sauvegarde d'armure naturelle de 5+."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "ogres-chasseurs/flingers",
    "nom": "Lanceurs gnoblars",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 7,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "2",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Chamailleries",
      "resume": "Chaque gnoblar homme de main hors combat lance un D6 en début de tour et en fin de phase de ralliement : sur 1, il insulte le gnoblar le plus proche et ne peut ni bouger, ni tirer, ni lancer de sort ce tour."
     },
     {
      "nom": "Lanceur de ferraille",
      "resume": "Lance 3 projectiles de bric-à-brac pointu par tour au lieu d'un ; ne se cumule pas avec Lanceur de couteaux et ne s'applique pas aux couteaux de lancer."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Couperet (hache)",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bric-à-brac pointu gratuit",
        "cout": 0
       },
       {
        "nom": "Bric-à-brac pointu",
        "cout": 3
       },
       {
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       }
      ]
     }
    ],
    "race": "gnoblar",
    "sansProgression": false
   },
   {
    "id": "ogres-chasseurs/gnoblar-fighters",
    "nom": "Combattants gnoblars",
    "categorie": "hdm",
    "cout": 15,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "2",
     "E": "3",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Chamailleries",
      "resume": "Chaque gnoblar homme de main hors combat lance un D6 en début de tour et en fin de phase de ralliement : sur 1, il insulte le gnoblar le plus proche et ne peut ni bouger, ni tirer, ni lancer de sort ce tour."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Couperet (hache)",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Bric-à-brac pointu gratuit",
        "cout": 0
       },
       {
        "nom": "Bric-à-brac pointu",
        "cout": 3
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       }
      ]
     }
    ],
    "race": "gnoblar",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Ogre Hunting Party"
 },
 {
  "id": "ordre-jument",
  "nom": "Ordre de la Jument",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Vertu chevaleresque",
    "resume": "Le chevalier ne panique jamais et ne fuit jamais un combat : il n'a pas à faire de test « Seul contre tous »."
   },
   {
    "nom": "Francs-tireurs mercenaires",
    "resume": "La bande peut engager les mêmes francs-tireurs qu'une bande de mercenaires."
   },
   {
    "nom": "Cheval et cavalier",
    "resume": "À leur recrutement, le Parangon et le Galant peuvent chacun acheter un cheval ou un cheval de guerre à moitié prix."
   }
  ],
  "guerriers": [
   {
    "id": "ordre-jument/paragon",
    "nom": "Parangon",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
     },
     {
      "nom": "Vertu chevaleresque",
      "resume": "Le chevalier ne panique jamais et ne fuit jamais un combat : il n'a pas à faire de test « Seul contre tous »."
     },
     {
      "nom": "Vœu de pauvreté",
      "resume": "Le chevalier de la quête ne peut pas prendre de lance de cavalerie."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Barde",
        "cout": 30
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "ordre-jument/dame-of-the-mare",
    "nom": "Dame de la Jument",
    "categorie": "heros",
    "cout": 55,
    "min": 1,
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
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Armure ancienne",
      "resume": "Elle porte une armure inamovible (ni échangée ni volée) qui ne gêne pas les prières et donne une sauvegarde de 5+ non modifiable, sans effet contre les attaques magiques."
     },
     {
      "nom": "Prières de la Jument",
      "resume": "Elle utilise la liste des Bénédictions de la Jument et commence avec une prière tirée au hasard."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "ordre-jument/gallant",
    "nom": "Galant",
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
    "regles": [
     {
      "nom": "Vertu chevaleresque",
      "resume": "Le chevalier ne panique jamais et ne fuit jamais un combat : il n'a pas à faire de test « Seul contre tous »."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Barde",
        "cout": 30
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "ordre-jument/esquiresses",
    "nom": "Écuyères",
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
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Cheval",
        "cout": 40
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "ordre-jument/companion-filly",
    "nom": "Pouliche compagne",
    "categorie": "hdm",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "8",
     "CC": "4",
     "CT": "0",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "2",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Sabots",
      "resume": "La pouliche combat sans arme sans subir de pénalité."
     },
     {
      "nom": "Caparaçon spectral",
      "resume": "Sauvegarde de 5+ non modifiable, sans effet contre la magie ; la pouliche ne peut prendre aucun autre équipement."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "ordre-jument/redeemed-knights",
    "nom": "Chevaliers rachetés",
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
    "regles": [
     {
      "nom": "Vertu chevaleresque",
      "resume": "Le chevalier ne panique jamais et ne fuit jamais un combat : il n'a pas à faire de test « Seul contre tous »."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Barde",
        "cout": 30
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "ordre-jument/pilgrims",
    "nom": "Pèlerins",
    "categorie": "hdm",
    "cout": 25,
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Haine",
      "resume": "Lors du premier tour de chaque corps à corps contre un ennemi qu'elle hait, la figurine peut relancer tous ses jets pour toucher ratés."
     },
     {
      "nom": "Paysans",
      "resume": "Les pèlerins ne peuvent jamais devenir des héros : relancez le résultat « Le gars a du talent »."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Morgenstern",
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "ordre-jument/bowmen",
    "nom": "Archers",
    "categorie": "hdm",
    "cout": 20,
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
     "Cd": "6"
    },
    "regles": [],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Order of the Mare"
 },
 {
  "id": "orques-noirs",
  "nom": "Orques noirs",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Laisser le boulot aux larbins",
    "resume": "Les Orques noirs combattent à pied et ne montent jamais : seuls les Orques ordinaires peuvent chevaucher un sanglier ou une monture similaire."
   },
   {
    "nom": "Le boss est mort !",
    "resume": "Si le chef meurt, un Orque noir prend la tête de la bande en priorité, quelle que soit son expérience, et gagne « Oi Behave! »."
   },
   {
    "nom": "Animosité",
    "resume": "Au début du tour, lancez 1D6 pour chaque homme de main orque ou gobelin hors corps à corps. Sur 1, il se querelle : il peut charger ou tirer sur un allié orque ou gobelin proche, rester sur place ou s'élancer vers l'ennemi, selon un second jet."
   }
  ],
  "guerriers": [
   {
    "id": "orques-noirs/black-orc-boss",
    "nom": "Chef orque noir",
    "categorie": "heros",
    "cout": 90,
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
     },
     {
      "nom": "Orque noir",
      "resume": "Il bénéficie d'une sauvegarde d'armure naturelle de 6+, cumulable avec son équipement."
     },
     {
      "nom": "Tenez-vous bien !",
      "resume": "Le chef peut gifler un homme de main qui rate son test d'animosité : la Force de la gifle s'ajoute au jet d'animosité."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Orques noirs)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Kikoup' (morgenstern)",
        "cout": 10
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
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "orque",
    "sansProgression": false
   },
   {
    "id": "orques-noirs/black-orc",
    "nom": "Orque noir",
    "categorie": "heros",
    "cout": 60,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Orque noir",
      "resume": "Il bénéficie d'une sauvegarde d'armure naturelle de 6+, cumulable avec son équipement."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Orques noirs)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Kikoup' (morgenstern)",
        "cout": 10
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
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
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
     }
    ],
    "race": "orque",
    "sansProgression": false
   },
   {
    "id": "orques-noirs/youngun",
    "nom": "Jeunot",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Sang d'Orque noir",
      "resume": "Un seul Jeunot peut devenir un Jeunot orque noir pour 10 co, ce qui lui ouvre la compétence « Guerrier aguerri »."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Spéciales (Orques noirs)"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Kikoup' (morgenstern)",
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "orque",
    "sansProgression": false
   },
   {
    "id": "orques-noirs/troll",
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
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
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
      "nom": "Toujours affamé",
      "resume": "Le Troll coûte 15 co d'entretien après chaque partie. À défaut, le Boss peut lui sacrifier deux Gobelins ou Squigs ; sinon le Troll s'en va chercher pitance ailleurs."
     },
     {
      "nom": "Vomissure",
      "resume": "Au lieu de ses attaques, le Troll peut vomir sur un adversaire au contact : une seule attaque qui touche automatiquement à Force 5, sans sauvegarde d'armure."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "orques-noirs/orc-nutta",
    "nom": "Cinglé orque",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 4,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "2",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "2",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Instables",
      "resume": "Les Cinglés ne sont pas soumis à l'animosité."
     },
     {
      "nom": "Fêlés",
      "resume": "Ils réussissent automatiquement tous les tests basés sur le Commandement, mais ne peuvent jamais apprendre de compétences d'Érudition."
     },
     {
      "nom": "Sauvages",
      "resume": "Ils doivent courir ou charger vers l'ennemi visible le plus proche et ont une attaque supplémentaire au corps à corps ; ils ne portent ni armure ni arme de tir et ne peuvent ni mener la bande ni prêter leur Cd pour la déroute."
     }
    ],
    "competences": [],
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Kikoup' (morgenstern)",
        "cout": 10
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
     }
    ],
    "race": "orque",
    "sansProgression": false
   },
   {
    "id": "orques-noirs/orc-boy",
    "nom": "Boy orque",
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
     "Cd": "6"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Kikoup' (morgenstern)",
        "cout": 10
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
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "orque",
    "sansProgression": false
   },
   {
    "id": "orques-noirs/orc-shoota",
    "nom": "Tireur orque",
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
     "Cd": "6"
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
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Kikoup' (morgenstern)",
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
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "orque",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Black Orcs"
 },
 {
  "id": "pillards-lustrie",
  "nom": "Pillards de Lustrie",
  "tresor": 500,
  "effectifMax": 10,
  "regles": [
   {
    "nom": "Chef désigné",
    "resume": "La bande doit compter au moins un héros ; n'importe lequel peut être désigné comme chef."
   },
   {
    "nom": "Héros uniques",
    "resume": "Chaque type de héros ne peut être recruté qu'une seule fois pendant toute l'existence de la bande."
   },
   {
    "nom": "Promotions",
    "resume": "Un héros perdu n'est pas remplacé : un aspirant est promu à sa place, récupère son équipement, choisit deux listes de compétences et fait aussitôt un jet de progression de héros."
   }
  ],
  "guerriers": [
   {
    "id": "pillards-lustrie/conqueror",
    "nom": "Conquérant",
    "categorie": "heros",
    "cout": 150,
    "min": 0,
    "max": 1,
    "xp": 24,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "4",
     "PV": "2",
     "I": "3",
     "A": "2",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Survivant",
      "resume": "Ne peut être mis hors de combat que s'il est déjà à terre ou sonné (sinon il est sonné) ; son premier résultat « Mort » aux blessures graves devient « Blessures multiples »."
     }
    ],
    "competences": [
     "Combat",
     "Force"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Miséricorde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 15
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Teinte cramoisie",
        "cout": 35
       },
       {
        "nom": "Venin noir",
        "cout": 30
       },
       {
        "nom": "Filet",
        "cout": 5
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Chien de guerre",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pillards-lustrie/trapmaster",
    "nom": "Maître piégeur",
    "categorie": "heros",
    "cout": 140,
    "min": 0,
    "max": 1,
    "xp": 17,
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
      "nom": "Œil de lynx",
      "resume": "Ne subit pas de malus de tir à longue portée."
     },
     {
      "nom": "Pièges",
      "resume": "Pendant la phase de tir, pose un vrai et un faux pion piège à 3 ps de lui ; une figurine qui passe à 2 ps révèle le pion, et un vrai piège inflige D3 touches de F5 sans critique."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Miséricorde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 15
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Teinte cramoisie",
        "cout": 35
       },
       {
        "nom": "Venin noir",
        "cout": 30
       },
       {
        "nom": "Filet",
        "cout": 5
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Chien de guerre",
        "cout": 20
       },
       {
        "nom": "Piège",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pillards-lustrie/saurus-slayer",
    "nom": "Tueur de saurus",
    "categorie": "heros",
    "cout": 135,
    "min": 0,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Duelliste",
      "resume": "Au premier tour d'un corps à corps contre un seul ennemi, relance ses jets pour toucher ratés, qu'il ait chargé ou non."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Miséricorde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 15
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 10
       },
       {
        "nom": "Coiffe sacrée de slann (trophée)",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Teinte cramoisie",
        "cout": 35
       },
       {
        "nom": "Venin noir",
        "cout": 30
       },
       {
        "nom": "Filet",
        "cout": 5
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Chien de guerre",
        "cout": 20
       },
       {
        "nom": "Cape en peau d'homme-lézard",
        "cout": 10
       },
       {
        "nom": "Masque-crâne",
        "cout": 15
       },
       {
        "nom": "Épée d'homme-lézard (amélioration)",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pillards-lustrie/beastmaster",
    "nom": "Maître des bêtes",
    "categorie": "heros",
    "cout": 90,
    "min": 0,
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
      "nom": "Bêtes de guerre",
      "resume": "Peut adjoindre jusqu'à 2 bêtes de guerre à la bande, qui peuvent utiliser son Commandement à 6 ps."
     }
    ],
    "competences": [
     "Tir",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Miséricorde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 15
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Teinte cramoisie",
        "cout": 35
       },
       {
        "nom": "Venin noir",
        "cout": 30
       },
       {
        "nom": "Filet",
        "cout": 5
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Chien de guerre",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pillards-lustrie/jungle-shadow",
    "nom": "Ombre de la jungle",
    "categorie": "heros",
    "cout": 90,
    "min": 0,
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
      "nom": "Chasseur silencieux",
      "resume": "Est caché tant qu'il touche un décor d'au moins 1 ps de haut ; tirer ne le révèle pas, lancer un sort si."
     },
     {
      "nom": "Attaque surprise",
      "resume": "Relance ses jets pour toucher ratés contre un ennemi attaqué par l'arrière."
     },
     {
      "nom": "Marcheur de canopée",
      "resume": "Réussit automatiquement ses tests d'escalade, de saut et de chute."
     }
    ],
    "competences": [
     "Tir",
     "Érudition",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Miséricorde",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Lance de cavalerie",
        "cout": 40
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Javelots",
        "cout": 10
       },
       {
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Sarbacane",
        "cout": 15
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Rondache",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Corde et grappin",
        "cout": 5
       },
       {
        "nom": "Teinte cramoisie",
        "cout": 35
       },
       {
        "nom": "Venin noir",
        "cout": 30
       },
       {
        "nom": "Filet",
        "cout": 5
       },
       {
        "nom": "Cheval de guerre",
        "cout": 80
       },
       {
        "nom": "Chien de guerre",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pillards-lustrie/barbary-monkey",
    "nom": "Singe de Barbarie",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "4",
     "CT": "0",
     "F": "3",
     "E": "3",
     "PV": "1",
     "I": "5",
     "A": "2",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Bête de guerre",
      "resume": "Animal du maître des bêtes : utilise son Commandement à 6 ps, ne gagne jamais d'expérience et meurt sur 1-2 s'il est mis hors de combat."
     },
     {
      "nom": "Singe agile",
      "resume": "Escalade sans test d'Initiative, relance les tests de charge plongeante ratés, entre dans les bâtiments et a une sauvegarde invulnérable de 5+."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "pillards-lustrie/prospects",
    "nom": "Aspirants",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
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
      "nom": "Aspirant",
      "resume": "Relance les résultats « Ce gars a du talent » ; une fois promu, il cesse de compter comme aspirant et libère une place."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 10
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pillards-lustrie/tilean-hunting-hawk",
    "nom": "Faucon de chasse tiléen",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "12",
     "CC": "4",
     "CT": "0",
     "F": "4",
     "E": "3",
     "PV": "-",
     "I": "5",
     "A": "1",
     "Cd": "-"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Bête de guerre",
      "resume": "Animal du maître des bêtes : utilise son Commandement à 6 ps, ne gagne jamais d'expérience et meurt sur 1-2 s'il est mis hors de combat."
     },
     {
      "nom": "Faucon de chasse",
      "resume": "Attaque au corps à corps un ennemi jusqu'à 12 ps puis revient aussitôt ; il ne peut pas être ciblé seul et n'attaque pas si le maître est engagé."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "pillards-lustrie/estalian-warhound",
    "nom": "Chien de guerre estalien",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 2,
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
     },
     {
      "nom": "Bête de guerre",
      "resume": "Animal du maître des bêtes : utilise son Commandement à 6 ps, ne gagne jamais d'expérience et meurt sur 1-2 s'il est mis hors de combat."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Lustrian Reavers"
 },
 {
  "id": "pilleurs-arabeens",
  "nom": "Pilleurs de tombes arabéens",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Haine des morts-vivants",
    "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
   }
  ],
  "guerriers": [
   {
    "id": "pilleurs-arabeens/sheikh",
    "nom": "Cheikh",
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
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Pilleurs de tombes arabéens)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Fléau",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Tufenk",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-arabeens/champion",
    "nom": "Champion",
    "categorie": "heros",
    "cout": 40,
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
    "regles": [
     {
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Pilleurs de tombes arabéens)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Fléau",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Tufenk",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-arabeens/mystic",
    "nom": "Mystique",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 8,
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
      "nom": "Haine des morts-vivants",
      "resume": "Ce guerrier hait les vampires, les nécromanciens et tous les morts-vivants."
     },
     {
      "nom": "Sorcier (Magie élémentaire)",
      "resume": "Le mystique est un sorcier qui utilise la Magie élémentaire ; il commence avec un sort de cette liste tiré au hasard."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Pilleurs de tombes arabéens)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Fléau",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Tufenk",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-arabeens/bedouin",
    "nom": "Bédouin",
    "categorie": "hdm",
    "cout": 35,
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
      "nom": "Marchand du désert",
      "resume": "La bande obtient +1 à ses jets de recherche d'objets rares au comptoir ; le bonus ne se cumule pas avec plusieurs Bédouins."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Fléau",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Tufenk",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-arabeens/nomad-warrior",
    "nom": "Guerrier nomade",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Fléau",
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
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Tufenk",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-arabeens/slave",
    "nom": "Esclave",
    "categorie": "hdm",
    "cout": 15,
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
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Vie d'esclave",
      "resume": "Si un groupe d'esclaves obtient le résultat « Le gars a du talent », le chef exécute l'esclave, qui est rayé de la feuille ; le reste du groupe relance sa progression."
     }
    ],
    "competences": [],
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Katar",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
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
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Arabian Tomb Raiders"
 },
 {
  "id": "pilleurs-tombes",
  "nom": "Pilleurs de tombes",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Biens funéraires",
    "resume": "Pendant la phase d'exploration, la bande gagne 1 co par figurine ennemie mise hors de combat (une fois par bataille)."
   },
   {
    "nom": "Réputation douteuse",
    "resume": "La bande ne peut engager ni chasseur de primes, ni patrouilleur, ni homme de loi, ni saint homme, ni aucun fidèle de Morr."
   },
   {
    "nom": "Ennemis des morts",
    "resume": "Les guerriers de la bande haïssent les morts-vivants."
   }
  ],
  "guerriers": [
   {
    "id": "pilleurs-tombes/graver",
    "nom": "Fossoyeur",
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
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Pilleurs de tombes)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Pelle (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Pied-de-biche",
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
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Lanterne sourde et harnais",
        "cout": 15
       },
       {
        "nom": "Journal de chirurgien",
        "cout": 80
       },
       {
        "nom": "Pendentif de doigts",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-tombes/junior-medic",
    "nom": "Apprenti médecin",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
    "xp": 2,
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
    "regles": [
     {
      "nom": "Charcutier",
      "resume": "Une fois après la partie, relance un résultat de blessure grave d'un héros ami (le second résultat s'applique), sauf si l'apprenti médecin a été mis hors de combat."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Pilleurs de tombes)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Pelle (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Pied-de-biche",
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
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Lanterne sourde et harnais",
        "cout": 15
       },
       {
        "nom": "Journal de chirurgien",
        "cout": 80
       },
       {
        "nom": "Pendentif de doigts",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-tombes/grave-robber",
    "nom": "Pilleur de tombes",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 2,
    "xp": 4,
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
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Pilleurs de tombes)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Pelle (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Pied-de-biche",
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
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Lanterne sourde et harnais",
        "cout": 15
       },
       {
        "nom": "Journal de chirurgien",
        "cout": 80
       },
       {
        "nom": "Pendentif de doigts",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-tombes/lookout",
    "nom": "Guetteur",
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
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Tir",
     "Vitesse",
     "Spéciales (Pilleurs de tombes)"
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Pelle (hallebarde)",
        "cout": 10
       },
       {
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Pied-de-biche",
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
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Lanterne sourde et harnais",
        "cout": 15
       },
       {
        "nom": "Journal de chirurgien",
        "cout": 80
       },
       {
        "nom": "Pendentif de doigts",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pilleurs-tombes/thug",
    "nom": "Brute",
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Pelle (hallebarde)",
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
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Grave Robbers"
 },
 {
  "id": "pirates",
  "nom": "Pirates",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Moussaillons",
    "resume": "Les pirates ne recrutent pas de moussaillons contre de l'or : ils enrôlent de force des humains capturés (héros ou hommes de main ennemis vaincus, traînards ou prisonniers trouvés en exploration). Il ne peut jamais y avoir plus de moussaillons que de matelots ; ni francs-tireurs ni personnages spéciaux ne peuvent être enrôlés."
   },
   {
    "nom": "Enlevé !",
    "resume": "Un héros humain ennemi capturé peut se voir proposer de rejoindre l'équipage : on fait un duel de Commandement sur 2D6 (le pirate ajoute le Cd du capitaine) ; s'il perd, il devient un moussaillon et son équipement est confisqué."
   },
   {
    "nom": "Succession",
    "resume": "Si le capitaine meurt, un second prend le commandement, comme le champion d'une bande de mercenaires."
   }
  ],
  "guerriers": [
   {
    "id": "pirates/pirate-captain",
    "nom": "Capitaine pirate",
    "categorie": "heros",
    "cout": 60,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Pirates)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Gaffe",
        "cout": 8
       },
       {
        "nom": "Chat à neuf queues",
        "cout": 8
       },
       {
        "nom": "Sabre d'abordage (épée)",
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
        "nom": "Cabillot",
        "cout": 3
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
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pirates/ships-mate",
    "nom": "Second",
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
     "Combat",
     "Tir",
     "Force",
     "Spéciales (Pirates)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Gaffe",
        "cout": 8
       },
       {
        "nom": "Chat à neuf queues",
        "cout": 8
       },
       {
        "nom": "Sabre d'abordage (épée)",
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
        "nom": "Cabillot",
        "cout": 3
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
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pirates/cabin-boy",
    "nom": "Mousse",
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
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Pirates)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Gaffe",
        "cout": 8
       },
       {
        "nom": "Chat à neuf queues",
        "cout": 8
       },
       {
        "nom": "Sabre d'abordage (épée)",
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
        "nom": "Cabillot",
        "cout": 3
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
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pirates/boatswain",
    "nom": "Maîtres d'équipage",
    "categorie": "hdm",
    "cout": 32,
    "min": 0,
    "max": 5,
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
      "nom": "Gréeurs experts",
      "resume": "Les maîtres d'équipage commencent avec une corde et grappin qu'ils ne peuvent ni vendre ni céder, et relancent les tests d'Initiative ratés pour sauter un vide, sauter vers le bas, charger en plongeant ou grimper à la corde."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Gaffe",
        "cout": 8
       },
       {
        "nom": "Sabre d'abordage (épée)",
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
        "nom": "Cabillot",
        "cout": 3
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
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pirates/crew",
    "nom": "Matelots",
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Gaffe",
        "cout": 8
       },
       {
        "nom": "Sabre d'abordage (épée)",
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
        "nom": "Cabillot",
        "cout": 3
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
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "pirates/gunner",
    "nom": "Canonniers",
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
    "regles": [
     {
      "nom": "Le pierrier, c'est dangereux, matelot !",
      "resume": "Un canonnier armé du pierrier (un seul par bande, Rare 8) forme toujours un groupe à lui seul ; il doit être recruté à part ou être séparé d'un groupe existant en gardant expérience et compétences."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Sabre d'abordage (épée)",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 30
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 60
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Pierrier",
        "cout": 65
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Cuirs renforcés",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Boulets (pierrier)",
        "cout": 5
       },
       {
        "nom": "Boulets ramés (pierrier)",
        "cout": 2
       },
       {
        "nom": "Mitraille (pierrier)",
        "cout": 2
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Pirates"
 },
 {
  "id": "protectorat-sigmar",
  "nom": "Protectorat de Sigmar",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Mort du chef",
    "resume": "Si le prêtre-guerrier meurt, l'acolyte le plus expérimenté prend la tête de la bande avec ses avantages mais sans prière ; il pourra en prendre une à sa prochaine progression. Un nouvel acolyte peut alors être recruté."
   },
   {
    "nom": "Francs-tireurs des répurgateurs",
    "resume": "La bande recrute ses francs-tireurs comme une bande de répurgateurs."
   }
  ],
  "guerriers": [
   {
    "id": "protectorat-sigmar/warrior-priest",
    "nom": "Prêtre-guerrier",
    "categorie": "heros",
    "cout": 80,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "4",
     "CT": "3",
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
     },
     {
      "nom": "Prières de Sigmar",
      "resume": "Peut invoquer les Prières de Sigmar comme un sorcier lance ses sorts."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Protectorat de Sigmar)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier de Sigmar",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Eau bénite",
        "cout": 5
       },
       {
        "nom": "Carreaux bénis",
        "cout": 25
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "protectorat-sigmar/templar",
    "nom": "Templier",
    "categorie": "heros",
    "cout": 45,
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
    "regles": [
     {
      "nom": "Zélé",
      "resume": "Le templier hait toute figurine d'une bande chaotique (skavens, possédés, carnaval du Chaos, hommes-bêtes, bandes comptant un démon)."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Protectorat de Sigmar)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier de Sigmar",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Eau bénite",
        "cout": 5
       },
       {
        "nom": "Carreaux bénis",
        "cout": 25
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "protectorat-sigmar/huntsman",
    "nom": "Veneur",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 1,
    "xp": 8,
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
    "regles": [
     {
      "nom": "Maître des bêtes",
      "resume": "Les animaux de la bande à 6 ps ou moins peuvent utiliser son Commandement ; les bêtes ennemies doivent réussir un test de Commandement pour le charger."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Spéciales (Protectorat de Sigmar)"
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
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
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
        "nom": "Carreaux bénis",
        "cout": 25
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "protectorat-sigmar/acolyte",
    "nom": "Acolyte",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 2,
    "xp": 2,
    "profil": {
     "M": "4",
     "CC": "3",
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
     "Combat",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Protectorat de Sigmar)"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       },
       {
        "nom": "Marteau de guerre sigmarite",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Bouclier de Sigmar",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Eau bénite",
        "cout": 5
       },
       {
        "nom": "Carreaux bénis",
        "cout": 25
       },
       {
        "nom": "Relique sacrée",
        "cout": 15
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "protectorat-sigmar/archers",
    "nom": "Archers",
    "categorie": "hdm",
    "cout": 35,
    "min": 0,
    "max": 5,
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "protectorat-sigmar/crusaders",
    "nom": "Croisés",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arc long",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "protectorat-sigmar/hounds",
    "nom": "Molosses",
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
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Dévoué",
      "resume": "Le molosse peut relancer un test de Commandement raté s'il est à 12 ps ou moins du prêtre-guerrier."
     },
     {
      "nom": "Crocs et brutalité",
      "resume": "Les molosses n'utilisent jamais d'armes ni d'armure et ne subissent aucune pénalité pour cela."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Protectorate of Sigmar"
 },
 {
  "id": "rangers-nains",
  "nom": "Rangers nains",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Pas confiance",
    "resume": "Les Rangers peuvent s'allier à d'autres bandes naines en multijoueur sans être des figurines amies : elles se gênent pour marcher et ne s'aident pas pour les tests « Seul contre tous », mais ne sont pas ennemies et partagent normalement les trésors."
   },
   {
    "nom": "Durs à cuire",
    "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
   },
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
   }
  ],
  "guerriers": [
   {
    "id": "rangers-nains/runesmith",
    "nom": "Forgeron des runes",
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
     "Cd": "10"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Graver les runes",
      "resume": "Il commence avec une rune mineure tirée au hasard et peut, à chaque progression, apprendre une nouvelle rune au lieu d'une compétence. Avant chaque partie il grave une rune sur un objet (2D6 ≥ difficulté ; un 2 détruit l'objet)."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Spéciales (Rangers nains)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armures",
      "objets": [
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
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "rangers-nains/troll-slayer",
    "nom": "Tueur de trolls",
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
     "Combat",
     "Force",
     "Spéciales (Rangers nains)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "rangers-nains/apprentice-runesmith",
    "nom": "Apprenti forgeron des runes",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 1,
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
    "regles": [
     {
      "nom": "Une paire de mains en plus",
      "resume": "Avec l'apprenti, le forgeron des runes peut graver deux objets avant chaque partie au lieu d'un."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Force",
     "Spéciales (Rangers nains)"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armures",
      "objets": [
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
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "rangers-nains/longbeard",
    "nom": "Long-barbe",
    "categorie": "hdm",
    "cout": 50,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "3",
     "CC": "5",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Obstiné",
      "resume": "Peut relancer un test de Commandement raté ; le second résultat s'applique."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armures",
      "objets": [
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
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "rangers-nains/clansman",
    "nom": "Guerrier du clan",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armures",
      "objets": [
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
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "rangers-nains/crossbowman",
    "nom": "Arbalétrier",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arbalète",
        "cout": 25
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   },
   {
    "id": "rangers-nains/beardling",
    "nom": "Barbe-courte",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
     },
     {
      "categorie": "Armures",
      "objets": [
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
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "nain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Dwarf Rangers"
 },
 {
  "id": "remas",
  "nom": "Mercenaires de Remas",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Haine des Druchii",
    "resume": "Contre une bande d'Elfes Noirs uniquement, le joueur de Remas peut relancer une fois un test de déroute et doit garder le second résultat. La bande ne peut pas engager de franc-tireur elfe noir."
   },
   {
    "nom": "Officiers de Remas",
    "resume": "Le Capitaine, les Champions et les Jeunes sangs de Remas ont +1 en Commandement contre tout adversaire (déjà inclus dans les profils saisis)."
   }
  ],
  "guerriers": [
   {
    "id": "remas/captain",
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
     "A": "2",
     "Cd": "9"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "remas/champion",
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
     "I": "4",
     "A": "1",
     "Cd": "8"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Érudition",
     "Force"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "remas/youngblood",
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
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Érudition",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "remas/duellists",
    "nom": "Duellistes",
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Cape et dague",
      "resume": "Le duelliste se sert de sa cape pour détourner les coups : il compte comme équipé d'une rondache au corps à corps."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "remas/warriors",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "remas/marksmen",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Tileans (Remasens)"
 },
 {
  "id": "skavens-moulder",
  "nom": "Skavens du Clan Moulder",
  "tresor": 500,
  "effectifMax": 20,
  "regles": [
   {
    "nom": "Aiguillonnage",
    "resume": "Au début du tour, le maître de meute et chaque apprenti peuvent aiguillonner une bête ou un groupe de bêtes à 6 ps (2D6 ≥ 6 rat géant, 8 rat-loup, 10 rat-ogre) : sur un succès, 1D6 donne une course forcée, une charge obligatoire ou frénésie et haine ; sur un échec, la cible teste la stupidité."
   },
   {
    "nom": "Mutations",
    "resume": "La figurine peut commencer avec une ou plusieurs mutations, achetées au recrutement. Un mutant doit en avoir au moins une."
   }
  ],
  "guerriers": [
   {
    "id": "skavens-moulder/packmaster",
    "nom": "Maître de meute",
    "categorie": "heros",
    "cout": 75,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "3",
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
     },
     {
      "nom": "Maître dresseur",
      "resume": "Il peut aiguillonner et commence avec la compétence Monter un rat-loup et une compétence de dressage supplémentaire."
     },
     {
      "nom": "Là où ça fait mal",
      "resume": "S'il en est équipé, il cumule les bonus du fouet à bêtes et de l'attrape-chose lors d'un aiguillonnage."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Skavens du Clan Moulder)"
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
        "nom": "Masse/Gourdin",
        "cout": 3
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Fouet à bêtes",
        "cout": 25
       },
       {
        "nom": "Attrape-chose",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Pistolet à malepierre",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets à malepierre",
        "cout": 70
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-moulder/stormvermin",
    "nom": "Vermine de choc",
    "categorie": "heros",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Skavens du Clan Moulder)"
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
        "nom": "Masse/Gourdin",
        "cout": 3
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
        "nom": "Lance",
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
       },
       {
        "nom": "Pistolet à malepierre",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets à malepierre",
        "cout": 70
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-moulder/apprentice",
    "nom": "Apprenti",
    "categorie": "heros",
    "cout": 25,
    "min": 0,
    "max": 2,
    "xp": 4,
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
    "regles": [
     {
      "nom": "Dresseur novice",
      "resume": "Il peut aiguillonner mais n'utilise qu'un seul des bonus du fouet à bêtes ou de l'attrape-chose par tentative."
     },
     {
      "nom": "Héritier du pouvoir",
      "resume": "Si le maître de meute meurt, un apprenti le remplace et un nouvel apprenti peut être recruté ; sans apprenti survivant, la bande est dissoute."
     }
    ],
    "competences": [
     "Combat",
     "Érudition",
     "Vitesse",
     "Spéciales (Skavens du Clan Moulder)"
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
        "nom": "Masse/Gourdin",
        "cout": 3
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
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Fouet à bêtes",
        "cout": 25
       },
       {
        "nom": "Attrape-chose",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Fronde",
        "cout": 2
       },
       {
        "nom": "Pistolet à malepierre",
        "cout": 35
       },
       {
        "nom": "Paire de pistolets à malepierre",
        "cout": 70
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-moulder/rat-ogre",
    "nom": "Rat-ogre",
    "categorie": "hdm",
    "cout": 200,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "3",
     "F": "5",
     "E": "5",
     "PV": "3",
     "I": "4",
     "A": "3",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Sans expérience",
      "resume": "Ce guerrier ne gagne jamais d'expérience."
     },
     {
      "nom": "Il est vivant !",
      "resume": "À son recrutement, le rat-ogre doit acheter une mutation de la liste des Possédés au prix indiqué."
     },
     {
      "nom": "Difficile à mener",
      "resume": "Les rats-ogres s'achètent individuellement et ne forment jamais de groupe d'hommes de main."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "skavens-moulder/wolf-rats",
    "nom": "Rats-loups",
    "categorie": "hdm",
    "cout": 30,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "9",
     "CC": "3",
     "CT": "0",
     "F": "4",
     "E": "3",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Attaque empoisonnée",
      "resume": "Ses attaques sont de Force 4 mais ne modifient pas la sauvegarde d'armure."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "skavens-moulder/clanrats",
    "nom": "Guerriers des clans",
    "categorie": "hdm",
    "cout": 20,
    "min": 0,
    "max": 5,
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-moulder/giant-rats",
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
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Skaven of Clan Moulder"
 },
 {
  "id": "skavens-pestilens",
  "nom": "Skavens du Clan Pestilens",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [],
  "guerriers": [
   {
    "id": "skavens-pestilens/plague-priest",
    "nom": "Prêtre de la peste",
    "categorie": "heros",
    "cout": 85,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "4",
     "F": "4",
     "E": "4",
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
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse",
     "Spéciales (Skavens du Clan Pestilens)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Dague contaminée",
        "cout": 15
       },
       {
        "nom": "Encensoir",
        "cout": 40
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-pestilens/pestilens-sorcerer",
    "nom": "Sorcier Pestilens",
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
     "Érudition",
     "Vitesse",
     "Spéciales (Skavens du Clan Pestilens)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Dague contaminée",
        "cout": 15
       },
       {
        "nom": "Encensoir",
        "cout": 40
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-pestilens/plague-monk",
    "nom": "Moines de la peste",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "5",
     "CC": "4",
     "CT": "3",
     "F": "3",
     "E": "4",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Force",
     "Vitesse",
     "Spéciales (Skavens du Clan Pestilens)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Dague contaminée",
        "cout": 15
       },
       {
        "nom": "Encensoir",
        "cout": 40
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-pestilens/monk-initiate",
    "nom": "Moines initiés",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "5",
     "CC": "2",
     "CT": "3",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "4"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Skavens du Clan Pestilens)"
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
        "nom": "Gourdin",
        "cout": 3
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Fléau",
        "cout": 15
       },
       {
        "nom": "Dague contaminée",
        "cout": 15
       },
       {
        "nom": "Encensoir",
        "cout": 40
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-pestilens/rat-ogre",
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
     "A": "3",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Peur",
      "resume": "Inspire la peur : un ennemi chargé par cette figurine, ou qui veut la charger, doit d'abord réussir un test de Commandement. Les créatures qui causent la peur ne craignent pas celles qui la causent aussi."
     },
     {
      "nom": "Stupidité",
      "resume": "Au début de chacun de ses tours, la figurine teste son Commandement. En cas d'échec, elle ne lance pas de sorts et ne combat pas jusqu'à son prochain tour ; hors corps à corps, elle avance au hasard ou reste immobile."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Sans expérience",
      "resume": "Ce guerrier ne gagne jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "skavens-pestilens/plague-novice",
    "nom": "Novices de la peste",
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
        "nom": "Gourdin",
        "cout": 3
       },
       {
        "nom": "Épée",
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
        "nom": "Fronde",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     }
    ],
    "race": "skaven",
    "sansProgression": false
   },
   {
    "id": "skavens-pestilens/giant-rat",
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
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   }
  ],
  "source": "mordheimer.net · Skaven of Clan Pestilens"
 },
 {
  "id": "snotlings",
  "nom": "Bande de snotlings",
  "tresor": 500,
  "effectifMax": 30,
  "regles": [
   {
    "nom": "Insaisissable",
    "resume": "Sauvegarde d'esquive de 6+ contre les tirs."
   },
   {
    "nom": "Petite cible",
    "resume": "Les tirs contre les snotlings subissent -1 pour toucher."
   },
   {
    "nom": "Petites mains",
    "resume": "Les snotlings et le gobelin ne peuvent pas utiliser arcs longs, arcs elfiques, arquebuses, longs fusils ni tromblons, sauf les équipes de tireurs."
   },
   {
    "nom": "Pas si coriaces",
    "resume": "Blessures : 1 à terre, 2-3 sonné, 4-6 hors de combat ; les hommes de main hors de combat meurent sur 1-3 et les héros snotlings jettent deux fois sur le tableau des blessures graves."
   },
   {
    "nom": "Faiblesse du nombre",
    "resume": "La valeur de la bande est divisée par deux, et l'effectif est divisé par deux (arrondi au supérieur) pour les revenus et le commerce."
   },
   {
    "nom": "Charognards !",
    "resume": "La bande lance un dé d'exploration supplémentaire, même si tous les héros ont été mis hors de combat."
   },
   {
    "nom": "Le morveux a du talent !",
    "resume": "Un homme de main snotling qui devient héros gagne automatiquement Loi de la meute et Les rigueurs du commandement."
   },
   {
    "nom": "Trop indisciplinés",
    "resume": "La bande ne peut engager que des francs-tireurs ou personnages snotlings, ou ceux qui la nomment."
   }
  ],
  "guerriers": [
   {
    "id": "snotlings/bullied-goblin",
    "nom": "Gobelin malmené",
    "categorie": "heros",
    "cout": 35,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
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
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Pas un snotling",
      "resume": "Le gobelin ignore Insaisissable, Petite cible et Pas si coriaces, mais sa valeur est quand même divisée par deux et il peut utiliser des cailloux."
     },
     {
      "nom": "Loi de la meute",
      "resume": "+1 en Commandement pour chaque paire de snotlings à 6 ps ou moins, jusqu'à 10 maximum."
     },
     {
      "nom": "Les rigueurs du commandement",
      "resume": "Les héros de la bande gagnent +2 points d'expérience lorsqu'ils survivent à une bataille."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse",
     "Spéciales (Bande de snotlings)"
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
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
        "nom": "Épée",
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
        "nom": "Arc court",
        "cout": 10
       },
       {
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "gobelin",
    "sansProgression": false
   },
   {
    "id": "snotlings/snotling-shaman",
    "nom": "Chamane snotling",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 1,
    "xp": 4,
    "profil": {
     "M": "4",
     "CC": "1",
     "CT": "1",
     "F": "1",
     "E": "1",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Loi de la meute",
      "resume": "+1 en Commandement pour chaque paire de snotlings à 6 ps ou moins, jusqu'à 10 maximum."
     },
     {
      "nom": "Les rigueurs du commandement",
      "resume": "Les héros de la bande gagnent +2 points d'expérience lorsqu'ils survivent à une bataille."
     },
     {
      "nom": "Sorcier (Magie Waaagh! snotling)",
      "resume": "Le chamane est un sorcier qui commence avec un sort de la magie Waaagh! snotling."
     },
     {
      "nom": "Mal de crâne !",
      "resume": "Après chaque tentative de lancer de sort, sur 1-2 sur 1D6 le chamane et les figurines en contact subissent une touche magique de F5."
     }
    ],
    "competences": [
     "Vitesse",
     "Spéciales (Bande de snotlings)"
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
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
        "nom": "Épée",
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
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "snotling",
    "sansProgression": false
   },
   {
    "id": "snotlings/snotling-scouts",
    "nom": "Éclaireur snotling",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 2,
    "xp": 4,
    "profil": {
     "M": "5",
     "CC": "1",
     "CT": "2",
     "F": "1",
     "E": "1",
     "PV": "1",
     "I": "5",
     "A": "1",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Loi de la meute",
      "resume": "+1 en Commandement pour chaque paire de snotlings à 6 ps ou moins, jusqu'à 10 maximum."
     },
     {
      "nom": "Les rigueurs du commandement",
      "resume": "Les héros de la bande gagnent +2 points d'expérience lorsqu'ils survivent à une bataille."
     },
     {
      "nom": "Éclaireur",
      "resume": "Se déploie après l'adversaire, hors de vue et à plus de 8 ps de tout ennemi."
     },
     {
      "nom": "Inoffensif !",
      "resume": "Il peut toujours courir, même avec des ennemis à 8 ps ou moins."
     }
    ],
    "competences": [
     "Tir",
     "Vitesse",
     "Spéciales (Bande de snotlings)"
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
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
        "nom": "Épée",
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
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "snotling",
    "sansProgression": false
   },
   {
    "id": "snotlings/snotling-bigsnotz",
    "nom": "Gros-Morveux snotling",
    "categorie": "heros",
    "cout": 15,
    "min": 0,
    "max": 2,
    "xp": 8,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "2",
     "E": "2",
     "PV": "1",
     "I": "3",
     "A": "1",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Loi de la meute",
      "resume": "+1 en Commandement pour chaque paire de snotlings à 6 ps ou moins, jusqu'à 10 maximum."
     },
     {
      "nom": "Les rigueurs du commandement",
      "resume": "Les héros de la bande gagnent +2 points d'expérience lorsqu'ils survivent à une bataille."
     }
    ],
    "competences": [
     "Combat",
     "Vitesse",
     "Spéciales (Bande de snotlings)"
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
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
        "nom": "Épée",
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
        "nom": "Arc court",
        "cout": 10
       },
       {
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "snotling",
    "sansProgression": false
   },
   {
    "id": "snotlings/snotling-wheelo",
    "nom": "Roulo snotling",
    "categorie": "hdm",
    "cout": 100,
    "min": 0,
    "max": 1,
    "xp": 0,
    "profil": {
     "M": "D6",
     "CC": "2",
     "CT": "2",
     "F": "4",
     "E": "3",
     "PV": "2",
     "I": "5",
     "A": "2",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Déplacement du roulo",
      "resume": "Il avance de 1D6 ps en ligne droite (2D6 en course ou charge), stoppé par les obstacles ; traverser un terrain difficile ou un bâtiment lui inflige une touche de F5."
     },
     {
      "nom": "Touches d’impact",
      "resume": "Quand il charge, il inflige 1D3 touches de F4 avant le combat, au premier round seulement."
     },
     {
      "nom": "Machine robuste",
      "resume": "Ignore Pas si coriaces, Petite cible et Insaisissable ; hors de combat, 1 = détruit, 2 = 1D3 parties de réparation, 3-6 = rien."
     },
     {
      "nom": "Améliorations du roulo",
      "resume": "Il progresse sur le tableau des héros (compétences de Combat, Force et Vitesse adaptées), chaque caractéristique une seule fois, jamais héros."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": false
   },
   {
    "id": "snotlings/snotling-mobs",
    "nom": "Grouillot de snotlings",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 3,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "2",
     "F": "2",
     "E": "2",
     "PV": "3",
     "I": "3",
     "A": "3",
     "Cd": "5"
    },
    "regles": [
     {
      "nom": "Travail d’équipe",
      "resume": "L'équipe compte comme une seule figurine."
     },
     {
      "nom": "Pas si petits, étonnamment coriaces",
      "resume": "Pas de malus de petite cible et tableau de blessures normal (mort sur 1-2), mais garde Insaisissable."
     },
     {
      "nom": "Stupidité de masse",
      "resume": "Le grouillot ne peut jamais devenir héros : relancez ce résultat."
     },
     {
      "nom": "Mentalité de meute",
      "resume": "Deux grouillots à 2 ps l'un de l'autre au début du tour sont insensibles à la psychologie jusqu'à la fin du tour adverse."
     }
    ],
    "competences": [],
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
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
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       }
      ]
     }
    ],
    "race": "snotling",
    "sansProgression": false
   },
   {
    "id": "snotlings/snotling-shoota-team",
    "nom": "Équipe de tireurs snotlings",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "2",
     "CT": "3",
     "F": "1",
     "E": "1",
     "PV": "2",
     "I": "3",
     "A": "2",
     "Cd": "4"
    },
    "regles": [
     {
      "nom": "Travail d’équipe",
      "resume": "L'équipe compte comme une seule figurine."
     },
     {
      "nom": "Encombrés",
      "resume": "Avec une arme de tir autre que caillou ou lance-pierre, l'équipe peut charger mais pas courir."
     },
     {
      "nom": "Recul",
      "resume": "Tirer avec une arme qualifiée repousse l'équipe de 1D6 ps ; les collisions infligent des touches de F2."
     }
    ],
    "competences": [],
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
       },
       {
        "nom": "Gourdin",
        "cout": 3
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       },
       {
        "nom": "Arbalète",
        "cout": 25
       },
       {
        "nom": "Tromblon",
        "cout": 30
       },
       {
        "nom": "Pistolet",
        "cout": 15
       }
      ]
     }
    ],
    "race": "snotling",
    "sansProgression": false
   },
   {
    "id": "snotlings/runts",
    "nom": "Avortons snotlings",
    "categorie": "hdm",
    "cout": 5,
    "min": 0,
    "max": null,
    "xp": 0,
    "profil": {
     "M": "4",
     "CC": "1",
     "CT": "1",
     "F": "1",
     "E": "1",
     "PV": "1",
     "I": "4",
     "A": "1",
     "Cd": "3"
    },
    "regles": [
     {
      "nom": "Toutes petites mains",
      "resume": "Une seule arme à une main et aucune armure, jusqu'à ce qu'il devienne héros."
     },
     {
      "nom": "Le plus petit des petits",
      "resume": "-2 au total pour le toucher au tir ; meurt sur 1-4 au jet de blessure d'après-bataille."
     }
    ],
    "competences": [],
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
        "nom": "Bâton pointu",
        "cout": 2
       },
       {
        "nom": "Bâton pointu gratuit",
        "cout": 0
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
        "nom": "Épée",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Caillou",
        "cout": 0
       },
       {
        "nom": "Lance-pierre",
        "cout": 2
       }
      ]
     }
    ],
    "race": "snotling",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Snotlings"
 },
 {
  "id": "societe-sorciers",
  "nom": "Société des sorciers",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Garde-le secret, garde-le en sûreté !",
    "resume": "Aucun franc-tireur ni personnage spécial lanceur de sorts, sauf le mage haut elfe ; les autres francs-tireurs sont recrutés comme pour une bande de mercenaires humains."
   },
   {
    "nom": "Les caprices de la magie",
    "resume": "Un double 1 au lancer d'un sort oblige à jeter 2D6 sur la table d'échec magique (de la transformation en enfant du Chaos à une mutation gratuite)."
   }
  ],
  "guerriers": [
   {
    "id": "societe-sorciers/magus",
    "nom": "Mage suprême",
    "categorie": "heros",
    "cout": 75,
    "min": 1,
    "max": 1,
    "xp": 20,
    "profil": {
     "M": "4",
     "CC": "3",
     "CT": "3",
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
      "nom": "Sorcier (Magie élémentaire ou mineure)",
      "resume": "Sorcier qui tire ses sorts au hasard dans l'un des domaines élémentaires (Eau, Feu, Terre, Air) ou dans la magie mineure ; le Mage suprême commence avec deux sorts, un mage avec un."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Bâton de sorcier",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Familier",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "societe-sorciers/companion",
    "nom": "Compagnon",
    "categorie": "heros",
    "cout": 45,
    "min": 0,
    "max": 2,
    "xp": 8,
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
      "nom": "Ne me regardez pas !",
      "resume": "Le compagnon ne peut jamais devenir chef ; son Commandement ne sert qu'à ses propres tests, y compris de déroute."
     },
     {
      "nom": "Garde du corps",
      "resume": "À 2 ps d'un sorcier et hors combat, il encaisse les tirs et intercepte les charges visant le sorcier, en se déplaçant hors séquence si besoin."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Force"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Bâton de sorcier",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Familier",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "societe-sorciers/mage",
    "nom": "Mage",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 8,
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
      "nom": "Sorcier (Magie élémentaire ou mineure)",
      "resume": "Sorcier qui tire ses sorts au hasard dans l'un des domaines élémentaires (Eau, Feu, Terre, Air) ou dans la magie mineure ; le Mage suprême commence avec deux sorts, un mage avec un."
     },
     {
      "nom": "Respect des aînés",
      "resume": "Un mage ne peut connaître plus de sorts que le chef ; sinon il doit l'affronter en duel de sorciers et le perdant quitte la bande."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse"
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Bâton de sorcier",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Familier",
        "cout": 20
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "societe-sorciers/untrained",
    "nom": "Novices",
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
     "I": "3",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Tiens, porte ça",
      "resume": "Les novices peuvent porter des objets spéciaux comme des reliques sacrées ou des porte-bonheur."
     },
     {
      "nom": "Talent maîtrisé",
      "resume": "Sur « Le gars a du talent », il devient sorcier : il peut renoncer à la progression pour tirer un sort ou faire le jet de héros normal."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Bâton de sorcier",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "societe-sorciers/grunts",
    "nom": "Hommes de peine",
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
    "regles": [
     {
      "nom": "Prouve ton talent !",
      "resume": "Sur « Le gars a du talent », il devient un héros ordinaire ou un novice ; deux fois ce résultat lui permettent de devenir sorcier."
     }
    ],
    "competences": [],
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
        "nom": "Marteau",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
        "cout": 10
       },
       {
        "nom": "Bâton de sorcier",
        "cout": 10
       },
       {
        "nom": "Lance",
        "cout": 10
       },
       {
        "nom": "Hallebarde",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Sorcerous Society"
 },
 {
  "id": "stirwood",
  "nom": "Hors-la-loi de la forêt de Stirwood",
  "tresor": 500,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Archers de la forêt",
    "resume": "Chaque guerrier doit porter un arc (pas d'arbalète) et ne peut avoir qu'une seule arme de tir, même si une compétence en permettrait davantage ; le Prêtre peut se passer d'arc."
   },
   {
    "nom": "Francs-tireurs interdits",
    "resume": "La bande ne peut pas engager de Chasseur de primes, de Prêtre-loup d'Ulric, de Chaman norse ni d'Assassin elfe noir."
   }
  ],
  "guerriers": [
   {
    "id": "stirwood/bandit-leader",
    "nom": "Chef bandit",
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
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Bâton/Gourdin/Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 30
       },
       {
        "nom": "Cape forestière",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "stirwood/champion",
    "nom": "Champion",
    "categorie": "heros",
    "cout": 35,
    "min": 0,
    "max": 2,
    "xp": 8,
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
    "competences": [
     "Combat",
     "Tir",
     "Force"
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
        "nom": "Bâton/Gourdin/Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 30
       },
       {
        "nom": "Cape forestière",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "stirwood/cleric",
    "nom": "Prêtre",
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
      "nom": "Prières de Sigmar",
      "resume": "Peut invoquer les Prières de Sigmar comme un sorcier lance ses sorts."
     },
     {
      "nom": "Disciple de Sigmar",
      "resume": "Le Prêtre commence la campagne en connaissant une Prière de Sigmar ; il peut porter une armure mais ne peut pas apprendre Sorcellerie ni Savoir arcanique."
     }
    ],
    "competences": [
     "Érudition"
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
        "nom": "Bâton/Gourdin/Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 30
       },
       {
        "nom": "Cape forestière",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "stirwood/petty-thief",
    "nom": "Petit voleur",
    "categorie": "heros",
    "cout": 20,
    "min": 0,
    "max": 2,
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
     "Cd": "6"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Bâton/Gourdin/Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 30
       },
       {
        "nom": "Cape forestière",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "stirwood/marksmen",
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
        "nom": "Bâton/Gourdin/Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
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
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       },
       {
        "nom": "Armure légère",
        "cout": 20
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Flèches de chasse",
        "cout": 30
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "stirwood/outlaws",
    "nom": "Hors-la-loi",
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
        "nom": "Bâton/Gourdin/Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Arme lourde",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armes de tir",
      "objets": [
       {
        "nom": "Arc court",
        "cout": 5
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Outlaws of Stirwood Forest"
 },
 {
  "id": "survivants-strigos",
  "nom": "Survivants de Strigos",
  "tresor": 500,
  "effectifMax": 12,
  "regles": [
   {
    "nom": "Chef mort-vivant",
    "resume": "Le vampire strigoï est le seul mort-vivant de la bande. S'il meurt, la bande continue mais ne peut pas recruter de nouveau vampire."
   }
  ],
  "guerriers": [
   {
    "id": "survivants-strigos/strigoi-vampire",
    "nom": "Vampire strigoï",
    "categorie": "heros",
    "cout": 115,
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
     "I": "6",
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     },
     {
      "nom": "Haine des lignées",
      "resume": "Le strigoï hait les vampires des autres lignées."
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
    "competences": [
     "Combat",
     "Force",
     "Vitesse",
     "Spéciales (Survivants de Strigos)"
    ],
    "equipement": [],
    "race": "vampire",
    "sansProgression": false
   },
   {
    "id": "survivants-strigos/seer",
    "nom": "Voyante",
    "categorie": "heros",
    "cout": 40,
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
      "nom": "Traqueur",
      "resume": "Si le guerrier n'est pas mis hors de combat, il peut modifier de +1 ou -1 un dé d'exploration après la bataille."
     },
     {
      "nom": "Sorcier (Charmes et maléfices)",
      "resume": "La voyante est un lanceur de sorts : elle commence avec un sort tiré au hasard dans la liste des Charmes et maléfices."
     }
    ],
    "competences": [
     "Érudition",
     "Vitesse",
     "Spéciales (Survivants de Strigos)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Serre de poitrine",
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
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Bracelets d'or noir",
        "cout": 35
       },
       {
        "nom": "Anneau de Strigos",
        "cout": 20
       },
       {
        "nom": "Relique impie",
        "cout": 15
       },
       {
        "nom": "Livre maudit",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "survivants-strigos/domnu",
    "nom": "Domnu",
    "categorie": "heros",
    "cout": 30,
    "min": 0,
    "max": 3,
    "xp": 4,
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
      "nom": "Enfant des ténèbres",
      "resume": "Le domnu n'est pas affecté par la règle « Sinistre » (Spooky) de la Sylvanie."
     },
     {
      "nom": "Protection tzigane",
      "resume": "Le guerrier bénéficie d'une sauvegarde spéciale de 5+ contre les attaques magiques."
     }
    ],
    "competences": [
     "Combat",
     "Force",
     "Spéciales (Survivants de Strigos)"
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
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
        "nom": "Hallebarde",
        "cout": 10
       },
       {
        "nom": "Serre de poitrine",
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
        "nom": "Couteaux de lancer",
        "cout": 15
       },
       {
        "nom": "Arc",
        "cout": 10
       },
       {
        "nom": "Arc court",
        "cout": 5
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Armure lourde",
        "cout": 50
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Divers",
      "objets": [
       {
        "nom": "Bracelets d'or noir",
        "cout": 35
       },
       {
        "nom": "Anneau de Strigos",
        "cout": 20
       },
       {
        "nom": "Relique impie",
        "cout": 15
       },
       {
        "nom": "Livre maudit",
        "cout": 50
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "survivants-strigos/ghouls",
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
    "equipement": [],
    "race": "goule",
    "sansProgression": false
   },
   {
    "id": "survivants-strigos/giant-bats",
    "nom": "Chauves-souris géantes",
    "categorie": "hdm",
    "cout": 40,
    "min": 0,
    "max": 2,
    "xp": 0,
    "profil": {
     "M": "6",
     "CC": "3",
     "CT": "0",
     "F": "3",
     "E": "3",
     "PV": "2",
     "I": "3",
     "A": "1",
     "Cd": "6"
    },
    "regles": [
     {
      "nom": "Animaux",
      "resume": "Les animaux ne gagnent jamais d'expérience."
     },
     {
      "nom": "Vol",
      "resume": "La créature ignore les règles d'escalade et de saut au-dessus des vides, et peut même terminer son mouvement au-dessus du vide."
     },
     {
      "nom": "Grande cible",
      "resume": "Grande cible : les tireurs ont +1 pour la toucher et peuvent la viser même si elle n'est pas l'ennemi le plus proche."
     },
     {
      "nom": "Écholocation",
      "resume": "La créature n'a pas besoin de ligne de vue pour charger."
     }
    ],
    "competences": [],
    "equipement": [],
    "race": null,
    "sansProgression": true
   },
   {
    "id": "survivants-strigos/strigany",
    "nom": "Strigany",
    "categorie": "hdm",
    "cout": 25,
    "min": 0,
    "max": 5,
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
        "nom": "Masse",
        "cout": 3
       },
       {
        "nom": "Hache",
        "cout": 5
       },
       {
        "nom": "Épée",
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
        "nom": "Couteaux de lancer",
        "cout": 15
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Survivors of Strigos"
 },
 {
  "id": "trantio",
  "nom": "Mercenaires de Trantio",
  "tresor": 600,
  "effectifMax": 15,
  "regles": [
   {
    "nom": "Richesse de Trantio",
    "resume": "Bande la mieux équipée de Lustrie : elle commence une partie isolée avec 100 co de plus, et une campagne lustrienne avec 20 % d'or en plus."
   }
  ],
  "guerriers": [
   {
    "id": "trantio/captain",
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
     "A": "2",
     "Cd": "8"
    },
    "regles": [
     {
      "nom": "Chef",
      "resume": "Les guerriers de la bande situés à 6 ps ou moins du chef peuvent utiliser son Commandement pour leurs tests de Commandement."
     }
    ],
    "competences": [
     "Combat",
     "Tir",
     "Érudition",
     "Force",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "trantio/champion",
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [],
    "competences": [
     "Combat",
     "Tir",
     "Vitesse"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "trantio/youngblood",
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
     "Combat",
     "Tir",
     "Force"
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "trantio/duellists",
    "nom": "Duellistes",
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
     "I": "4",
     "A": "1",
     "Cd": "7"
    },
    "regles": [
     {
      "nom": "Cape et dague",
      "resume": "Le duelliste se sert de sa cape pour détourner les coups : il compte comme équipé d'une rondache au corps à corps."
     }
    ],
    "competences": [],
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "trantio/warriors",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Pique",
        "cout": 12
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
        "nom": "Rapière",
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc",
        "cout": 10
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Bouclier",
        "cout": 5
       },
       {
        "nom": "Rondache",
        "cout": 5
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   },
   {
    "id": "trantio/marksmen",
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
        "nom": "Masse",
        "cout": 3
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
        "nom": "Épée",
        "cout": 10
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
        "nom": "Paire de pistolets",
        "cout": 30
       },
       {
        "nom": "Pistolet de duel",
        "cout": 25
       },
       {
        "nom": "Paire de pistolets de duel",
        "cout": 50
       },
       {
        "nom": "Arc long",
        "cout": 15
       },
       {
        "nom": "Arquebuse",
        "cout": 35
       },
       {
        "nom": "Fusil de chasse",
        "cout": 200
       }
      ]
     },
     {
      "categorie": "Armures",
      "objets": [
       {
        "nom": "Armure légère",
        "cout": 20
       },
       {
        "nom": "Casque",
        "cout": 10
       }
      ]
     }
    ],
    "race": "humain",
    "sansProgression": false
   }
  ],
  "source": "mordheimer.net · Tileans (Trantios)"
 }
];
// Listes de compétences spéciales des suppléments : [anglais, français, résumé, condition].
export const COMPETENCES_SUPPLEMENTS = {
 "Spéciales (Amazones de Lustrie)": [
  [
   "Skink Hunter",
   "Chasseuse de skinks",
   "Au premier round d'un corps à corps contre des Skinks, elle frappe toujours en premier, quel que soit celui qui a chargé.",
   null
  ],
  [
   "Elixir of Life",
   "Élixir de vie",
   "Après la bataille, elle peut relancer un jet de blessure grave et doit garder le second résultat.",
   null
  ],
  [
   "Mesmerising Dance",
   "Danse envoûtante",
   "Au début de chaque tour, chaque ennemi en contact socle à socle doit réussir un test de Cd ou ne pas pouvoir attaquer ce tour (il se défend normalement). Les Hommes-Lézards et les morts-vivants y sont insensibles.",
   null
  ],
  [
   "Savage Fury",
   "Furie sauvage",
   "+1 Attaque lorsqu'elle charge ; elle est insensible aux charmes et à la peur.",
   null
  ],
  [
   "Concealment",
   "Dissimulation",
   "Cachée dans un terrain de jungle, elle ne peut être repérée qu'à la moitié de la distance habituelle.",
   null
  ]
 ],
 "Spéciales (Bandits du Hochland)": [
  [
   "Banditry",
   "Brigandage",
   "Entre deux parties, sur 2-6 au D6 il rapporte D6+1 co ; sur 1, il jette sur la table des blessures graves. Incompatible avec « Escroc habile ».",
   null
  ],
  [
   "Hide in Shadows",
   "Se fondre dans l'ombre",
   "Un ennemi qui tente de le repérer alors qu'il est caché divise son Initiative par deux avant de mesurer.",
   null
  ],
  [
   "Jump Back",
   "Bond en arrière",
   "Au début de la phase de mouvement, s'il est au corps à corps, il peut réussir un test d'Initiative pour reculer de 1 ps puis agir normalement ; en cas d'échec, il frappe en dernier ce round.",
   null
  ],
  [
   "Sniper",
   "Tireur embusqué",
   "Il peut tirer ou lancer un sort en restant caché (pas avec une arme à poudre).",
   null
  ],
  [
   "Throw Voice",
   "Ventriloque",
   "Quand un ennemi le repère alors qu'il est caché, sur 4+ au D6 il reste caché.",
   null
  ]
 ],
 "Spéciales (Bretonnie)": [
  [
   "Virtue of Purity",
   "Vertu de pureté",
   "Tout sort lancé contre le chevalier est dissipé sur 4+ sur 1D6.",
   null
  ],
  [
   "Virtue of Valour",
   "Vertu de bravoure",
   "Au corps à corps contre un adversaire de Force supérieure, le chevalier relance ses jets pour toucher ratés.",
   null
  ],
  [
   "Virtue of Discipline",
   "Vertu de discipline",
   "Une fois par partie, s'il n'est ni hors de combat, ni sonné, ni à terre, le chevalier peut relancer un test de déroute raté.",
   null
  ],
  [
   "Virtue of Noble Disdain",
   "Vertu de noble dédain",
   "Le chevalier hait tous les ennemis équipés d'armes de tir.",
   null
  ],
  [
   "Virtue of Impetuous",
   "Vertu d'impétuosité",
   "Quand il charge, le chevalier ajoute 1D3 ps à son mouvement (jet effectué avant de déplacer la figurine).",
   null
  ]
 ],
 "Spéciales (Caravane marchande)": [
  [
   "Bribery",
   "Pots-de-vin",
   "Lors d'un test de déroute, payer 5 co par membre non-héros encore en jeu permet d'ignorer un membre hors de combat pour ce test ; répétable tant qu'il reste de l'or.",
   "chef"
  ],
  [
   "Dubious Income",
   "Revenus douteux",
   "Après une bataille où il n'a pas été mis hors de combat, test de Cd : réussi, gagne 1 co par point d'XP du marchand ; raté, perd jusqu'à ce montant.",
   "chef"
  ],
  [
   "Wholesale",
   "Vente en gros",
   "Après chaque bataille (s'il n'a pas été mis hors de combat), cherche 1D3+1 objets rares au lieu d'un.",
   "chef"
  ],
  [
   "Deal Breaker",
   "Négociateur redoutable",
   "+1 au jet de vente de la règle Commerce.",
   "chef"
  ],
  [
   "Connected",
   "Relations",
   "Au lieu d'une recherche d'objet rare normale, cherche au marché noir : parchemin de dissipation (50+4D6 co, rare 12), parchemin magique (100 co, rare 14), artefact mineur (200+D6×15 co, rare 16), artefact magique (350+D6×25 co, rare 18) ; non revendables.",
   "chef"
  ]
 ],
 "Spéciales (Cavalcade maudite)": [
  [
   "Noblesse Obliges",
   "Noblesse oblige",
   "Insensible à la peur ; gagne une attaque supplémentaire (piétinement) contre un adversaire à terre.",
   null
  ],
  [
   "Torturer",
   "Tortionnaire",
   "Chaque ennemi qu'il blesse au corps à corps perd 1 en Force pour la bataille (cumulable, minimum 1, sans effet sur les morts-vivants).",
   null
  ],
  [
   "Duelist",
   "Duelliste",
   "À la fin du corps à corps, un adversaire unique non grande cible doit réussir un test de Force ou être repoussé de 2 ps.",
   null
  ]
 ],
 "Spéciales (Chasseurs cornus)": [
  [
   "Master Trapper",
   "Maître trappeur",
   "Le fil de piège du guerrier porte à 4 ps et ses pièges se déclenchent sur 2+.",
   null
  ],
  [
   "Infiltration",
   "Infiltration",
   "Le guerrier gagne la règle Infiltration : il se déploie après l'adversaire, hors de vue et à plus de 12 ps de tout ennemi.",
   null
  ],
  [
   "Foul Odour",
   "Odeur infecte",
   "Les ennemis vivants (ni morts-vivants ni possédés) ont -1 pour toucher ce guerrier au corps à corps ; il ne peut porter de flamme nue et les attaques de feu contre lui ont +1 en Force.",
   null
  ],
  [
   "Animal Friendship",
   "Amitié animale",
   "Les animaux ordinaires n'attaquent jamais ce guerrier, et jusqu'à deux de ses chiens de guerre ne comptent pas dans l'effectif maximum de la bande.",
   null
  ],
  [
   "Pathfinder",
   "Pisteur",
   "La bande lance un dé supplémentaire lors de la phase d'exploration ; une seule figurine de la bande peut avoir cette compétence.",
   null
  ],
  [
   "Hide in Shadows",
   "Se fondre dans l'ombre",
   "Les ennemis qui tentent de repérer ce guerrier caché utilisent la moitié de leur Initiative.",
   null
  ]
 ],
 "Spéciales (Chasseurs de vampires de Sylvanie)": [
  [
   "Iron Will",
   "Volonté de fer",
   "Le héros est immunisé contre la Peur.",
   null
  ],
  [
   "Righteous Aura",
   "Aura de justice",
   "Lors du premier round de corps à corps, chaque adversaire possédé ou mort-vivant perd sa première attaque contre ce guerrier (minimum 1 attaque).",
   null
  ],
  [
   "Thirst for Vengeance",
   "Soif de vengeance",
   "Le héros hait tous les morts-vivants et gagne +1 Attaque au tour où il charge.",
   null
  ],
  [
   "Blessing of Morr",
   "Bénédiction de Morr",
   "+1 aux jets de blessure contre les morts-vivants.",
   null
  ],
  [
   "Touch of Darkness",
   "Toucher des ténèbres",
   "Le héros ignore les pénalités liées à l'obscurité.",
   null
  ]
 ],
 "Spéciales (Culte des Tueurs nains)": [
  [
   "Deathwish",
   "Vœu de mort",
   "Immunisé à toute psychologie et ne teste jamais pour combat seul.",
   null
  ],
  [
   "Ferocious Charge",
   "Charge féroce",
   "Double ses attaques au tour où le tueur charge, avec -1 pour toucher ce tour-là. Tueurs uniquement.",
   null
  ],
  [
   "Monster Slayer",
   "Tueur de monstres",
   "Blesse toujours sur 4+ quelle que soit l'Endurance, sauf si sa Force donne mieux. Tueurs uniquement.",
   null
  ],
  [
   "Berserker",
   "Forcené",
   "+1 pour toucher au corps à corps au tour de la charge. Tueurs uniquement.",
   null
  ],
  [
   "Deathblow",
   "Coup fatal",
   "Mis hors de combat au corps à corps (ou à terre ou sonné), il porte d'abord ses attaques restantes. Tueurs uniquement.",
   null
  ],
  [
   "Relentless",
   "Implacable",
   "Une charge ratée permet tout de même le mouvement complet, contre un ennemi vu ou détecté. Tueurs uniquement.",
   null
  ],
  [
   "Axe Mastery",
   "Maîtrise de la hache",
   "Relance les attaques ratées avec une hache ou une hache naine au tour de la charge ; pas avec les lames tourbillonnantes.",
   null
  ],
  [
   "True Grit",
   "Cran",
   "Blessures : 1-3 à terre, 4-5 sonné, 6 hors de combat.",
   null
  ],
  [
   "Thick Skull",
   "Crâne épais",
   "Sauvegarde de 3+ contre le résultat sonné, qui devient alors à terre.",
   null
  ],
  [
   "Songster",
   "Chanteur",
   "Les figurines amies à 6 ps peuvent relancer leurs tests de Commandement ratés, déroute comprise, avec +1 en Commandement (max 10). Chroniqueur uniquement.",
   "culte-tueurs/rememberer"
  ],
  [
   "Song of Honor",
   "Chant d'honneur",
   "Après la partie, si un tueur est mort, tous les héros et hommes de main gagnent +1 XP. Chroniqueur uniquement.",
   "culte-tueurs/rememberer"
  ]
 ],
 "Spéciales (Druchii)": [
  [
   "Frenzied Charge",
   "Charge frénétique",
   "Après avoir mis hors de combat tous ses adversaires, le héros fait un mouvement de poursuite de 4 ps ; s'il touche un ennemi, il compte comme chargeant au tour suivant.",
   null
  ],
  [
   "Fey Quickness",
   "Vivacité féerique",
   "Évite une attaque de corps à corps ou de tir sur 6 ; sur 4+ dans le domaine concerné s'il possède Esquive latérale ou Esquive.",
   null
  ],
  [
   "Infiltration",
   "Infiltration",
   "Le héros peut s'infiltrer comme avec la compétence skaven du même nom.",
   null
  ],
  [
   "Poisoner",
   "Empoisonneur",
   "Au lieu de chercher un objet rare, le héros prépare D2 doses de venin noir, à utiliser à la bataille suivante, ni vendables ni échangeables.",
   null
  ],
  [
   "Marksman of Naggaroth",
   "Tireur de Naggaroth",
   "Ignore le malus de longue portée aux armes de type arbalète ; immobile, il tire deux fois sans malus à l'arbalète à répétition, ou trois fois à -1.",
   null
  ],
  [
   "Will to Survive",
   "Volonté de survivre",
   "Sur un résultat « mort » de blessure grave, test de Commandement non modifié : réussi, le héros survit mais manque D3 batailles.",
   null
  ],
  [
   "Keen Sight",
   "Vue affûtée",
   "Repère les ennemis cachés à deux fois son Initiative en pas.",
   null
  ]
 ],
 "Spéciales (Éclaireurs impériaux)": [
  [
   "Ride",
   "Monte",
   "Indispensable pour combattre monté ; propre à un type de monture.",
   null
  ],
  [
   "Cavalry Commander",
   "Commandant de cavalerie",
   "Si le chef est monté, la portée de sa règle Chef augmente de 6 ps.",
   "chef"
  ],
  [
   "Trick Riding",
   "Voltige",
   "En se penchant sur le flanc de sa monture, le cavalier impose -1 pour toucher aux tirs contre lui ; test d'Initiative pour se déplacer, pas de bouclier, d'arme de tir ni d'armure lourde.",
   null
  ],
  [
   "Combat Riding",
   "Combat monté",
   "Attaque supplémentaire de Force 4 lors d'une charge contre un adversaire non monté.",
   null
  ],
  [
   "Evade",
   "Dérobade",
   "Le cavalier frappe toujours en premier contre des adversaires non montés.",
   null
  ],
  [
   "Running Dismount",
   "Mise à pied rapide",
   "Le cavalier peut faire le mouvement de sa monture puis mettre pied à terre, éventuellement au contact de l'ennemi (charge plongeante de 2 ps).",
   null
  ],
  [
   "Athletic Mount",
   "Monture athlétique",
   "Le guerrier bondit en selle et sa monture peut aussitôt courir ou charger, s'il est à moins de la moitié de son mouvement d'elle.",
   null
  ],
  [
   "Horse Archer",
   "Archer monté",
   "Le cavalier tire sur 360° depuis sa monture, même en course, avec -1 pour toucher.",
   null
  ],
  [
   "Mounted Combat Master",
   "Maître du combat monté",
   "Un cavalier ennemi blessé par ce guerrier monté ajoute +1 à son jet sur la table Oh là là !",
   null
  ]
 ],
 "Spéciales (Elfes Noirs)": [
  [
   "Fury of Khaine",
   "Furie de Khaine",
   "Après avoir mis hors de combat tous ses adversaires, le héros peut faire un mouvement de poursuite de 4 ps ; s'il atteint un ennemi, il compte comme chargeant au tour suivant. Pas pendant le tour adverse.",
   null
  ],
  [
   "Powerful Build",
   "Carrure puissante",
   "Donne accès aux compétences de Force. Interdite à la sorcière ; deux guerriers au plus de la bande peuvent la posséder.",
   null
  ],
  [
   "Fey Quickness",
   "Vivacité féerique",
   "Le héros évite les attaques de corps à corps ou de tir sur 6 ; sur 4+ dans le domaine concerné s'il a aussi Esquive latérale ou Esquive.",
   null
  ],
  [
   "Infiltration",
   "Infiltration",
   "Le héros se déploie après l'adversaire, hors de sa vue et à plus de 12 ps de tout ennemi. Si les deux camps infiltrent, le plus bas sur 1D6 se place en premier.",
   null
  ],
  [
   "Master of Poisons",
   "Maître des poisons",
   "Au lieu de chercher un objet rare, le héros fabrique 1D3-1 doses de Venin noir, à utiliser à la bataille suivante ; elles ne peuvent être ni vendues ni échangées.",
   null
  ]
 ],
 "Spéciales (Elfes sylvains d'Athel Loren)": [
  [
   "Fey",
   "Féerique",
   "Le héros bénéficie d'une sauvegarde de 4+ contre la magie hostile.",
   null
  ],
  [
   "Elven Luck",
   "Chance elfique",
   "Une fois par partie, le héros peut relancer un jet raté.",
   null
  ],
  [
   "Excellent Sight",
   "Vue perçante",
   "Le héros repère les ennemis cachés jusqu'à deux fois son Initiative en pas (redondant avec la règle de bande).",
   null
  ],
  [
   "Seeker",
   "Traqueur",
   "Le héros peut modifier un dé d'exploration de +1 ou -1. Un seul héros elfe de la bande peut avoir cette compétence.",
   null
  ],
  [
   "Infiltration",
   "Infiltration",
   "Le héros se déploie toujours en dernier, n'importe où hors de vue de l'ennemi. Si les deux camps infiltrent, le plus bas sur 1D6 se place en premier.",
   null
  ]
 ],
 "Spéciales (Expédition nipponne)": [
  [
   "Death before Dishonor",
   "Plutôt la mort que le déshonneur",
   "Une fois par combat, s'il doit être retiré par une attaque au corps à corps, le héros porte d'abord une attaque.",
   null
  ],
  [
   "Night Fighter",
   "Combattant de la nuit",
   "Le héros peut courir tout en restant caché.",
   "expedition-nippone/shinobi"
  ],
  [
   "Iaijutsu",
   "Iaijutsu",
   "Quand il est chargé, gagne +1 Attaque contre le chargeur, qui frappe en premier, à sa Force sans autre modificateur (une seule même s'il est chargé par plusieurs).",
   null
  ],
  [
   "Last Stand",
   "Dernier carré",
   "Peut relancer un test de seul contre tous et, s'il est isolé de ses alliés en début de tour, gagne +1 CC ou +1 CT jusqu'à son tour suivant.",
   null
  ],
  [
   "Tea Ceremony",
   "Cérémonie du thé",
   "S'il n'a pas été mis hors de combat, il peut renoncer à chercher un objet rare et payer 10 co : un autre héros gagne 1 XP sur 3+ au D6.",
   null
  ],
  [
   "Blessed by the Kami",
   "Béni des kami",
   "Peut relancer une fois son jet sur le tableau des blessures graves des héros, en gardant le second résultat.",
   null
  ]
 ],
 "Spéciales (Garde de la chapelle bretonnienne)": [
  [
   "Renowned Virtue",
   "Vertu renommée",
   "Apprend une vertu de la liste de la bande de chevaliers bretonniens ; une seule fois.",
   null
  ],
  [
   "Questing Vow",
   "Vœu de quête",
   "Contre un ennemi qui cause la peur (charge, chargé ou au combat), relance un test de Commandement raté, test de déroute compris.",
   "chef"
  ],
  [
   "Shield Bash",
   "Coup de bouclier",
   "Une attaque supplémentaire par tour avec son bouclier ou son écu, à Force -1, comme un gourdin.",
   null
  ],
  [
   "Bulging Muscles",
   "Muscles saillants",
   "Conserve le bonus de Force du fléau et du morgenstern après le premier tour de combat.",
   null
  ],
  [
   "Untiring",
   "Infatigable",
   "Ignore les pénalités de mouvement d'armure à pied ; sa sauvegarde ne peut pas tomber sous 5+ par des moyens non magiques.",
   null
  ]
 ],
 "Spéciales (Gardiens des tombes)": [
  [
   "Drive Chariot",
   "Conduite de char",
   "Indispensable pour charger avec le char squelette : sans elle, le conducteur ne peut pas charger.",
   null
  ]
 ],
 "Spéciales (Gladiateurs)": [
  [
   "Bulging Biceps",
   "Biceps saillants",
   "Ignore la pénalité des armes lourdes et conserve le bonus de Force à chaque round de corps à corps.",
   null
  ],
  [
   "Force of Will",
   "Force de volonté",
   "Quand il perd son dernier PV, le guerrier reste en jeu sur un jet de 1D6 inférieur ou égal à son Endurance, à refaire chaque round avec un malus cumulatif de -1.",
   null
  ],
  [
   "Arms Master",
   "Maître d'armes",
   "Ignore les restrictions des armes difficiles à manier (par exemple morgenstern et rondache, ou deux morgensterns).",
   null
  ],
  [
   "Body Slam",
   "Placage",
   "Au lieu de ses attaques de charge, porte une seule attaque à +1 F et +1 pour toucher, sans bonus d'arme ; critique sur 5+.",
   null
  ],
  [
   "Grizzled Veteran",
   "Vieux briscard",
   "Le guerrier est insensible à la psychologie.",
   null
  ],
  [
   "Ferocious Charge",
   "Charge féroce",
   "Double ses attaques lors du tour où il charge, avec -1 pour toucher ce tour-là.",
   "gladiateurs/dwarf-troll-slayer"
  ],
  [
   "Monster Slayer",
   "Tueur de monstres",
   "Blesse toujours sur 4+ quelle que soit l'Endurance adverse, sauf si sa Force lui permet un jet plus favorable.",
   "gladiateurs/dwarf-troll-slayer"
  ],
  [
   "Berserker",
   "Forcené",
   "+1 pour toucher au corps à corps lors du tour où il charge ; non cumulable avec Charge féroce.",
   "gladiateurs/dwarf-troll-slayer"
  ]
 ],
 "Spéciales (Gobelins de la forêt)": [
  [
   "Lose Animosity",
   "Fin de l'animosité",
   "Au lieu de choisir une compétence, le brave peut se débarrasser de la règle Animosité.",
   "gobelins-foret/brave"
  ]
 ],
 "Spéciales (Gobelins de la nuit)": [
  [
   "Ded Shooty",
   "Tir d'enfer",
   "Ajoute 6 ps à la portée des armes de tir (pas des filets).",
   null
  ],
  [
   "Sneaky Git",
   "Sale fourbe",
   "Après tous les déploiements, déplace jusqu'à D3 membres de la bande.",
   "chef"
  ],
  [
   "Infiltrate",
   "Infiltration",
   "Se déploie après l'adversaire, hors de vue et à plus de 12 ps de l'ennemi.",
   null
  ],
  [
   "Netter",
   "Lanceur de filet",
   "Peut charger en lançant un filet : s'il touche et que la cible ne se libère pas, elle est à terre et la charge aboutit ; sinon la charge échoue.",
   null
  ]
 ],
 "Spéciales (Guerriers des Ombres)": [
  [
   "Infiltration",
   "Infiltration",
   "Le héros se déploie après l'adversaire, hors de sa vue et à plus de 12 ps de tout ennemi. Si les deux camps infiltrent, le plus bas sur 1D6 se place en premier.",
   null
  ],
  [
   "See in Shadows",
   "Vision dans l'ombre",
   "Le héros peut tenter de charger un ennemi qu'il ne voit pas, avec un jet de charge normal, si son mouvement le permet.",
   null
  ],
  [
   "Hide in Shadows",
   "Se fondre dans l'ombre",
   "Un ennemi qui cherche à repérer ce héros caché divise d'abord son Initiative par deux.",
   null
  ],
  [
   "Sniper",
   "Tireur embusqué",
   "Le héros peut tirer ou lancer un sort en restant caché ; si la cible survit, elle peut tenter un test d'Initiative pour le repérer.",
   null
  ],
  [
   "Powerful Build",
   "Carrure puissante",
   "Donne accès aux compétences de Force. Interdite au tisseur d'ombres ; deux elfes au plus de la bande peuvent la posséder.",
   null
  ],
  [
   "Master of Runes",
   "Maître des runes",
   "+1 aux jets de dissipation avec les pierres runiques elfiques ; peut graver l'équipement d'un guerrier, qui pourra relancer une fois par bataille une sauvegarde d'armure ou une parade ratée. Runes à refaire après chaque bataille.",
   "guerriers-ombres/shadow-weaver"
  ]
 ],
 "Spéciales (Halflings)": [
  [
   "Quiet as a Mouse",
   "Discret comme une souris",
   "Pour repérer ce halfling caché, l'ennemi n'utilise que la moitié de son Initiative (arrondie à l'inférieur) en pas.",
   null
  ],
  [
   "Crude Belch",
   "Rot grossier",
   "Au premier round de corps à corps, chaque ennemi au contact fait un test de Commandement ; s'il échoue, il rate sa première attaque.",
   null
  ],
  [
   "Wizened Halfling",
   "Halfling chenu",
   "Les halflings à 6 ps du chef peuvent relancer leurs tests de Commandement ratés, avec le Commandement du chef. Chef uniquement.",
   "chef"
  ],
  [
   "Stealthy",
   "Furtif",
   "Peut se cacher après avoir couru et courir à moins de 8 ps des ennemis s'il commence et finit caché. Voleur uniquement.",
   "halflings/halfling-thief"
  ],
  [
   "Skilled Huntsman",
   "Chasseur habile",
   "Après un tir depuis une cachette, reste caché sur 3+ au D6 ; pas avec les armes à poudre.",
   null
  ],
  [
   "Layers of Fat",
   "Couches de graisse",
   "Sauvegarde de base de 6 quelle que soit la Force adverse, en plus de l'armure.",
   null
  ],
  [
   "Shifty",
   "Fuyant",
   "Quand il est chargé, gagne une attaque bonus qui frappe en premier.",
   null
  ]
 ],
 "Spéciales (Hommes-Lézards)": [
  [
   "Infiltration",
   "Infiltration",
   "Skinks uniquement. Le héros se place n'importe où à plus de 12 ps d'un ennemi et commence la partie caché.",
   null
  ],
  [
   "Great Hunter",
   "Grand chasseur",
   "Skinks uniquement. Les ennemis subissent un -1 supplémentaire pour toucher le héros à couvert.",
   null
  ],
  [
   "Bellowing Battle Roar",
   "Rugissement de guerre",
   "Saurus uniquement. Les ennemis au contact subissent -1 pour toucher lors du premier round de corps à corps.",
   "hommes-lezards/saurus-totem-warrior"
  ],
  [
   "Toughened Hide",
   "Cuir endurci",
   "Saurus uniquement. Le héros n'est mis hors de combat que sur 6+.",
   "hommes-lezards/saurus-totem-warrior"
  ]
 ],
 "Spéciales (Maîtres de l'horreur)": [
  [
   "Surgeon",
   "Chirurgien",
   "Une fois par blessure grave, il peut relancer un des dés du jet de blessure d'un guerrier, mais doit garder le second résultat.",
   "chef"
  ],
  [
   "Alchemist",
   "Alchimiste",
   "En début de partie, il lance un D6 pour une potion aléatoire (+1 E, +1 F, +1 M, un breuvage handicapant, ou +1 F et +1 E avec un risque d'accoutumance).",
   "chef"
  ],
  [
   "Apt Revitalist",
   "Revitaliste habile",
   "Les zombies de la bande gagnent de l'expérience comme des hommes de main humains ordinaires.",
   "chef"
  ],
  [
   "Lunatic",
   "Lunatique",
   "Le héros cause la peur et peut relancer tout test de Commandement raté.",
   null
  ]
 ],
 "Spéciales (Mangeurs d'hommes)": [
  [
   "Master of Arms",
   "Maître d'armes",
   "Peut manier une arme difficile à utiliser avec une arme de base, mais pas deux armes difficiles.",
   null
  ],
  [
   "Crude Belch",
   "Rot immonde",
   "Les ennemis au contact doivent réussir un test de Commandement ou subir -1 pour toucher ce tour ; réutilisable seulement contre un nouvel adversaire.",
   null
  ],
  [
   "Maneater",
   "Mangeur d'hommes",
   "Donne une compétence de la liste Tir ou Érudition ; une seule fois, interdit au guide.",
   null
  ],
  [
   "Bull Charge",
   "Charge du taureau",
   "En charge, une seule attaque à +1 pour toucher qui met l'ennemi à terre si elle touche.",
   null
  ],
  [
   "Dog of War",
   "Chien de guerre",
   "Permet d'engager les francs-tireurs des Mercenaires ; s'il meurt, ils quittent la bande.",
   "chef"
  ],
  [
   "Bellowing Roar",
   "Rugissement tonitruant",
   "Permet de relancer le premier test de déroute raté.",
   "chef"
  ]
 ],
 "Spéciales (Maraudeurs du Chaos)": [
  [
   "Chosen of Chaos",
   "Élu du Chaos",
   "Le héros devient un guerrier du Chaos : il utilise les maximums des guerriers du Chaos et la liste d'équipement des héros.",
   null
  ],
  [
   "Tattooed Body",
   "Corps tatoué",
   "L'Œil des dieux se déclenche sur 10+ au lieu de 12+ (11+ pour un chef norse).",
   "chef"
  ],
  [
   "Sweeping Blow",
   "Coup circulaire",
   "Avec une arme lourde, après avoir mis un ennemi hors de combat, fait une attaque supplémentaire contre une autre figurine au contact ; nécessite Costaud.",
   null
  ],
  [
   "Mutant",
   "Mutant",
   "Achète une mutation (liste des Possédés) ; un héros marqué d'Onogal peut prendre une Bénédiction de Nurgle. Peut être pris plusieurs fois.",
   null
  ],
  [
   "Heart of the Warrior",
   "Cœur du guerrier",
   "Relance les tests de déroute ratés et est immunisé à la peur et aux tests de combat seul.",
   "chef"
  ]
 ],
 "Spéciales (Marcheurs des rêves, culte de Morr)": [
  [
   "Inspiring Presence",
   "Présence inspirante",
   "Les fidèles de Morr peuvent utiliser le Commandement du Rêveur jusqu'à 12 ps au lieu de 6.",
   "marcheurs-reves/dreamer"
  ],
  [
   "Fanatical",
   "Fanatique",
   "Une fois par partie, relance d'un test de déroute raté si le Rêveur n'est ni hors de combat, ni sonné, ni à terre.",
   "marcheurs-reves/dreamer"
  ],
  [
   "Inured to Horror",
   "Endurci à l'horreur",
   "Immunisé à la Peur et ne fait jamais de test « Seul contre tous ».",
   null
  ],
  [
   "Blessed by Morr",
   "Béni de Morr",
   "Un sort lancé par un mort-vivant qui vise ce héros est annulé sur 4+ au D6 (pour lui seul).",
   null
  ]
 ],
 "Spéciales (Moines guerriers de Cathay)": [
  [
   "Energy Focus",
   "Concentration d'énergie",
   "À mains nues, il peut renoncer à des Attaques pour gagner +1 en Force par Attaque sacrifiée.",
   "moines-cathay/dragon-monk"
  ],
  [
   "Lightning Speed",
   "Vitesse de l'éclair",
   "Triple son Mouvement en course ou en charge et peut courir même avec des ennemis à 8 ps ou moins.",
   "moines-cathay/dragon-monk"
  ],
  [
   "Leap of Faith",
   "Saut de la foi",
   "Ne peut pas être intercepté en chargeant ; peut quitter un combat d'un bond sans test de Commandement et déclarer une charge bondissante le même tour.",
   "moines-cathay/dragon-monk"
  ],
  [
   "Human Shield",
   "Bouclier humain",
   "Face à au moins deux ennemis, il peut saisir le premier après son attaque (test d'Initiative) pour que le second le frappe à sa place.",
   "moines-cathay/dragon-monk"
  ],
  [
   "Warmonger",
   "Fauteur de guerre",
   "Avant la bataille, sur un test de Commandement réussi, recrute 1D3+1 paysans enragés pour la partie ; ils peuvent dépasser l'effectif maximum et ont la haine.",
   "chef"
  ]
 ],
 "Spéciales (Morts sans repos)": [
  [
   "Corpse Bomb",
   "Bombe de cadavre",
   "Désigne en secret un zombie qui explose quand il charge ou est chargé : D3 touches de F4 sur toutes les figurines à D6 ps ; une seule bombe à la fois.",
   null
  ],
  [
   "Deathspeaker",
   "Parole de mort",
   "Déploie D3 zombies gratuits pour la bataille, hors limite d'effectif.",
   null
  ],
  [
   "Wraith Touch",
   "Toucher spectral",
   "Remplace ses attaques par une attaque à mains nues qui blesse automatiquement ; la liche récupère alors 1 PV perdu. Sans effet sur possédés et morts-vivants.",
   null
  ],
  [
   "Forbidden Rite",
   "Rite interdit",
   "S'il n'a pas cherché d'objets rares, commence la bataille avec D3+1 bonus de +1 à ses jets de lancement de sorts.",
   null
  ],
  [
   "Summoner",
   "Invocateur",
   "Augmente de 1 l'effectif maximum de la bande.",
   null
  ]
 ],
 "Spéciales (Nains du Chaos)": [
  [
   "True Grit",
   "Cran véritable",
   "Ses jets de blessure donnent : 1-3 à terre, 4-5 sonné, 6 hors de combat.",
   null
  ],
  [
   "Extra Tough",
   "Extrêmement résistant",
   "Il peut relancer son jet de blessure grave après la partie et doit garder le second résultat.",
   null
  ],
  [
   "Unlimited Hatred",
   "Haine sans limite",
   "Il hait tous ses ennemis.",
   null
  ],
  [
   "Thick Skull",
   "Crâne épais",
   "Il a une sauvegarde de 3+ contre « sonné » (2+ avec un casque, au lieu de la règle normale du casque) ; réussie, il est seulement à terre.",
   null
  ]
 ],
 "Spéciales (Nains noirs)": [
  [
   "Extra Tough",
   "Coriace",
   "Après une partie où il a été mis hors de combat, il peut relancer une fois le dé de blessure grave ; le second résultat s'applique.",
   null
  ],
  [
   "Chaos Engineer",
   "Ingénieur du Chaos",
   "+3 pour rechercher une armure du Chaos (combinaison mécanique comprise) ou une arme d'obsidienne, sans les règles Rareté et Don du Chaos ; il ne peut jamais porter d'armure du Chaos.",
   null
  ],
  [
   "Thick Skull",
   "Crâne épais",
   "Sauvegarde de 3+ contre l'étourdissement (2+ avec un casque) : s'il la réussit, il est seulement mis à terre.",
   null
  ],
  [
   "Resource Hunter",
   "Chercheur de ressources",
   "Peut modifier de +1 ou -1 un jet sur le tableau d'exploration.",
   null
  ],
  [
   "Tyrant",
   "Tyran",
   "La bande relance les tests de déroute ratés tant que le chef n'est ni à terre ni sonné ; si le chef est mis hors de combat, test de déroute immédiat.",
   "chef"
  ],
  [
   "True Grit",
   "Cran",
   "Sur le tableau des blessures : 1-3 à terre, 4-5 sonné, 6 hors de combat.",
   null
  ]
 ],
 "Spéciales (Nécrarques, voleurs d'âmes)": [
  [
   "Pupil of Nagash",
   "Disciple de Nagash",
   "Tire immédiatement un sort sur les Parchemins de Nagash ; peut reprendre cette compétence plus tard au lieu d'une autre.",
   null
  ],
  [
   "Master of the Black Arts",
   "Maître des arts noirs",
   "La portée de tous ses sorts est augmentée de moitié.",
   null
  ],
  [
   "Pull of Undeath",
   "Emprise de la non-mort",
   "Tant que le Nécrarque est à 4 ps ou moins d'un homme de main mort-vivant, il n'est mis hors de combat que sur un 6 naturel.",
   "chef"
  ]
 ],
 "Spéciales (Norses)": [
  [
   "Barbarian Courage",
   "Courage barbare",
   "Il ne fait jamais de test « seul contre tous » et peut relancer les tests de Peur ratés.",
   null
  ],
  [
   "Battle Tongue",
   "Voix de commandement",
   "Les guerriers à 12 ps (au lieu de 6) peuvent utiliser son Commandement.",
   "chef"
  ],
  [
   "Berserk Charge",
   "Charge berserk",
   "Armé d'une hache ou d'une arme lourde, il relance tous les jets pour toucher ratés lorsqu'il charge.",
   null
  ],
  [
   "Crushing Blow",
   "Coup écrasant",
   "Ses attaques ne peuvent pas être parées.",
   null
  ],
  [
   "Shield Master",
   "Maître du bouclier",
   "Armé d'un bouclier, il peut parer avec, en plus de la sauvegarde de 6+ qu'il procure.",
   null
  ]
 ],
 "Spéciales (Troupe de chasse ogre)": [
  [
   "Crude Belch",
   "Rot grossier",
   "Le héros souffle des vapeurs sur les ennemis au contact : ceux qui ratent un test de Commandement subissent -1 pour toucher ce tour ; réutilisable seulement quand un nouvel ennemi l'engage.",
   null
  ],
  [
   "Scent Hound",
   "Fin limier",
   "Repère les ennemis cachés à deux fois la distance normale (deux fois son Initiative en ps).",
   null
  ],
  [
   "Sabre Trainer",
   "Dresseur de sabre-dents",
   "Quand un sabre-dents qui a commencé son tour à 6 ps du héros obtient 1 pour Indompté, il peut se déplacer de 3D6 ps vers n'importe quelle figurine visible à 12 ps.",
   null
  ],
  [
   "Maneater",
   "Mangeur d'hommes",
   "Ogres seulement : apprend une compétence de la liste Tir ou Érudition ; une seule fois.",
   "ogres-chasseurs/ogre-hunter"
  ],
  [
   "Bull Charge",
   "Charge du taureau",
   "Ogres seulement : en chargeant, peut faire une seule attaque à +1 pour toucher au lieu de ses attaques ; si elle touche, l'ennemi est automatiquement mis à terre.",
   "ogres-chasseurs/ogre-hunter"
  ],
  [
   "Bellowing Roar",
   "Rugissement tonitruant",
   "Chef ogre seulement : relance le premier test de déroute raté.",
   "chef"
  ],
  [
   "Set Traps",
   "Poseur de pièges",
   "Gnoblars seulement : passe un tour à poser un piège au contact ; une figurine passant à 2 ps le déclenche sur 3+ et subit une touche de F4.",
   null
  ],
  [
   "Infiltration",
   "Infiltration",
   "Gnoblars seulement : se déploie après l'adversaire, hors de sa vue et à plus de 12 ps des ennemis.",
   null
  ],
  [
   "Netter",
   "Lanceur de filets",
   "Gnoblars seulement : commence chaque partie avec 3 filets gratuits, perdus à la fin et impossibles à vendre ou céder.",
   null
  ]
 ],
 "Spéciales (Orques noirs)": [
  [
   "Proven Warrior",
   "Guerrier aguerri",
   "Un Jeunot au sang d'Orque noir ayant 25 points d'expérience devient un Orque noir à part entière (règles, équipement, compétences) tout en gardant son titre.",
   "orques-noirs/youngun"
  ],
  [
   "'Ard 'ead",
   "Tête dure",
   "Sauvegarde de 3+ contre l'étourdissement (2+ avec un casque) : un résultat sonné réussi devient « à terre ».",
   null
  ],
  [
   "Waaagh!",
   "Waaagh !",
   "Ajoute D3 ps à sa distance de charge.",
   null
  ],
  [
   "'Ere we go!",
   "C'est parti !",
   "Il n'a pas à faire de test de peur lorsqu'il charge.",
   null
  ],
  [
   "Da Cunnin' Plan",
   "Le plan rusé",
   "Tant que le chef n'est pas hors de combat, la bande peut relancer ses tests de déroute ratés.",
   "chef"
  ],
  [
   "'Eadbasher",
   "Fracasse-crâne",
   "Les résultats « à terre » infligés par ses attaques au corps à corps deviennent « sonné ».",
   null
  ]
 ],
 "Spéciales (Pilleurs de tombes arabéens)": [
  [
   "Sand Worm",
   "Ver des sables",
   "Il peut se cacher en terrain découvert, mais pas à l'intérieur d'un bâtiment.",
   null
  ],
  [
   "Hit and Run",
   "Frapper et fuir",
   "Il peut se déplacer et tirer avec un malus de -2 au lieu de -1.",
   null
  ],
  [
   "Weather Tolerant",
   "Endurci aux intempéries",
   "Les effets météorologiques, comme la chaleur, ne l'affectent pas.",
   null
  ]
 ],
 "Spéciales (Pilleurs de tombes)": [
  [
   "Darkstalker",
   "Rôdeur des ténèbres",
   "Ignore les tests « Seul contre tous » et peut doubler son Initiative pour repérer les figurines cachées.",
   null
  ],
  [
   "Instinctual Violence",
   "Violence instinctive",
   "Pas de test de Peur quand il est chargé par des morts-vivants ; une de ses attaques peut frapper en premier.",
   null
  ],
  [
   "De-animator",
   "Désanimateur",
   "Ignore la règle Insensible à la douleur des morts-vivants et peut les sonner normalement.",
   null
  ],
  [
   "Hardy Constitution",
   "Constitution robuste",
   "Immunisé à toutes les maladies et aux poisons.",
   null
  ],
  [
   "Body Dealer",
   "Trafiquant de corps",
   "Sur 4+, récupère le corps et l'équipement d'un ami tué ; peut tenter de même pour un ennemi par une comparaison d'Initiative avec le chef adverse (égalité : rien ; défaite : il est capturé).",
   null
  ]
 ],
 "Spéciales (Pirates)": [
  [
   "Sea Shanty Singer",
   "Chanteur de shanties",
   "Au début de la phase de corps à corps, il chante pour distraire un ennemi en contact : celui-ci doit réussir un test de Cd ou perdre 1 Attaque ce tour-ci (sans effet sur les morts-vivants et autres créatures non vivantes).",
   null
  ],
  [
   "Sea Legs",
   "Pied marin",
   "Lors d'une chute, il peut ignorer les D3 touches sur 4+ ; près d'un bord, il relance le test d'Initiative pour ne pas tomber quand il est mis à terre ou sonné.",
   null
  ],
  [
   "Cutlass Master",
   "Maître du sabre",
   "Armé d'une épée, il pare sur un résultat égal (et non seulement supérieur) au jet pour toucher adverse, s'il est à couvert ou à 2 ps ou moins d'un décor.",
   null
  ],
  [
   "Booming Voice",
   "Voix de stentor",
   "Une fois par tour, s'il est debout et hors combat, il permet à un pirate à 8 ps ou moins qui rate un test de fuite ou de ralliement de le relancer.",
   "chef"
  ],
  [
   "Hardy Constitution",
   "Constitution robuste",
   "Il ignore les coups critiques sur 5+.",
   null
  ],
  [
   "Swashbuckler",
   "Bretteur",
   "À la fin d'une phase de corps à corps, s'il est toujours en contact, il peut tenter un test de Cd pour se désengager sans que l'ennemi ne frappe ; en cas d'échec le combat continue.",
   null
  ]
 ],
 "Spéciales (Protectorat de Sigmar)": [
  [
   "Protection of Sigmar",
   "Protection de Sigmar",
   "Tout sort qui l'affecterait est annulé sur 4+ sur 1D6 ; un sort annulé n'affecte alors aucune autre figurine.",
   null
  ],
  [
   "Unshakeable Faith",
   "Foi inébranlable",
   "Le héros est immunisé contre la peur.",
   null
  ],
  [
   "Utter Determination",
   "Détermination absolue",
   "Le prêtre-guerrier peut relancer les tests de déroute ratés.",
   "chef"
  ],
  [
   "Rousing Sermon",
   "Sermon exaltant",
   "Déclaré au début du tour, une fois par partie : le prêtre-guerrier et les figurines amies à 6 ps ou moins gagnent +1 Attaque pendant la phase de corps à corps de ce tour.",
   "chef"
  ],
  [
   "Sigmar's Guidance",
   "Guidance de Sigmar",
   "Le héros peut choisir librement la cible de ses tirs, pas seulement l'ennemi le plus proche.",
   null
  ]
 ],
 "Spéciales (Rangers nains)": [
  [
   "Combat Master",
   "Maître du combat",
   "Ses parades réussissent aussi en cas d'égalité avec le meilleur jet pour toucher adverse ; avec deux armes de parade, il peut parer deux attaques.",
   null
  ],
  [
   "Extra Tough",
   "Extrêmement résistant",
   "Après une partie où il a été mis hors de combat, il peut relancer une fois son jet de blessure grave et garde le nouveau résultat.",
   null
  ],
  [
   "Resource Hunter",
   "Chercheur de ressources",
   "Il peut modifier un dé d'exploration de +1 ou -1.",
   null
  ],
  [
   "True Grit",
   "Cran",
   "Ses jets de blessure sont décalés : 1-3 à terre, 4-5 sonné, 6 hors de combat.",
   null
  ],
  [
   "Thick Skull",
   "Crâne épais",
   "Sauvegarde de 3+ (2+ avec un casque) contre l'étourdissement : un « sonné » sauvegardé devient « à terre ».",
   null
  ],
  [
   "Ferocious Charge",
   "Charge féroce",
   "Il double ses Attaques le tour où il charge, mais subit -1 pour toucher ce tour-là.",
   "rangers-nains/troll-slayer"
  ],
  [
   "Monster Slayer",
   "Tueur de monstres",
   "Il blesse toujours sur 4+, quelle que soit l'Endurance de la cible, sauf si sa Force lui permet de faire mieux.",
   "rangers-nains/troll-slayer"
  ],
  [
   "Berserker",
   "Forcené",
   "+1 pour toucher le tour où il charge.",
   "rangers-nains/troll-slayer"
  ]
 ],
 "Spéciales (Skavens du Clan Moulder)": [
  [
   "Black Hunger",
   "Faim noire",
   "Déclarée au début du tour : +1 Attaque et +1D3 ps de mouvement ce tour, puis le héros subit 1D3 touches de Force 3 sans sauvegarde d'armure à la fin du tour.",
   null
  ],
  [
   "Beastkin",
   "Frère des bêtes",
   "La portée de ses compétences de dressage est doublée à 12 ps.",
   null
  ],
  [
   "Hypnotic Musk",
   "Musc hypnotique",
   "Les animaux et bêtes adverses doivent réussir un test de Commandement pour le charger, sauf charge due à un aiguillonnage ; les montures n'y sont pas sensibles.",
   null
  ],
  [
   "Subjugator of Mankind",
   "Asservisseur des hommes",
   "Avec un attrape-chose, un ennemi qu'il met hors de combat est automatiquement « capturé » au lieu de jeter pour les blessures graves (sauf grandes créatures).",
   null
  ],
  [
   "Twistkin",
   "Engeance tordue",
   "En prenant cette compétence, le héros doit acheter une mutation de la liste des Possédés à moitié prix.",
   "skavens-moulder/stormvermin"
  ]
 ],
 "Spéciales (Skavens du Clan Pestilens)": [
  [
   "Black Hunger",
   "Faim noire",
   "Au début de son tour, il peut gagner +1 A et +D3 ps de mouvement pour le tour ; à la fin du tour, il subit D3 touches de F3 sans sauvegarde d'armure.",
   null
  ],
  [
   "Censer Bearer",
   "Porte-encensoir",
   "Nécessite Faim noire. Il devient sujet à la frénésie mais ne peut utiliser qu'un encensoir au corps à corps.",
   null
  ],
  [
   "Rotten Body",
   "Corps putride",
   "Immunisé au poison et aux maladies ; s'il est mis hors de combat par un test raté en maniant un encensoir, il récupère automatiquement après la bataille.",
   null
  ],
  [
   "Contagious",
   "Contagieux",
   "Nécessite Corps putride. Un modèle qu'il met hors de combat au corps à corps fait un test d'Endurance : un résultat supérieur (ou un 6) inflige une blessure. Sans effet sur morts-vivants et possédés.",
   null
  ],
  [
   "Ignore Pain",
   "Ignorer la douleur",
   "Nécessite la compétence Robuste. Les résultats « sonné » sont traités comme « à terre ».",
   null
  ]
 ],
 "Spéciales (Bande de snotlings)": [
  [
   "Stampede",
   "Ruée",
   "Quand le héros charge, les snotlings ayant chargé la même cible peuvent renoncer à leurs attaques : +1 F par attaque de base sacrifiée, jusqu'à F10.",
   null
  ],
  [
   "Achilles' Heel",
   "Talon d’Achille",
   "Les jets pour blesser de 6 infligent des coups critiques quelle que soit l'Endurance ; avec Ruée, les blessures sur 5+ annulent la sauvegarde.",
   null
  ],
  [
   "Worm",
   "Ver",
   "Pendant le mouvement il peut traverser les murs (charge comprise) ; sur un 1 il reste coincé. Incompatible avec Ruée.",
   "snotlings/snotling-scouts"
  ],
  [
   "Big Bully",
   "Grosse brute",
   "Le héros gagne une compétence de Force. Incompatible avec Ridiculement minuscule.",
   "snotlings/snotling-bigsnotz"
  ],
  [
   "Frustratingly Tiny",
   "Ridiculement minuscule",
   "-1 pour le toucher au corps à corps contre lui ; les ennemis divisent leur Initiative par deux pour le repérer caché. Snotlings uniquement, incompatible avec Grosse brute.",
   null
  ],
  [
   "Mob Master",
   "Maître de la meute",
   "À 2 ps d'un grouillot, lui et le grouillot sont insensibles à la psychologie ; avec Ruée, +1 pour toucher par attaque sacrifiée.",
   null
  ]
 ],
 "Spéciales (Survivants de Strigos)": [
  [
   "Iron Sinews",
   "Nerfs d'acier",
   "Le strigoï gagne +1 en Force.",
   "chef"
  ],
  [
   "Great Thirster",
   "Grande soif",
   "Dès qu'il met un ennemi hors de combat, le strigoï devient frénétique jusqu'à ce qu'il soit à terre, sonné ou hors de combat.",
   "chef"
  ],
  [
   "Curse of the Revenant",
   "Malédiction du revenant",
   "Nécessite Grande soif. Une fois par tour, le strigoï récupère un point de vie perdu sur 5+ sur 1D6.",
   "chef"
  ],
  [
   "Dark Arts",
   "Arts sombres",
   "Le strigoï gagne Savoir arcanique et tire aussitôt un sort des Arts sombres ; il pourra ensuite choisir de nouveaux sorts à la place de compétences.",
   "chef"
  ],
  [
   "Light Fingers",
   "Doigts agiles",
   "Une fois par partie, quand le héros met un ennemi hors de combat, la bande trouve un fragment de pierre magique supplémentaire. Interdite au strigoï.",
   null
  ],
  [
   "Practiced Arm",
   "Bras exercé",
   "Le héros peut lancer deux couteaux par tour sur la même cible, chacun avec +1 au jet de blessure. Interdite au strigoï.",
   null
  ]
 ],
 "Spéciales (Éclaireur elfe)": [
  [
   "Wisdom",
   "Sagesse",
   "Les sorts hostiles n'affectent pas l'elfe sur 4+ sur 1D6.",
   null
  ],
  [
   "Luck",
   "Chance",
   "Une fois par partie, peut relancer un de ses propres jets de dé.",
   null
  ]
 ]
};
// Maximums de caractéristiques des races des suppléments.
export const RACES_SUPPLEMENTS = {
 "elfe": {
  "nom": "Elfe",
  "max": {
   "M": 5,
   "CC": 7,
   "CT": 7,
   "F": 4,
   "E": 4,
   "PV": 3,
   "I": 9,
   "A": 4,
   "Cd": 10
  }
 },
 "skink": {
  "nom": "Skink",
  "max": {
   "M": 6,
   "CC": 5,
   "CT": 6,
   "F": 4,
   "E": 3,
   "PV": 3,
   "I": 7,
   "A": 4,
   "Cd": 8
  }
 },
 "saurus": {
  "nom": "Saurus",
  "max": {
   "M": 4,
   "CC": 6,
   "CT": 0,
   "F": 5,
   "E": 5,
   "PV": 3,
   "I": 4,
   "A": 4,
   "Cd": 10
  }
 },
 "hommeLoup": {
  "nom": "Homme-loup",
  "max": {
   "M": 6,
   "CC": 4,
   "CT": 3,
   "F": 5,
   "E": 4,
   "PV": 3,
   "I": 7,
   "A": 4,
   "Cd": 8
  }
 },
 "maraudeurChaos": {
  "nom": "Maraudeur du Chaos",
  "max": {
   "M": 4,
   "CC": 7,
   "CT": 7,
   "F": 4,
   "E": 4,
   "PV": 3,
   "I": 7,
   "A": 4,
   "Cd": 9
  }
 },
 "liche": {
  "nom": "Liche",
  "max": {
   "M": 5,
   "CC": 4,
   "CT": 4,
   "F": 4,
   "E": 4,
   "PV": 8,
   "I": 6,
   "A": 3,
   "Cd": 10
  }
 },
 "gardeDesTombes": {
  "nom": "Garde des tombes",
  "max": {
   "M": 5,
   "CC": 5,
   "CT": 5,
   "F": 4,
   "E": 4,
   "PV": 4,
   "I": 5,
   "A": 4,
   "Cd": 10
  }
 },
 "nainDuChaos": {
  "nom": "Nain du Chaos",
  "max": {
   "M": 3,
   "CC": 7,
   "CT": 6,
   "F": 4,
   "E": 5,
   "PV": 3,
   "I": 5,
   "A": 4,
   "Cd": 10
  }
 },
 "centaureTaureau": {
  "nom": "Centaure-taureau",
  "max": {
   "M": 8,
   "CC": 7,
   "CT": 6,
   "F": 5,
   "E": 5,
   "PV": 4,
   "I": 6,
   "A": 5,
   "Cd": 10
  }
 },
 "necrarque": {
  "nom": "Vampire nécrarque",
  "max": {
   "M": 6,
   "CC": 4,
   "CT": 4,
   "F": 6,
   "E": 6,
   "PV": 4,
   "I": 9,
   "A": 3,
   "Cd": 10
  }
 },
 "gnoblar": {
  "nom": "Gnoblar",
  "max": {
   "M": 4,
   "CC": 5,
   "CT": 6,
   "F": 3,
   "E": 4,
   "PV": 3,
   "I": 6,
   "A": 4,
   "Cd": 7
  }
 },
 "snotling": {
  "nom": "Snotling",
  "max": {
   "M": 4,
   "CC": 4,
   "CT": 4,
   "F": 3,
   "E": 3,
   "PV": 2,
   "I": 9,
   "A": 4,
   "Cd": 6
  }
 }
};
// Francs-tireurs (tools/bsdata/francs-tireurs*.json) et groupes de bandes de leurs employeurs.
export const FRANCS_TIREURS = [
 {
  "id": "francs-tireurs/pit-fighter",
  "nom": "Gladiateur",
  "categorie": "franc",
  "cout": 30,
  "prime": 30,
  "solde": 15,
  "valeur": 22,
  "min": 0,
  "max": 1,
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
   "Cd": "7"
  },
  "regles": [
   {
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
   },
   {
    "nom": "Gantelet à pointes",
    "resume": "Compte à la fois comme une rondache et comme une arme additionnelle. Vos héros ne peuvent pas apprendre à s'en servir."
   }
  ],
  "competences": [
   "Combat",
   "Vitesse",
   "Force"
  ],
  "equipementDepart": [
   "Morgenstern",
   "Gantelet à pointes",
   "Casque"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Morgenstern",
      "cout": 0
     },
     {
      "nom": "Gantelet à pointes",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Armures",
    "objets": [
     {
      "nom": "Casque",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "sauf": [
    "@morts-vivants",
    "@skavens"
   ]
  },
  "soldeSi": [],
  "effets": {},
  "race": "humain",
  "sansProgression": false,
  "source": "Livre de règles, p. 148"
 },
 {
  "id": "francs-tireurs/ogre-bodyguard",
  "nom": "Ogre",
  "categorie": "franc",
  "cout": 80,
  "prime": 80,
  "solde": 30,
  "valeur": 25,
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
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
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
  "competences": [
   "Combat",
   "Force"
  ],
  "equipementDepart": [
   "Arme lourde",
   "Armure légère"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Arme lourde",
      "cout": 0
     },
     {
      "nom": "Épée",
      "cout": 0
     },
     {
      "nom": "Hache",
      "cout": 0
     },
     {
      "nom": "Gourdin",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Armures",
    "objets": [
     {
      "nom": "Armure légère",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "sauf": [
    "@skavens"
   ]
  },
  "soldeSi": [],
  "effets": {},
  "race": "ogre",
  "sansProgression": false,
  "source": "Livre de règles, p. 148"
 },
 {
  "id": "francs-tireurs/halfling-scout",
  "nom": "Halfling",
  "categorie": "franc",
  "cout": 15,
  "prime": 15,
  "solde": 5,
  "valeur": 5,
  "min": 0,
  "max": 1,
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
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
   },
   {
    "nom": "Cuistot",
    "resume": "Une bande avec un halfling peut compter une figurine de plus que sa taille maximale (pas un héros de plus)."
   }
  ],
  "competences": [
   "Vitesse",
   "Tir"
  ],
  "equipementDepart": [
   "Arc",
   "Dague",
   "Casserole"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Dague",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Armes de tir",
    "objets": [
     {
      "nom": "Arc",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Armures",
    "objets": [
     {
      "nom": "Casserole",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "sauf": [
    "@skavens",
    "@morts-vivants",
    "possedes"
   ]
  },
  "soldeSi": [],
  "effets": {
   "effectifMax": 1
  },
  "race": "halfling",
  "sansProgression": false,
  "source": "Livre de règles, p. 149"
 },
 {
  "id": "francs-tireurs/warlock",
  "nom": "Mage",
  "categorie": "franc",
  "cout": 30,
  "prime": 30,
  "solde": 15,
  "valeur": 16,
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
   "I": "4",
   "A": "1",
   "Cd": "8"
  },
  "regles": [
   {
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
   },
   {
    "nom": "Sorcier (Magie mineure)",
    "resume": "Le magicien est un sorcier qui utilise la magie mineure."
   }
  ],
  "competences": [
   "Érudition"
  ],
  "equipementDepart": [
   "Bâton"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Bâton",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "sauf": [
    "repurgateurs",
    "soeurs",
    "protectorat-sigmar"
   ]
  },
  "soldeSi": [],
  "effets": {},
  "race": "humain",
  "sansProgression": false,
  "source": "Livre de règles, p. 149"
 },
 {
  "id": "francs-tireurs/freelance-knight",
  "nom": "Chevalier solitaire",
  "categorie": "franc",
  "cout": 50,
  "prime": 50,
  "solde": 20,
  "valeur": 21,
  "min": 0,
  "max": 1,
  "xp": 0,
  "profil": {
   "M": "4",
   "CC": "4",
   "CT": "3",
   "F": "4",
   "E": "3",
   "PV": "1",
   "I": "4",
   "A": "1",
   "Cd": "7"
  },
  "regles": [
   {
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
   }
  ],
  "competences": [
   "Combat",
   "Force"
  ],
  "equipementDepart": [
   "Armure lourde",
   "Bouclier",
   "Lance de cavalerie",
   "Épée"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Lance de cavalerie",
      "cout": 0
     },
     {
      "nom": "Épée",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Armures",
    "objets": [
     {
      "nom": "Armure lourde",
      "cout": 0
     },
     {
      "nom": "Bouclier",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Divers",
    "objets": [
     {
      "nom": "Cheval de guerre",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "seulement": [
    "@mercenaires",
    "repurgateurs"
   ]
  },
  "soldeSi": [],
  "effets": {},
  "race": "humain",
  "sansProgression": false,
  "source": "Livre de règles, p. 150"
 },
 {
  "id": "francs-tireurs/elf-ranger",
  "nom": "Éclaireur elfe",
  "categorie": "franc",
  "cout": 40,
  "prime": 40,
  "solde": 20,
  "valeur": 12,
  "min": 0,
  "max": 1,
  "xp": 0,
  "profil": {
   "M": "5",
   "CC": "4",
   "CT": "5",
   "F": "3",
   "E": "3",
   "PV": "1",
   "I": "6",
   "A": "1",
   "Cd": "8"
  },
  "regles": [
   {
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
   },
   {
    "nom": "Traqueur",
    "resume": "Si le guerrier n'est pas mis hors de combat, il peut modifier de +1 ou -1 un dé d'exploration après la bataille."
   },
   {
    "nom": "Vue perçante",
    "resume": "Les elfes repèrent les ennemis cachés à une distance égale au double de leur Initiative en pas."
   }
  ],
  "competences": [
   "Tir",
   "Vitesse",
   "Spéciales (Éclaireur elfe)"
  ],
  "equipementDepart": [
   "Arc elfique",
   "Épée",
   "Cape elfique"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Épée",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Armes de tir",
    "objets": [
     {
      "nom": "Arc elfique",
      "cout": 0
     }
    ]
   },
   {
    "categorie": "Divers",
    "objets": [
     {
      "nom": "Cape elfique",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "seulement": [
    "@mercenaires",
    "repurgateurs"
   ]
  },
  "soldeSi": [
   {
    "siRace": "nain",
    "solde": 40
   }
  ],
  "effets": {},
  "race": "elfe",
  "sansProgression": false,
  "source": "Livre de règles, p. 150"
 },
 {
  "id": "francs-tireurs/dwarf-troll-slayer",
  "nom": "Tueur de trolls nain",
  "categorie": "franc",
  "cout": 25,
  "prime": 25,
  "solde": 10,
  "valeur": 12,
  "min": 0,
  "max": 1,
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
  "regles": [
   {
    "nom": "Franc-tireur",
    "resume": "Mercenaire engagé contre une prime puis une solde après chaque partie (sinon il part). Il ne compte pas dans l'effectif maximum ni parmi les héros, garde son équipement sans en acheter d'autre, un seul de chaque type par bande ; blessures comme un homme de main, progressions sur le tableau des héros."
   },
   {
    "nom": "Vœu de mort",
    "resume": "Le Tueur cherche une fin glorieuse : insensible à la psychologie, il n'a jamais à tester lorsqu'il combat seul."
   },
   {
    "nom": "Durs à cuire",
    "resume": "Sur le tableau des blessures, 1-2 = à terre, 3-5 = sonné, 6 = hors de combat."
   },
   {
    "nom": "Tête dure",
    "resume": "Les Nains ignorent les règles spéciales des masses, gourdins et autres armes contondantes utilisées contre eux."
   }
  ],
  "competences": [
   "Combat",
   "Force",
   "Spéciales (Tueurs de trolls)"
  ],
  "equipementDepart": [
   "Hache",
   "Hache"
  ],
  "equipement": [
   {
    "categorie": "Armes de corps à corps",
    "objets": [
     {
      "nom": "Hache",
      "cout": 0
     },
     {
      "nom": "Arme lourde",
      "cout": 0
     }
    ]
   }
  ],
  "employeurs": {
   "seulement": [
    "@mercenaires",
    "repurgateurs"
   ]
  },
  "soldeSi": [
   {
    "siRace": "elfe",
    "solde": 20
   }
  ],
  "effets": {},
  "race": "nain",
  "sansProgression": false,
  "source": "Livre de règles, p. 151"
 }
];
export const GROUPES_BANDES = {
 "mercenaires": [
  "reikland",
  "middenheim",
  "marienburg",
  "averland",
  "ostland",
  "miragliano",
  "remas",
  "trantio"
 ],
 "skavens": [
  "skavens",
  "skavens-pestilens",
  "skavens-moulder"
 ],
 "morts-vivants": [
  "morts-vivants",
  "gardiens-tombes",
  "necrarques",
  "morts-sans-repos",
  "cavalcade-maudite"
 ],
 "chaos": [
  "possedes",
  "hommes-betes",
  "carnaval",
  "nains-du-chaos",
  "nains-noirs",
  "maraudeurs-chaos",
  "cour-plaisirs",
  "chasseurs-cornus"
 ],
 "elfes": [
  "elfes-noirs",
  "guerriers-ombres",
  "druchii",
  "elfes-sylvains"
 ],
 "nains": [
  "nains",
  "rangers-nains",
  "culte-tueurs"
 ],
 "orques": [
  "orques",
  "orques-noirs",
  "gobelins-foret",
  "gobelins-nuit",
  "snotlings"
 ],
 "lezards": [
  "hommes-lezards"
 ]
};
