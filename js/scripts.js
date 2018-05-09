var isAcceptableInteger = function (number){
  var input = parseInt(number);
  console.log("input: ", input);
  if (!isNaN(input) && (input >= 1 && input <= 400)) {
    return true;
  }
  return false;

}

var pingPong = function (number){
  var output = [];
  var parsedInput = parseInt(number);
  for (var i = 1; i <= parsedInput; i++){
    if (isDivisiblebyNumber(i, 15)){
      output.push("ping pong");
    }else if (isDivisiblebyNumber(i, 5)){
      output.push("pong");
    }else if (isDivisiblebyNumber(i, 3)){
      output.push("ping");
    }else {
      output.push(i);
    }

  }
  return output;
}

var isDivisiblebyNumber = function (number, value){
  if (number % value === 0){
    return true;
  }
}



//scrolling was adapted from https://css-tricks.com/snippets/jquery/smooth-scrolling/
var smoothScroll = function (){
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
}



$(document).ready(function(){
  //smoothScroll();
  $(".secondaryContent").hide();
  $("#directions").show();

  $("a.navigation").click (function (){
    var myTarget = $(this).attr("href");
    $(".secondaryContent").hide();
    $(myTarget).fadeIn();

  });


  $("form").submit(function (event){
    var input = $("#input").val();
    $(".error").text("");
    $("ul").empty();
    if (isAcceptableInteger(input)){
      pingPong(input).forEach(function (value){
        if (value === "ping"){
          $("ul").append("<li class='ping shadow'>" + value + "</li>");
        }else if (value === "pong"){
          $("ul").append("<li class='pong shadow'>" + value + "</li>");
        }else if (value === "ping pong"){
          $("ul").append("<li class='pingPong shadow'>" + value + "</li>");
        }else{$("ul").append("<li>" + value + "</li>");}
      });
    }else {
      $(".error").hide().text("Please enter a number between 1 and 3999.").fadeIn();
    }
    $("ul li").hide();
    $("ul li").each(function(i) {
      $(this).delay(200 * i).fadeIn();
    });

    event.preventDefault();
  });

});
