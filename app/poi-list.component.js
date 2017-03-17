'use strict'

// Register `` component, along with its associated controller and template
angular.
    module('elkTrail').
    component('poiList', {
    template:
        '<h1> {{$ctrl.title}}</h1>' +
        '<ul>' +
            '<li ng-repeat="POIs in $ctrl.POI">' +
                '<span>{{POIs.name}}</span>' +
                '<p>{{POIs.snippet}}</p>' +
            '</li>' +
        '</ul>',
    controller: function elkTrailController() {
        this.title = 'Welcome to Elk Trail Interactive Guide';
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
