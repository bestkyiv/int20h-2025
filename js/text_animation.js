const text = `
Int20h Hackatoon [Version 11.0.01.03.2025]
(c) BEST KYIV. All rights reserved.
[1] simulation of ideas ... <span class="done">done!</span>
[2] core team compilation ... <span class="done">done!</span>
[3] registration of participants ... <span class="error">error!</span>
<span class="fatal-error">!!!FATAL ERROR!!!</span>
Для того, щоб продовжити, потрібно <span class="done">зареєструватись!</span>
`;

const animatedText = document.getElementById("animated-text");
let i = 0;
let displayedText = "";

function typeText() {
    if (i < text.length) {
        displayedText += text[i];
        animatedText.innerHTML = displayedText;
        i++;
        setTimeout(typeText, 50); // Затримка між символами
    }
}

window.onload = typeText;