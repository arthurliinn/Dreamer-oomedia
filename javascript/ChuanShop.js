



//phone nav
$(function(){
  var nav = $('nav');
  $('#phone_btnbox').on("click",function(){
    if(nav.height() == 0){
      $('nav').css("height","367px");
    }else{
      $('nav').css("height","0px");
    };
  });
});


//commod list button
$(function(){
  var seriestoggle_switch  = false;
  $('.commodity_series_selector').on('click',function(){
    if(seriestoggle_switch == false){
    // $(".commodity_series_selector").css("height","0px");
      if(window.innerWidth > 768){
        $(".commodity_series_ul",this).css("height","650px");
      }else if(window.innerWidth <= 768){
        $(".commodity_series_ul",this).css("height","200px");
        if(window.innerWidth < 375){
          $(".commodity_series_ul",this).css("height","650px");
        };
      };
    $(".series_btn_arrow",this).text("v");
    setTimeout(() => {
      seriestoggle_switch = true;
    }, 500);
  }else{
    $(".commodity_series_ul",this).css("height","0px");
    $(".series_btn_arrow",this).text(">");
  setTimeout(() => {
    seriestoggle_switch = false;
  }, 500);
  }; 
});
});



//commodity quantity
  var quantity = 1;
  var input = $('input[name="commodity_quantity"]');
  quantity_change();
  function quantity_change(){
    input.val(quantity); 
  };

  
  //click to change quantity
  //quantity add
  $(".add").click(function(){
    quantity++;
    quantity_change();
    check();
  });

  $(".cut").click(function(){
    quantity--;
    quantity_change();
    check();
  });


  function check(){
    if(quantity == 0){
      quantity = 1;
      quantity_change();
    }else if(quantity > 10){
      quantity = 10;
      quantity_change();
    };
  };

  function keyin(){
    quantity = input.val();
    input.blur(function(){
      if(input.val() == "" || input.val() < 0 || input.val().length > 2 || quantity > 10){
        alert("請輸入有效數量!!(1~10)");
        quantity = 1;
        quantity_change();
      };
    });
  };





//commodity picture switch

$(function(){
  $(".image_small").on('click',function(){
    $('.image_big').fadeTo(00,0);
    var storage =  $(".image_big").attr('src');
    $(".image_big").attr("src",$(this).attr("src"));
    $(this).attr("src",storage);
    $('.image_big').fadeTo(500,1);
  });

});




//delete seriesbox
//delete cart commodity
$(function(){
  var series_list =  $("div");
  var cart_list = $("li");
  $(".delete_commodity").on('click',function(){
    $(this).parent(cart_list).remove();
    check_list_length();
    
  });

  $(".delete_series").on('click',function(){
    $(this).parent().parent(series_list).remove();
  
  });


  //delete seriesbox when nothing in shopping cart
  function check_list_length(){
    var commodity1_len = $(".series1_cart ul li");
    var commodity2_len = $(".series2_cart ul li");
    var commodity3_len = $(".series3_cart ul li");
    var commodity4_len = $(".series4_cart ul li");
    if(commodity1_len.length == 0){
      $(".series1_cart").remove();
    };
    if(commodity2_len.length == 0){
      $(".series2_cart").remove();
    };
    if(commodity3_len.length == 0){
      $(".series3_cart").remove();
    };
    if(commodity4_len.length == 0){
      $(".series4_cart").remove();
    };
  };



});



//checkbox check all
$(function(){
  $(document).ready(function(){
    $("input[name='select_all']").prop('checked',true);
    select_all();
  });
  
  
  $("#select_all_shopping").on('click',function(){
    select_all();
  });
  
  
  function select_all(){
    if($("input[name='select_all']").prop('checked')){
      $("input[name='serise_select[]']").prop('checked',true);
    }else{
      $("input[name='serise_select[]']").prop('checked',false);
    };
  };
  
});


//order stick move
$(function(){
    var order_ul = $(".order_ul");
    var stick = $("#border_stick");
    $("#not_already_pay_btn").on('click',function(){
      stick.css('transform',"translateX(00px)");
      order_ul.fadeOut(0);
      $("#not_already_pay").fadeIn(500);
    });
    $("#deal_with_btn").on('click',function(){
      stick.css('transform',"translateX(195px)");
      order_ul.fadeOut(0);
      $("#deal_with").fadeIn(500);
    });
    $("#wait_to_get_btn").on('click',function(){
      stick.css('transform',"translateX(375px)");
      order_ul.fadeOut(0);
      $("#wait_to_get").fadeIn(500);
    });
    $("#complete_btn").on('click',function(){
      stick.css('transform',"translateX(555px)");
      order_ul.fadeOut(0);
      $("#complete").fadeIn(500);
    });
    $("#cancel_btn").on('click',function(){
      stick.css('transform',"translateX(735px)");
      order_ul.fadeOut(0);
      $("#cancel").fadeIn(500);
    });
});


//oder list 
$(function(){
  if(window.innerWidth <= 768){
    $("#not_already_pay_btn").on('click',function(){
      $(".order_btns_inside").css("color","#888");
      $(this).css("color","black");
    });
    $("#deal_with_btn").on('click',function(){
      $(".order_btns_inside").css("color","#888");
      $(this).css("color","black");
    });
    $("#wait_to_get_btn").on('click',function(){
      $(".order_btns_inside").css("color","#888");
      $(this).css("color","black");
    });
    $("#complete_btn").on('click',function(){
      $(".order_btns_inside").css("color","#888");
      $(this).css("color","black");
    });
    $("#cancel_btn").on('click',function(){
      $(".order_btns_inside").css("color","#888");
      $(this).css("color","black");
    });
  };
});


//gotop btn
$(function(){
  $("#gotop_btn").click(function(){
    $('html,body').animate({scrollTop:0},500);
  });

  $(document).scroll(function(){
    if($(document).scrollTop() !== 0){
      $("#gotop_btn").css("display","block"); 
    }else{
      $("#gotop_btn").css("display","none"); 
    };
  });
});