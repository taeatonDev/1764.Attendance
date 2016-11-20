(function () {
    'use strict';
    angular.module('Attendance').directive('report', Report);
    function Report() {
        return {
            restrict: 'AE',
            controller: 'ReportController',
            templateUrl: './app/reporting/report.html',
            scope: {
                model: '=ngModel'
            },
            link: function ($scope, $element, $attrs, ReportController) { }
        }
    };
})();