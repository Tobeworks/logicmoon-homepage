import anime from 'animejs';
import ScrollReveal from 'scrollreveal';
import './scss/style.scss'
//import Shuffle from 'shufflejs';
import * as bootstrap from 'bootstrap';

const initHome = () => {

    // const shuffleInstance = new Shuffle(document.getElementById('discogrid'), {
    //     itemSelector: '.grid-item',
    //     sizer: '.js-shuffle-sizer',
    // });


    ScrollReveal().reveal('h2', { duration: 1500 });
    ScrollReveal().reveal('section', { duration: 500 });
    ScrollReveal().reveal('.grid-item', { interval: 16, reset: true, duration: 500 });
    /** Main Cover */
    anime({
        targets: '#topnavi',
        translateY: 100,
        delay: 1200,
        duration: 450
    });
    anime({
        targets: '#subheadline',
        opacity: [0, 1],
        delay: 1200,
        duration: 450
    });

    fullscreenNav();
    //bsModals();
}

export { initHome };


const fullscreenNav = () => {

    document.querySelector('#hamburger-nav-button').addEventListener("click", e => {

       e.preventDefault();

        const animation = anime({
            targets: '#overlay-menu',
            delay: 0,
            opacity: [0, 1],
            translateX: [850, 0],
            duration: 500,
            endDelay: 0,
            loop: false,
            autoplay: false,
            easing: 'linear'

        });
        animation.play();

        anime({
            targets: '#fullscreen-menu a',
            opacity: [0, 1],
            delay: anime.stagger(100)
        });

    });


   const backAnimation = e => {
        // e.preventDefault();
        const animation = anime({
            targets: '#overlay-menu',
            delay: 500,
            opacity: [1, 0],
            translateX: [0, 850],
            duration: 500,
            endDelay: 0,
            loop: false,
            autoplay: false,
            easing: 'linear'
        });
        animation.play();

        anime({
            targets: '#fullscreen-menu a',
            opacity: [1, 0],
            delay: anime.stagger(100, { direction: 'reverse' })
        });
    }

    const overlayMenuClose = document.getElementsByClassName('overlayMenuClose');

    for (var i = 0; i < overlayMenuClose.length; i++) {
        overlayMenuClose[i].addEventListener('click', backAnimation, false);
    }
    
}
