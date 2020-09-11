function loading() {
  $("#nav-placeholder").load("nav.html");
};

loading();

// var language;
// var lang = 'en';
// function getLanguage() {
// (localStorage.getItem('language') == null) ? setLanguage('en') : false;
// $.ajax({
// url:  'language/' +  localStorage.getItem('language') + '.json',
// dataType: 'json', async: false, dataType: 'json',
// success: function (lang) { language = lang } });
// }
//
// function setLanguage(lang) {
// localStorage.setItem('language', lang);
// }
//
//
// $(document).ready(function(){
//     getLanguage();
//     $('.cont_text').text(language.date);
//     });

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
}

}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.active_filter')) {
    var dropdowns = document.getElementsByClassName("content_filter");
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
  $(".active_filter").text(this.innerText + " ↓")

})


$(".menu_button").click(function(){



    $("#menu").css("display", "block")

})

var sci_name;
var prodotto;

$(".navigate").click(function(){

  sci_name = this.innerText;
  $("#sci_name").text(sci_name);
  prodotto = $(this).closest(".prodotto");
  $("#sci_text").text(prodotto.find(".text").text());
  $("#sci_produttore").text(prodotto.find(".produttore").text());
  $("#sci_versione").text(prodotto.find(".versione").text());
  $("#sci_link").text(prodotto.find(".link").text());
  $("body").css("overflow","hidden")
  $(".page2").css("left","0")

// setTimeout(
//   function(){
//     window.scroll({
//       top: 0,
//       left: 0
//     })
//   }, 200)



})

$(".navigate_back").click(function(){
  $("body").css("overflow","visible")
  $(".page2").css("left","100vw")

  })






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
