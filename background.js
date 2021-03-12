function listener(tabId, changeInfo, tab) {
    console.log('I ran');
    if (tab.url.search("://www.nbatopshot.com/listings/p2p/") > -1 && changeInfo.status == 'complete') {
        chrome.tabs.executeScript(tab.id, {
            file: 'foreground.js'
        });
    }
}
chrome.tabs.onUpdated.addListener(listener);
//chrome.browserAction.onClicked.addListener(listener);

//for popup in json
//"browser_action": {
//    "default_popup": "popup.html"
//},