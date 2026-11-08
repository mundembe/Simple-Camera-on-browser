const video = document.getElementById('cam')

async function initCamera () {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(
            {
                video: true,
                audio: false
            }
        );
        video.srcObject = stream;
    } catch (error) {
        console.log("Camera access denied");
    }
}

initCamera();

