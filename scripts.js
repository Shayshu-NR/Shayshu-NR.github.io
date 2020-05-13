$(document).ready(function(){
    setTimeout(function(){
        $('#main_banner').slideDown(1000);
        $('#portfolio_button').delay(1000).css('opacity', 0).slideDown(3000).animate(
            { opacity: 1 },
            { queue: false, duration: 3000 }
          );
    }, 1000);



});




    