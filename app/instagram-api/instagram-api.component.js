angular.
    module('instagramApi').
    component('instagramApi', {
        templateUrl: 'instagram-api/instagram-api.template.html',
        controller: ['$http', '$routeParams',
            function instagramApiController($http, $routeParams) {
                var self = this;

                $http({
                    method: 'JSONP',
                    url: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=1a8e3b31ee72420bb0bb3d2472742bef'
                }).then(function(response){
                    self.data = response.data;
                })
            }
    ]
});
