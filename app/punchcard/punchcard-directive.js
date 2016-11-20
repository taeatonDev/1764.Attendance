(function () {
    'use strict';
    angular.module('Attendance').directive('punchcard', Punchcard);
    function Punchcard() {
        return {
            restrict: 'AE',
            controller: 'PunchcardController',
            templateUrl: './app/punchcard/punchcard.html',
            scope: {
                model:'=ngModel'
            },
            link: function ($scope, $element, $attrs, PunchcardContoller) {}
        }
    };
})();