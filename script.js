/***************************** addEmoji Function ********************************
 * 
 * Takes a unicode decimal number and returns an html object to 
 * diplay the corresponding emoji
 * 
 *******************************************************************************/

function addEmoji (emojiNum){
    // DIV - emoji card/container
    const $card = document.createElement('div')
    $card.classList.add('container', 'card')

        // P - emoji wrapper
        const $emojiWrapper = document.createElement('p')

            //SPAN - emoji
            const $emoji = document.createElement('span')
            $emoji.classList.add('emoji')
            $emoji.textContent = String.fromCodePoint(emojiNum)

            $emojiWrapper.appendChild($emoji)

        // CODE - emoji unicode number (decimal)
        const $emojiUnicodeDec = document.createElement('code')
        $emojiUnicodeDec.textContent = emojiNum

    $card.appendChild($emojiWrapper)
    $card.appendChild($emojiUnicodeDec)

    return $card
}

/****************** Emoji Unicode Array *******************/
const moonPhases = [
    '127761',             // [1]  New moon
    '127762',             // [2]  Waxing cresent moon
    '127771',             // [3]  First quarter moon face
    '127763',             // [4]  First quarter moon
    '127764',             // [5]  Waxing gibbous moon
    '127765',             // [6]  Full moon
    '127773',             // [7]  Full moon face
    '127766',             // [8]  Waining gibbous moon
    '127767',             // [9]  Last quarter moon
    '127772',             // [10] Last quarter moon face
    '127768',             // [11] Waining cresent moon
    '127770'              // [12] New moon face
]

// Dynamically generate an emoji gallery from the unicode array
const $gallery = document.getElementById('gallery')

for(let num of moonPhases){
    $gallery.appendChild(addEmoji(num))
}