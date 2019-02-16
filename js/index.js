$(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: "<img src='./img/left-arrow.png' class='prev' alt='1'>",
        nextArrow: "<img src='./img/right-arrow.png' class='next' alt='2'>",
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
            },
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }

          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});
$(window).bind('scroll',function(e){
  parallaxScroll();
});

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
  $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
  $('#parallax-bg3').css('top',(0-(scrolled*.85))+'px');
};

$('.menu-btn').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.header__menu').toggleClass('header__menu-active');
  $('.header__nav-blockk').toggleClass('header__nav-blockk-active')
});


  $('form').submit(function(e){
    e.preventDefault()
    var frmdata = $('.form').serialize();
    // var frmdata2 = $('#form2').serialize();
    let cont = $(this),
    h = cont.height(),
    j = $('.response__ajax'),
    k = $('.modal__container')
    console.log(cont)
    $.ajax({
      dataType: "json",
      method:"post",
      url: "./forms/index.php",
      data: frmdata,
      success : function(response)
      {
        if (response.code == "200") {
          // alert("success:" + response.msg);
          console.log(h)
          console.log(response)
          // setTimeout("$('form').css({'display':'none'})",1500);
          $('form').css({'display':'none'})
          // setTimeout($('.response__ajax').css({'height': h + 'px', 'display': 'block', 'transition' : '0.5s'}), 1000);
          j.css({'height': h + 'px', 'display': 'block', 'transition' : '0.5s'})
          $(".display-error").css("display","none");
          $(".modal__container > span").css("display","none");
          setTimeout("parent.$.fancybox.close()", 2500);
          
        } else {
          if (response.msg) {
            $(".display-error").html(response.msg);
            $(".phone-error").html(response.msg_phone);
            $(".display-error").css({"display" : "block", "position": "relative", "top":"-20px"});
            $(".phone-error").css({"display" : "block", "position": "relative", "top":"-20px"});
            console.log($("#form_name"))
            $('input[name="name"]').addClass("errtextbox");
            $('input[name="phone"]').removeClass("errtextbox");
          } else {
            $(".display-error").html(response.msg);
            $(".phone-error").html(response.msg_phone);
            $(".phone-error").css({"display" : "block", "position": "relative", "top":"-20px"});
            $('input[name="phone"]').addClass("errtextbox");
            $('input[name="name"]').removeClass("errtextbox");
          }

          console.log(response);
        }
      }
    });
  });

$(".active").on('click',function (e) {
  $('#about').addClass('changed changedd');
    $('.active').css({"display":"none"});
  $('.close').css({"display":"block"});
 /* $('.desc').html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deleniti est eum exercitationem repellendus tempore veniam! Accusantium ad beatae consequatur, consequuntur dicta dolorem facilis, fugit harum pariatur possimus soluta.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deleniti est eum exercitationem repellendus tempore veniam! Accusantium ad beatae consequatur, consequuntur dicta dolorem facilis, fugit harum pariatur possimus soluta.");*/
 $('.closedDesc').css({"display":"none"});
 $('.openDesc').css({"display":"block","width":"60%"});
 if (window.matchMedia('(max-width: 425px)').matches) {
  $('#about').css({"height":"100%"});
 }
});

$(".close").on('click',function (e) {
  $('#about').removeClass("changed changedd");
  $('.close').css({"display":"none" });
  $('.active').css({"display":"block"});
  $('.openDesc').css({"display":"none"});
  $('.closedDesc').css({"display":"block"});
  if (window.matchMedia('(max-width: 425px)').matches){
    $('#about').css({"height":"450px"});
  }

});

// // Посимвольный вывод текста

// var myText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deleniti est eum exercitationem repellendus tempore veniam! Accusantium ad beatae consequatur, consequuntur dicta dolorem facilis, fugit harum pariatur possimus soluta.';
// var myArray = myText.split("");
// var loopTimer;

// function frameLooper() {
  
//   if (myArray.length > 0) {
//     document.getElementById("closedDesc").innerHTML += myArray.shift();
//   } else {
//     clearTimeout(loopTimer);
//     return false;
//   }
//   loopTimer = setTimeout('framelooper()', 70);

// };
// $(".active").on('click', frameLooper());


// -------------------------------
// var source, desc, len, now=0, delay=15, letters=1;
// $(".active").on('click', function show_Text(){
//   source = document.getElementById("closedDesc");
//   desc = document.getElementById("pageText");
//   len = source.innerHTML.length;
//   show();

// });
//  function show () {
//   desc.innerHTML += source.innerHTML.substr(now,letters);
//   now += letters;
//     if(now<len) {
//       setTimeout("show()", delay);
//     }
      
// }


/// Map !!!
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 58.592841, lng: 49.612700};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
var on = true;
   $('.map_button').on('click', function(){
     
     if (on == true) {
      $('#map').css({"height":"700px"});
      $('html,body').animate({scrollTop:$('#map').offset().top+"px"},{duration:1E3});
      on = false;
     }else{
      $('#map').css({"height":"0px"});
      on = true;
     }
   })