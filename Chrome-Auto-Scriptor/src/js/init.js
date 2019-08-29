(function () {
    // Add Option.html open event
    chrome.browserAction.onClicked.addListener(tabs => {
        chrome.runtime.openOptionsPage();
    });

    // Set default option value
    const keys = ["isNaverSportsAutoSkip"];
    chrome.storage.sync.get(keys, (result) => {
        for (let i = 0; i < keys.length; ++i) {
            let key = keys[i];
            if (result[key] === undefined) {
                chrome.storage.sync.set({ [key]: true });
            };
        }
    });
})();
