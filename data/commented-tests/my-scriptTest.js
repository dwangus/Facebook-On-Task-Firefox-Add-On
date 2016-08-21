/*
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_Started_(jpm)
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials#getting-started
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Modifying_Web_Pages_Based_on_URL
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Display_a_Popup
https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/panel
https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/panel#Getting_user_input
https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Communicating_With_Other_Scripts
https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/using_postMessage
https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/using_port

http://stackoverflow.com/questions/9207033/changing-firefox-addon-install-icon
*/

//alert(self.options.message);

$(document).ready(function() {
	$.fn.exists = function () {
		return this.length !== 0;
	}
    if ($('*:contains("Home")').exists()) {
		self.port.emit("fbArrived", window.location.href);
	}
});
//self.port.emit("fbArrived", window.location.href);