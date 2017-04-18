var ResponsiveHelper = {
	
	windowWidth : function() {	
		return $(window).width();
	},
	
	mobileWidth: 639,

	toggleNavOnClick: function() {
		
		$('#main-menu').click(function(){
			$('nav').slideToggle();
		});
	},
	
	activateMobileMenu: function(){
		
		if(ResponsiveHelper.windowWidth() <= ResponsiveHelper.mobileWidth) {
			ResponsiveHelper.toggleNavOnClick();
		}
	}
}

$(document).ready(function() {
	ResponsiveHelper.activateMobileMenu();
});

$(window).resize(function() {
	ResponsiveHelper.activateMobileMenu();
});