(function(window, document) {
    'use strict';

    $(document).ready(function() {
        var OWL_THEME = 'velox-theme';

        var $testimonialItems = $('.testimonials-items'),
            $testimonialQuotes = $('.testimonials-quotes');

        $testimonialItems.owlCarousel({
            items: 3,
            pagination: false,
            addClassActive: true,
            theme: OWL_THEME,
            beforeMove: function(e) {
                console.log(e);
            }
        });

        $testimonialQuotes.owlCarousel({
            singleItem: true,
            transitionStyle : 'fade',
            theme: OWL_THEME
        });

        $($testimonialItems).on('click', '.owl-item', function(e) {
            e.preventDefault();
            var number = $(this).data('owlItem');
            $testimonialQuotes.trigger('owl.goTo', number);
        });
    });

})(window, document);