$(function(){
	"use strict";
	
	//resize	
	function onResize() {
		var stageW = $(window).width();
		var stageH = $(window).height();
		var headerH = 80;
		
		$('#main').css({
			'height':stageH
		});
	}
	$(window).on('load resize', function(){
		onResize();
	});
	onResize();
});