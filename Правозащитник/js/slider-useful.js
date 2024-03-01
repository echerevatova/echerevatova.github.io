var usSlider = document.querySelector('.useful-slider');

var push = false;
var go = 0;

usSlider.addEventListener('mousedown', function (e) {
    push = true;
    go = e.clientX;
});

usSlider.addEventListener('mouseleave', function (e) {
    push = false;
});

window.addEventListener('mouseup', function (e) {
    push = false;
});

usSlider.addEventListener('mousemove', function (e) {
  if(!push) {
    return;
  }

  this.scrollLeft += go - e.clientX;
});