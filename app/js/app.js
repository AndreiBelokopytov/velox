(function(window, document) {
    'use strict';

    $(document).ready(function() {
        var OWL_THEME = 'velox-theme';

        var $testimonialItems = $('.testimonials-items'),
            $testimonialQuotes = $('.testimonials-quotes'),
            $testimonialsSlideLeft = $('.testimonials-slide-left'),
            $testimonialsSlideRight = $('.testimonials-slide-right'),
            $testimonialsOwl;

        $testimonialItems.owlCarousel({
            singleItem: true,
            pagination: false,
            addClassActive: true,
            slideSpeed : 500,
            theme: OWL_THEME,
            mouseDrag : false,
            touchDrag : false,
        });

        $testimonialQuotes.owlCarousel({
            singleItem: true,
            transitionStyle : 'fade',
            theme: OWL_THEME,
            beforeMove: function() {
                var current = this.currentItem;
                $testimonialItems.trigger('owl.goTo', current);
            }
        });

        $testimonialsOwl = $testimonialQuotes.data('owlCarousel');

        $testimonialsSlideLeft.on('click', function() {
            $testimonialsOwl.prev();
        });

        $testimonialsSlideRight.on('click', function() {
            $testimonialsOwl.next();
        });
    });

})(window, document);