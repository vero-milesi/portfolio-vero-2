$(document).ready(function(){
    $('.portf-imgs.on img, .figma img').on('click', function() {
        $(this).toggleClass('clic-image');
    });

 
                // $('#return').click(function(){
                //   $('html').animate({scrollTop:0}, 'slow');
                //   return false;
                // });

                $('#return a').click(function(e){
                    e.preventDefault()
                    var $link=$(this).attr('href')
                    pos = $($link).offset()
                    var scol= pos.top - 50
                
                     $('body,html').animate({scrollTop:scol},600)
                  
            })

             
             
});