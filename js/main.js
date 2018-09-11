const toggle = document.querySelector('.nav-toggle');

function toggleClass() {
  const navigation = document.querySelector('.main-nav');

  navigation.classList.toggle('is-open');
}

toggle.addEventListener('click', toggleClass);