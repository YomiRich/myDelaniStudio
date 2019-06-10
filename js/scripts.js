$(document).ready(function(){
  $("#design-img").on('click', function(){
    $("#design-img").hide();
  $("#design-p").show();
});
  $("#design-p").on('click', function(){
    $("#design-p").hide();
    $("#design-img").show();
  });

$("#development-img").on('click', function(){
  $("#development-img").hide();
$("#devolopment-p").show();
});
$("#development-p").on('click', function(){
  $("#development-p").hide();
  $("#development-img").show();
  });
});
