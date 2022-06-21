// ask about loading audio as an array
// ask about background vs imgs
// ask if hidden elements can still fire events (like click)
const background = document.getElementById("background")
const textBox = document.getElementById("text-box")
const titleBox = document.getElementById("title-screen")
const charImage = document.getElementById("character")
const choiceBoxOne = document.getElementById("option1")
const choiceBoxTwo = document.getElementById("option2")
const choiceBoxThree = document.getElementById("option3")

console.log("test")
// ./music/
const music = new Audio("./music/titlemusic.mp3")
let musicIndex = 0
function playMusic() {
    music.play()
    music.loop = true
    music.volume = 0.2
}

// music controls
pause.addEventListener("click", () => {
    music.pause()
})

play.addEventListener("click", () => {
    music.play()
})

let backgroundImage = ["./images/titleimage.jpg", "./images/mute.png"]
let bgIndex = 0
function displayBackground() {
    background.style.backgroundImage = `url(${backgroundImage[bgIndex]})`
}
// displayBackground()


// used to change background, can do same for img
let image = ["./images/chartest1.jpg", "./images/mute.png"]
let charIndex = 0
function displayImage() {
    charImage.style.backgroundImage = `url(${image[charIndex]})`
}
// displayImage()

const choiceOne = choiceBoxOne.addEventListener("click", () => {
    console.log("Option 1")
})

const choiceTwo = choiceBoxTwo.addEventListener("click", () => {
    console.log("Option 2")
})

const choiceThree = choiceBoxThree.addEventListener("click", () => {
    console.log("Option 3")
})

const advanceText = textBox.addEventListener("click", () => {
    console.log("This is the text box!")
})

document.addEventListener("DOMContentLoaded", () => {
    background.style.backgroundImage = "none"
    textBox.style.display = "none"
    titleBox.style.display = "none"
    charImage.style.display = "none"
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    choiceBoxThree.innerText = "Press me to start!"
    choiceBoxThree.addEventListener("click", () => {
        titleScreen()
    })
})

const titleScreen = () => {
    displayBackground()
    choiceBoxThree.style.display = "none"
    titleBox.style.display = "block"
    playMusic()
    titleBox.addEventListener("click", () => {
        console.log("hi")
    })
    h2.addEventListener("click", () => {
        console.log("hi")
    })
}

const sceneOne = () => {
    console.log("hi")
}