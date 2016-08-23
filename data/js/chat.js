self.port.on("findAndOpenChat", function(searchChat) {
	$.fn.exists = function () {
		return this.length !== 0;
	}
	
	//Of course this is highly variable... I wouldn't know where to click on the fb page without these class identifiers, should they be subject to change
	if (!(document.querySelectorAll('[data-tooltip-content="New Message"]')[0])) {//Write a new message button
		alert("Couldn't find chat search-box...");
	} else {
		
		document.querySelectorAll('[data-tooltip-content="New Message"]')[0].focus();
		document.querySelectorAll('[data-tooltip-content="New Message"]')[0].click();
		
		var checkExist = setInterval(function() {
			/*if ($("input[aria-labelledby='u_0_1w']").length) {//New Message bar's input field
				$("input[aria-labelledby='u_0_1w']").val(searchChat);
				$("input[aria-labelledby='u_0_1w']").focus();
				$("input[aria-labelledby='u_0_1w']").attr("style", "");//To reset the pixel width of the input field
				clearInterval(checkExist);
			} else if ($("input[aria-labelledby='u_0_25']").length) {//Other versions of fb have the aria-label this way... and sometimes it's even u_0_22?
				$("input[aria-labelledby='u_0_25']").val(searchChat);
				$("input[aria-labelledby='u_0_25']").focus();
				$("input[aria-labelledby='u_0_25']").attr("style", "");
				clearInterval(checkExist);
			} */
			if ($("input.inputtext.textInput").length) {//This seems to be the "catch-all" case
				$("input.inputtext.textInput").val(searchChat);
				$("input.inputtext.textInput").focus();
				$("input.inputtext.textInput").attr("style", "");
				clearInterval(checkExist);
			}
		}, 100);
	}
});