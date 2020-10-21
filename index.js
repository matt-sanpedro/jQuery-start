$("h1").addClass("big-font");
// $("button").text("Don't click me");
// console.log($("h1").css("color"));

// add attribute
$("a").attr("href", "https://www.yahoo.com");

// event listener
$("h1").click(function () {
  $("h1").css("color", "blue");
});

// // event listener will apply to all
// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// event listener for keypress
$(document).keypress(function (event) {
  // console.log(event.key);
  $("h1").text(event.key);
});

// "on" method can use any javascript method
$("h1").on("mouseover", function () {
    $("h1").css("color", "red");
});

// website animations
$("button").on("click", function () {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();

    // can only add css that have a numeric value
    $("h1").animate({opacity: 0.5}).animate({margin: 20});
    // $("h1").animate({margin: 20});


});
