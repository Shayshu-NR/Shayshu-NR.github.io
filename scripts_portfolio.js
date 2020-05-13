$(document).ready(function(){
    setTimeout(function(){
        $('#banner').slideDown({duration: 1000, queue: false});
    }, 1000);

    setTimeout(function(){
        $('.project_container').css('opacity', 0)
        .slideDown('slow')
        .animate(
          { opacity: 1 },
          { queue: false, duration: 'slow' }
        );

        $('.content_area').css('opacity', 0)
        .slideDown('slow')
        .animate(
          { opacity: 1 },
          { queue: false, duration: 'slow' }
        );
    }, 2000);
});