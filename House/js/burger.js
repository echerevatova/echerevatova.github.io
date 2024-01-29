document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.menu-items').classList.toggle('open');
})


let nav = document.querySelectorAll('.nav');
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function(){
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.menu-items').classList.remove('open');
    })
}
