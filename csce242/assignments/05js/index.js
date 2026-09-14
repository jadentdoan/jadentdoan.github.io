document.getElementById("speech").onclick = () => {
    const speechBubble = document.getElementById("speech-bubble");
    speechBubble.classList.remove("hidden");
};

document.getElementById("select-beverage").onchange = (e) => {
    const beverage = e.target.value;
    document.getElementById("message").innerHTML = beverage + ": Wow, very tasty!";
};

document.getElementById("sun").onclick = () => {
    const sticker = document.getElementById("sun-sticker");
    sticker.classList.remove("hidden");
};