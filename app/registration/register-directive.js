(function () {
    'use strict';
    angular.module('Attendance').directive('register', Register);
    function Register() {
        return {
            restrict: 'AE',
            controller: 'RegisterController',
            templateUrl: './app/registration/register.html',
            scope: {
                model: '=ngModel'
            }
        };
    }
})();