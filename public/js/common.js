$(function(){
    var $pieChart = $('.pie-chart'),
      percent = parseInt($pieChart.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $pieChart.addClass('gt-50');
    }
    $('.pc-progress-fill').css('transform','rotate('+ deg +'deg)');
    // $('.pc-percent span').html(percent+'%');
  });