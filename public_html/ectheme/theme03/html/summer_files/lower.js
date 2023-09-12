$(function(){
	"use strict";
	
	//resize	
	function onResize() {
		var stageW = $(window).width();
		var stageH = $(window).height();
		
		if(stageW>980){
			$('#main').css({
				'height':stageH - 80
			});
		}else if(stageW<=980&&stageW>480){
			$('#main').css({
				'height':stageH/1.2 - 80
			});
		}else{
			$('#main').css({
				'height':stageH/1.5 - 80
			});
		}
	}
	$(window).on('load resize', function(){
		onResize();
	});
	onResize();
	
	//matchHeight
	$('#products li').matchHeight();
});