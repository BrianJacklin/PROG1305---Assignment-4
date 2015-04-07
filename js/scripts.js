
$(document).ready(function(){

  $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content"
    });

  $("#accordion h3").click(function(){
    $(".plus").removeClass("open");
    $(this).children(".plus").addClass("open");
  });

  if($("#accordion h3").hasClass("ui-active-state")){
    $(this).children(".plus").addClass("open");
  }else{
    $(this).children(".plus").removeClass("open");
  }

});
