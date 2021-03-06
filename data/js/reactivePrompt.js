$(document).ready(function() {
	//On re-arrival to facebook home-page, reset the prompt's display
	self.port.on("reset", function(done) {
		$('#intro').html("<b>What did you come here to do?</b>");
		$("#initial").css("display", "initial");
		$("#searchPrompt").css("display", "none");
		$("#chatPrompt").css("display", "none");
		$("#notificationsPrompt").css("display", "none");
		$("#searchText").val("");
		$("#chatText").val("");
		$("#searchInputBox").removeClass("has-error has-success");
		$("#chatInputBox").removeClass("has-error has-success");
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
	//This doesn't work
	/*$('#searchSubmit').keypress(function (e) {
		if (e.which == 13) {
			searchBoxHandler(e);
		}
	});*/
	document.getElementById('searchText').onkeypress = function(e){
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13'){
			searchBoxHandler(e);
			return false;
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
	document.getElementById('chatText').onkeypress = function(e){
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13'){
			chatBoxHandler(e);
			return false;
		}
	}
	
	var notifTrigger = $('#notifications').bind('click', notifHandler);
	function notifHandler(e) {
		e.preventDefault();
		$('#intro').html("<b>What are you trying to see?</b>");
		$("#initial").css("display", "none");
		$("#notificationsPrompt").css("display", "initial");
		self.port.emit("notifResize", "");
	}
	var notifBox = $('#notificationsSubmit').bind('click', notifBoxHandler);
	function notifBoxHandler(e) {
		e.preventDefault();
		var notifCategory = $('input[name=notifs]:checked', '#notificationsCategory').val();
		self.port.emit("lookUpNotifs", notifCategory);
	}
	
	var statusTrigger = $('#status').bind('click', statusHandler);
	function statusHandler(e) {
		e.preventDefault();
		self.port.emit("statusClick", "");
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