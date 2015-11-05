define(['student/module'], function (module){
	'use strict';
	module.registerController('GirlsCtrl', ['$scope', 'StudentService', function ($scope, StudentService) {
	
	
	StudentService.girls(function(data, status) {
		$scope.students = data;
	});

}])
})
