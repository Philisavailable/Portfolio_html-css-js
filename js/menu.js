const burger = document.getElementById("burger");
const menu = document.querySelector("#menu");
const croix = document.getElementById("croix")
const main = document.querySelector("main");

burger.addEventListener('click', () => {
    menu.classList.add(menu.style.display = "block");
    burger.classList.add(burger.style.display = "none");
    main.classList.add(main.style.display = "none");
});
croix.addEventListener('click', () => {
    menu.classList.add(menu.style.display = "none");
    burger.classList.add(burger.style.display = "block");
    main.classList.add(main.style.display = "block");
});

window.addEventListener("resize", (e) => {
    e.preventDefault();

if(window.innerWidth >= 1200){

    menu.classList.add(menu.style.display = "block");
    burger.classList.add(burger.style.display = "none");

}else{
    menu.classList.add(menu.style.display = "none");
    burger.classList.add(burger.style.display = "block");
    main.classList.add(main.style.display = "");
}
});

