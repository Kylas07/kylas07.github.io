document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");
    const pauseButton = document.getElementById("pause-button");
    const playImage = document.getElementById("play-image");
    var isPlaying = true;
    const scrollButton = document.getElementById("scroll-button");
    const sliderduo = document.querySelector(".sliderduo");
    pauseButton.addEventListener("click", function() {
        if (isPlaying) {
            video.pause();
            playImage.src = "/assets/playbutton.svg";
        } else {
            video.play();
            playImage.src = "/assets/stopbutton.svg";
        }
        isPlaying = !isPlaying;
    });
    scrollButton.addEventListener("click", function() {
        var targetPosition = sliderduo.offsetTop + sliderduo.offsetHeight / 2;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});
