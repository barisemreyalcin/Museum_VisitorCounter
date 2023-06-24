let visitors = 0;
let counter = document.querySelector(".counter");
let entHistory = document.querySelector(".entry-history");

function increment() {
    visitors++;
    counter.innerText = visitors;
}

function save() {
    let countStr = visitors + " - ";
    entHistory.innerHTML += countStr;
    visitors = 0;
    counter.innerText = visitors;
}