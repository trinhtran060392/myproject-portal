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
                'student/directives/enterEvent',
                'student/directives/student-list'
                
              ])
            }
          }
        },
        data: {
          title: 'Student Management',
          requireLogin: true
        }
      }).state('app.boys', {
        url: '/boys',
        views: {
          "content@app": {
            controller: 'BoysCtrl',
            templateUrl: 'app/student/views/boys-list.tpl.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'student/controllers/boys-controller',
                'services/student-service',
                'student/directives/student-list'
                
              ])
            }
          }
        },
        data: {
          title: 'Boys Management',
          requireLogin: true
        }
      }).state('app.girls', {
        url: '/girls',
        views: {
          "content@app": {
            controller: 'GirlsCtrl',
            templateUrl: 'app/student/views/girls-list.tpl.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'student/controllers/girls-controller',
                'services/student-service',
                'student/directives/student-list'
                
              ])
            }
          }
        },
        data: {
          title: 'Girls Management',
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
