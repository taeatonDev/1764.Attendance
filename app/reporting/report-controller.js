(function () {
    'use strict';

    angular.module('Attendance').controller('ReportController', ReportController);

    ReportController.$inject = ['$scope'];

    function ReportController($scope) {
        var vm = $scope;
        vm.Title = "User Report";
        vm.TotalPossibleHours = 400;
        vm.Students = getStudentData();
        vm.getAttendancePercentage = getAttPerc;
        vm.saveRow = saveRow;
        vm.gridOptions = getGridOptions();

        vm.gridOptions.onRegisterApi = function (gridApi) {
            //set gridApi on scope
            vm.gridApi = gridApi;
            gridApi.edit.on.afterCellEdit(vm, function (rowEntity, colDef, newValue, oldValue) {
                console.log('edited row id:' + rowEntity.ID + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue);
                vm.$apply();
            });
        };

        //Ui-Grid - http://ui-grid.info/docs/#/tutorial/101_intro              

        function getGridOptions() {
            return {
                enableSorting: true,
                columnDefs: [
                  //{ displayName: 'Id', name: 'ID', field:'ID', enableCellEdit: false },
                  { displayName: 'First Name', name: 'FN', field: 'FN' },
                  { displayName: 'Last Name', name: 'LN', field: 'LN' },
                  { displayName: 'Total Hours', name: 'TotalHours', field: 'TotalHours', type: 'number' },
                  { displayName: '% Attendance', name: 'PercentTotal', field: 'PercentTotal', enableCellEdit: false }
                ],
                data: vm.Students
            };
        };

        function saveRow(rowEntity) {
            console.log(rowEntity);
            //TODO: Bind Save to API
        };

        function getStudentData() {
            //TODO: Bind to API
            return [
            Student(1,'Andy', 'Eaton', 350),
            Student(2,'Ethan', 'Eaton', 200),
            Student(3,'Will', 'Eaton', 150),
            Student(4,'Rachel', 'Eaton', 399),
            Student(42,'Jason', 'Carter', 400)
            ];
        };

        function Student(ID, FName, LName, TotalHours) {
            return {
                'ID': ID,
                'FN': FName,
                'LN': LName,
                'TotalHours': TotalHours,
                'PercentTotal': getAttPerc(TotalHours)
            };
        };

        function getAttPerc(TotalHours) {
            return (TotalHours / vm.TotalPossibleHours) * 100;
        };
    }
})();