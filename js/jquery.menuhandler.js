$(function(){
	var $navtoggle = $('.nav_toggle');
	var $navcontainer = $('.nav_container');
	var $burgerParent = $('.burger_container');
	var $burgerLayers = $('.burger_container').find('span');
	var $burgerTop = $('.bun_top');
	var $burgerCenter = $('.bun_center');
	var $burgerBottom = $('.bun_bottom');
	$navtoggle.on('click', function(){
		$('.nav_container').toggleClass('nav_reveal');
		$burgerLayers.toggleClass('icon_reveal');
		$burgerTop.toggleClass('bun_lift');
		$burgerCenter.toggleClass('bun_disappear');
		$burgerBottom.toggleClass('bun_descend');
	})
})