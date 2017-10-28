// inspire user with the message
var datamsg;

function render(text) {
    list = text.split(' ');

    var message = list[Math.floor(Math.random()*list.length)];
    document.getElementById('inspireMe').innerHTML = message;

    return true;
}

function get(callback) {
    var dataset = "";

    chrome.storage.sync.get('inspireData', function(obj) {
        console.log(obj.inspireData);
        dataset = obj.inspireData;
        callback(dataset);
    });
}

function dark(val) {
    if (val == true) {
        document.body.style.background = "#101010";
        document.getElementById('inspireMe').style.color = "#efefef";
    }

    if (val == false) {
        document.body.style.background = "#fdfafa";
        document.getElementById('inspireMe').style.color = "#2c3236";
    }

    return val;
}

function theme(callback) {
    var dark_theme = 0;

    chrome.storage.sync.get('darkTheme', function(obj) {
        console.log(obj.darkTheme);
        dark_theme = obj.darkTheme;
        callback(dark_theme);
    });
}

get(render); /** Render message **/
theme(dark); /** Render theme   **/
