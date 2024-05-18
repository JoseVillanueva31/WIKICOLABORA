document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('audio-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let audioContext;
    let analyser;
    let dataArray;
    let bufferLength;

    function setupAudioContext() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        // Create a media element source
        const audioElement = new Audio('media/login.mp3');
        audioElement.crossOrigin = 'anonymous';
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        
        audioElement.play();
        draw();
    }

    function draw() {
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            const r = barHeight + (25 * (i / bufferLength));
            const g = 250 * (i / bufferLength);
            const b = 50;

            11, 190, 190
            ctx.fillStyle = `rgb(${11},${190},${190})`;
            ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

            x += barWidth + 1;
        }
    }

    window.addEventListener('click', function() {
        if (!audioContext) {
            setupAudioContext();
        }
    });
});
