
document.addEventListener('DOMContentLoaded', function() {
    // Массив с данными всех карточек
    const cardsData = [
        {
            id: 'board',
            title: 'Отбойная доска',
            description: 'Отбойная доска предназначена для защиты стен от механических повреждений в местах с интенсивным движением. Изготавливается из высокопрочных материалов, устойчивых к ударам и истиранию. Идеальное решение для общественных помещений, коридоров, производственных зон.'
        },
        {
            id: 'slab',
            title: 'Плита без покрытия', 
            description: 'Базовая плита без декоративного покрытия используется как основа для дальнейшей отделки. Обладает excellent звукоизоляционными и теплоизоляционными свойствами. Применяется в качестве черновой отделки с возможностью нанесения любого финишного покрытия.'
        },
        {
            id: 'decorative',
            title: 'Декоративный профиль для панелей',
            description: 'Декоративные профили используются для стыковки панелей и создания эстетичных соединений. Доступны в различных цветах и фактурах. Позволяют создавать бесшовные поверхности и подчеркивать дизайнерские решения.'
        },
        {
            id: 'ceiling-panels',
            title: 'Потолочные панели',
            description: 'Специализированные панели для отделки потолков. Обладают малым весом и простой установкой. Создают идеально ровную поверхность, скрывают коммуникации и обеспечивают excellent акустические характеристики помещения.'
        },
        {
            id: 'partitions',
            title: 'Офисные перегородки',
            description: 'Офисные перегородки предназначены для организации и разграничения внутреннего пространства различных частей зданий любого назначения – офисного, торгового, производственного и пр. С помощью перегородок в офисе может быть организована кабинетно-коридорная система и разделены рабочие места сотрудников.'
        },
        {
            id: 'facade',
            title: 'Фасадные и цокольные панели',
            description: 'Фасадные панели предназначены для внешней отделки зданий. Устойчивы к ультрафиолету, перепадам температур и атмосферным осадкам. Цокольные панели обеспечивают дополнительную защиту нижней части здания от влаги и механических повреждений.'
        }
    ];

    const buttons = document.querySelectorAll('.business-solutions__map .btn');
    const catalogContainer = document.querySelector('.business-solutions__catalog-container');
    const mapContainer = document.querySelector('.business-solutions__map');
    const listContainer = document.querySelector('.business-solutions__list');
    const viewButtons = document.querySelectorAll('.business-solutions__controls .business-solutions__btn');
    
    let currentCard = null;
    let currentView = 'map'; // По умолчанию показываем карту

    // Функция создания HTML карточки
    function createCardHTML(cardData) {
        return `
            <div class="business-solutions__catalog-card" data-card="${cardData.id}">
                <p class="red">${cardData.title}</p>
                <br>
                <p class="grey">${cardData.description}</p>
            </div>
        `;
    }

    // Функция показа карточки
    function showCard(cardId) {
        // Скрываем текущую карточку
        if (currentCard) {
            currentCard.remove();
        }

        // Находим данные карточки
        const cardData = cardsData.find(card => card.id === cardId);
        if (cardData) {
            // Создаем и показываем новую карточку
            const cardHTML = createCardHTML(cardData);
            catalogContainer.innerHTML = cardHTML;
            currentCard = catalogContainer.querySelector('.business-solutions__catalog-card');
        }
    }

    // Функция скрытия карточки
    function hideCard() {
        if (currentCard) {
            currentCard.remove();
            currentCard = null;
        }
        catalogContainer.innerHTML = '';
    }

    // Функция переключения между режимами просмотра
    function switchView(viewType) {
        currentView = viewType;
        
        if (viewType === 'map') {
            // Показываем карту и скрываем список
            mapContainer.style.display = 'block';
            listContainer.classList.remove('active');
            catalogContainer.style.display = 'block';
            
            // Обновляем стили кнопок
            viewButtons[0].classList.remove('disactive');
            viewButtons[1].classList.add('disactive');
            
        } else if (viewType === 'list') {
            // Показываем список и скрываем карту
            mapContainer.style.display = 'none';
            listContainer.classList.add('active');
            catalogContainer.style.display = 'none';
            
            // Скрываем активную карточку если была открыта
            hideCard();
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Обновляем стили кнопок
            viewButtons[0].classList.add('disactive');
            viewButtons[1].classList.remove('disactive');
        }
    }

    // Добавляем обработчики для кнопок на карте
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Работает только в режиме карты
            if (currentView !== 'map') return;
            
            const buttonType = this.classList[1]; // board, slab, decorative и т.д.
            
            // Если кликаем на уже активную кнопку - скрываем карточку
            if (this.classList.contains('active')) {
                hideCard();
                this.classList.remove('active');
            } else {
                // Показываем карточку и делаем кнопку активной
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                showCard(buttonType);
            }
        });
    });

    // Добавляем обработчики для кнопок переключения вида
    viewButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (index === 0) {
                // Кнопка "на схеме"
                switchView('map');
            } else {
                // Кнопка "списком"
                switchView('list');
            }
        });
    });

    // Закрытие карточки при клике вне (только в режиме карты)
    document.addEventListener('click', function(e) {
        if (currentView !== 'map') return;
        
        if (!e.target.closest('.btn') && !e.target.closest('.business-solutions__catalog-card')) {
            hideCard();
            buttons.forEach(btn => btn.classList.remove('active'));
        }
    });

    // Инициализация - показываем карту по умолчанию
    switchView('map');
});