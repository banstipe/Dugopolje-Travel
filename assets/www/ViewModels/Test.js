define(['jquery', 'knockout','./VMBase','knockout-mapping','swipeview','cordova'], function ($, ko,VMBase) {

	return function () {
		var self = this;
		VMBase.call(self);

		
		self.Test=ko.observable("Stipe Test");
		self.slides=ko.observable();

		//---------------------------------------------------------------------
		// functions
		//---------------------------------------------------------------------
		self.GetList = function() {
			alert("Usa");

$.ajax({ url:'http://89.201.175.110/~natjecaj/ArticesJson.php?callback=?', success:function(data){ 
alert("$('#BottomLeftContainer').html");
$('#BottomLeftContainer').html("data"); } });












		$.ajax({
	
					url: "http://89.201.175.110/~natjecaj/ArticesJson.php?callback=?",

					dataType: "jsonp",

					contentType: 'application/json',

					async: false,

					type: "POST",	
				
	beforeSend: function () {

					},

					error: function (xhr, status, error) {

						alert(xhr+" "+ status+" "+ error);

					},

					success: function (data) {

					alert(data);
	
				   	console.log(data);

					}

				});
	


 

		};
		self.GetList();


		
	
		var	carousel,

	el,

	i,
	
	page,

	slides = [
		
	'<strong>Swipe</strong> to know more &gt;&gt;&gt;<br>Or scroll down for <em>Lorem Ipsum</em>',
	
	'1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
	
	'2. A robot must obey the orders given to it by human beings, except where such orders would conflict with the First Law.',
	
	'3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.'
	];


	carousel = new SwipeView('#wrapper', {
	numberOfPages: slides.length,
	hastyPageFlip: true
});

	
// Load initial data
for (i=0; i<3; i++) {

	page = i==0 ? slides.length-1 : i-1;


	el = document.createElement('span');

	el.innerHTML = slides[page];
	
	carousel.masterPages[i].appendChild(el)
}

carousel.onFlip(function () {
	
	var el,
	
	upcoming,

		i;

	
		for (i=0; i<3; i++) 
		{

		upcoming = carousel.masterPages[i].dataset.upcomingPageIndex;

	
		if (upcoming != carousel.masterPages[i].dataset.pageIndex) {
	
		el = carousel.masterPages[i].querySelector('span');

		el.innerHTML = slides[upcoming];
		
		}
	
}
});



	




			
		};


});