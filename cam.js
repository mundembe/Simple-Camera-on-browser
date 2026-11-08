const video = document.getElementById('cam')
const pausePlayBtn = document.getElementById('pause-play')

async function initCamera () {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(
            {
                video: true,
                audio: false
            }
        );
        video.srcObject = stream;
        pausePlayBtn.innerText = "Play"
        video.hidden = true;
    } catch (error) {
        console.log("Camera access denied");
    }
}

pausePlayBtn.addEventListener('click', ()=>{
    if (video.paused) {
        video.play();
        video.hidden = false;
        pausePlayBtn.innerText = "Pause";
    } else {
        video.pause();
        video.hidden = true;
        pausePlayBtn.innerText = "Play";
    }
})

initCamera();

