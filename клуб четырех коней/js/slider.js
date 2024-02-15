const participants = document.querySelector(".participants");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".slide-button");
const carouselChildrens = [...carousel.children];
let newCurPage = 1;
let countPages = 6;
let newPagination = newCurPage + ' / ' + countPages;
let divPagination = document.querySelector(".pagination");
divPagination.textContent = newPagination;

let isAutoPlay = true, timeoutId, timeoutPagination;

// Получаем количество карточек, которое может поместиться в карусели сразу
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Вставим копии последних нескольких карточек в начало карусели для бесконечной прокрутки
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Вставим копии первых нескольких карточек в конец карусели для бесконечной прокрутки
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Прокрутим карусель, чтобы скрыть первые дубликаты карточек
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Добавим прослушиватель событий для кнопок со стрелками для прокрутки влево и вправо и обновление нумерации
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "prev-slide" ? -firstCardWidth : firstCardWidth;
        if (btn.id == "prev-slide") {
                newCurPage = newCurPage - 1;
                if (newCurPage == 0) {
                    newCurPage = countPages;                
                };            
                newPagination = newCurPage + ' / ' + countPages;
                divPagination.textContent = newPagination;
            } else {
                newCurPage = newCurPage + 1;
                if (newCurPage == 7) {
                    newCurPage = 1;
                };              
                newPagination = newCurPage + ' / ' + countPages;
                divPagination.textContent = newPagination;           
            };
    });
});

const infiniteScroll = () => {
    // Если карусель находится в начале, прокрутим до конца
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // Если карусель находится в конце, прокрутим до начала
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Снимем существующий тайм-аут и запустим автозапуск, если мышь не наведена на карусель
    clearTimeout(timeoutId);
    if(!participants.matches(":hover")) autoPlay();
    clearTimeout(timeoutPagination);
    if(!participants.matches(":hover")) autoPlayPagination();
}


const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return если окно меньше 800 или isAutoPlay имеет значение false
    // Автоматическое воспроизведение карусели через каждые 4000 мс
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 4000);
}
autoPlay();

const autoPlayPagination = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return если окно меньше 800 или isAutoPlay имеет значение false
    // Автоматическое воспроизведение карусели через каждые 4000 мс
    timeoutPagination = setTimeout(() => {
            newCurPage = newCurPage + 1;
            if (newCurPage == 7) {
                newCurPage = 1;
            };              
            newPagination = newCurPage + ' / ' + countPages;
            divPagination.textContent = newPagination;
      }, 4000)
}
autoPlayPagination();


carousel.addEventListener("scroll", infiniteScroll);
participants.addEventListener("mouseenter", () => clearTimeout(timeoutId));
participants.addEventListener("mouseenter", () => clearTimeout(timeoutPagination));
participants.addEventListener("mouseleave", autoPlay);
participants.addEventListener("mouseleave", autoPlayPagination);