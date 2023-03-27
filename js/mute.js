const mute = document.getElementById("select");

let isActive = true;

mute.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
        mute.style.transform = "rotate(0deg)";
    } else {
        mute.style.transform = "rotate(-90deg)";
    }
});