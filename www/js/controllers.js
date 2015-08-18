angular.module('starter.controllers', [])

    .controller('AccountCtrl', ['$scope', '$ionicPopup', 'User', function ($scope, $ionicPopup, User) {
        $scope.user = User.getUser();

        $scope.login = function () {
            User.login($scope.user.email, $scope.user.password, function (res) {
                if (res.id) {
                    $scope.user = res;
                } else {
                    $ionicPopup.alert({
                        title: 'Login error!',
                        template: res.message
                    });
                }
            });
        };

        $scope.register = function () {
            User.register($scope.user.email, $scope.user.password, function (res) {
                if (res.id) {
                    $scope.user = res;
                } else {
                    $ionicPopup.alert({
                        title: 'Register error!',
                        template: res.message
                    });
                }
            })
        };

        $scope.logout = function () {
            user.logout();
            $scope.user = {};
        }
    }])


    .controller('UserCtrl', function ($scope) {

    });




