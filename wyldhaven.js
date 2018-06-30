var WYLD = (function($, WYLD) {

$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {

            });
        }
    });
});



var setupValues = function() {
  scrollArrow = document.querySelector('.arrow');
  scrollCopy = document.querySelector('.scroll');
};

var animateIntro = function() {
  $(".scroll").delay(35500).animate({
        opacity: .6
    }, 3000, function() {
        $(".arrow").animate({
            opacity: .3
        }, 1000);
    });

};


var init = function() {
  setupValues();
  animateIntro();
};



WYLD.scrolling = {
        init: init
    };

    return WYLD;

}($, WYLD || {}));
