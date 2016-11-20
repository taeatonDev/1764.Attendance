(function () {
    'use strict';

    angular.module('Attendance').factory('AttendanceApi', AttendanceApi);

    AttendanceApi.$inject = ['$resource'];

    function AttendanceApi($resource) {
        //TODO: Sit down with someone and get the PHP Api end points.
        return {};
        //return $resource('api/??/:Id', null, {
        //    'methodName': { method: 'GET', url: 'api/????', isArray: false} //isArray if the response is a collection
        //});
    };

})();