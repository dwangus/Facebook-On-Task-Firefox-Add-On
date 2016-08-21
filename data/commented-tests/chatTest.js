self.port.on("findAndOpenChat", function(searchChat) {
	$.fn.exists = function () {
		return this.length !== 0;
	}
	
	//if(!$('input#email')[0]) {//Test for an unlogged-in screen
	
	//Of course this is highly variable... I wouldn't know where to click on the fb page without these class identifiers, should they be subject to change
	if (!(document.querySelectorAll('[data-tooltip-content="New Message"]')[0])) {//Write a new message button
		alert("Couldn't find chat search-box...");
	} else {
		
		document.querySelectorAll('[data-tooltip-content="New Message"]')[0].focus();
		document.querySelectorAll('[data-tooltip-content="New Message"]')[0].click();
		
		var checkExist = setInterval(function() {
			if ($("input[aria-labelledby='u_0_1w']").length) {
				$("input[aria-labelledby='u_0_1w']").val(searchChat);
				$("input[aria-labelledby='u_0_1w']").focus();
				$("input[aria-labelledby='u_0_1w']").attr("style", "");
				
				//None of this worked
				//$("div._54_w._42ef")[0].focus();
				//$("div._54_w._42ef").select();
				//$("input[aria-labelledby='u_0_1w']")[0].click();
				//$("div._54_w._42ef").click();
				
				//$("input[aria-labelledby='u_0_1w']")[0].emulateTab();
				//Alternative way of doing it...?:
				/*$("input[aria-labelledby='u_0_1w']").attr('id', 'fbChatInput123');
				document.querySelectorAll("input[aria-labelledby='u_0_1w']").focus();
				document.querySelectorAll("input[aria-labelledby='u_0_1w']")[0].click();
				document.getElementById('fbChatInput123').value = searchChat;*/
				clearInterval(checkExist);
			}
		}, 100);
				
		//To wait for new message-box to pop up
		/*var timeoutMillis = 1000;
		
		function chatSearch() {
			$("input[aria-labelledby='u_0_1w']").val(searchChat);
			$("input[aria-labelledby='u_0_1w']")[0].focus();
			var e = jQuery.Event("keypress", {
				which: 13,
				keycode: 13
			});
			//jQuery("body").trigger(e);
			$("input[aria-labelledby='u_0_1w']")[0].trigger(e);
		}
		
		setTimeout( chatSearch, timeoutMillis );*/
	}
});
/*

self.port.on("findAndOpenChat", function(searchChat) {
	$.fn.exists = function () {
		return this.length !== 0;
	}
	
	//if(!$('input#email')[0]) {//Test for an unlogged-in screen
	
	//Of course this is highly variable... I wouldn't know where to click on the fb page without these class identifiers, should they be subject to change
	if (!($("input._58al")[0])) {//Chat search-box
		alert("Couldn't see chat search-box...");
	} else {
		$('input._58al').focus();
		$('input._58al').val(searchChat).keyup();
		var e = jQuery.Event("keypress");
		e.which = 13; //choose the one you want
		e.keyCode = 13;
		$("input._58al").trigger(e);
		$('input._58al').focus();
		$("input._58al").trigger(e);
		
		//$('input#email').val(searchChat);//Test for an unlogged-in screen
		
		//To wait for chat-search results to load
		var timeoutMillis = 1000;
		
		function chatSearch() {
			if (!$('div._225b')[0]) {//This should be the title of separate categories of groups you can chat, like "Contacts", "Businesses", "Group Conversations", etc.
				alert("Couldn't see contacts side-bar...");
			} else {
				var header = $('div._225b').text();
				if (header == "Contacts" || header == "Group Conversations") {//This is just arbitrarily, what I think, most people will be looking for
					var list = $('ul#js_3');//The list of Contacts or Group Conversations
					if (!list[0]) {
						alert("Couldn't see the list of chat-contacts...");
					} else {
						var listItems = $('ul#js_3 li');
						var selected = false
						listItems.each(function(index, li) {//Basically, go down all the list of items and see if any of them are auto-selected; we just open that one, as facebook's default choice
							if ($(li).attr("aria-selected")) {
								$(li).trigger('click');
								selected=true;
							}
						});
						if (!selected) {//Otherwise, none of them were selected -- and so we should just try to draw their attention to the chat-box
							alert("Started typing into the chat search-box for you! Don't get distracted now!");
						}
					}
				} else {//It'd be like businesses or something like that, and I just assume they didn't find what they were looking for
					alert("Started typing into the chat search-box for you! Don't get distracted now!");
				}
			}
		}
		
		setTimeout( chatSearch, timeoutMillis );
	}
});*/
/*
		document.querySelectorAll('[data-tooltip-content="New Message"]')[0].focus();
		document.querySelectorAll('[data-tooltip-content="New Message"]')[0].click();
		
		//To wait for new message-box to pop up
		var timeoutMillis = 2000;
		
		function chatSearch() {
			document.querySelectorAll('input[aria-labelledby='u_0_1w']')[0].focus();
			document.querySelectorAll('input[aria-labelledby='u_0_1w']').value = searchChat;
			//$("input[aria-labelledby='u_0_1w']").val(searchChat);
			var e = jQuery.Event("keypress", {
				which: 13,
				keycode: 13
			});
			jQuery("body").trigger(e);
			//$("input[aria-labelledby='u_0_1w']").trigger(e);
		}
		
		setTimeout( chatSearch, timeoutMillis );
*/