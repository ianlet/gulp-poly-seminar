(function(document) {
    'use strict';

    var app = document.querySelector('#app');
    app.target = document.body;

    window.addEventListener('WebComponentsReady', function() {
    });

    app.addEventListener('dom-change', function() {
    });

    app.next = function () {
        app.entryAnimation = 'slide-from-up-animation';
        app.exitAnimation = 'slide-down-animation';

        page(app.nextPage);
    };

    app.previous = function () {
        app.entryAnimation = 'slide-from-down-animation';
        app.exitAnimation = 'slide-up-animation';

        page(app.previousPage);
    };
})(document);
