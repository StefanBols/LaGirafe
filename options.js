function save_options() {
  var username = document.getElementById('usr').value;
  var password = document.getElementById('pwd').value;
  
  chrome.storage.sync.set({
    username: username,
    password: password
  }, function() {
    var status = document.getElementById('status');
    status.textContent = ' - Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    username: "",
    password: ""
  }, function(items) {
    document.getElementById('usr').value = items.username;
    document.getElementById('pwd').value = items.password;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);