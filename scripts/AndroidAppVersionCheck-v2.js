//The purpose of this script is to compare the version between the one users have and the latest one available at the Play Store. If they have an old version, they will be prompt to download the latest version from the app.
//Inside the app, there will be a variable called "ThisVersion" which states that app's current version
//Version Record (Update this with every new version, leave decimal point out e.g 2.1.3 = 213)
var LatestVersion = 212;
//This function will run inside the onload function in the app;
alert("Hello! I am an alert box!!");
function CheckVersion() {
        setTimeout(function(){
                if (ThisVersion < LatestVersion) {
                        DownloadNewVersion();
                } else {
                }
        }, 20000);
};


