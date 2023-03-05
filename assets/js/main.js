/*=============== RESPONSIVE HEADER MENU ===============*/
const openMenuBtn = document.getElementById("openMenuBtn")
const closeMenuBtn = document.getElementById("closeMenuBtn")
const navMenu = document.getElementById("navMenu")

openMenuBtn.addEventListener("click", () => {
    openMenuBtn.classList.remove("active")
    closeMenuBtn.classList.add("active")
    navMenu.classList.add("active")
})
closeMenuBtn.addEventListener("click", () => {
    closeMenuBtn.classList.remove("active")
    openMenuBtn.classList.add("active")
    navMenu.classList.remove("active")
})


/*=============== SPLIDEJS PROJECTS ===============*/
new Splide('#projects-splide', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    gap: "-200px",
    pagination: false,
    arrows: false,
    padding: { bottom: 80 },
    breakpoints: {
        890: {
            perPage: 1,
            gap: "-400px",
        },
        750: {
            gap: "-300px"
        },
        650: {
            gap: "-200px"
        },
        550: {
            gap: "-100px"
        },
        450: {
            gap: "-50px"
        },
        400: {
            gap: "-25px"
        },
        370: {
            gap: "-10px"
        },
        360: {
            gap: "-5px"
        },
        348: {
            gap: "0px"
        },

    },
    autoScroll: {
        speed: 0,
    }
}).mount(window.splide.Extensions);

/*=============== SPLIDEJS TESTIMONIAL ===============*/
new Splide('#testimonials-splide', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
}).mount();

/*=============== EMAIL JS ===============*/



/* =============== SHOW ACTIVE SECTION ON NAV ============ */

const sections = document.querySelectorAll('section')

const activeScroll = () => {
    const scrollY = (window.pageYOffset)

    sections.forEach(section => {
        const sectionStart = section.offsetTop,
            sectionHeight = (section.offsetHeight),
            sectionEnd = sectionStart + sectionHeight,
            sectionId = section.getAttribute("id")

        const aTagsAll = document.querySelectorAll(".nav__menu__item-link")

        aTagsAll.forEach(a => {
            if (scrollY >= sectionStart - 64 && scrollY < sectionEnd - 64) {
                if (a.getAttribute("id").toString().split("-")[0] == sectionId) {
                    a.classList.add("active-section")
                } else {
                    a.classList.remove("active-section")
                }
            }
        })
    })

}

window.addEventListener("scroll", activeScroll)

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
/* header animation */
ScrollReveal().reveal('header', {
    delay: 600,
    origin: "top",
    distance: "40px"
})

/* utils animations */
ScrollReveal().reveal('.section__title', {
    delay: 500,
    origin: "top",
    distance: "20px"
})
ScrollReveal().reveal('.section__subtitle', {
    delay: 700,
    origin: "bottom",
    distance: "20px"
})


/* hero animations */
ScrollReveal().reveal('.hero__wrapper-left', {
    delay: 400,
    origin: "bottom",
    distance: "20px"
})
ScrollReveal().reveal('.hero__wrapper-middle', {
    delay: 500,
    origin: "top",
    distance: "20px"
})
ScrollReveal().reveal('.hero__wrapper-right', {
    delay: 300,
    origin: "bottom",
    distance: "20px"
})
ScrollReveal().reveal('.hero__wrapper-social', {
    delay: 700,
    origin: "bottom",
    distance: "20px"
})

/* skills animations */
ScrollReveal().reveal('.skills__container:nth-of-type(1)', {
    delay: 500,
    origin: "left",
    distance: "20px"
})
ScrollReveal().reveal('.skills__container:nth-of-type(2)', {
    delay: 500,
    origin: "right",
    distance: "20px"
})

/* qualifications animations */

ScrollReveal().reveal('.qualification:nth-of-type(1)', {
    delay: 500,
    origin: "left",
    distance: "20px"
})
ScrollReveal().reveal('.qualification:nth-of-type(2)', {
    delay: 500,
    origin: "right",
    distance: "20px"
})

/* services animations*/
ScrollReveal().reveal('.service__wrapper', {
    delay: 500,
    origin: "bottom",
    distance: "20px",
    interval: 150
})
/* projects and testimonials animations */
ScrollReveal().reveal('.splide', {
    delay: 500,
})

/* contact animations */

ScrollReveal().reveal('.contact__data', {
    delay: 500,
    origin: "left",
    distance: "20px"
})
ScrollReveal().reveal('.contact__email', {
    delay: 550,
    origin: "right",
    distance: "20px"
})

/* footer animation */

ScrollReveal().reveal('.footer', {
    delay: 500,
})