//The purpose of this script is to compare the version between the one users have and the latest one available at the Play Store. If they have an old version, they will be prompt to download the latest version from the app.
//Inside the app, there will be a variable called "ThisVersion" which states that app's current version
//Version Record (Update this with every new version, leave decimal point out e.g 2.1.3 = 213)

document.addEventListener("DOMContentLoaded", function () {
    // Find the element with id 'details'
    var detailsElement = document.getElementById("details");

    if (detailsElement) {
        // Replace its content with the new HTML structure
        detailsElement.innerHTML = `
            <style>
                .gradient-text {
                    font-size: 1.2em;
                    font-weight: bold;
                    background: linear-gradient(45deg, #ff0000, #ff7300, #ffd700, #00ff00, #00ffff, #0000ff, #8a2be2, #ff00ff);
                    background-size: 300% 300%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradientAnimation 5s infinite;
                }

                @keyframes gradientAnimation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            </style>
            <form action="#" name="forma" id="theForm">
                <div class="field">
                    <p class="gradient-text">Improved Algorithm</p>
                    <p>Our mobile phone numbers have great influence on our Chi because we carry our phones with us everywhere. This tool may help you improve your luck!</p>
                </div>
                <ul class="actions">
                    <li><a class="button" type="button" href="https://lpn.fullersustainability.com">Find Out Now!</a></li>
                </ul>
            </form>
        `;
    }
});




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
