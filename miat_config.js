const brands = [
    { name: "AirBNB", img: "img/AirBNB.png" },
    { name: "IFood", img: "img/IFood.png" }, 
    { name: "Localiza", img:"img/Localiza.png" }, 
    { name: "NU", img:"img/NU.png" },
    { name: "Uber", img:"img/Uber.png" }
  ];

const category = "Mobilidade e Aluguel de Veículos"

const attributes = ["Aventura", "Liberdade", "Descoberta", "Escapar", "Dinâmico", "Ousadia", "Flexível", "Revolucionária", "Orgulho", "Perfeição", "Reconhecimento", "Sucesso", "Conquista", "Autoconfiança", "Status", "Empoderamento", "Desenvolvimento pessoal", "Exclusividade", "Independência", "Superior", "Autonomia", "Alegria", "Despreocupação", "Prazer", "Otimismo", "Mente aberta", "Felicidade", "Satisfação", "Razão", "Eficiência", "Precisão", "Simplicidade", "Prático", "Expertise", "Funcional", "Experiente", "Valor", "Acessível", "Econômica", "Tecnológica", "Segurança", "Atencioso", "Proximidade", "Paz de espírito", "Cordial", "Conforto", "Pertencimento", "Confiável", "Confiança", "Parceira", "Completa", "Entusiasmo", "Inspiração", "Diversão", "Ludicidade", "Individualidade", "Exploração", "Curiosidade", "Vibrante", "Jovem", "Ágil", "Inovadora", "Original"];

const pretest_attributes = [
  "Quente", 
  "Frio", 
  "Perigoso",
  "Refrescante", 
  "Fofo",
  "Macio"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Fofo", "Macio"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Perigoso", "Quente"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Frio", "Refrescante"]}
]

const pretest_attributes_multiple = ["Quente", "Frio", "Perigoso", "Refrescante", "Fofo", "Macio", "Viagem", "Empolgação", "Preciso", "Tempo", "Profundo", "Molhado"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Fofo", "Macio"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Perigoso", "Quente"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Frio", "Refrescante"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Viagem", "Empolgação"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Profundo", "Molhado"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Preciso", "Tempo"]}
]


const survey_name = "Localiza Rental Services Survey"
