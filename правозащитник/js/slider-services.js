const servicesSlider = document.querySelector('.list-services');

let pushed = false;
let start = 0;

servicesSlider.addEventListener('mousedown', function (e) {
    pushed = true;
    start = e.clientX;
});

servicesSlider.addEventListener('mouseleave', function (e) {
    pushed = false;
});

window.addEventListener('mouseup', function (e) {
    pushed = false;
});

servicesSlider.addEventListener('mousemove', function (e) {
  if(!pushed) {
    return;
  }

  this.scrollLeft += start - e.clientX;
});