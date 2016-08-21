$(document).ready(function() {
	$.fn.exists = function () {
		return this.length !== 0;
	}
    if ($('*:contains("Home")').exists()) {//Check if user is logged in by telling if there's a "Home" button present, essentially
		self.port.emit("fbArrived", window.location.href);
	}
	//Check if user clicks on "Home" button
	//That's honestly so strange... it looks like Facebook, somehow, updates the window's url and changes the page, but hash-changes
	//	in the url aren't detected (at least by javascript) -- almost as if the page and url changes, but all scripts recognize a static
	//	url, so when you arrive on https://www.facebook.com/ , even though you're navigating to different pages, all scripts still only see
	//	https://www.facebook.com/ throughout your entire session...
	$("a#u_0_3._2s25").click(function() {
		self.port.emit("fbArrived", window.location.href);
	});
});