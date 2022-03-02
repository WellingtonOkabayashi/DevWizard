/*======Menu abrindo e fechando========*/
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*======clicando no menu========*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    1000: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
/*scroll review  */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})
scrollReveal.reveal(
  `#home .image, #home .text,
  #sobre .image, #sobre .text,
  #servicos .image,#servicos .text, #servicos .card,
  #comentarios header, #comentarios .comentarios,
  #contato .text, #contato .links, footer .brand, footer .social,
  footer .grid 
  `,
  { interval: 100 }
)
/* back top */
const backTopButton = document.querySelector('.back-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
})
