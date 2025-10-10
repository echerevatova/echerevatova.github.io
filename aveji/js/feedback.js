let feedbackItems = [
    {
        title: "Ольга Иванова",
        text: "После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!"
    },
    {
        title: "Аркадий Макаров",
        text: "Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!"
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const feedback = document.querySelector('.feedback__comments');
    
    feedbackItems.forEach(feed => {
        feedback.innerHTML += `
            <div class="feedback__comments-item">
                <img src="img/icon.svg" alt="кавычки">
                <h4>${feed.title}</h4>
                <p>${feed.text}</p>
            </div>
        `;
    });
});