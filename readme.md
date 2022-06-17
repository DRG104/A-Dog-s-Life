Galge Pitch -

Initial Screen 
As a user, when the title screen loads, a prompt appears where I will input my name
User’s name will be interpolated throughout conversations for immersion
As a user, I would like to control if music is playing or not, by clicking a button at the top of the screen
Game title will be displayed over name submission field

Regular gameplay
As a user, I would like to view the character I am speaking to, which will be featured in the center of the screen
Background art will feature behind the NPC character asset (would like to change the background depending on locale change if story calls for it, otherwise for the sake of the project one background image would be sufficient)
As a user, I will interact with the NPC on screen by reading their dialogue through a text box at the bottom of the screen, then offered a set of responses that I can choose from
As a user, depending on my choices, I will reach between one of three endings.
As a user, clicking the dialogue box (or maybe anywhere on the screen) will advance the text
As a user, I can press a button at the top of the screen to remove the text box and other ui features so that I can view the art asses without the UI being in the way
As a user, I would press a button that would display logs of previous dialogue and player choices (would like a button that toggles display of text logs)

Win state/Loss State
As a user, wrong choices can lead to a bad end, which could be used as a loss state for the player
As a user, I will “win” by reaching the neutral or good ending



Game description
This game is a callback to old 90's "galge" games. It will feature a rudimentary dialoge tree that is advanced by the player's responses to the NPC characters. The player will eventually reach one of three endings, two of which provide a "Win state" and one of which will provide a "Loss state."



My Approach
I will write a short non-sense story, with the characters and locations being entirely fictional. This short story will diverge depending on the player's choices.
The story will have to be written 3 times with minor changes, to reflect the three different paths the player will advance through.
I will use a random background and character to be used as assets for the game. I will likely use CSS styling for the rest of the UI.
I will use javascript to interpolate the player's input, as a name, so that the player can be referred to in game.
I will use javascript to allow the player to access the UI functions (Music on/off, hide/display UI, etc.)
I will use javascript to listen for "click" events in the text box/dialoge options, to advance the dialogue.
I will use javascript to to call the next "scene" where dialogue will play, then prompt the player to make a choice. I will either use an array that contains each snippet of story, which I can refer to by index and, or when writing functions for the player choice, use if statements (if playerChoice === "Choice A" return dialogueA else return Dialogue C).


