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
    "images/doggo1.png",
    "images/doggobite.png",
    "images/doggoeat.png",
    "images/doggosqueeze.png",
    "images/misbow.png"
    ]
function displayChar(num) {
    let charIndex = num
    charImage.style.backgroundImage = `url(${image[charIndex]})`
}
// displayChar()


function advanceDialogue(dialogue, choice) {
    let textIndex = -1
    textBox.addEventListener("click", function handler() {
        // console.log("Textbox click")
        console.log(textIndex)
        if (textIndex === dialogue.length - 1) {
            textBox.removeEventListener("click", handler)
            choice()
        } else {
            textIndex++
            textChange(`${dialogue[textIndex]}`)
        }
        
    })
    
}

// textBox.createElement("div")

// tried to put onclick in variable, but cannot call globally to other functions
// need to work around limitations of addEventListener
// look into .find

// function moveText (dialogue, choice) {
//     let textIndex = -1
//     console.log("Textbox click")
//     console.log(textIndex)
//     if (textIndex === dialogue.length - 1) {
//         choice()
//         // clear(textBox, choice)
//         // textBox.removeEventListener("click", choice)
//     } else {
//         textIndex++
//         textChange(`${dialogue[textIndex]}`)
//     }
// }

// textBox.addEventListener("click", function() {
//     advanceDialogue(dialogue, choice)
// })

// or

// const test1 = textBox.addEventListener("click", function() {
// //     advanceDialogue = (dialogue, choice) => {
//     let textIndex = -1
//     if (textIndex === dialogueOne.length - 1) {
//         choice()
//         // clear(textBox, choice)
//         textBox.removeEventListener("click", choice)
//     } else {
//         textIndex++
//         textChange(`${dialogueOne[textIndex]}`)
//     }    
// })

// textBox.removeEventListener("click", test1)

// test1.advanceDialogue(dialogueOne, choiceOne)

// test1.


// function advanceDialogue(dialogue, choice) {
//     let textIndex = -1

//     if (textIndex === dialogue.length - 1) {
//         choice()
//         clear(textBox, advanceDialogue)
//     } else {
//         textIndex++
//         textChange(`${dialogue[textIndex]}`)
//     }
// }

// textBox.addEventListener("click", function(){
    
// })



// function makeChoice2() {
//     choiceBoxOne.style.display = "block"
//     choiceBoxTwo.style.display = "block"
// }

// function makeChoice3() {
//     choiceBoxOne.style.display = "block"
//     choiceBoxTwo.style.display = "block"
//     choiceBoxThree.style.display = "block"
// }

function hideChoice() {
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    choiceBoxThree.style.display = "none"
}


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

function advance (option, use) {
    option.addEventListener("click", use)
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
    choiceBoxThree.addEventListener("click", titleScreen) 
        // console.log("to the title screen!")
        // titleScreen()
        // choiceBoxThree.removeEventListener("click", titleScreen)
        // clear(choiceBoxThree, titleScreen)
    
})


const titleScreen = () => {
    // background.style.backgroundImage = "url('./images/titleimage.jpg')"
    choiceBoxThree.style.top = "0px"
    choiceBoxThree.style.display = "none"
    clear(choiceBoxThree, titleScreen)
    displayBackground(0)
    playMusic(0)
    titleBox.style.display = "block"
    titleBox.addEventListener("click", sceneOne)
}


const sceneOne = () => {
    clear(titleBox, sceneOne)
    displayBackground(1)
    displayChar(1)
    charImage.style.display = "block"
    titleBox.style.display = "none"
    textBox.style.display = "block"
    console.log("Scene-1")
    let dialogueOne = [
        "Meet Miso the dog.",
        "No one knows where this little guy came from.",
        "Or where he even wants to go.",
        "But one thing is clear...",
        "He is looking for a home.",
        "Will you help him find one?"
    ]
    advanceDialogue(dialogueOne, choiceOne)
}

const choiceOne = () => {
    // clear(textBox, choiceOne)
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Yes")
    optionText2("No")
    console.log("Choice-1")
    // choiceBoxOne.addEventListener("click", sceneOneA) 
    advance(choiceBoxOne, sceneOneA)
        // choiceBoxOne.removeEventListener("click", handler())
        // clear(choiceBoxTwo, sceneOneB)
        // sceneOneA()
        // textChange("That's great!")
    
    // choiceBoxTwo.addEventListener("click", sceneOneB)
    advance(choiceBoxTwo, sceneOneB)
        // choiceBoxTwo.removeEventListener("click", handler())
        // clear(choiceBoxTwo, sceneOneB)
        // sceneOneB()
        // textChange("Ha ha, very funny.")
    // })
}

///////////////////////////////////////////////////////////////////////////////////////

const sceneOneA = () => {
    clear(choiceBoxOne, sceneOneA)
    clear(choiceBoxTwo, sceneOneB)
    textChange("That's great!")
    console.log("Scene1-A")
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    let dialogueOneA = [
        "Anyway, you've probably figured it out but just click the text box below to advance the text.",
        "You can pause or play the music using the buttons at the top right of the screen.",
        "Remember, your choices will guide Miso on his journey.",
        "That's all, good luck!",
        "Help Miso reach a happy ending!",
        "Or else..."
    ]
    advanceDialogue(dialogueOneA, sceneTwo)
}

const sceneOneB = () => {
    clear(choiceBoxOne, sceneOneA)
    clear(choiceBoxTwo, sceneOneB)
    textChange("Ha ha, very funny.")
    console.log("Scene1-B")
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    let dialogueOneB = [
        "Anyway, you've probably figured it out but just click the text box below to advance the text.",
        "You can pause or play the music using the buttons at the top right of the screen.",
        "Remember, your choices will guide Miso on his journey.",
        "That's all, good luck!",
        "Help Miso reach a happy ending!",
        "Or else..."
    ]
    advanceDialogue(dialogueOneB, sceneTwo)
}

const sceneTwo = () => {
    playMusic(2)
    displayChar(2)
    textChange(". . .")
    console.log("Scene-2")
    let dialogueTwo = [
        "Miso was spending his day like he would any other day.",
        "Chewing on any scraps he could find, while frolicking around the local park.",
        "He had always seen people with their dogs at the park; Always jogging, playing and hanging out.",
        "Miso wondered if he would ever have someone he could play with...",
        "He thought of what he would do after finishing his midday snack",
        "While watching the people at the park, Miso noticed a little girl sitting by herself.",
        "What should he do?"
    ]
    advanceDialogue(dialogueTwo, choiceTwo)
}


const choiceTwo = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Approach the little girl")
    optionText2("Look at something else")
    advance(choiceBoxOne, sceneTwoA)
    advance(choiceBoxTwo, sceneTwoB)
}

const sceneTwoA = () => {
    clear(choiceBoxOne, sceneTwoA)
    clear(choiceBoxTwo, sceneTwoB)
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    displayChar(1)
    console.log("Scene2-A")
    textChange(". . .")
    let dialogueTwoA = [
        "Miso quietly approaches the little girl...",
        "She appears to be resting underneath the shade of a large tree.",
        "She stares blankly at the air, looking at nothing in particular.",
        "Miso takes note of the other children her age playing nearby, and wonders why the little girl hasn't joined them.",
        "As Miso walks closer, the little girl notices him.",
        "Her gaze is locked on to Miso, but her expression remains unchanged.",
        "Miso decides to..."
    ]
    advanceDialogue(dialogueTwoA, choiceTwoAc)
}

const choiceTwoAc = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Boldly sit right next to the girl.")
    optionText2("Sit just out the girl's reach.")
    advance(choiceBoxOne, sceneThreeA)
    advance(choiceBoxOne, sceneThreeC)
}

const sceneTwoB = () => {
    choiceBoxOne.style.display = "none"
    choiceBoxTwo.style.display = "none"
    displayChar(1)
    textChange(". . .")
    let dialogueTwoB = [
        "Miso notices movement at the entrance of the park.",
        "He sees a pack of older dogs leaving together in a group of three.",
        '"Do they have no home or owners like me?" Miso thought to himself.',
        "He quickly decides to follow them and find out what they're up to.",
        "He follows them into a side alley between two large buildings.",
        "Before they notice Miso, he decides to..."
    ]
    advanceDialogue(dialogueTwoB, choiceTwoBc)
}

const choiceTwoBc = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Gather his courage and introduce himself.")
    optionText2("Turn back around before they notice.")
    advance(choiceBoxOne, sceneThreeB)
    advance(choiceBoxOne, sceneThreeD)
}

const sceneThreeA = () => {
    clear(choiceBoxOne, sceneThreeA)
    clear(choiceBoxTwo, sceneThreeC)
    console.log("Scene3-A")
}

const sceneThreeC = () => {
    clear(choiceBoxOne, sceneThreeA)
    clear(choiceBoxTwo, sceneThreeC)
    console.log("Scene3-C")
}

const sceneThreeB = () => {
    clear(choiceBoxOne, sceneThreeB)
    clear(choiceBoxTwo, sceneThreeD)
    console.log("Scene3-A")
}

const sceneThreeD = () => {
    clear(choiceBoxOne, sceneThreeB)
    clear(choiceBoxTwo, sceneThreeD)
    console.log("Scene3-C")
}