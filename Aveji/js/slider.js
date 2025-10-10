let sliderItems = [
    {
        image: "img/slider-2.png", 
        title: "Диван угловой",
    },
    {
        image: "img/slider-3.png", 
        title: "Кухонный гарнитур",
    },
    {
        image: "img/slider-4.png",
        title: "Шкаф-купе",
    },
    {
        image: "img/slider-5.png",
        title: "Комод в прихожую",
    },
    {
        image: "img/slider-6.png",
        title: "Журнальный столик",
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.projects__slider');
    
    sliderItems.forEach(slide => {
        slider.innerHTML += `
            <div class="projects__slider-item">
                <img src="${slide.image}" alt="ИЗОБРАЖЕНИЕ">
                <a href="#" class="projects__link">
                    <span>${slide.title}</span>
                    <span class="icon">↗</span>
                </a>
            </div>
        `;
    });
});