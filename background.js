function listener(tabId, changeInfo, tab) {
    if (tab.url.search("://www.nbatopshot.com/listings/p2p/") > -1 && changeInfo.status == 'complete') {
        chrome.tabs.executeScript(tab.id, {
            file: 'foreground.js'  
        });
    }
}
chrome.tabs.onUpdated.addListener(listener);
