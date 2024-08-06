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
sr.reveal(`.program__card, .plan__card`, {interval: 100})
sr.reveal(`.classes__img`, {origin: 'left'})
sr.reveal(`.classes__content`, {origin: 'right'}
)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header//
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
                      }
   window.addEventListener('scroll', scrollHeader)

   /*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const serviceID = 'service_9jftxyq'

contactMessage  = document.getElementById('contact-message'),
contactUsername = document.getElementById('from_name'),
contactEmail = document.getElementById('email_id'),
contactMsg = document.getElementById('message')

const sendEmail = (e) =>{
e.preventDefault()

// Check if the field has a value
if (contactEmail.value === ''){
// Add and remove color
contactMessage.classList.remove('color-green')
contactMessage.classList.add('color-red')

// Show message
contactMessage.textContent = 'Por favor ingresa tu Email 👆'

//Remove message three seconds
setTimeout(() =>{
contactMessage.textContent = ''
}, 4000)
}else{
emailjs.init(serviceID)
// serviceID - templateID - #form - publickey
emailjs.sendForm(serviceID,'template_11zcfug','#contact-form','Ni7vDY3USNEd-Bmh9')
.then(() =>{
  // Show message and add color
  contactMessage.classList.add('color-green')
  contactMessage.textContent  = 'Se envió correctamente ✔️'
  
  // Remove message after three seconds
  setTimeout(() =>{
      contactMessage.textContent  = ''
  }, 4000)
}, (error) =>{
  //Mail sending error
  alert('UPS! ALGO HA FALLADO...', error)
})

// To clear the input field
contactEmail.value = ''
contactUsername.value = ''
contactMsg.value = ''
}
}

contactForm.addEventListener('submit', sendEmail)