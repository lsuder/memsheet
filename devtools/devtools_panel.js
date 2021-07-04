const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

let analyzeSheetBt = document.getElementById("analyzeSheet");
let spreadsheetId;
let sheet;

analyzeSheetBt.addEventListener("click", onAnalyzeSheetClick);

async function onAnalyzeSheetClick() {
    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);
        readMetaForRow(3);
    });
}

function onGAPILoad() {
    console.log("on Gapi Loaded");

    chrome.storage.sync.get("token", ({ token }) => {
        console.log('got the token', token);

        chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
            const sheetIdRegex = "/spreadsheets/d/([a-zA-Z0-9-_]+)";
            if (!tabs) {
                console.log("not loaded yet.");
                return;
            }
            const matchResult = tabs[0].url.match(sheetIdRegex);

            if (matchResult.length == 2) {
                spreadsheetId = matchResult[1];

                console.log('got the token', token);
                gapi.client.init({
                    discoveryDocs: DISCOVERY_DOCS,
                }).then(function() {
                    gapi.auth.setToken({
                        'access_token': token,
                    });

                    gapi.client.sheets.spreadsheets.get({
                        spreadsheetId: spreadsheetId
                    }).then(function(response) {
                        onSpreadsheetRead(response);
                    });
                });
            }
        });


    });
}

function readMetaForDeck(title, maxRow) {
    if (title === "Settings") {
        return;
    }
    const request = gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: `${title}!E1:F${maxRow}`
    });
    request.then(function(response) {
        console.log(title);
        console.log(response.result.values);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function onSpreadsheetRead(spreadsheet) {
    sheet = spreadsheet;
    console.log(spreadsheet);
    console.log("you have following decks:");
    sheet.result.sheets.forEach((x) => {
        readMetaForDeck(x.properties.title, x.properties.gridProperties.rowCount);
    })
}