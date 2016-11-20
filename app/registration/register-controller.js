(function () {
    'use strict';

    angular.module('Attendance').controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope'];

    function RegisterController($scope) {
        var vm = $scope;
        vm.Title = "Register";
        vm.Submit = Submit;

        function Submit() {
            console.log(vm.FName + ' ' + vm.LName + ' ' + vm.Pin);
            if (vm.FName && vm.LName && vm.Pin) {
                //pass to API.
            }
        }

    }
})();