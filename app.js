// Song Array
let songs = [

    { songName: "Indian-beathip-hop", songUrl: "./songs/indian-beat-powerful-trap-hip-hop-126604.mp3", imgUrl: "https://media.istockphoto.com/id/1058251118/photo/abstract-musical-background.webp?b=1&s=170667a&w=0&k=20&c=JSYxOxeSLerYi2S0JSMPGAmmZIum4WxOjc4N80WityM=" },

    { songName: "Indian-percussion-ethnic-drums", songUrl: "./songs/indian-percussion-ethnic-drums-156542.mp3", imgUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D" },

    { songName: "Indian-trap", songUrl: "./songs/indian-trap-132594.mp3", imgUrl: "https://images.unsplash.com/photo-1499415479124-43c32433a620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fHww" },

    { songName: "Kaise-bhula-dun-ashir", songUrl: "./songs/kaise-bhula-dun-ashir-184935.mp3", imgUrl: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww" },

]

//-----------------------------------------------------------------------------------------------

// create audio
let audio = new Audio();

// clutter to send dynamic data from array
let clutter = "";

// Show the list of songs
function showListOfSongs() {
    songs.forEach(function (song, index) {

        clutter += `<li data-index=" ${index} ">
            <img src=" ${song.imgUrl} " alt="ff">
            <h3>${song.songName} </h3><span>3:30</span>
        </li>`
        document.querySelector('#music-list').innerHTML = clutter;
    });
}
showListOfSongs();
//----------------------------------------------------------------------------------------------


// Music icon 
let backward = document.querySelector('#backward');
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let forward = document.querySelector('#forward');

// Store to selected song index value
var selectedSong = 0;

// Function to find the song from song List and play that song

function playSong() {
    
    let clutter = "";

    // On click list of music it find the music that click and play that song
    document.querySelector('#music-list').addEventListener("click", function (details) {

        backward.style.opacity = 1;
        forward.style.opacity = 1;
        // find the index value of click music and convert into number
        let indexValue = parseInt(details.target.dataset.index);
        songs[indexValue];

        document.querySelector('#img').style.backgroundImage = `url( ${songs[indexValue].imgUrl})`;

        // Find the url of song using clicked song from list of songs and play that song
        selectedSong = indexValue;
        audio.src = songs[selectedSong].songUrl;
        audio.play();

    });
};
playSong();
//----------------------------------------------------------------------------------------------


// Function for play and pause the songs..

function pauseAndPlaySongs() {
    let flag = 0;

    document.querySelector('#music-list').addEventListener("click", function () {
        if(pause.style.display = "block"){
            pause.style.display = "none";
            play.style.display = "block";
            audio.play();
            flag = 0
        }
    })

    // For the pause played song
    play.addEventListener('click', function () {
        if (flag == 0) {
            flag = 1;
            pause.style.display = "block";
            play.style.display = "none";
            audio.pause();
        }

    });
    // For the play paused song
    pause.addEventListener('click', function () {
        if (flag == 1) {
            play.style.display = "block";
            pause.style.display = "none";
            audio.play()
            flag = 0;
        }
    });

}
pauseAndPlaySongs();

//---------------------------------------------------------------------------------------------


// Function for music forward and backword

function forwardAndBackward() {

    backward.addEventListener('click', function () {
        playSong();
        if (selectedSong > 0) {
            selectedSong--;
            document.querySelector('#img').style.backgroundImage = `url( ${songs[selectedSong].imgUrl} )`
            audio.src = songs[selectedSong].songUrl
            audio.play()
            flag = 0;
        }
        else {
            audio.pause();
            play.style.display = "block";
            pause.style.display = "none";
            backward.style.opacity = .4;
        }
    });

    forward.addEventListener('click', function () {
        playSong();
        if (selectedSong < songs.length - 1) {
            selectedSong++;
            document.querySelector('#img').style.backgroundImage = `url( ${songs[selectedSong].imgUrl} )`
            audio.src = songs[selectedSong].songUrl
            audio.play()
            flag = 0;
        }
        else {
            audio.pause();

            play.style.display = "block";
            pause.style.display = "none";
            forward.style.opacity = .4;
        }
    });
}
forwardAndBackward();
//-----------------------------------------------------------------------------------------------