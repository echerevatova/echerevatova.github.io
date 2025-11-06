document.querySelector('.header__hamburger').addEventListener('click', function() {
	document.querySelector('.header').classList.toggle('animate');
});

document.querySelectorAll('.header__menu-links').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector('.header').classList.remove('animate');
  });
});