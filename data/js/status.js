self.port.on("newStatus", function(nothing) {
	$(document).ready(function() {
		$.fn.exists = function () {
			return this.length !== 0;
		}
		var str = "textarea[name='xhpc_message']";
		if ($(str).exists()) {
			$(str).trigger('click');//Status text-area
		} else if ($("div:contains('on your mind?')").exists()) {
			$("div:contains('on your mind?')").trigger('click');//For older versions of fb
		}
	});
});