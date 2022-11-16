//conecting files
let icon1 = document.getElementById('item 1')
let icon2 = document.getElementById('item 2')
let icon3 = document.getElementById('item 3')
let icon4 = document.getElementById('item 4')
let icon5 = document.getElementById('item 5')

let text1 = document.getElementById('item A')
let text2 = document.getElementById('item B')
let text3 = document.getElementById('item C')
let text4 = document.getElementById('item D')
let text5 = document.getElementById('item E')

//Setting interaction for headers navigation
document.getElementById("item A").onclick = function () {
    location.href = "/index.html";
}

document.getElementById("item B").onclick = function () {
    location.href = "/resource/pages/about.html";
}

document.getElementById("item D").onclick = function () {
    location.href = "/resource/pages/project.html";
}

document.getElementById("item E").onclick = function () {
    location.href = "/resource/pages/contact.html";
}
