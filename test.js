const bubbleText = document.querySelector('#bubble-text');
bubbleText.textContent = "* "; //we initialize the text of the bubble with an asterisk

const text = "hello world!";



//this function adds a character to the bubble text
function addCharacterToBubble(character) {
    bubbleText.textContent += character; //add the character to the bubble text
}
Array.from(text).forEach(
    (character, index) => {
        setTimeout(
            () => addCharacterToBubble(character),
            80 * index //delay of 1000ms
        )
    }
);