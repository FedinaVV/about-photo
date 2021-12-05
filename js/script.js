//Initialization of slider slick main
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000, 
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true
    });
});

//Button to top
function backToTop(){
    let button=$('.to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
        button.fadeIn();
    } else {
        button.fadeOut();
    }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop:0}, 1000);
    })
    }
    
    backToTop();
    

   

    //Burger-menu
    $(document).ready(function(){
        $('.header-burger').click(function(event){
        $('.header-burger, .header-menu').toggleClass('active');
        });
        });
        
//Initialization of slider slick mobile

       /* $(document).ready(function(){
            $('.slider-mobile-only').slick({
           centerMode: true,
          centerPadding: '10px',
           slidesToShow: 1,
           arrows: true,
            speed: 300
           
        });
        });*/