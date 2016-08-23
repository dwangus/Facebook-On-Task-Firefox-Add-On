self.port.on("newStatus", function(nothing) {
	$(document).ready(function() {
		$.fn.exists = function () {
			return this.length !== 0;
		}
		//var str = "textarea[name='xhpc_message']";
		var str = "div#feedx_container";
		if ($(str).exists()) {
			document.getElementById("feedx_container").click();//Apparently jQuery just doesn't always work with Facebook's front-end
		} else if ($("div:contains('on your mind?')").exists()) {
			$("div:contains('on your mind?')").trigger('click');//For older versions of fb
		}
	});
});