(function() {
	chrome.storage.sync.get({
		username: "",
		password: ""
	}, function(items) {
		var usr = items.username;
		var pwd = items.password;

		if (usr !== "" && pwd !== "") {
			var form = document.forms["loginForm"];
			document.forms['loginForm'].elements["username"].value = usr;
			document.forms['loginForm'].elements["password"].value = pwd;
			document.getElementsByTagName("button")[0].click();
		}
	});
})();