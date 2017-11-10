$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  animateOut: "fadeOut"
});

var owl = $(".owl-carousel");
owl.owlCarousel();
// Go to the next item
$(".customNextBtn").click(function() {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".customPrevBtn").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});

function animateImages() {
  // IF the user has scrolled down enough to see the images, add the classes
  // scrollTop is how far the user has scrolled down, save that
  var userScrolled = $(window).scrollTop();
  // offset().top represents how far down the entire webpage the element sits. So the distance from the top of .aboutUs to the top of the webpack
  var topOfAboutUs = $(".aboutUs").offset().top;
  // $(".right, .left, .down").css("opacity", "0");
  if (userScrolled > topOfAboutUs) {
    // $(".right, .left, .down").css("opacity", "1");
    $(".right").addClass("slideInRight");
    $(".left").addClass("slideInLeft");
    $(".down").addClass("slideInDown");
  }
}

// BACK TO TOP

function showBackToTop() {
  var scrolledDown = $(window).scrollTop();
  if (scrolledDown > $(window).height) {
    $(".back-to-top").css("display", "block");
  } else {
    $(".back-to-top").css("display", "none");
  }
}

$(window).on("scroll", showBackToTop);
$(window).on("scroll", animateImages);
