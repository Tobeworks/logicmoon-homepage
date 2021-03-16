
document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        var waypoint = new Waypoint({
            element: document.getElementById('headline-contact'),
            offset: 'bottom-in-view',
            handler: function(direction) {
                console.log('Direction: ' + direction);
                console.log(this.element.id + ' triggers at ' + this.triggerPoint);
                if(direction === 'down'){
                    anime({
                        targets: '#headline-contact',
                        translateX: [200, 0],
                        delay: 0,
                        duration: 500,
                        loop: false
                    });
                }
            }
          })

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
            delay: 1000,
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
