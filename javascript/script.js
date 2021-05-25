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


//Ics si Zero >
$(document).ready(function() {
    function size() {
        let width = $('.zeroIcs > div div').css('width')   
        let height = document.querySelectorAll('.zeroIcs > div div')     
        console.log(width)
        for(let e = 0; e < height.length; e++) {
            height[e].style.height = width  
            height[e].style.lineHeight = width          
        }        
    }
    size()    
    $(window).on('resize', function() {
        size()
    })
    $('.XZ0').hide();$('.XZ1').hide();$('.XZ2').hide();
    $('.XZ3').hide();$('.XZ4').hide();$('.XZ5').hide();
    $('.XZ6').hide();$('.XZ7').hide();
    $('.winsX').hide();$('.winsO').hide();$('.tryAgain').hide();
    let ics = $('.zeroIcs > div div');   
    let checkX = false;
    let checkO = false;    
    
    $('.zeroIcs').on('click', function() {
        if(checkX == true) {
            $('.winsX').show();
            $('.tryAgain').hide();
        } else if(checkO == true) {
            $('.winsO').show();
            $('.tryAgain').hide();
        } else {
            $('.winsX').hide();$('.winsO').hide();
        }        
    });
    $('.zeroIcs button').on('click', function() {
        checkX = false;
        checkO = false;
        $('.zeroIcs > div div').html('');
        $('.XZ0').hide();$('.XZ1').hide();$('.XZ2').hide();
        $('.XZ3').hide();$('.XZ4').hide();$('.XZ5').hide();
        $('.XZ6').hide();$('.XZ7').hide();
        $('.tryAgain').hide();
    });
    $('.zeroIcs > div div').on('click', function() {
        let countEmpty = $('.zeroIcs > div div:empty').length
        if(countEmpty % 2 == 0 && $(this).html().length < 1) {
            $(this).html('<i class="fas fa-pizza-slice"></i>')
        } else if(countEmpty % 2 != 0 && $(this).html().length < 1) {
            $(this).html('<i class="fas fa-drumstick-bite"></i>')                
        }  

        let divArray = [];
        for (let e = 0; e < ics.length; e++) {
            divArray.push(ics[e].innerHTML.length)
            const arrSum = (accum, value) => accum + value
            if(divArray.reduce(arrSum) > 318) {
                $('.tryAgain').show();           
            }         
        }

        let box0 = ics[0].innerHTML; let box1 = ics[1].innerHTML; 
        let box2 = ics[2].innerHTML; let box3 = ics[3].innerHTML; 
        let box4 = ics[4].innerHTML; let box5 = ics[5].innerHTML; 
        let box6 = ics[6].innerHTML; let box7 = ics[7].innerHTML; let box8 = ics[8].innerHTML;
        if (box0 == '<i class="fas fa-drumstick-bite"></i>' && box1 == '<i class="fas fa-drumstick-bite"></i>' && box2 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ0').show(); checkX = true;
        } else if (box0 == '<i class="fas fa-pizza-slice"></i>' && box1 == '<i class="fas fa-pizza-slice"></i>' && box2 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ0').show(); checkO = true;
        }
        if (box3 == '<i class="fas fa-drumstick-bite"></i>' && box4 == '<i class="fas fa-drumstick-bite"></i>' && box5 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ1').show(); checkX = true;
        } else if (box3 == '<i class="fas fa-pizza-slice"></i>' && box4 == '<i class="fas fa-pizza-slice"></i>' && box5 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ1').show(); checkO = true;
        }

        if (box6 == '<i class="fas fa-drumstick-bite"></i>' && box7 == '<i class="fas fa-drumstick-bite"></i>' && box8 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ2').show(); checkX = true;
        } else if (box6 == '<i class="fas fa-pizza-slice"></i>' && box7 == '<i class="fas fa-pizza-slice"></i>' && box8 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ2').show(); checkO = true;
        }

        if(box0 == '<i class="fas fa-drumstick-bite"></i>' && box3 == '<i class="fas fa-drumstick-bite"></i>' && box6 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ3').show(); checkX = true;
        } else if (box0 == '<i class="fas fa-pizza-slice"></i>' && box3 == '<i class="fas fa-pizza-slice"></i>' && box6 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ3').show(); checkO = true;
        }

        if(box1 == '<i class="fas fa-drumstick-bite"></i>' && box4 == '<i class="fas fa-drumstick-bite"></i>' && box7 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ4').show(); checkX = true;
        } else if (box1 == '<i class="fas fa-pizza-slice"></i>' && box4 == '<i class="fas fa-pizza-slice"></i>' && box7 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ4').show(); checkO = true;
        }
        if(box2 == '<i class="fas fa-drumstick-bite"></i>' && box5 == '<i class="fas fa-drumstick-bite"></i>' && box8 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ5').show(); checkX = true;
        } else if (box2 == '<i class="fas fa-pizza-slice"></i>' && box5 == '<i class="fas fa-pizza-slice"></i>' && box8 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ5').show(); checkO = true;
        }
        if(box0 == '<i class="fas fa-drumstick-bite"></i>' && box4 == '<i class="fas fa-drumstick-bite"></i>' && box8 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ6').show(); checkX = true;
        } else if (box0 == '<i class="fas fa-pizza-slice"></i>' && box4 == '<i class="fas fa-pizza-slice"></i>' && box8 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ6').show(); checkO = true;
        }
        if(box2 == '<i class="fas fa-drumstick-bite"></i>' && box4 == '<i class="fas fa-drumstick-bite"></i>' && box6 == '<i class="fas fa-drumstick-bite"></i>') {
            $('.XZ7').show(); checkX = true;
        } else if (box2 == '<i class="fas fa-pizza-slice"></i>' && box4 == '<i class="fas fa-pizza-slice"></i>' && box6 == '<i class="fas fa-pizza-slice"></i>') {
            $('.XZ7').show(); checkO = true;
        }
    });
});
//< Ics si Zero
//#endregion BUTTON SCROLL