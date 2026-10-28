// Catalogo. Il file e' JSON valido dentro window.CATALOG = ...;
// Prezzi in euro. letter:true = si puo' spedire in lettera. stk = quanti stickers contiene l'opzione.
window.CATALOG = {
 "config": {
  "currency": "EUR",
  "minOrder": 5,
  "freeShippingFrom": 50,
  "shipping": {
   "inpost": {
    "price": 5
   },
   "brt": {
    "price": 7.5
   },
   "letter": {
    "price": 3,
    "maxStickers": 50,
    "maxObjects": 2
   }
  }
 },
 "categories": [
  {
   "id": "offerte",
   "it": [
    "Box & offerte",
    "Prendi tanto, spendi meno."
   ],
   "en": [
    "Boxes & deals",
    "Buy more, spend less."
   ]
  },
  {
   "id": "stickers",
   "it": [
    "Stickers",
    "Quaranta grafiche in carta. Collezionali tutti."
   ],
   "en": [
    "Stickers",
    "Forty paper designs. Collect them all."
   ]
  },
  {
   "id": "tubini",
   "it": [
    "Tubini",
    "Acciaio con collanina."
   ],
   "en": [
    "Tubes",
    "Steel, with a little chain."
   ]
  },
  {
   "id": "schede",
   "it": [
    "Schede e santini",
    "Schede in metallo, tessere e santini."
   ],
   "en": [
    "Cards & saints",
    "Metal cards, passes and holy cards."
   ]
  },
  {
   "id": "pianali",
   "it": [
    "Pianali",
    "Le basi per rollare."
   ],
   "en": [
    "Trays",
    "Rolling bases."
   ],
   "subs": [
    {
     "id": "warner",
     "it": "Warner Bros",
     "en": "Warner Bros"
    },
    {
     "id": "xtc",
     "it": "XTC Art",
     "en": "XTC Art"
    },
    {
     "id": "grafiche",
     "it": "Grafiche",
     "en": "Graphics"
    }
   ]
  },
  {
   "id": "clipper",
   "it": [
    "Clipper",
    "Clipper personalizzati con stampe UV DTF e portaclipper."
   ],
   "en": [
    "Lighters",
    "Custom UV DTF lighters and lighter holders."
   ]
  },
  {
   "id": "cartine",
   "it": [
    "Cartine e filtrini",
    "Linea Elements."
   ],
   "en": [
    "Papers & filters",
    "Elements line."
   ]
  },
  {
   "id": "merch",
   "it": [
    "Merch e varie",
    "T-shirt, manifesti e accessori."
   ],
   "en": [
    "Merch & misc",
    "T-shirts, posters and accessories."
   ]
  }
 ],
 "products": [
  {
   "tags": [],
   "letter": false,
   "id": "box-400-stickers",
   "name": "Box 400 stickers in carta",
   "cat": "offerte",
   "featured": true,
   "desc": [
    "400 stickers in carta, tutti diversi.",
    "400 paper stickers, all different."
   ],
   "options": [
    {
     "l": [
      "Box",
      "Box"
     ],
     "price": 20
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-too-fast-for-polizia",
   "name": "Too fast for polizia",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-pippa-bag",
   "name": "Pippa bag",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-degrado-da-rave",
   "name": "Degrado da rave",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-rave-da-degrado",
   "name": "Rave da degrado",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-amici-amici",
   "name": "Amici amici",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-scuola-gran-sasso",
   "name": "Scuola Gran Sasso",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-merde",
   "name": "Merde",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-non-indurci-instazione",
   "name": "Non indurci instazione",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-buongiorno-un-cazzo",
   "name": "Buongiorno un cazzo",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [
    "nuovo"
   ],
   "letter": true,
   "id": "sticker-fotocopia-della-merda",
   "name": "Fotocopia della merda",
   "cat": "stickers",
   "variants": [
    {
     "it": "Nuovo",
     "en": "New"
    },
    {
     "it": "Classico",
     "en": "Classic"
    }
   ],
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-paga-i-buffi",
   "name": "Paga i buffi",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-naseruola",
   "name": "Naseruola",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-banconote",
   "name": "Banconote",
   "cat": "stickers",
   "variants": [
    {
     "it": "20 €",
     "en": "20 €"
    },
    {
     "it": "50 €",
     "en": "50 €"
    }
   ],
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-crack-norris",
   "name": "Crack Norris",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-se-squirti-ti-sposo",
   "name": "Se squirti ti sposo",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-tekno-industriale",
   "name": "Tekno industriale",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-xanax",
   "name": "Xanax",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-eurospeed",
   "name": "Eurospeed",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-la-goccia-che-fa-traboccare-il-vaso",
   "name": "La goccia che fa traboccare il vaso",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-hoffman-2000",
   "name": "Hoffman 2000",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-pippa-di-meno",
   "name": "Pippa di meno",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-giovanni-raglia",
   "name": "Giovanni Raglia",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-il-naso-bianco-fa-parte-del-outfit",
   "name": "Il naso bianco fa parte del outfit",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-chicche-del-mulino-bianco",
   "name": "Chicche del Mulino Bianco",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-piketch",
   "name": "Piketch",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-da-capezzolo-a-capezzolo",
   "name": "Da capezzolo a capezzolo",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-narici-trafficate",
   "name": "Narici trafficate",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [
    "acab"
   ],
   "letter": true,
   "id": "sticker-sonic-acab",
   "name": "Sonic ACAB",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-ketch-woman",
   "name": "Ketch Woman",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [
    "acab"
   ],
   "letter": true,
   "id": "sticker-acab",
   "name": "ACAB",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-khole",
   "name": "Khole",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-chi-vuole-intendere-intenda",
   "name": "Chi vuole intendere intenda",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-voi-stendete-noi-stiriamo",
   "name": "Voi stendete noi stiriamo",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-one-pezzo",
   "name": "One pezzo",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-la-botta-che-fa-traboccare-il-naso",
   "name": "La botta che fa traboccare il naso",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [
    "uv"
   ],
   "letter": true,
   "id": "sticker-attenti-al-cane",
   "name": "Attenti al cane",
   "cat": "stickers",
   "variants": [
    {
     "it": "Carta",
     "en": "Paper"
    },
    {
     "it": "UV",
     "en": "UV"
    }
   ],
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "sticker-ok-il-pezzo-e-giusto",
   "name": "Ok il pezzo è giusto",
   "cat": "stickers",
   "options": [
    {
     "l": [
      "1 sticker",
      "1 sticker"
     ],
     "price": 0.5,
     "stk": 1
    },
    {
     "l": [
      "5 stickers",
      "5 stickers"
     ],
     "price": 1,
     "stk": 5
    },
    {
     "l": [
      "10 stickers",
      "10 stickers"
     ],
     "price": 2,
     "stk": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tubino-zebrato",
   "name": "Tubino zebrato",
   "cat": "tubini",
   "desc": [
    "Tubino in acciaio con collanina.",
    "Steel tube with a little chain."
   ],
   "variants": [
    {
     "it": "Giallo",
     "en": "Yellow"
    },
    {
     "it": "Bianco",
     "en": "White"
    }
   ],
   "options": [
    {
     "l": [
      "Tubino",
      "Tube"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tubino-pitonato",
   "name": "Tubino pitonato",
   "cat": "tubini",
   "desc": [
    "Tubino in acciaio con collanina.",
    "Steel tube with a little chain."
   ],
   "variants": [
    {
     "it": "Rosso",
     "en": "Red"
    },
    {
     "it": "Giallo",
     "en": "Yellow"
    },
    {
     "it": "Verde",
     "en": "Green"
    },
    {
     "it": "Blu",
     "en": "Blue"
    },
    {
     "it": "Viola",
     "en": "Purple"
    }
   ],
   "options": [
    {
     "l": [
      "Tubino",
      "Tube"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tubino-rosa-maculato",
   "name": "Tubino Rosa maculato",
   "cat": "tubini",
   "desc": [
    "Tubino in acciaio con collanina.",
    "Steel tube with a little chain."
   ],
   "options": [
    {
     "l": [
      "Tubino",
      "Tube"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tubino-not-just-for-horses",
   "name": "Tubino Not just for horses",
   "cat": "tubini",
   "desc": [
    "Tubino in acciaio con collanina.",
    "Steel tube with a little chain."
   ],
   "options": [
    {
     "l": [
      "Tubino",
      "Tube"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tubino-tirare-tirare-tirare",
   "name": "Tubino Tirare tirare tirare",
   "cat": "tubini",
   "desc": [
    "Tubino in acciaio con collanina.",
    "Steel tube with a little chain."
   ],
   "options": [
    {
     "l": [
      "Tubino",
      "Tube"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tubino-fetish",
   "name": "Tubino Fetish",
   "cat": "tubini",
   "desc": [
    "Tubino in acciaio con collanina.",
    "Steel tube with a little chain."
   ],
   "options": [
    {
     "l": [
      "Tubino",
      "Tube"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "schede-metallo-collezione-1",
   "name": "Schede in metallo – Collezione 1",
   "cat": "schede",
   "desc": [
    "Kit da 5 schede in metallo.",
    "Kit of 5 metal cards."
   ],
   "options": [
    {
     "l": [
      "Kit 5 schede",
      "5-card kit"
     ],
     "price": 5
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "schede-metallo-collezione-2",
   "name": "Schede in metallo – Collezione 2",
   "cat": "schede",
   "desc": [
    "Kit da 5 schede in metallo.",
    "Kit of 5 metal cards."
   ],
   "options": [
    {
     "l": [
      "Kit 5 schede",
      "5-card kit"
     ],
     "price": 5
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "tessera-non-elettorale",
   "name": "Tessera non elettorale",
   "cat": "schede",
   "options": [
    {
     "l": [
      "Singola",
      "Single"
     ],
     "price": 1
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "scheda-porche-madonne",
   "name": "Scheda Porche madonne",
   "cat": "schede",
   "options": [
    {
     "l": [
      "Singola",
      "Single"
     ],
     "price": 1
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "schede-coppia-bel-colpo",
   "name": "Schede coppia – Bel colpo",
   "cat": "schede",
   "desc": [
    "Coppia di schede.",
    "Pair of cards."
   ],
   "options": [
    {
     "l": [
      "Coppia",
      "Pair"
     ],
     "price": 2
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "schede-coppia-migliori-raglioni",
   "name": "Schede coppia – Migliori raglioni",
   "cat": "schede",
   "desc": [
    "Coppia di schede.",
    "Pair of cards."
   ],
   "options": [
    {
     "l": [
      "Coppia",
      "Pair"
     ],
     "price": 2
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "santini-collezione-1",
   "name": "Santini – Collezione 1",
   "cat": "schede",
   "desc": [
    "5 santini.",
    "5 holy cards."
   ],
   "options": [
    {
     "l": [
      "5 pezzi",
      "5 pcs"
     ],
     "price": 5
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "santini-collezione-2",
   "name": "Santini – Collezione 2",
   "cat": "schede",
   "desc": [
    "5 santini.",
    "5 holy cards."
   ],
   "options": [
    {
     "l": [
      "5 pezzi",
      "5 pcs"
     ],
     "price": 5
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "santini-collezione-20",
   "name": "Santini – Collezione da 20",
   "cat": "schede",
   "desc": [
    "20 santini.",
    "20 holy cards."
   ],
   "options": [
    {
     "l": [
      "20 pezzi",
      "20 pcs"
     ],
     "price": 18
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-warner-30cm",
   "name": "Pianale Warner Bros 30 cm",
   "cat": "pianali",
   "sub": "warner",
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 30
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-warner-bustina",
   "name": "Pianale Warner Bros bustina",
   "cat": "pianali",
   "sub": "warner",
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 30
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-xtc-heineken",
   "name": "Pianale Heineken",
   "cat": "pianali",
   "sub": "xtc",
   "desc": [
    "Pianale sagomato XTC Art.",
    "Shaped XTC Art tray."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-xtc-punisher",
   "name": "Pianale Punisher",
   "cat": "pianali",
   "sub": "xtc",
   "desc": [
    "Pianale sagomato XTC Art.",
    "Shaped XTC Art tray."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-xtc-chupa-chups",
   "name": "Pianale Chupa Chups",
   "cat": "pianali",
   "sub": "xtc",
   "desc": [
    "Pianale sagomato XTC Art.",
    "Shaped XTC Art tray."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-xtc-mitsubishi",
   "name": "Pianale Mitsubishi",
   "cat": "pianali",
   "sub": "xtc",
   "desc": [
    "Pianale sagomato XTC Art.",
    "Shaped XTC Art tray."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-xtc-teschietto",
   "name": "Pianale Teschietto",
   "cat": "pianali",
   "sub": "xtc",
   "desc": [
    "Pianale sagomato XTC Art.",
    "Shaped XTC Art tray."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 15
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-windows",
   "name": "Pianale Windows",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-trittico",
   "name": "Pianale Trittico",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-inferno",
   "name": "Pianale Inferno",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-attenzione-pezzo-finito",
   "name": "Pianale Attenzione pezzo finito",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-colpi-si-ma-non-di-sonno",
   "name": "Pianale Colpi sì ma non di sonno",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-narici-trafficate",
   "name": "Pianale Narici trafficate",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-ketch-and-carry",
   "name": "Pianale Ketch and carry",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "pianale-stendere",
   "name": "Pianale Stendere",
   "cat": "pianali",
   "sub": "grafiche",
   "desc": [
    "Pianale squadrato con grafica.",
    "Square tray with artwork."
   ],
   "options": [
    {
     "l": [
      "Pianale",
      "Tray"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "clipper-merde",
   "name": "Clipper Merde",
   "cat": "clipper",
   "options": [
    {
     "l": [
      "Clipper",
      "Lighter"
     ],
     "price": 1
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "clipper-personalizzato",
   "name": "Clipper personalizzato",
   "cat": "clipper",
   "desc": [
    "Stampa UV DTF fatta da noi. Scegli il modello.",
    "UV DTF print made by us. Pick your design."
   ],
   "variants": [
    {
     "it": "Modello 01",
     "en": "Design 01"
    },
    {
     "it": "Modello 02",
     "en": "Design 02"
    },
    {
     "it": "Modello 03",
     "en": "Design 03"
    },
    {
     "it": "Modello 04",
     "en": "Design 04"
    },
    {
     "it": "Modello 05",
     "en": "Design 05"
    },
    {
     "it": "Modello 06",
     "en": "Design 06"
    },
    {
     "it": "Modello 07",
     "en": "Design 07"
    },
    {
     "it": "Modello 08",
     "en": "Design 08"
    },
    {
     "it": "Modello 09",
     "en": "Design 09"
    },
    {
     "it": "Modello 10",
     "en": "Design 10"
    },
    {
     "it": "Modello 11",
     "en": "Design 11"
    },
    {
     "it": "Modello 12",
     "en": "Design 12"
    },
    {
     "it": "Modello 13",
     "en": "Design 13"
    },
    {
     "it": "Modello 14",
     "en": "Design 14"
    },
    {
     "it": "Modello 15",
     "en": "Design 15"
    },
    {
     "it": "Modello 16",
     "en": "Design 16"
    },
    {
     "it": "Modello 17",
     "en": "Design 17"
    },
    {
     "it": "Modello 18",
     "en": "Design 18"
    },
    {
     "it": "Modello 19",
     "en": "Design 19"
    },
    {
     "it": "Modello 20",
     "en": "Design 20"
    },
    {
     "it": "Modello 21",
     "en": "Design 21"
    },
    {
     "it": "Modello 22",
     "en": "Design 22"
    },
    {
     "it": "Modello 23",
     "en": "Design 23"
    },
    {
     "it": "Modello 24",
     "en": "Design 24"
    },
    {
     "it": "Modello 25",
     "en": "Design 25"
    },
    {
     "it": "Modello 26",
     "en": "Design 26"
    },
    {
     "it": "Modello 27",
     "en": "Design 27"
    },
    {
     "it": "Modello 28",
     "en": "Design 28"
    },
    {
     "it": "Modello 29",
     "en": "Design 29"
    },
    {
     "it": "Modello 30",
     "en": "Design 30"
    }
   ],
   "options": [
    {
     "l": [
      "Clipper",
      "Lighter"
     ],
     "price": 1
    }
   ]
  },
  {
   "tags": [],
   "letter": true,
   "id": "portaclipper-acciaio",
   "name": "Portaclipper con filo in acciaio",
   "cat": "clipper",
   "options": [
    {
     "l": [
      "Portaclipper",
      "Holder"
     ],
     "price": 5
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "elements-box-cartine",
   "name": "Box cartine Elements",
   "cat": "cartine",
   "options": [
    {
     "l": [
      "Box",
      "Box"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "elements-box-filtrini",
   "name": "Box filtrini Elements",
   "cat": "cartine",
   "options": [
    {
     "l": [
      "Box",
      "Box"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "elements-box-cartine-corte",
   "name": "Box cartine corte Elements",
   "cat": "cartine",
   "options": [
    {
     "l": [
      "Box",
      "Box"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "elements-box-jilter",
   "name": "Box Jilter Elements",
   "cat": "cartine",
   "options": [
    {
     "l": [
      "Box",
      "Box"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "tshirt-eurospeed",
   "name": "T-shirt Eurospeed",
   "cat": "merch",
   "variants": [
    {
     "it": "L",
     "en": "L"
    },
    {
     "it": "XL",
     "en": "XL"
    },
    {
     "it": "XXL",
     "en": "XXL"
    }
   ],
   "options": [
    {
     "l": [
      "T-shirt",
      "T-shirt"
     ],
     "price": 10
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "manifesto",
   "name": "Manifesto",
   "cat": "merch",
   "desc": [
    "Stampa grande formato.",
    "Large format print."
   ],
   "options": [
    {
     "l": [
      "50×70 cm",
      "50×70 cm"
     ],
     "price": 10
    },
    {
     "l": [
      "100×70 cm",
      "100×70 cm"
     ],
     "price": 20
    }
   ]
  },
  {
   "tags": [],
   "letter": false,
   "id": "spray-nasale-10ml",
   "name": "Spray nasale 10 ml (vuoto)",
   "cat": "merch",
   "variants": [
    {
     "it": "Modello 1",
     "en": "Design 1"
    },
    {
     "it": "Modello 2",
     "en": "Design 2"
    },
    {
     "it": "Modello 3",
     "en": "Design 3"
    },
    {
     "it": "Modello 4",
     "en": "Design 4"
    }
   ],
   "options": [
    {
     "l": [
      "Spray",
      "Spray"
     ],
     "price": 3
    }
   ]
  }
 ]
};
