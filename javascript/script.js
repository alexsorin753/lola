//#region BUTTON SCROLL
$('#up-button').hide();

//Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#up-button').show().fadeIn();
    } else {
        $('#up-button').fadeOut().hide();
    }
});

$("#up-button").click(function (e) {
  //1 second of animation time
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").animate({scrollTop: 0}, 1000);
});

//#endregion BUTTON SCROLL