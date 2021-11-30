const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
const boomSound = new Audio("sounds/boom.wav")
const clapSound = new Audio("sounds/clap.wav")
const hihatSound = new Audio("sounds/hihat.wav")
const kickSound = new Audio("sounds/kick.wav")
const openhatSound = new Audio("sounds/openhat.wav")
const rideSound = new Audio("sounds/ride.wav")
const snareSound = new Audio("sounds/snare.wav")
const tinkSound = new Audio("sounds/tink.wav")
const tomSound = new Audio("sounds/tom.wav")

boom.addEventListener("click", (e) => {
    e.preventDefault()
    boomSound.play()
})

clap.addEventListener("click", (e) => {
    e.preventDefault()
    clapSound.play()
})

hihat.addEventListener("click", (e) => {
    e.preventDefault()
    hihatSound.play()
})

kick.addEventListener("click", (e) => {
    e.preventDefault()
    kickSound.play()
})

openhat.addEventListener("click", (e) => {
    e.preventDefault()
    openhatSound.play()
})

ride.addEventListener("click", (e) => {
    e.preventDefault()
    rideSound.play()
})

snare.addEventListener("click", (e) => {
    e.preventDefault()
    snareSound.play()
})

tink.addEventListener("click", (e) => {
    e.preventDefault()
    tinkSound.play()
})

tom.addEventListener("click", (e) => {
    e.preventDefault()
    tomSound.play()
})

document.addEventListener("keypress", (input) => {
    switch (input.key) {
        case "a":
            boomSound.play();
        case "s":
            clapSound.play();
        case "d":
            hihatSound.play();
        case "f":
            kickSound.play();
        case "g":
            openhatSound.play();
        case "h":
            rideSound.play();
        case "j":
            snareSound.play();
        case "k":
            tinkSound.play();
        case "l":
            tomSound.play();
    }
})