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
  }
];

export default tatlilar;