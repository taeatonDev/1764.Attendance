(function () {
    'use strict';

    angular.module('Attendance').controller('PunchcardController', PunchcardController);

    PunchcardController.$inject = ['$scope', 'AttendanceApi'];

    function PunchcardController($scope, AttendanceApi) {
        var vm = $scope;
        vm.Title = "Clock In/Out";
        vm.Submit = Submit;

        function Submit() {
            if (vm.Pin) {
                console.log(vm.Pin);
                //ToDo: Callout to API
            }
        }


    };
})();