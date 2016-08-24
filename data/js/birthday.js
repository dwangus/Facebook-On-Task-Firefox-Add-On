self.port.on("openBirthdays", function(nothing) {
	$(document).ready(function() {
		$.fn.exists = function () {
			return this.length !== 0;
		}
		/*if ($('i.fbRemindersIcon._8o._8r.lfloat._ohe.img.sp_Zn3YYJ5dTSI.sx_ecaf9e').exists()) {
			$('i.fbRemindersIcon._8o._8r.lfloat._ohe.img.sp_Zn3YYJ5dTSI.sx_ecaf9e').trigger('click');//Birthday present icon -- will need to change this once I test a "safer" alternative for birthday icons
			//It appears as though the only unique identifiers for the birthday-present icon (as opposed to the event-reminder icon and other such icons, are the last two classes 'sp_Zn3YYJ5dTSI' and 'sx_ecaf9e'
			//For example, these are the event-reminder icon's classes: fbRemindersIcon _8o _8r lfloat _ohe img sp_58XNdIoyJ_i sx_16d8c2
			
			//Yea, the birthday icon did change -- to sp_JCMI6EVv4yF sx_2f9f9b
		}*/
		/*if ($('div.fbReminders').exists()) {
			var div = $('div.fbReminders');
			var arrChildren = div.children;
			if (arrChildren.length > 0) {
				var last = arrChildren[arrChildren.length - 1];
				last[0].click();//Now, technically, the last reminder (if there are no birthdays) could be something like an event -- but I'm TRUSTING the user not to try and wish "Happy Birthday" to someone
								//if it's no one's birthday today...
			}
		}*/
		if ($('a[ajaxify="/birthday/reminder/dialog/"]').exists()) {//Seems to be the catch-all case
			document.querySelectorAll('[ajaxify="/birthday/reminder/dialog/"]')[0].click();
		} else {
			alert("It's no one's birthday!");
		}
	});
});