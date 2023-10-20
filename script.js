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

console.log(moonPhases)

const $gallery = document.getElementById('gallery')

function addEmoji (emojiNum){
    // container div
    const $card = document.createElement('div')
    $card.classList.add('container', 'card')

    //text emoji
    const $emojiContainer = document.createElement('p')

    const $emoji = document.createElement('span')
    $emoji.classList.add('emoji')
    $emoji.textContent = `&#${emojiNum};`

    // Emoji unicode number (decimal)
    const $emojiUnicodeDec = document.createElement('code')
    $emojiUnicodeDec.textContent = emojiNum
}