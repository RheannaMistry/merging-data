/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

var AddressBook = angular.module('AddressBook', []);
    AddressBook.controller('AddressController', function($scope) {
        $scope.employees = pawneeEmployees;
        $scope.sortCol = 'lastName';
        $scope.sortBy = function(sortCol) {
            if ($scope.sortCol != sortCol) {
                $scope.sortCol = sortCol;
            }
        };
});

