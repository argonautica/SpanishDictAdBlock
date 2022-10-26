function sendToggle() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: "toggle"
        }, function (response) {});
    });
}
window.addEventListener("load", function () {
	var toggleButton = document.getElementById("toggle");
	console.log(document.getElementsByTagName("*")); 
	console.log(toggleButton); 
	toggleButton.addEventListener('click', function () {
		try{
			sendToggle();
		} catch {
		}
	}); 
}); 