// Basically all the divs of the VN
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

// Music in an array to be easily referenced
const musicPlaylist = [
    "music/titlemusic.mp3", 
    "music/noonsunny.mp3", 
    "music/whimsy.mp3",
    "music/tense.mp3"
    ]


// function that can access the array, loop the music, control the music via buttons, with a parameter that can easily change the music later
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

// Basically works similiarly to the playMusic function, 
let backgroundImage = [
    "images/titleimage.jpg",  
    "images/parkbg.png",
    "images/alley.jpg",
    "images/back.jpg"
    ]
function displayBackground(num) {
    let bgIndex = num
    background.style.backgroundImage = `url(${backgroundImage[bgIndex]})`
}
// displayBackground()


// Used to change character assets, decided to change the background rather than an image, mostly because of how the divs were set up, and because I dont expect the user to interact with the character asset
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

// Most important function, reads each "scene's" dialogue and lets the user advance the text by clicking on the text box
// Once the end of a dialogue array has been reached, the choice parameter will use the text box to move to the next scene
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


// These functions allow for quick and easy edits of the player choices and text box as needed
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

function changeTitle (text) {
    titleText.innerText = text
}

function changeSubText (text) {
    titleSub.innerText = text
}

function advance (option, use) {
    option.addEventListener("click", use)
}

function clear (option, use) {
    option.removeEventListener("click", use)
}


// VN starts here
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
})

const titleScreen = () => {
    clear(titleBox, badEnd)
    changeTitle("A DOG'S LIFE")
    changeSubText("'click anywhere to continue'")
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
    textChange(". . .")
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
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Yes")
    optionText2("No")
    console.log("Choice-1")
    advance(choiceBoxOne, sceneOneA)
    advance(choiceBoxTwo, sceneOneB)
}

///////////////////////////////////////////////////////////////////////////////////////

const sceneOneA = () => {
    clear(choiceBoxOne, sceneOneA)
    clear(choiceBoxTwo, sceneOneB)
    textChange("That's great!")
    console.log("Scene1-A")
    hideChoice()
    // choiceBoxOne.style.display = "none"
    // choiceBoxTwo.style.display = "none"
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
    hideChoice()
    // choiceBoxOne.style.display = "none"
    // choiceBoxTwo.style.display = "none"
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
        "He had always seen people with their dogs at the park; always jogging, playing and hanging out.",
        "Miso wondered if he would ever have someone he could play with...",
        "He thought of what he would do after finishing his midday snack.",
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
    hideChoice()
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
    optionText1("Sit right next to the girl.")
    optionText2("Sit just out the girl's reach.")
    advance(choiceBoxOne, sceneThreeA)
    advance(choiceBoxTwo, sceneThreeC)
}

const sceneTwoB = () => {
    clear(choiceBoxOne, sceneTwoA)
    clear(choiceBoxTwo, sceneTwoB)
    hideChoice()
    displayChar(1)
    console.log("Scene2-B")
    textChange(". . .")
    let dialogueTwoB = [
        "Miso notices movement at the entrance of the park.",
        "He sees a pack of older dogs leaving together in a group of three.",
        '"Do they have no home or owners like me?" Miso thought to himself.',
        "He quickly decides to follow them and find out what they're up to.",
        "The pack scampers into a side alley between two large buildings.",
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
    advance(choiceBoxTwo, sceneThreeD)
}

// ////////////////////// //

const sceneThreeA = () => {
    hideChoice()
    clear(choiceBoxOne, sceneThreeA)
    clear(choiceBoxTwo, sceneThreeC)
    console.log("Scene3-A")
    displayChar(5)
    textChange(". . .")
    let dialogueThreeA = [
        "Miso proudly marches toward the little girl and plops down right next to her.",
        "He watches as a small smile starts to form on her expressionless face.",
        '"Are you here alone like me?" asked the little girl.',
        "*yap yap* barked Miso in response.",
        "He notices the girl move both of her hands toward him.",
        "Miso decides to..."
    ]
    advanceDialogue(dialogueThreeA, choiceThreeAc)
}

const sceneThreeC = () => {
    hideChoice()
    clear(choiceBoxOne, sceneThreeA)
    clear(choiceBoxTwo, sceneThreeC)
    console.log("Scene3-C")
    displayChar(5)
    textChange(". . .")
    let dialogueThreeC = [
        "Miso walks up to the little girl and sits barely beneath the shade of the tree.",
        "He watches as a small smile starts to form on her expressionless face.",
        '"Are you here alone like me?" asked the little girl.',
        "*yap yap* barked Miso in response.",
        "The girl motions vaguely for Miso to come closer.",
        "She appears frustrated as Miso is determined to keep his distance.",
        "She struggles to stand up and tries to inch closer toward Miso.",
        "Miso decides to..."
    ]
    advanceDialogue(dialogueThreeC, choiceThreeAc)
}

const sceneThreeB = () => {
    hideChoice()
    clear(choiceBoxOne, sceneThreeB)
    clear(choiceBoxTwo, sceneThreeD)
    displayBackground(3)
    console.log("Scene3-B")
    textChange(". . .")
    let dialogueThreeB = [
        "Miso trots along closer to the trio of dogs in the alley.",
        "The dogs appear to be sniffing around knocked over garbage cans",
        "*bark bark!* the largest dog seems to be talking to his friends.",
        '"Theres nothing here! Who\'s idea was it to look for food around here?" The largest dog seemed to be saying.',
        'As the big dog was about to begin his tantrum, the pack noticed Miso. "Oh look, a new friend," one of them said.',
        "As Miso walks toward them, they explained that they were trying to find food somewhere new.",
        "But after trying out various areas today, they instead offer to take Miso to an area they regularly find scraps.",
        "What does Miso do?"
    ]
    advanceDialogue(dialogueThreeB, choiceThreeBd)
}

const sceneThreeD = () => {
    hideChoice()
    clear(choiceBoxOne, sceneThreeB)
    clear(choiceBoxTwo, sceneThreeD)
    console.log("Scene3-D")
    textChange(". . .")
    let dialogueThreeD = [
        "After thinking for a few moments, Miso had a feeling meeting the dogs might not be such a good idea.",
        "At the very least he had satisfied his curiosity.",
        "As he turned to leave, he heard one of the dogs call out to him.",
        "*bark bark!* the largest dog came running toward him.",
        '"Say... what\'s a little guy like you doing all by yourself?" asked the dog.',
        '"Why don\'t you come along with us?"',
        "Although at first Miso was curious about this group of dogs, he didn't feel the need to follow them anywhere since he didn't know them that well.",
        '"Well suit yourself, come find us if you wanna have some fun." The big dog sneered.',
        "Since Miso didn\'t have any other plans, he decided to..."
    ]
    advanceDialogue(dialogueThreeD, choiceFourA)
}

// ////////////////////// //

const choiceThreeAc = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Let the girl do as she wants.")
    optionText2("Bark in protest.")
    advance(choiceBoxOne, sceneFourA)
    advance(choiceBoxTwo, sceneFourC)
}

const choiceThreeBd = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Join his new friends.")
    optionText2("Decline politely.")
    advance(choiceBoxOne, sceneFourB)
    advance(choiceBoxTwo, sceneFourD)
}

const sceneFourA = () => {
    hideChoice()
    clear(choiceBoxOne, sceneFourA)
    clear(choiceBoxTwo, sceneFourC)
    console.log("Scene4-A")
    displayChar(4)
    textChange("! ! !")
    let dialogueFourA = [
        "The girl begins to squish Miso's tiny face.",
        '"You\'re like a tiny orange marshmallow!" laughed the little girl.',
        "Her smile grows even wider the more she pets Miso.",
        "The girl continues to pet Miso for a long time.",
        "Before Miso can realize it, an old man approaches the two of them.",
        '"I guess it\'s time for me to go," the girl said in a quiet voice.',
        '"Would you like to come with me?" asked the little girl.',
        "Miso decides to..."
    ]
    advanceDialogue(dialogueFourA, choiceFourAc) // *
}

const sceneFourC = () => {
    hideChoice()
    clear(choiceBoxOne, sceneFourA)
    clear(choiceBoxTwo, sceneFourC)
    console.log("Scene4-C")
    displayChar(1)
    textChange(". . .")
    let dialogueFourC = [
        "*yap yap!* Miso barks before her hands can reach him.",
        "The little girl's smile slowly fades away.",
        '"That makes sense... who would let a complete stranger touch them?" the girl said in a quiet voice.',
        "She looks into the distance and finds an old man waving at her.",
        '"I guess it\'s time for me to go," the girl said sadly.',
        "Miso decides to..."
    ]
    advanceDialogue(dialogueFourC, choiceFourA)
}

const sceneFourB = () => {
    hideChoice()
    clear(choiceBoxOne, sceneFourB)
    clear(choiceBoxTwo, sceneFourD)
    console.log("Scene4-B")
    displayChar(2)
    displayBackground(2)
    playMusic(3)
    textChange(". . .")
    let dialogueFourB = [
        "Miso follows his friends to a new area.",
        '"You\'re gonna love this place kid, all the best scraps are here." laughed the big dog.',
        "The group walk through a maze of alleys, to the back of a dirty resturant.",
        "Broken glass and strange smells can be found littered all over the ground.",
        "One of the smaller dogs motions for Miso to come over, 'Check this out kid.'",
        "Miso examines the pile of trash near the small dog.",
        "Miso finds something delicious that seemed to have just been thrown away.",
        "Just as Miso was about to take a bite...",
        '"HEY! YOU MUTTS! I TOLD YOU NEVER TO COME BACK HERE!" a man shouts as he emerges from a backdoor nearby.',
        "The pack of dogs scatter, leaving Miso behind.",
        "As the man grabs hold of Miso, he tries to..."
    ]
    advanceDialogue(dialogueFourB, choiceFourB) // *
}

const sceneFourD = () => {
    hideChoice()
    clear(choiceBoxOne, sceneFourB)
    clear(choiceBoxTwo, sceneFourD)
    console.log("Scene4-D")
    displayChar(1)
    textChange(". . .")
    let dialogueFourD = [
        "After apologizing to the group and saying his goodbyes.",
        "Miso wanders back the way he came.",
        "He wonders if he should have tried harder to make friends today",
        "Anyway, what's done is done.",
        "Since Miso has no one to follow, or any place to go.",
        "Miso decided it was better that he..."
    ]
    advanceDialogue(dialogueFourD, choiceFourA)
}

const choiceFourAc = () => {
    choiceBoxOne.style.display = "block"
    choiceBoxTwo.style.display = "block"
    optionText1("Follow the girl home.")
    optionText2("Stay behind in the park.")
    advance(choiceBoxOne, sceneHome)
    advance(choiceBoxTwo, sceneStay)
}

const choiceFourA = () => {
    choiceBoxTwo.style.display = "block"
    optionText2("Stay behind in the park.")
    advance(choiceBoxTwo, sceneStay)
}

const choiceFourB = () => {
    choiceBoxTwo.style.display = "block"
    optionText2("Cry for help!")
    advance(choiceBoxTwo, scenePack)
}

const sceneHome = () => {

}

const sceneStay = () => {

}

const scenePack = () => {
    hideChoice()
    clear(choiceBoxTwo, scenePack)
    displayChar(1)
    textChange(". . .")
    let scenePackDialogue = [
        "Miso cries in vain for his new friends to come back and help him.",
        'The man still holding onto Miso says to no one in particular, "At least I caught one of you mutts today."',
        'Before Miso can even wonder what will happen to him, the man says, "You\'re going to the pound, little troublemaker!"',
        '"The pound?" Miso thinks to himself, "What does that even mean?"',
        "As if to answer him, a man in a white jumpsuit shows up a few hours later.",
        "Miso is placed into a small cage and taken away by the man in the jumpsuit.",
        "Caged and alone, Miso has no choice but to..."
    ]
    advanceDialogue(scenePackDialogue, scenePackChoice)
}

const scenePackChoice = () => {
    choiceBoxTwo.style.display = "block"
    optionText2("Accept his fate...")
    advance(choiceBoxTwo, scenePackFinale)
}

const scenePackFinale = () => {
    hideChoice()
    clear(choiceBoxTwo, scenePackFinale)
    displayChar(5)
    textChange(". . .")
    let scenePackFinaleDialogue = [
        "Miso is taken into a building that has dozens of dogs like him, caged up in metal boxes.",
        '"Oh no... what\'s going to happen to me?" Miso worried.',
        'A lady walking around the cages shouts, "Dinner time!" And starts pouring food into the bowls of each cage.',
        '"At least I\'m being fed..." said Miso, as he was trying to comfort himself.',
        "Hours, then days, then weeks fly by.",
        "Many people come in and out of the building, and sometimes, dogs will even leave with them.",
        "But no one ever came for Miso.",
        "At least Miso found a place to stay with plenty of food...",
        "...But this was probably not the home that he wanted."
    ]
    advanceDialogue(scenePackFinaleDialogue, badEnd)
}

const badEnd = () => {
    displayBackground(-1)
    displayChar(-1)
    titleBox.style.display = "block"
    titleBox.addEventListener("click", titleScreen)
    textBox.style.display = "none"
    changeTitle("BAD END")
    changeSubText("'click anywhere to restart'")
}