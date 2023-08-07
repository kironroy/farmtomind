'use strict';

const goToTopButton = document.getElementById('topBtn');

const scrollFunction = () =>
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (goToTopButton.style.display = 'block')
    : (goToTopButton.style.display = 'none');

function topFunction() {
  const scrollTop = (document.body.scrollTop = 0);
  const scrollElemTop = (document.documentElement.scrollTop = 0);
}

topFunction();
window.onscroll = () => scrollFunction();
