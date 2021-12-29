import anime from "animejs";
import ScrollReveal from "scrollreveal";
import "./scss/style.scss";
import * as bootstrap from "bootstrap";






const initHome = () => {


  ScrollReveal().reveal("h2", { duration: 1800 });
  ScrollReveal().reveal("section", { duration: 700 });
  ScrollReveal().reveal(".grid-item", { duration: 500 });
  /** Main Cover */
  anime({
    targets: "#topnavi",
    translateY: 100,
    delay: 1200,
    duration: 450,
  });
  anime({
    targets: "#subheadline",
    opacity: [0, 1],
    delay: 1200,
    duration: 450,
  });

  fullscreenNav();
  submitForm();
  displayScrollto();
};

export { initHome };

const fullscreenNav = () => {
  document
    .querySelector("#hamburger-nav-button")
    .addEventListener("click", (e) => {
      e.preventDefault();

      const animation = anime({
        targets: "#overlay-menu",
        delay: 0,
        opacity: [0, 1],
        translateX: [850, 0],
        duration: 500,
        endDelay: 0,
        loop: false,
        autoplay: false,
        easing: "linear",
      });
      animation.play();

      anime({
        targets: "#fullscreen-menu a",
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    });

  const backAnimation = (e) => {
    // e.preventDefault();
    const animation = anime({
      targets: "#overlay-menu",
      delay: 500,
      opacity: [1, 0],
      translateX: [0, 850],
      duration: 500,
      endDelay: 0,
      loop: false,
      autoplay: false,
      easing: "linear",
    });
    animation.play();

    anime({
      targets: "#fullscreen-menu a",
      opacity: [1, 0],
      delay: anime.stagger(100, { direction: "reverse" }),
    });
  };

  const overlayMenuClose = document.getElementsByClassName("overlayMenuClose");

  for (var i = 0; i < overlayMenuClose.length; i++) {
    overlayMenuClose[i].addEventListener("click", backAnimation, false);
  }
};

const submitForm = () => {
  const sendData = () => {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
      // alert(event.target.responseText);
      if (event.target.responseText === "true") {
        document.getElementById("msg_success").classList.remove("d-none");
      } else {
        document.getElementById("msg_error").classList.remove("d-none");
      }
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
      // alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "./sendmail.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  };

  // Access the form element...
  const form = document.getElementById("contactform");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
};

const displayScrollto = () =>{
    const about = document.getElementById('about');
    const scrollToTop = document.getElementById('scrollToTop');


    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        if (Math.floor(scroll) > about.offsetTop){
            scrollToTop.classList.remove('hide');
        }else{
            scrollToTop.classList.add('hide');
        } 
    });

    scrollToTop.addEventListener('click',e =>{
        window.scrollTo(0, 0);
    })
}
