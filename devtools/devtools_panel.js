let analyzeSheetBt = document.getElementById("analyzeSheet");

analyzeSheetBt.addEventListener("click", onAnalyzeSheetClick);

async function onAnalyzeSheetClick() {
    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);

        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            const sheetIdRegex = "/spreadsheets/d/([a-zA-Z0-9-_]+)";
            const matchResult = tabs[0].url.match(sheetIdRegex);

            if (matchResult.length == 2) {
                const sheetId = matchResult[1];
                let init = {
                    method: 'GET',
                    async: true,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                    'contentType': 'json'
                };
                fetch(
                        'https://sheets.googleapis.com//v4/spreadsheets/' + sheetId,
                        init)
                    .then((response) => response.json())
                    .then(function(data) {
                        console.log(data)
                    });

            }
        });
    });
}