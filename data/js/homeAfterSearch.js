$(document).ready(function() {
	//Check if user clicks on "Home" button
	//That's honestly so strange... it looks like Facebook, somehow, updates the window's url and changes the page, but hash-changes
	//	in the url aren't detected (at least by javascript) -- almost as if the page and url changes, but all scripts recognize a static
	//	url, so when you arrive on https://www.facebook.com/ , even though you're navigating to different pages, all scripts still only see
	//	https://www.facebook.com/ throughout your entire session...
	/*$("a#u_0_3._2s25").click(function() {
		self.port.emit("fbArrived", window.location.href);
	});
	$("a#u_0_d._2s25").click(function() {//Some other versions of facebook have this identifier instead?
		self.port.emit("fbArrived", window.location.href);
	});*/
	$( "a:contains('Home')" ).click(function() {//This seems to be the catch-all case
		$(document).ready(function() {
			self.port.emit("fbArrived", window.location.href);
		});
	});
});