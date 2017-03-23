angular.
    module('poiDetail').
    component('poiDetail', {
        templateUrl: 'poi-detail/poi-detail.template.html',
        controller: ['$http', '$routeParams', '$sce',
            function PoiDetailController($http, $routeParams, $sce) {
                var self = this;

                $http.get('POIs/' + $routeParams.poiId+ '.json').then(function(response){
                    self.POI = response.data;
                    self.renderHtml = function(string){
                        return $sce.trustAsHtml(string)
                    }
                })
            }
    ]
});
