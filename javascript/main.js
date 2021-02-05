
if(window.innerWidth > 960){

  //index navbar
    $('.navbar_btn').mouseover(function(){
      var btn_id =  $(this).attr('id');
      var goal_id = "#" + btn_id + "_nav";
      var goal_id_li = goal_id + " li";
      
      $(".nav_ul").css("height","0px");
      $(goal_id).css("height","auto");
      var nav_height = $(goal_id).height() + 30;
      $(goal_id).css("height",nav_height);
      $(goal_id).css("width","200px");
      $(goal_id_li).css("opacity","1");


    });





  //nav travel
  // $('#packge_travel_btn').mouseover(function(){
  //   // $('.navbar_btn').css("background-color","unset");
  //   $('.nav_ul li').css("opacity","0");
  //   $('#packge_travel_nav').css("width","200px");
  //   $('#packge_travel_nav li').css("opacity","1");
  //   $('#nav_block').css("height","250px");

  //   // $('#packge_travel_btn').css("background-color","rgba(153,182,189,0.8)");
  // });


  //moreinfo_nav
  // $('#moreinfo_btn').mouseover(function(){
  //   // $('.navbar_btn').css("background-color","unset");
    
  //   $('.nav_ul li').css("opacity","0");
  //   $('#moreinfo_nav li').css("opacity","1");
  //   $('#nav_block').css("height","150px");

  //   // $('#moreinfo_btn').css("background-color","rgba(153,182,189,0.8)");
  // });



  //close nav
  $(".exit_area1").mouseover(function(){
    $('.nav_ul').css("height","0px");
    $('.nav_ul li').css("opacity","0");
  
    
    
  });
  $(".exit_area2").mouseover(function(){
    $('.nav_ul').css("height","0px");
    $('.nav_ul li').css("opacity","0");
  
    
    
  });
  $(".exit_area3").mouseover(function(){
    $('.nav_ul').css("height","0px");
    $('.nav_ul li').css("opacity","0");
  
  });
  $(".exit_area4").mouseover(function(){
    $('.nav_ul').css("height","0px");
    $('.nav_ul li').css("opacity","0");
  
  });

  $(".exit_btn").mouseover(function(){     
    $('.nav_ul').css("height","0px");
    $('.nav_ul li').css("opacity","0");
  
  
  });

  

  $(document).click(function(){
    if($('#nav_block').innerHeight() !== 0){
      
      $('#nav_block').css("height","0px");
      $('.block_article').css("left","10%");
      $('.block_article').css("opacity","0");
      
    };
  });
   


}else if(window.innerWidth <= 960){
  //phone nav btn
  var navSwitch = false;
  var travelFoundSwitch = false
  var travelSwitch = false;
  var aboutusSwitch = false;
  var moreInfoSwitch = false;
  var nav = $('nav');
  $('#phone_btnbox').on('click',function(){
    var nav = $('nav');
    if(nav.height() == 0){
      $('nav').css("height","410px");
      navSwitch = true;
      $('#phone_aside').css("z-index","0");
    };
    if(nav.height() == 410 ||travelFoundSwitch == true || travelSwitch== true || aboutusSwitch == true || moreInfoSwitch == true){
      if(travelFoundSwitch == true && travelSwitch== true &&  aboutusSwitch == true && moreInfoSwitch ==true){
        $('nav').css("height",$('nav').height()); 
      };
      $('nav').css("height","0px");
      $('#travelfound_nav_phone').css("height","0px");
      $('#packge_travel_nav_phone').css("height","0px");
      $('#aboutus_nav_phone').css("height","0px");
      $('#moreinfo_nav_phone').css("height","0px");
      $('#phone_aside').css("z-index","20");
      travelFoundSwitch = false
      buySwitch = false;
      aboutusSwitch = false;
      moreInfoSwitch = false;
      travelfoundSwitch = false;
      navSwitch = false;
    };

    // console.log('\x1b[31m %s',"navSwitch:"+navSwitch);
    // console.log('\x1b[32m %s',"travelSwitch:"+travelSwitch);
    // console.log('\x1b[34m %s',"aboutusSwitch:"+aboutusSwitch);

  });



  //nav buy
  $('#buy').on('click',function(){
    var buy_nav = $('#buy_nav_phone');
    
    if(buy_nav.height() == 0){
      $('nav').css("height","auto");
      buy_nav.css("height","120px");
      buySwitch = true;
      setTimeout(() => {
        $('nav').css("height",$('nav').height()); 
      }, 500);
    };
    if(buy_nav.height() == 120){
      $('nav').css("height","auto");
      buySwitch = false;
      $('nav').css("height",$('nav').height()); 
      buy_nav.css("height","0px");
      setTimeout(() => {
        $('nav').css("height",$('nav').height()); 
      },500);
    };
  });

  //nav moreinfomation
  $('#moreinfo_btn').on('click',function(){

    var moreInfoNav =$('#moreinfo_nav_phone'); 

    if(moreInfoNav.height() == 0){
      $('nav').css("height","auto");
      moreInfoNav.css("height","200px");
      moreInfoSwitch = true;
      setTimeout(() => {
        $('nav').css("height",$('nav').height()); 
      }, 500);
    };
    if(moreInfoNav.height() == 200){
      $('nav').css("height","auto");
      moreInfoSwitch = false;
      moreInfoNav.css("height","0px");
      setTimeout(() => {
        $('nav').css("height",$('nav').height()); 
      },500);
    };
  });


  //nav travelfound
  $('#travelfound').on('click',function(){

    var travelfoundNav =$('#travelfound_nav_phone'); 

    if(travelfoundNav.height() == 0){
      $('nav').css("height","auto");
      travelfoundNav.css("height","200px");
      travelfoundSwitch = true;
      setTimeout(() => {
        $('nav').css("height",$('nav').height()); 
      }, 500);
    };
    if(travelfoundNav.height() == 200){
      $('nav').css("height","auto");
      travelfoundSwitch = false;
      travelfoundNav.css("height","0px");
      setTimeout(() => {
        $('nav').css("height",$('nav').height()); 
      },500);
    };
  });
};



//popupbox active

$(function() {
  var timelimit = false;
  var a = 1;
  $(document).scroll(function(){
    var scrollBottom = $(document).height() - $(window).height() - $(document).scrollTop();
    if(scrollBottom == 0 && timelimit == false){
      $("#active_popupbox").css("display", "block");
    };
  });

  $("#exit_btn").on("click",function(){
    $("#active_popupbox").css("display", "none");
    timelimit = true;
    setTimeout(() => {
      timelimit = false;
    },5000);
  });
});

//share
$(function(){
  $("#share_btn").on("click",function(){
    var clipBoardContent="";
    var temp = $('<input type="text" value="">');
    clipBoardContent = location.href;
    temp.val(clipBoardContent);
    $('body').append(temp);
    temp.focus();
    temp.select();
    document.execCommand('copy');
    temp.remove();
    alert("文章網址已成功複製到剪貼簿!");
  }); 
  //share to FB
  $("#facebook_share_btn").on("click",function(){
    var FB_share_type = $('<meta property="og:type" content="article"/>');
    var FB_share_Title = $('<meta oroperty="og:title" content="">');
    // var FB_share_image_width = $('');
    // var FB_share_image_height = $('');
    // var FB_share_image = $('');
    var FB_share_description = $('<meta property="og:description" content="">');
    var FB_share_url = $('<meta property="og:url" content="">');
    var shareToFB_btn = $("#facebook_share_btn");

    FB_share_Title.attr('content',$('#article_title').text());
    FB_share_description.attr('content',$('#paragraph1').text());
    FB_share_url.attr('content',location.href);

    $('head').append(FB_share_type);
    $('head').append(FB_share_Title);
    // $('head').append(FB_share_image_width);
    // $('head').append(FB_share_image_height);
    // $('head').append(FB_share_image);
    $('head').append(FB_share_description);
    $('head').append(FB_share_url);

    shareToFB_btn.attr('href',"http://www.facebook.com/sharer.php?u="+location.href);

  });

  $("#mail_share_btn").on("click",function(){
    var mail_share = $("#mail_share_btn");
    var mail_share_title = $("#article_title").text();
    var mail_share_body = location.href
    mail_share.attr("href","mailto:?subject="+mail_share_title+"&body="+mail_share_body);
  });
});


//travel article type switch
$(function(){
  $("#eat_class_btn").on('click', function(){
    $(".class_btn").css("color","#777");
    $("#eat_class_btn").css("color","#000000");
    $(".article_container").fadeOut(0);
    $(".eatanddrink").fadeIn(500);
  });
  $("#play_class_btn").on('click', function(){
    $(".class_btn").css("color","#777");
    $("#play_class_btn").css("color","#000000");
    $(".article_container").fadeOut(0);
    $(".travel_and_play").fadeIn(500);
  });
  $("#accomdation_class_btn").on('click', function(){
    $(".class_btn").css("color","#777");
    $("#accomdation_class_btn").css("color","#000000");
    $(".article_container").fadeOut(0);
    $(".hotel").fadeIn(500);
  });
});


//gotop btn
$(function(){
  $("#gotop_btn").on("click",function(){
    $('html,body').animate({scrollTop:0},1000);
  });

  //show
  $(document).scroll(function(){
    if($(document).scrollTop() !== 0){
      $("#gotop_btn").css("display","block");
    }else{
      $("#gotop_btn").css("display","none");
    };
  });
});

