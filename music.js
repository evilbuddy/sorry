var musics = [
    [
        "Goodbye to White Space",
        "carrot113",
        "https://www.cjoint.com/doc/23_07/MGFoYHmK4Xo_OMORI---Goodbye-To-White-Space.mp3"
    ],
    [
        "ごめんね ごめんね",
        "きくお",
        "https://www.cjoint.com/doc/23_11/MKssO5Eso1X_%E3%81%8D%E3%81%8F%E3%81%8A---%E3%81%94%E3%82%81%E3%82%93%E3%81%AD-%E3%81%94%E3%82%81%E3%82%93%E3%81%AD.mp3"
    ],
    [
        "Fallen Down (Slowed + Reverb)",
        "Toby Fox",
        "https://www.cjoint.com/doc/23_11/MKsvgikAb4X_Fallen-Down-slowed-+-reverb-.mp3"
    ],
    [
        "Unknown",
        "Unknown",
        "https://www.cjoint.com/doc/23_11/MKsvvwuipDX_SadPiano.wav"
    ]
];

const title = document.getElementById("music-title");
const artist = document.getElementById("music-artist");
const player = document.getElementById("music-player")
const bar = document.getElementById("music-time")

var songID;

function updateSong()
{
    artist.innerText = musics[songID][1];
    title.innerText = musics[songID][0];
    player.src = musics[songID][2];

    player.play();
}

player.ontimeupdate = function()
{
    bar.style.width = "calc(" + player.currentTime / player.duration * 100 + "% - 15px)";
}

player.onended = function()
{
    musicNext();
}

function musicPause()
{
    if(player.paused)
    {
        player.play();
    }
    else
    {
        player.pause();
    }
}

function musicPrevious()
{
    songID -= 1;

    if(songID < 0)
    {
        songID = musics.length - 1;
    }

    updateSong();
}

function musicNext()
{
    songID += 1;

    if(songID > musics.length - 1)
    {
        songID = 0;
    }

    updateSong();
}

songID = Math.floor(Math.random() * musics.length);
updateSong()