var app = angular.module('myapp',[]);

app.controller('myCtrl',['$scope','$http' , function ($scope,$http) {

/*        $scope.ArtistsController = ArtistsController;
    $scope.makePayment = makePayment;

    function ArtistsController($scope, $http) {
        console.log("samfkldmklgmklfmh");
        $http.get('property/summary.json').success(function (data) {
            $scope.data = data;
        });
    }

    function makePayment() {
        console.log('makePayment');
    }

  */
    var totalAmount = 0;
    var newbill = 0;

$scope.ArtistsController = function () {
    console.log("samfkldmklgmklfmh");
    $http.get('property/summary.json').success(function (data) {
        $scope.data = data;
        for (var x = 0; x < data.length; x++) {
            totalAmount = data[x].balance;
        }

    });
}

$scope.makePayment = function () {
   var bill = $scope.bill ;
    newbill = totalAmount - bill;
    console.log(newbill);

}
}]);

/*app.controller('myCtrl', function ArtistsController($scope, $http) {
    console.log("samfkldmklgmklfmh");
    $http.get('property/summary.json').success(function (data) {
        $scope.artists = data;
        console.log($scope.artists);
    });
});*/


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


