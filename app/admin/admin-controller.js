(function () {
    'use strict';

    angular.module('Attendance').controller('AdminController', AdminController);

    AdminController.$inject = ['$scope'];

    function AdminController($scope) {
        var vm = $scope;
        vm.Title = "Admin Login";
        vm.Submit = Submit;
        vm.Authenticated = false;
        vm.APin = { Pin: '' };

        function Submit() {
            console.log(vm.APin.Pin);
            if (vm.APin.Pin) {
                //pass to API.
                vm.Authenticated = true;
            }
        }

    }
})();