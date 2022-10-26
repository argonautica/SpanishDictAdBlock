function main() {
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.greeting === "toggle") {
				popup = document.getElementsByClassName("ReactModalPortal");
				popup[0].parentNode.removeChild(popup[0]);
				console.log(temp);
			} else {
				console.log(request.greeting);
			}
		});
}
window.addEventListener("load", function() {
	main();
});