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
$("#development-p").show();
});
$("#development-p").on('click', function(){
  $("#development-p").hide();
  $("#development-img").show();
  });

  $("#product-img").on('click', function(){
    $("#product-img").hide();
  $("#product-p").show();
  });
  $("#product-p").on('click', function(){
    $("#product-p").hide();
    $("#product-img").show();
    });
});
