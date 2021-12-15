const $ = require('jquery')
const nav = $('#nav');
var isLocal = false;
var currentIP = "";
let baseDomain = isLocal ? "http://192.168.1.19" : "http://play.drewchaseproject.com";
const view = document.getElementById('main');
fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => currentIP = data.ip).then(() => {
    isLocal = currentIP.includes('67.255.238.53');
}).then(() => {
    baseDomain = isLocal ? "http://192.168.1.19" : "http://play.drewchaseproject.com"
    loadNavigationMachanics();
    LoadView();
    setNavigationToggle();
});


function ToggleNavigation() {
    const collapsed = nav.hasClass('navigation-collapsed');
    setNavigationToggle(collapsed);
}

function setNavigationToggle(collapsed = false) {
    nav.addClass(collapsed ? "navigation-expanded" : "navigation-collapsed")
    nav.removeClass(collapsed ? "navigation-collapsed" : "navigation-expanded")
}

function LoadView(url = 'noblit', called = null) {
    fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => currentIP = data.ip).then(() => {
        isLocal = currentIP.includes('67.255.238.53');
    }).then(() => {
        baseDomain = isLocal ? "http://192.168.1.19" : "http://play.drewchaseproject.com"
    });
    url = url.toLowerCase();
    let page = "pages/home.html";
    switch (url) {
        case 'home':
            page = "pages/home.html";
            break;
        case 'noblit':
            page = `${baseDomain}:3579`;
            break;
        case 'radarr':
            page = `${baseDomain}:8310`;
            break;
        case 'sonarr':
            page = `${baseDomain}:8989`;
            break;
        case 'deluge':
            page = `${baseDomain}:8112`;
            break;
        case 'lidarr':
            page = `${baseDomain}:8686`;
            break;
        case 'synclounge':
            page = `http://app.synclounge.tv/#/join/rfK7l/https:%2F%2F1.us.synclounge.tv%5C`;
            break;
        case 'mc':
            page = `${isLocal ? "http://192.168.1.149" : baseDomain}:8443`;
            break;
        case 'settings':
            page = "pages/settings.html";
            break;
        default:
            LoadView();
            break;
    }
    view.setAttribute('src', page);

    if (called != null) {
        Array.from(document.getElementsByClassName('menuItem')).forEach(s => { s.classList.remove('active') })
        called.classList.add('active')
    }

    setNavigationToggle();
}


function loadNavigationMachanics() {
    var timer;
    nav.on({
        mouseenter: function () {
            timer = setTimeout(() => {
                setNavigationToggle(true);
            }, 1500);
        },
        mouseleave: function () {
            setNavigationToggle(false);
            clearTimeout(timer);
        }
    });
}