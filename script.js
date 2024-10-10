// Element ที่ต้องการใช้
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');
const backgroundMusic = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');

// รายการเพลง
const playlist = ['music/music1.mp3', 'music/music2.mp3'];
let currentSongIndex = 0;

// ฟังก์ชันเล่นเพลง
function playMusic() {
    backgroundMusic.play();
    musicIcon.classList.add('rotate'); 
}

// ฟังก์ชันหยุดเพลง
function pauseMusic() {
    backgroundMusic.pause();
    musicIcon.classList.remove('rotate'); 
}

// ฟังก์ชันเปลี่ยนเพลงถัดไป
function nextMusic() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length; 
    backgroundMusic.src = playlist[currentSongIndex]; 
    playMusic();
}

// เพิ่ม event listeners ให้กับปุ่ม
playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);
nextButton.addEventListener('click', nextMusic);

// หยุดหมุนไอคอน เพลงจบ
backgroundMusic.addEventListener('ended', function() {
    musicIcon.classList.remove('rotate');
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top; 
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset; 

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' 
        });
    });
});
