const drumAudio = [
    {
        name: "bongo",
        sound: "./audio/bongo.mp3",
        key: "b"
    },
    {
        name: "floor_T",
        sound: "./audio/floor_tom.mp3",
        key: "q"
    },
    {
        name: "kick",
        sound: "./audio/kick.mp3",
        key: "w"
    },
    {
        name: "single beat",
        sound: "./audio/single_beat.mp3",
        key: "e"
    },
    {
        name: "snare",
        sound: "./audio/snare.mp3",
        key: "r"
    },
    {
        name: "roll",
        sound: "./audio/roll.mp3",
        key: "t"
    }
]

// audio play function
function audioPlay(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play()
}
// audio play function


// keydown event audio play
document.addEventListener("keydown", (e) => {
let curraudio = drumAudio.filter((aud) => aud.key === e.key)
audioPlay(curraudio[0].sound)
})
// keydown event audio play


// img audio play
const drumSImg = document.querySelector("#drumStickImg")
const drumKImg = document.querySelector("#drumKitImg")
const bongoImg = document.querySelector("#bongoImg")

bongoImg.addEventListener("click", (e) => {
audioPlay(drumAudio[0].sound)
})

drumSImg.addEventListener("click", (e) => {
    let rollaudio = drumAudio.filter(a => a.name === "roll")
    audioPlay(rollaudio[0].sound)
})
// img audio play


// card created on document
const btnCard = document.querySelector("#btnsCard")

drumAudio.forEach((e) => {
    const containInfo = document.createElement("div")
    containInfo.className = "containedTxt"

    const nameP = document.createElement("p")
    const nameTxt = document.createTextNode(e.name)
    nameP.append(nameTxt)

    const keyP = document.createElement("p")
    const keyTxt = document.createTextNode(e.key)
    keyP.append(keyTxt)

    containInfo.appendChild(nameP)
    containInfo.appendChild(keyP)
    btnCard.appendChild(containInfo)
})
// card created on document
