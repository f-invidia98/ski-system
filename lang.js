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
