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
 }
];
// Listes de compétences spéciales des suppléments : [anglais, français, résumé, condition].
export const COMPETENCES_SUPPLEMENTS = {
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
 }
};
