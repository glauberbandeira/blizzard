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

// Open modal
const btnOpenModal = document.querySelector('.js-open-modal');
// Fechar modal
const btnFecharMOdal = document.querySelector('.js-close')

// event click para abrir modal
btnOpenModal.addEventListener('click', (event) => {
  event.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.add('show-modal');
})

// event click para fechar modal
btnFecharMOdal.addEventListener('click', () => {
  let tagHtml = document.documentElement;
  tagHtml.classList.remove('show-modal');
})

// Menu dropdown
const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    // negar o evento de a
    event.preventDefault();

    menuSite.forEach(itemMenu => {
      itemMenu.classList.remove('active')
      // retirar o mouse, feche o menu
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active')
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active')
        })
      })
    })

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active')
    })

    btn.classList.add('active');
    menuSite[index].classList.add('active');
  })


})