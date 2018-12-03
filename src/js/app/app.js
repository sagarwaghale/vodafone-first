var app = angular.module('myapp',['pascalprecht.translate']);

/*
app.config(['translateProvider', function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({



            prefix: 'property/local-',
            suffix: '.json'

    });
    $translateProvider.preferredLanguage('en');
}]);
*/

/*(function () {

    angular.module('myapp').controller('myCtrl', MyController);

    MyController.$inject =['$scope'];

    function MyController($scope) {
        $scope.welcometoVodafone ="Welcome To Vodafone";
    }
});*/
/*app.controller('Ctrl', [ '$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
}]);*/

app.controller('myCtrl', function ArtistsController($scope, $http) {
    console.log("samfkldmklgmklfmh");
    $http.get('property/summary.json').success(function (data) {
        $scope.artists = data;
        console.log($scope.artists);
    });
});
