$(function() {

    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });


    let vp_height = $(window).height();
    if (vp_height > 500) {
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

    $('#contact-form').submit(function() {

        $.post("sendmail.php", $(this).serialize(), function(data) {
            if (data == 'true') {
                $('#mail-alert').html('Your Mail was succesfully sent').fadeIn(500);
            } else {
                $('#mail-alert').html('There was an error').fadeIn(500);
            }
        });


        return false;
    });


    // $('.grid').isotope({
    //     sortBy: 'year',
    //     sortAscending: false,
    //     itemSelector: '.grid-item',
    //     layoutMode: 'masonry',
    //     masonry: {
    //         columnWidth: 20
    //       }
    // });

});

document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        const elem = document.querySelector('.grid');
        const iso = new Isotope( elem, {
                sortBy: 'year',
                sortAscending: false,
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                fitRows: {
                  gutter: 0
                }
        });

        anime({
            targets: '#topnavi',
            translateY: 100,
            delay: 1500,
            duration: 500
          });

    }
  }

