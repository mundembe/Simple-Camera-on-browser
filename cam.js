const video = document.getElementById('cam')

async function initCamera () {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(
            {
                video: {width: 1250, height: 720},
                audio: false
            }
        );
        video.srcObject = stream;
    } catch (error) {
        console.log("Camera access denied");
    }
}

initCamera();