window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector("#bg_image").addEventListener("click", billedeSkift);
}

function toggleMenu() {
    console.log("Toogle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");


    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

function billedeSkift() {
    console.log("Billede skifter");
    document.querySelector("#billede1").classList.toggle("hide");
    let skift = document.querySelector("#billede1").classList.contains("hide");

    if (skift == true) {
        document.querySelector("#billede2").classList.remove("hide");
        document.querySelector("#billede1").classList.add("hide");
    } else {
        document.querySelector("#billede2").classList.add("hide");
    }
}
