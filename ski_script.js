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



$(".menu_button").click(function(){

document.getElementById("menu").classList.toggle("show");
  // if ($(".menu").css("display") == 'none') {
  //   $(".menu").css("display", "block")
  // } else if ($(".menu").css("display") == 'block') {
  //   $(".menu").css("display", "none")
  // }
})
