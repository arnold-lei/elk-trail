'use strict'

// Register `` component, along with its associated controller and template
angular.
    module('poiList').
    component('poiList', {
    templateUrl: 'poi-list/poi-list.template.html',
    controller: ['$http',
        function elkTrailController($http) {
            var self = this;
            $http.get('POIs/pois.json').then(function(response){
                self.POI = response.data;
            });
        }
    ]
});
