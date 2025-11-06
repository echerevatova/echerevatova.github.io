class Slider {
    constructor() {
        this.slider = document.querySelector('.main__slider');
        this.prevBtn = document.querySelector('.main__btn-prev');
        this.nextBtn = document.querySelector('.main__btn-next');
        this.currentSlide = 0;
        
        // Все данные слайдов
        this.allSlidesData = [
            {
                title: "Декоративная<br> фактура Pixel",
                text: "Панели INTERPAN Econom PIXEL —<br>уникальный инновационный листовой<br>материал из чистейшего натурального гипса.",
                image: "img/main-slide-1.png"
            },
            {
                title: "Коллекция<br> LOFT",
                text: "Панели INTERPAN Econom Loft —<br>в самой популярной и классической<br>для лофта палитре",
                image: "img/main-slide-2.png"
            },
            {
                title: "Экологичные<br> материалы",
                text: "Только натуральные компоненты<br>и экологически чистые<br>производственные процессы.",
                image: "img/main-slide-1.png"
            },
            {
                title: "Слайд 4",
                text: "Описание четвертого слайда",
                image: "img/main-slide-1.png"
            },
            {
                title: "Слайд 5", 
                text: "Описание пятого слайда",
                image: "img/main-slide-1.png"
            }
        ];
        
        // Текущие индексы загруженных слайдов
        this.loadedSlideIndexes = [0, 1, 2];
        this.slideElements = [];
        this.isAnimating = false;
        
        this.init();
        this.bindEvents();
    }
    
    init() {
        this.createInitialSlides();
        this.updateSlider();
    }
    
    createInitialSlides() {
        this.slider.innerHTML = '';
        this.slideElements = [];
        
        this.loadedSlideIndexes.forEach(slideIndex => {
            this.createSlideElement(slideIndex);
        });
    }
    
    createSlideElement(slideIndex) {
        const slideData = this.allSlidesData[slideIndex];
        const slide = document.createElement('div');
        slide.className = 'main__slide';
        slide.innerHTML = `
            <h1>${slideData.title}</h1>
            <p>${slideData.text}</p>
            <img src="${slideData.image}" alt="Слайд ${slideIndex + 1}">
        `;
        this.slider.appendChild(slide);
        this.slideElements.push(slide);
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
    
    prev() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        if (this.currentSlide === 0) {
            // Специальная логика для перехода влево с первого слайда
            this.prepareLeftShift();
        } else {
            this.currentSlide--;
            this.updateSlider();
            setTimeout(() => { this.isAnimating = false; }, 500);
        }
    }
    
    next() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        if (this.currentSlide === this.loadedSlideIndexes.length - 1) {
            // Специальная логика для перехода вправо с последнего слайда
            this.prepareRightShift();
        } else {
            this.currentSlide++;
            this.updateSlider();
            setTimeout(() => { this.isAnimating = false; }, 500);
        }
    }
    
    prepareLeftShift() {
        // Временно отключаем анимацию для смены слайдов
        this.slider.style.transition = 'none';
        
        // Добавляем новый слайд в начало
        const currentFirstIndex = this.loadedSlideIndexes[0];
        let newIndex = currentFirstIndex - 1;
        if (newIndex < 0) newIndex = this.allSlidesData.length - 1;
        
        this.loadedSlideIndexes.unshift(newIndex);
        this.createAndInsertSlide(newIndex, 0);
        
        // Сдвигаем все слайды на одну позицию вправо
        this.currentSlide = 1;
        this.slider.style.transform = `translateX(-100%)`;
        
        // Включаем анимацию обратно и делаем переход
        setTimeout(() => {
            this.slider.style.transition = 'transform 0.5s ease-in-out';
            this.currentSlide = 0;
            this.updateSlider();
            
            // Удаляем последний слайд
            this.removeLastSlide();
            
            setTimeout(() => { this.isAnimating = false; }, 500);
        }, 50);
    }
    
    prepareRightShift() {
        // Временно отключаем анимацию
        this.slider.style.transition = 'none';
        
        // Добавляем новый слайд в конец
        const currentLastIndex = this.loadedSlideIndexes[this.loadedSlideIndexes.length - 1];
        let newIndex = currentLastIndex + 1;
        if (newIndex >= this.allSlidesData.length) newIndex = 0;
        
        this.loadedSlideIndexes.push(newIndex);
        this.createAndInsertSlide(newIndex, -1);
        
        // Включаем анимацию и делаем переход
        setTimeout(() => {
            this.slider.style.transition = 'transform 0.5s ease-in-out';
            this.currentSlide++;
            this.updateSlider();
            
            // Удаляем первый слайд
            setTimeout(() => {
                this.removeFirstSlide();
                this.currentSlide--;
                this.updateSliderImmediately(); // Без анимации
                setTimeout(() => { this.isAnimating = false; }, 50);
            }, 500);
        }, 50);
    }
    
    createAndInsertSlide(slideIndex, position) {
        const slideData = this.allSlidesData[slideIndex];
        const slide = document.createElement('div');
        slide.className = 'main__slide';
        slide.innerHTML = `
            <h1>${slideData.title}</h1>
            <p>${slideData.text}</p>
            <img src="${slideData.image}" alt="Слайд ${slideIndex + 1}">
        `;
        
        if (position === 0) {
            this.slider.insertBefore(slide, this.slider.firstChild);
            this.slideElements.unshift(slide);
        } else {
            this.slider.appendChild(slide);
            this.slideElements.push(slide);
        }
    }
    
    removeLastSlide() {
        const lastSlide = this.slideElements.pop();
        lastSlide.remove();
        this.loadedSlideIndexes.pop();
    }
    
    removeFirstSlide() {
        const firstSlide = this.slideElements.shift();
        firstSlide.remove();
        this.loadedSlideIndexes.shift();
    }
    
    updateSlider() {
        const translateX = -this.currentSlide * 100;
        this.slider.style.transform = `translateX(${translateX}%)`;
    }
    
    updateSliderImmediately() {
        this.slider.style.transition = 'none';
        const translateX = -this.currentSlide * 100;
        this.slider.style.transform = `translateX(${translateX}%)`;
        
        setTimeout(() => {
            this.slider.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider();
});