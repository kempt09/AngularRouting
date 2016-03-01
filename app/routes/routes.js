app.config(function($routeProvider) {

    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'view1.html',
            controller: 'viewOneCtr'
        })
        .when('/view2', {
            templateUrl: 'view2.html',
            controller: 'viewTwoCtr'
        })
        .when('/view3', {
            templateUrl: 'view3.html',
            controller: 'viewThreeCtr'
        })
        .when('/view4', {
            templateUrl: 'view4.html',
            controller: 'viewFourCtr'
        })
        .otherwise({
            redirectTo:'view.1.html'
        });
});
