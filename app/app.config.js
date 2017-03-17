angular.
    module('elkTrail').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/poi', {
                    template: '<poi-list></poi-list>'
                }).
                when('/poi/:poiId', {
                    template: '<poi-detail></poi-detail>'
                }).
                otherwise('/poi');
        }
]);
