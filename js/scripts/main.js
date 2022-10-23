var slide_thumbnail = new Swiper(".slide-thumbnail", {
  // Mostrar 05 slides
  slidesPerView: 5,
  // Deixar na vertical
  direction: 'vertical',
  // Espaçamento entrar os icones
  spaceBetween: 20,
  // Assistindo a alteração do outro slide
  watchSlidesProgress: true
});

var slide_hero = new Swiper(".slide-principal", {
  effect: 'fade',
  // Passar um opção no objeto thumbs
  thumbs: {
    swiper: slide_thumbnail,
  },
  // Deixar automatico
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});

// Quando clicar nos outros mudar
const allFilters = document.querySelectorAll('.js-nav-games li a')
const tabPane = document.querySelector('.tab-pane-games');

// Evento de clique
allFilters.forEach((filter, index) => {
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active');
    })

    tabPane.forEach(tab => {
      tab.classList.remove('active');
    })

    tabPane[index].classList.add('acive')
    filter.classList.add('active')
  })
})