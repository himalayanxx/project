 $(document).ready(function(){
        
        // show hide button on scroll
        $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
            
    }); 
      
      //smooth scrolling to top
        $('.scrollToTop').click(function(){
            $('html,body').animate({scrollTop: 0}, 1000)
        })
      
     });