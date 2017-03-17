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

// this.POI = [
//     {
//         name: 'Station #1: Plants Along the Trail',
//         snippet: 'There are many kinds of plants that grow along the trail, some bloom only at certaintimes, others bloom all summer long'
//     }, {
//         name: 'Station #2: Oaks',
//         snippet: 'Along the trail there are many kinds of oaks. Oaks are members of the beech familyof trees, with 65 species found in North America and about 900 species world wide. '
//     }, {
//         name: 'Station #3: Shrubs',
//         snippet: 'The lower part of the forest is known as the understory or shrub layer. Plants common here include the black huckleberry, inkberry, high bush blueberry, mountain laurel, teaberry and sweet pepperbush. '
//     }
// ];
