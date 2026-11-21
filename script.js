
const params = new URLSearchParams(window.location.search);
const word = params.get("text") || "Hallo";

const display = document.createElement("div");
display.id = "word";
display.textContent = word;

document.body.appendChild(display);

function resizeWord() {
    const availableWidth = display.clientWidth;
    const availableHeight = display.clientHeight;

    let min = 1;
    let max = 1000;
    let best = 1;

    while (min <= max) {
        const size = Math.floor((min + max) / 2);

        display.style.fontSize = size + "px";

        if (
            display.scrollWidth <= availableWidth &&
            display.scrollHeight <= availableHeight
        ) {
            best = size;
            min = size + 1;
        } else {
            max = size - 1;
        }
    }

    display.style.fontSize = best + "px";
}

window.addEventListener("resize", resizeWord);

document.fonts.ready.then(resizeWord);
resizeWord();
