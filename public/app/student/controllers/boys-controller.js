define(['student/module'], function (module){
	'use strict';
	module.registerController('BoysCtrl', ['$scope', 'StudentService', function ($scope, StudentService) {
	
	
	StudentService.boys(function(data, status) {
		$scope.students = data;
	});

}])
})
