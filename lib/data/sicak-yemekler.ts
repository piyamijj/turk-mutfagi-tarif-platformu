import { Recipe } from "../types";

const sicakYemekler: Recipe[] = [
  {
    id: "hunkar-begendi",
    title: "Hünkar Beğendi",
    description: "Közlenmiş patlıcanın kadifemsi beşamel sosla buluştuğu, üzerinde lokum gibi pişmiş kuzu etinin servis edildiği Osmanlı saray mutfağının en görkemli başyapıtı.",
    mainCategory: "sicak-yemekler",
    subCategory: "et-yemekleri",
    subCategoryLabel: "Et ve Tavuk Yemekleri",
    region: "Saray Mutfağı",
    prepTimeMinutes: 30,
    cookTimeMinutes: 50,
    totalTimeMinutes: 80,
    servings: 4,
    difficulty: "zor",
    mainIngredients: ["kuzu eti", "patlıcan", "kaşar peyniri", "tereyağı", "süt", "un"],
    tags: ["et", "fırın", "saray-mutfagi", "klasik", "patlican"],
    ingredientGroups: [
      {
        groupTitle: "Beğendi (Alt Taban) İçin",
        items: [
          { item: "Kemer Patlıcan", amount: "4 adet", note: "büyük boy, közlenmiş" },
          { item: "Tereyağı", amount: "2 yemek kaşığı" },
          { item: "Un", amount: "1.5 yemek kaşığı" },
          { item: "Süt", amount: "1.5 su bardağı", note: "ılık" },
          { item: "Rende Kaşar Pyniri", amount: "1 çay bardağı" },
          { item: "Muskat Rendesi", amount: "1 tutam" },
          { item: "Tuz", amount: "1 çay kaşığı" },
          { item: "Taze Çekilmiş Karabiber", amount: "0.5 çay kaşığı" }
        ]
      },
      {
        groupTitle: "Et Sote (Üzeri) İçin",
        items: [
          { item: "Kuzu Kuşbaşı", amount: "600 gram", note: "orta yağlı, küçük doğranmış" },
          { item: "Kuru Soğan", amount: "1 adet", note: "yemeklik doğranmış" },
          { item: "Sarımsak", amount: "2 diş", note: "ince kıyılmış" },
          { item: "Yeşil Biber", amount: "2 adet", note: "doğranmış" },
          { item: "Domates", amount: "2 adet", note: "kabuğu soyulmuş, küp doğranmış" },
          { item: "Domates Salçası", amount: "1 tatlı kaşığı" },
          { item: "Tereyağı", amount: "1 yemek kaşığı" },
          { item: "Sıcak Su", amount: "1 su bardağı" },
          { item: "Tuz", amount: "1 çay kaşığı" },
          { item: "Kekik", amount: "1 tatlı kaşığı" },
          { item: "Karabiber", amount: "0.5 çay kaşığı" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Et sote için tereyağını tencereye alın ve eritin. Kuzu etlerini ekleyip yüksek ateşte suyunu salıp çekene kadar soteleyin.",
        tip: "Etlerin mühürlenmesi için tencerenin iyice ısınmış olması önemlidir."
      },
      {
        stepNumber: 2,
        instruction: "Suyunu çeken etlere yemeklik doğranmış soğanları ve sarımsakları ekleyip soğanlar yumuşayana kadar kavurmaya devam edin.",
        tip: "Kısık ateşte soğanların karamelize olması lezzeti derinleştirir."
      },
      {
        stepNumber: 3,
        instruction: "Doğranmış yeşil biberleri ve salçayı ekleyip kokusu çıkana kadar 2 dakika kavurun. Ardından domatesleri, tuzu, karabiberi ve sıcak suyu ekleyip kapağını kapatın. Etler lokum gibi yumuşayana kadar yaklaşık 40 dakika kısık ateşte pişmeye bırakın. Pişmeye yakın kekik ekleyin.",
        tip: "Eğer etler sert kalırsa azar azar sıcak su ekleyerek pişirme süresini uzatabilirsiniz."
      },
      {
        stepNumber: 4,
        instruction: "Beğendi tabanı için patlıcanlara bıçakla birkaç delik açın ve ocak üzerinde veya fırında közleyin. Kabuklarını soyup ince ince kıyın.",
        tip: "Közlenen patlıcanları sıcakken bir poşete koyup ağzını bağlarsanız buharlaşma sayesinde kabukları çok daha kolay soyulacaktır."
      },
      {
        stepNumber: 5,
        instruction: "Ayrı bir sos tenceresinde tereyağını eritin. Unu ekleyip kokusu çıkana ve rengi hafif dönene kadar kısık ateşte kavurun.",
        tip: "Unun yanmaması için sürekli karıştırarak kavurmaya özen gösterin."
      },
      {
        stepNumber: 6,
        instruction: "Kavrulan una ince kıyılmış köz patlıcanları ekleyip hızlıca karıştırın. Ilık sütü azar azar ekleyerek sürekli çırpın ve sosun patlıcanla bütünleşmesini sağlayın.",
        tip: "Sütün soğuk olmaması topaklanmayı önler."
      },
      {
        stepNumber: 7,
        instruction: "Karışım koyulaşıp kaynamaya başlayınca ocaktan alın. İçine rende kaşar peyniri, tuz, karabiber ve muskat rendesini ekleyip peynir eriyene kadar karıştırın.",
        tip: "Muskat rendesi beğendiye imza bir saray mutfağı aroması kazandırır."
      },
      {
        stepNumber: 8,
        instruction: "Sıcak beğendiyi servis tabağına yayın. Üzerine lokum gibi pişmiş sıcak et soteden bolca koyup sosuyla birlikte sıcak olarak servis yapın."
      }
    ],
    tips: [
      "Beğendinin kararmaması için közlenmiş patlıcanları soyduktan sonra birkaç damla limon suyu eklenmiş suda bekletebilirsiniz.",
      "Geleneksel sunumda kuzu eti tercih edilir ancak arzuya göre dana eti veya tavuk etiyle de mükemmel bir uyum yakalar.",
      "Yanında tereyağlı tırnak pide ve közlenmiş biber-domates ile servis edilmesi önerilir."
    ],
    calories: 480,
    imageUrl: "/images/recipes/hunkar-begendi.jpg",
    isFeatured: true,
    isPopular: false
  },
  {
    id: "mercimek-corbasi",
    title: "Süzme Mercimek Çorbası",
    description: "Kavrulmuş un ve sebzelerin kırmızı mercimekle birlikte ağır ağır pişip süzgeçten geçirilmesiyle hazırlanan, üzeri tereyağlı ve pul biberli sosla taçlandırılan geleneksel şifa çorbası.",
    mainCategory: "sicak-yemekler",
    subCategory: "corbalar",
    subCategoryLabel: "Çorbalar",
    region: "Anadolu",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 6,
    difficulty: "kolay",
    mainIngredients: ["kırmızı mercimek", "patates", "havuç", "tereyağı", "un", "soğan"],
    tags: ["çorba", "vejetaryen", "klasik", "pratik", "sifa-corbasi"],
    ingredientGroups: [
      {
        groupTitle: "Çorba Tabanı İçin",
        items: [
          { item: "Kırmızı Mercimek", amount: "1.5 su bardağı", note: "iyice yıkanmış ve süzülmüş" },
          { item: "Kuru Soğan", amount: "1 adet", note: "iri doğranmış" },
          { item: "Havuç", amount: "1 adet", note: "iri doğranmış" },
          { item: "Patates", amount: "1 adet", note: "küçük boy, iri doğranmış" },
          { item: "Un", amount: "1 yemek kaşığı" },
          { item: "Tereyağı", amount: "1 yemek kaşığı" },
          { item: "Zeytinyağı", amount: "1 yemek kaşığı" },
          { item: "Sıcak Su veya Et Suyu", amount: "6 su bardağı" },
          { item: "Tuz", amount: "1 çay kaşığı" },
          { item: "Kimyon", amount: "0.5 çay kaşığı" }
        ]
      },
      {
        groupTitle: "Üzerinin Sosu İçin",
        items: [
          { item: "Tereyağı", amount: "1 yemek kaşığı" },
          { item: "Kırmızı Toz Biber", amount: "1 tatlı kaşığı" },
          { item: "Kuru Nane", amount: "1 tatlı kaşığı" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Çorba tenceresine tereyağı ve zeytinyağını alın. İri doğranmış soğanları ekleyip hafifçe pembeleşene kadar 2-3 dakika soteleyin.",
        tip: "Soğanları çok küçük doğramanıza gerek yoktur, çünkü çorba sonunda pürüzsüzleştirilecektir."
      },
      {
        stepNumber: 2,
        instruction: "Unu ekleyip kokusu çıkana kadar kısık ateşte 1-2 dakika kavurun.",
        tip: "Unun kavrulması çorbaya o meşhur lokanta usulü kıvamı ve lezzeti verir."
      },
      {
        stepNumber: 3,
        instruction: "İri doğranmış havuç ve patatesleri ekleyip 2 dakika daha kavurmaya devam edin.",
        tip: "Sebzelerin hafifçe kavrulması çorbanın lezzetini artırır."
      },
      {
        stepNumber: 4,
        instruction: "İyice yıkanıp nişastasından arındırılmış kırmızı mercimekleri tencereye ekleyin ve karıştırın.",
        tip: "Mercimekleri berrak su çıkana kadar yıkamak çorbanın renginin parlak olmasını sağlar."
      },
      {
        stepNumber: 5,
        instruction: "Sıcak suyu (veya et/tavuk suyunu) ve tuzu ekleyip karıştırın. Tencerenin kapağını yarım kapatarak, mercimekler ve sebzeler tamamen yumuşayana kadar yaklaşık 20-25 dakika orta ateşte pişmeye bırakın.",
        tip: "Et suyu kullanmak çorbanın besleyiciliğini ve lezzetini katlayacaktır."
      },
      {
        stepNumber: 6,
        instruction: "Sebzeler tamamen yumuşayınca çorbayı ocaktan alın. Pürüzsüz bir kıvam elde etmek için el blenderından geçirin veya geleneksel yöntemle süzgeçten süzün. Kimyonu ekleyip karıştırın.",
        tip: "Kimyon, mercimeğin olası gaz yapıcı etkisini azaltır ve harika bir aroma verir."
      },
      {
        stepNumber: 7,
        instruction: "Sosu için küçük bir tavada tereyağını eritin. Kızan tereyağına kırmızı toz biberi ve naneyi ekleyip köpürünce ocaktan alın.",
        tip: "Baharatların yanmaması için yağa ekledikten hemen sonra ocağı kapatın."
      },
      {
        stepNumber: 8,
        instruction: "Çorbayı kaselere paylaştırın. Üzerine hazırladığınız sıcak tereyağlı sostan gezdirip yanında taze limon dilimleri ve çıtır kruton ekmeklerle servis yapın."
      }
    ],
    tips: [
      "Çorbanın kıvamı koyu gelirse azar azar sıcak su ekleyerek bir taşım daha kaynatabilirsiniz.",
      "Lokanta usulü süzme mercimek çorbası yapmak için blender yerine ince delikli bir süzgeçten tahta kaşık yardımıyla ezerek süzmek en geleneksel yöntemdir.",
      "Servis ederken yanına mutlaka taze sıkılmış limon suyu ve pul biber eklenmesi önerilir."
    ],
    calories: 185,
    imageUrl: "/images/recipes/mercimek-corbasi.jpg",
    isFeatured: false,
    isPopular: true
  },
  {
  "id": "karniyarik",
  "title": "Karnıyarık",
  "mainCategory": "sicak-yemekler",
  "subCategory": "et-yemekleri",
  "subCategoryLabel": "Etli Ev Yemekleri",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 25,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 60,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "patlıcan",
    "kıyma",
    "soğan",
    "domates",
    "biber",
    "sarımsak"
  ],
  "tags": [
    "klasik",
    "fırın",
    "ana yemek",
    "etli",
    "patlıcan"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Patlıcan",
          "amount": "4 adet",
          "note": "orta boy, çizgili soyulmuş"
        },
        {
          "item": "Sıvı Yağ",
          "amount": "1 çay bardağı",
          "note": "kızartmak için"
        }
      ]
    },
    {
      "groupTitle": "Kıymalı İç Harç",
      "items": [
        {
          "item": "Dana Kıyma",
          "amount": "300 gram",
          "note": "orta yağlı"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Yeşil Biber",
          "amount": "2 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "3 diş",
          "note": "kıyılmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Domates Salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tuz ve Karabiber",
          "amount": "1'er çay kaşığı",
        },
        {
          "item": "Maydanoz",
          "amount": "0.5 demet",
          "note": "ince kıyılmış"
        }
      ]
    },
    {
      "groupTitle": "Sosu İçin",
      "items": [
        {
          "item": "Domates Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "1 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "0.5 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Patlıcanları alacalı soyup tuzlu suda 20 dakika bekletin, ardından kağıt havlu ile tamamen kurulayın.",
      "tip": "Tuzlu su patlıcanın acısını alır ve yağ çekmesini azaltır."
    },
    {
      "stepNumber": 2,
      "instruction": "Kızgın yağda patlıcanların her tarafını hafifçe kızartın ve fırın kabına dizin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Tavada zeytinyağında soğan, biber ve sarımsakları kavurun. Kıymayı ekleyip suyunu çekene kadar pişirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Salçayı, domatesleri, tuz ve karabiberi ekleyip 5 dakika pişirin. Ocaktan alıp kıyılmış maydanozu karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Patlıcanların ortalarını uzunlamasına yararak açın ve hazırladığınız kıymalı harcı içlerine eşitçe doldurun.",
    },
    {
      "stepNumber": 6,
      "instruction": "Salça, sıcak su ve tuzu karıştırıp fırın kabının tabanına dökün. Önceden ısıtılmış 190°C fırında 25-30 dakika pişirin.",
    }
  ],
  "tips": [
    "Daha hafif bir alternatif için patlıcanları kızartmak yerine üzerlerine fırça ile yağ sürüp fırında yumuşayana kadar pişirebilirsiniz.",
    "Servis ederken yanında tereyağlı şehriyeli pirinç pilavı ve soğuk cacık ikram etmeniz önerilir."
  ],
  "calories": 385,
  "imageUrl": "/images/recipes/karniyarik.jpg"
},
  {
  "id": "izmir-kofte",
  "title": "İzmir Köfte",
  "mainCategory": "sicak-yemekler",
  "subCategory": "et-yemekleri",
  "subCategoryLabel": "Et ve Tavuk Yemekleri",
  "region": "Ege",
  "prepTimeMinutes": 25,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 60,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "kıyma",
    "patates",
    "domates",
    "biber",
    "soğan",
    "domates salçası"
  ],
  "tags": [
    "et",
    "fırın",
    "köfte",
    "klasik",
    "ana yemek"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Köfte Harcı İçin",
      "items": [
        {
          "item": "Kıyma",
          "amount": "500 gram",
          "note": "orta yağlı dana kıyma"
        },
        {
          "item": "Kuru soğan",
          "amount": "1 adet",
          "note": "rendelenmiş, suyu sıkılmış"
        },
        {
          "item": "Bayat ekmek içi",
          "amount": "1 çay bardağı",
          "note": "ufalanmış"
        },
        {
          "item": "Yumurta",
          "amount": "1 adet",
        },
        {
          "item": "Maydanoz",
          "amount": "1/4 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tuz, karabiber, kimyon",
          "amount": "1'er tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Sebzeler ve Sos İçin",
      "items": [
        {
          "item": "Patates",
          "amount": "3 adet",
          "note": "elma dilim doğranmış"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "dilimlenmiş"
        },
        {
          "item": "Sivri biber",
          "amount": "3 adet",
          "note": "iri doğranmış"
        },
        {
          "item": "Domates salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Sıcak su",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Sıvı yağ",
          "amount": "1/2 çay bardağı",
          "note": "kızartmak için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Kıyma, soğan, ekmek içi, yumurta, maydanoz ve baharatları derin bir kaba alıp 10 dakika iyice yoğurun.",
      "tip": "Harcı buzdolabında 20 dakika dinlendirmek şekil vermeyi kolaylaştırır."
    },
    {
      "stepNumber": 2,
      "instruction": "Harçtan ceviz büyüklüğünde parçalar koparıp parmak şeklinde oval köfteler hazırlayın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Patatesleri ve köfteleri kızgın yağda çok az, dışı hafif renk alana kadar kızartın.",
      "tip": "Tamamen pişirmeyin, fırında da pişecekler."
    },
    {
      "stepNumber": 4,
      "instruction": "Kızaran patates ve köfteleri fırın tepsisine sırayla dizin. Üzerlerine domates ve biber dilimlerini yerleştirin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Salçayı sıcak suda ezip biraz tuz ekleyin ve tepsinin üzerine gezdirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Önceden ısıtılmış 200 derece fırında sebzeler yumuşayıp üzeri kızarana kadar yaklaşık 25-30 dakika pişirin.",
    }
  ],
  "tips": [
    "Soğanın suyunu sıkmak köftenin acı olmasını ve dağılmasını önler.",
    "Köfte ve patatesleri önceden hafifçe kızartmak geleneksel lezzeti yakalamanızı sağlar.",
    "Pirinç pilavı ve cacık ile sıcak servis yapılması tavsiye edilir."
  ],
  "calories": 480,
  "imageUrl": "/images/recipes/izmir-kofte.jpg"
},
  {
  "id": "ankara-tava",
  "title": "Ankara Tava",
  "mainCategory": "sicak-yemekler",
  "subCategory": "et-yemekleri",
  "subCategoryLabel": "Et Yemekleri",
  "region": "Ankara",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 60,
  "totalTimeMinutes": 80,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "kuzu eti",
    "arpa şehriye",
    "tereyağı",
    "domates",
    "biber",
    "et suyu"
  ],
  "tags": [
    "et",
    "fırın",
    "pilav",
    "yöresel",
    "ana yemek"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Et Malzemeleri",
      "items": [
        {
          "item": "Kuzu eti",
          "amount": "600 gram",
          "note": "kuşbaşı doğranmış"
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Arpacık soğan",
          "amount": "10 adet",
          "note": "soyulmuş"
        },
        {
          "item": "Tuz ve karabiber",
          "amount": "1 tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Şehriye Tabanı İçin",
      "items": [
        {
          "item": "Arpa şehriye",
          "amount": "2 su bardağı",
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sivri biber",
          "amount": "2 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Et suyu",
          "amount": "3.5 su bardağı",
          "note": "sıcak"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tencerede tereyağını eritin. Kuzu etlerini ekleyip suyunu salıp çekene kadar kavurun. Arpacık soğanları ekleyip yumuşayana kadar soteleyin. Üzerini geçecek kadar sıcak su ekleyip etler yumuşayana kadar kısık ateşte pişirin.",
      "tip": "Etin lokum gibi olması için kısık ateşte ağır ağır pişirin."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tavada tereyağını eritin. Arpa şehriyeleri ekleyip rengi dönene kadar kavurun. Biber ve domatesleri ilave edip 2-3 dakika daha soteleyin.",
      "tip": "Şehriyelerin eşit pişmesi için sürekli karıştırarak kavurun."
    },
    {
      "stepNumber": 3,
      "instruction": "Kavrulan şehriye karışımını bir fırın tepsisine veya borcama eşit şekilde yayın. Pişen etleri soğanlarıyla birlikte şehriyenin üzerine yerleştirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Sıcak et suyunu, tuz ve karabiberi tepsiye gezdirin. Önceden ısıtılmış 180 derece fırında şehriyeler suyunu çekip yumuşayana kadar yaklaşık 25 dakika pişirin.",
    }
  ],
  "tips": [
    "Geleneksel lezzet için kuzu ön kol veya gerdan eti tercih edin.",
    "Fırından çıkardıktan sonra üzerini kapatıp 10 dakika demlendirin.",
    "Yanında ayran ve çoban salata ile servis yapın."
  ],
  "calories": 620,
  "imageUrl": "/images/recipes/ankara-tava.jpg"
},
  {
  "id": "tavuk-sote",
  "title": "Tavuk Sote",
  "mainCategory": "sicak-yemekler",
  "subCategory": "et-yemekleri",
  "subCategoryLabel": "Et ve Tavuk Yemekleri",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 35,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "tavuk göğsü",
    "biber",
    "domates",
    "soğan",
    "sarımsak",
    "zeytinyağı"
  ],
  "tags": [
    "tavuk",
    "sote",
    "ana yemek",
    "kolay",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Tavuk Sote Malzemeleri",
      "items": [
        {
          "item": "Tavuk göğsü",
          "amount": "600 gram",
          "note": "kuşbaşı doğranmış"
        },
        {
          "item": "Kuru soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Yeşil biber",
          "amount": "2 adet",
          "note": "halka doğranmış"
        },
        {
          "item": "Kırmızı kapya biber",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "kabuğu soyulup küp doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ince kıyılmış"
        },
        {
          "item": "Domates salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Karabiber",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Kekik",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Geniş bir tavaya zeytinyağını alın, yüksek ateşte kızdırın ve tavukları ekleyip suyunu çekene kadar soteleyin.",
      "tip": "Tavukların suyunu hapsetmesi için tavanın çok sıcak olması gerekir."
    },
    {
      "stepNumber": 2,
      "instruction": "Suyunu çeken tavuklara soğan, sarımsak ve biberleri ekleyerek 4-5 dakika kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Salçayı ekleyip kokusu çıkana kadar karıştırın, ardından domatesleri, tuzu ve karabiberi ilave edin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Tavanın kapağını kapatıp kısık ateşte domatesler yumuşayana kadar 10 dakika pişirin, ocaktan almadan önce kekiği ekleyip karıştırın.",
      "tip": "Kekiği en son eklemek acılaşmasını önler ve güzel bir aroma verir."
    }
  ],
  "tips": [
    "Tavuk göğsü yerine daha sulu ve yumuşak bir kıvam için tavuk pirzola da tercih edebilirsiniz.",
    "Yanında tereyağlı pirinç pilavı ve patates püresi ile mükemmel bir uyum yakalar."
  ],
  "calories": 320,
  "imageUrl": "/images/recipes/tavuk-sote.jpg"
},
  {
  "id": "sac-kavurma",
  "title": "Sac Kavurma",
  "mainCategory": "sicak-yemekler",
  "subCategory": "et-yemekleri",
  "subCategoryLabel": "Et Yemekleri",
  "region": "Anadolu",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 40,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "kuzu eti",
    "kuyruk yağı",
    "soğan",
    "yeşil biber",
    "domates",
    "sarımsak"
  ],
  "tags": [
    "et",
    "kavurma",
    "sac kavurma",
    "anadolu mutfağı",
    "akşam yemeği"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Kuzu eti",
          "amount": "700 gram",
          "note": "küçük küp doğranmış"
        },
        {
          "item": "Kuyruk yağı",
          "amount": "100 gram",
          "note": "küçük küp doğranmış"
        },
        {
          "item": "Kuru soğan",
          "amount": "2 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Yeşil biber",
          "amount": "3 adet",
          "note": "jülyen doğranmış"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "kabukları soyulmuş, küp doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Pul biber ve kekik",
          "amount": "1'er tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Sac tavayı ocağa alıp iyice ısıtın ve kuyruk yağını ekleyip eriyene kadar kavurun.",
      "tip": "Kalan kıkırdak parçalarını sactan çıkarabilirsiniz."
    },
    {
      "stepNumber": 2,
      "instruction": "Doğranmış kuzu etlerini ekleyin ve yüksek ateşte suyunu salıp çekene kadar karıştırarak pişirin.",
      "tip": "Eti yüksek ateşte pişirmek suyunu içinde tutar."
    },
    {
      "stepNumber": 3,
      "instruction": "Suyunu çeken ete soğan, sarımsak ve biberleri ekleyip yumuşayana kadar kavurun.",
    },
    {
      "stepNumber": 4,
      "instruction": "Domatesleri ekleyin, domatesler yumuşayıp suyunu hafifçe çekene kadar pişirmeye devam edin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tuz ve baharatları ilave edip karıştırın, 2 dakika sonra ocaktan alın.",
      "tip": "Tuzu en son eklemek etin sertleşmesini önler."
    }
  ],
  "tips": [
    "Sac kavurmayı sıcak olarak taze tırnak pide ve ayran eşliğinde servis edin.",
    "Kuyruk yağı geleneksel lezzeti verir ancak isteğe bağlı olarak tereyağı da kullanılabilir.",
    "Eti pişirirken sacın kapağını kapatmayın, sürekli karıştırarak kavurun."
  ],
  "calories": 580,
  "imageUrl": "/images/recipes/sac-kavurma.jpg"
},
  {
  "id": "zeytinyagli-taze-fasulye",
  "title": "Zeytinyağlı Taze Fasulye",
  "mainCategory": "sicak-yemekler",
  "subCategory": "sebze-yemekleri",
  "subCategoryLabel": "Zeytinyağlı Yemekler",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 60,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "taze fasulye",
    "domates",
    "kuru soğan",
    "zeytinyağı",
    "toz şeker",
    "sarımsak"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "vegan",
    "klasik",
    "hafif"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Taze Fasulye",
          "amount": "500 gram",
          "note": "kılçıkları temizlenmiş ve uzunlamasına kesilmiş"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "rendelenmiş"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ince dilimlenmiş"
        },
        {
          "item": "Sızma Zeytinyağı",
          "amount": "5 yemek kaşığı",
        },
        {
          "item": "Toz Şeker",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "1/2 su bardağı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tencereye zeytinyağının yarısını alın, soğan ve sarımsakları pembeleşene kadar orta ateşte kavurun.",
      "tip": "Soğanları karamelize etmeden yumuşatmanız yemeğin rengini korur."
    },
    {
      "stepNumber": 2,
      "instruction": "Temizlenip doğranmış taze fasulyeleri ekleyin ve rengi canlı yeşile dönene kadar 5-6 dakika soteleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Rendelenmiş domatesleri, toz şekeri ve tuzu ilave edip karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Sıcak suyu ekleyin, kapağını kapatıp fasulyeler yumuşayana kadar kısık ateşte yaklaşık 30-35 dakika pişirin.",
      "tip": "Tencerenin üzerine ıslatılmış yağlı kağıt kapatmak lezzeti hapseder."
    },
    {
      "stepNumber": 5,
      "instruction": "Ocağı kapattıktan sonra kalan zeytinyağını yemeğin üzerine gezdirip oda sıcaklığında soğumaya bırakın.",
      "tip": "Zeytinyağlı yemekler soğudukça ve dinlendikçe lezzetlenir."
    }
  ],
  "tips": [
    "Yemeği pişirdikten sonra buzdolabında 1 gece dinlendirerek soğuk servis yapmanız lezzetini katlayacaktır.",
    "Fasulyelerin kılçıksız ve taze olmasına dikkat edin; kırıldığında 'çıt' sesi çıkarmalıdır.",
    "Domateslerin ekşilik durumuna göre şeker miktarını damak tadınıza göre ayarlayabilirsiniz."
  ],
  "calories": 180,
  "imageUrl": "/images/recipes/zeytinyagli-taze-fasulye.jpg"
},
  {
  "id": "kuru-fasulye",
  "title": "Kuru Fasulye",
  "mainCategory": "sicak-yemekler",
  "subCategory": "sebze-yemekleri",
  "subCategoryLabel": "Bakliyat Yemekleri",
  "region": "Anadolu Mutfağı",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 50,
  "totalTimeMinutes": 65,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "kuru fasulye",
    "dana eti",
    "kuru soğan",
    "domates salçası",
    "biber salçası",
    "tereyağı"
  ],
  "tags": [
    "bakliyat",
    "et",
    "sulu yemek",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Kuru fasulye",
          "amount": "2 su bardağı",
          "note": "bir gece önceden ıslatılmış"
        },
        {
          "item": "Dana kuşbaşı",
          "amount": "300 gram",
          "note": "orta yağlı"
        },
        {
          "item": "Kuru soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Domates salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Biber salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sıvı yağ",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sıcak su",
          "amount": "4 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Karabiber",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Pul biber",
          "amount": "1 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Önceden ıslatılmış fasulyeleri süzüp tencereye alın, üzerini geçecek kadar su ekleyip hafif yumuşayana kadar haşlayın ve süzün.",
      "tip": "Fasulyeleri tamamen ezilecek kadar çok haşlamayın."
    },
    {
      "stepNumber": 2,
      "instruction": "Ayrı bir tencerede sıvı yağ ve tereyağını eritin, etleri ekleyip suyunu salıp çekene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Doğranmış soğanları ekleyin ve pembeleşinceye kadar etlerle birlikte kavurun.",
    },
    {
      "stepNumber": 4,
      "instruction": "Domates ve biber salçasını ekleyip kokusu çıkana kadar 1-2 dakika kavurmaya devam edin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Haşlanmış fasulyeleri, tuzu ve baharatları ilave edip yavaşça karıştırın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Sıcak suyu ekleyin, kapağını kapatıp kısık ateşte fasulyeler kıvam alana kadar yaklaşık 30-35 dakika pişirin.",
      "tip": "Gerekirse pişme esnasında az miktarda sıcak su ilave edebilirsiniz."
    }
  ],
  "tips": [
    "Fasulyenin gazını almak için haşlama suyuna bir çimdik kimyon ekleyebilirsiniz.",
    "Yemeğin lezzetini katlamak için pişirme işlemini toprak güveçte yapabilirsiniz.",
    "Yanında tereyağlı pirinç pilavı ve turşu ile servis etmeniz tavsiye edilir."
  ],
  "calories": 420,
  "imageUrl": "/images/recipes/kuru-fasulye.jpg"
},
  {
  "id": "nohut-yemegi",
  "title": "Nohut Yemeği",
  "mainCategory": "sicak-yemekler",
  "subCategory": "sebze-yemekleri",
  "subCategoryLabel": "Sulu Yemekler",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 45,
  "totalTimeMinutes": 60,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "nohut",
    "kuru soğan",
    "domates salçası",
    "biber salçası",
    "zeytinyağı",
    "tereyağı"
  ],
  "tags": [
    "bakliyat",
    "sulu yemek",
    "tencere yemeği",
    "klasik",
    "ev yemeği"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Nohut",
          "amount": "2 su bardağı",
          "note": "akşamdan ıslatılmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Domates Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Biber Salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "4 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Toz Kırmızı Biber",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tencereye zeytinyağı ve tereyağını alın, yemeklik doğranmış soğanları pembeleşinceye kadar kavurun.",
      "tip": "Soğanların yanmaması için orta ateşte karıştırarak kavurun."
    },
    {
      "stepNumber": 2,
      "instruction": "Domates ve biber salçasını ekleyip kokusu çıkana kadar 2 dakika kavurmaya devam edin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Akşamdan ıslatıp süzdüğünüz nohutları tencereye ilave edin ve 2-3 dakika karıştırarak soteleyin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Tuz, toz kırmızı biber ve sıcak suyu ekleyip karıştırın, tencerenin kapağını kapatın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Kısık ateşte nohutlar yumuşayana kadar yaklaşık 40-45 dakika pişirin.",
      "tip": "Düdüklü tencere kullanırsanız pişme süresi 20 dakikaya düşecektir."
    }
  ],
  "tips": [
    "Nohutların kolay pişmesi için ıslatma suyuna 1 çay kaşığı karbonat ekleyebilirsiniz.",
    "Geleneksel lezzet için yanında tereyağlı pirinç pilavı ve turşu ile servis yapın.",
    "Arzuya göre soğanlarla birlikte kuşbaşı et veya sucuk ekleyerek etli nohut da yapabilirsiniz."
  ],
  "calories": 320,
  "imageUrl": "/images/recipes/nohut-yemegi.jpg"
},
  {
  "id": "firinda-mucver",
  "title": "Fırında Mücver",
  "mainCategory": "sicak-yemekler",
  "subCategory": "sebze-yemekleri",
  "subCategoryLabel": "Sebze Yemekleri",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 55,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "kabak",
    "yumurta",
    "un",
    "beyaz peynir",
    "dereotu",
    "taze soğan"
  ],
  "tags": [
    "fırın",
    "vejetaryen",
    "kabak",
    "mücver",
    "hafif"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Kabak",
          "amount": "3 adet",
          "note": "orta boy"
        },
        {
          "item": "Yumurta",
          "amount": "3 adet",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Beyaz Peynir",
          "amount": "150 gram",
          "note": "ufalanmış"
        },
        {
          "item": "Un",
          "amount": "1 su bardağı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
        },
        {
          "item": "Taze Soğan",
          "amount": "4 dal",
          "note": "ince kıyılmış"
        },
        {
          "item": "Dereotu",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Kabartma Tozu",
          "amount": "1 paket",
        },
        {
          "item": "Tuz ve Karabiber",
          "amount": "1'er çay kaşığı",
          "note": "damak tadına göre"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Kabakları rendeleyin ve avucunuzla suyunu iyice sıkarak ayrı bir kaba alın.",
      "tip": "Kabakların suyunu çok iyi sıkmak mücverin sulanmasını ve hamur olmasını önler."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir karıştırma kabında yumurtaları ve zeytinyağını çırpın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Çırpılan karışıma un, kabartma tozu, tuz ve karabiberi ekleyip pürüzsüz olana kadar karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Sıkılmış kabakları, taze soğanı, dereotunu ve ufalanmış beyaz peyniri harca ilave edip spatula ile karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Harcı yağlanmış veya pişirme kağıdı serilmiş fırın kabına dökün ve üzerini düzeltin.",
      "tip": "İsteğe bağlı olarak üzerine susam veya çörek otu serpebilirsiniz."
    },
    {
      "stepNumber": 6,
      "instruction": "Önceden ısıtılmış 180 derece fırında üzeri altın sarısı olana kadar yaklaşık 35 dakika pişirin.",
    }
  ],
  "tips": [
    "Fırından çıktıktan sonra 10-15 dakika dinlendirirseniz daha kolay dilimlenir.",
    "Yanında sarımsaklı çırpılmış yoğurt ile servis edilmesi tavsiye edilir.",
    "Peynirin tuz oranına göre ekleyeceğiniz tuz miktarını ayarlamayı unutmayın."
  ],
  "calories": 185,
  "imageUrl": "/images/recipes/firinda-mucver.jpg"
},
  {
  "id": "etli-yaprak-sarmasi",
  "title": "Etli Yaprak Sarması",
  "mainCategory": "sicak-yemekler",
  "subCategory": "sebze-yemekleri",
  "subCategoryLabel": "Et Yemekleri",
  "region": "Anadolu Mutfağı",
  "prepTimeMinutes": 45,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 85,
  "servings": 6,
  "difficulty": "zor",
  "mainIngredients": [
    "asma yaprağı",
    "kıyma",
    "pirinç",
    "soğan",
    "tereyağı",
    "salça"
  ],
  "tags": [
    "etli dolma",
    "klasik",
    "türk mutfağı",
    "akşam yemeği"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "İç Harcı İçin",
      "items": [
        {
          "item": "Salamura Asma Yaprağı",
          "amount": "400 gram",
          "note": "tuzu alınmış"
        },
        {
          "item": "Kıyma",
          "amount": "350 gram",
          "note": "orta yağlı dana ve kuzu karışımı"
        },
        {
          "item": "Pirinç",
          "amount": "1 su bardağı",
          "note": "yıkanmış ve süzülmüş"
        },
        {
          "item": "Kuru Soğan",
          "amount": "2 adet",
          "note": "yemeklik çok ince doğranmış"
        },
        {
          "item": "Domates Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Biber Salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Baharatlar (Tuz, Karabiber, Pul Biber, Kuru Nane)",
          "amount": "1'er tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Pişirme Suyu İçin",
      "items": [
        {
          "item": "Sıcak Su",
          "amount": "2 su bardağı",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
          "note": "üzeri için"
        },
        {
          "item": "Limon Suyu",
          "amount": "2 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Salamura yaprakları tuzunun çıkması için ılık suda 15 dakika bekletin, ardından yıkayıp süzün.",
      "tip": "Taze yaprak kullanıyorsanız sıcak suda 2-3 dakika haşlamanız yeterlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir kapta kıyma, pirinç, soğan, salçalar, tereyağı, maydanoz ve baharatları iyice yoğurarak homojen bir harç elde edin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Yaprağın damarlı kısmı üste gelecek şekilde düz bir zemine serin, sap kısmını kesin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Geniş kısmına harçtan koyup kenarları içe katlayarak rulo şeklinde çok sıkı olmayacak şekilde sarın.",
      "tip": "Etli sarma pişerken pirinçler şişeceği için zeytinyağlı sarmaya göre biraz daha gevşek sarılmalıdır."
    },
    {
      "stepNumber": 5,
      "instruction": "Tencerenin tabanına yaprak saplarını dizin ve sarılan yaprakları tencereye sıkıca yan yana sıralayın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Üzerine limon suyu, parçalanmış tereyağı ve sıcak suyu ekleyin. Dağılmamaları için üzerine porselen bir tabak kapatın.",
    },
    {
      "stepNumber": 7,
      "instruction": "Kapağı kapalı tencerede, kısık ateşte pirinçler ve etler yumuşayana kadar yaklaşık 40 dakika pişirin.",
    }
  ],
  "tips": [
    "Etli yaprak sarmasını mutlaka sıcak veya ılık olarak servis yapın.",
    "Yanında sarımsaklı yoğurt veya süzme yoğurt ile servis edilmesi lezzetini tamamlar.",
    "Tencerenin dibine ekşi lezzet vermesi için erik veya ayva dilimleri ekleyebilirsiniz."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/etli-yaprak-sarmasi.jpg"
},
  {
  "id": "imam-bayildi",
  "title": "İmam Bayıldı",
  "mainCategory": "sicak-yemekler",
  "subCategory": "sebze-yemekleri",
  "subCategoryLabel": "Zeytinyağlı Yemekler",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 25,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 65,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "patlıcan",
    "kuru soğan",
    "domates",
    "sarımsak",
    "zeytinyağı",
    "maydanoz"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "klasik",
    "sebze",
    "yaz yemeği"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Kemer Patlıcanı",
          "amount": "4 adet",
          "note": "orta boy"
        },
        {
          "item": "Kuru Soğan",
          "amount": "3 adet",
          "note": "piyazlık doğranmış"
        },
        {
          "item": "Domates",
          "amount": "3 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "8 diş",
          "note": "bütün veya ikiye bölünmüş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Toz Şeker",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Patlıcanları alacalı soyup ortalarını uzunlamasına çizin ve acısının çıkması için 20 dakika tuzlu suda bekletin.",
      "tip": "Suda bekleyen patlıcanları kurulamadan yağa atmayın."
    },
    {
      "stepNumber": 2,
      "instruction": "Kuruladığınız patlıcanları zeytinyağında her tarafı hafifçe kızarana kadar çevirin ve fırın tepsisine dizin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Tavada kalan zeytinyağında soğanları ve sarımsakları yumuşayana kadar kavurun.",
      "tip": "Soğanların karamelize olması yemeğe lezzet katar."
    },
    {
      "stepNumber": 4,
      "instruction": "Domatesleri, tuzu ve şekeri ilave edip domatesler suyunu çekene kadar pişirin. Ocaktan alıp kıyılmış maydanozu karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Patlıcanların yarık kısımlarını açıp hazırladığınız harcı bolca doldurun.",
    },
    {
      "stepNumber": 6,
      "instruction": "Tepsiye yarım çay bardağı sıcak su ekleyin ve önceden ısıtılmış 180 derece fırında 30 dakika pişirin.",
    }
  ],
  "tips": [
    "Zeytinyağlı yemekler dinlendikçe lezzetlenir; mümkünse bir gün dolapta bekletip soğuk servis edin.",
    "Soğan miktarını bol tutmak yemeğin geleneksel lezzetini ortaya çıkarır.",
    "Servis ederken üzerine taze taze kıyılmış maydanoz ve gezdirilmiş sızma zeytinyağı ekleyebilirsiniz."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/imam-bayildi.jpg"
},
  {
  "id": "ezogelin-corbasi",
  "title": "Ezogelin Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Gaziantep",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 45,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "kırmızı mercimek",
    "pirinç",
    "bulgur",
    "tereyağı",
    "nane",
    "salça",
    "soğan"
  ],
  "tags": [
    "çorba",
    "klasik",
    "yöresel",
    "bakliyat",
    "sıcak"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Çorba Malzemeleri",
      "items": [
        {
          "item": "Kırmızı Mercimek",
          "amount": "1 su bardağı",
          "note": "yıkanmış ve süzülmüş"
        },
        {
          "item": "Pirinç",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Pilavlık Bulgur",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Domates Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Biber Salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "6 su bardağı",
          "note": "et veya tavuk suyu da kullanılabilir"
        },
        {
          "item": "Kuru Nane",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Pul Biber",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tencerede tereyağı ve zeytinyağını ısıtıp soğan ile sarımsakları pembeleşene kadar kavurun.",
      "tip": "Soğanları yakmadan kısık ateşte yumuşatmak aromayı güzelleştirir."
    },
    {
      "stepNumber": 2,
      "instruction": "Domates ve biber salçasını ekleyip kokusu çıkana kadar 1-2 dakika kavurmaya devam edin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Yıkanmış mercimek, bulgur ve pirinci ekleyerek 1 dakika karıştırarak kavurun.",
    },
    {
      "stepNumber": 4,
      "instruction": "Sıcak suyu, tuzu ve baharatları ekleyip tencerenin kapağını kapatın; bakliyatlar yumuşayana kadar yaklaşık 25 dakika kısık ateşte pişirin.",
      "tip": "Taşmayı önlemek için tencere kapağını yarım aralık bırakın."
    },
    {
      "stepNumber": 5,
      "instruction": "Pişen çorbayı karıştırıp sıcak olarak limon dilimleri eşliğinde servis edin.",
    }
  ],
  "tips": [
    "Geleneksel Ezogelin çorbası tamamen pürüzsüz yapılmaz, taneli kalması makbuldür.",
    "Servis ederken üzerine tereyağında kızdırılmış kuru nane ve pul biber gezdirebilirsiniz.",
    "Çorba durdukça koyulaşırsa servis öncesi az miktarda sıcak su ekleyerek kıvamını açabilirsiniz."
  ],
  "calories": 180,
  "imageUrl": "/images/recipes/ezogelin-corbasi.jpg"
},
  {
  "id": "tarhana-corbasi",
  "title": "Tarhana Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Anadolu",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 30,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "toz tarhana",
    "tereyağı",
    "domates salçası",
    "sarımsak",
    "kuru nane",
    "et suyu"
  ],
  "tags": [
    "çorba",
    "klasik",
    "geleneksel",
    "kış çorbası",
    "kolay"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Toz Tarhana",
          "amount": "4 yemek kaşığı",
        },
        {
          "item": "Tereyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Domates Salçası",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Sarımsak",
          "amount": "1 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Su veya Et Suyu",
          "amount": "5 su bardağı",
          "note": "ılık veya soğuk"
        },
        {
          "item": "Kuru Nane",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Pul Biber",
          "amount": "0.5 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Toz tarhanayı 1 su bardağı ılık suyun içinde karıştırarak yumuşamaya bırakın.",
      "tip": "Tarhanayı önceden suda bekletmek topaklanmasını önler."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereye tereyağı ve zeytinyağını alın. Salça, sarımsak ve kuru naneyi ekleyip kokusu çıkana kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Kalan 4 su bardağı suyu tencereye ekleyin. Yumuşatılmış tarhanayı da tencereye ilave edin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Çorbayı kaynayana kadar çırpma teli ile sürekli karıştırarak pişirin.",
      "tip": "Kaynayana kadar karıştırmayı bırakmayın, aksi halde dip tutabilir."
    },
    {
      "stepNumber": 5,
      "instruction": "Kaynamaya başlayan çorbaya tuz ve pul biberi ekleyin. Kısık ateşte 5 dakika daha pişirip ocaktan alın.",
    }
  ],
  "tips": [
    "Kıvamı koyu olursa azar azar sıcak su ekleyerek açabilirsiniz.",
    "Servis ederken üzerine tereyağında kızdırılmış nane ve kruton ekmek ekleyebilirsiniz."
  ],
  "calories": 180,
  "imageUrl": "/images/recipes/tarhana-corbasi.jpg"
},
  {
  "id": "yayla-corbasi",
  "title": "Yayla Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Anadolu Mutfağı",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 30,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "pirinç",
    "yoğurt",
    "yumurta",
    "un",
    "tereyağı",
    "nane"
  ],
  "tags": [
    "çorba",
    "klasik",
    "yoğurtlu",
    "geleneksel",
    "başlangıç"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Çorba Tabanı İçin",
      "items": [
        {
          "item": "Pirinç",
          "amount": "1 kahve fincanı",
          "note": "yıkanmış"
        },
        {
          "item": "Su",
          "amount": "6 su bardağı",
          "note": "sıcak"
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Terbiyesi İçin",
      "items": [
        {
          "item": "Yoğurt",
          "amount": "1,5 su bardağı",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Yumurta sarısı",
          "amount": "1 adet",
        },
        {
          "item": "Un",
          "amount": "1 yemek kaşığı",
          "note": "tepeleme"
        }
      ]
    },
    {
      "groupTitle": "Sosu İçin",
      "items": [
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Kuru nane",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Pul biber",
          "amount": "1/2 çay kaşığı",
          "note": "isteğe bağlı"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Yıkanmış pirinci ve sıcak suyu tencereye alın, pirinçler yumuşayana kadar orta ateşte haşlayın.",
    },
    {
      "stepNumber": 2,
      "instruction": "Ayrı bir kapta yoğurt, yumurta sarısı ve unu tel çırpıcı ile pürüzsüz bir kıvam alana kadar çırpın.",
      "tip": "Yoğurdun oda sıcaklığında olması çorbanın kesilmesini önler."
    },
    {
      "stepNumber": 3,
      "instruction": "Kaynayan çorbanın suyundan 1-2 kepçe alıp kademeli olarak yoğurtlu karışıma ekleyin ve hızlıca çırparak terbiyeyi ılıtın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Ilıttığınız terbiyeyi tencereye ince bir sicim gibi akıtırken çorbayı sürekli karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Çorba kaynamaya başladıktan sonra kısık ateşte 5 dakika daha pişirin, ardından tuzunu ekleyip ocaktan alın.",
      "tip": "Yoğurdun kesilmemesi için tuzu mutlaka en son aşamada ekleyin."
    },
    {
      "stepNumber": 6,
      "instruction": "Sos tavasında tereyağını eritin, naneyi ekleyip köpürünce çorbanın üzerine gezdirerek servis yapın.",
    }
  ],
  "tips": [
    "Yoğurdun kesilmemesi için terbiyeyi temperleme (ılıtma) işlemini atlamayın ve tuzu çorba kaynadıktan sonra ekleyin.",
    "Çorbanız durdukça koyulaşırsa servis öncesi biraz sıcak su ekleyerek kıvamını açabilirsiniz.",
    "Daha lezzetli bir çorba için suyun bir kısmını tavuk suyu ile değiştirebilirsiniz."
  ],
  "calories": 185,
  "imageUrl": "/images/recipes/yayla-corbasi.jpg"
},
  {
  "id": "beyran-corbasi",
  "title": "Beyran Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Gaziantep",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 180,
  "totalTimeMinutes": 200,
  "servings": 4,
  "difficulty": "zor",
  "mainIngredients": [
    "kuzu gerdan",
    "pirinç",
    "sarımsak",
    "iç yağı",
    "pul biber",
    "et suyu"
  ],
  "tags": [
    "çorba",
    "gaziantep",
    "kuzu eti",
    "yöresel",
    "acılı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Et ve Haşlama İçin",
      "items": [
        {
          "item": "Kuzu gerdan",
          "amount": "1 kilogram",
          "note": "kemikli"
        },
        {
          "item": "Su",
          "amount": "8 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Çorba Tabanı ve Birleştirme İçin",
      "items": [
        {
          "item": "Pirinç",
          "amount": "1 çay bardağı",
          "note": "önceden haşlanmış"
        },
        {
          "item": "Kuzu iç yağı",
          "amount": "2 yemek kaşığı",
          "note": "eriltilmiş ve eritilip kavrulmuş"
        },
        {
          "item": "Sarımsak",
          "amount": "6 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Acı pul biber",
          "amount": "1 yemek kaşığı",
          "note": "Antep pul biberi"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Kuzu gerdanı su ve tuz ilavesiyle düdüklü tencerede etler kemikten tamamen ayrılana kadar yaklaşık 2 saat pişirin.",
      "tip": "Kaynama aşamasında kef denilen köpükleri süzgeçle toplayın."
    },
    {
      "stepNumber": 2,
      "instruction": "Haşlanan etleri süzün, zırh veya bıçak yardımıyla lif lif ditin ve et suyunu süzgeçten geçirip sıcak tutun.",
      "tip": "Etlerin olabildiğince ince ditilmesi lezzeti artırır."
    },
    {
      "stepNumber": 3,
      "instruction": "Bakır sahan veya derin metal çorba tabağının tabanına iç yağı, ezilmiş sarımsak ve pul biberi koyun.",
      "tip": "Geleneksel sunum için mutlaka bakır sahan tercih edin."
    },
    {
      "stepNumber": 4,
      "instruction": "Sahanın üzerine haşlanmış pirinci ve didiklenmiş kuzu etini yerleştirin.",
      "tip": "Malzemeleri üst üste katman şeklinde dizebilirsiniz."
    },
    {
      "stepNumber": 5,
      "instruction": "Sahana yüksek ateşe alıp üzerine fokurdayan sıcak et suyunu gezdirin ve bir taşım coşturarak pişirip hemen ocaktan alın.",
      "tip": "Yüksek ateş et suyunun yağla bütünleşip coşmasını sağlar."
    }
  ],
  "tips": [
    "Geleneksel Beyran için kuzu iç yağı (çöz yağı) kullanımı şarttır, dilerseniz tereyağı ile destekleyebilirsiniz.",
    "Servis ederken yanında mutlaka bol taze limon ve sıcak tırnak pide sunun.",
    "Çorbanın en önemli özelliği çok yüksek ateşte hızlıca kaynatılıp çok sıcak servis edilmesidir."
  ],
  "calories": 480,
  "imageUrl": "/images/recipes/beyran-corbasi.jpg"
},
  {
  "id": "kelle-paca-corbasi",
  "title": "Kelle Paça Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Gaziantep",
  "prepTimeMinutes": 30,
  "cookTimeMinutes": 180,
  "totalTimeMinutes": 210,
  "servings": 6,
  "difficulty": "zor",
  "mainIngredients": [
    "kuzu kellesi",
    "kuzu paça",
    "sarımsak",
    "tereyağı",
    "un",
    "limon",
    "sirke"
  ],
  "tags": [
    "çorba",
    "yöresel",
    "et",
    "klasik",
    "sakatat"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Haşlama İçin",
      "items": [
        {
          "item": "Kuzu Kellesi",
          "amount": "1 adet",
          "note": "iyice temizlenmiş"
        },
        {
          "item": "Kuzu Paça",
          "amount": "4 adet",
          "note": "ütülmüş ve temizlenmiş"
        },
        {
          "item": "Su",
          "amount": "3 litre",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Meyanesi ve Sosu İçin",
      "items": [
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Un",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sarımsak",
          "amount": "6 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Üzüm Sirkesi",
          "amount": "4 yemek kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Pul Biber",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Temizlenmiş kelle ve paçaları bol suda yıkayıp derin bir tencereye veya düdüklüye alın; suyu ekleyip etler kemikten kolayca ayrılana kadar yaklaşık 2-2.5 saat haşlayın.",
      "tip": "Haşlama sırasında suyun yüzeyinde biriken kefi (köpüğü) süzgeçle temizleyin."
    },
    {
      "stepNumber": 2,
      "instruction": "Haşlanan etleri tencereden çıkarıp ılıyınca küçük parçalar halinde ditin, haşlama suyunu ise ince bir süzgeçten geçirerek kenara ayırın.",
      "tip": "Süzülen kolajen zengini et suyunu kesinlikle süzmeden kullanmayın."
    },
    {
      "stepNumber": 3,
      "instruction": "Çorba tenceresinde tereyağını eritin, unu ilave edip kokusu çıkana kadar kısık ateşte kavurun.",
      "tip": "Unun rengini çok karartmadan hafif pembeleşene kadar kavurmanız yeterlidir."
    },
    {
      "stepNumber": 4,
      "instruction": "Süzdüğünüz sıcak et suyunu kavrulmuş una azar azar eklerken tel çırpıcıyla hızlıca karıştırın.",
      "tip": "Topaklanmayı önlemek için suyu yavaşça ve çırparak ekleyin."
    },
    {
      "stepNumber": 5,
      "instruction": "Ditilmiş etleri, ezilmiş sarımsağı, sirkeyi ve limon suyunu tencereye ekleyip kısık ateşte 15 dakika kaynatın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Küçük bir tavada kızdırılan tereyağında pul biberi yakmadan kızdırıp çorbanın üzerine gezdirerek sıcak servis yapın.",
    }
  ],
  "tips": [
    "Kelle ve paçaları pişirmeden önce sirkeli ve soğuk suda en az 1 saat bekletmek kokusunu tamamen alır.",
    "Servis ederken yanında ekstra sarımsaklı sirke sosu ve dilimlenmiş limon sunabilirsiniz.",
    "Çorbayı soğutmadan bol karabiber ve pul biber ilavesiyle sıcak tüketmeniz tavsiye edilir."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/kelle-paca-corbasi.jpg"
},
  {
  "id": "dugun-corbasi",
  "title": "Düğün Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 45,
  "totalTimeMinutes": 65,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "kuzu gerdan",
    "yoğurt",
    "un",
    "yumurta sarısı",
    "tereyağı",
    "limon"
  ],
  "tags": [
    "çorba",
    "klasik",
    "etli",
    "saray mutfağı",
    "terbiyeli"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Et ve Haşlama İçin",
      "items": [
        {
          "item": "Kuzu Gerdan",
          "amount": "500 gram",
          "note": "kemikli"
        },
        {
          "item": "Su",
          "amount": "6 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Terbiyesi İçin",
      "items": [
        {
          "item": "Süzme Yoğurt",
          "amount": "1 su bardağı",
          "note": "Oda sıcaklığında"
        },
        {
          "item": "Un",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Yumurta Sarısı",
          "amount": "1 adet",
        },
        {
          "item": "Limon Suyu",
          "amount": "2 yemek kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Toz Kırmızı Biber",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Pul Biber",
          "amount": "1 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Kuzu gerdan etini derin bir tencereye alın, suyu ekleyip etler kemikten kolayca ayrılana kadar iyice haşlayın.",
      "tip": "Etin suyundaki kefi (köpüğü) kevgirle alırsanız çorbanız berrak olur."
    },
    {
      "stepNumber": 2,
      "instruction": "Haşlanan etleri tencereden çıkarıp ılıyınca küçük parçalar halinde tiftikleyin. Et suyunu süzgeçten geçirerek kenara ayırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Terbiye için yoğurt, un, yumurta sarısı ve limon suyunu bir kapta pürüzsüz olana kadar çırpın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Süzülen et suyunu tekrar tencereye alın. Kaynayan et suyundan 1-2 kepçe terbiyeye ekleyip hızlıca çırparak terbiyeyi ılıtın.",
      "tip": "Terbiyenin kesilmemesi için bu ısı eşitleme adımı kritik önem taşır."
    },
    {
      "stepNumber": 5,
      "instruction": "Ilıyan terbiyeyi kaynayan et suyuna yavaşça dökün ve sürekli karıştırın. Tiftiklenmiş etleri ve tuzu ekleyip kısık ateşte 5-10 dakika kadar pişirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Küçük bir tavada tereyağını eritin, toz biber ve pul biberi ekleyip kızdırın. Çorbayı kaselere servis yaptıktan sonra üzerine biberli tereyağı gezdirin.",
    }
  ],
  "tips": [
    "Terbiyeli çorbalarda tuzu her zaman pişmenin son aşamasında ekleyin, aksi halde yoğurt kesilebilir.",
    "Geleneksel lezzeti yakalamak için mutlaka kuzu gerdan eti ve kemik suyu kullanın.",
    "Servis sırasında yanında sirke ve sarımsaklı sos sunarak lezzetini zenginleştirebilirsiniz."
  ],
  "calories": 285,
  "imageUrl": "/images/recipes/dugun-corbasi.jpg"
},
  {
  "id": "domates-corbasi",
  "title": "Domates Çorbası",
  "mainCategory": "sicak-yemekler",
  "subCategory": "corbalar",
  "subCategoryLabel": "Çorbalar",
  "region": "Klasik Türk Mutfağı",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 30,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "domates",
    "un",
    "tereyağı",
    "süt",
    "domates salçası",
    "kaşar peyniri"
  ],
  "tags": [
    "çorba",
    "klasik",
    "kolay",
    "vejetaryen",
    "başlangıç"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Domates",
          "amount": "5 adet",
          "note": "olgun ve rendelenmiş"
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Un",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Domates salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Süt",
          "amount": "1 su bardağı",
          "note": "ılık"
        },
        {
          "item": "Su",
          "amount": "4 su bardağı",
          "note": "sıcak"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Karabiber",
          "amount": "yarım çay kaşığı",
        },
        {
          "item": "Rendelenmiş kaşar peyniri",
          "amount": "1 çay bardağı",
          "note": "servis için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Tereyağını tencerede eritin, unu ekleyip kokusu çıkana kadar kısık ateşte kavurun.",
      "tip": "Unun rengini esmerleştirmeden hafifçe kavurmanız yeterlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Salçayı ilave edip 1 dakika daha kavurun, ardından rendelenmiş domatesleri ekleyip karıştırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Sıcak suyu azar azar eklerken topaklanmaması için çırpma teliyle hızlıca karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Çorba kaynamaya başlayınca ılık sütü yavaşça dökün ve karıştırarak kısık ateşte 10 dakika pişirin.",
      "tip": "Sütün kesilmesini önlemek için mutlaka ılık olmasına dikkat edin."
    },
    {
      "stepNumber": 5,
      "instruction": "Tuz ve karabiberi ekleyip karıştırın, ardından tencereyi ocaktan alın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Çorbayı kaselere paylaştırın, üzerine rendelenmiş kaşar peyniri serpip sıcak servis edin.",
    }
  ],
  "tips": [
    "Daha lezzetli bir çorba için mevsiminde etli ve sulu domatesler tercih edin.",
    "Tamamen pürüzsüz bir kıvam isterseniz servis öncesi çorbayı blenderdan geçirebilirsiniz.",
    "Kızarmış ekmek küpleri (kruton) ile servis ederek lezzetini artırabilirsiniz."
  ],
  "calories": 165,
  "imageUrl": "/images/recipes/domates-corbasi.jpg"
},
];

export default sicakYemekler;