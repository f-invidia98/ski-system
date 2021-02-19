function loading() {
  $("#nav-placeholder").load("nav.html");
};

loading();


$(".title").css( 'cursor', 'url(assets/cursor.png), auto' );





// $('#lang > a').click(function(){
//   $('#lang > a').removeClass("active-head")
//   $(this).addClass("active-head")
// })

function tariffe(){
if ($(window).width() < 990) {
    $("#tariffe").text("TARIFFE")
} else if ($(window).width() > 990) {
    $("#tariffe").text("TARIFFE 2020/2021 ↧")
}

if ($(window).width() >= 568) {
    $("#sci_img").css("display", "block");
    $("#sci_img_2").css("display", "none");
    $(".img_rotate").css("height", "auto");
} else if ($(window).width() < 568) {
  $("#sci_img").css("display", "none");
  $("#sci_img_2").css("display", "block");
  $(".img_rotate").css("height", $("#sci_img_2").width()+30+"px");
  $("#sci_img_2").css("padding-top","0")
}
}

tariffe();





$(window).resize(tariffe)


var language;
var lang = 'it';
function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('en') : false;
$.ajax({
url:  'language/' +  localStorage.getItem('language') + '.json',
dataType: 'json', async: false, dataType: 'json',
success: function (lang) { language = lang } });

}

function setLanguage(lang) {
localStorage.setItem('language', lang);
if (localStorage.getItem('language') == "it") {
  $('#lang > a').removeClass("active-head")
  $('#lang > a:nth-child(1)').addClass("active-head")
} else if (localStorage.getItem('language') == "en") {
  $('#lang > a').removeClass("active-head")
  $('#lang > a:nth-child(3)').addClass("active-head")

}
}



$('#lang > a').click(function(){
  getLanguage();

  $('#lab_text').text(language.laboratoriotext);
  $('#noleggio_text').text(language.noleggio_text);
  $('#tutti_text').text(language.tutti_text);
  $('.noleggio_titolo').text(language.noleggio_titolo);
});



     $(document).ready(function(){
     getLanguage();
     if (localStorage.getItem('language') == "it") {
       $('#lang > a').removeClass("active-head")
       $('#lang > a:nth-child(1)').addClass("active-head")
     } else if (localStorage.getItem('language') == "en") {
       $('#lang > a').removeClass("active-head")
       $('#lang > a:nth-child(3)').addClass("active-head")
     }
     $('#lab_text').text(language.laboratoriotext);
     });




// $(".menu_button_2").click(function(){
//   if ($(".menu").css("display") == 'block') {
//     $(".menu").css("display", "none")
//   }
// })



// $("#prova").click(function(){
//   if ($("#dropdown").hasClass("shorter")) {
//     $("#dropdown").removeClass("shorter");
//     $("#dropdown").addClass("longer");
//   }else if ($("#dropdown").hasClass("longer")) {
//     $("#dropdown").removeClass("longer");
//     $("#dropdown").addClass("shorter");
//   }
// })


$(window).resize(function() {
if ($(window).width() > 414) {
    $(".menu").css("display", "none")
}
})








/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menu_function() {
  if ($(window).width() < 990) {
  document.getElementById("dropdown").classList.toggle("show");
  if (document.getElementById("dropdown").classList.contains('show')) {
    $(".arrow_right_noleggio").text("↑")
  }else{
    $(".arrow_right_noleggio").text("↓")
  }
}
}

// $(".active_filter_text").click(function(){
//   menu_function();
//
// });

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.hitbox')) {
    var dropdowns = $(".content_filter");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





var filter_name;

$(".none").click(function(){

  filter_name = this.innerText;
  $(".sci").css("display","none")
  $("."+filter_name).css("display","block")
  $(".active_filter_text").text(this.innerText)
  if ($(window).width() > 990) {
    $(".none").removeClass("inverted")
    $(this).addClass("inverted")
  }

})


$(".menu_button").click(function(){
if ($("#menu").css("display")=="none") {
    $("#menu").css("display", "block")
    setTimeout(function(){
      $(".menu_button").addClass("rotate")
    },10)


} else if ($("#menu").css("display")=="block") {
  $(".menu_button").removeClass("rotate")
    $("#menu").css("display", "none")


}




})

// $(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//
//     if (scroll > 0) {
//       $(".menu_button_index").css("display", "none")
//
//     }else if (scroll == 0) {
//       $(".menu_button_index").css("display", "block")
//     }
// });



// $(".menu_button_index").click(function(){
// if ($("#menu").css("display")=="none") {
//     $("#menu").css("display", "block")
//     $(".menu_button").addClass("rotate")
//     setTimeout(function(){
//       $(".menu_button_index").css("display", "none")
//       $(".button_menu").css("display", "block")
//     },200)
// }
//
//
//
//
// })

var sci_name;
var prodotto;

$(".navigate").click(function(){


  sci_name = $(this).find(".sci_name").text();
  // sci_name = this.innerText;
  $("#sci_name").text(sci_name);
  prodotto = $(this).closest(".prodotto");
  $("#sci_text").text(prodotto.find(".text").text());
  $("#sci_produttore").text(prodotto.find(".produttore").text());
  $("#sci_taglia").text(prodotto.find(".taglia").text());
  $("#sci_versione").text(prodotto.find(".versione").text());
  // $("#sci_link").text(prodotto.find(".link").text());
  $("#sci_link").attr("href", prodotto.find(".link").text());
  $("#sci_img").attr("src", prodotto.find(".image > img").attr("src"));
  $("#sci_img_2").attr("src", prodotto.find(".image > img").attr("src"));




  $("body").css("overflow","hidden")
  setTimeout(function(){$(".page2").css("left","0");tariffe();},10)

  $(".page2").css("display","block")




// setTimeout(
//   function(){
//     window.scroll({
//       top: 0,
//       left: 0
//     })
//   }, 200)



});


$(".prodotto > .image").hover(function(){
  sci_name = $(this).closest(".navigate");
  prodotto = $(this).closest(".prodotto");
  prodotto.find(".image > img").css("opacity","0.9")
  prodotto.find("#sci_img").css("opacity","1")
  sci_name.addClass("inverted");
},function(){
  sci_name = $(this).closest(".navigate");
  prodotto = $(this).closest(".prodotto");
  prodotto.find(".image > img").css("opacity","1")
  sci_name.removeClass("inverted");
});

$(".prodotto > .navigate").hover(function(){
  sci_name = $(this).closest(".navigate");
  prodotto = $(this).closest(".prodotto");
  prodotto.find(".image > img").css("opacity","0.9")
  prodotto.find("#sci_img").css("opacity","1")
  sci_name.addClass("inverted");
},function(){
  sci_name = $(this).closest(".navigate");
  prodotto = $(this).closest(".prodotto");
  prodotto.find(".image > img").css("opacity","1")
  sci_name.removeClass("inverted");
});

$(".navigate_back").click(function(){
  $("body").css("overflow","visible")

  setTimeout(function(){$(".page2").css("display","none")},500)
$(".page2").css("left","100vw")


  })


  $(function(){
    'use strict';
    var $page = $('#main'),
        options = {
          debug: true,
          prefetch: true,
          cacheLength: 2,
          onStart: {
            duration: 500, // Duration of our animation
            render: function ($container) {
              // Add your CSS animation reversing class
              $container.addClass('is-exiting');
              // Restart your animation
              smoothState.restartCSSAnimations();
            }
          },
          onReady: {
            duration: 0,
            render: function ($container, $newContent) {
              // Remove your CSS animation reversing class
              $container.removeClass('is-exiting');
              // Inject the new content
              $container.html($newContent);
            }
          }
        },
        smoothState = $page.smoothState(options).data('smoothState');
  });


  $(".1").click(function(){
    $(".lab_image").css("transform", "translate(0vw, 0)")
    $(".slide_control > a").removeClass("inverted")
    $(".1").addClass("inverted")
});

$(".2").click(function(){
  $(".lab_image").css("transform", "translate(-100vw, 0)")
  $(".slide_control > a").removeClass("inverted")
  $(".2").addClass("inverted")
});

$(".3").click(function(){
  $(".lab_image").css("transform", "translate(-200vw, 0)")
  $(".slide_control > a").removeClass("inverted")
  $(".3").addClass("inverted")
});

$(".4").click(function(){
  $(".lab_image").css("transform", "translate(-300vw, 0)")
  $(".slide_control > a").removeClass("inverted")
  $(".4").addClass("inverted")
});


//     $(document).ready(function () {
// $(".wrapper_sci").page();
// $(".wrapper_sci .page .navigate").click(function (ev) {
//   var page  = $(ev.target).attr("data-page-name");
//   var trans = $(ev.target).attr("data-page-trans");
//   if ($(".wrapper_sci").page().fetch(page) === null)
//       $(".wrapper_sci").page().shake();
//   else
//       $(".wrapper_sci").page().transition(page, trans);
// });
// });
