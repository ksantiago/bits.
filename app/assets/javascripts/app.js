var app = app || {};



$(document).ready(function(){
    var $container = $('#content');

    // the imagesLoaded function allows you to wait for all images to load before loading isotope so that elements don't overlap
    $container.imagesLoaded(function() {
      // loads isotope into container
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false,
          }
      });
    });

    $('#nav a').on("click", function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      })
    });

    $('h1').on("click", function(){
      console.log("pssst, you're cute!");
    });
});