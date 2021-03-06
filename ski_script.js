function loading() {
  $("#nav-placeholder").load("nav.html");
};

loading();

$('.footer').css('cursor', 'url("assets/cursor.png"), auto');

$('#prenota').click(function(){
  window.location.href = "mailto:info@skisystemcortina.it?subject=Prenotazione sci&body=Ciao, completando le informazioni che trovi di seguito sarà possibile confermare la tua prenotazione.%0A%0AUna volta inseriti tutti i dati necessari ricordati di inviare questa mail. Riceverai una conferma il prima possibile.%0A%0A• Cognome: %0A%0A• Nome:%0A%0A• Altezza sci:%0A%0A• GG/MM del ritiro noleggio: %0A%0A• Durata noleggio:%0A%0A%0A%0A%0ATi aspettiamo da Ski System Cortina!%0A%0AA presto,%0APaolo e Walter%0A%0A%0A%0ASki System Cortina%0AVia Faloria, 23%0A32043 – Cortina d'Ampezzo%0AT: 	+39 0436 4283%0AE: 	info@skisystem.it%0AW:  	skisystem.it";
})

// $(".title").css( 'cursor', 'url(assets/cursor.png), auto' );

// var posy;
//   posy = $("#slideshow").offset();
// $(".arrow_img").css(posy);


// $('#lang > a').click(function(){
//   $('#lang > a').removeClass("active-head")
//   $(this).addClass("active-head")
// })

function tariffe(){
if ($(window).width() < 990) {
    $(".tariffe_en").html('RATES')
    $(".tariffe_it").html('TARIFFE')
      $("th").css("width", "30vw")
} else if ($(window).width() > 990) {
  $(".tariffe_en").html('RATES 2020/2021 ↧')
  $(".tariffe_it").html('TARIFFE 2020/2021 ↧')
      $("th").css("width", "20%")
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

if ($(window).width() < 414) {
  $(".name").text("Ski System Cortina")
  $("#wrapper").css("display", "none")
  $("#wrapper2").css("display", "flex")
}else if ($(window).width() >= 414) {
  $(".name").html("Ski System </br> Cortina");
  $("#wrapper").css("display", "flex")
  $("#wrapper2").css("display", "none")
};

if ($(window).width() < 990 && $(window).width() > 568) {
  $("#tariffe").css("height", $(".sci_info").height()/2)
  $("#tariffe").css("line-height", $(".sci_info").height()/2 + "px")
  $(".t_pre").css("height", $(".sci_info").height()/2)
  $(".t_pre").css("line-height", $(".sci_info").height()/2 + "px")
}else {
  $("#tariffe").css("height", "inherit")
  $("#tariffe").css("line-height", "inherit")
  $(".t_pre").css("height", "inherit")
  $(".t_pre").css("line-height","inherit")
};

}







$(window).resize(tariffe)


var language;
var lang = 'it';



function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('it') : false;
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
  $(".text_it").css("display", "block");
  $(".text_en").css("display", "none");
} else if (localStorage.getItem('language') == "en") {
  $('#lang > a').removeClass("active-head")
  $('#lang > a:nth-child(3)').addClass("active-head")
  $(".text_en").css("display", "block");
  $(".text_it").css("display", "none");

}
}



$('#lang > a').click(function(){
  getLanguage();
  if (localStorage.getItem('language') == "it") {
    $('#lang > a').removeClass("active-head")
    $('#lang > a:nth-child(1)').addClass("active-head")
    $(".text_it").css("display", "block");
    $(".text_en").css("display", "none");
  } else if (localStorage.getItem('language') == "en") {
    $('#lang > a').removeClass("active-head")
    $('#lang > a:nth-child(3)').addClass("active-head")
    $(".text_en").css("display", "block");
    $(".text_it").css("display", "none");

  }


  $('#lab_text').text(language.text_lab);
  $('#noleggio_text').text(language.noleggio_text);
  $('#tutti_text').text(language.tutti_text);
  $('.t_noleggio').text(language.t_noleggio);
  $('.t_contatti').text(language.t_contatti);
  $('.t_dolomiti').text(language.t_dolomiti);
  $('.t_sci').text(language.t_sci);
  $('.t_tar').text(language.t_tar);
  $('.t_pre').text(language.t_pre);
  $('.text_paolo').text(language.text_paolo);
  $('#text_walter').text(language.text_walter);
  $('#text_dolomiti').text(language.text_dolomiti);
  $('#text_dolomiti_cred').text(language.text_dolomiti_cred);


});



     $(document).ready(function(){
     getLanguage();
     if (localStorage.getItem('language') == "it") {
       $('#lang > a').removeClass("active-head")
       $('#lang > a:nth-child(1)').addClass("active-head")
       $(".text_it").css("display", "block");
       $(".text_en").css("display", "none");
     } else if (localStorage.getItem('language') == "en") {
       $('#lang > a').removeClass("active-head")
       $('#lang > a:nth-child(3)').addClass("active-head")
       $(".text_en").css("display", "block");
       $(".text_it").css("display", "none");
     }
     $('#lab_text').text(language.text_lab);
     $('#noleggio_text').text(language.noleggio_text);
     $('#tutti_text').text(language.tutti_text);
     $('.t_noleggio').text(language.t_noleggio);
     $('.t_contatti').text(language.t_contatti);
     $('.t_dolomiti').text(language.t_dolomiti);
     $('.t_sci').text(language.t_sci);
     $('.t_tar').text(language.t_tar);
     $('.t_pre').text(language.t_pre);
     $('.text_paolo').text(language.text_paolo);
     $('#text_walter').text(language.text_walter);
     $('#text_dolomiti').text(language.text_dolomiti);
     $('#text_dolomiti_cred').text(language.text_dolomiti_cred);

     });

tariffe();
     // if ($("#it_sel").hasClass("active-head")) {
     //   setLanguage('it');
     // } else if ($("#en_sel").hasClass("active-head")) {
     //   setLanguage('en');
     // }


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
var count;

$(".navigate").click(function scii(){


  sci_name = $(this).find(".sci_name").text();
  // sci_name = this.innerText;
  $("#sci_name").text(sci_name);
  prodotto = $(this).closest(".prodotto");
  $("#sci_text_en").text(prodotto.find(".text_en").text());
  $("#sci_text_it").text(prodotto.find(".text_it").text());
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

for (var i = 0; i < $(".sci_name").length; i++) {
  if ($(this).find(".sci_name")[0] == $(".sci_name")[i]) {
    count = i;
    window.location = "#nrt_sz" + i;
    // break;
  }
}

//
// $(function() {
//     if (document.location.href.indexOf('#') < -1) {
//       location.reload();
//     }
// });




// setTimeout(
//   function(){
//     window.scroll({
//       top: 0,
//       left: 0
//     })
//   }, 200)



});

var nsn;
var sci_name2;
var sci_name3;

  nsn = 3;

  // for (var i = 0; i < array.length; i++) {
  //   array[i]
  // }

// sci_name = (".sci_name").length;

$(function() {
  for (var i = 0; i < $(".sci_name").length; i++) {
    if (document.location.href.indexOf('#nrt_sz' + i) > -1) {


      sci_name2 = $(".sci_name")[i];

      sci_name3 = $(sci_name2).html();

  //
  // sci_name = $(this).find(".sci_name").text();
  // // sci_name = this.innerText;
    $("#sci_name").text(sci_name3);
    prodotto = $(sci_name2).closest(".prodotto");
  $("#sci_text_en").text(prodotto.find(".text_en").text());
  $("#sci_text_it").text(prodotto.find(".text_it").text());
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

}
}
});


        $('#elementID').animate({"left": "250"}, "slow");


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

jQuery(function($) {
    var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });


    $(document).ready(function(){
        $(document).mousemove(function(){
             if($("#slideshow:hover").length != 0){
               if (currentMousePos.x > $(window).width()/2) {
                   $('#slideshow').css('cursor', 'url("assets/arrow.png"), auto');

                   $(".image1").click(function(){
                     $(".lab_image").css("transform", "translate(-100vw, 0)")
                     $(".slide_control > a").removeClass("inverted")
                     $(".2").addClass("inverted")
                  });
                  $(".image2").click(function(){
                    $(".lab_image").css("transform", "translate(-200vw, 0)")
                    $(".slide_control > a").removeClass("inverted")
                    $(".3").addClass("inverted")
                 });
                 $(".image3").click(function(){
                   $(".lab_image").css("transform", "translate(-300vw, 0)")
                   $(".slide_control > a").removeClass("inverted")
                   $(".4").addClass("inverted")
                });

                $(".image4").click(function(){
                  $(".lab_image").css("transform", "translate(-300vw, 0)")
                  $(".slide_control > a").removeClass("inverted")
                  $(".4").addClass("inverted")
               });

              } else {
                if (currentMousePos.x < $(window).width()/2) {
                    $('#slideshow').css('cursor', 'url("assets/arrow_rev.png"), auto');

                    $(".image1").click(function(){
                      $(".lab_image").css("transform", "translate(0vw, 0)")
                   });

                    $(".image2").click(function(){
                      $(".lab_image").css("transform", "translate(0vw, 0)")
                      $(".slide_control > a").removeClass("inverted")
                      $(".1").addClass("inverted")
                   });
                   $(".image3").click(function(){
                     $(".lab_image").css("transform", "translate(-100vw, 0)")
                     $(".slide_control > a").removeClass("inverted")
                     $(".2").addClass("inverted")
                  });
                  $(".image4").click(function(){
                    $(".lab_image").css("transform", "translate(-200vw, 0)")
                    $(".slide_control > a").removeClass("inverted")
                    $(".3").addClass("inverted")
                 });

                }
              }
            }
        });
    });
    // ELSEWHERE, your code that needs to know the mouse position without an event

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



















// $('#noleggio').click(function(){
//   $('.menu_tend').toggleClass("height_menu")
// })
//
//
// $('#sci_link-2').click(function(){
//   window.location.href = "noleggio.html";
// })
//
// $('#prenota_link').click(function(){
//   window.location.href = "mailto:info@skisystemcortina.it";
// })
//
// $('#tariffe_link').click(function(){
//   window.location.href = "noleggio.html";
// })
//
//
// // $(".button_menu").click(function(){
// //   if ($(".menu_button_index").css("display")=="none") {
// //       $(".menu_button_index").css("display", "block")
// //   }
// //
// //
// //     setTimeout(function(){
// //       $(".button_menu").css("display", "none")
// //         $("#menu").css("display", "none")
// //         $(".menu_button").removeClass("rotate")
// //     },10)
// //
// //
// //
// //
// //
// //
// //
// //})
// $(".button_menu").click(function(){
// if ($("#menu").css("display")=="none") {
//     $("#menu").css("display", "block")
//     $(".menu_button").addClass("rotate")
// } else if ($("#menu").css("display")=="block") {
//     $("#menu").css("display", "none")
//     $(".menu_button").removeClass("rotate")
//
// }
//
// })
