$(document).ready(function(){

    let vp_height = $(window).height();
    if(vp_height > 650){
        $('.cover-container').css('height',vp_height);
    }
    
    $("#hamburger-nav-button, .nav-link").click(function(){ 
        $(".menu").slideToggle( "slow" );
    });

    $('#overlay-close-button').click(function(){
        $('#overlay-menu').fadeOut(500);
    });

    $('#hamburger-nav-button').click(function(){
        $('#overlay-menu').fadeIn(500);
    });


}); 