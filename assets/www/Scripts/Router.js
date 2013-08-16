define(['jquery', 'sammy', 'knockout','cordova' ], function ($, Sammy, ko) {
	
	return function () {

		var self = this;
		var sammy = new Sammy();
		
		//---------------------------------------------------------------------------------------
		//-- properties
		//---------------------------------------------------------------------------------------
		self.TemplateCacheEnabled = false;
		self.MainContainer = $('#MainContainer');
		
		self.Wrapper= $('#wrapper');
		
		
		self.CurrentViewModel = null;

		//---------------------------------------------------------------------
		// functions
		//---------------------------------------------------------------------
		self.Start = function () {
			sammy.run('#/');
		};

		self.UpdateContainer = function (context, viewmodel, container, url) {
			context.load(url, { cache: self.TemplateCacheEnabled })
				.then(function (data) {
				context.log(data);
					container.html(data);
					if (container[0] != null) {
						ko.cleanNode(container[0]);
						ko.applyBindings(viewmodel, container[0]);
					};
				});
		};

		//---------------------------------------------------------------------------------------
		//-- Start
		//---------------------------------------------------------------------------------------
		sammy.get('#/', function (context) {

			context.log('Start');		
			

			require(['../ViewModels/Test'], function (ViewModel) {
				var viewmodel = new ViewModel();
			
			
				context.load(null, { cache: self.TemplateCacheEnabled })
				.then(function (data) {
				context.log(data);					
					if (container[0] != null) {
						ko.cleanNode(container[0]);
						ko.applyBindings(viewmodel, container[0]);
					};
				});			
			
			});
			
		
		});

	


	};

});





