var require = {
  waitSeconds: 0,
  paths: {
  			'jquery': '../plugin/jquery-1.11.0/dist/jquery',
        'jquery-ui': '../plugin/jquery-ui/jquery-ui',
        'bootstrap': '../plugin/bootstrap/dist/js/bootstrap',
  			'angular': '../plugin/angular/angular.min',
        'angular-animate': '../plugin/angular-animate/angular-animate.min',
        'angular-loading-bar': '../plugin/angular-loading-bar/build/loading-bar.min',
  			'angular-couch-potato': '../plugin/angular-couch-potato/dist/angular-couch-potato',
  			'angular-aria': '../plugin/angular-aria/angular-aria.min',
  			'angular-ui-router': '../plugin/angular-ui-router/release/angular-ui-router.min',
  			'domReady': '../plugin/requirejs-domready/domReady',
  			// app js file includes
        'appConfig': 'app.config',
        'modules-includes': 'includes'
  },
  shim: {
  	'angular': {'exports': 'angular', deps: ['jquery']},

  			'bootstrap': { deps: ['jquery']},
  			'angular-aria': {deps: ['angular']},
        'angular-animate': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'angular-loading-bar': {deps: ['angular']},
        'angular-couch-potato': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] }
  },
  priority: [
    'jquery',
    'bootstrap',
    'angular'
  ]
};
