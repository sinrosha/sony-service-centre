

$(document).ready(function() {
  $("h1").addClass("animated bounceInLeft");
  $(window).scroll( function() {
    $("h2, li, h4").addClass("animated bounceInLeft");
  });
});
