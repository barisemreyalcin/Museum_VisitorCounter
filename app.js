let visitors = 0;
let counter = document.querySelector(".counter");

function increment() {
    visitors++;
    counter.innerText = visitors;
}