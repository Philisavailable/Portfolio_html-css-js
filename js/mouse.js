const mousemove = document.querySelector(".mousemove");
const index = document.getElementById("index");
const mute = document.getElementById("select");

let isActive = true;

gunShot = () =>{
    const gunShot = new Audio();
    gunShot.src = "./assets/song/Barrett-M82.mp3";
    gunShot.play();
}

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

let bulletHole = (e) => {
        // e.preventDefault();
    if(window.innerWidth >= 768 && isActive){
        gunShot();
        let newDivBullet = document.createElement("div");
        newDivBullet.classList.add("outer_hole");
        let newdivHole = document.createElement("div");
        newdivHole.classList.add("inner_hole");
        newDivBullet.appendChild(newdivHole);
        newDivBullet.style.left = e.clientX + "px";
        newDivBullet.style.top = e.clientY + "px";
        index.appendChild(newDivBullet);
    }
};

index.addEventListener('click',bulletHole)

mute.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
        mute.style.transform = "rotate(0deg)";
    } else {
        mute.style.transform = "rotate(-90deg)";
    }
});