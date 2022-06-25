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

// Music in an array to be easily referenced
const musicPlaylist = [
    "music/titlemusic.mp3", 
    "music/happy.mp3", 
    "music/whimsy.mp3",
    "music/tense.mp3",
    "music/mipha.mp3"
    ]


// function that can access the array, loop the music, control the music via buttons, with a parameter that can easily change the music later
function playMusic (num) {
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
    "images/back.jpg",
    "images/neutralend.jpg",
    "images/brush.jpg",
    "images/neturalending.jpg",
    "images/home.jpg",
    "images/Goodend.jpg"
    ]
function displayBackground(num) {
    let bgIndex = num
    background.style.backgroundImage = `url(${backgroundImage[bgIndex]})`
}


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

// Most important function, reads each "scene's" dialogue and lets the user advance the text by clicking on the text box
// Once the end of a dialogue array has been reached, the choice parameter will use the text box to move to the next scene
function advanceDialogue(dialogue, choice) {
    let textIndex = -1
    textBox.addEventListener("click", function handler() {
        if (textIndex === dialogue.length - 1) {
            textBox.removeEventListener("click", handler)
            choice()
        } else {
            textIndex++
            textChange(`${dialogue[textIndex]}`)
        }
    })
}

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
    clear(titleBox, neutralEnd)
    clear(titleBox, goodEnd)
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
    advance(choiceBoxOne, sceneOneA)
    advance(choiceBoxTwo, sceneOneB)
}

const sceneOneA = () => {
    clear(choiceBoxOne, sceneOneA)
    clear(choiceBoxTwo, sceneOneB)
    textChange("That's great!")
    hideChoice()
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
    hideChoice()
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
    displayChar(4)
    textChange("! ! !")
    let dialogueFourA = [
        "The girl begins to squish Miso's tiny face.",
        '"You\'re like a tiny orange marshmallow!" laughed the little girl.',
        "Her smile grows even wider the more she pets Miso.",
        "The girl continues to pet Miso for a long time.",
        "Before Miso realizes it, an old man approaches the two of them.",
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
    hideChoice()
    clear(choiceBoxOne, sceneHome)
    clear(choiceBoxTwo, sceneStay)
    displayBackground(7)
    playMusic(1)
    displayChar(3)
    textChange(". . .")
    let sceneHomeDialogue = [
        "Miso, the girl, and her grandfather arrive at their home.",
        "She quickly takes Miso up to her room.",
        "The girl moves about frantically, trying to prepare this and that to make Miso comfortable.",
        "Back at the park she looked so lethargic, but now she is moving about as much as any other child.",
        "The girl's grandfather pops his head in to remind her to take it easy.",
        "The girl pays him no mind, and prepares Miso a delicious meal.",
        "Miso, having never been doted on before, bounces happily around his very own food dish.",
        "Miso now realizing that he had found himself home, decides to..."
    ]
    advanceDialogue(sceneHomeDialogue, sceneHomeChoice)
}

const sceneStay = () => {
    hideChoice()
    clear(choiceBoxTwo, sceneStay)
    displayBackground(1)
    playMusic(4)
    displayChar(1)
    textChange(". . .")
    let sceneStayDialogue = [
        "Now Miso was all alone.",
        "Back to where it all started.",
        "He wanders around the park, no longer populated by the people from before.",
        '"Maybe being all by myself isnt all that bad." Miso thinks to himself, "Maybe I can be happy on my own."',
        "Looking around, he finds a path that he never noticed before.",
        "It leads him toward a dense forest, a place that looks untouched by others.",
        "With nothing in the world but himself, Miso decides to..."
    ]
    advanceDialogue(sceneStayDialogue, sceneStayChoice)
}

const scenePack = () => {
    hideChoice()
    clear(choiceBoxTwo, scenePack)
    displayChar(1)
    textChange(". . .")
    let scenePackDialogue = [
        "Miso cries in vain for his new friends to come back and help him.",
        'The man still holding onto Miso mumbles no one in particular, "At least I caught one of you mutts today."',
        'Before Miso can even wonder what will happen to him, the man says, "You\'re going to the pound, little troublemaker!"',
        '"The pound?" Miso thinks to himself, "What does that even mean?"',
        "As if to answer him, a man in a white jumpsuit shows up a few hours later.",
        "Miso is placed into a small cage and taken away by the man in the jumpsuit.",
        "Caged and alone, Miso has no choice but to..."
    ]
    advanceDialogue(scenePackDialogue, scenePackChoice)
}

const sceneHomeChoice = () => {
    choiceBoxTwo.style.display = "block"
    optionText2("Live happily")
    advance(choiceBoxTwo, sceneHomeFinale)
}

const scenePackChoice = () => {
    choiceBoxTwo.style.display = "block"
    optionText2("Accept his fate...")
    advance(choiceBoxTwo, scenePackFinale)
}

const sceneStayChoice = () => {
    displayBackground(5)
    choiceBoxTwo.style.display = "block"
    optionText2("Move forward by himself")
    advance(choiceBoxTwo, sceneStayFinale)
}

const sceneHomeFinale = () => {
    hideChoice()
    clear(choiceBoxTwo, sceneHomeFinale)
    displayChar(4)
    textChange(". . .")
    let sceneHomeFinaleDialogue = [
        "Miso spends the rest of his days following the little girl around.",
        "Over time, she explains that she only has her grandpa.",
        "She always felt lonely because she was too sick to go out and play with other kids.", 
        "That's why the day she met Miso, was the happiest day of her life.",
        "Finally a friend for her to call her own.",
        "And Miso felt the same way.",
        "He was finally no longer all by himself.",
        "He had a home with people who cared about him.",
        "Plus, the girl was always spoiling him with the best food.",
        "It's as if all of Miso's wishes came true."
    ]
    advanceDialogue(sceneHomeFinaleDialogue, goodEnd)
}

const scenePackFinale = () => {
    hideChoice()
    clear(choiceBoxTwo, scenePackFinale)
    displayChar(5)
    textChange(". . .")
    let scenePackFinaleDialogue = [
        "Miso is taken into a building that has dozens of dogs like him, caged up in metal boxes.",
        '"Oh no... what\'s going to happen to me?" Miso worried.',
        'A lady walking around the cages shouts, "Dinner time!"', 
        "And starts pouring food into the bowls of each cage.",
        '"At least I\'m being fed..." said Miso, as he was trying to comfort himself.',
        "Hours, then days, then weeks fly by.",
        "Many people come in and out of the building, and sometimes, dogs will even leave with them.",
        "But no one ever came for Miso.",
        "At least Miso found a place to stay with plenty of food...",
        "...But this was probably not the home that he wanted."
    ]
    advanceDialogue(scenePackFinaleDialogue, badEnd)
}

const sceneStayFinale = () => {
    hideChoice()
    clear(choiceBoxTwo, sceneStayFinale)
    displayBackground(6)
    displayChar(1)
    textChange(". . .")
    let sceneStayFinaleDialogue = [
        "Miso travels from place to place.",
        "Never staying in one area for long.",
        "He meets many different people.",
        "But he never tries to make them a companion.",
        "He is always on the move, to see more, to do more.",
        "But Miso was never satisfied, he felt like he was missing something.",
        "A place to call his own.",
        "A family that could welcome him home.",
        "...Although he could never have those things.",
        "At least he could still move forward."
    ]
    advanceDialogue(sceneStayFinaleDialogue, neutralEnd)
}

const badEnd = () => {
    displayBackground(3)
    displayChar(-1)
    titleBox.style.display = "block"
    titleBox.addEventListener("click", titleScreen)
    textBox.style.display = "none"
    changeTitle("BAD END")
    changeSubText("'click anywhere to restart'")
}

const neutralEnd = () => {
    displayBackground(4)
    displayChar(-1)
    titleBox.style.display = "block"
    titleBox.addEventListener("click", titleScreen)
    textBox.style.display = "none"
    changeTitle("NEUTRAL END")
    changeSubText("'click anywhere to restart'")
}

const goodEnd = () => {
    displayBackground(8)
    displayChar(-1)
    titleBox.style.display = "block"
    titleBox.addEventListener("click", titleScreen)
    textBox.style.display = "none"
    changeTitle("GOOD END")
    changeSubText("'click anywhere to restart'")
}