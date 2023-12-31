//sticky navbar
const nav = document.querySelector('nav');
let navTop = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add('fixed');
    }
    else {
        nav.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixedNav);


//go to top button
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

//go to about
function toAbout() {
    let about = document.getElementById('about');
    about.scrollIntoView({
        behavior: 'smooth',
    });

}