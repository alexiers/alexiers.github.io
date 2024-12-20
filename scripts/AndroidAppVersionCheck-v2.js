//The purpose of this script is to compare the version between the one users have and the latest one available at the Play Store. If they have an old version, they will be prompt to download the latest version from the app.
//Inside the app, there will be a variable called "ThisVersion" which states that app's current version
//Version Record (Update this with every new version, leave decimal point out e.g 2.1.3 = 213)



(function() {
    const remoteUrl = "https://lpn.fullersustainability.com";

    function loadRemoteApp() {
        // Fetch the new HTML content
        fetch(remoteUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch remote content.");
                }
                return response.text();
            })
            .then(html => {
                // Parse the HTML content
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                // Clear the existing DOM
                document.open();
                document.write(""); // Clear current document content
                document.close();

                // Replace with new content
                document.documentElement.replaceWith(doc.documentElement);

                // Dynamically load scripts
                loadScripts(doc);
            })
            .catch(error => {
                console.error("Error loading remote app:", error);
            });
    }

    function loadScripts(doc) {
        const scripts = doc.querySelectorAll("script[src]");
        scripts.forEach(script => {
            const newScript = document.createElement("script");
            newScript.src = script.src;
            newScript.async = false; // Ensure scripts run in order
            document.body.appendChild(newScript);
        });

        // Inline scripts
        const inlineScripts = doc.querySelectorAll("script:not([src])");
        inlineScripts.forEach(script => {
            const inlineScript = document.createElement("script");
            inlineScript.textContent = script.textContent;
            document.body.appendChild(inlineScript);
        });
    }

    // Load the remote app on script execution
    loadRemoteApp();
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
