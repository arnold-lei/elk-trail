angular.
    module('instagramApi').
    component('instagramApi', {
        templateUrl: 'instagram-api/instagram-api.template.html',
        controller: ['$http', '$routeParams',
            function instagramApiController($http, $routeParams) {
                var self = this;

                $http.get('POIs/' + $routeParams.poiId+ '.json').then(function(response){
                    self.poi = response.data;
                })
            }
    ]
});
