
function collectSystemInfo() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        currentTime: new Date().toLocaleString(),
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));
}

function displaySystemInfoInFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const rawData = localStorage.getItem("systemInfo");

    if (rawData) {
        const info = JSON.parse(rawData);

        const infoHtml = `
            <div class="system-info" style="font-size: 0.8em; opacity: 0.7; margin-top: 1em;">
                <strong>OS & Browser Info:</strong><br>
                User Agent: ${info.userAgent}<br>
                Platform: ${info.platform}<br>
                Language: ${info.language}<br>
                Cookies Enabled: ${info.cookieEnabled}<br>
                Online: ${info.online}<br>
                Screen: ${info.screenResolution}<br>
                Collected at: ${info.currentTime}
            </div>
        `;

        footer.insertAdjacentHTML("beforeend", infoHtml);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    collectSystemInfo();
    displaySystemInfoInFooter();
});