$(function() {
  $("#nav-placeholder").load("nav.html");
});

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
