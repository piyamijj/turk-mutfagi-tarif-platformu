import { Recipe } from "../types";

const tatlilar: Recipe[] = [
  {
    id: "baklava",
    title: "Geleneksel Fıstıklı Baklava",
    description: "İncecik el açması 40 kat yufkanın arasına serpiştirilen yemyeşil Antep fıstığı ve tam kıvamında şerbetle buluşan, çıtırtısıyla kulaklara, lezzetiyle damaklara hitap eden Türk tatlılarının şahı.",
    mainCategory: "tatlilar",
    subCategory: "serbetli-tatlilar",
    subCategoryLabel: "Şerbetli Tatlılar",
    region: "Gaziantep",
    prepTimeMinutes: 90,
    cookTimeMinutes: 45,
    totalTimeMinutes: 135,
    servings: 12,
    difficulty: "zor",
    mainIngredients: ["un", "antep fıstığı", "tereyağı", "şeker", "nişasta"],
    tags: ["şerbetli", "fıstıklı", "fırın", "geleneksel", "saray-mutfagi"],
    ingredientGroups: [
      {
        groupTitle: "Hamuru İçin",
        items: [
          { item: "Un", amount: "5 su bardağı", note: "elenmiş, baklavalık özel un" },
          { item: "Yumurta", amount: "3 adet", note: "oda sıcaklığında" },
          { item: "Süt", amount: "1 su bardağı", note: "ılık" },
          { item: "Ayçiçek Yağı", amount: "1 çay bardağı" },
          { item: "Yoğurt", amount: "1 yemek kaşığı" },
          { item: "Sirke", amount: "1 yemek kaşığı", note: "üzüm veya elma sirkesi" },
          { item: "Tuz", amount: "1/2 çay kaşığı" }
        ]
      },
      {
        groupTitle: "Açmak ve Katlar Arası İçin",
        items: [
          { item: "Buğday Nişastası", amount: "2 su bardağı", note: "yufkaları açmak için" },
          { item: "Sade Yağ / Tereyağı", amount: "250 gram", note: "eritilmiş, köpüğü ve tortusu tamamen süzülmüş" },
          { item: "Antep Fıstığı", amount: "300 gram", note: "ince çekilmiş, yemyeşil boz fıstık" }
        ]
      },
      {
        groupTitle: "Şerbeti İçin",
        items: [
          { item: "Toz Şeker", amount: "4 su bardağı" },
          { item: "Su", amount: "4 su bardağı" },
          { item: "Limon Suyu", amount: "1 yemek kaşığı", note: "taze sıkılmış" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Geniş bir yoğurma kabına elenmiş unu alın. Ortasını havuz gibi açıp yumurta, süt, ayçiçek yağı, yoğurt, sirke ve tuzu ekleyin. Ortadan başlayarak yavaşça yoğurun. Kulak memesi kıvamından biraz daha sert, pürüzsüz bir hamur elde edene kadar yaklaşık 10-15 dakika yoğurmaya devam edin.",
        tip: "Hamurun iyi yoğrulması ve dinlenmesi, yufkaların yırtılmadan tül gibi incecik açılabilmesi için en kritik adımdır."
      },
      {
        stepNumber: 2,
        instruction: "Yoğurduğunuz hamuru 40 eşit bezeye ayırın. Bezelerin üzerini nemli bir bezle örterek oda sıcaklığında en az 1 saat dinlendirin."
      },
      {
        stepNumber: 3,
        instruction: "Şerbeti hazırlamak için su ve şekeri derin bir tencereye alın. Karıştırarak şekerin erimesini sağlayın ve kaynamaya bırakın. Kaynamaya başladıktan sonra orta ateşte yaklaşık 20-25 dakika kıvam alana kadar kaynatın. Limon suyunu ekleyip 5 dakika daha kaynatın ve ocaktan alıp oda sıcaklığında soğumaya bırakın.",
        tip: "Baklava şerbetinin kıvamı koyu olmalıdır; sulu bir şerbet baklavayı yumuşatır ve çıtırlığını yok eder."
      },
      {
        stepNumber: 4,
        instruction: "Dinlenen bezeleri nişasta serpilmiş tezgahta, oklava yardımıyla tabak büyüklüğünde açın. Ardından her birini bol nişasta kullanarak tül gibi şeffaf, arkası görünecek incelikte olana kadar oklava ile büyütün."
      },
      {
        stepNumber: 5,
        instruction: "Baklava tepsisini eritilmiş sade yağ ile yağlayın. Açtığınız yufkaların ilk 20 katını, aralarına fırça yardımıyla eritilmiş sade yağ serperek tepsiye üst üste dizin. Kenarlardan taşan yufkaları tepsi boyutuna göre kesin."
      },
      {
        stepNumber: 6,
        instruction: "20. kata ulaştığınızda, ince çekilmiş Antep fıstığının tamamını eşit bir şekilde yufkanın üzerine yayın. Üzerine yağ gezdirmeyin ki fıstıklar hamurlaşmasın."
      },
      {
        stepNumber: 7,
        instruction: "Kalan 20 bezeyi de aynı şekilde incecik açıp, yine her katın arasına eritilmiş sade yağ sürerek fıstıkların üzerine dizin. En üst kata en düzgün açılmış yufkayı serin."
      },
      {
        stepNumber: 8,
        instruction: "Baklavayı keskin bir bıçak yardımıyla geleneksel dilimler halinde (havuç dilimi veya kare) kesin. Kalan eritilmiş sıcak sade yağı (tortularından arındırılmış olmalı) baklavanın her yerine eşit gelecek şekilde gezdirin."
      },
      {
        stepNumber: 9,
        instruction: "Önceden ısıtılmış 170°C fırında (alt-üst ayar), baklavanın katları tek tek açılıp üzeri ve altı altın sarısı renk alana kadar yaklaşık 45 dakika yavaş yavaş pişirin. Fırından çıkan sıcak baklavanın üzerine, oda sıcaklığındaki soğuk şerbeti hemen gezdirin. En az 3-4 saat şerbetini çekmesi için dinlendirin."
      }
    ],
    tips: [
      "Sade yağ kullanımı baklavanın çıtırlığı ve kokusu için şarttır. Normal tereyağı kullanacaksanız mutlaka eritip üzerindeki beyaz köpükleri ve dibe çöken süt tortularını süzün, aksi takdirde bu tortular fırında yanarak baklava üzerinde siyah lekeler oluşturur.",
      "Şerbeti dökerken 'sıcak baklavaya soğuk şerbet' kuralına kesinlikle uyun. İkisi de sıcak olursa baklava hamur olur.",
      "Baklavayı servis ederken üzerine ekstra toz Antep fıstığı serpiştirip yanında kaymak veya kesme dondurma ile sunabilirsiniz."
    ],
    calories: 420,
    imageUrl: "/images/recipes/baklava.jpg",
    isFeatured: true,
    isPopular: true
  },
  {
    id: "kazandibi",
    title: "Geleneksel Kazandibi",
    description: "Dibi hafifçe yakılarak karamelize edilmiş, sakızlı ve ipeksi dokusuyla Türk sütlü tatlılarının en sevilen klasiklerinden biri.",
    mainCategory: "tatlilar",
    subCategory: "sutlu-tatlilar",
    subCategoryLabel: "Sütlü Tatlılar",
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    totalTimeMinutes: 50,
    servings: 8,
    difficulty: "orta",
    mainIngredients: ["süt", "şeker", "pirinç unu", "nişasta", "damla sakızı"],
    tags: ["sütlü", "karamelize", "hafif", "geleneksel", "saray-mutfagi"],
    ingredientGroups: [
      {
        groupTitle: "Muhallebisi İçin",
        items: [
          { item: "Süt", amount: "1 litre", note: "tam yağlı çiğ süt tercih edilmeli" },
          { item: "Toz Şeker", amount: "1 su bardağı" },
          { item: "Pirinç Unu", amount: "3 yemek kaşığı" },
          { item: "Mısır Nişastası", amount: "3 yemek kaşığı" },
          { item: "Tereyağı", amount: "1 yemek kaşığı", note: "oda sıcaklığında" },
          { item: "Damla Sakızı", amount: "2 küçük diş", note: "havanda dövülmüş" }
        ]
      },
      {
        groupTitle: "Tepsi Tabanı İçin",
        items: [
          { item: "Tereyağı", amount: "1 yemek kaşığı", note: "tepsiyi yağlamak için" },
          { item: "Pudra Şekeri", amount: "3 yemek kaşığı", note: "tabanın karamelize olması için" },
          { item: "Toz Tarçın", amount: "1 tatlı kaşığı", note: "isteğe bağlı, tabana serpmek için" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Bir tencereye pirinç unu, mısır nişastası ve toz şekeri alın. Üzerine soğuk sütü azar azar ekleyerek pürüzsüz bir kıvam alana kadar çırpma teliyle karıştırın."
      },
      {
        stepNumber: 2,
        instruction: "Tencereyi ocağa alın ve orta ateşte sürekli karıştırarak koyulaşıp göz göz olana kadar pişirin. Kaynamaya başladıktan sonra kısık ateşte 2-3 dakika daha karıştırarak pişirmeye devam edin."
      },
      {
        stepNumber: 3,
        instruction: "Ocaktan almadan hemen önce tereyağını ve havanda dövülmüş damla sakızını ekleyin. Tereyağı tamamen eriyene ve sakız muhallebiye karışana kadar hızlıca karıştırın, ardından ocaktan alın."
      },
      {
        stepNumber: 4,
        instruction: "Isıya dayanıklı, tercihen alüminyum veya ince tabanlı kare bir fırın tepsisinin tabanını 1 yemek kaşığı yumuşak tereyağı ile her yerine eşit gelecek şekilde iyice yağlayın."
      },
      {
        stepNumber: 5,
        instruction: "Yağlanmış tepsinin tabanına pudra şekerini ve isteğe bağlı olarak tarçını eleyerek eşit bir şekilde serpin. Pudra şekerinin yağın üzerine tamamen yapışmasını sağlayın."
      },
      {
        stepNumber: 6,
        instruction: "Hazırladığınız sıcak muhallebiden 2 kepçe kadar alıp tepsinin tabanındaki pudra şekerinin üzerine dökün ve bir spatula yardımıyla ince bir tabaka halinde yayın. Kalan muhallebiyi tencerede sıcak tutun."
      },
      {
        stepNumber: 7,
        instruction: "Tepsiyi ocağın üzerine alın (orta boy gözleri kullanabilirsiniz). Tepsiyi sürekli çevirerek tabandaki pudra şekerinin erimesini ve muhallebiyle birlikte yanıp karamelize olmasını sağlayın. Kenarlardan kahverengi renk sızmaya başladığında ve kokusu geldiğinde taban yanmış demektir (yaklaşık 10-12 dakika)."
      },
      {
        stepNumber: 8,
        instruction: "Taban tamamen karamelize olduğunda tepsiyi ocaktan alın. Tencerede kalan sıcak muhallebiyi yavaşça ve eşit bir şekilde yanmış tabanın üzerine dökün. Üzerini spatula ile düzeltin."
      },
      {
        stepNumber: 9,
        instruction: "Tepsiyi oda sıcaklığına gelene kadar bekletin, ardından buzdolabına kaldırarak en az 4 saat (tercihen bir gece) dinlendirin. Servis yaparken uzun şeritler halinde kesin, spatula yardımıyla rulo yaparak veya katlayarak tabağa alın. Yanık kısmı üstte kalacak şekilde servis edin."
      }
    ],
    tips: [
      "Alüminyum tepsi ısıyı çok hızlı ve eşit ilettiği için kazandibi yapımında en iyi sonucu verir. Borcam veya kalın tabanlı tepsilerde tabanı yakmak çok daha zordur.",
      "Tepsiyi ocakta yakarken tek bir noktada tutmayın, sürekli dairesel hareketlerle çevirin ki her yeri eşit derecede karamelize olsun, aksi takdirde bazı yerler kömürleşirken bazı yerler beyaz kalır.",
      "Rulo yaparken kolaylık olması için tepsiyi buzdolabından çıkardıktan sonra dilimlerin altına hafifçe spatula sokarak gevşetebilirsiniz."
    ],
    calories: 280,
    imageUrl: "/images/recipes/kazandibi.jpg",
    isFeatured: false,
    isPopular: true
  },
  {
  "id": "kunefe",
    description: "Tel kadayıfın iki katman arasında peynirle buluşup şerbetlenerek sıcak servis edildiği, Hatay'ın efsanevi tatlısı.",
  "title": "Künefe",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Hatay",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 15,
  "totalTimeMinutes": 35,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "tel kadayıf",
    "künefe peyniri",
    "tereyağı",
    "toz şeker",
    "su",
    "antep fıstığı"
  ],
  "tags": [
    "tatlı",
    "şerbetli",
    "hatay",
    "yöresel",
    "sıcak tatlı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbet İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "2 su bardağı",
        },
        {
          "item": "Su",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Künefe İçin",
      "items": [
        {
          "item": "Taze Tel Kadayıf",
          "amount": "250 gram",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tereyağı",
          "amount": "150 gram",
          "note": "eritilmiş ve süzülmüş"
        },
        {
          "item": "Künefe Peyniri",
          "amount": "200 gram",
          "note": "tuzsuz, dilimlenmiş"
        },
        {
          "item": "Üzüm Pekmezi",
          "amount": "1 tatlı kaşığı",
          "note": "tepsiyi yağlamak için"
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Toz Antep Fıstığı",
          "amount": "2 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Su ve şekeri tencereye alıp kaynatın. İnmeye yakın limon suyunu ekleyip 5 dakika daha kaynatın ve ılımaya bırakın.",
      "tip": "Şerbetin ılık, tatlının sıcak olması şarttır."
    },
    {
      "stepNumber": 2,
      "instruction": "Kadayıfı bıçakla küçük parçalara kıyın. Eritilmiş tereyağının büyük kısmını ekleyip kadayıfı iyice harmanlayın.",
      "tip": "Kadayıfların yağı eşit emdiğinden emin olun."
    },
    {
      "stepNumber": 3,
      "instruction": "Künefe tepsisini yumuşak tereyağı ve pekmez karışımıyla yağlayın. Kadayıfın yarısını tepsiye taban yapıp sıkıca bastırın.",
      "tip": "Düz tabanlı bir bardakla bastırarak sıkılaştırabilirsiniz."
    },
    {
      "stepNumber": 4,
      "instruction": "Peynirleri kadayıfın üzerine yayın. Kalan kadayıfı peynirin üzerine kapatıp tekrar bastırın.",
      "tip": "Peynirlerin kenarlardan taşmamasına dikkat edin."
    },
    {
      "stepNumber": 5,
      "instruction": "Kısık ateşte tepsiyi sürekli çevirerek altını kızartın. Diğer tarafını çevirip tereyağı sürerek orayı da pişirin.",
      "tip": "Eşit kızarma için tepsiyi ocakta sürekli döndürün."
    },
    {
      "stepNumber": 6,
      "instruction": "Sıcak künefenin üzerine ılık şerbeti dökün. Antep fıstığı serperek sıcak servis edin.",
    }
  ],
  "tips": [
    "Künefe peyniri yerine tuzsuz dil peyniri veya taze lor da tercih edebilirsiniz.",
    "Tepsiye sürülen pekmez, kadayıfın nar gibi eşit kızarmasını sağlar.",
    "Şerbet döküldükten sonra çıtır kalması için bekletilmeden sıcak tüketilmelidir."
  ],
  "calories": 480,
  "imageUrl": "/images/recipes/kunefe.jpg"
},
  {
  "id": "sekerpare",
    description: "Bademle süslenen, şerbete batırılmış küçük ve yumuşak irmikli kurabiyeler.",
  "title": "Şekerpare",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 45,
  "servings": 8,
  "difficulty": "orta",
  "mainIngredients": [
    "un",
    "irmik",
    "tereyağı",
    "pudra şekeri",
    "yumurta",
    "şeker"
  ],
  "tags": [
    "tatlı",
    "şerbetli",
    "klasik",
    "fırın",
    "bayram"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "3 su bardağı",
        },
        {
          "item": "Su",
          "amount": "3 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Hamuru İçin",
      "items": [
        {
          "item": "Tereyağı",
          "amount": "125 gram",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Pudra Şekeri",
          "amount": "1 çay bardağı",
        },
        {
          "item": "İrmik",
          "amount": "1 çay bardağı",
        },
        {
          "item": "Yumurta",
          "amount": "2 adet",
          "note": "birinin sarısı üzeri için ayrılacak"
        },
        {
          "item": "Un",
          "amount": "3 su bardağı",
          "note": "kontrollü ekleyin"
        },
        {
          "item": "Kabartma Tozu",
          "amount": "1 paket",
        },
        {
          "item": "Vanilin",
          "amount": "1 paket",
        },
        {
          "item": "Fındık",
          "amount": "20 adet",
          "note": "üzeri için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Şerbet için su ve şekeri tencereye alıp kaynatın. Kaynayınca limon suyunu ekleyip 10 dakika kısık ateşte pişirin ve soğumaya bırakın.",
      "tip": "Şerbetin tamamen soğumuş olması gerekir."
    },
    {
      "stepNumber": 2,
      "instruction": "Derin bir kapta tereyağı, pudra şekeri, 1 yumurta ve 1 yumurta akını karıştırın. İrmik, vanilin, kabartma tozu ve azar azar unu ekleyip yumuşak bir hamur yoğurun.",
      "tip": "Ele yapışmayan ama yumuşak bir hamur elde etmelisiniz."
    },
    {
      "stepNumber": 3,
      "instruction": "Hamurdan ceviz büyüklüğünde parçalar koparıp yuvarlayın ve yağlanmış tepsiye dizin. Ortalarına birer fındık bastırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Ayrılan yumurta sarısını hamurların üzerine sürün. Önceden ısıtılmış 180 derece fırında 25 dakika kızarana kadar pişirin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Fırından çıkan sıcak tatlının üzerine soğuk şerbeti dökün ve şerbeti çekmesi için en az 2 saat dinlendirin.",
    }
  ],
  "tips": [
    "Tatlı sıcak, şerbet soğuk olmalıdır.",
    "Şerbetini iyice çekmesi için üzerini kapatıp dinlendirebilirsiniz."
  ],
  "calories": 420,
  "imageUrl": "/images/recipes/sekerpare.jpg"
},
  {
  "id": "revani",
    description: "İrmik unundan yapılan, şerbetle ıslatılan hafif ve sünger dokulu bir kek tatlısı.",
  "title": "Revani",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 50,
  "servings": 8,
  "difficulty": "orta",
  "mainIngredients": [
    "yumurta",
    "toz şeker",
    "irmik",
    "un",
    "yoğurt",
    "sıvı yağ",
    "kabartma tozu",
    "limon"
  ],
  "tags": [
    "şerbetli tatlı",
    "klasik",
    "fırın",
    "geleneksel",
    "bayram tatlısı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "3 su bardağı",
        },
        {
          "item": "Su",
          "amount": "3 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Kek Harcı İçin",
      "items": [
        {
          "item": "Yumurta",
          "amount": "3 adet",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Toz Şeker",
          "amount": "1 çay bardağı",
        },
        {
          "item": "Yoğurt",
          "amount": "1 su bardağı",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Sıvı Yağ",
          "amount": "1 çay bardağı",
        },
        {
          "item": "İrmik",
          "amount": "1 su bardağı",
        },
        {
          "item": "Un",
          "amount": "1 su bardağı",
          "note": "elenmiş"
        },
        {
          "item": "Kabartma Tozu",
          "amount": "1 paket",
        },
        {
          "item": "Vanilin",
          "amount": "1 paket",
        },
        {
          "item": "Limon Kabuğu",
          "amount": "1 adet",
          "note": "rendelenmiş"
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Hindistan Cevizi",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Toz Antep Fıstığı",
          "amount": "2 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Şerbet için şeker ve suyu tencereye alın, kaynamaya başlayınca limon suyunu ekleyip 10 dakika kısık ateşte kaynatın ve soğumaya bırakın.",
      "tip": "Keke dökülürken şerbetin tamamen soğuk olması gerekir."
    },
    {
      "stepNumber": 2,
      "instruction": "Karıştırma kabında yumurta ve şekeri beyazlaşıp köpürene kadar mikserle çırpın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Sıvı yağ, yoğurt ve rendelenmiş limon kabuğunu ekleyip çırpmaya devam edin.",
    },
    {
      "stepNumber": 4,
      "instruction": "İrmik, elenmiş un, kabartma tozu ve vanilini ekleyip spatula ile homojen olana kadar karıştırın.",
      "tip": "Kuru malzemeleri ekledikten sonra çok fazla çırpmayın."
    },
    {
      "stepNumber": 5,
      "instruction": "Harç malzemesini yağlanmış borcama dökün ve önceden ısıtılmış 180 derece fırında üzeri kızarana kadar yaklaşık 30 dakika pişirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Fırından çıkan sıcak kekin ilk sıcaklığı geçince (2-3 dakika) soğuk şerbeti üzerine dökün. Şerbeti çekip soğuyunca dilimleyip süsleyerek servis yapın.",
    }
  ],
  "tips": [
    "Kekin iyi kabarması için yumurta ve yoğurdun oda sıcaklığında olmasına özen gösterin.",
    "Şerbet tamamen soğuk, kek ise fırından çıktıktan 2-3 dakika sonra ılık-sıcak olmalıdır.",
    "Şerbetini çeken revaniyi servis etmeden önce en az 2-3 saat buzdolabında dinlendirin."
  ],
  "calories": 340,
  "imageUrl": "/images/recipes/revani.jpg"
},
  {
  "id": "tulumba-tatlisi",
    description: "Kabartılmış hamurun kızartılıp şerbete batırıldığı, çıtır dışı yumuşak içiyle sevilen bir tatlı.",
  "title": "Tulumba Tatlısı",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 30,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 60,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "un",
    "yumurta",
    "tereyağı",
    "nişasta",
    "irmik",
    "şeker",
    "limon"
  ],
  "tags": [
    "şerbetli",
    "tatlı",
    "klasik",
    "kızartma",
    "geleneksel"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbet İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "3 su bardağı",
        },
        {
          "item": "Su",
          "amount": "2 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Hamur İçin",
      "items": [
        {
          "item": "Un",
          "amount": "2 su bardağı",
          "note": "elenmiş"
        },
        {
          "item": "Su",
          "amount": "2 su bardağı",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Yumurta",
          "amount": "3 adet",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Mısır Nişastası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "İrmik",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çimdik",
        }
      ]
    },
    {
      "groupTitle": "Kızartmak İçin",
      "items": [
        {
          "item": "Sıvı Yağ",
          "amount": "3 su bardağı",
          "note": "derin kızartma için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Şeker ve suyu tencereye alıp kaynatın. Kaynamaya başlayınca limon suyunu ekleyin, 10-15 dakika kısık ateşte koyulaşana kadar pişirip tamamen soğumaya bırakın.",
      "tip": "Şerbetin buz gibi soğuk olması tatlının çıtırlığı için şarttır."
    },
    {
      "stepNumber": 2,
      "instruction": "Su, tereyağı ve tuzu tencerede kaynatın. Unu birden ekleyip helva kıvamına gelene kadar karıştırarak 4-5 dakika pişirin ve ılımaya bırakın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Ilıyan hamura yumurtaları teker teker kırarak mikserle iyice yedirin. Nişasta ve irmiği ekleyip pürüzsüz bir hamur elde edin.",
      "tip": "Yumurtaları hamur sıcakken eklerseniz yumurtalar pişebilir, hamurun ılık olmasına dikkat edin."
    },
    {
      "stepNumber": 4,
      "instruction": "Hamuru yıldız uç takılı sıkma torbasına doldurun. Soğuk sıvı yağ dolusu derin tencereye hamurları parmak boyunda sıkıp yağlı makasla kesin.",
      "tip": "Tulumbaları mutlaka SOĞUK yağa sıkın."
    },
    {
      "stepNumber": 5,
      "instruction": "Tencereyi ocağa alıp orta ateşte tulumbalar kabarıp altın sarısı kızarana kadar ara sıra karıştırarak pişirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Kızaran sıcak tulumbaları kevgirle alıp doğrudan soğuk şerbetin içine atın. 2-3 dakika şerbeti çekmesini bekleyip servis tabağına alın.",
    }
  ],
  "tips": [
    "Tatlının dışının çıtır, içinin yumuşak kalması için soğuk şerbet - sıcak tatlı dengesine uyulmalıdır.",
    "İkinci posta tulumbaları kızartmadan önce tenceredeki yağın tamamen soğumasını beklemelisiniz.",
    "Servis ederken üzerini toz antep fıstığı veya hindistan cevizi ile süsleyebilirsiniz."
  ],
  "calories": 420,
  "imageUrl": "/images/recipes/tulumba-tatlisi.jpg"
},
  {
  "id": "kemalpasa-tatlisi",
    description: "Küçük peynirli hamur toplarının şerbette pişirildiği, Bursa'ya özgü hafif bir tatlı.",
  "title": "Kemalpaşa Tatlısı",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Bursa",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 50,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "tuzsuz peynir",
    "irmik",
    "un",
    "yumurta",
    "şeker",
    "tereyağı"
  ],
  "tags": [
    "tatlı",
    "şerbetli",
    "bursa",
    "geleneksel"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Hamuru İçin",
      "items": [
        {
          "item": "Tuzsuz tatlı peyniri",
          "amount": "250 gram",
          "note": "ufalanmış veya rendelenmiş"
        },
        {
          "item": "Yumurta",
          "amount": "2 adet",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
          "note": "oda sıcaklığında"
        },
        {
          "item": "İrmik",
          "amount": "1 su bardağı",
        },
        {
          "item": "Un",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Kabartma tozu",
          "amount": "1 paket",
        }
      ]
    },
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Toz şeker",
          "amount": "3 su bardağı",
        },
        {
          "item": "Su",
          "amount": "3.5 su bardağı",
        },
        {
          "item": "Limon suyu",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Peynir, yumurta ve tereyağını yoğurma kabında pürüzsüz bir kıvam alana kadar karıştırın.",
      "tip": "Peynirin tamamen tuzsuz ve pürüzsüz olması tatlının dokusu için önemlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "İrmik, un ve kabartma tozunu ekleyip ele yapışmayan yumuşak bir hamur yoğurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Hamurdan ceviz büyüklüğünde parçalar koparıp yuvarlayın ve yağlı kağıt serili tepsiye dizin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Önceden ısıtılmış 180 derece fırında üzerileri pembeleşip pişene kadar yaklaşık 25 dakika fırınlayın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Şerbet için su ve şekeri geniş bir tencerede kaynatın, ardından limon suyunu ekleyin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Fırından çıkıp soğuyan tatlıları kaynayan şerbetin içine atın ve şerbeti çekene kadar kısık ateşte 15 dakika pişirin.",
      "tip": "Tatlıların içi şerbeti iyice çekip büyüyene kadar tencerede tutun."
    }
  ],
  "tips": [
    "Tatlıların şerbeti tam çekmesi için şerbet kaynarken tatlıların içine atılıp ocakta pişirilmesi gerekir.",
    "Servis ederken yanında manda kaymağı ve toz antep fıstığı kullanılması lezzetini artırır."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/kemalpasa-tatlisi.jpg"
},
  {
  "id": "kadayif",
    description: "Tel kadayıfın cevizle katmanlanıp şerbetle buluştuğu, çıtır dokulu geleneksel bir tatlı.",
  "title": "Kadayıf",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Gaziantep",
  "prepTimeMinutes": 30,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 70,
  "servings": 8,
  "difficulty": "orta",
  "mainIngredients": [
    "tel kadayıf",
    "tereyağı",
    "ceviz içi",
    "toz şeker",
    "su",
    "limon suyu"
  ],
  "tags": [
    "şerbetli tatlı",
    "fırın",
    "klasik",
    "bayram tatlısı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "4 su bardağı",
        },
        {
          "item": "Su",
          "amount": "4 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Kadayıf İçin",
      "items": [
        {
          "item": "Taze Tel Kadayıf",
          "amount": "500 gram",
        },
        {
          "item": "Tereyağı",
          "amount": "200 gram",
          "note": "eritilmiş, süzülmüş"
        },
        {
          "item": "Ceviz İçi",
          "amount": "1.5 su bardağı",
          "note": "iri çekilmiş"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Su ve şekeri tencereye alıp kaynatın. Kaynamaya başlayınca kısık ateşte 15 dakika pişirip limon suyunu ekleyin, 5 dakika daha kaynatıp ocaktan alın ve tamamen soğutun.",
      "tip": "Kadayıfın çıtır olması için şerbetin tamamen soğuk olması şarttır."
    },
    {
      "stepNumber": 2,
      "instruction": "Eritilmiş tereyağının üzerindeki köpüğü ve dibindeki tortuyu süzün. Kadayıfları tel tel ayırıp havalandırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Süzülmüş tereyağını kadayıfların üzerine gezdirip yağı iyice yedirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Kadayıfın yarısını yağlanmış fırın tepsisine yayıp üzerine düz bir tabanla bastırarak sıkıştırın.",
      "tip": "Başka bir tepsi altıyla bastırmak sıkılaşmayı kolaylaştırır."
    },
    {
      "stepNumber": 5,
      "instruction": "İri çekilmiş ceviz içini ortasına eşit şekilde yayın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Kalan kadayıfı üstüne serip tekrar kuvvetlice bastırarak sıkıştırın.",
    },
    {
      "stepNumber": 7,
      "instruction": "Önceden ısıtılmış 180 derece fırında üzeri ve altı kızarana kadar yaklaşık 35-40 dakika pişirin.",
    },
    {
      "stepNumber": 8,
      "instruction": "Fırından çıkan sıcak kadayıfın üzerine soğuk şerbeti gezdirin. Şerbetini çekmesi için 2 saat dinlendirin.",
    }
  ],
  "tips": [
    "Tereyağının köpüğünü almak tatlının pişerken yanmasını engeller.",
    "Şerbet soğuk, kadayıf ise fırından yeni çıkmış sıcak olmalıdır.",
    "Yanında kaymak veya vanilyalı dondurma ile servis edebilirsiniz."
  ],
  "calories": 480,
  "imageUrl": "/images/recipes/kadayif.jpg"
},
  {
  "id": "kalburabasti",
    description: "Üzeri kalbur deseniyle şekillendirilen, şerbete batırılmış küçük irmikli kurabiyelerin parıltılı ve çıtır bir tatlısı.",
  "title": "Kalburabastı",
  "mainCategory": "tatlilar",
  "subCategory": "serbetli-tatlilar",
  "subCategoryLabel": "Şerbetli Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 25,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 50,
  "servings": 8,
  "difficulty": "orta",
  "mainIngredients": [
    "un",
    "tereyağı",
    "irmik",
    "yoğurt",
    "ceviz",
    "şeker"
  ],
  "tags": [
    "şerbetli",
    "fırın",
    "klasik",
    "bayram",
    "tatlı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "3 su bardağı",
        },
        {
          "item": "Su",
          "amount": "3 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Hamuru İçin",
      "items": [
        {
          "item": "Tereyağı",
          "amount": "125 gram",
          "note": "Oda sıcaklığında"
        },
        {
          "item": "Sıvy Yağ",
          "amount": "1/2 çay bardağı",
        },
        {
          "item": "Yoğurt",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "İrmik",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Un",
          "amount": "2.5 su bardağı",
          "note": "kontrollü ekleyin"
        },
        {
          "item": "Kabartma Tozu",
          "amount": "1/2 paket",
        }
      ]
    },
    {
      "groupTitle": "İç Harcı İçin",
      "items": [
        {
          "item": "Ceviz İçi",
          "amount": "1 su bardağı",
          "note": "iri kıyılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Şeker ve suyu tencereye alıp kaynatın. Kaynayınca limon suyunu ekleyip 10 dakika kısık ateşte pişirin ve soğumaya bırakın.",
      "tip": "Şerbet tamamen soğuk, tatlı sıcak olmalıdır."
    },
    {
      "stepNumber": 2,
      "instruction": "Oda sıcaklığındaki tereyağı, sıvı yağ, yoğurt ve irmiği karıştırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Un ve kabartma tozunu eleyerek ekleyin, yumuşak ve ele yapışmayan bir hamur yoğurun.",
      "tip": "Hamuru çok fazla yoğurup yağını salmasına izin vermeyin."
    },
    {
      "stepNumber": 4,
      "instruction": "Hamurdan ceviz büyüklüğünde parçalar koparıp kalbur veya rende üzerine bastırarak açın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Ortasına iri kıyılmış ceviz koyup kenarlarını ortada birleştirerek kapatın ve ters çevirip tepsiye dizin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Önceden ısıtılmış 180 derece fırında üzerileri altı altın sarısı olana kadar yaklaşık 25 dakika pişirin.",
    },
    {
      "stepNumber": 7,
      "instruction": "Fırından çıkan sıcak tatlının üzerine soğuk şerbeti gezdirin ve şerbeti çekene kadar en az 2 saat dinlendirin.",
    }
  ],
  "tips": [
    "Şerbetin soğuk, tatlının ise fırından ilk çıktığı sıcaklıkta olması hamurlaşmayı önler.",
    "Şekil verirken kalbur yoksa rendenin ince tarafını veya silikon süzgeç kullanabilirsiniz.",
    "Servis ederken üzerini toz antep fıstığı ile süsleyebilirsiniz."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/kalburabasti.jpg"
},
  {
  "id": "firin-sutlac",
    description: "Pirinç ve sütün fırında üstü kızararak pişirildiği, Türk mutfağının en sevilen sütlü tatlısı.",
  "title": "Fırın Sütlaç",
  "mainCategory": "tatlilar",
  "subCategory": "sutlu-tatlilar",
  "subCategoryLabel": "Sütlü Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 55,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "süt",
    "pirinç",
    "toz şeker",
    "mısır nişastası",
    "vanilya"
  ],
  "tags": [
    "sütlü tatlı",
    "fırın",
    "klasik",
    "tatlı",
    "geleneksel"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Süt",
          "amount": "1 litre",
          "note": "tam yağlı"
        },
        {
          "item": "Pirinç",
          "amount": "1 çay bardağı",
          "note": "baldo"
        },
        {
          "item": "Su",
          "amount": "2 su bardağı",
          "note": "pirinci haşlamak için"
        },
        {
          "item": "Toz Şeker",
          "amount": "1 su bardağı",
        },
        {
          "item": "Mısır Nişastası",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Vanilya",
          "amount": "1 paket",
        },
        {
          "item": "Yumurta Sarısı",
          "amount": "1 adet",
          "note": "kızarma için, isteğe bağlı"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Pirinçleri yıkayıp 2 su bardağı suda yumuşayana kadar suyunu çekene yakın haşlayın.",
      "tip": "Pirincin tamamen nişastasını salması için suyunu iyice çektirin."
    },
    {
      "stepNumber": 2,
      "instruction": "Haşlanan pirincin üzerine sütü ve vanilyayı ilave edip karıştırarak kaynamaya bırakın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Nişastayı yarım çay bardağı soğuk su ve yumurta sarısı ile çırpıp açın.",
      "tip": "Pürüzsüz bir kıvam için iyice çırpın."
    },
    {
      "stepNumber": 4,
      "instruction": "Kaynayan sütten bir kepçe alıp nişastalı karışıma ekleyerek ılıtın, ardından tencereye yavaşça dökün.",
    },
    {
      "stepNumber": 5,
      "instruction": "Toz şekeri ekleyin ve koyulaşana kadar yaklaşık 10-15 dakika kısık ateşte pişirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Hazırladığınız sütlacı ısıya dayanıklı fırın kaplarına paylaştırın.",
    },
    {
      "stepNumber": 7,
      "instruction": "Kapları fırın tepsisine dizin ve tepsinin tabanına kapların yarısına gelecek kadar soğuk su ekleyin.",
      "tip": "Tepsideki su sütlaçların kurumasını engeller."
    },
    {
      "stepNumber": 8,
      "instruction": "Önceden 200 derecede ısıtılmış fırının yalnızca üst ızgara bölümünde, üzerleri yanık görünüm alana kadar pişirin.",
      "tip": "Fırının üst rafına yakın koyarak daha hızlı kızarmasını sağlayabilirsiniz."
    }
  ],
  "tips": [
    "Fırından çıkan sütlaçları önce oda sıcaklığına getirin, ardından buzdolabında en az 2-3 saat dinlendirin.",
    "Servis ederken üzerine çekilmiş kavrulmuş fındık ekleyebilirsiniz."
  ],
  "calories": 285,
  "imageUrl": "/images/recipes/firin-sutlac.jpg"
},
  {
  "id": "tavuk-gogsu",
    description: "Tatlı tadı olan özel bir sütlü tatlı; adını, dokusuna benzerlik gösteren tavuk göğsü liflerinden alır.",
  "title": "Tavuk Göğsü",
  "mainCategory": "tatlilar",
  "subCategory": "sutlu-tatlilar",
  "subCategoryLabel": "Sütlü Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 45,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "tavuk göğsü",
    "süt",
    "toz şeker",
    "pirinç unu",
    "mısır nişastası",
    "tereyağı"
  ],
  "tags": [
    "sütlü tatlı",
    "klasik",
    "saray mutfağı",
    "tatlı",
    "geleneksel"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Tavuk göğsü",
          "amount": "150 gram",
          "note": "kemiksiz ve derisiz"
        },
        {
          "item": "Süt",
          "amount": "1 litre",
          "note": "tam yağlı"
        },
        {
          "item": "Toz şeker",
          "amount": "1 su bardağı",
        },
        {
          "item": "Pirinç unu",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Mısır nişastası",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Vanilin",
          "amount": "1 paket",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tavuk göğsünü bol suda yumuşayana kadar haşlayın, soğuduktan sonra tel tel ayırıp koku gitmesi için soğuk suda yıkayıp süzün.",
      "tip": "Tavuk liflerinin çok ince ditilmiş olması tatlının dokusu için önemlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereye süt, toz şeker, pirinç unu ve nişastayı alıp pürüzsüz olana kadar çırpın ve orta ateşte koyulaşana kadar pişirin.",
      "tip": "Topaklanmaması için sürekli karıştırarak pişirin."
    },
    {
      "stepNumber": 3,
      "instruction": "Hazırladığınız ince tavuk liflerini tencereye ekleyin ve mikser yardımıyla 5-10 dakika çırparak tatlının lifli, uzayan bir kıvam almasını sağlayın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Tereyağı ve vanilini ilave edip son kez karıştırın, ıslatılmış tepsiye dökün ve oda sıcaklığında soğutun.",
    },
    {
      "stepNumber": 5,
      "instruction": "Buzdolabında en az 4 saat dinlendirdikten sonra üzerine tarçın serperek dilimleyip servis edin.",
    }
  ],
  "tips": [
    "Tavuk kokusunu tamamen gidermek için haşlanmış eti soğuk suda 2-3 kez yıkayıp süzün.",
    "Tatlının sakız gibi uzayan otantik dokusunu elde etmek için mikserle uzun süre çırpma adımını atlamayın.",
    "Tercihen buzdolabında 1 gece dinlendirilirse dilimlenmesi ve kıvamı çok daha güzel olur."
  ],
  "calories": 220,
  "imageUrl": "/images/recipes/tavuk-gogsu.jpg"
},
  {
  "id": "keskul",
    description: "Badem sütünün pişirilip hindistancevizi ve fıstıkla süslendiği, zarif ve hafif bir muhallebi çeşidi.",
  "title": "Keşkül",
  "mainCategory": "tatlilar",
  "subCategory": "sutlu-tatlilar",
  "subCategoryLabel": "Sütlü Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 35,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "süt",
    "toz badem",
    "pirinç unu",
    "nişasta",
    "toz şeker",
    "yumurta sarısı"
  ],
  "tags": [
    "sütlü tatlı",
    "klasik",
    "saray mutfağı",
    "tatlı",
    "badem"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Keşkül Harcı",
      "items": [
        {
          "item": "Süt",
          "amount": "1 litre",
          "note": "tam yağlı"
        },
        {
          "item": "Toz Şeker",
          "amount": "1 su bardağı",
        },
        {
          "item": "Toz Badem",
          "amount": "1 su bardağı",
          "note": "kabuksuz, ince çekilmiş"
        },
        {
          "item": "Pirinç Unu",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Buğday Nişastası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Yumurta Sarısı",
          "amount": "1 adet",
        },
        {
          "item": "Rendelenmiş Hindistan Cevizi",
          "amount": "2 yemek kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Toz Antep Fıstığı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "File Badem",
          "amount": "1 yemek kaşığı",
          "note": "kavrulmuş"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tencereye süt, toz şeker, toz badem, hindistan cevizi, pirinç unu, nişasta ve yumurta sarısını ekleyin.",
      "tip": "Ocağın altını açmadan önce tüm malzemeyi pürüzsüz olana kadar çırpın."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereyi ocağa alın ve orta ateşte sürekli karıştırarak kıvam alana kadar pişirin.",
      "tip": "Dip tutmaması için tel çırpıcı ile sürekli karıştırmalısınız."
    },
    {
      "stepNumber": 3,
      "instruction": "Kaynamaya başladıktan sonra ocağın altını kısın ve 2-3 dakika daha karıştırarak pişirip ocaktan alın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Sıcak keşkülü kâselere paylaştırın ve oda sıcaklığına geldikten sonra buzdolabına kaldırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Buzdolabında en az 2 saat soğuttuktan sonra üzerini toz antep fıstığı ve file badem ile süsleyerek servis yapın.",
    }
  ],
  "tips": [
    "Toz bademin taze ve kabuksuz bademden çekilmiş olması lezzeti doğrudan etkiler.",
    "Kıvamının pürüzsüz olması için pişirme aşamasında çırpma teli kullanın.",
    "Buzdolabında soğudukça kıvamı tam oturacaktır, en az 2-3 saat dinlendirip soğuk servis edin."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/keskul.jpg"
},
  {
  "id": "muhallebi",
    description: "Sütün nişastayla kıvam kazandığı, gül suyu ve fıstıkla süslenen klasik bir Osmanlı tatlısı.",
  "title": "Muhallebi",
  "mainCategory": "tatlilar",
  "subCategory": "sutlu-tatlilar",
  "subCategoryLabel": "Sütlü Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 15,
  "totalTimeMinutes": 25,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "süt",
    "toz şeker",
    "pirinç unu",
    "buğday nişastası",
    "tereyağı",
    "vanilin"
  ],
  "tags": [
    "sütlü tatlı",
    "klasik",
    "tatlı",
    "hafif",
    "geleneksel"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Süt",
          "amount": "1 litre",
          "note": "tam yağlı"
        },
        {
          "item": "Toz şeker",
          "amount": "1 su bardağı",
        },
        {
          "item": "Pirinç unu",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Buğday nişastası",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
          "note": "tuzsuz"
        },
        {
          "item": "Vanilin",
          "amount": "1 paket",
        },
        {
          "item": "Toz antep fıstığı",
          "amount": "2 yemek kaşığı",
          "note": "süslemek için"
        },
        {
          "item": "Toz tarçın",
          "amount": "1 tatlı kaşığı",
          "note": "süslemek için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Soğuk süt, toz şeker, pirinç unu ve buğday nişastasını derin bir tencereye alıp pürüzsüz olana kadar çırpın.",
      "tip": "Topaklanmayı önlemek için kuru malzemeleri süt soğukken ekleyip çırpın."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereyi ocağa alın ve orta ateşte sürekli karıştırarak kıvam alana kadar pişirin.",
      "tip": "Dibi tutmaması için silikon spatula veya çırpıcı ile sürekli karıştırın."
    },
    {
      "stepNumber": 3,
      "instruction": "Kaynayıp göz göz olunca ateşi kısın; tereyağı ve vanilini ekleyip 2 dakika daha karıştırıp ocaktan alın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Muhallebiyi servis kaselerine eşit şekilde paylaştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Oda sıcaklığına gelince buzdolabına kaldırın, en az 2 saat soğuttuktan sonra tarçın ve antep fıstığı ile süsleyerek servis edin.",
    }
  ],
  "tips": [
    "Daha ipeksi bir kıvam elde etmek için ocaktan aldıktan sonra mikserle 3-4 dakika çırpabilirsiniz.",
    "Geleneksel bir dokunuş için pişirme aşamasında içerisine bir küçük parça damla sakızı ekleyebilirsiniz.",
    "Kabuk tutmasını istemiyorsanız kaselere aktardıktan sonra üzerlerine değecek şekilde streç film kapatabilirsiniz."
  ],
  "calories": 220,
  "imageUrl": "/images/recipes/muhallebi.jpg"
},
  {
  "id": "gullac",
    description: "İnce yufkaların sütle ıslatılıp ceviz ve narla süslendiği, Ramazan aylarının hafif ve zarif tatlısı.",
  "title": "Güllaç",
  "mainCategory": "tatlilar",
  "subCategory": "sutlu-tatlilar",
  "subCategoryLabel": "Sütlü Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 30,
  "servings": 8,
  "difficulty": "kolay",
  "mainIngredients": [
    "güllaç yaprağı",
    "süt",
    "şeker",
    "ceviz",
    "gül suyu",
    "nar"
  ],
  "tags": [
    "sütlü tatlı",
    "ramazan",
    "geleneksel",
    "klasik",
    "kolay"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Güllaç İçin",
      "items": [
        {
          "item": "Güllaç Yaprağı",
          "amount": "10 adet",
        },
        {
          "item": "Süt",
          "amount": "1.5 litre",
          "note": "tam yağlı"
        },
        {
          "item": "Toz Şeker",
          "amount": "2 su bardağı",
        },
        {
          "item": "Gül Suyu",
          "amount": "2 yemek kaşığı",
          "note": "doğal"
        },
        {
          "item": "Ceviz İçi",
          "amount": "1 su bardağı",
          "note": "iri çekilmiş"
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Nar Taneleri",
          "amount": "0.5 su bardağı",
        },
        {
          "item": "Toz Antep Fıstığı",
          "amount": "2 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Süt ve şekeri tencereye alıp şeker eriyene kadar ılıklaştırın.",
      "tip": "Sütün parmağınızı yakmayacak ılıklıkta olması gerekir."
    },
    {
      "stepNumber": 2,
      "instruction": "Ilık süte gül suyunu ekleyip karıştırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Güllaç yapraklarının yarısını tepsiye tek tek koyup her katı ılık sütle ıslatın.",
      "tip": "Yaprakların parlak yüzeyi üste bakmalıdır."
    },
    {
      "stepNumber": 4,
      "instruction": "Orta kata iri çekilmiş ceviz içini eşit şekilde serpin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Kalan yaprakları da aynı şekilde sütle ıslatarak üst üste dizin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Kalan sütü tatlının üzerine gezdirip oda sıcaklığında soğumaya bırakın.",
    },
    {
      "stepNumber": 7,
      "instruction": "Buzdolabında 2 saat dinlendirdikten sonra nar ve antep fıstığı ile süsleyip dilimleyerek servis yapın.",
    }
  ],
  "tips": [
    "Süt çok sıcak olursa yapraklar hamurlaşır, çok soğuk olursa ıslanmaz.",
    "Cevizlerin sütü karartmaması için servise yakın ekleyebilir veya sadece orta kata koyabilirsiniz.",
    "Tatlının şerbetini tam çekmesi için buzdolabında en az 2-3 saat bekletin."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/gullac.jpg"
},
  {
  "id": "supangle",
    description: "Çikolatalı pudingin bisküviyle katmanlandığı, kremalı ve doyurucu bir tatlı.",
  "title": "Supangle",
  "mainCategory": "tatlilar",
  "subCategory": "sutlu-tatlilar",
  "subCategoryLabel": "Sütlü Tatlılar",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 15,
  "totalTimeMinutes": 25,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "süt",
    "toz şeker",
    "un",
    "kakao",
    "bitter çikolata",
    "tereyağı",
    "buzlu su",
    "kakaolu kek"
  ],
  "tags": [
    "sütlü tatlı",
    "çikolatalı",
    "klasik",
    "kolay"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Supangle İçin",
      "items": [
        {
          "item": "Süt",
          "amount": "1 litre",
          "note": "soğuk"
        },
        {
          "item": "Toz Şeker",
          "amount": "1 su bardağı",
        },
        {
          "item": "Un",
          "amount": "3 yemek kaşığı",
          "note": "tepeleme"
        },
        {
          "item": "Kakao",
          "amount": "3 yemek kaşığı",
          "note": "tepeleme"
        },
        {
          "item": "Yumurta Sarısı",
          "amount": "1 adet",
        },
        {
          "item": "Bitter Çikolata",
          "amount": "100 gram",
          "note": "küçük parçalara bölünmüş"
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Buzlu Su",
          "amount": "1 çay bardağı",
          "note": "çok soğuk"
        }
      ]
    },
    {
      "groupTitle": "Tabanı ve Üzeri İçin",
      "items": [
        {
          "item": "Kakaolu Kek",
          "amount": "6 dilim",
          "note": "kase tabanı için"
        },
        {
          "item": "Toz Antep Fıstığı",
          "amount": "2 yemek kaşığı",
          "note": "süslemek için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tencereye süt, toz şeker, un, kakao ve yumurta sarısını alıp pürüzsüz olana kadar çırpın.",
      "tip": "Topaklanmayı önlemek için tencereyi ocağa almadan önce iyice çırpın."
    },
    {
      "stepNumber": 2,
      "instruction": "Orta ateşte sürekli karıştırarak koyulaşıp kaynayana kadar pişirin.",
      "tip": "Dibinin tutmaması için karıştırmayı hiç bırakmayın."
    },
    {
      "stepNumber": 3,
      "instruction": "Kaynayan tatlıyı ocaktan alın; bitter çikolata ve tereyağını ekleyip eriyene kadar karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Tatlı ılınınca buzlu suyu ekleyin ve mikserle yüksek devirde 3-4 dakika çırpın.",
      "tip": "Buzlu su supangleye o meşhur parlaklık ve ipeksi akışkan kıvamı verir."
    },
    {
      "stepNumber": 5,
      "instruction": "Kase tabanlarına birer dilim kek yerleştirin, üzerlerine supangleyi paylaştırın ve buzdolabında soğutun.",
    }
  ],
  "tips": [
    "İpeksi ve parlak bir kıvam için buzlu suyu ekledikten sonra mikserle çırpma adımını kesinlikle atlamayın.",
    "Servis etmeden önce buzdolabında en az 2-3 saat dinlendirin.",
    "Üzerini Antep fıstığı, rendelenmiş çikolata veya taze nane yaprakları ile süsleyebilirsiniz."
  ],
  "calories": 310,
  "imageUrl": "/images/recipes/supangle.jpg"
},
  {
  "id": "irmik-helvasi",
    description: "Kavrulan irmiğin tereyağı ve şekerli sütle pişirildiği, sıcak servis edilen sade bir helva.",
  "title": "İrmik Helvası",
  "mainCategory": "tatlilar",
  "subCategory": "hamur-isleri-helva",
  "subCategoryLabel": "Helvalar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 35,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "irmik",
    "tereyağı",
    "süt",
    "toz şeker",
    "çam fıstığı"
  ],
  "tags": [
    "helva",
    "tatlı",
    "geleneksel",
    "şerbetli",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Süt",
          "amount": "2 su bardağı",
          "note": "ılık"
        },
        {
          "item": "Su",
          "amount": "1 su bardağı",
          "note": "ılık"
        },
        {
          "item": "Toz Şeker",
          "amount": "1.5 su bardağı",
        }
      ]
    },
    {
      "groupTitle": "Helva İçin",
      "items": [
        {
          "item": "İrmik",
          "amount": "2 su bardağı",
        },
        {
          "item": "Tereyağı",
          "amount": "100 gram",
          "note": "tuzsuz"
        },
        {
          "item": "Sıvı Yağ",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Çam Fıstığı",
          "amount": "2 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Şerbeti için süt, su ve şekeri bir kapta şeker tamamen eriyene kadar karıştırın.",
      "tip": "Şerbeti kaynatmanıza gerek yoktur, şekerin erimesi yeterlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tencerede tereyağı ve sıvı yağı eritin. Çam fıstıklarını ekleyip hafifçe pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "İrmiği tencereye ilave edin ve kısık ateşte rengi dönene kadar yaklaşık 15-20 dakika sürekli karıştırarak kavurun.",
      "tip": "İrmiğin yanmaması için ateşi yüksek açmayın ve karıştırmayı bırakmayın."
    },
    {
      "stepNumber": 4,
      "instruction": "Kavrulan irmiğin üzerine hazırladığınız ılık şerbeti yavaşça ve dikkatlice dökün.",
      "tip": "Şerbeti eklerken sıçrama olabileceği için tencere kapağını siper edebilirsiniz."
    },
    {
      "stepNumber": 5,
      "instruction": "Sürekli karıştırarak irmik şerbeti çekene kadar kısık ateşte pişirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Tencerenin kapağını kapatın, üzerine havlu kağıt serip 15 dakika demlenmeye bırakın. Ilık servis yapın.",
    }
  ],
  "tips": [
    "İrmiğin ideal rengini yakalamak için sabırla kısık ateşte kavurmanız önemlidir.",
    "Servis ederken yanına veya ortasına maraş dondurması koyarak lezzetini artırabilirsiniz.",
    "Şerbetini tamamen sütlü yaparak daha yumuşak ve hafif bir doku elde edebilirsiniz."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/irmik-helvasi.jpg"
},
  {
  "id": "un-helvasi",
    description: "Kavrulan unun tereyağıyla karamelize edilip şekerli suyla pişirildiği geleneksel bir helva.",
  "title": "Un Helvası",
  "mainCategory": "tatlilar",
  "subCategory": "hamur-isleri-helva",
  "subCategoryLabel": "Geleneksel Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 35,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "un",
    "tereyağı",
    "sıvı yağ",
    "toz şeker",
    "süt",
    "su"
  ],
  "tags": [
    "helva",
    "tatlı",
    "klasik",
    "geleneksel",
    "kavurma"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Şerbeti İçin",
      "items": [
        {
          "item": "Toz Şeker",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Süt",
          "amount": "1 su bardağı",
          "note": "ılık"
        },
        {
          "item": "Su",
          "amount": "1 su bardağı",
          "note": "ılık"
        }
      ]
    },
    {
      "groupTitle": "Helva İçin",
      "items": [
        {
          "item": "Un",
          "amount": "2 su bardağı",
          "note": "elenmiş"
        },
        {
          "item": "Tereyağı",
          "amount": "100 gram",
        },
        {
          "item": "Sıvı Yağ",
          "amount": "0.5 çay bardağı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Şerbet için ılık süt, su ve şekeri derin bir kapta şeker tamamen eriyene kadar karıştırın.",
      "tip": "Şerbeti kaynatmanıza gerek yoktur, şekerin erimesi yeterlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tencerede tereyağını eritin ve sıvı yağı ekleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Unu tencereye ilave edin ve kısık ateşte tahta kaşıkla sürekli karıştırarak kavurun.",
      "tip": "Unun rengi karamel tonuna dönene kadar yaklaşık 15-20 dakika sabırla kavurun."
    },
    {
      "stepNumber": 4,
      "instruction": "Kavrulan una hazırladığınız şerbeti yavaşça dökün ve topaklanmaması için hızlıca karıştırın.",
      "tip": "Şerbeti dökerken sıcak buhara dikkat edin."
    },
    {
      "stepNumber": 5,
      "instruction": "Helva şerbeti tamamen çekip tencerenin kenarlarından ayrılana kadar karıştırmaya devam edin, ardından ocaktan alıp kaşıkla şekil verin.",
    }
  ],
  "tips": [
    "Unu kısık ateşte sabırla kavurmak helvanın kıvamı ve lezzeti için en kritik adımdır.",
    "İsteğe bağlı olarak yağı eritirken tencereye çam fıstığı ekleyip unla birlikte kavurabilirsiniz.",
    "Sıcak veya ılık olarak, üzerine tarçın veya ceviz serperek servis edin."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/un-helvasi.jpg"
},
  {
  "id": "kabak-tatlisi",
    description: "Balkabağının şeker ve suyla ağır ateşte pişirilip cevizle süslendiği, kışın en sevilen tatlısı.",
  "title": "Kabak Tatlısı",
  "mainCategory": "tatlilar",
  "subCategory": "hamur-isleri-helva",
  "subCategoryLabel": "Geleneksel Tatlılar",
  "region": "Batı Anadolu",
  "prepTimeMinutes": 180,
  "cookTimeMinutes": 45,
  "totalTimeMinutes": 225,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "balkabağı",
    "toz şeker",
    "ceviz içi",
    "tahin"
  ],
  "tags": [
    "tatlı",
    "geleneksel",
    "klasik",
    "kış tatlısı",
    "meyve tatlısı"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Balkabağı",
          "amount": "1 kg",
          "note": "soyulmuş ve yeşil kısımları temizlenmiş"
        },
        {
          "item": "Toz şeker",
          "amount": "2 su bardağı",
          "note": "kabağın tatlılığına göre ayarlanabilir"
        },
        {
          "item": "Ceviz içi",
          "amount": "1 çay bardağı",
          "note": "iri kıyılmış"
        },
        {
          "item": "Tahin",
          "amount": "3 yemek kaşığı",
          "note": "servis için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Dilimlenmiş balkabaklarını geniş bir tencereye aralarında boşluk kalmayacak şekilde tek sıra halinde dizin.",
      "tip": "Kabakların eşit pişmesi için dilim kalınlıklarının benzer olmasına dikkat edin."
    },
    {
      "stepNumber": 2,
      "instruction": "Toz şekeri kabakların üzerine eşit şekilde gezdirin. Tencerenin kapağını kapatıp kabakların suyunu salması için en az 3 saat (tercihen 1 gece) bekletin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Suyunu salan kabakları tencereyle birlikte orta ateşe alın. Kaynamaya başlayınca ocağın altını kısın ve kabaklar yumuşayana kadar yaklaşık 30-35 dakika pişirin.",
      "tip": "Kabaklar kendi suyunu saldığı için kesinlikle ekstra su eklemeyin."
    },
    {
      "stepNumber": 4,
      "instruction": "Kabaklar yumuşayınca tencerenin kapağını açın ve şerbetin koyulaşıp karamelize olması için kısık ateşte 10-15 dakika daha pişirin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Pişen tatlıyı ocaktan alın ve oda sıcaklığında tamamen soğumaya bırakın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Soğuyan kabak tatlısını servis tabağına alın. Üzerine tahin gezdirip iri kıyılmış ceviz içi serperek servis yapın.",
    }
  ],
  "tips": [
    "Şekerde bekletme süresini uzun tutmak kabağın kendi suyuyla pişmesini sağlar ve lezzetini artırır.",
    "Daha karamelize ve üzeri hafif çıtır bir doku için tencerede pişen kabakları son 10 dakika fırın tepsisine alıp 200 derece fırında kızartabilirsiniz.",
    "Tahin ve cevizin yanında manda kaymağı ile servis etmek geleneksel bir dokunuş katar."
  ],
  "calories": 285,
  "imageUrl": "/images/recipes/kabak-tatlisi.jpg"
},
  {
  "id": "ayva-tatlisi",
    description: "Ayvanın şekerli suda pişirilip kaymakla servis edildiği, kışın vazgeçilmez zarif bir meyve tatlısı.",
  "title": "Ayva Tatlısı",
  "mainCategory": "tatlilar",
  "subCategory": "hamur-isleri-helva",
  "subCategoryLabel": "Meyveli Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 90,
  "totalTimeMinutes": 110,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "ayva",
    "toz şeker",
    "karanfil",
    "çubuk tarçın",
    "kaymak",
    "antep fıstığı"
  ],
  "tags": [
    "tatlı",
    "meyveli",
    "geleneksel",
    "saray mutfağı",
    "kış tatlısı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Tatlı Malzemeleri",
      "items": [
        {
          "item": "Ayva",
          "amount": "3 adet",
          "note": "ekmek ayvası"
        },
        {
          "item": "Toz şeker",
          "amount": "1.5 su bardağı",
          "note": "her yarım ayva için 2-3 yemek kaşığı"
        },
        {
          "item": "Karanfil",
          "amount": "5-6 adet",
        },
        {
          "item": "Çubuk tarçın",
          "amount": "1 adet",
        },
        {
          "item": "Su",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Limon suyu",
          "amount": "1/2 adet",
          "note": "kararmaması için"
        }
      ]
    },
    {
      "groupTitle": "Servis İçin",
      "items": [
        {
          "item": "Manda kaymağı",
          "amount": "100 gram",
        },
        {
          "item": "Toz antep fıstığı",
          "amount": "2 yemek kaşığı",
          "note": "isteğe bağlı"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Ayvaları soyup ortadan ikiye bölün, çekirdek yuvalarını temizleyin ve çıkan çekirdekleri kenara ayırın.",
      "tip": "Ayvaları soyduktan sonra kararmaması için hemen limonlu suda bekletin."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tencereye ayvaları oyuk kısımları yukarı bakacak şekilde dizin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Ayva çekirdeklerini, karanfilleri ve çubuk tarçını tencerenin tabanına serpiştirin.",
      "tip": "Çekirdekler tatlıya doğal kırmızı rengini ve jöle kıvamını verir."
    },
    {
      "stepNumber": 4,
      "instruction": "Her bir ayva yarısının üzerine şekeri paylaştırın ve suyu tencerenin kenarından dökün.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tencerenin kapağını kapatın, kaynamaya başlayınca ocağı en kısık seviyeye getirip ayvalar yumuşayıp kızarana kadar yaklaşık 1.5 saat pişirin.",
      "tip": "Pişme süresince tencerenin kapağını sık açmayın."
    },
    {
      "stepNumber": 6,
      "instruction": "Oda sıcaklığına gelen ayvaları servis tabağına alın, üzerlerine kaymak ve antep fıstığı koyarak servis yapın.",
    }
  ],
  "tips": [
    "Ayvaların doğal kırmızı renk alması için gıda boyası kullanmayın; çekirdekler ve kısık ateşte uzun pişirme yeterlidir.",
    "Tatlıyı tenceresinde tamamen soğuyana kadar dinlendirirseniz şerbetini daha iyi çeker.",
    "Servis ederken kaymak yerine vanilyalı dondurma da tercih edebilirsiniz."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/ayva-tatlisi.jpg"
},
  {
  "id": "asure",
    description: "Buğday, kuru meyve ve baklagillerin bir araya geldiği, bolluk ve paylaşımı simgeleyen geleneksel bir tatlı.",
  "title": "Aşure",
  "mainCategory": "tatlilar",
  "subCategory": "hamur-isleri-helva",
  "subCategoryLabel": "Geleneksel Tatlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 60,
  "cookTimeMinutes": 90,
  "totalTimeMinutes": 150,
  "servings": 12,
  "difficulty": "orta",
  "mainIngredients": [
    "buğday",
    "nohut",
    "kuru fasulye",
    "kuru kayısı",
    "kuru incir",
    "kuru üzüm",
    "şeker"
  ],
  "tags": [
    "geleneksel",
    "tatlı",
    "aşure",
    "vejetaryen",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Aşurelik buğday",
          "amount": "2 su bardağı",
          "note": "akşamdan ıslatılmış"
        },
        {
          "item": "Nohut",
          "amount": "1 su bardağı",
          "note": "haşlanmış"
        },
        {
          "item": "Kuru fasulye",
          "amount": "1 su bardağı",
          "note": "haşlanmış"
        },
        {
          "item": "Kuru kayısı",
          "amount": "10 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Kuru incir",
          "amount": "10 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Kuru üzüm",
          "amount": "1/2 su bardağı",
        },
        {
          "item": "Toz şeker",
          "amount": "3 su bardağı",
          "note": "damak tadına göre ayarlanabilir"
        },
        {
          "item": "Su",
          "amount": "15 su bardağı",
          "note": "sıcak"
        },
        {
          "item": "Karanfil",
          "amount": "4 adet",
          "note": "bir çay bardağı suda kaynatılmış"
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Nar taneleri",
          "amount": "1 su bardağı",
        },
        {
          "item": "Ceviz içi",
          "amount": "1/2 su bardağı",
          "note": "iri kıyılmış"
        },
        {
          "item": "Fındık",
          "amount": "1/2 su bardağı",
          "note": "kavrulmuş"
        },
        {
          "item": "Tarçın",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Aşurelik buğdayı bol suda yıkayıp tencereye alın, sıcak su ekleyip buğdaylar yumuşayana kadar yaklaşık 45-50 dakika kaynatın.",
      "tip": "Buğdayı bir gece önceden ıslatmak pişme süresini kısaltır."
    },
    {
      "stepNumber": 2,
      "instruction": "Yumuşayan buğdayın üzerine haşlanmış nohut ve kuru fasulyeyi ekleyip karıştırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Küp doğranmış kuru kayısı, kuru üzüm ve süzülmüş karanfil suyunu tencereye ilave edin, 15 dakika kısık ateşte pişirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Toz şekeri ekleyip şeker tamamen eriyene ve tatlı kıvam alana kadar karıştırarak 10 dakika daha kaynatın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Doğranmış kuru incirleri en son ekleyin, 5 dakika pişirip tencereyi ocaktan alın.",
      "tip": "İncirleri erkenden eklerseniz aşurenin rengi kararır."
    },
    {
      "stepNumber": 6,
      "instruction": "Aşureyi kaselere paylaştırın, ılındıktan sonra nar, ceviz, fındık ve tarçın ile süsleyip servis yapın.",
    }
  ],
  "tips": [
    "Aşurenin renginin duru kalması için incir ve cevizi pişirme esnasında değil, servis aşamasında ekleyin.",
    "Bekledikçe koyulaşan aşurenin kıvamını açmak için servis öncesinde biraz sıcak su ekleyip karıştırabilirsiniz.",
    "Aşureyi kaselere koyduktan sonra kabuk tutması için oda sıcaklığında soğumaya bırakın, ardından süsleyin."
  ],
  "calories": 320,
  "imageUrl": "/images/recipes/asure.jpg"
},
];

export default tatlilar;