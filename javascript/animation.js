//index

$(document).ready(function(){
  $("#main_top").css("opacity","1");
  $("#main_top").css("transform","translateX(0px)");
  $(".news_inner:nth-child(1)").css("opacity","1");
  $(".news_inner:nth-child(1)").css("transform","translateY(0px)");
});

$(document).scroll(function(){
 
  $(".news_inner").each(function(){
    var objectToTop = $(this).offset().top + $(this).innerHeight();
    var scrollTop = $(document).scrollTop() + $(window).height();
    if(objectToTop > scrollTop){
      $(this).css("opacity","1");
      $(this).css("transform","translateY(0px)");
    }; 
  });


});



//hot article & travel article

$(document).ready(function(){
  $("#travelfound_title").css("opacity","1");
  $(".class_btn").css("opacity","1");
  $('.article').css("opacity","1");
  $('.article').css("transform","translate(0px)");

});


//active

$(document).ready(function(){
  // var test = $(".active:nth-child(1)");
  // console.log(test);
  $(".active").css("opacity","1");
  $(".active").css("transform","scale(1)");

});


//about
$(document).ready(function(){
  $(".about_paragraph").css("opacity","1");
  $(".about_paragraph").css("transform","translateY(0px)");

});


//about us aside control
$(document).ready(function() {
  $('aside').css('opacity', '1');
  $('#aside_line').css("height","100%");
  if($(window).width() > 960){
    $("aside").css("transform","translate(-120px,100px)");
  }else if( 640< $(window).width() <= 960){
    var aside_switch = false;
    //phone
    $('#aside_open_arrow').on('click',function(){
      if(640 < $(window).width() <= 960 ){
        if(aside_switch == false){
          $("#phone_btnbox").css("z-index","0")
          $("#phone_aside").css("left","0");
          $("#gray_exit_area").css("display","block");
          $('#aside_open_arrow').css("transform","rotate(180deg)");
          $('body').css("overflow","hidden");
          setTimeout(() =>{
            aside_switch = true;
          },500);
        }else{
          $("#phone_aside").css("left","-33vw");
          $("#gray_exit_area").css("display","none");
          $('#aside_open_arrow').css("transform","rotate(0deg)");
          $('body').css("overflow","auto");
          $("#phone_btnbox").css("z-index","888")
          setTimeout(() =>{
            aside_switch = false;
          },500);
        };
      };
      if($(window).width()<=640){
        if(aside_switch == false){
          $("#phone_btnbox").css("z-index","0")
          $("#phone_aside").css("left","0");
          $("#gray_exit_area").css("display","block");
          $('#aside_open_arrow').css("transform","rotate(180deg)");
          $('body').css("overflow","hidden");
 
          setTimeout(() =>{
            aside_switch = true;
          },500);
        }else{
          $("#phone_aside").css("left","-50vw");
          $("#gray_exit_area").css("display","none");
          $('#aside_open_arrow').css("transform","rotate(0deg)");
          $('body').css("overflow","auto");
          $("#phone_btnbox").css("z-index","888")
          setTimeout(() =>{
            aside_switch = false;
          },500);
        };
      }
    });
    $("#gray_exit_area").on('click',function(){
      if(aside_switch == true){
        $("#phone_aside").css("left","-33vw");
        $("#gray_exit_area").css("display","none");
        $('#aside_open_arrow').css("transform","rotate(0deg)");
        $('body').css("overflow","auto");
        $("#phone_btnbox").css("z-index","888")
        setTimeout(() =>{
          aside_switch = false;
        },500);
      };
    });
  };
});


