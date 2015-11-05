define(['student/module'], function (module) {
	'use strict';
	module.registerDirective('studentList', ['StudentService', function (StudentService) {

		return {
			
			restrict: 'EA',
			scope: {
				students: '='
			},
			templateUrl: 'app/student/directives/list-tpl.html',
			link: function(scope, element, attr) {
				
				
				element.on('keypress', function (e) {
					if (e.which == 13) {
						console.log(scope.name);
						StudentService.create(scope.name, function (data, status){
							if (status === 200) {
								scope.students.push(data);
								scope.name = '';
							}
						});
					}
				});
			}
		}
	}])
})