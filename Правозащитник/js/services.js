let servicesCards = [
    {
        service: "Сопровождение сделок",
        description: "Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.",
    },
    {
        service: "Корпоративные споры",
        description: "Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем",
    },
    {
        service: "Недвижимость и строительство",
        description: "Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения",
    },
    {
        service: "Возврат страховых премий",
        description: "Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса",
    },
    {
        service: "Налоговое право и споры",
        description: "Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.",
    },
  ];


let services = servicesCards.map(function(item) {
    return item.service;
});

let descriptions = servicesCards.map(function(item) {
    return item.description;
});

let servicesSlider = document.querySelector(".list-services");
let servicesCard = document.querySelector(".block-services");

for (let i = 0; i < servicesCards.length; i++) {
    
    let serviceClone = servicesCard.cloneNode(true);

    let usefulService = serviceClone.children[1];
    let usefuldescription = serviceClone.children[2];

    usefulService.textContent = services[i];
    usefuldescription.textContent = descriptions[i];


    servicesSlider.appendChild(serviceClone);

}