angular.module('starter.services', ['firebase'])

    .factory('User', ['$timeout', '$firebaseSimpleLogin', function ($timeout, $firebaseSimpleLogin) {
        var ref = new Firebase('https://glowing-heat-3093.firebaseapp.com/');
        var auth = $firebaseSimpleLogin(ref);
        var user = {};

        return {
            login: function (email, password, callback) {
                auth.$login('password', {
                    email: email,
                    password: password,
                    rememberMe: false
                }).then(function (res) {
                    user = res;
                    if (callback) {
                        $timeout(function () {
                            callback(res)
                        });
                    }
                }, function (err) {
                    callback(err);
                });
            },
            register: function (email, password, callback) {
                auth.$createUser(email, password).then(function (res) {
                    user = res;
                    if (callback) {
                        callback(res);
                    }
                }, function (err) {
                    callback(err);
                });
            },
            getUser: function () {
                return user;
            },
            logout: function () {
                auth.$logout();
                user = {};
            }
        }
    }]);
