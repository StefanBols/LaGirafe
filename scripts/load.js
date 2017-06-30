chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("/umbraco/") != -1) { 
        chrome.tabs.executeScript(tab.ib, {
            file: 'inject.js'
        });
    }  
});