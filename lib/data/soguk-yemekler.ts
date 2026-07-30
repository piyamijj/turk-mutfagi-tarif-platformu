import { Recipe } from "../types";

const sogukYemekler: Recipe[] = [
  {
    id: "zeytinyagli-enginar",
    title: "Zeytinyağlı Enginar",
    description: "Ege mutfağının en asil lezzetlerinden biri olan, taze sıkılmış portakal suyu ve garnitürle pişirilen, kararmamış, lokum kıvamında zeytinyağlı enginar.",
    mainCategory: "soguk-yemekler",
    subCategory: "zeytinyaglilar",
    subCategoryLabel: "Zeytinyağlılar",
    region: "Ege",
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    totalTimeMinutes: 45,
    servings: 4,
    difficulty: "kolay",
    mainIngredients: ["enginar", "havuç", "patates", "bezelye", "portakal", "zeytinyağı"],
    tags: ["vejetaryen", "glutensiz", "hafif", "zeytinyagli", "ege-mutfagi"],
    ingredientGroups: [
      {
        groupTitle: "Ana Malzemeler",
        items: [
          { item: "Enginar çanağı", amount: "4 adet", note: "ayıklanmış, limonlu suda bekletilmiş" },
          { item: "Kuru soğan", amount: "1 adet", note: "yemeklik doğranmış" },
          { item: "Havuç", amount: "1 adet", note: "küçük küpler halinde doğranmış" },
          { item: "Patates", amount: "1 adet", note: "küçük küpler halinde doğranmış" },
          { item: "Bezelye", amount: "1 çay bardağı", note: "haşlanmış veya konserve" },
          { item: "Sızma zeytinyağı", amount: "1/2 çay bardağı", note: "kaliteli sızma" }
        ]
      },
      {
        groupTitle: "Pişirme Sosu",
        items: [
          { item: "Taze sıkılmış portakal suyu", amount: "1 su bardağı" },
          { item: "Taze sıkılmış limon suyu", amount: "1/2 adet" },
          { item: "Su", amount: "1/2 su bardağı" },
          { item: "Toz şeker", amount: "1 tatlı kaşığı" },
          { item: "Tuz", amount: "1 çay kaşığı" },
          { item: "Un", amount: "1 tatlı kaşığı", note: "sosu hafifçe bağlamak için" }
        ]
      },
      {
        groupTitle: "Üzeri İçin",
        items: [
          { item: "Taze dereotu", amount: "1/2 demet", note: "ince kıyılmış" },
          { item: "Sızma zeytinyağı", amount: "2 yemek kaşığı", note: "servis öncesi gezdirmek için" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Geniş bir tencereye sızma zeytinyağını alın. Yemeklik doğranmış kuru soğanları ekleyip pembeleşene kadar orta ateşte soteleyin.",
        tip: "Soğanların kararmamasına dikkat edin, hafifçe şeffaflaşmaları yeterlidir."
      },
      {
        stepNumber: 2,
        instruction: "Sotelenen soğanların üzerine küp doğranmış havuçları ekleyin ve 2-3 dakika kavurun. Ardından patatesleri ekleyip 2 dakika daha kavurmaya devam edin.",
        tip: "Sebzelerin eşit boyutta doğranması hem pişme süresini dengeler hem de şık bir sunum sağlar."
      },
      {
        stepNumber: 3,
        instruction: "Ayrı bir kapta portakal suyu, limon suyu, su, un, şeker ve tuzu pürüzsüz olana kadar çırparak pişirme sosunu hazırlayın."
      },
      {
        stepNumber: 4,
        instruction: "Limonlu suda bekleyen enginar çanaklarını tencereye, düz kısımları alta gelecek şekilde yerleştirin. Kavrulan sebzeleri ve bezelyeyi enginarların üzerine ve aralarına paylaştırın."
      },
      {
        stepNumber: 5,
        instruction: "Hazırladığınız unlu portakal suyu sosunu tencereye yavaşça dökün. Tencerenin kapağını kapatın ve kaynayana kadar orta ateşte, kaynadıktan sonra kısık ateşte enginarlar yumuşayana kadar pişirin.",
        tip: "Enginarların yumuşayıp yumuşamadığını bir kürdan batırarak kontrol edebilirsiniz. Kürdan kolayca batıyorsa pişmiştir (yaklaşık 25-30 dakika)."
      },
      {
        stepNumber: 6,
        instruction: "Pişen enginarları ocaktan alın. Tencerenin kapağı kapalı şekilde oda sıcaklığına gelene kadar dinlendirin. Ardından servis tabağına alın, üzerlerine bolca ince kıyılmış dereotu serpiştirin ve sızma zeytinyağı gezdirerek soğuk servis yapın."
      }
    ],
    tips: [
      "Enginarların kararmasını önlemek için ayıklandıktan sonra mutlaka bol limonlu ve unlu suda bekletilmelidir.",
      "Portakal suyu enginara harika bir aroma ve doğal bir tatlılık verir. Portakal mevsimi değilse mandalina suyu da tercih edilebilir.",
      "Zeytinyağlı yemekler piştiği gün değil, buzdolabında 1 gece dinlendirildikten sonra servis edildiğinde lezzeti katlanır."
    ],
    calories: 145,
    imageUrl: "/images/recipes/zeytinyagli-enginar.jpg"
  },
  {
    id: "kisir",
    title: "Geleneksel Ev Kısırı",
    description: "Çay saatlerinin, altın günlerinin ve pikniklerin vazgeçilmezi; bol yeşillikli, ekşili, tam kıvamında ıslatılmış nefis bir geleneksel kısır tarifi.",
    mainCategory: "soguk-yemekler",
    subCategory: "salatalar",
    subCategoryLabel: "Salatalar ve Soğuk Başlangıçlar",
    prepTimeMinutes: 20,
    cookTimeMinutes: 0,
    totalTimeMinutes: 20,
    servings: 6,
    difficulty: "kolay",
    mainIngredients: ["bulgur", "taze soğan", "maydanoz", "nane", "nar ekşisi", "salça"],
    tags: ["vejetaryen", "vegan", "pratik", "salata", "cay-saati"],
    isPopular: true,
    ingredientGroups: [
      {
        groupTitle: "Bulgur Tabanı",
        items: [
          { item: "İnce köftelik bulgur", amount: "2 su bardağı" },
          { item: "Sıcak su", amount: "1.5 su bardağı", note: "kaynar" },
          { item: "Biber salçası", amount: "1 yemek kaşığı", note: "tepeleme" },
          { item: "Domates salçası", amount: "1 yemek kaşığı", note: "tepeleme" }
        ]
      },
      {
        groupTitle: "Yeşillikler ve Sebzeler",
        items: [
          { item: "Taze soğan", amount: "5 dal", note: "ince kıyılmış" },
          { item: "Maydanoz", amount: "1/2 demet", note: "ince kıyılmış" },
          { item: "Taze nane", amount: "1/2 demet", note: "ince kıyılmış" },
          { item: "Kıvırcık marul", amount: "10 yaprak", note: "servis için" },
          { item: "Salatalık", amount: "1 adet", note: "isteğe bağlı, çok küçük küp doğranmış" }
        ]
      },
      {
        groupTitle: "Sos ve Baharatlar",
        items: [
          { item: "Zeytinyağı", amount: "1/2 su bardağı", note: "sızma" },
          { item: "Doğal nar ekşisi", amount: "4 yemek kaşığı" },
          { item: "Limon suyu", amount: "1 adet limonun suyu" },
          { item: "Pul biber", amount: "1 tatlı kaşığı" },
          { item: "Kimyon", amount: "1 çay kaşığı", note: "hazmı kolaylaştırır" },
          { item: "Kuru nane", amount: "1 tatlı kaşığı" },
          { item: "Tuz", amount: "1.5 çay kaşığı" }
        ]
      }
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Geniş bir yoğurma kabına veya tepsiye ince bulguru alın. Üzerine domates ve biber salçalarını ekleyin. Kaynar sıcak suyu bulgurların üzerine gezdirip kabın üzerini bir kapak veya streç filmle kapatarak bulgurların şişmesi için 10-15 dakika bekletin.",
        tip: "Suyu çok fazla eklemeyin, bulgurların lapa olmaması ve tane tane kalması için su miktarı bulgurun üzerini hafifçe geçecek kadar olmalıdır."
      },
      {
        stepNumber: 2,
        instruction: "Bulgurlar şişip oda sıcaklığına geldikten sonra, temiz ellerinizle veya tahta bir kaşıkla salçaları bulgura iyice yedirene kadar ovalayarak karıştırın.",
        tip: "Salçanın bulgurun her yerine eşit dağılması ve rengini vermesi kısırın lezzet sırlarından biridir."
      },
      {
        stepNumber: 3,
        instruction: "Zeytinyağını, limon suyunu, nar ekşisini ve tüm baharatları (pul biber, kimyon, kuru nane, tuz) bulgura ekleyip iyice karıştırın. Bulgurun sosu tamamen emmesini sağlayın."
      },
      {
        stepNumber: 4,
        instruction: "İnce kıyılmış taze soğan, maydanoz ve taze naneyi (varsa küçük küp doğranmış salatalığı) ekleyin. Yeşillikleri ezmeden, alttan üste doğru hafifçe harmanlayarak karıştırın.",
        tip: "Yeşillikleri eklemeden önce bulgurun tamamen soğuduğundan emin olun; sıcak bulgur yeşilliklerin sararmasına ve sönmesine neden olur."
      },
      {
        stepNumber: 5,
        instruction: "Hazırladığınız kısırı servis tabağına alın. Etrafını yıkanıp kurulanmış kıvırcık marul yaprakları, limon dilimleri ve domateslerle süsleyerek soğuk servis yapın."
      }
    ],
    tips: [
      "Kısırın yeşilliklerini yıkadıktan sonra mutlaka tamamen kurutun. Islak yeşillikler kısırı sulandırır ve lezzetini bozar.",
      "Gerçek ve kaliteli bir nar ekşisi kullanmak kısırın lezzetini doğrudan zirveye taşır. Yapay nar aromalı soslardan kaçının.",
      "Arzuya göre içine ince kıyılmış kornişon turşu veya domates kurusu da ekleyebilirsiniz."
    ],
    calories: 210,
    imageUrl: "/images/recipes/kisir.jpg"
  },
  {
  "id": "zeytinyagli-yaprak-sarmasi",
  "title": "Zeytinyağlı Yaprak Sarması",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 60,
  "cookTimeMinutes": 45,
  "totalTimeMinutes": 105,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "asma yaprağı",
    "pirinç",
    "kuru soğan",
    "zeytinyağı",
    "dolmalık fıstık",
    "kuş üzümü",
    "nane"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "klasik",
    "meze",
    "soğuk"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "İç Harcı İçin",
      "items": [
        {
          "item": "Pirinç",
          "amount": "2 su bardağı",
          "note": "yıkanıp süzülmüş"
        },
        {
          "item": "Kuru Soğan",
          "amount": "4 adet",
          "note": "ince yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Dolmalık Fıstık",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Kuş Üzümü",
          "amount": "2 yemek kaşığı",
          "note": "sıcak suda bekletilmiş"
        },
        {
          "item": "Baharat ve Otlar",
          "amount": "1'er tatlı kaşığı",
          "note": "kuru nane, yenibahar, karabiber, tuz, toz şeker"
        },
        {
          "item": "Sıcak Su",
          "amount": "1 su bardağı",
          "note": "iç harcı pişirmek için"
        }
      ]
    },
    {
      "groupTitle": "Sarma ve Pişirme İçin",
      "items": [
        {
          "item": "Asma Yaprağı",
          "amount": "500 gram",
          "note": "salamura"
        },
        {
          "item": "Limon",
          "amount": "1 adet",
          "note": "halka dilimlenmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "üzeri için"
        },
        {
          "item": "Sıcak Su",
          "amount": "2 su bardağı",
          "note": "pişirme suyu"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Salamura yaprakları bol suda yıkayıp fazla tuzunu almak için 5 dakika sıcak suda haşlayın ve süzün.",
      "tip": "Yapraklar çok tuzluysa ılık suda 1-2 saat bekletebilirsiniz."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tavada zeytinyağında soğanları ve fıstıkları pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Pirinç, süzülmüş kuş üzümü, tuz, şeker ve baharatları ekleyip kavurmaya devam edin. 1 su bardağı sıcak suyu ekleyip kısık ateşte suyunu çekene kadar pişirin ve demlenmeye bırakın.",
      "tip": "İç harcın tam pişmemesi, hafif diri kalması gerekir."
    },
    {
      "stepNumber": 4,
      "instruction": "Yaprakların damarlı kısmı üstte kalacak şekilde düz bir zemine serin. Ortasına harç koyup kenarlarını kapatarak ince silindir şeklinde sarın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tencerenin tabanına birkaç yaprak serin. Sarmaları sıkıca tencereye dizin. Üzerine limon dilimleri yerleştirip zeytinyağı ve sıcak suyu ilave edin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Sarmaların dağılmaması için üzerine porselen bir tabak kapatın. Kısık ateşte yaklaşık 40-45 dakika pişirin.",
      "tip": "Ocağın altını kapattıktan sonra tencerenin kapağını açmadan oda sıcaklığında soğumaya bırakın."
    }
  ],
  "tips": [
    "Zeytinyağlı sarmayı kendi tenceresinde soğutmak parlaklığını korur ve lezzetini artırır.",
    "Servis yapmadan önce üzerine taze sıkılmış limon suyu ve bir gezdirim sızma zeytinyağı ekleyebilirsiniz."
  ],
  "calories": 310,
  "imageUrl": "/images/recipes/zeytinyagli-yaprak-sarmasi.jpg"
},
  {
  "id": "zeytinyagli-barbunya-pilaki",
  "title": "Zeytinyağlı Barbunya Pilaki",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 55,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "taze barbunya",
    "havuç",
    "patates",
    "kuru soğan",
    "sarımsak",
    "zeytinyağı",
    "domates"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "meze",
    "klasik",
    "soğuk"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Taze Barbunya",
          "amount": "500 gram",
          "note": "ayıklanmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Havuç",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Patates",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Sarımsak",
          "amount": "4 diş",
          "note": "ince dilimlenmiş"
        },
        {
          "item": "Domates",
          "amount": "2 adet",
          "note": "rendelenmiş"
        },
        {
          "item": "Sızma Zeytinyağı",
          "amount": "1/2 çay bardağı",
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
          "amount": "2 su bardağı",
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış, üzeri için"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Barbunyaları tencereye alın, üzerini geçecek kadar su ekleyip 10 dakika haşlayın ve siyah suyunu süzün.",
      "tip": "Siyah suyun süzülmesi pilakinin berrak renkte olmasını sağlar."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tencerede zeytinyağında soğan ve sarımsakları pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Havuç ve patatesleri ekleyip 3-4 dakika sotemeye devam edin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Rendelenmiş domates, toz şeker, tuz ve haşlanmış barbunyaları tencereye ilave edin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Sıcak suyu ekleyip karıştırın, kapağını kapatıp kısık ateşte sebzeler yumuşayana kadar yaklaşık 25 dakika pişirin.",
    }
  ],
  "tips": [
    "Zeytinyağlı yemekler dinlendikçe lezzetlenir; oda sıcaklığına geldikten sonra buzdolabında en az 2-3 saat soğutun.",
    "Servis ederken üzerine bol kıyılmış taze maydanoz ve sızma zeytinyağı gezdirin, yanında limon dilimleriyle sunun."
  ],
  "calories": 310,
  "imageUrl": "/images/recipes/zeytinyagli-barbunya-pilaki.jpg"
},
  {
  "id": "zeytinyagli-kereviz",
  "title": "Zeytinyağlı Kereviz",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlı Yemekler",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 55,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "kereviz",
    "havuç",
    "patates",
    "kuru soğan",
    "portakal suyu",
    "zeytinyağı"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "klasik",
    "ege",
    "sağlıklı"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Kereviz",
          "amount": "2 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Havuç",
          "amount": "1 adet",
          "note": "halka doğranmış"
        },
        {
          "item": "Patates",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Kuru soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Portakal suyu",
          "amount": "1 su bardağı",
          "note": "taze sıkılmış"
        },
        {
          "item": "Limon suyu",
          "amount": "1/2 adet",
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Toz şeker",
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
      "instruction": "Kerevizleri soyup küp küp doğrayın ve kararmamaları için limonlu suda bekletin.",
      "tip": "Limonlu su kerevizlerin beyaz kalmasını sağlar."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereye zeytinyağını ve doğranmış soğanları alıp pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Havuçları ekleyip 2-3 dakika soteleyin, ardından süzülmüş kerevizleri ve patatesleri ilave edin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Portakal suyu, limon suyu, tuz ve şekeri ekleyip karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tencerenin kapağını kapatın, kısık ateşte sebzeler yumuşayana kadar yaklaşık 30-35 dakika pişirin.",
      "tip": "Yemeği pişirirken ekstra su eklememeye çalışın, sebzelerin kendi suyu ve portakal suyu yeterli olacaktır."
    }
  ],
  "tips": [
    "Zeytinyağlı kerevizi piştikten sonra tenceresinde oda sıcaklığına gelene kadar dinlendirin.",
    "Servis ederken üzerine ince kıyılmış taze kereviz yaprakları veya dereotu serpiştirin.",
    "Buzdolabında soğutulduktan sonra soğuk olarak servis yapılması lezzetini artırır."
  ],
  "calories": 195,
  "imageUrl": "/images/recipes/zeytinyagli-kereviz.jpg"
},
  {
  "id": "zeytinyagli-pirasa",
  "title": "Zeytinyağlı Pırasa",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 45,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "pırasa",
    "havuç",
    "pirinç",
    "zeytinyağı",
    "portakal suyu",
    "limon"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "ege",
    "sağlıklı",
    "sebze",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Pırasa",
          "amount": "1 kg",
          "note": "temizlenmiş ve vereve doğranmış"
        },
        {
          "item": "Havuç",
          "amount": "2 adet",
          "note": "halka doğranmış"
        },
        {
          "item": "Pirinç",
          "amount": "2 yemek kaşığı",
          "note": "yıkanmış ve süzülmüş"
        },
        {
          "item": "Sızma Zeytinyağı",
          "amount": "1/2 çay bardağı",
        },
        {
          "item": "Portakal Suyu",
          "amount": "1 çay bardağı",
          "note": "taze sıkılmış"
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
        },
        {
          "item": "Su",
          "amount": "1 su bardağı",
          "note": "sıcak"
        },
        {
          "item": "Toz Şeker",
          "amount": "1 tatlı kaşığı",
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
      "instruction": "Geniş bir tencereye zeytinyağını alın. Doğranmış havuçları ekleyip 2-3 dakika soteleyin.",
      "tip": "Havuçların rengini yağa vermesi lezzet ve görsel açıdan önemlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Vereve doğranmış pırasaları ekleyin ve zedelemeden birkaç dakika hafifçe karıştırarak kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Yıkanmış pirinci, portakal suyunu, limon suyunu, sıcak suyu, şekeri ve tuzu ilave edin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Tencerenin kapağını kapatın, kaynamaya başlayınca ateşi kısın. Pırasa ve havuçlar yumuşayana kadar yaklaşık 25-30 dakika pişirin.",
      "tip": "Kısık ateşte kendi buharıyla pişmesi yemeğin suyunu korur."
    },
    {
      "stepNumber": 5,
      "instruction": "Yemeği oda sıcaklığına geldikten sonra buzdolabına kaldırın ve soğuk olarak servis edin.",
      "tip": "Zeytinyağlı yemekler dinlendikçe lezzetlenir."
    }
  ],
  "tips": [
    "Pişirme suyuna eklenen taze sıkılmış portakal suyu pırasaya nefis bir aroma ve doğal bir tatlılık katar.",
    "Yemeği servis etmeden önce üzerine biraz daha çiğ sızma zeytinyağı gezdirerek parlaklık ve lezzet katabilirsiniz.",
    "Buzdurilmadan buzdolabında 2-3 gün tazeliğini korur."
  ],
  "calories": 180,
  "imageUrl": "/images/recipes/zeytinyagli-pirasa.jpg"
},
  {
  "id": "zeytinyagli-sevketi-bostan",
  "title": "Zeytinyağlı Şevketi Bostan",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlı Yemekler",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 55,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "şevketi bostan",
    "zeytinyağı",
    "kuru soğan",
    "limon",
    "un"
  ],
  "tags": [
    "zeytinyağlı",
    "ege",
    "vejetaryen",
    "ot yemeği",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Şevketi Bostan",
          "amount": "500 gram",
          "note": "ayıklanmış ve doğranmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Sıcak Su",
          "amount": "2 su bardağı",
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
          "item": "Limon Suyu",
          "amount": "1 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Un",
          "amount": "1 yemek kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Ayıklanıp doğranmış şevketi bostanları kararmaması için bol limonlu suda bekletin.",
      "tip": "Kök kısımlarını sertse uzunlamasına dörde bölün."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencerede zeytinyağını ısıtın ve doğranmış soğanları pembeleşinceye kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Süzdüğünüz şevketi bostanları tencereye ekleyin ve 5 dakika soğanlarla birlikte soteleyin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Sıcak suyu ve tuzu ilave edip tencerenin kapağını kapatın; kök kısımları yumuşayana kadar kısık ateşte pişirin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Bir kasede limon suyu ve unu çırpın. Yemeğin suyundan bir kepçe ekleyip ılıttığınız terbiyeyi tencereye karıştırarak dökün.",
      "tip": "Terbiyenin kesilmemesi için hızlıca karıştırın."
    },
    {
      "stepNumber": 6,
      "instruction": "Kısık ateşte 5 dakika daha pişirip ocaktan alın ve oda sıcaklığına gelene kadar tencerede dinlendirin.",
    }
  ],
  "tips": [
    "Şevketi bostan otunu temizlerken ellerinizin kararmaması için mutlaka eldiven kullanın.",
    "Zeytinyağlı yemekler oda sıcaklığına geldikten sonra buzdolabında soğutularak servis edildiğinde lezzeti artar.",
    "Servis yaparken üzerine gezdireceğiniz çiğ sızma zeytinyağı aromayı güçlendirecektir."
  ],
  "calories": 185,
  "imageUrl": "/images/recipes/zeytinyagli-sevketi-bostan.jpg"
},
  {
  "id": "zeytinyagli-kabak-cicegi-dolmasi",
  "title": "Zeytinyağlı Kabak Çiçeği Dolması",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 35,
  "cookTimeMinutes": 25,
  "totalTimeMinutes": 60,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "kabak çiçeği",
    "pirinç",
    "kuru soğan",
    "zeytinyağı",
    "nane",
    "dereotu"
  ],
  "tags": [
    "zeytinyağlı",
    "ege",
    "dolma",
    "vejetaryen",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzeme",
      "items": [
        {
          "item": "Kabak Çiçeği",
          "amount": "20 adet",
          "note": "taze ve ayıklanmış"
        }
      ]
    },
    {
      "groupTitle": "İç Harç İçin",
      "items": [
        {
          "item": "Pirinç",
          "amount": "1 su bardağı",
          "note": "yıkanmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "2 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Dolmalık Fıstık",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Kuş Üzümü",
          "amount": "1 yemek kaşığı",
          "note": "suda bekletilmiş"
        },
        {
          "item": "Taze Nane ve Dereotu",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Baharatlar (Tuz, Karabiber, Yenibahar, Şeker)",
          "amount": "1'er çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Kabak çiçeklerinin içindeki sarı tohum kısımlarını yırtmadan dikkatlice çıkarın ve sudan geçirip süzün.",
      "tip": "Çiçeklerin kapanmaması için yaprakları fazla bekletmeden hemen doldurun."
    },
    {
      "stepNumber": 2,
      "instruction": "Tavada zeytinyağı ile soğan ve fıstıkları pembeleşinceye kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Yıkanmış pirinci, kuş üzümünü, baharatları ve yarım çay bardağı sıcak suyu ekleyip kısık ateşte suyunu çekene kadar pişirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Demlenen harca kıyılmış yeşillikleri ekleyip karıştırın ve ılımaya bırakın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Çiçeklerin içine birer tatlı kaşığı harç doldurup taç yapraklarını üstten içe doğru katlayarak kapatın.",
      "tip": "Çiçekleri fazla doldurmayın, pirinç şiştikçe patlayabilir."
    },
    {
      "stepNumber": 6,
      "instruction": "Dolmaları tencereye dik dizin; üzerine biraz zeytinyağı, limon suyu ve 1 su bardağı sıcak su ekleyip kısık ateşte 25 dakika pişirin.",
    }
  ],
  "tips": [
    "Piştikten sonra tencerenin kapağını kapatıp oda sıcaklığına gelene kadar demlendirin.",
    "Soğuk servis yaparken üzerine sızma zeytinyağı ve taze limon suyu gezdirin."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/zeytinyagli-kabak-cicegi-dolmasi.jpg"
},
  {
  "id": "zeytinyagli-yer-elmasi",
  "title": "Zeytinyağlı Yer Elması",
  "mainCategory": "soguk-yemekler",
  "subCategory": "zeytinyaglilar",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 50,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "yer elması",
    "havuç",
    "kuru soğan",
    "portakal suyu",
    "zeytinyağı",
    "pirinç"
  ],
  "tags": [
    "zeytinyağlı",
    "sebze",
    "vejetaryen",
    "kış sebzeleri",
    "ege"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Yer Elması",
          "amount": "500 gram",
          "note": "soyulmuş ve iri doğranmış"
        },
        {
          "item": "Havuç",
          "amount": "1 adet",
          "note": "halka doğranmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
        },
        {
          "item": "Pirinç",
          "amount": "1 yemek kaşığı",
          "note": "yıkanmış"
        },
        {
          "item": "Portakal Suyu",
          "amount": "1 çay bardağı",
          "note": "taze sıkılmış"
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
        },
        {
          "item": "Toz Şeker",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Dereotu",
          "amount": "1/4 demet",
          "note": "ince kıyılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Yer elmalarını soyup kararmamaları için limonlu suda bekletin.",
      "tip": "Kabuklarını inceltmek için sebze soyacağı kullanabilirsiniz."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereye zeytinyağını alın, soğan ve havuçları ekleyip 4-5 dakika soteleyin.",
    },
    {
      "stepNumber": 3,
      "instruction": "Süzdüğünüz yer elmalarını tencereye ekleyip 2 dakika hafifçe kavurun.",
    },
    {
      "stepNumber": 4,
      "instruction": "Pirinç, portakal suyu, limon suyu, şeker, tuz ve 1 çay bardağı sıcak suyu ilave edin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Kapağı kapalı olarak, yer elmaları yumuşayana kadar kısık ateşte 25 dakika pişirin.",
      "tip": "Piriçlerin dibe tutmaması için ara sıra nazikçe karıştırın."
    },
    {
      "stepNumber": 6,
      "instruction": "Oda sıcaklığına geldikten sonra buzdolabında soğutun ve dereotu ile servis yapın.",
    }
  ],
  "tips": [
    "Yer elması çabuk kararan bir sebzedir, soyar soymaz limonlu suya atmak rengini korur.",
    "Zeytinyağlı yemekleri bir gece buzdolabında dinlendirmek lezzetini ikiye katlar.",
    "Portakal suyu yemeğe dengeli bir tatlılık ve harika bir aroma kazandırır."
  ],
  "calories": 185,
  "imageUrl": "/images/recipes/zeytinyagli-yer-elmasi.jpg"
},
  {
  "id": "zeytinyagli-biber-dolmasi",
  "title": "Zeytinyağlı Biber Dolması",
  "mainCategory": "soguk-yemekler",
  "subCategory": "dolma-sarma-soguk",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 30,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 70,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "dolmalık biber",
    "pirinç",
    "kuru soğan",
    "zeytinyağı",
    "dolmalık fıstık",
    "kuş üzümü"
  ],
  "tags": [
    "zeytinyağlı",
    "dolma",
    "vejetaryen",
    "vegan",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Dolma Harcı İçin",
      "items": [
        {
          "item": "Dolmalık Biber",
          "amount": "12 adet",
          "note": "orta boy"
        },
        {
          "item": "Pirinç",
          "amount": "1.5 su bardağı",
          "note": "yıkanıp süzülmüş"
        },
        {
          "item": "Kuru Soğan",
          "amount": "3 adet",
          "note": "yemeklik ince doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 çay bardağı",
        },
        {
          "item": "Dolmalık Fıstık",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Kuş Üzümü",
          "amount": "2 yemek kaşığı",
          "note": "suda bekletilmiş"
        },
        {
          "item": "Domates",
          "amount": "1 adet",
          "note": "rendelenmiş"
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
          "item": "Baharatlar",
          "amount": "1'er çay kaşığı",
          "note": "kuru nane, yenibahar, karabiber, tarçın"
        }
      ]
    },
    {
      "groupTitle": "Sos ve Pişirme İçin",
      "items": [
        {
          "item": "Domates",
          "amount": "1 adet",
          "note": "kapak yapmak için dilimlenmiş"
        },
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "1.5 su bardağı",
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
      "instruction": "Tencereye zeytinyağını alın. Soğanları ve fıstıkları ekleyip pembeleşene kadar kavurun.",
      "tip": "Soğanların bol olması iç harca doğal bir tatlılık katar."
    },
    {
      "stepNumber": 2,
      "instruction": "Pirinçleri ekleyip 2-3 dakika kavurun. Rendelenmiş domates, kuş üzümü, şeker, tuz ve baharatları ekleyip karıştırın.",
    },
    {
      "stepNumber": 3,
      "instruction": "1 su bardağı sıcak suyu ekleyin, kısık ateşte suyunu çekene kadar demlendirip ocaktan alın ve ılınmaya bırakın.",
      "tip": "Pirinçler bu aşamada yarı pişmiş kalmalıdır."
    },
    {
      "stepNumber": 4,
      "instruction": "Biberlerin kapak kısımlarını çıkarıp tohumlarını temizleyin. Hazırladığınız harcı biberlere üstten 1 parmak boşluk kalacak şekilde doldurun.",
      "tip": "Harcı sıkıştırmayın, pirinçler pişerken genleşecektir."
    },
    {
      "stepNumber": 5,
      "instruction": "Biberlerin ağzını domates dilimleriyle kapatıp tencereye dik olarak dizin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Üzerlerine zeytinyağı, limon suyu ve sıcak suyu gezdirin. Kapağı kapalı olarak kısık ateşte 40 dakika pişirin.",
    }
  ],
  "tips": [
    "Zeytinyağlı dolmayı pişirdikten sonra tenceresinde oda sıcaklığına gelene kadar dinlendirin.",
    "Biberlerin içini doldurmadan önce parmağınızla çok az tuz sürmek lezzetini artırır.",
    "Servis etmeden önce buzdolabında soğutmanız lezzetlerin oturmasını sağlar."
  ],
  "calories": 280,
  "imageUrl": "/images/recipes/zeytinyagli-biber-dolmasi.jpg"
},
  {
  "id": "zeytinyagli-lahana-sarmasi",
  "title": "Zeytinyağlı Lahana Sarması",
  "mainCategory": "soguk-yemekler",
  "subCategory": "dolma-sarma-soguk",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 40,
  "cookTimeMinutes": 45,
  "totalTimeMinutes": 85,
  "servings": 6,
  "difficulty": "orta",
  "mainIngredients": [
    "beyaz lahana",
    "pirinç",
    "kuru soğan",
    "zeytinyağı",
    "dolmalık fıstık",
    "kuş üzümü",
    "yenibahar"
  ],
  "tags": [
    "zeytinyağlı",
    "sarma",
    "vejetaryen",
    "klasik",
    "soğuk başlangıç"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Lahana İçin",
      "items": [
        {
          "item": "Sarma Yaptırmalık Beyaz Lahana",
          "amount": "1 adet",
          "note": "orta boy, damarsız açık renk yapraklı"
        }
      ]
    },
    {
      "groupTitle": "İç Harcı İçin",
      "items": [
        {
          "item": "Pirinç",
          "amount": "2 su bardağı",
          "note": "yıkanıp süzülmüş"
        },
        {
          "item": "Kuru Soğan",
          "amount": "4 adet",
          "note": "yemeklik ince doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Dolmalık Fıstık",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Kuş Üzümü",
          "amount": "2 yemek kaşığı",
          "note": "sıcak suda bekletilmiş"
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
          "item": "Nane",
          "amount": "1 yemek kaşığı",
          "note": "kuru nane"
        },
        {
          "item": "Yenibahar",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Tarçın",
          "amount": "1/2 tatlı kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "1 su bardağı",
        }
      ]
    },
    {
      "groupTitle": "Pişirme Suyu İçin",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet limonun suyu",
        },
        {
          "item": "Sıcak Su",
          "amount": "1.5 su bardağı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Lahana yapraklarını kök kısımlarından ayırın ve geniş bir tencerede kaynayan tuzlu suda 2-3 dakika yumuşayana kadar haşlayın.",
      "tip": "Yaprakları haşladıktan hemen sonra soğuk şoklama için buzlu suya alırsanız rengini ve dokusunu korur."
    },
    {
      "stepNumber": 2,
      "instruction": "Geniş bir tencerede zeytinyağını ısıtın, soğanları ve dolmalık fıstıkları pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Yıkanmış pirinci ekleyip birkaç dakika daha kavurun. Kuş üzümü, tuz, şeker ve baharatları ekleyip karıştırın.",
    },
    {
      "stepNumber": 4,
      "instruction": "1 su bardağı sıcak suyu ekleyin, kapağını kapatıp kısık ateşte suyunu çekene kadar yarı kıvamda pişirin ve demlenmeye bırakın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Haşlanan lahana yapraklarının sert damarlarını bıçakla kesin. Yaprakların genişliğine göre iç harç koyup kenarlarını kapatrak rulo şeklinde sarın.",
      "tip": "Yaprakların damarlı kısımlarını hafifçe merdane ile ezerek daha kolay sarılmasını sağlayabilirsiniz."
    },
    {
      "stepNumber": 6,
      "instruction": "Tencerenin tabanına lahana yaprakları serin ve sarmaları bitişik şekilde tencereye dizin.",
    },
    {
      "stepNumber": 7,
      "instruction": "Üzerine zeytinyağı, limon suyu ve sıcak suyu dökün. Sarmaların açılmaması için üzerine porselen bir tabak kapatın.",
    },
    {
      "stepNumber": 8,
      "instruction": "Kısık ateşte lahana yaprakları tamamen yumuşayana kadar yaklaşık 40-45 dakika pişirin.",
    }
  ],
  "tips": [
    "Zeytinyağlı lahana sarması oda sıcaklığına geldikten sonra buzdolabında en az 2-3 saat dinlendirilip soğuk servis edilmelidir.",
    "Pişirme esnasında suyunu erken çekerse azar azar sıcak su ilavesi yapabilirsiniz.",
    "Limon dilimleri ile süsleyerek servis yapabilirsiniz."
  ],
  "calories": 310,
  "imageUrl": "/images/recipes/zeytinyagli-lahana-sarmasi.jpg"
},
  {
  "id": "zeytinyagli-pazi-sarmasi",
  "title": "Zeytinyağlı Pazı Sarması",
  "mainCategory": "soguk-yemekler",
  "subCategory": "dolma-sarma-soguk",
  "subCategoryLabel": "Zeytinyağlılar",
  "region": "Ege",
  "prepTimeMinutes": 35,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 65,
  "servings": 4,
  "difficulty": "orta",
  "mainIngredients": [
    "pazı",
    "pirinç",
    "zeytinyağı",
    "kuru soğan",
    "dolmalık fıstık",
    "kuş üzümü",
    "nane"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "ege",
    "soğuk meze",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzeme",
      "items": [
        {
          "item": "Pazı",
          "amount": "2 demet",
          "note": "taze ve geniş yapraklı"
        }
      ]
    },
    {
      "groupTitle": "İç Harcı İçin",
      "items": [
        {
          "item": "Pirinç",
          "amount": "1 su bardağı",
          "note": "yıkanmış ve süzülmüş"
        },
        {
          "item": "Kuru Soğan",
          "amount": "2 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
        },
        {
          "item": "Dolmalık Fıstık",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Kuş Üzümü",
          "amount": "1 yemek kaşığı",
          "note": "suda beklemiş"
        },
        {
          "item": "Kuru Nane",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Yenibahar",
          "amount": "1/2 tatlı kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Toz Şeker",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Sıcak Su",
          "amount": "1 su bardağı",
        }
      ]
    },
    {
      "groupTitle": "Pişirme Suyu İçin",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet limon",
          "note": "taze sıkılmış"
        },
        {
          "item": "Sıcak Su",
          "amount": "1 su bardağı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Pazı yapraklarını yıkayıp saplarını kesin. Kaynar suda 10 saniye haşlayıp hemen buzlu suya çıkarın ve süzün.",
      "tip": "Pazıları suda fazla bekletmeyin, aksi halde yırtılır."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencerede zeytinyağında soğan ve dolmalık fıstıkları pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "Pirinci, kuş üzümünü, baharatları, tuz ve şekeri ekleyin. 1 su bardağı sıcak suyu ekleyip suyunu çekene kadar pişirin ve demlendirin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Pazı yaprağının ortasındaki kalın damarı hafifçe inceltin. İç harç koyarak kenarlarını kapatıp rulo şeklinde sarın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tencerenin tabanına pazı saplarını dizin. Sarmaları yan yana ve sıkıca yerleştirin.",
    },
    {
      "stepNumber": 6,
      "instruction": "Üzerine zeytinyağı, limon suyu ve sıcak suyu dökün. Düz bir tabak kapatıp kısık ateşte 25-30 dakika pişirin.",
    }
  ],
  "tips": [
    "Sarmaların dağılmaması için pişerken tencerenin üzerine mutlaka porselen bir tabak kapatın.",
    "Zeytinyağlı yemeklerin lezzeti demlendikçe artar; soğuk veya oda sıcaklığında servis yapın.",
    "Tencere tabanına dizilen pazı sapları sarmaların yanmasını engeller."
  ],
  "calories": 285,
  "imageUrl": "/images/recipes/zeytinyagli-pazi-sarmasi.jpg"
},
  {
  "id": "mercimek-koftesi",
  "title": "Mercimek Köftesi",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Mezeler ve Zeytinyağlılar",
  "region": "Güneydoğu Anadolu",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 40,
  "servings": 6,
  "difficulty": "kolay",
  "mainIngredients": [
    "kırmızı mercimek",
    "ince bulgur",
    "kuru soğan",
    "taze soğan",
    "maydanoz",
    "domates salçası",
    "biber salçası"
  ],
  "tags": [
    "vejetaryen",
    "vegan",
    "soğuk başlangıç",
    "meze",
    "klasik",
    "gün menüsü"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Köfte Harcı İçin",
      "items": [
        {
          "item": "Kırmızı mercimek",
          "amount": "1 su bardağı",
          "note": "yıkanmış"
        },
        {
          "item": "İnce bulgur",
          "amount": "1,5 su bardağı",
          "note": "kısırlık"
        },
        {
          "item": "Su",
          "amount": "3 su bardağı",
          "note": "haşlamak için"
        },
        {
          "item": "Kuru soğan",
          "amount": "1 adet",
          "note": "ince yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1 çay bardağı",
        },
        {
          "item": "Domates salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Biber salçası",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Taze soğan",
          "amount": "5 dal",
          "note": "ince kıyılmış"
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Tuz",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Kimyon",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Pul biber",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Limon suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Yıkanmış kırmızı mercimeği 3 su bardağı su ile tencereye alın ve mercimekler yumuşayana kadar iyice haşlayın.",
      "tip": "Mercimeğin suyunu tamamen çekmemesine, hafif sulu kalmasına özen gösterin."
    },
    {
      "stepNumber": 2,
      "instruction": "Haşlanan mercimeği ocaktan alıp içerisine ince bulguru ekleyin, karıştırın ve tencerenin kapağını kapatıp 15 dakika demlenmeye bırakın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Tavada zeytinyağını ısıtın, doğranmış kuru soğanları ekleyip pembeleşene kadar kavurun. Salçaları ve baharatları ilave edip 2 dakika daha kavurun.",
    },
    {
      "stepNumber": 4,
      "instruction": "Demlenen mercimekli bulgur karışımına sıcak salçalı sosu dökün. Ele yapışmayacak kıvama gelene kadar ılıklaşınca güzelce yoğurun.",
    },
    {
      "stepNumber": 5,
      "instruction": "İnce kıyılmış taze soğan, maydanoz ve limon suyunu ekleyip yeşillikleri ezmeden hafifçe karıştırarak harca yedirin.",
      "tip": "Yeşillikleri harç soğuduktan sonra eklerseniz tazeliklerini ve renklerini korurlar."
    },
    {
      "stepNumber": 6,
      "instruction": "Hazırladığınız harçtan ceviz büyüklüğünde parçalar alıp avucunuzda sıkarak şekil verin ve marul yaprakları üzerinde servis edin.",
    }
  ],
  "tips": [
    "Servis ederken yanında taze marul yaprakları, limon dilimleri ve nar ekşisi sunabilirsiniz.",
    "Köftelerinizi şekillendirirken ellerinizi hafifçe zeytinyağı veya su ile ıslatırsanız daha pürüzsüz şekil alırlar.",
    "Buzdolabında üzeri kapalı olarak 2-3 gün tazeliğini korur."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/mercimek-koftesi.jpg"
},
  {
  "id": "cilbir",
  "title": "Çılbır",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Kahvaltılıklar",
  "region": "Saray Mutfağı",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 10,
  "totalTimeMinutes": 20,
  "servings": 2,
  "difficulty": "kolay",
  "mainIngredients": [
    "yumurta",
    "süzme yoğurt",
    "sarımsak",
    "tereyağı",
    "pul biber"
  ],
  "tags": [
    "kahvaltılık",
    "yumurta",
    "yoğurtlu",
    "klasik",
    "vejetaryen",
    "pratik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Yoğurt Tabanı İçin",
      "items": [
        {
          "item": "Süzme Yoğurt",
          "amount": "1 su bardağı",
          "note": "oda sıcaklığında"
        },
        {
          "item": "Sarımsak",
          "amount": "1 diş",
          "note": "ezilmiş"
        },
        {
          "item": "Tuz",
          "amount": "0.5 çay kaşığı",
        }
      ]
    },
    {
      "groupTitle": "Poşe Yumurta İçin",
      "items": [
        {
          "item": "Yumurta",
          "amount": "2 adet",
          "note": "taze ve soğuk"
        },
        {
          "item": "Üzüm Sirkesi",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Su",
          "amount": "1 litre",
          "note": "haşlamak için"
        }
      ]
    },
    {
      "groupTitle": "Yağ Sosu İçin",
      "items": [
        {
          "item": "Tereyağı",
          "amount": "2 yemek kaşığı",
        },
        {
          "item": "Pul Biber",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Toz Kırmızı Biber",
          "amount": "0.5 çay kaşığı",
          "note": "tatlı veya acı"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Süzme yoğurdu ezilmiş sarımsak ve tuz ile iyice çırpın, servis tabağının tabanına yayın.",
      "tip": "Yoğurdun oda sıcaklığında olması sıcak yumurtanın çabuk soğumasını engeller."
    },
    {
      "stepNumber": 2,
      "instruction": "Derin bir tencerede suyu kaynatın, ardından ateşi kısıp sirkeyi ekleyin. Suyu kaşıkla hızlıca karıştırarak bir girdap oluşturun.",
      "tip": "Poşe suyuna kesinlikle tuz atmayın, tuz yumurta beyazının dağılmasına yol açar."
    },
    {
      "stepNumber": 3,
      "instruction": "Taze yumurtayı küçük bir kaseye kırın ve girdabın tam ortasına yavaşça bırakın. Kısık ateşte 3-4 dakika kadar pişirin.",
      "tip": "Yumurtanın sarısının kayısı kıvamında kalması için süreyi aşmayın."
    },
    {
      "stepNumber": 4,
      "instruction": "Pişen yumurtayı delikli kepçe ile sudan alın, havlu kağıt üzerinde fazla suyunu süzdürüp yoğurdun üzerine yerleştirin.",
    },
    {
      "stepNumber": 5,
      "instruction": "Küçük bir tavada tereyağını köpürene kadar eritin, pul biber ve toz biberi ekleyip yakmadan kızdırın. Yoğurtlu yumurtanın üzerine gezdirin.",
    }
  ],
  "tips": [
    "Başarılı bir poşe yumurta için yumurtaların mutlaka taze olması gerekir.",
    "Servis ederken üzerine taze nane veya dereotu yaprakları ekleyebilirsiniz.",
    "Kızartılmış ekmek dilimleriyle sıcak olarak servis yapın."
  ],
  "calories": 285,
  "imageUrl": "/images/recipes/cilbir.jpg"
},
  {
  "id": "saksuka",
  "title": "Şakşuka",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Zeytinyağlılar ve Mezeler",
  "region": "Akdeniz",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 35,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "patlıcan",
    "domates",
    "biber",
    "sarımsak",
    "kabak",
    "zeytinyağı"
  ],
  "tags": [
    "meze",
    "zeytinyağlı",
    "vejetaryen",
    "klasik",
    "patlıcan"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Kızartılacak Sebzeler",
      "items": [
        {
          "item": "Patlıcan",
          "amount": "3 adet",
          "note": "alacalı soyulmuş, küp doğranmış"
        },
        {
          "item": "Kabak",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Yeşil Biber",
          "amount": "2 adet",
          "note": "iri yemeklik doğranmış"
        },
        {
          "item": "Kırmızı Kapya Biber",
          "amount": "1 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Sıvı Yağ",
          "amount": "1 su bardağı",
          "note": "kızartmak için"
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
          "item": "Sarımsak",
          "amount": "3 diş",
          "note": "ince kıyılmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "3 yemek kaşığı",
        },
        {
          "item": "Toz Şeker",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Karabiber",
          "amount": "1/2 çay kaşığı",
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Küp doğranmış patlıcanları tuzlu suda 15 dakika bekletin, ardından suyunu süzüp havlu kağıt ile kurulayın.",
      "tip": "Patlıcanların yağı çekmemesi için tamamen kuru olması gerekir."
    },
    {
      "stepNumber": 2,
      "instruction": "Kızgın sıvı yağda sırasıyla kabakları, biberleri ve patlıcanları kızartıp havlu kağıt serili tabağa alın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Ayrı bir tavada zeytinyağında sarımsakları soteleyin, rendelenmiş domates, şeker, tuz ve karabiberi ekleyip sos kıvam alana kadar 8-10 dakika pişirin.",
      "tip": "Şeker domatesin asiditesini dengeler."
    },
    {
      "stepNumber": 4,
      "instruction": "Kızaran sebzeleri servis tabağına harmanlayıp üzerine sıcak domates sosunu dökün.",
    }
  ],
  "tips": [
    "Patlıcanları tuzlu suda bekletmek acı suyunu alır ve kızartırken daha az yağ çekmesini sağlar.",
    "Oda sıcaklığında veya soğuk olarak servis yapabilirsiniz.",
    "İsteğe bağlı olarak yanında sarımsaklı yoğurt ile ikram edebilirsiniz."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/saksuka.jpg"
},
  {
  "id": "zeytinyagli-bakla",
  "title": "Zeytinyağlı Bakla",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Zeytinyağlı Yemekler",
  "region": "Ege",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 35,
  "totalTimeMinutes": 55,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "taze bakla",
    "zeytinyağı",
    "kuru soğan",
    "un",
    "limon suyu",
    "dereotu",
    "toz şeker"
  ],
  "tags": [
    "zeytinyağlı",
    "vejetaryen",
    "ege mutfağı",
    "klasik",
    "soğuk meze"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Ana Malzemeler",
      "items": [
        {
          "item": "Taze Bakla",
          "amount": "500 gram",
          "note": "ayıklanmış ve doğranmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "yemeklik doğranmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "1/2 çay bardağı",
          "note": "sızma"
        },
        {
          "item": "Un",
          "amount": "1 yemek kaşığı",
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
          "item": "Sıcak Su",
          "amount": "1.5 su bardağı",
        },
        {
          "item": "Tuz",
          "amount": "1 çay kaşığı",
        },
        {
          "item": "Dereotu",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        }
      ]
    },
    {
      "groupTitle": "Servis İçin",
      "items": [
        {
          "item": "Süzme Yoğurt",
          "amount": "1 su bardağı",
          "note": "isteğe bağlı sarımsaklı"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Bir kapta bol su, yarım limon suyu ve 1 tatlı kaşığı unu karıştırın. Temizleyip kıydığınız baklaları kararmaması için bu suda bekletin.",
      "tip": "Bakla çok hızlı kararan bir sebzedir, hazırlık aşamasında limonlu unlu suda bekletmek rengini korur."
    },
    {
      "stepNumber": 2,
      "instruction": "Tencereye zeytinyağını ve doğranmış soğanları alın, soğanlar yumuşayıp pembeleşene kadar kavurun.",
    },
    {
      "stepNumber": 3,
      "instruction": "1 yemek kaşığı unu tencereye ekleyip kokusu çıkana kadar 1 dakika soğanlarla birlikte kavurun.",
    },
    {
      "stepNumber": 4,
      "instruction": "Süzdüğünüz baklaları tencereye ilave edin. Üzerine limon suyu, toz şeker, tuz ve sıcak suyu ekleyip karıştırın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Tencerenin kapağını kapatın ve kısık ateşte baklalar yumuşayana kadar yaklaşık 30-35 dakika pişirin.",
      "tip": "Pişerken tencerenin üzerine ıslatılmış pişirme kağıdı kapatırsanız buharı içinde kalır ve baklalar lokum gibi pişer."
    },
    {
      "stepNumber": 6,
      "instruction": "Yemek pişince ocağı kapatın, ince kıyılmış dereotunu ekleyip hafifçe karıştırın ve oda sıcaklığında soğumaya bırakın.",
    }
  ],
  "tips": [
    "Zeytinyağlı bakla dinlendikçe lezzetlenir, mümkünse bir gece buzdolabında bekletip soğuk servis edin.",
    "Yanında sarımsaklı süzme yoğurt ve üzerine gezdirilen ekstra sızma zeytinyağı ile servis yapılması gelenekseldir.",
    "Dereotunu yemeği ocaktan aldıktan sonra eklemek tazeliğini ve aromasını korumasını sağlar."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/zeytinyagli-bakla.jpg"
},
  {
  "id": "piyaz",
  "title": "Piyaz",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Salatalar ve Mezeler",
  "region": "Antalya",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 40,
  "totalTimeMinutes": 55,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "kuru fasulye",
    "kırmızı soğan",
    "maydanoz",
    "yumurta",
    "zeytinyağı",
    "limon",
    "sumak"
  ],
  "tags": [
    "salata",
    "meze",
    "klasik",
    "bakliyat",
    "vejetaryen"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Piyaz Malzemeleri",
      "items": [
        {
          "item": "Kuru Fasulye",
          "amount": "2 su bardağı",
          "note": "geceden ıslatılmış ve haşlanmış"
        },
        {
          "item": "Kırmızı Soğan",
          "amount": "1 adet",
          "note": "piyazlık doğranmış"
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Yumurta",
          "amount": "2 adet",
          "note": "katı haşlanmış"
        }
      ]
    },
    {
      "groupTitle": "Sosu İçin",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Limon Suyu",
          "amount": "1 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Elma Sirkesi",
          "amount": "1 yemek kaşığı",
        },
        {
          "item": "Sumak",
          "amount": "1 tatlı kaşığı",
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
      "instruction": "Haşlanmış kuru fasulyeleri süzüp derin bir karıştırma kabına alın.",
      "tip": "Fasulyelerin dağılmaması için çok fazla pişirmemeye özen gösterin."
    },
    {
      "stepNumber": 2,
      "instruction": "Piyazlık doğradığınız soğanları az tuz ile ovup acısını çıkarın, ardından sudan geçirip süzün.",
    },
    {
      "stepNumber": 3,
      "instruction": "Soğanları ve kıyılmış maydanozu fasulyelerin üzerine ekleyin.",
    },
    {
      "stepNumber": 4,
      "instruction": "Küçük bir kapta zeytinyağı, limon suyu, sirke, sumak ve tuzu iyice çırpın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Hazırladığınız sosu piyazın üzerine dökün ve fasulyeleri ezmeden hafifçe karıştırın.",
    },
    {
      "stepNumber": 6,
      "instruction": "Haşlanmış yumurtaları dilimleyerek piyazın üzerine dizin ve servis yapın.",
    }
  ],
  "tips": [
    "Fasulyeleri bir gece önceden ıslatmak pişme süresini kısaltır ve gazını alır.",
    "Servis yapmadan önce piyazı 15-20 dakika dinlendirirseniz sosu daha iyi çeker.",
    "İsteğe bağlı olarak üzerine siyah zeytin ve domates dilimleri ekleyebilirsiniz."
  ],
  "calories": 260,
  "imageUrl": "/images/recipes/piyaz.jpg"
},
  {
  "id": "gavurdagi-salatasi",
  "title": "Gavurdağı Salatası",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Salatalar ve Mezeler",
  "region": "Gaziantep",
  "prepTimeMinutes": 20,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 20,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "domates",
    "salatalık",
    "kuru soğan",
    "ceviz",
    "nar ekşisi",
    "zeytinyağı"
  ],
  "tags": [
    "salata",
    "meze",
    "gaziantep",
    "vejetaryen",
    "klasik"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Salata Malzemeleri",
      "items": [
        {
          "item": "Domates",
          "amount": "4 adet",
          "note": "tavla zarı büyüklüğünde doğranmış"
        },
        {
          "item": "Salatalık",
          "amount": "2 adet",
          "note": "kabukları soyulup ince küp doğranmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "çok ince kıyılmış"
        },
        {
          "item": "Yeşil Biber",
          "amount": "2 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Ceviz İçi",
          "amount": "1 su bardağı",
          "note": "iri kıyılmış"
        }
      ]
    },
    {
      "groupTitle": "Sosu İçin",
      "items": [
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
          "note": "sızma"
        },
        {
          "item": "Nar Ekşisi",
          "amount": "3 yemek kaşığı",
          "note": "doğal"
        },
        {
          "item": "Sumak",
          "amount": "1 tatlı kaşığı",
        },
        {
          "item": "Pul Biber",
          "amount": "1 tatlı kaşığı",
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
      "instruction": "Domates, salatalık, biber ve soğanları olabildiğince küçük küpler halinde doğrayın.",
      "tip": "Sebzelerin eşit ve çok küçük doğranması salatanın lezzet dengesi için önemlidir."
    },
    {
      "stepNumber": 2,
      "instruction": "Kıyılmış maydanozu ve doğranmış sebzeleri geniş bir karıştırma kabına alın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Ayrı bir kapta zeytinyağı, nar ekşisi, sumak, pul biber ve tuzu iyice çırpın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Hazırladığınız sosu salatanın üzerine döküp nazikçe karıştırın. Servis tabağına alıp üzerine bolca iri kıyılmış ceviz serpin.",
      "tip": "Cevizlerin kıtır kalması için sosla karıştırmayıp en üstte servis edin."
    }
  ],
  "tips": [
    "Domateslerin çok sulanmaması için çekirdekli kısımlarını süzebilirsiniz.",
    "Hakiki ve kaliteli nar ekşisi kullanmak salatanın özgün lezzetini ortaya çıkarır.",
    "Salatayı sosladıktan hemen sonra taze olarak servis yapın."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/gavurdagi-salatasi.jpg"
},
  {
  "id": "coban-salatasi",
  "title": "Çoban Salatası",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Salatalar ve Mezeler",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 20,
  "totalTimeMinutes": 15,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "domates",
    "salatalık",
    "biber",
    "kuru soğan",
    "maydanoz",
    "zeytinyağı"
  ],
  "tags": [
    "salata",
    "vejetaryen",
    "pratik",
    "klasik",
    "zeytinyağlı"
  ],
  "ingredientGroups": [
    {
      "items": [
        {
          "item": "Domates",
          "amount": "4 adet",
          "note": "kabukları soyulmuş, küp doğranmış"
        },
        {
          "item": "Salatalık",
          "amount": "2 adet",
          "note": "alacalı soyulmuş, küp doğranmış"
        },
        {
          "item": "Yeşil Biber",
          "amount": "2 adet",
          "note": "ince doğranmış"
        },
        {
          "item": "Kuru Soğan",
          "amount": "1 adet",
          "note": "piyazlık doğranmış"
        },
        {
          "item": "Maydanoz",
          "amount": "1/2 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Zeytinyağı",
          "amount": "4 yemek kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1/2 adet",
          "note": "taze sıkılmış"
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
      "instruction": "Piyazlık doğradığınız soğanları az miktarda tuz ile ovarak acısını çıkarın ve yıkayıp süzün.",
      "tip": "Soğanların acısını almak salatanın lezzetini dengeler."
    },
    {
      "stepNumber": 2,
      "instruction": "Domates, salatalık ve biberleri tavla zarı büyüklüğünde eşit olarak doğrayın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Doğranmış tüm sebzeleri ve ince kıyılmış maydanozu derin bir salata kasesine alın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Ayrı bir kasede zeytinyağı, limon suyu ve tuzu çırpıp salatanın üzerine gezdirin ve nazikçe karıştırın.",
    }
  ],
  "tips": [
    "Sosu servisten hemen önce ekleyin, aksi takdirde sebzeler sulanıp tazeliğini kaybeder.",
    "Lezzetli bir çoban salatası için yaz domatesi ve sızma zeytinyağı kullanmaya özen gösterin."
  ],
  "calories": 110,
  "imageUrl": "/images/recipes/coban-salatasi.jpg"
},
  {
  "id": "borulce-salatasi",
  "title": "Börülce Salatası",
  "mainCategory": "soguk-yemekler",
  "subCategory": "salatalar",
  "subCategoryLabel": "Salatalar ve Mezeler",
  "region": "Ege",
  "prepTimeMinutes": 15,
  "cookTimeMinutes": 30,
  "totalTimeMinutes": 45,
  "servings": 4,
  "difficulty": "kolay",
  "mainIngredients": [
    "kuru börülce",
    "kırmızı soğan",
    "maydanoz",
    "köz kırmızı biber",
    "zeytinyağı",
    "limon suyu",
    "nar ekşisi"
  ],
  "tags": [
    "salata",
    "meze",
    "ege",
    "vejetaryen",
    "zeytinyağlı",
    "diyet"
  ],
  "ingredientGroups": [
    {
      "groupTitle": "Salata Malzemeleri",
      "items": [
        {
          "item": "Kuru Börülce",
          "amount": "1.5 su bardağı",
          "note": "haşlanmış"
        },
        {
          "item": "Kırmızı Soğan",
          "amount": "1 adet",
          "note": "piyazlık doğranmış"
        },
        {
          "item": "Közlenmiş Kırmızı Biber",
          "amount": "2 adet",
          "note": "küp doğranmış"
        },
        {
          "item": "Maydanoz",
          "amount": "0.5 demet",
          "note": "ince kıyılmış"
        },
        {
          "item": "Taze Soğan",
          "amount": "3 dal",
          "note": "ince doğranmış"
        },
        {
          "item": "Dereotu",
          "amount": "0.25 demet",
          "note": "ince kıyılmış"
        }
      ]
    },
    {
      "groupTitle": "Sosu İçin",
      "items": [
        {
          "item": "Sızma Zeytinyağı",
          "amount": "4 yemek kaşığı",
        },
        {
          "item": "Limon Suyu",
          "amount": "1 adet",
          "note": "taze sıkılmış"
        },
        {
          "item": "Nar Ekşisi",
          "amount": "1 yemek kaşığı",
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
      "instruction": "Kuru börülceleri yumuşayana kadar haşlayın, süzün ve soğumaya bırakın.",
      "tip": "Börülcelerin dağılmaması için fazla haşlamamaya özen gösterin."
    },
    {
      "stepNumber": 2,
      "instruction": "Piyazlık doğradığınız kırmızı soğanı az tuzla hafifçe ovarak acılığını çıkarın.",
    },
    {
      "stepNumber": 3,
      "instruction": "Derin bir karıştırma kabına soğuyan börülceleri, soğanı, köz biberleri ve doğranmış yeşillikleri alın.",
    },
    {
      "stepNumber": 4,
      "instruction": "Zeytinyağı, limon suyu, nar ekşisi, tuz ve pul biberi ayrı bir kapta çırpın.",
    },
    {
      "stepNumber": 5,
      "instruction": "Hazırladığınız sosu salatanın üzerine dökün, ezmeden hafifçe karıştırıp servis edin.",
    }
  ],
  "tips": [
    "Börülceleri bir gece önceden suda bekletmek pişme süresini oldukça kısaltır.",
    "Salatayı servis yapmadan önce buzdolabında 30 dakika dinlendirirseniz lezzetler daha iyi bütünleşir.",
    "İsteğe bağlı olarak içerisine kornişon turşu veya haşlanmış mısır da ekleyebilirsiniz."
  ],
  "calories": 210,
  "imageUrl": "/images/recipes/borulce-salatasi.jpg"
},
];

export default sogukYemekler;