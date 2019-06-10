
var whatWeDo = ['design','development','product'];
   whatWeDo.forEach(function(what){
       $("#"+what).click(function (){
           $("#"+what).hide();
           $("#"+what+".ps").show();
       });
       $("#"+what+".ps").click(function (){
           $("#"+what+".ps").hide();
           $("#"+what).show();
       });
   });
