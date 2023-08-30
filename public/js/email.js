document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = encodeURIComponent(document.getElementById("form-name").value);
    var topic = encodeURIComponent(document.getElementById("form-topic").value);
    var message = encodeURIComponent(document.getElementById("form-message").value);

    var url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mda.wkf@gmail.com&su=" + name + " | " + topic + "&body=" + message;

    var newWindow = window.open(url, "_blank");
    newWindow.focus();
});