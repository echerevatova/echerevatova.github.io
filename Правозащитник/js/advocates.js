let advocatesCard = [
    {
        name: "Миронов Александр Германович",
        post: "Кредитный адвокат, банковский юрист",
        experience: "10 лет юридической практики",
        photo: "img/Alex.png",
        alt: "Alex",
    },
    {
        name: "Шестакова Елизавета Егоровна",
        post: "Юридический консультант",
        experience: "8 лет юридической практики",
        photo: "img/Lizzy.jpg",
        alt: "Lizzy",
    },
    {
        name: "Архипов Максим Константинович",
        post: "Корпоративный юрист",
        experience: "11 лет юридической практики",
        photo: "img/Max.png",
        alt: "Max",
    }
  ];


let names = advocatesCard.map(function(item) {
    return item.name;
});

let posts = advocatesCard.map(function(item) {
    return item.post;
});

let experiences = advocatesCard.map(function(item) {
    return item.experience;
});

let photos = advocatesCard.map(function(item) {
    return item.photo;
});

let alts = advocatesCard.map(function(item) {
    return item.alt;
});

let slider = document.querySelector(".advocates-slider");
let card = document.querySelector(".advocate-card");

for (let i = 0; i < advocatesCard.length; i++) {
    
    let clone = card.cloneNode(true);

    let nickname = clone.children[0].children[0];
    let job = clone.children[0].children[1];
    let seniority = clone.children[0].children[3];

    let img = clone.children[1];
    let firstName = clone.children[2];
    let firstJob = clone.children[3];

    nickname.textContent = names[i];
    job.textContent = posts[i];
    seniority.textContent = experiences[i];
    img.src = photos[i];
    img.alt = alts[i];
    firstName.textContent = nickname.textContent;
    firstJob.textContent = job.textContent;

    slider.appendChild(clone);

}
