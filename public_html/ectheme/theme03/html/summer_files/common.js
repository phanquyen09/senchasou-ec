$(function(){
	"use strict";
	
	//menu
	var flag     = false;
	var $menu    = $('#gnav');
	var $cover    = $('#gnav-cover');
	var $menuBtn = $('#menu-btn');
	$menuBtn.on('click', function() {	
		if (!flag) {
			$("#menu-btn-icon").toggleClass("close");
			$menu.fadeIn(200, "easeInOutSine", function() {
				flag = true;
			});
			$cover.fadeIn(200, "easeInOutSine", function() {
				flag = true;
			});
		} else {
			$("#menu-btn-icon").removeClass("close");
			$menu.fadeOut(200, "easeInOutSine", function() {
				flag = false;
			});
			$cover.fadeOut(200, "easeInOutSine", function() {
				flag = false;
			});
		}
	});
	
	$("#gnav a[href^=#]").click(function() {
		var href = $(this).attr("href"),
		target = $(href === "#" || href === "" ? 'html' : href);
		target.velocity("scroll", { duration: 800,offset:0, easing: "easeInOutQuad" });
		
		$("#menu-btn-icon").removeClass("close");
		$menu.fadeOut(200, "easeInOutSine");
		$cover.fadeOut(200, "easeInOutSine", function() {
			flag = false;
		});
		return false;
	});
	
	
	//resize	
	function onResize() {
		var containerH = $('#container').height();
		
		$('#gnav-cover').css({
			'height':containerH - 80
		});
	}
	$(window).on('load resize', function(){
		onResize();
	});
	onResize();
	
	
	//scroll
	$('a[href^=#]').click(function () {
		var href = $(this).attr("href"),
		target = $(href === "#" || href === "" ? 'html' : href);
		target.velocity("scroll", { duration: 800,offset:0, easing: "easeInOutQuad" });
		return false;
	});
});