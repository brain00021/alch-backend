$(function(){
    var $pieChart = $('.pie-chart'),
      percent = parseInt($pieChart.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $pieChart.addClass('gt-50');
    }
    $('.pc-progress-fill').css('transform','rotate('+ deg +'deg)');
    // $('.pc-percent span').html(percent+'%');

    // for 手機按鈕
    $("#mob-nav-icon").on('click',function(){
        let navOpen = $(this).hasClass('open');
        if(!navOpen ){
            openNav();
            $(this).addClass("open");
        }else{
            closeNav();
            $(this).removeClass("open");
        }
    });
    $("#alch-back a").on('click',function(){
        let $seocndNav = $(this).next(".second-nav-bar");
        if($seocndNav){
            $(this).next('.second-nav-bar').stop(true,false).slideToggle().siblings('.second-nav-bar').slideUp();
        }else{
            $(this).siblings('.second-nav-bar').slideUp();
            console.log("test");
        }
        
       
    });

  });

//mob-header-nav
function openNav() {
    $('#alch-back').css({left:0});
    $(".js-container-wrapper,#mob-nav-icon").css({left: 250});
    $(".mob-header-bg").fadeIn(); 
}

function closeNav() {
    $("#alch-back").css({left:-250});
    $(".js-container-wrapper,#mob-nav-icon").css({left: 0 });
    $(".mob-header-bg").fadeOut(); 
}

