const uaup = require('uaup-js');
var app_library = (process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")) + "/";
uaup.Update({
    gitRepo: "CH-Portal",
    gitUsername: "DcmanProductions",
    appName: "CH-Portal",
    appExecutableName: "CH - Portal.exe",
    progressBar: document.getElementById('download'),
    label: document.getElementById('download-label'),
    appDirectory: require('path').join(app_library,"Chase Labs", "CH - Portal")
});