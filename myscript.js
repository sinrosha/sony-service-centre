

$(document).ready(function() {
  $("h1").addClass("animated bounceIn");
  $(window).scroll( function() {
    $("h2, h4").addClass("animated bounceInLeft");
  });
});
