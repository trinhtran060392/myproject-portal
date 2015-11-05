define(['student/module'], function (module){
	'use strict';
	module.registerController('StudentCtrl', ['$scope', 'StudentService', function ($scope, StudentService) {
	
	
	StudentService.list(function(data, status) {
		$scope.students = data;

	});

}])
})
