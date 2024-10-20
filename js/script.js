let play = document.querySelector("#play");
const songs = [
        './songs/Akasam .mp3',
        './songs/Ayudha Pooja .mp3',
        './songs/Chalore .mp3',
        './songs/Chutammale .mp3',
        './songs/Dilse .mp3',
        './songs/Fear Song .mp3',
        './songs/Jennifer .mp3',
        './songs/My Heart .mp3',
        './songs/Pilla Nuvu .mp3',
        './songs/You and I .mp3'
];
function secondsToMinutesSeconds(seconds) {
        if (isNaN(seconds) || seconds < 0) {
            return "00:00";
        }
    
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
    
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    let currentSong = songs[0];
 currentSong = new Audio();
//show all the songs in plalist
let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
for(const song of songs){
        songUL.innerHTML = songUL.innerHTML +
                `<li><img class = "filter" src = "img/8_music.svg">
                        <div class="info">
                            <div class ="songInfo">${song.replaceAll("./songs/"," ")}</div>
                            <div class ="songInfo">${"Ram Reddy"}</div>
                        </div>
                        <div class = "playNow">
                             <span>Play now</span>
                      <img  class = "filter"src="img/5_play.svg" alt="">
                        </div>
                    </li>`;
}

//playMusic function

     const playMusic = (track)=>{
        currentSong.src =  "./songs/" + track;
        play.src = "img/10_pause.svg";
        currentSong.play()
        document.querySelector(".song-info").innerHTML = track;
        document.querySelector(".song-time").innerHTML = "00:00/00:00"
     }

// Attach an event listner to each song

Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
                console.log(e.querySelector(".info").firstElementChild.innerHTML);
                playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
})

// Attach an event listner to prev,play,next

play.addEventListener("click",()=>{
        if(currentSong.paused){
                currentSong.play();
                play.src = "img/10_pause.svg"
        }
        else{
                currentSong.pause();
                play.src = "img/5_play.svg"
        }
})
let prev = document.querySelector("#previous");

//Attach event listner for currentSong.duration)}`

currentSong.addEventListener("timeupdate",()=>{
        document.querySelector(".song-time").innerHTML = 
        `${secondsToMinutesSeconds(currentSong.currentTime)}/
        ${secondsToMinutesSeconds(currentSong.duration)}`

        document.querySelector(".circle").style.left = 
        (currentSong.currentTime/currentSong.duration) *100 + "%"
})

//Add event listner to seekbar to change duration
document.querySelector(".seekbar").addEventListener("click",(e)=>{
     let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
        document.querySelector(".circle").style.left = percent + "%";

        currentSong.currentTime = ((currentSong.duration)*percent)/100;
})

//Add Event Listner to previous.
/*document.querySelector("#previous").addEventListener("click",()=>{
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        console.log(songs,index);
})*/



        

