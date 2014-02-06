var app = app || {};



$(document).ready(function(){
    var $container = $('#content');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });

    $('h1').on("click", function(){
      console.log('yay');
    });
});