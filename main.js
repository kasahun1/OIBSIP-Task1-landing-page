// faqs
let faqs = [...document.querySelectorAll('.faq')];
faqs.map(faq => {
    let ques = faq.querySelector(".question-box");

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})
// scroll up
const scrollToTop = document.querySelector(".button-up");
scrollToTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
})

// navToggler
let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector(".links-container");

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('active');
    linksContainer.classList.toggle("active");
})