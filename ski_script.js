// $(function() {
//   $("#nav-placeholder").load("nav.html");
// });


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

$(".botton").click(function(){
  if ($(".menu").css("display") == 'block') {
    $(".menu").css("display", "none")
  }else if($(".menu").css("display") == 'none') {
    $(".menu").css("display", "block")
  }
})

$(window).resize(function() {
if ($(window).width() > 375) {

    $(".menu").css("display", "none")

}
})
