const video = document.getElementById('cam')
const pausePlayBtn = document.getElementById('pause-play-btn')
const stopCameraBtn = document.getElementById('stop-camera-btn')
let stream = null;

async function startCamera () {
    try {
        stream = await navigator.mediaDevices.getUserMedia(
            {
                video: true,
                audio: false
            }
        );
        video.srcObject = stream;
        pausePlayBtn.innerText = "Play"
        stopCameraBtn.innerText = "Stop Camera"
        video.hidden = true;
    } catch (error) {
        console.log("Camera access denied");
    }
}

function stopCamera() {
    if (stream){
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        stream = null;

        stopCameraBtn.innerText = "Start Camera";
        pausePlayBtn.hidden = true;
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

stopCameraBtn.addEventListener('click', () => {
    if (stream){
        stopCamera();
        
    } else {
        startCamera();
        pausePlayBtn.hidden = false;
    }
})

startCamera();

