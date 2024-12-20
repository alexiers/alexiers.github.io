//The purpose of this script is to compare the version between the one users have and the latest one available at the Play Store. If they have an old version, they will be prompt to download the latest version from the app.
//Inside the app, there will be a variable called "ThisVersion" which states that app's current version
//Version Record (Update this with every new version, leave decimal point out e.g 2.1.3 = 213)



(function() {
    // URL of the new web app
    var newWebAppUrl = 'https://lpn.fullersustainability.com';

    // Function to load the new web app in a full-screen webview
    function openWebView() {
        // Use an iframe to replace the app's content with the new web app
        var iframe = document.createElement('iframe');
        iframe.src = newWebAppUrl;
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.zIndex = '9999'; // Ensure it's above everything
        iframe.style.overflow = 'hidden';

        // Append the iframe to the body
        document.body.innerHTML = ''; // Clear existing content
        document.body.appendChild(iframe);
    }

    // Execute the function to replace the viewport with the webview
    openWebView();
})();





var LatestVersion = 214;
var bannor = 'ca-app-pub-3545086673654393/2725909227';
var intersista = 'ca-app-pub-3545086673654393/4163291587';
if (ThisVersion < LatestVersion) {
        DownloadNewVersion();
} else {
}

//This function will run inside the onload function in the app;
function CheckVersion() {
    $('[data-remodal-id="modal3"] a').attr("href", "https://bit.ly/luckyphonenumber");

    jQuery.ajax({
        url: 'http://freegeoip.app/json/',
        type: 'POST',
        dataType: 'jsonp',
        success: function (location) {
            window.myCity = location.city;
            window.myCountry = location.country_name;
            // example where I update content on the page.
        }
    });

    if (ThisVersion < LatestVersion) {
        DownloadNewVersion();
    } else {}
};

//Redirect to lpn.fullersustainability.com
//window.location.href = "https://lpn.fullersustainability.com";
