// Naver sports advertisement auto skip
function naverSportsAutoSkip() {
    const naverSportsURL = "sports.naver.com/tv/index.nhn";
    let curURL = document.location.hostname + document.location.pathname;

    if (curURL === naverSportsURL) {
        let autoClickFunc = setInterval(() => {
            let button = document.getElementsByClassName("skipBtn").item(0);
            try {
                if (button.style.display != "none") {
                    button.click();
                    console.info("Button clicked successfully !");
                    clearInterval(autoClickFunc);
                }
            }
            catch (err) {
                if (err.name != "TypeError") {
                    console.err(err);
                }
            }
        }, 300);

        let autoClearFunc = setTimeout(() => {
            clearInterval(autoClickFunc);
        }, 30000);
    }
};

(function () {
    // Set event with option value
    const keys = ["isNaverSportsAutoSkip"];
    chrome.storage.sync.get(keys, (result) => {
        if (result["isNaverSportsAutoSkip"]) {
            naverSportsAutoSkip();
        }
    });
}());