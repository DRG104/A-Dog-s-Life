// ask about loading audio as an array
// ask about background vs imgs
// ask if hidden elements can still fire events (like click)
// h1 and h2 cant be made clickable?
const background = document.getElementById("background")
const textBox = document.getElementById("text-box")
const titleBox = document.getElementById("title-screen")
const charImage = document.getElementById("character")
const choiceBoxOne = document.getElementById("option1")
const choiceBoxTwo = document.getElementById("option2")
const choiceBoxThree = document.getElementById("option3")
const titleText = document.getElementById("title-text")
const titleSub = document.getElementById("title-subtext")



// console.log("test")
// ./music/
// let music = new Audio("music/titlemusic.mp3")
// let musicIndex = 0
// function playMusic() {
//     music.play()
//     music.loop = true
//     music.volume = 0.2
// }

// const bgMusic = document.createElement(Audio)

const musicPlaylist = [
    "music/titlemusic.mp3", 
    "music/noonsunny.mp3", 
    "music/whimsy.mp3"
    ]


function playMusic (num) {
    // const music = new Audio()
    const music = document.getElementById("bgm")
    let playlistIndex = num
    music.src = `${musicPlaylist[playlistIndex]}`
    music.loop = true
    music.volume = 0.2
    console.log(music.src)
    music.play()
    pause.addEventListener("click", () => {
        music.pause()
    })
    play.addEventListener("click", () => {
        music.play()
    })
}

let backgroundImage = [
    "images/titleimage.jpg",  
    "images/parkbg.png"
    ]
function displayBackground(num) {
    let bgIndex = num
    background.style.backgroundImage = `url(${backgroundImage[bgIndex]})`
}
// displayBackground()


// used to change background, can do same for img
let image = [
    "images/chartest1.jpg", 
    "images/doggo1.png"
    ]
function displayChar(num) {
    let charIndex = num
    charImage.style.backgroundImage = `url(${image[charIndex]})`
}
// displayChar()

// const choiceOne = choiceBoxOne.addEventListener("click", () => {
//     console.log("Option 1")
// })

// const choiceTwo = choiceBoxTwo.addEventListener("click", () => {
//     console.log("Option 2")
// })

// const choiceThree = choiceBoxThree.addEventListener("click", () => {
//     console.log("Option 3")
// })

// const advanceText = textBox.addEventListener("click", () => {
//     textBox.innerText = "Press me to start!"
//     console.log("This is the text box!")
// })

function textChange (text) {
    textBox.innerText = text
}

function optionText1 (text) {
    choiceBoxOne.innerText = text
}

function optionText2 (text) {
    choiceBoxTwo.innerText = text
}

function optionText3 (text) {
    choiceBoxThree.innerText = text
}

function clear (option, use) {
    option.removeEventListener("click", use)
}

document.addEventListener("DOMContentLoaded", () => {
    background.style.backgroundImage = "none"
    textBox.style.display = "none"
    titleBox.style.display = "none"
    charImage.style.display = "none"
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    choiceBoxThree.style.top = "100px"
    optionText3("Press me to start!")
    choiceBoxThree.addEventListener("click", () => {
        console.log("to the title screen!")
        titleScreen()
        clear(choiceBoxThree, titleScreen)
        // choiceBoxThree.removeEventListener("click", titleScreen)
    })
})

const titleScreen = () => {
    // background.style.backgroundImage = "url('./images/titleimage.jpg')"
    displayBackground(0)
    // playMusic(0)
    choiceBoxThree.style.display = "none"
    titleBox.style.display = "block"
    titleBox.addEventListener("click", () => {
        console.log("to scene one!")
        sceneOne()
    })
}

const sceneOne = () => {
    displayBackground(1)
    displayChar(1)
    charImage.style.display = "block"
    titleBox.style.display = "none"
    textBox.style.display = "block"

    let dialogueOne = [
        "Meet Miso the dog.",
        "No one knows where this little guy came from.",
        "Or where he even wants to go.",
        "But one thing is clear...",
        "He is looking for a home.",
        "Will you help him?"
    ]
    
    function advanceDialogue(dialogue) {
        let textIndex = -1

        textBox.addEventListener("click", () => {
            // textIndex++
            console.log("Textbox click")
            console.log(textIndex)
            if (textIndex === dialogue.length - 1) {
                choiceOne()
            } else {
                textIndex++
                textChange(`${dialogue[textIndex]}`)
            }
        })
    }
    advanceDialogue(dialogueOne)
}

const choiceOne = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Yes")
    optionText2("No")
    choiceBoxOne.addEventListener("click", () => {
        // choiceBoxOne.removeEventListener("click")
        // console.log("choiceboxone")
        // choiceBoxOne.style.display = "none"
        // choiceBoxTwo.style.display = "none"
        sceneOneA()
    })
    choiceBoxTwo.addEventListener("click", () => {
        // choiceBoxTwo.removeEventListener("click")
        // choiceBoxOne.style.display = "none"
        // choiceBoxTwo.style.display = "none"
        sceneOneB()
    })

}





const sceneOneA = () => {
    console.log("Scene1-A")
    // choiceBoxOne.removeEventListener("click")
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    let dialogueOneA = [
        "Meet Miso the dog.",
        "No one knows where this little guy came from.",
        "Or where he even wants to go.",
        "But one thing is clear...",
        "He is looking for a home.",
        "Will you help him?"
    ]
    advanceDialogue(dialogueOneA)
}

const sceneOneB = () => {
    // choiceBoxTwo.removeEventListener("click")
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    textChange("You monster!")
}