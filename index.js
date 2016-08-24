var self = require("sdk/self");
var data = self.data;
var pageMod = require("sdk/page-mod");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var active = true;

var panel = require("sdk/panel").Panel({
  width: 530,
  height: 495,
  focus: true,
  position: {
	top: 70  
  },
  contentURL: data.url("prompt.html"),
  contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("bootstrap-3.3.7-dist/js/bootstrap.js"), data.url("jquery/jquery-ui.js"), data.url("js/reactivePrompt.js")]
});

pageMod.PageMod({
  include: "https://www.facebook.com/",
  contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/my-script.js")],
  onAttach: sending
});

var homeInit = pageMod.PageMod({
  include: "https://www.facebook.com/*",
  contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/homeAfterSearch.js")],
  onAttach: sending
});

function sending(worker) {
	worker.port.on('fbArrived', function(url) {
		if (active) {
			panel.port.emit("reset", "");
			panel.resize(530, 495);
			panel.show();
		} else {
			panel.hide();
		}
	});
}
panel.port.on("searchResize", function(done) {
	panel.resize(510, 300);
});
panel.port.on("chatResize", function(done) {
	panel.resize(510, 270);
});
panel.port.on("notifResize", function(done) {
	panel.resize(510, 250);
});

panel.port.on("doSearch", function(query) {
	console.log(query);
	var searchingQuery = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/search.js")]
	});
	searchingQuery.port.emit("changeURL", query);
	panel.hide();
});
panel.port.on("openChat", function(chatSearch) {
	var chat = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/chat.js")]
	});
	chat.port.emit("findAndOpenChat", chatSearch);
	panel.hide();
});
panel.port.on("lookUpNotifs", function(notifsURL) {
	var notifs = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/search.js")]
	});
	notifs.port.emit("changeURL", notifsURL);
	panel.hide();
});

panel.port.on("birthdayClose", function(done) {
	panel.hide();
	var bday = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/birthday.js")]
	});
	bday.port.emit("openBirthdays", "");
});
panel.port.on("statusClick", function(done) {
	panel.hide();
	var stat = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery/jquery-3.1.0.js"), data.url("js/status.js")]
	});
	stat.port.emit("newStatus", "");
});
panel.port.on("close", function(done) {
	panel.hide();
});

var button = buttons.ActionButton({
	id: "fb-on-task",
	label: "Facebook On-Task",
	icon: {
		"16": data.url("icons/fot-icon-16.png"),
		"32": data.url("icons/fot-icon-32.png"),
		"64": data.url("icons/fot-icon-64.png")
	},
	onClick: handleClick
});

function handleClick(state) {
	active = !active;
	if (active) {
		button.state(button, {
			"icon": {
				"16": data.url("icons/fot-icon-16.png"),
				"32": data.url("icons/fot-icon-32.png"),
				"64": data.url("icons/fot-icon-64.png")
			}
		});
	} else {
		button.state(button, {
			"icon": {
				"16": data.url("icons/fot-icon-16-deac.png"),
				"32": data.url("icons/fot-icon-32-deac.png"),
				"64": data.url("icons/fot-icon-64-deac.png")
			}
		});
		panel.hide();
	}
}