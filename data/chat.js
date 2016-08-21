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
			if ($("input[aria-labelledby='u_0_1w']").length) {//New Message bar's input field
				$("input[aria-labelledby='u_0_1w']").val(searchChat);
				$("input[aria-labelledby='u_0_1w']").focus();
				$("input[aria-labelledby='u_0_1w']").attr("style", "");//To reset the pixel width of the input field
				clearInterval(checkExist);
			}
		}, 100);
	}
});