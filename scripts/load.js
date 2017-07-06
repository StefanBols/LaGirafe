chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.executeScript(tab.ib, {
        file: 'scripts/inject.js'
    });
});