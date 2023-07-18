$(function(){
	$("#board li").click(function(){
		$(this).children("div").slideToggle()
		$(this).toggleClass("on").siblings()
	});
});