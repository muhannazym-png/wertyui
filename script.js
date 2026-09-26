function openMenu() {

    const welcome = document.getElementById("welcomeScreen");
    const menu = document.getElementById("menuScreen");

    // Небольшая анимация нажатия

    welcome.style.transform = "scale(1.03)";
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        menu.style.display = "block";

        setTimeout(() => {
            menu.style.opacity = "1";
        }, 50);

    }, 800);
}


/* =================================
   КАРТОЧКИ
================================= */

function openPage(page) {

    if (page === "calendar") {

        alert("Здесь будет наш календарь ❤️");

    }

    else if (page === "words") {

        alert("Здесь будут наши особенные слова.");

    }

    else if (page === "playlist") {

        alert("Здесь будет наша музыка и аудио.");

    }

    else if (page === "letter") {

        alert("Здесь будет письмо.");

    }

    else if (page === "photos") {

        alert("Здесь будет фотоальбом.");

    }

    else if (page === "things") {

        alert("Здесь будут вещи, которые напоминают мне о тебе.");

    }

}
/* =================================
   PLAYLIST
================================= */

const songs = [

    
    {
        title: "Very Very Much",
        artist: "Our memories",
        file: "very_very_much.ogg",
        cover: "song8.jpg"
    },

    {
        title: "Oke Oke",
        artist: "Our memories",
        file: "okeoke.ogg",
        cover: "song9.jpg"
    },

    {
        title: "Mooo 1",
        artist: "Our memories",
        file: "mooo1.ogg",
        cover: "song10.jpg"
    },

    {
        title: "Mooo 2",
        artist: "Our memories",
        file: "mooo2.ogg",
        cover: "song11.jpg"
    },

    {
        title: "Mooo 3",
        artist: "Our memories",
        file: "mooo3.ogg",
        cover: "song12.jpg"
    },

    {
        title: "Mooo 4",
        artist: "Our memories",
        file: "mooo4.ogg",
        cover: "song13.jpg"
    },

    {
        title: "Mooo 5",
        artist: "Our memories",
        file: "mooo5.ogg",
        cover: "song14.jpg"
    },

    {
        title: "Mooo 6",
        artist: "Our memories",
        file: "mooo6.ogg",
        cover: "song15.jpg"
    },

    {
        title: "Ma Tumse Pyar Karta Hu",
        artist: "Our memories",
        file: "matumsepyarkartahu2.ogg",
        cover: "song16.jpg"
    },

    {
        title: "Ma Tumse Pyar Karta Hu",
        artist: "Our memories",
        file: "matumsepyarkartahu.ogg",
        cover: "song17.jpg"
    },

    {
        title: "Karta",
        artist: "Our memories",
        file: "karta.ogg",
        cover: "song18.jpg"
    },

    {
        title: "I Appreciate",
        artist: "Our memories",
        file: "iappreciate.ogg",
        cover: "song19.jpg"
    },

    {
        title: "How Was Your Day",
        artist: "Our memories",
        file: "howwasyourday.ogg",
        cover: "song20.jpg"
    },

    {
        title: "Horosho",
        artist: "Our memories",
        file: "horosho.ogg",
        cover: "song21.jpg"
    },

    {
        title: "Horosho 2",
        artist: "Our memories",
        file: "horosho2.ogg",
        cover: "song22.jpg"
    },

    {
        title: "Horosho 3",
        artist: "Our memories",
        file: "horosho3.ogg",
        cover: "song23.jpg"
    },

    {
        title: "Acha",
        artist: "Our memories",
        file: "acha.ogg",
        cover: "song24.jpg"
    },

    {
        title: "Achcha",
        artist: "Our memories",
        file: "achcha.ogg",
        cover: "song25.jpg"
    },

    {
        title: "Ahahaha",
        artist: "Our memories",
        file: "ahahaha.ogg",
        cover: "song26.jpg"
    },

    {
        title: "Ahahaha 2",
        artist: "Our memories",
        file: "ahahaha2.ogg",
        cover: "song27.jpg"
    },

    {
        title: "Ahahaha 3",
        artist: "Our memories",
        file: "ahahaha3.ogg",
        cover: "song28.jpg"
    },

    {
        title: "Ahhhh",
        artist: "Our memories",
        file: "ahhhh.ogg",
        cover: "song29.jpg"
    },

    {
        title: "Ayueon Meows Playfully",
        artist: "Ayueon",
        file: "ayueon_meows_playfully.ogg",
        cover: "song30.jpg"
    },

    {
        title: "Ayueon Meowing",
        artist: "Ayueon",
        file: "ayueon_meowing.ogg",
        cover: "song31.jpg"
    },

    {
        title: "Ayueon Laughing",
        artist: "Ayueon",
        file: "ayueon_laughing.ogg",
        cover: "song32.jpg"
    },

    {
        title: "Bakhut Bakhut",
        artist: "Our memories",
        file: "bakhut_bakhut.ogg",
        cover: "song33.jpg"
    }

];


let currentSong = 0;

let repeatSong = false;

const audio = document.getElementById("audioPlayer");


/* OPEN PLAYLIST */

function openPlaylist() {

    document.getElementById("menuScreen").style.display = "none";

    document.getElementById("playlistPage").style.display = "block";

    loadSong(currentSong);

}


/* CLOSE PLAYLIST */

function closePlaylist() {

    audio.pause();

    document.getElementById("playlistPage").style.display = "none";

    document.getElementById("menuScreen").style.display = "block";

}


/* LOAD SONG */

function loadSong(index) {

    currentSong = index;

    const song = songs[currentSong];

    audio.src = song.file;

    document.getElementById("songTitle").textContent = song.title;

    document.getElementById("songArtist").textContent = song.artist;

    document.getElementById("songCover").src = song.cover;

    document.getElementById("playButton").textContent = "▶";

    updateSongList();

}


/* PLAY / PAUSE */

function togglePlay() {

    if (audio.paused) {

        audio.play();

        document.getElementById("playButton").textContent = "Ⅱ";

    } else {

        audio.pause();

        document.getElementById("playButton").textContent = "▶";

    }

}


/* NEXT */

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    loadSong(currentSong);

    audio.play();

    document.getElementById("playButton").textContent = "Ⅱ";

}


/* PREVIOUS */

function previousSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    loadSong(currentSong);

    audio.play();

    document.getElementById("playButton").textContent = "Ⅱ";

}


/* REPEAT */

function toggleRepeat() {

    repeatSong = !repeatSong;

    const button = document.getElementById("repeatButton");

    button.classList.toggle("active", repeatSong);

}


/* SONG FINISHED */

audio.addEventListener("ended", function() {

    if (repeatSong) {

        audio.currentTime = 0;

        audio.play();

    } else {

        nextSong();

    }

});


/* PROGRESS */

audio.addEventListener("timeupdate", function() {

    if (!audio.duration) return;

    const progress =
        (audio.currentTime / audio.duration) * 100;

    document.getElementById("progressBar").value = progress;

    document.getElementById("currentTime").textContent =
        formatTime(audio.currentTime);

    document.getElementById("duration").textContent =
        formatTime(audio.duration);

});


/* CHANGE PROGRESS */

document.getElementById("progressBar").addEventListener("input", function() {

    if (!audio.duration) return;

    audio.currentTime =
        (this.value / 100) * audio.duration;

});


/* FORMAT TIME */

function formatTime(seconds) {

    if (isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return minutes + ":" + String(secs).padStart(2, "0");

}


/* SONG LIST */

function updateSongList() {

    const list = document.getElementById("songList");

    list.innerHTML = "";

    songs.forEach(function(song, index) {

        const item = document.createElement("div");

        item.className = "song-item";

        if (index === currentSong) {

            item.classList.add("active");

        }

        item.innerHTML = `
            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-name">
                ${song.title}
            </div>
        `;

        item.onclick = function() {

            loadSong(index);

            audio.play();

            document.getElementById("playButton").textContent = "Ⅱ";

        };

        list.appendChild(item);

    });

}