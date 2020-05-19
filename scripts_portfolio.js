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

    }, 2000);

    // $('iframe').on("click",
    //     function(){
    //         $(this).animate(
    //             {height: '1000px',
    //             width: '1000px',
    //             left: '100px'},
    //             'slow');
            
    //         $(this).html(align = 'left');
    //     },
    //     function(){
    //         $(this).animate(
    //             {height: '300px',
    //             width: '300px'},
    //             'slow');
            
    //         $(this).html(align = 'center');
    //     }
    // );


});