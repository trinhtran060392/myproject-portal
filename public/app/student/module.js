define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function(ng, couchPotato) {

  'use strict';

  var module = ng.module('app.student', ['ui.router']);

  module.config(function($stateProvider, $couchPotatoProvider) {
    $stateProvider
      .state('app.student', {
        url: '/students',
        views: {
          "content@app": {
            controller: 'StudentCtrl',
            templateUrl: 'app/student/views/student-list.tpl.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'student/controllers/student-controller',
                'services/student-service',
                'student/directives/enterEvent'
                
              ])
            }
          }
        },
        data: {
          title: 'Student Management',
          requireLogin: true
        }
      })
  });

  couchPotato.configureApp(module);

  module.run(function($couchPotato) {
    module.lazy = $couchPotato;
  });

  return module;
})
