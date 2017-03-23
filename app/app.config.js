angular.
    module('elkTrail').
    config(['$locationProvider', '$routeProvider', '$sceProvider',
        function config($locationProvider, $routeProvider, $sceProivder ) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/', {
                    template: '<home></home>'
                }).
                when('/poi', {
                    template: '<poi-list></poi-list>'
                }).
                when('/poi/:poiId', {
                    template: '<poi-detail></poi-detail>'
                }).
                when('/contact-us', {
                    template: '<contact-us></contact-us>'
                }).
                when('/social-media', {
                    template: '<instagram-api></instagram-api>'
                }).
                otherwise('/poi');
        }
]);
