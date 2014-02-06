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
              queue: false
          }
      });
    });

    // when clicking on nav link, store data-filter attribute in 'selector'
    $('#nav a').on("click", function(e){
      e.preventDefault();
      var selector = $(this).attr('data-filter');
      // filters boxes using selector variable
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear'
        }
      })
    });

    $('h1').on("click", function(){
      console.log("pssst, you're cute!");
    });
});