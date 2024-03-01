let usefulCards = [
    {
        img: "img/France.png",
        or: "France",
        header: "Франция намерена исследовать, почему объемы выросли",
        date: "12 мар. 2023 г.",
        text: "Для современного мира новая модель организационной деятельности влечет за собой процесс внедрения и модернизации вывода текущих активов. Являясь всего лишь частью общей картины, базовые сценарии поведения..."
    },
    {
        img: "img/team.png",
        or: "team",
        header: "Сплочённость команды профессионалов продолжает удивлять",
        date: "02 фев. 2023 г.",
        text: "Современные технологии достигли такого уровня, что курс на социально-ориентированный национальный проект способствует повышению качества соответствующих условий активизации. "
    },
  ];


let imges = usefulCards.map(function(item) {
    return item.img;
});

let ors = usefulCards.map(function(item) {
    return item.or;
});

let headers = usefulCards.map(function(item) {
    return item.header;
});

let dates = usefulCards.map(function(item) {
    return item.date;
});

let texts = usefulCards.map(function(item) {
    return item.text;
});

let usefulSlider = document.querySelector(".useful-slider");
let usefulCard = document.querySelector(".useful-card");

for (let i = 0; i < usefulCards.length; i++) {
    
    let cloneUseful = usefulCard.cloneNode(true);

    let firstImg = cloneUseful.children[0];
    let firstHeader = cloneUseful.children[1];
    let firstDate = cloneUseful.children[2];
    let firstText = cloneUseful.children[3];

    firstImg.src = imges[i];
    firstImg.alt = ors[i];
    firstHeader.textContent = headers[i];
    firstDate.textContent = dates[i];
    firstText.textContent = texts[i];

    usefulSlider.appendChild(cloneUseful);

}