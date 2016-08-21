$(document).ready(function() {
	//On re-arrival to facebook home-page, reset the prompt's display
	self.port.on("reset", function(done) {
		$('#intro').html("<b>What did you come here to do?</b>");
		$("#initial").css("display", "initial");
		$("#searchPrompt").css("display", "none");
		$("#chatPrompt").css("display", "none");
		$("#searchText").val("");
		$("#chatText").val("");
	});

	var searchTrigger = $('#search').bind('click', searchHandler);
	function searchHandler(e) {
		e.preventDefault();
		$('#intro').html("<b>Search for a...?</b>");
		$("#initial").css("display", "none");
		$("#searchPrompt").css("display", "initial");
		self.port.emit("searchResize", "");
	}
	var searchBox = $('#searchSubmit').bind('click', searchBoxHandler);
	function searchBoxHandler(e) {
		e.preventDefault();
		var searchText = $('#searchText').val();
		var category = $('input[name=query]:checked', '#searchCategory').val();
		if (searchText) {
			var query = "search/" + category + "/?q=" + searchText;
			$("#searchInputBox").addClass("has-success");
			self.port.emit("doSearch", query);
		} else {
			$("#searchInputBox").addClass("has-error");
		}
	}
	
	var chatTrigger = $('#chat').bind('click', chatHandler);
	function chatHandler(e) {
		e.preventDefault();
		$('#intro').html("<b>Person/group to chat up:</b>");
		$("#initial").css("display", "none");
		$("#chatPrompt").css("display", "initial");
		self.port.emit("chatResize", "");
	}
	var chatBox = $('#chatSubmit').bind('click', chatBoxHandler);
	function chatBoxHandler(e) {
		e.preventDefault();
		var chatText = $('#chatText').val();
		if (chatText) {
			$("#chatInputBox").addClass("has-success");
			self.port.emit("openChat", chatText);
		} else {
			$("#chatInputBox").addClass("has-error");
		}
	}
	
	var bdayTrigger = $('#birthday').bind('click', birthdayHandler);
	function birthdayHandler(e) {
		e.preventDefault();
		self.port.emit("birthdayClose", "");
	}
	
	var chillTrigger = $('#chill').bind('click', chillHandler);
	function chillHandler(e) {
		e.preventDefault();
		self.port.emit("close", "done");
	}
});