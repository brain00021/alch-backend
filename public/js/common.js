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
        var $seocndNav = $(this).find(".icon-plus").hasClass("icon-minus"),
            $secondNav2 =  $(this).next('.second-nav-bar').length;
        if(!$seocndNav && $secondNav2==1){
            $(this).find(".icon-plus").addClass('icon-minus');
            $(this).siblings().find(".icon-plus").removeClass('icon-minus');
            $(this).next('.second-nav-bar').stop(true,false).slideDown().siblings('.second-nav-bar').slideUp();
            console.log($seocndNav, $secondNav2);
        }else{
            $(this).find(".icon-plus").removeClass('icon-minus');
            $(this).siblings('.second-nav-bar').slideUp(function(){
                 $(this).siblings().find(".icon-plus").removeClass('icon-minus');
            });
            console.log($seocndNav, $secondNav2);
        }
    });
    $("#profile-detail").on('click',function(){
        $(".drop-wrapper").toggle();
    });

  });

//mob-header-nav
function openNav() {
    $('#alch-back').css({left:0});
    $(".js-container-wrapper,.header-nav-wrapper").css({ left: 250 });
    $(".mob-header-bg").fadeIn(); 
}

function closeNav() {
    $("#alch-back").css({left:-250});
    $(".js-container-wrapper,.header-nav-wrapper").css({ left: 0 });
    $(".mob-header-bg").fadeOut(); 
}

