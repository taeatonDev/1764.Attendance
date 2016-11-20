(function () {
    'use strict';

    angular.module('Attendance').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {

        var vm = $scope;
        vm.Brand = '1764 Liberty Robotics';
        vm.ActiveView = 0;
        vm.ActivateView = ActivateView;
        vm.IsActive = ActiveCheck;

        function ActiveCheck(viewId) {
            if (vm.ActiveView == viewId) {
                return "active";
            }
        }


        function ActivateView(viewId){
            switch (viewId) {
                case 0: //Clock In/Out
                    vm.ActiveView = 0;
                    break;
                case 1: //Register
                    vm.ActiveView = 1;
                    break;
                case 2: //Admin
                    vm.ActiveView = 2;
                    break;
            }
        }

    }
})();