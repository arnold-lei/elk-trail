'use strict'

// Register `` component, along with its associated controller and template
angular.
    module('poiList').
    component('poiList', {
    templateUrl: 'poi-list/poi-list.template.html',
    controller: function elkTrailController() {
        this.POI = [
            {
                name: 'POI 1',
                snippet: 'What wonderful birds!'
            }, {
                name: 'POI 2',
                snippet: 'Such beautiful trees!'
            }, {
                name: 'POI 3',
                snippet: 'Amazing flowers!'
            }
        ];
    }
});
