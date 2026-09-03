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

function audioPlay(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play()
}

audioPlay(drumAudio[0].sound)
