let france = [
    {
        img:"img/2.jpg",
        alt:"2",
        author:"Анри Селин",
        name:"Дама с собачкой",
        material:"Акрил, бумага (50х80)",
        price:"16 500 руб"
    },
    {
        img:"img/3.jpg",
        alt:"3",
        author:"Франсуа Дюпон",
        name:"Процедура",
        material:"Цветная литография (40х60)",
        price:"20 000 руб"
    },
    {
        img:"img/4.jpg",
        alt:"4",
        author:"Луи Детуш",
        name:"Роза",
        material:"Бумага, акрил (50х80)",
        price:"12 000 руб"
    },
    {
        img:"img/5.jpg",
        alt:"5",
        author:"Франсуа Дюпон",
        name:"Птичья трапеза",
        material:"Цветная литография (40х60)",
        price:"22 500 руб"
    },
    {
        img:"img/6.jpg",
        alt:"6",
        author:"Пьер Моранж",
        name:"Пейзаж с рыбой",
        material:"Цветная литография (40х60)",
        price:"20 000 руб"
    },
];
let germany = [
    {
        img:"img/7.jpg",
        alt:"7",
        author:"Курт Вернер",
        name:"Над городом",
        material:"Цветная литография (40х60)",
        price:"16 000 руб"
    },
    {
        img:"img/8.jpg",
        alt:"8",
        author:"Макс Рихтер",
        name:"Птенцы",
        material:"Холст, масло (50х80)",
        price:"14 500 руб"
    },
    {
        img:"img/9.jpg",
        alt:"9",
        author:"Мартин Майер",
        name:"Среди листьев",
        material:"Цветная литография (40х60)",
        price:"20 000 руб"
    },
    {
        img:"img/10.jpg",
        alt:"10",
        author:"Герман Беккер",
        name:"Яркая птица",
        material:"Цветная литография (40х60)",
        price:"13 000 руб"
    },
    {
        img:"img/11.jpg",
        alt:"11",
        author:"Дятлы",
        name:"Птичья трапеза",
        material:"Бумага, акрил (50х80)",
        price:"20 000 руб"
    },
    {
        img:"img/12.jpg",
        alt:"12",
        author:"Вальтер Хартманн",
        name:"Большие воды",
        material:"Бумага, акрил (50х80)",
        price:"23 000 руб"
    },
];
let england = [
    {
        img:"img/13.jpg",
        alt:"13",
        author:"Пол Смит",
        name:"Дикий зверь",
        material:"Акварель, бумага (50х80)",
        price:"19 500 руб"
    },
    {
        img:"img/14.jpg",
        alt:"14",
        author:"Джон Уайт",
        name:"Скалистый берег",
        material:"Цветная литография (40х60)",
        price:"17 500 руб"
    },
    {
        img:"img/15.jpg",
        alt:"15",
        author:"Джим Уотсон",
        name:"Река и горы",
        material:"Акварель, бумага (50х80)",
        price:"20 500 руб"
    },
    {
        img:"img/16.jpg",
        alt:"16",
        author:"Юджин Зиллион",
        name:"Белый попугай",
        material:"Цветная литография (40х60)",
        price:"15 500 руб"
    },
    {
        img:"img/17.jpg",
        alt:"17",
        author:"Эрик Гиллман",
        name:"Ночная рыба",
        material:"Бумага, акрил (50х80)",
        price:"12 500 руб"
    },
    {
        img:"img/18.jpg",
        alt:"18",
        author:"Альфред Барр",
        name:"Рыжий кот",
        material:"Цветная литография (40х60)",
        price:"21 000 руб"
    },
];

// France
let franceImg = france.map(function(item) {
    return item.img;
});
let franceAlt = france.map(function(item) {
    return item.alt;
});
let franceAuthor = france.map(function(item) {
    return item.author;
});
let franceName = france.map(function(item) {
    return item.name;
});
let franceMaterial = france.map(function(item) {
    return item.material;
});
let francePrice = france.map(function(item) {
    return item.price;
});


// Germany
let germanyImg = germany.map(function(item) {
    return item.img;
});
let germanyAlt = germany.map(function(item) {
    return item.alt;
});
let germanyAuthor = germany.map(function(item) {
    return item.author;
});
let germanyName = germany.map(function(item) {
    return item.name;
});
let germanyMaterial = germany.map(function(item) {
    return item.material;
});
let germanyPrice = germany.map(function(item) {
    return item.price;
});

// England
let englandImg = england.map(function(item) {
    return item.img;
});
let englandAlt = england.map(function(item) {
    return item.alt;
});
let englandAuthor = england.map(function(item) {
    return item.author;
});
let englandName = england.map(function(item) {
    return item.name;
});
let englandMaterial = england.map(function(item) {
    return item.material;
});
let englandPrice = england.map(function(item) {
    return item.price;
});


let tabFrance = document.getElementById('content-1');
let tabGermany = document.getElementById('content-2');
let tabEngland = document.getElementById('content-3');

let card = document.querySelector(".shop-item");

for (let i = 0; i < france.length; i++) {
    
    let clone = card.cloneNode(true);

    clone.children[0].src = franceImg[i];
    clone.children[0].alt = franceAlt[i];
    clone.children[1].textContent = franceAuthor[i];
    clone.children[2].textContent = franceName[i];
    clone.children[3].textContent = franceMaterial[i];
    clone.children[4].textContent = francePrice[i];

    tabFrance.appendChild(clone);

};

for (let i = 0; i < germany.length; i++) {
    
    let clone = card.cloneNode(true);

    clone.children[0].src = germanyImg[i];
    clone.children[0].alt = germanyAlt[i];
    clone.children[1].textContent = germanyAuthor[i];
    clone.children[2].textContent = germanyName[i];
    clone.children[3].textContent = germanyMaterial[i];
    clone.children[4].textContent = germanyPrice[i];

    tabGermany.appendChild(clone);

};

for (let i = 0; i < england.length; i++) {
    
    let clone = card.cloneNode(true);

    clone.children[0].src = englandImg[i];
    clone.children[0].alt = englandAlt[i];
    clone.children[1].textContent = englandAuthor[i];
    clone.children[2].textContent = englandName[i];
    clone.children[3].textContent = englandMaterial[i];
    clone.children[4].textContent = englandPrice[i];

    tabEngland.appendChild(clone);

};