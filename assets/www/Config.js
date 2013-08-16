require.config({
	baseUrl: 'Scripts',
	paths: {		
		'jquery': 'jquery-2.0.3.min',
		'sammy': 'sammy-0.7.4',	
		'knockout': 'knockout-2.3.0',
		'knockout-mapping': 'knockout-mapping',
		'iscroll': 'iscroll4',
		'swipeview':'swipeview',
		'bootstrap': 'bootstrap.min',
		'cordova' : 'cordova'		
	},

	shim: {		
	'sammy' : {
			deps: ['jquery'],
			 exports: 'sammy'
		},
	'knockout': {
			deps: ['jquery'],
			exports: 'knockout'
		},
	'cordova':{
		deps: ['jquery'],
		}
		
	},
	deps: ['jquery', 'sammy', 'knockout'],

	callback: function (jquery, sammy, ko) {
	// hack for knockout-validation, which does not support AMD loading
		window.ko = ko;

require(['Router'], function (Router) {
			var router = new Router();
			router.Start();
		});
}
	

	

});





