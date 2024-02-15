const stagesSlider = document.querySelector(".stages-slider");
const cardWidth = stagesSlider.querySelector(".stage").offsetWidth;
const arrow = document.querySelectorAll(".stages-button");
const stagesPagination = document.querySelectorAll(".circle");

let countCircle = 0;


if (document.documentElement.clientWidth <= 450) {
const mobileBtn = document.querySelector(".slider-btn");
mobileBtn.remove();
document.querySelector(".mobile-buttons").append(mobileBtn);

// Добавим прослушиватель событий для кнопок со стрелками для прокрутки влево и вправо и обновление нумерации
arrow.forEach(btn => {
    btn.addEventListener("click", () => {
        stagesSlider.scrollLeft += btn.id == "left" ? -cardWidth : cardWidth;
        if (btn.id == "left") {
            stagesPagination[countCircle].classList.remove("active");
            stagesPagination[countCircle - 1].classList.add("active");
            countCircle =  countCircle - 1;
        } else {
            stagesPagination[countCircle].classList.remove("active");
            stagesPagination[countCircle + 1].classList.add("active");
            countCircle =  countCircle + 1;
        }
    });
});

const disableBtn = () => {
    // Если карусель находится в начале, сделаем кнопку влево неактивной
    if(stagesSlider.scrollLeft === 0) {
        arrow[0].classList.add("disable");
        arrow[0].setAttribute("disabled", "");
    } 
    else {
        arrow[0].classList.remove("disable");
        arrow[0].removeAttribute("disabled");
    };
    
    // Если карусель находится в конце, сделаем кнопку вправо неактивной
    if(stagesSlider.scrollLeft === (stagesSlider.scrollWidth - cardWidth)) {
        arrow[1].classList.add("disable");
        arrow[1].setAttribute("disabled", "");
    } else {
        arrow[1].classList.remove("disable");
        arrow[1].removeAttribute("disabled");
    }
};

stagesSlider.addEventListener("scroll", disableBtn);


}