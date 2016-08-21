self.port.on("openBirthdays", function(nothing) {
	$(document).ready(function() {
		//Of course this is highly variable... I wouldn't know where to click on the fb page without these class identifiers, should they be subject to change
		//$('div._8u._42ef').trigger('click');//Div class containing birthdays on home-page -- didn't work, because it clicked all the other reminders too
		$('i.fbRemindersIcon._8o._8r.lfloat._ohe.img.sp_Zn3YYJ5dTSI.sx_ecaf9e').trigger('click');//Birthday present icon
		
		//$('input#u_0_n').trigger('click');//Test for an unlogged-in screen
	});
});