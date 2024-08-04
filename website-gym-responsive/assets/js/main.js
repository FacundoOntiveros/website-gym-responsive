/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /*========== MENU SHOW ==========*/
      /* Validate if constant exists */
      if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
      }

      /*========== MENU HIDDEN ==========*/
      /* Validate if constant exists */
      if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
      }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
  const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu//
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 80;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            links.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

/*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp = () =>{
      const scrollUp = document.getElementById('scroll-up')
      //  When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
                    
  }
  window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay:700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'}
)