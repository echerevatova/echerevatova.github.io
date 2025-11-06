class CasesSlider {
    constructor() {
        this.sliderContainer = document.querySelector('.cases__slider-container');
        this.linksContainer = document.querySelector('.cases__links');
        this.prevBtn = document.querySelector('.cases__btn-prev');
        this.nextBtn = document.querySelector('.cases__btn-next');
        this.modeButtons = document.querySelectorAll('.cases__slider-switch .cases__btn');
        
        // Данные для продукции
        this.productsData = {
            links: [
                "Панели эконом — Pixel",
                "Панели окрашенные — Econom",
                "Панели эконом — Econom Loft",
                "Панели Practic — HPL пластик",
                "Панели с натуральным шпоном — Elite",
                "Панели с ПВХ пленкой — InTerior",
                "Декоративный профиль для панелей",
                "Отбойная доска — Design",
                "Потолочные панели — INTERPAN Mercury",
                "Фасадные и цокольные панели",
                "Панели антибактериальные — Farma",
                "Плита без покрытия"
            ],
            images: [
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
            ]
        };
        
        // Данные для клиентов
        this.clientsData = {
            links: [
                "Супермаркеты \"ДА\"",
                "X5 Retail group",
                "Сеть магазинов \"Пятерочка\"",
                "Газпром",
                "Сеть магазинов \"Дикси\"",
                "Сеть ресторанов \"KFC\"",
                "Ресторан \"Ваби Саби\"",
                "ТЦ \"Экоферма\"",
                "ЖК \"Невский парк\"",
                "Олимпийский объект Сочи",
                "Аэропорт Симферополя",
                "Сеть медицинских клиник \"Будь здоров\""
            ],
            images: [
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
                "img/img-case.png", "img/img-case.png", "img/img-case.png", "img/img-case.png",
            ]
        };
        
        this.currentMode = 'products';
        this.currentLinkIndex = 0;
        this.currentData = this.productsData;
        this.links = [];
        this.isAnimating = false;
        
        this.init();
        this.bindEvents();
    }
    
    init() {
        this.createLinks();
        this.updateImages();
        this.updateActiveLink();
    }
    
    createLinks() {
        const modeSwitch = this.linksContainer.querySelector('.cases__slider-switch');
        const allLinks = this.linksContainer.querySelectorAll('a');
        allLinks.forEach(link => link.remove());
        
        this.links = [];
        
        // Создаем новые ссылки
        this.currentData.links.forEach((linkText, index) => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = linkText;
            link.dataset.index = index;
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToLink(index);
            });
            
            this.linksContainer.appendChild(link);
            this.links.push(link);
        });
        
        this.updateActiveLink();
    }
    
    updateImages() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        // 1. Анимация исчезновения
        this.sliderContainer.classList.add('fade-out');
        
        setTimeout(() => {
            // 2. Меняем контент
            this.sliderContainer.innerHTML = '';
            
            const startIndex = this.currentLinkIndex * 4;
            const images = this.currentData.images.slice(startIndex, startIndex + 4);
            
            images.forEach((imageSrc, index) => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = `Кейс ${this.currentLinkIndex + 1} - ${index + 1}`;
                this.sliderContainer.appendChild(img);
            });
            
            // 3. Анимация появления
            this.sliderContainer.classList.remove('fade-out');
            this.sliderContainer.classList.add('fade-in');
            
            setTimeout(() => {
                this.sliderContainer.classList.remove('fade-in');
                this.isAnimating = false;
            }, 600);
            
        }, 300); // Ждем завершения анимации исчезновения
    }
    
    updateActiveLink() {
        this.links.forEach(link => {
            link.classList.remove('active');
        });
        
        if (this.links[this.currentLinkIndex]) {
            this.links[this.currentLinkIndex].classList.add('active');
        }
    }
    
    goToLink(index) {
        if (this.isAnimating) return;
        
        this.currentLinkIndex = index;
        this.updateImages();
        this.updateActiveLink();
    }
    
    prev() {
        if (this.isAnimating) return;
        
        this.currentLinkIndex--;
        if (this.currentLinkIndex < 0) {
            this.currentLinkIndex = this.currentData.links.length - 1;
        }
        this.updateImages();
        this.updateActiveLink();
    }
    
    next() {
        if (this.isAnimating) return;
        
        this.currentLinkIndex++;
        if (this.currentLinkIndex >= this.currentData.links.length) {
            this.currentLinkIndex = 0;
        }
        this.updateImages();
        this.updateActiveLink();
    }
    
    switchMode(mode) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentMode = mode;
        this.currentData = mode === 'products' ? this.productsData : this.clientsData;
        this.currentLinkIndex = 0;
        
        // Обновляем кнопки режима
        this.modeButtons.forEach(btn => {
            if (mode === 'products' && btn.textContent === 'продукция') {
                btn.classList.remove('disactive');
            } else if (mode === 'clients' && btn.textContent === 'клиенты') {
                btn.classList.remove('disactive');
            } else {
                btn.classList.add('disactive');
            }
        });
        
        // Для смены режима делаем полную перезагрузку
        this.createLinks();
        
        // Анимируем смену картинок
        this.sliderContainer.classList.add('fade-out');
        
        setTimeout(() => {
            this.sliderContainer.innerHTML = '';
            
            const startIndex = this.currentLinkIndex * 4;
            const images = this.currentData.images.slice(startIndex, startIndex + 4);
            
            images.forEach((imageSrc, index) => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = `Кейс ${this.currentLinkIndex + 1} - ${index + 1}`;
                this.sliderContainer.appendChild(img);
            });
            
            this.sliderContainer.classList.remove('fade-out');
            this.sliderContainer.classList.add('fade-in');
            
            setTimeout(() => {
                this.sliderContainer.classList.remove('fade-in');
                this.isAnimating = false;
            }, 600);
            
        }, 300);
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Обработчики для кнопок режима
        this.modeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.textContent === 'продукция') {
                    this.switchMode('products');
                } else if (btn.textContent === 'клиенты') {
                    this.switchMode('clients');
                }
            });
        });
        
        // Поддержка клавиатуры
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const casesSlider = new CasesSlider();
});