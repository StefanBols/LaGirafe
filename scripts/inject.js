(function () {
    chrome.storage.sync.get({
        username: "",
        password: ""
    }, function (items) {
        var usr = items.username;
        var pwd = items.password;

        if (usr !== "" && pwd !== "") {
            var inputUsr = document.querySelectorAll('input[name*=name]')[0];
            var inputPwd = document.querySelectorAll('input[name*=pass]')[0];

            var btnSubmit;
            btnSubmit = document.querySelectorAll('input[type=submit]')[0];
            if (!btnSubmit) btnSubmit = document.getElementsByTagName("button")[0];

            inputUsr.value = usr;
            inputPwd.value = pwd;
            btnSubmit.click();
        }
    });
})();