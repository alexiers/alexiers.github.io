//The purpose of this script is to compare the version between the one users have and the latest one available at the Play Store. If they have an old version, they will be prompt to download the latest version from the app.
//Inside the app, there will be a variable called "CurrentVersion" which states that app's current version
//Change this value everytime you update the app on the Play Store
var LatestVersion = "1.9.0";

//This function will run inside the onload function in the app;
        function CheckVersion() {
            if (ThisVersion !== LatestVersion) {
                DownloadNewVersion();
            }
        };
