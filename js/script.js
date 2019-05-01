 $(document).ready(function(){

    // alert("Hola");

     $(window).scroll(function(){
         scroll = $(window).scrollTop();

         if ($(window).width() > 480) {
            if (scroll > 100) {
                 $(".menu").css({"background":"#737373"});
                 $(".menu").css({"padding":"5px 0"});
                 $(".menu").addClass("shadow");
                 
            } else {
                $(".menu").css({"background":"transparent"});
                $(".menu").css({"padding":"20px 0"});
                 $(".menu").removeClass("shadow");
                 
             }
         }
     })

 })