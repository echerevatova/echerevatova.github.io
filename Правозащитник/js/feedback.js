let feedbackCard = [
    {
        icon: "img/Stasy.png",
        altText: "Stasy",
        company: "ООО “ИТ Консалтинг”",
        nickname: "Логинова Анастасия",
        feedback: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов ...",
    },
    {
        icon: "img/Sergay.png",
        altText: "Sergay",
        company: "АО “ПРОМАРШ”",
        nickname: "Макаров Сергей",
        feedback: "Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.",
    },
    {
        icon: "img/Stasy.png",
        altText: "Stasy",
        company: "ООО “ИТ Консалтинг”",
        nickname: "Логинова Анастасия",
        feedback: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов ...",
    },
    {
        icon: "img/Sergay.png",
        altText: "Sergay",
        company: "АО “ПРОМАРШ”",
        nickname: "Макаров Сергей",
        feedback: "Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём.",
    }
  ];


let icons = feedbackCard.map(function(item) {
    return item.icon;
});

let altTexts = feedbackCard.map(function(item) {
    return item.altText;
});

let companies = feedbackCard.map(function(item) {
    return item.company;
});

let nicknames = feedbackCard.map(function(item) {
    return item.nickname;
});

let feedbacks = feedbackCard.map(function(item) {
    return item.feedback;
});

const feedSlider = document.querySelector(".feedback-slider");
const feedCard = document.querySelector(".feedback-card");

const cardWidth = (feedSlider.querySelector(".feedback-card").offsetWidth + (feedSlider.offsetWidth / 100 * 4));
const arrowBtns = document.querySelectorAll(".arrow-btn");



for (let i = 0; i < feedbackCard.length; i++) {
    
    let feedClone = feedCard.cloneNode(true);

    let nickname = feedClone.children[1].children[1];
    let company = feedClone.children[1].children[0];

    let img = feedClone.children[0];
    let feedback = feedClone.children[3];

    nickname.textContent = nicknames[i];
    company.textContent = companies[i];
    feedback.textContent = feedbacks[i];
    img.src = icons[i];
    img.alt = altTexts[i];

    feedSlider.appendChild(feedClone);
}

// скролл при клике
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        feedSlider.scrollLeft += btn.id == "left" ? -(cardWidth) : (cardWidth);
    });
});


// скролл
    let dragg = false;
    let beginning = 0;
    
    feedSlider.addEventListener('mousedown', function (e) {
        dragg = true;
        beginning = e.clientX;
    });
    
    feedSlider.addEventListener('mouseleave', function (e) {
        dragg = false;
    });
    
    window.addEventListener('mouseup', function (e) {
        dragg = false;
    });
    
    feedSlider.addEventListener('mousemove', function (e) {
      if(!dragg) {
        return;
      }
    
      this.scrollLeft += beginning - e.clientX;
    });