const toggle = document.querySelector('.nav-toggle');

function toggleClass() {
  const navigation = document.querySelector('.main-nav');
  const hamburger = document.querySelector('.hamburger');

  navigation.classList.toggle('is-open');
  hamburger.classList.toggle('is-open');
}

toggle.addEventListener('click', toggleClass);