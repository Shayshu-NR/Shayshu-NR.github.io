$(document).ready(function(){
    setTimeout(function(){
        $('#main_banner').slideDown(1000);
    }, 1000);

    setTimeout(function(){
        $('.square_btn').css('opacity', 0)
        .slideDown('slow')
        .animate(
          { opacity: 1 },
          { queue: false, duration: 'slow' }
        );
    }, 2000);
});




    