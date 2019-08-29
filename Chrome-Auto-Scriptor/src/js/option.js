(function () {
    // Set page with option value
    const keys = ["isNaverSportsAutoSkip"];
    chrome.storage.sync.get(keys, (result) => {
        for (let i = 0; i < keys.length; ++i) {
            let key = keys[i];
            if (result[key]) {
                document.getElementById(key).classList.add("is-info");
            }
        }
    });

    // Set onclick event
    for (let i = 0; i < keys.length; ++i) {
        let key = keys[i];
        let button = document.getElementById(key);
        button.addEventListener("click", event => {
            button.classList.toggle("is-info");
            chrome.storage.sync.set({ [key]: button.classList.contains("is-info") });
        });
    }
}());