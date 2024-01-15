let main = document.getElementById('main')

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function checkDarkMode() {
    var darkMode = getCookie('darkMode');
    var toggle = document.getElementById('toggle');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        main.classList.add('dark-mode');
        toggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
        toggle.checked = false;
    }
}

document.getElementById('toggle').addEventListener('change', function() {
    if (this.checked) {
        setCookie('darkMode', 'enabled', 30);
        document.body.classList.add('dark-mode');
        main.classList.add('dark-mode');
    } else {
        setCookie('darkMode', 'disabled', 30);
        document.body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
    }
})

checkDarkMode();