angular.module('angular-unfiltered', [])

        .controller('GreetingCtrl', function ($scope, $http) {
            $http.get('/resources/greeting').then(function (response) {
                $scope.greetingEntity = response.data;
            })
        });