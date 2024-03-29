
const headlineWaypointer = id => {
    const waypoint = new Waypoint({
        element: document.getElementById(id),
        offset: 'bottom-in-view',
        handler: function(direction) {
            if(direction === 'down'){
                anime({
                    targets: '#'+id,
                    translateX: [100, 0],
                    delay: 0,
                    opacity: [0,1],
                    duration: 500,
                    loop: false
                });
            }
        }
        });
}
document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        headlineWaypointer('headline-about');
        headlineWaypointer('headline-contact');
        headlineWaypointer('headline-music');
        headlineWaypointer('headline-mastering');
        headlineWaypointer('headline-disco');

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

        /** Main Cover */
        anime({
            targets: '#topnavi',
            translateY: 100,
            delay: 1500,
            duration: 450
          });
        anime({
            targets: '#subheadline',
            opacity: [0,1],
            delay: 1500,
            duration: 450
          }); 

    }
  }


// @deprecated
$(function() {

    // const vp_height = $(window).height();
    // if (vp_height > 500) {
    //     $('.cover-container').css('height', vp_height);
    // }

    $("#hamburger-nav-button, .nav-link").on('click',function() {
        $(".menu").slideToggle("slow");
    });

    $('#hamburger-nav-button').on('click',function() {
        $(this).fadeOut(500);
        $('#overlay-menu').fadeIn(500);
    });

    $('#overlay-close-button, #fullscreen-menu .nav-link').on('click',function() {
        $('#overlay-menu').fadeOut(500);
        $('#hamburger-nav-button').fadeIn(500);
    });

    $('#contact-form').on('submit',function() {
        $.post("sendmail.php", $(this).serialize(), function(data) {
            if (data == 'true') {
                $('#mail-alert').html('Your Mail was succesfully sent').fadeIn(500);
            } else {
                $('#mail-alert').html('There was an error. Sorry :(').fadeIn(500);
            }
        });
        return false;
    });

});
