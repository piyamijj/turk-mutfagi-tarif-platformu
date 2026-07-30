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
  }
];

export default sogukYemekler;