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
  }
];

export default mezeler;