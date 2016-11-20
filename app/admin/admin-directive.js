(function () {
    'use strict';
    angular.module('Attendance').directive('admin', Admin);
    function Admin() {
        return {
            restrict: 'AE',
            controller: 'AdminController',
            templateUrl: './app/admin/admin.html',
            scope: {
                model: '=ngModel'
            },
            link: function ($scope, $element, $attrs, AdminController) {}
        }
    };
})();