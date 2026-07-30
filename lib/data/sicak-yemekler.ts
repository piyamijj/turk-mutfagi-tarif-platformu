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
  }
];

export default sicakYemekler;