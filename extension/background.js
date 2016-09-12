chrome.tabs.onUpdated.addListener(function (tabId) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tabId, {
		file: 'app.js'
	});
});

chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		code: "if (window.ampConfigurator) {window.ampConfigurator.toggle();}"
	});
});
