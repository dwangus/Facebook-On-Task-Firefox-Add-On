$(document).ready(function() {
	$.fn.exists = function () {
		return this.length !== 0;
	}
    if ($('*:contains("Home")').exists()) {//Check if user is logged in by telling if there's a "Home" button present, essentially
		self.port.emit("fbArrived", window.location.href);
	}
});