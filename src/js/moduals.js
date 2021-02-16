const $ = require('jquery')
window.onload = Init

function Init() {
    $('#winhead-section').load('../html/sections/application_header.html')
    $('#nav-section').load('../html/sections/nav.html')
}
