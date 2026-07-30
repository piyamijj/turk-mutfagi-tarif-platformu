import { Recipe } from "../types";

const mezeler: Recipe[] = [
  {
    id: "haydari",
    title: "Haydari",
    description: "Süzme yoğurt, taze nane, sarımsak ve tereyağında kızdırılmış kuru nanenin muhteşem uyumuyla hazırlanan, sofraların vazgeçilmezi klasik bir soğuk meze.",
    mainCategory: "mezeler",
    subCategory: "soguk-mezeler",
    subCategoryLabel: "Soğuk Mezeler",
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    totalTimeMinutes: 20,
    servings: 4,
    difficulty: "kolay",
    mainIngredients: ["süzme yoğurt", "beyaz peynir", "sarımsak", "tereyağı", "nane"],
    tags: ["vejetaryen", "glutensiz", "soğuk-meze", "pratik"],
    ingredientGroups: [
      {
        groupTitle: "Ana Malzemeler",
        items: [
          { item: "Süzme Yoğurt", amount: "500 gram", note: "koyu kıvamlı" },
          { item: "Sert Beyaz Peynir", amount: "100 gram", note: "çatalla iyice ezilmiş" },
          { item: "Sarımsak", amount: "2 diş", note: "ezilmiş ve tuzla dövülmüş" },
          { item: "Dereotu", amount: "1/4 demet", note: "çok ince kıyılmış" }
        ]
      },
      {
        groupTitle: "Sosu ve Baharatları İçin",
        items: [
          { item: "Tereyağı", amount: "1 yemek kaşığı", note: "eritilmiş" },
          { item: "Zeytinyağı", amount: "1 yemek kaşığı" },
          { item: "Kuru Nane", amount: "1 tatlı kaşığı" },
          { item: "Tuz", amount: "1/2 çay kaşığı", note: "peynirin tuz oranına göre ayarlanabilir" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Sert beyaz peyniri derin bir karıştırma kabına alın ve çatalla pürüzsüz bir kıvam alana kadar iyice ezin."
      },
      {
        stepNumber: 2,
        instruction: "Ezilmiş peynirin üzerine süzme yoğurdu, ezilmiş sarımsakları ve ince kıyılmış dereotunu ekleyerek bir spatula yardımıyla homojen bir şekilde karıştırın."
      },
      {
        stepNumber: 3,
        instruction: "Küçük bir sos tavasında tereyağını eritin. Yağ hafifçe kızınca kuru naneyi ekleyin ve kokusu çıkana kadar yaklaşık 10-15 saniye soteleyip ocaktan alın (naneyi yakmamaya dikkat edin)."
      },
      {
        stepNumber: 4,
        instruction: "Kızdırılmış naneli tereyağını ve zeytinyağını yoğurtlu karışıma ekleyin. Tüm malzemeleri alttan üste doğru yavaşça karıştırarak sosun yoğurda iyice yedirilmesini sağlayın."
      },
      {
        stepNumber: 5,
        instruction: "Hazırladığınız haydariyi servis tabağına alın. Üzerini kaşığın arkasıyla hafifçe çukurlaştırıp biraz zeytinyağı gezdirebilir, taze nane yaprakları ve dereotu ile süsleyerek soğuk servis yapın."
      }
    ],
    tips: [
      "Haydarinin tam kıvamında olması için mutlaka süzme yoğurt kullanın. Eğer yoğurdunuz sulu ise bir tülbent yardımıyla süzerek suyunu alın.",
      "Servis yapmadan önce buzdolabında en az 1 saat dinlendirirseniz, sarımsak ve nanenin aroması yoğurda çok daha iyi geçecektir."
    ],
    imageUrl: "/images/recipes/haydari.jpg",
    isPopular: true
  },
  {
    id: "pacanga-boregi",
    title: "Paçanga Böreği",
    description: "Çıtır çıtır yufka arasında eriyen kaşar peyniri, çemenli nefis pastırma, domates ve biberin muhteşem buluşmasıyla hazırlanan, sıcak servis edilen efsanevi bir meze.",
    mainCategory: "mezeler",
    subCategory: "sicak-mezeler",
    subCategoryLabel: "Sıcak Mezeler",
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    totalTimeMinutes: 30,
    servings: 6,
    difficulty: "orta",
    mainIngredients: ["yufka", "pastırma", "kaşar peyniri", "domates", "yeşil biber"],
    tags: ["sıcak-meze", "börek", "pastırmalı", "kızartma"],
    ingredientGroups: [
      {
        groupTitle: "Börek Malzemeleri",
        items: [
          { item: "Taze Günlük Yufka", amount: "2 adet", note: "her biri 4 eşit üçgen parçaya bölünmüş" },
          { item: "Çemenli veya Çemensiz Pastırma", amount: "120 gram", note: "dilimlenmiş, şeritler halinde kesilmiş" },
          { item: "Rendelenmiş Kaşar Peyniri", amount: "1.5 su bardağı" },
          { item: "Domates", amount: "1 adet", note: "kabuğu soyulmuş, çekirdekleri çıkarılmış ve küp doğranmış" },
          { item: "Yeşil Biber", amount: "2 adet", note: "çekirdekleri temizlenmiş ve ince halkalar halinde doğranmış" }
        ]
      },
      {
        groupTitle: "Kızartmak ve Bulamak İçin",
        items: [
          { item: "Sıvı Yağ", amount: "2 su bardağı", note: "kızartmak için" },
          { item: "Galeta Unu", amount: "1 su bardağı", note: "isteğe bağlı çıtırlık için" },
          { item: "Yumurta", amount: "1 adet", note: "çırpılmış (galeta ununa bulamak istenirse)" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Yufkaları üst üste serip önce dörde, ardından her parçayı ikiye bölerek toplamda 8 adet geniş üçgen dilim elde edin (2 yufkadan toplam 8 adet börek çıkacaktır)."
      },
      {
        stepNumber: 2,
        instruction: "İç harcı hazırlamak için; doğranmış pastırmaları, rendelenmiş kaşar peynirini, çekirdekleri çıkarılıp küp doğranmış domatesleri ve ince kıyılmış yeşil biberleri bir kapta harmanlayın."
      },
      {
        stepNumber: 3,
        instruction: "Bir üçgen yufka dilimini tezgaha serin. Geniş kısmına hazırladığınız iç harçtan bolca (yaklaşık 1.5-2 yemek kaşığı) yerleştirin."
      },
      {
        stepNumber: 4,
        instruction: "Yufkanın kenarlarını içe doğru katlayın ve çok sıkı olmayacak şekilde rulo (sigara böreğinden daha kalın ve yassı) şeklinde sarın. Yufkanın uç kısmını açılmaması için hafifçe suya batırarak yapıştırın."
      },
      {
        stepNumber: 5,
        instruction: "Daha çıtır bir doku elde etmek için (isteğe bağlı); hazırladığınız börekleri önce çırpılmış yumurtaya, ardından galeta ununa bulayın."
      },
      {
        stepNumber: 6,
        instruction: "Geniş bir tavada sıvı yağı iyice kızdırın. Börekleri kızgın yağda, her iki tarafı da altın sarısı renk alana kadar yaklaşık 2-3 dakika kızartın."
      },
      {
        stepNumber: 7,
        instruction: "Kızaran börekleri kağıt havlu serili bir tabağa alarak fazla yağını süzdürün. İçindeki kaşar peyniri donmadan, sıcak ve çıtır çıtır servis yapın."
      }
    ],
    tips: [
      "Domateslerin çekirdekli sulu kısımlarını mutlaka ayıklayın ve sadece etli kısımlarını doğrayın. Aksi takdirde domatesin suyu yufkayı yumuşatır ve kızarırken patlamasına neden olur.",
      "Daha hafif bir alternatif için böreklerin üzerine fırça ile zeytinyağı sürüp, yağlı kağıt serili fırın tepsisinde 180 derece fırında üzerleri kızarana kadar yaklaşık 20-25 dakika pişirebilirsiniz."
    ],
    imageUrl: "/images/recipes/pacanga-boregi.jpg",
    isFeatured: true
  },
  {
  "id": "humus",
    description: "Nohut ve tahinin zeytinyağıyla buluştuğu, Ortadoğu ve Türk mutfağının ortak mirası olan pürüzsüz, doyurucu bir meze klasiği.",
  "title": "Humus",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Hatay",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 55,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "nohut",
    "tahin",
    "sarımsak",
    "limon suyu",
    "zeytinyağı",
    "kimyon"
  ],
  "tags": [
    "meze",
    "vejetaryen",
    "vegan",
    "hatay",
    "soğuk meze"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Humus Tabanı İçin",
      "items": [
        {
          "item": "Nohut",
          "amount": "2 su bardağı",
          "note": "haşlanmış, kabukları soyulmuş"
        },
        {
          "item": "Tahin",
          "amount": "1/2 su bardağı",
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Limon suyu",
          "amount": "1/2 çay bardağı",
          "note": "taze sıkılmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "3 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Buzlu su",
          "amount": "3 yemek kaşığı",
          "note": "soğuk"
        },
        {
          "item": "Kimyon",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Toz kırmızı biber",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Maydanoz",
          "amount": "1 tutam",
          "note": "ince kıyılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Haşlanmış ve kabukları soyulmuş nohutları mutfak robotuna alın ve püre olana kadar çekin.",
      "tip": "Kabukları ayıklamak humusa pürüzsüz ve ipeksi bir kıvam verir."
    },
    {
      "stepNumber": 2,
      "instruction": "Nohutların üzerine tahin, ezilmiş sarımsak, limon suyu, zeytinyağı, kimyon ve tuzu ekleyip robottan geçirmeye devam edin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Kıvamı yumuşatmak ve rengini açmak için buzlu suyu azar azar ekleyerek robota devam edin.",
      "tip": "Buzlu su humusun kremsi bir doku kazanmasını sağlar."
    },
    {
      "stepNumber": 4,
      "instruction": "Hazırladığınız humusu geniş bir servis tabağına yayın ve kaşığın arkasıyla ortasına hafif bir çukur açın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Küçük bir tavada zeytinyağı ve toz kırmızı biberi hafifçe ısıtıp humusun üzerine gezdirin, kıyılmış maydanozla süsleyin.",
    }
  ],
  "tips": [
    "Nohutları haşlarken suyuna 1 çay kaşığı karbonat eklerseniz kabukları çok daha kolay ayrılır.",
    "Sıcak humus tercih ederseniz üzerini tereyağında kavrulmuş pastırma veya çam fıstığı ile servis edebilirsiniz.",
    "Buzdolabında hava almayan bir kapta 3-4 gün tazeliğini korur."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/humus.jpg"
},
  {
  "id": "muhammara",
    description: "Kızarmış kırmızı biber ve cevizin acı biberle harmanlandığı, Güneydoğu Anadolu'nun ateşli ve zengin mezesi.",
  "title": "Muhammara / Acuka",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Meze ve Salatalar",
  "region": "Gaziantep",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 20,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "közlenmiş kırmızı biber",
    "ceviz",
    "biber salçası",
    "domates salçası",
    "zeytinyağı",
    "nar ekşisi",
    "sarımsak"
  ],
  "tags": [
    "meze",
    "kahvaltılık",
    "vejetaryen",
    "soğuk meze",
    "gaziantep"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Muhammara Malzemeleri",
      "items": [
        {
          "item": "Közlenmiş Kırmızı Biber",
          "amount": "2 adet",
          "note": "kabukları soyulmuş"
        },
        {
          "item": "Ceviz İçi",
          "amount": "1 su bardağı",
          "note": "iri çekilmiş"
        },
        {
          "item": "Acı Biber Salçası",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Domates Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Ekmek Kırıntısı",
          "amount": "1/2 su bardağı",
          "note": "bayat ekmek içi"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Nar Ekşisi",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Kimyon",
          "amount": "1 çay kaşığı",
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
      "instruction": "Közlenmiş biberleri, sarımsağı ve ceviz içini mutfak robotuna alın.",
      "tip": "Malzemelerin tamamen püreleşmemesi için robotu kısa aralıklarla bas-çek yaparak çalıştırın."
    },
    {
      "stepNumber": 2,
      "instruction": "Biber salçası, domates salçası, ekmek kırıntısı, kimyon ve pul biberi ekleyip tekrar robottan geçirin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Zeytinyağı ve nar ekşisini ilave edip kaşıkla homojen bir kıvam alana kadar karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Muhammarayı servis tabağına yayın, üzerine zeytinyağı gezdirip ceviz taneleriyle süsleyerek servis edin.",
      "tip": "Buzdolabında 1 saat dinlendirirseniz lezzetler birbiriyle bütünleşecektir."
    }
  ],
  "tips": [
    "Cevizleri un haline getirmek yerine dişe gelecek büyüklükte bırakmak geleneksel dokuyu korur.",
    "Hava geçirmez cam kavanozda, üzerine bir parmak zeytinyağı ekleyerek buzdolabında 1 hafta saklayabilirsiniz."
  ],
  "calories": 240,
  "imageUrl": "/images/recipes/muhammara.jpg"
},
  {
  "id": "babagannus",
    description: "Közlenmiş patlıcanın tahin ve limonla buluştuğu, dumanlı aromasıyla dikkat çeken pürüzsüz bir meze.",
  "title": "Babagannuş",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler",
  "region": "Hatay",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 40,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "patlıcan",
    "kırmızı biber",
    "domates",
    "sarımsak",
    "zeytinyağı",
    "nar ekşisi"
  ],
  "tags": [
    "meze",
    "közleme",
    "hatay",
    "vejetaryen",
    "zeytinyağlı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Babagannuş Malzemeleri",
      "items": [
        {
          "item": "Patlıcan",
          "amount": "3 adet",
          "note": "kemer patlıcan"
        },
        {
          "item": "Kapya Biber",
          "amount": "2 adet",
          "note": "kırmızı"
        },
        {
          "item": "Domates",
          "amount": "1 adet",
          "note": "kabuğu soyulmuş, küçük küp doğranmış"
        },
        {
          "item": "Yeşil Biber",
          "amount": "2 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Nar Ekşisi",
          "amount": "2 yemek kaşığı",
          "note": "doğal"
        },
        {
          "item": "Maydanoz",
          "amount": "1/4 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
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
      "instruction": "Patlıcan ve kapya biberleri ocak üzerinde veya fırında iyice közleyin.",
      "tip": "Ocakta közlemek meze için daha isli bir aroma sağlar."
    },
    {
      "stepNumber": 2,
      "instruction": "Közlenen sebzelerin kabuklarını soyun ve kesme tahtasında bıçakla ince ince kıyın.",
      "tip": "Sebzeleri sıcağıyla kapalı bir poşette bekletirseniz kabukları kolayca soyulur."
    },
    {
      "stepNumber": 3,
      "instruction": "Kıyılan patlıcan ve biberleri karıştırma kabına alın; üzerine domates, yeşil biber, sarımsak ve maydanozu ekleyin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Zeytinyağı, nar ekşisi, tuz ve pul biberi ilave edip karıştırın, servis tabağına yayın.",
    }
  ],
  "tips": [
    "Patlıcanları közlemeden önce bıçakla birkaç yerinden delmeyi unutmayın.",
    "Servis ederken üzerini nar taneleri ve ceviz içi ile süsleyebilirsiniz.",
    "Buzdolabında 1 saat dinlendirildikten sonra soğuk servis edilmesi lezzetini artırır."
  ],
  "calories": 160,
  "imageUrl": "/images/recipes/babagannus.jpg"
},
  {
  "id": "koz-patlican-salatasi",
    description: "Ateşte közlenen patlıcanın domates ve biberle buluştuğu, dumanlı ve hafif bir zeytinyağlı meze.",
  "title": "Köz Patlıcan Salatası",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Salatalar",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 35,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "patlıcan",
    "sarımsak",
    "zeytinyağı",
    "limon suyu",
    "maydanoz",
    "kapya biber"
  ],
  "tags": [
    "meze",
    "salata",
    "vejetaryen",
    "köz",
    "zeytinyağlı",
    "hafif"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Salata Malzemeleri",
      "items": [
        {
          "item": "Bostan patlıcanı",
          "amount": "3 adet",
          "note": "iri boy"
        },
        {
          "item": "Kapya biber",
          "amount": "1 adet",
          "note": "közlenmiş"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Limon suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Maydanoz",
          "amount": "1/4 demet",
          "note": "ince kıyılmış"
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
      "instruction": "Patlıcan ve biberleri bıçakla birkaç yerinden delip ocak üzerinde veya fırında yumuşayana kadar közleyin.",
      "tip": "Ocak ateşinde közlemek salataya nefis bir is kokusu kazandırır."
    },
    {
      "stepNumber": 2,
      "instruction": "Közlenen sebzeleri bir kaba alıp üzerini kapatın, 10 dakika dinlendirip kabuklarını soyun.",
      "tip": "Buharlaşma sayesinde kabuklar çok daha rahat soyulacaktır."
    },
    {
      "stepNumber": 3,
      "instruction": "Soyduğunuz patlıcan ve biberleri bıçakla ince ince kıyın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Geniş bir kapta kıyılan sebzeleri, ezilmiş sarımsağı, zeytinyağını, limon suyunu ve tuzu karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Salatayı servis tabağına alın, üzerine ince kıyılmış maydanoz gezdirip servis edin.",
    }
  ],
  "tips": [
    "Patlıcanların kararmasını önlemek için doğradıktan hemen sonra limon suyu ile harmanlayın.",
    "Servis yapmadan önce buzdolabında 30 dakika soğutursanız aroması daha da belirginleşir.",
    "Arzuya göre karışıma 2 yemek kaşığı süzme yoğurt ekleyerek yoğurtlu versiyonunu da yapabilirsiniz."
  ],
  "calories": 125,
  "imageUrl": "/images/recipes/koz-patlican-salatasi.jpg"
},
  {
  "id": "kopoglu",
    description: "Kızarmış patlıcan ve kabağın sarımsaklı yoğurt ve domates sosuyla buluştuğu katmanlı bir meze.",
  "title": "Köpoğlu",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 35,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "patlıcan",
    "biber",
    "domates",
    "sarımsak",
    "süzme yoğurt",
    "zeytinyağı"
  ],
  "tags": [
    "meze",
    "vejetaryen",
    "soğuk",
    "klasik",
    "kızartma"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Sebzeler",
      "items": [
        {
          "item": "Patlıcan",
          "amount": "3 adet",
          "note": "alacalı soyulup küp doğranmış"
        },
        {
          "item": "Yeşil biber",
          "amount": "3 adet",
          "note": "iri doğranmış"
        },
        {
          "item": "Kırmızı kapya biber",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Sıvı yağ",
          "amount": "1,5 su bardağı",
          "note": "kızartmak için"
        }
      ]
    },
    {
      "groupTitle": "Yoğurt Tabanı İçin",
      "items": [
        {
          "item": "Süzme Yoğurt",
          "amount": "1,5 su bardağı",
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Domates Sosu İçin",
      "items": [
        {
          "item": "Domates",
          "amount": "3 adet",
          "note": "rendelenmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sarımsak",
          "amount": "1 diş",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tuz ve Karabiber",
          "amount": "1 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Küp doğranmış patlıcanları acısının çıkması için tuzlu suda 15 dakika bekletin ve ardından kağıt havlu ile tamamen kurulayın.",
      "tip": "Patlıcanların yağ çekmemesi için iyice kurulanmış olması şarttır."
    },
    {
      "stepNumber": 2,
      "instruction": "Kızgın sıvı yağda önce biberleri, ardından patlıcanları altın sarısı olana kadar kızartın ve fazla yağını süzdürmek için havlu kağıda alın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Sos tavasında zeytinyağı ile sarımsağı soteleyin, rendelenmiş domates, tuz ve karabiberi ekleyip sos suyunu çekene kadar pişirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Süzme yoğurdu ezilmiş sarımsak ve tuz ile çırpıp servis tabağının tabanına yayın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Kızarmış sebzeleri yoğurdun üzerine dökün, en üste ılık domates sosunu gezdirerek servis yapın.",
    }
  ],
  "tips": [
    "Yoğurdun sulanmaması için mutlaka koyu kıvamlı süzme yoğurt kullanın.",
    "Sosun içine arzuya göre 1 çay kaşığı elma sirkesi ekleyerek lezzeti derinleştirebilirsiniz.",
    "Servis yapmadan önce buzdolabında 30 dakika dinlendirirseniz tatlar daha iyi bütünleşir."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/kopoglu.jpg"
},
  {
  "id": "tarator",
    description: "Ceviz, sarımsak ve bayat ekmeğin yoğurtla harmanlandığı, kremsi dokulu geleneksel bir meze.",
  "title": "Tarator",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Salatalar",
  "region": "Akdeniz",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 15,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "bayat ekmek içi",
    "ceviz",
    "sarımsak",
    "süzme yoğurt",
    "zeytinyağı",
    "limon suyu"
  ],
  "tags": [
    "meze",
    "soğuk meze",
    "vejetaryen",
    "klasik",
    "pratik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Tarator Malzemeleri",
      "items": [
        {
          "item": "Bayat Ekmek İçi",
          "amount": "3 dilim",
          "note": "ufalanmış"
        },
        {
          "item": "Ceviz İçi",
          "amount": "1 su bardağı",
          "note": "ince çekilmiş"
        },
        {
          "item": "Sarımsak",
          "amount": "3 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Süzme Yoğurt",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Limon Suyu",
          "amount": "2 yemek kaşığı",
          "note": "taze sıkılmış"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Soğuk Su",
          "amount": "2-3 yemek kaşığı",
          "note": "kıvam ayarlamak için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Bayat ekmek içlerini az miktarda su ile ıslatıp sıkın ve derin bir kaba alın.",
      "tip": "Ekmeklerin suyunu iyice sıkmanız sosun kıvamı için önemlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Kabın içine ezilmiş sarımsak, çekilmiş ceviz ve süzme yoğurdu ekleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Zeytinyağı, limon suyu ve tuzu ilave edip tel çırpıcı veya rondo yardımıyla homojen bir kıvam alana kadar karıştırın.",
      "tip": "Geleneksel doku için harcı havanda döverek veya çatalla ezerek hazırlayabilirsiniz."
    },
    {
      "stepNumber": 4,
      "instruction": "Kıvamı fazla koyu olursa kaşık kaşık soğuk su ekleyerek istediğiniz kremsi dokuyu yakalayın ve servis tabağına alın.",
    }
  ],
  "tips": [
    "Servis öncesi buzdolabında en az 1 saat dinlendirerek lezzetlerin birleşmesini sağlayın.",
    "Kalamar, dip fırritör ürünleri veya ızgara balıkların yanında mükemmel bir eşlikçidir.",
    "Üzerini zeytinyağı, ceviz taneleri ve ince kıyılmış maydanoz ile süsleyerek servis edin."
  ],
  "calories": 230,
  "imageUrl": "/images/recipes/tarator.jpg"
},
  {
  "id": "fava",
    description: "Kuru bakla'nın püre haline getirilip dereotu ve zeytinyağıyla servis edildiği, Ege mutfağının zarif bir mezesi.",
  "title": "Fava",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 50,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "kuru bakla",
    "kuru soğan",
    "zeytinyağı",
    "dereotu",
    "limon",
    "toz şeker"
  ],
  "tags": [
    "meze",
    "zeytinyağlı",
    "ege",
    "vejetaryen",
    "vegan",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Kuru Bakla",
          "amount": "2 su bardağı",
          "note": "kabuksuz"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "orta boy, yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Sıcak Su",
          "amount": "4 su bardağı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
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
          "item": "Dereotu",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Kuru baklaları yıkayıp süzün ve ılık suda yaklaşık 15 dakika bekletin.",
      "tip": "Baklaları önceden suda bekletmek pişme süresini kısaltır."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereye zeytinyağını alın, doğranmış soğanları ekleyip pembeleşinceye kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Süzülen baklaları, şekeri, tuzu, limon suyunu ve sıcak suyu tencereye ekleyip karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Kapağı kapalı şekilde, kısık ateşte baklalar tamamen yumuşayıp suyunu çekene kadar yaklaşık 30-35 dakika pişirin.",
      "tip": "Baklaların dibinin tutmaması için ara sıra karıştırın."
    },
    {
      "stepNumber": 5,
      "instruction": "Pişen karışımı ocaktan alın ve pürüzsüz bir kıvam alana kadar el blenderı ile ezin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Kıyılmış dereotunun yarısını karışıma ekleyip karıştırın ve ıslatılmış bir borcama veya kalıba dökün.",
      "tip": "Kalıbı önceden suyla ıslatmak favanın yapışmadan çıkmasını sağlar."
    },
    {
      "stepNumber": 7,
      "instruction": "Oda sıcaklığına geldikten sonra buzdolabında en az 4 saat dinlendirin, dilimleyerek kalan dereotu ve zeytinyağı ile servis edin.",
    }
  ],
  "tips": [
    "Favanın tam kıvam alıp pürüzsüz dilimlenmesi için buzdolabında bir gece bekletilmesi tavsiye edilir.",
    "Servis ederken üzerine gezdireceğiniz kaliteli bir sızma zeytinyağı lezzetini katlayacaktır.",
    "Kırmızı soğan dilimleri ve kapari meyvesi ile süsleyerek geleneksel bir sunum yakalayabilirsiniz."
  ],
  "calories": 215,
  "imageUrl": "/images/recipes/fava.jpg"
},
  {
  "id": "deniz-borulcesi",
    description: "Deniz kıyısında yetişen bu özel otun sarımsak ve zeytinyağında hafifçe soteleştiği, iyot kokulu taze bir meze.",
  "title": "Deniz Börülcesi",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 25,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "deniz börülcesi",
    "zeytinyağı",
    "sarımsak",
    "limon suyu"
  ],
  "tags": [
    "meze",
    "zeytinyağlı",
    "ege mutfağı",
    "vejetaryen",
    "hafif",
    "deniz ürünleri yanı"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Deniz Börülcesi",
          "amount": "1 demet",
          "note": "taze ve canlı yeşil"
        },
        {
          "item": "Sızma Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "kaliteli Ege zeytinyağı"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Deniz börülcelerini bol soğuk suda yıkayıp çamurundan arındırın ve çürük saplarını temizleyin.",
      "tip": "Kök kısımlarındaki çamurlu odunsu kısımları kesip ayırın."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tencerede bol su kaynatın. Börülceleri kaynayan suya atıp yaklaşık 8-10 dakika haşlayın.",
      "tip": "Tuz eklemeyin, börülce kendiliğinden tuzludur."
    },
    {
      "stepNumber": 3,
      "instruction": "Haşlanan börülceleri hemen süzüp içinde buz bulunan soğuk suya aktararak şoklayın.",
      "tip": "Buzlu su şoku canlı yeşil rengini korumasını sağlar."
    },
    {
      "stepNumber": 4,
      "instruction": "Börülceleri tek tek kök kısmından tutup etli kısımlarını sıyırarak içindeki odunsu kılçık saplardan ayırın.",
      "tip": "Sapı tutup yukarı doğru hafifçe çekerek etli kısmı kolayca çıkarabilirsiniz."
    },
    {
      "stepNumber": 5,
      "instruction": "Ayıklanmış börülceleri servis tabağına alın. Ayrı bir kasede zeytinyağı, limon suyu ve ezilmiş sarımsağı çırpıp üzerine gezdirin.",
    }
  ],
  "tips": [
    "Deniz börülcesi tuzlu suda yetiştiği için pişirme veya sos aşamasında kesinlikle ekstra tuz eklemeyin.",
    "Buzlu suda şoklama adımı börülcenin erimesini önler ve diri kalmasını sağlar.",
    "Buzdolabında 1-2 saat dinlendirildikten sonra soğuk olarak servis edilmesi lezzetini artırır."
  ],
  "calories": 110,
  "imageUrl": "/images/recipes/deniz-borulcesi.jpg"
},
  {
  "id": "cacik",
    description: "Salatalık, sarımsak ve yoğurdun naneyle buluştuğu, sıcak yaz günlerinin ferahlatıcı klasik mezesi.",
  "title": "Cacık",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Salatalar",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 10,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "yoğurt",
    "salatalık",
    "sarımsak",
    "kuru nane",
    "zeytinyağı",
    "dereotu",
    "su"
  ],
  "tags": [
    "meze",
    "soğuk",
    "vejetaryen",
    "klasik",
    "ferahlatıcı"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Yoğurt",
          "amount": "2 su bardağı",
          "note": "tercihen ev yoğurdu"
        },
        {
          "item": "Salatalık",
          "amount": "2 adet",
          "note": "orta boy"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Soğuk su",
          "amount": "1 su bardağı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
          "note": "üzeri için"
        },
        {
          "item": "Kuru nane",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Taze dereotu",
          "amount": "4 dal",
          "note": "ince kıyılmış"
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
      "instruction": "Salatalıkları alacalı soyup küçük küpler halinde doğrayın veya rendeleyin.",
      "tip": "Kıtır doku için rende yerine küçük küpler halinde doğramanız önerilir."
    },
    {
      "stepNumber": 2,
      "instruction": "Derin bir kapta yoğurt, ezilmiş sarımsak ve tuzu çırparak pürüzsüz kıvama getirin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Soğuk suyu azar azar ekleyip karıştırarak yoğurdun kıvamını açın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Doğranmış salatalıkları ve kıyılmış dereotunu ekleyip hafifçe karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Cacığı servis kaselerine alın; üzerine zeytinyağı gezdirip kuru nane serperek soğuk servis edin.",
    }
  ],
  "tips": [
    "Servis etmeden önce buzdolabında 15-20 dakika soğutursanız lezzeti daha iyi oturur.",
    "Çok sıcak günlerde içerisine birkaç adet buz küpü ekleyebilirsiniz."
  ],
  "calories": 85,
  "imageUrl": "/images/recipes/cacik.jpg"
},
  {
  "id": "atom",
    description: "Ceviz ve kırmızı biberin acı ve ateşli bir şekilde harmanlandığı, damak çatlatan yoğun kıvamlı bir meze.",
  "title": "Atom",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 5,
  "totalTimeMinutes": 15,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "süzme yoğurt",
    "kuru arnavut biberi",
    "tereyağı",
    "sarımsak",
    "zeytinyağı"
  ],
  "tags": [
    "meze",
    "yoğurtlu",
    "acı",
    "kolay",
    "vejetaryen",
    "pratik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Yoğurt Tabanı İçin",
      "items": [
        {
          "item": "Süzme Yoğurt",
          "amount": "500 gram",
          "note": "koyu kıvamlı"
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Kuru Arnavut Biberi",
          "amount": "5-6 adet",
          "note": "iri doğranmış"
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Toz Kırmızı Biber",
          "amount": "1/2 çay kaşığı",
          "note": "isteğe bağlı"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Süzme yoğurdu, ezilmiş sarımsağı, zeytinyağını ve tuzu bir kapta pürüzsüz olana kadar çırpın.",
      "tip": "Yoğurdun oda sıcaklığında olması çırpılmasını kolaylaştırır."
    },
    {
      "stepNumber": 2,
      "instruction": "Hazırladığınız yoğurt karışımını yayvan bir servis tabağına alın ve kaşığın arkasıyla ortasını hafifçe çukurlaştırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Küçük bir sos tavasında tereyağı ve zeytinyağını eritin. İri doğranmış kuru biberleri ekleyip kısık ateşte kokusu çıkana kadar kokutmadan hafifçe kavurun.",
      "tip": "Biberleri yakmamaya özen gösterin, hızlıca yanabilirler."
    },
    {
      "stepNumber": 4,
      "instruction": "Ocaktan almadan önce toz kırmızı biberi ekleyip karıştırın ve kızgın acı yağı yoğurdun üzerine dökerek servis yapın.",
    }
  ],
  "tips": [
    "Süzme yoğurdun susuz ve serbest kıvamda olması mezenin duruşu için önemlidir.",
    "Daha acı bir lezzet için biberleri tohumlarıyla birlikte yağda kavurabilirsiniz.",
    "Kızgın yağı yoğurdun üzerine servis yapmadan hemen önce dökmelisiniz."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/atom.jpg"
},
  {
  "id": "girit-ezmesi",
    description: "Zeytin, badem ve otların birleştiği, Ege kıyılarından gelen taze ve hafif bir meze.",
  "title": "Girit Ezmesi",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 15,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "ezine peyniri",
    "lor peyniri",
    "antep fıstığı",
    "ceviz",
    "zeytinyağı",
    "fesleğen",
    "sarımsak"
  ],
  "tags": [
    "meze",
    "soğuk meze",
    "vejetaryen",
    "ege",
    "peynir",
    "pratik"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Ezine Peyniri",
          "amount": "200 gram",
          "note": "tam yağlı, oda sıcaklığında"
        },
        {
          "item": "Lor Peyniri",
          "amount": "100 gram",
          "note": "taze ve tatlı"
        },
        {
          "item": "Antep Fıstığı",
          "amount": "2 yemek kaşığı",
          "note": "tuzsuz, iri çekilmiş"
        },
        {
          "item": "Ceviz İçi",
          "amount": "2 yemek kaşığı",
          "note": "iri çekilmiş"
        },
        {
          "item": "Sarımsak",
          "amount": "1 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Taze Fesleğen",
          "amount": "8-10 yaprak",
          "note": "ince kıyılmış"
        },
        {
          "item": "Sızma Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "kaliteli, soğuk sıkım"
        },
        {
          "item": "Karabiber",
          "amount": "1/2 çay kaşığı",
          "note": "taze çekilmiş"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Ezine peyniri ve lor peynirini derin bir kabın içinde çatalla ezerek karıştırın.",
      "tip": "Peynirleri mutfak robotundan geçirmek yerine çatalla ezmek dokusunun daha güzel olmasını sağlar."
    },
    {
      "stepNumber": 2,
      "instruction": "Ezilmiş sarımsak, ince kıyılmış taze fesleğen, iri çekilmiş Antep fıstığı ve cevizi ekleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Sızma zeytinyağını ve karabiberi ilave ederek tüm malzemeyi pürüzsüz ama dokulu bir kıvam alana kadar karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Ezmeyi servis tabağına alıp üzerini kaşığın arkasıyla düzeltin; üzerine ekstra zeytinyağı gezdirip bütün fıstıklarla süsleyerek servis yapın.",
    }
  ],
  "tips": [
    "Peynirlerin kendi tuzu yeterli olacağı için harca ekstra tuz eklemeyin.",
    "Servis öncesi buzdolabında 30 dakika dinlendirmek lezzetlerin bütünleşmesini sağlar.",
    "Kızartılmış ekmek dilimleri veya kıtır galeta ile servis edebilirsiniz."
  ],
  "calories": 285,
  "imageUrl": "/images/recipes/girit-ezmesi.jpg"
},
  {
  "id": "muallim",
    description: "Yoğurt ve tahinin baharatlarla harmanlandığı, hafif ve kremsi dokulu bir başlangıç mezesi.",
  "title": "Muallim",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Zeytinyağlılar ve Sebze Yemekleri",
  "region": "Hatay",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 45,
  "totalTimeMinutes": 65,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "patlıcan",
    "yeşil mercimek",
    "domates",
    "sarımsak",
    "zeytinyağı",
    "nar ekşisi",
    "kuru soğan"
  ],
  "tags": [
    "zeytinyağlı",
    "hatay",
    "patlıcan",
    "mercimek",
    "yöresel",
    "vejetaryen"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Patlıcan",
          "amount": "4 adet",
          "note": "alacalı soyulmuş ve küp doğranmış"
        },
        {
          "item": "Yeşil Mercimek",
          "amount": "1 su bardağı",
          "note": "yarı haşlanmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "2 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Domates",
          "amount": "3 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Yeşil Biber",
          "amount": "2 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "5 diş",
          "note": "doğranmış"
        }
      ]
    },
    {
      "groupTitle": "Sos ve Baharatlar",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "1 çay bardağı",
        },
        {
          "item": "Nar Ekşisi",
          "amount": "3 yemek kaşığı",
          "note": "doğal"
        },
        {
          "item": "Biber Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Kuru Nane",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
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
      "instruction": "Yeşil mercimekleri diri kalacak şekilde haşlayıp süzün.",
      "tip": "Mercimekleri çok fazla yumuşatmayın, yemekle birlikte de pişecektir."
    },
    {
      "stepNumber": 2,
      "instruction": "Patlıcanları alacalı soyup iri küpler halinde doğrayın ve acısının çıkması için tuzlu suda 15 dakika bekletin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Bir kasede doğranmış soğan, domates, biber, sarımsak ve haşlanmış mercimekleri karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Ayrı bir kapta zeytinyağı, nar ekşisi, biber salçası, kuru nane ve baharatları çırparak sos hazırlayın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tencereye sırasıyla patlıcanları ve mercimekli sebze karışımını kat kat dizip üzerine hazırladığınız sosu gezdirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Tencerenin kapağını kapatıp kısık ateşte patlıcanlar yumuşayana kadar yaklaşık 40-45 dakika pişirin.",
      "tip": "Yemeğe ekstra su eklemeyin, sebzelerin kendi suyu pişme için yeterli olacaktır."
    }
  ],
  "tips": [
    "Muallim yemeği ılık veya soğuk servis edildiğinde aromaları çok daha belirgin olur.",
    "Orijinal Hatay lezzeti için mutlaka hakiki nar ekşisi kullanılması tavsiye edilir.",
    "Dinlendirildiğinde lezzeti artan bir yemektir, bir gün önceden pişirebilirsiniz."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/muallim.jpg"
},
  {
  "id": "cevizli-kabak-tarator",
    description: "Rendelenmiş kabağın cevizli yoğurt sosuyla buluştuğu, hafif ve ferahlatıcı bir yaz mezesi.",
  "title": "Cevizli Kabak Tarator",
  "mainCategory": "mezeler",
  "subCategory": "soguk-mezeler",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Akdeniz",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 25,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "kabak",
    "süzme yoğurt",
    "ceviz",
    "sarımsak",
    "zeytinyağı"
  ],
  "tags": [
    "meze",
    "soğuk meze",
    "vejetaryen",
    "pratik",
    "kabak"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Tarator İçin",
      "items": [
        {
          "item": "Kabak",
          "amount": "3 adet",
          "note": "rendelenmiş"
        },
        {
          "item": "Süzme Yoğurt",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Ceviz İçi",
          "amount": "0.5 su bardağı",
          "note": "ince kıyılmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Dereotu",
          "amount": "0.5 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Üzeri İçin",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Ceviz İçi",
          "amount": "2 yemek kaşığı",
          "note": "iri kıyılmış"
        },
        {
          "item": "Kuru Nane",
          "amount": "0.5 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Rendelenmiş kabakların avucunuzla suyunu hafifçe sıkın.",
    },
    {
      "stepNumber": 2,
      "instruction": "Tavada zeytinyağını kızdırıp kabakları suyunu çekip yumuşayana kadar soteleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Sotelenen kabakları ocaktan alıp oda sıcaklığında tamamen soğumaya bırakın.",
      "tip": "Sıcak kabak yoğurdu kestirir, mutlaka tamamen soğutun."
    },
    {
      "stepNumber": 4,
      "instruction": "Ayrı bir kapta süzme yoğurt, sarımsak, ince kıyılmış ceviz, dereotu ve tuzu karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Soğuyan kabakları yoğurtlu karışıma ekleyip güzelce harmanlayın ve servis tabağına alın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Küçük bir tavada zeytinyağında iri cevizleri ve naneyi çevirip mezenin üzerine gezdirin.",
    }
  ],
  "tips": [
    "Kabakların suyunu iyi sıkmak mezenizin sulanmasını önler ve kıvamını artırır.",
    "Klasik yoğurt yerine mutlaka süzme yoğurt tercih edin."
  ],
  "calories": 185,
  "imageUrl": "/images/recipes/cevizli-kabak-tarator.jpg"
},
  {
  "id": "arnavut-cigeri",
    description: "Küp doğranmış kuzu ciğerinin baharatlı unla kaplanıp kızartıldığı, soğan halkalarıyla servis edilen köklü bir meze.",
  "title": "Arnavut Ciğeri",
  "mainCategory": "mezeler",
  "subCategory": "sicak-mezeler",
  "subCategoryLabel": "Sakatat Yemekleri",
  "region": "Balkan Mutfağı",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 30,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "dana ciğeri",
    "patates",
    "un",
    "kuru soğan",
    "maydanoz",
    "kırmızı toz biber",
    "sıvı yağ"
  ],
  "tags": [
    "sakatat",
    "meze",
    "klasik",
    "kızartma",
    "et"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ciğer Harcı İçin",
      "items": [
        {
          "item": "Dana ciğeri",
          "amount": "600 gram",
          "note": "zarı temizlenmiş, küp doğranmış"
        },
        {
          "item": "Un",
          "amount": "1 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Kırmızı toz biber",
          "amount": "1 tatlı kaşığı",
          "note": "tatlı veya acı"
        },
        {
          "item": "Kimyon",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Sıvı yağ",
          "amount": "1.5 su bardağı",
          "note": "kızartmak için"
        }
      ]
    },
    {
      "groupTitle": "Garnitürü İçin",
      "items": [
        {
          "item": "Patates",
          "amount": "2 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Kuru soğan",
          "amount": "2 adet",
          "note": "piyazlık doğranmış"
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Sumak",
          "amount": "1 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Küp doğranmış ciğerleri süzgece alın ve kanının tamamen süzülmesini sağlayın. Sakın yıkamayın.",
      "tip": "Ciğer yıkanırsa sertleşir ve lezzetini kaybeder."
    },
    {
      "stepNumber": 2,
      "instruction": "Patatesleri küp doğrayıp kızgın yağda altın sarısı olana kadar kızartın ve servis kabına alın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Bir kapta un, tuz, kırmızı toz biber ve kimyonu harmanlayın. Süzülen ciğerleri una bulayıp fazla unu elekle silkeleyin.",
      "tip": "Fazla un yağın yanmasına neden olur, mutlaka eleyerek ayırın."
    },
    {
      "stepNumber": 4,
      "instruction": "Ciğerleri bol ve iyice kızdırılmış yağda yüksek ateşte 2-3 dakika kızartın.",
      "tip": "Ciğeri uzun süre pişirmek sertleştirir, 2-3 dakika yeterlidir."
    },
    {
      "stepNumber": 5,
      "instruction": "Piyazlık doğranmış soğanları sumak ve kıyılmış maydanoz ile hafifçe ovun. Kızaran ciğer ve patateslerle harmanlayıp sıcak servis yapın.",
    }
  ],
  "tips": [
    "Ciğerin pamuk gibi yumuşak olması için kızartma süresini 3 dakikadan uzun tutmayın.",
    "Un karışımına baharat eklemek ciğerin lezzetini doğrudan içine çeker.",
    "Servis ederken üzerine kızartma yağından birkaç kaşık gezdirerek lezzetini artırabilirsiniz."
  ],
  "calories": 420,
  "imageUrl": "/images/recipes/arnavut-cigeri.jpg"
},
  {
  "id": "tereyagli-karides-tava",
    description: "Karidesin tereyağı, sarımsak ve pul biberle kavrulduğu, hızlı hazırlanan sıcak bir deniz mahsulleri mezesi.",
  "title": "Tereyağlı Karides Tava",
  "mainCategory": "mezeler",
  "subCategory": "sicak-mezeler",
  "subCategoryLabel": "Deniz Ürünleri ve Mezeler",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 25,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "karides",
    "tereyağı",
    "sarımsak",
    "pul biber",
    "maydanoz",
    "zeytinyağı",
    "limon"
  ],
  "tags": [
    "deniz ürünleri",
    "meze",
    "sıcak meze",
    "tereyağlı",
    "hızlı"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Karides Tavası İçin",
      "items": [
        {
          "item": "Karides",
          "amount": "500 gram",
          "note": "ayıklanmış ve temizlenmiş"
        },
        {
          "item": "Tereyağı",
          "amount": "3 yemek kaşığı",
          "note": "tuzsuz"
        },
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Sarımsak",
          "amount": "4 diş",
          "note": "ince kıyılmış"
        },
        {
          "item": "Pul biber",
          "amount": "1 tatlı kaşığı",
          "note": "arzuya göre acı"
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Karabiber",
          "amount": "1/2 çay kaşığı",
          "note": "taze çekilmiş"
        },
        {
          "item": "Maydanoz",
          "amount": "1/4 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Limon suyu",
          "amount": "1 tatlı kaşığı",
          "note": "taze sıkılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Karidesleri bol suda yıkayın ve kağıt havlu yardımıyla tamamen kurulayın.",
      "tip": "Karideslerin kuru olması, yağın sıçramasını önler ve daha iyi kızarmasını sağlar."
    },
    {
      "stepNumber": 2,
      "instruction": "Tavaya zeytinyağını alın, ardından tereyağını ekleyip orta ateşte eritin.",
      "tip": "Sadece tereyağı kullanmak yağın çabuk yanmasına neden olur, zeytinyağı bunu engeller."
    },
    {
      "stepNumber": 3,
      "instruction": "İnce kıyılmış sarımsakları ve pul biberi ekleyip kokusu çıkana kadar yaklaşık 1 dakika soteleyin.",
      "tip": "Sarımsakları yakmamaya dikkat edin, aksi takdirde acı bir tat oluşur."
    },
    {
      "stepNumber": 4,
      "instruction": "Kuruladığınız karidesleri tavaya ilave edin ve yüksek ateşte her iki tarafını pembeleşene kadar 3-4 dakika kavurun.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tuz, karabiber ve limon suyunu ekleyip karıştırın, ocaktan almadan önce kıyılmış maydanozu serperek sıcak servis edin.",
    }
  ],
  "tips": [
    "Karidesleri toplamda 4-5 dakikadan fazla pişirmeyin; fazla pişerse sertleşip lastik kıvamına gelir.",
    "Servis ederken yanında taze kızarmış ekmek sunarak lezzetli tereyağlı sosuna banabilirsiniz.",
    "Arzu ederseniz pişirme işlemini toprak güveçte tamamlayıp üzerine kaşar rendesi ekleyerek fırınlayabilirsiniz."
  ],
  "calories": 310,
  "imageUrl": "/images/recipes/tereyagli-karides-tava.jpg"
},
  {
  "id": "kalamar-tava",
    description: "Halka halka kesilen kalamarın çıtır çıtır kızartıldığı, tarator sosuyla servis edilen sevilen bir meze.",
  "title": "Kalamar Tava",
  "mainCategory": "mezeler",
  "subCategory": "sicak-mezeler",
  "subCategoryLabel": "Deniz Ürünleri",
  "region": "Ege",
  "prepTimeMinutes": 30,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 40,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "kalamar",
    "karbonat",
    "toz şeker",
    "maden suyu",
    "un",
    "sıvı yağ",
    "ceviz",
    "sarımsak"
  ],
  "tags": [
    "deniz ürünleri",
    "ara sıcak",
    "kızartma",
    "klasik",
    "ege"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Kalamar ve Marinasyon İçin",
      "items": [
        {
          "item": "Kalamar",
          "amount": "500 gram",
          "note": "temizlenmiş, halka doğranmış"
        },
        {
          "item": "Karbonat",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Toz Şeker",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Maden Suyu",
          "amount": "1 şişe",
          "note": "soğuk"
        }
      ]
    },
    {
      "groupTitle": "Kaplama ve Kızartma İçin",
      "items": [
        {
          "item": "Un",
          "amount": "1 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Sıvı Yağ",
          "amount": "2 su bardağı",
          "note": "kızartmak için"
        }
      ]
    },
    {
      "groupTitle": "Tarator Sos İçin",
      "items": [
        {
          "item": "Bayat Ekmek İçi",
          "amount": "2-3 dilim",
          "note": "ufalanmış"
        },
        {
          "item": "Ceviz İçi",
          "amount": "1 çay bardağı",
          "note": "çekilmiş"
        },
        {
          "item": "Süzme Yoğurt",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Halka doğranmış kalamarları bir kaba alın; üzerine karbonat, toz şeker ve limon suyunu ekleyip en az 10-15 dakika köpürene kadar ovalayarak yoğurun.",
      "tip": "Bu ovalama işlemi kalamarın dokusunu yumuşatır."
    },
    {
      "stepNumber": 2,
      "instruction": "Yumuşayan kalamarların üzerine maden suyunu dökün ve üzerini kapatıp buzdolabında en az 1 saat dinlendirin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Tarator sos için ekmek içi, ceviz, sarımsak, süzme yoğurt, zeytinyağı ve limon suyunu mutfak robotunda pürüzsüz kıvam alana kadar çekin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Marine olan kalamarları süzün ama kesinlikle yıkamayın. Bir kapta un ve tuzu karıştırıp kalamarları un karışımına bulayın, fazlasını silkeleyin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Derin bir tavada yağı iyice kızdırın. Unlanan kalamarları kızgın yağa atıp 2-3 dakika altın sarısı renk alana kadar kızartın.",
      "tip": "Kalamarları 3 dakikadan fazla kızartmayın, sertleşebilir."
    },
    {
      "stepNumber": 6,
      "instruction": "Kızaran kalamarları kağıt havlu üzerine alıp fazla yağını süzdürün ve yanında tarator sos ile sıcak servis yapın.",
    }
  ],
  "tips": [
    "Kalamarların yumuşak olması için şeker ve karbonatla köpürene kadar iyice yoğrulması şarttır.",
    "Kızartma yağının çok kızgın olması gerekir; soğuk yağa atılan kalamarlar yağ çeker ve çıtırlığını kaybeder.",
    "Kalamarları tavaya tek seferde çok fazla doldurmayın, yağın ısısı düşerse kalamarlar sertleşir."
  ],
  "calories": 420,
  "imageUrl": "/images/recipes/kalamar-tava.jpg"
},
  {
  "id": "sicak-humus",
    description: "Klasik humusun kavrulmuş kıyma ve tereyağıyla zenginleştirildiği, sıcak servis edilen doyurucu bir versiyon.",
  "title": "Sıcak Humus",
  "mainCategory": "mezeler",
  "subCategory": "sicak-mezeler",
  "subCategoryLabel": "Mezeler ve Sıcak Başlangıçlar",
  "region": "Hatay",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 15,
  "totalTimeMinutes": 30,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "nohut",
    "tahin",
    "sarımsak",
    "tereyağı",
    "limon suyu",
    "kimyon",
    "pastırma"
  ],
  "tags": [
    "meze",
    "sıcak meze",
    "hatay mutfağı",
    "fırın",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Humus Tabanı İçin",
      "items": [
        {
          "item": "Haşlanmış Nohut",
          "amount": "2 su bardağı",
          "note": "kabukları soyulmuş"
        },
        {
          "item": "Tahin",
          "amount": "1/2 su bardağı",
        },
        {
          "item": "Sarımsak",
          "amount": "2 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Kimyon",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "3-4 yemek kaşığı",
          "note": "kıvam ayarlamak için"
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
          "item": "Pastırma",
          "amount": "50 gram",
          "note": "şerit doğranmış"
        },
        {
          "item": "Toz Kırmızı Biber",
          "amount": "1/2 tatlı kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Haşlanmış nohut, tahin, sarımsak, limon suyu, zeytinyağı, kimyon ve tuzu mutfak robotuna alın.",
      "tip": "Pürüzsüz kıvam için nohutların kabuklarını mutlaka soyun."
    },
    {
      "stepNumber": 2,
      "instruction": "Malzemeleri pürüzsüz bir krema kıvamına gelene kadar robotta çekin; çok koyu olursa azar azar sıcak su ekleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Hazırladığınız humusu güveç kabına eşit şekilde yayın ve önceden 200 dereceye ısıtılmış fırında 10-12 dakika ısıtın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Küçük bir tavada tereyağını eritin, pastırmaları hafifçe kavurup kırmızı biberi ilave edin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Fırından çıkan sıcak humusun üzerine cızırdayan pastırmalı tereyağını dökerek hemen servis yapın.",
      "tip": "Sıcaklığını koruması için güveçte servis edin."
    }
  ],
  "tips": [
    "Pastırma yerine çam fıstığı veya ceviz kullanarak vejetaryen bir alternatif hazırlayabilirsiniz.",
    "Humusun ipeksi bir dokuya sahip olması için nohutları sıcakken püre haline getirin.",
    "Sıcak humus bekletilmeden, fırından çıkar çıkmaz taze pide ile tüketilmelidir."
  ],
  "calories": 380,
  "imageUrl": "/images/recipes/sicak-humus.jpg"
},
  {
  "id": "icli-kofte",
    description: "Bulgur kabuğunun baharatlı kıyma harcıyla doldurulduğu, işçiliği yüksek Güneydoğu Anadolu mezesi.",
  "title": "İçli Köfte",
  "mainCategory": "mezeler",
  "subCategory": "sicak-mezeler",
  "subCategoryLabel": "Et Yemekleri",
  "region": "Gaziantep",
  "prepTimeMinutes": 45,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 65,
  "servings": 6,
  "difficulty": "zor",
  "mainIngredients": [
    "köftelik bulgur",
    "kıyma",
    "ceviz",
    "soğan",
    "irmik",
    "biber salçası"
  ],
  "tags": [
    "et",
    "klasik",
    "geleneksel",
    "güneydoğu",
    "kızartma"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Dış Hamuru İçin",
      "items": [
        {
          "item": "İnce Köftelik Bulgur",
          "amount": "2 su bardağı",
        },
        {
          "item": "İrmik",
          "amount": "1/2 su bardağı",
        },
        {
          "item": "Yağsız Dana Kıyma",
          "amount": "100 gram",
          "note": "macun kıvamında"
        },
        {
          "item": "Biber Salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Un",
          "amount": "1/2 su bardağı",
        },
        {
          "item": "Ilık Su",
          "amount": "2 su bardağı",
          "note": "ıslatmak için"
        }
      ]
    },
    {
      "groupTitle": "İç Harcı İçin",
      "items": [
        {
          "item": "Orta Yağlı Kıyma",
          "amount": "350 gram",
        },
        {
          "item": "Kuru Soğan",
          "amount": "4 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Ceviz İçi",
          "amount": "1 çay bardağı",
          "note": "dövülmüş"
        },
        {
          "item": "Baharatlar ve Salça",
          "amount": "1'er tatlı kaşığı",
          "note": "tuz, karabiber, pul biber, kimyon, biber salçası"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "İç harç için soğanları tereyağında kavurun, kıymayı ekleyip suyunu çekene kadar pişirin. Salça, baharat ve cevizi ekleyip ocaktan alın, soğumaya bırakın.",
      "tip": "İç harcın tamamen soğuması ve yağının donması köftenin dağılmaması için şarttır."
    },
    {
      "stepNumber": 2,
      "instruction": "Dış hamur için bulgur ve irmiği ılık suyla ıslatıp 10 dakika bekletin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Yumuşayan bulgura kıyma, salça, un ve tuzu ekleyip sakız kıvamına gelene kadar en az 15 dakika yoğurun.",
      "tip": "Yoğururken elinizi hafifçe ıslatın."
    },
    {
      "stepNumber": 4,
      "instruction": "Hamurdan ceviz büyüklüğünde parçalar alıp başparmağınızla ortasını açarak duvarlarını incecik şekillendirin.",
    },
    {
      "stepNumber": 5,
      "instruction": "İçine donmuş iç harçtan doldurup uçlarını birleştirerek kapatın. Derin ve kızgın yağda altın sarısı olana kadar kızartın.",
      "tip": "Yağın tam ısınmış olması köftelerin yağ çekmesini önler."
    }
  ],
  "tips": [
    "İç harcın kıymasını önceden hazırlayıp buzdolabında iyice soğutun.",
    "Hamurun dağılmaması için özleşene kadar sabırla yoğurmak en önemli adımdır.",
    "Arzuya göre kızartmak yerine kaynayan tuzlu suda haşlayarak da servis edebilirsiniz."
  ],
  "calories": 350,
  "imageUrl": "/images/recipes/icli-kofte.jpg"
},
];

export default mezeler;