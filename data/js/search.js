self.port.on("changeURL", function(query) {
	var newURL = window.location.href + query;
	window.location.href = newURL;
});