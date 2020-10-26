$(document).ready(function() {

    let vp_height = $(window).height();
    if (vp_height > 650) {
        $('.cover-container').css('height', vp_height);
    }

    $("#hamburger-nav-button, .nav-link").click(function() {
        $(".menu").slideToggle("slow");
    });

    $('#hamburger-nav-button').click(function() {
        $(this).fadeOut(500);
        $('#overlay-menu').fadeIn(500);;
        //gsap.fromTo("#overlay-menu", {opacity: 0}, {duration: 1.5, opacity: 1});
    });

    $('#overlay-close-button, #fullscreen-menu .nav-link').click(function() {
        $('#overlay-menu').fadeOut(500);
        $('#hamburger-nav-button').fadeIn(500);
    });

});


//init barba
barba.init({

});