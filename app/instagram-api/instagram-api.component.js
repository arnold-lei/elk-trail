angular.
    module('instagramApi').
    component('instagramApi', {
        templateUrl: 'instagram-api/instagram-api.template.html',
        controller: ['$http', '$routeParams', '$sce',
            function instagramApiController($http, $routeParams, $sce) {
                var self = this;

                $http({
                    method: 'GET',
                        url: 'https://api.instagram.com/oauth/authorize/?client_id=1a8e3b31ee72420bb0bb3d2472742bef&redirect_uri=https://elephantswamptrail.com/#!/social-media&response_type=code'
                }).then(function(response){
                    self.data = response.data;
                });

                self.trustSrc = return $sce.trustAsResourceUrl(src)
            }
    ]
});
