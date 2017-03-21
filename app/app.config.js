angular.
    module('elkTrail').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
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
