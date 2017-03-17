angular.
    module('poiDetail').
    component('poiDetail', {
        templateUrl: 'poi-detail/poi-detail.template.html',
        controller: ['$http', '$routeParams',
            function PoiDetailController($http, $routeParams) {
                var self = this;

                $http.get('POIs/' + $routeParams.poiId+ '.json').then(function(response){
                    self.poi = response.data;
                })
            }
    ]
});
