//The purpose of this script is to compare the version between the one users have and the latest one available at the Play Store. If they have an old version, they will be prompt to download the latest version from the app.
//Inside the app, there will be a variable called "ThisVersion" which states that app's current version
//Version Record (Update this with every new version, leave decimal point out e.g 2.1.3 = 213)
var LatestVersion = 214;

//This function will run inside the onload function in the app;
function CheckVersion() {
        $('[data-remodal-id="modal3"] a').attr("href", "https://bit.ly/luckyphonenumber");
        
        jQuery.ajax({
                url: 'http://freegeoip.app/json/',
                type: 'POST',
                dataType: 'jsonp',
                success: function(location) {
                        window.myCity = location.city;
                        window.myCountry = location.country_name;
                        // example where I update content on the page.
                }
        });
        
        if (ThisVersion < LatestVersion) {
                DownloadNewVersion();
        } else {
        }
};
