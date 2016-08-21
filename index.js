var self = require("sdk/self");
var data = self.data;
var pageMod = require("sdk/page-mod");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var active = true;

var panel = require("sdk/panel").Panel({
  width: 530,
  height: 390,
  focus: true,
  position: {
	top: 70  
  },
  contentURL: data.url("prompt.html"),
  contentScriptFile: [data.url("jquery-3.1.0.min.js"), data.url("bootstrap.min.js"), data.url("reactivePrompt.js")]
});

pageMod.PageMod({
  include: "https://www.facebook.com/",
  contentScriptFile: [data.url("jquery-3.1.0.min.js"), data.url("my-script.js")],
  onAttach: sending
});

function sending(worker) {
	worker.port.on('fbArrived', function(url) {
		if (active) {
			panel.port.emit("reset", "");
			panel.resize(530, 390);
			panel.show();
		} else {
			panel.hide();
		}
	});
}
panel.port.on("searchResize", function(done) {
	panel.resize(510, 320);
});
panel.port.on("chatResize", function(done) {
	panel.resize(510, 300);
});

panel.port.on("doSearch", function(query) {
	console.log(query);
	var searchingQuery = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery-3.1.0.min.js"), data.url("search.js")]
	});
	searchingQuery.port.emit("changeURL", query);
	panel.hide();
});
panel.port.on("openChat", function(chatSearch) {
	console.log(chatSearch);
	var chat = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery-3.1.0.min.js"), data.url("chat.js")]
	});
	chat.port.emit("findAndOpenChat", chatSearch);
	panel.hide();
});

panel.port.on("birthdayClose", function(done) {
	panel.hide();
	var bday = tabs.activeTab.attach({
		contentScriptFile: [data.url("jquery-3.1.0.min.js"), data.url("birthday.js")]
	});
	bday.port.emit("openBirthdays", "");
});
panel.port.on("close", function(done) {
	panel.hide();
});

var button = buttons.ActionButton({
	id: "fb-on-task",
	label: "Facebook On-Task",
	icon: {
		"16": data.url("fot-icon-16.png"),
		"32": data.url("fot-icon-32.png"),
		"64": data.url("fot-icon-64.png")
	},
	onClick: handleClick
});

function handleClick(state) {
	active = !active;
	if (active) {
		button.state(button, {
			"icon": {
				"16": data.url("fot-icon-16.png"),
				"32": data.url("fot-icon-32.png"),
				"64": data.url("fot-icon-64.png")
			}
		});
	} else {
		button.state(button, {
			"icon": {
				"16": data.url("fot-icon-16-deac.png"),
				"32": data.url("fot-icon-32-deac.png"),
				"64": data.url("fot-icon-64-deac.png")
			}
		});
		panel.hide();
	}
}