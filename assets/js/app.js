$(document).ready(
    function(){
        let vp_height = $(window).height();
        if(vp_height > 650){
            $('.cover-container').css('height',vp_height);
        }
    }
); 