// This file will contain the slider logic for both images and videos

document.addEventListener('DOMContentLoaded', function() {
    // Image Slider
    const imgSlider = document.querySelector('.image-slider');
    const imgSlides = document.querySelectorAll('.image-slider .slide');
    let imgIndex = 0;
    let imgInterval = null;
    function showImgSlide(idx) {
        imgSlides.forEach((slide, i) => {
            slide.style.display = i === idx ? 'block' : 'none';
        });
    }
    function nextImgSlide() {
        imgIndex = (imgIndex + 1) % imgSlides.length;
        showImgSlide(imgIndex);
    }
    function prevImgSlide() {
        imgIndex = (imgIndex - 1 + imgSlides.length) % imgSlides.length;
        showImgSlide(imgIndex);
    }
    document.querySelector('.img-next').onclick = function() {
        nextImgSlide();
        resetImgInterval();
    };
    document.querySelector('.img-prev').onclick = function() {
        prevImgSlide();
        resetImgInterval();
    };
    function startImgInterval() {
        imgInterval = setInterval(nextImgSlide, 3000);
    }
    function resetImgInterval() {
        clearInterval(imgInterval);
        startImgInterval();
    }
    showImgSlide(imgIndex);
    startImgInterval();

    // Video Slider
    const vidSlider = document.querySelector('.video-slider');
    const vidSlides = document.querySelectorAll('.video-slider .slide');
    let vidIndex = 0;
    function showVidSlide(idx) {
        vidSlides.forEach((slide, i) => {
            slide.style.display = i === idx ? 'block' : 'none';
            // Pause all videos except the current
            const video = slide.querySelector('video');
            if (video) {
                if (i === idx) video.play();
                else { video.pause(); video.currentTime = 0; }
            }
        });
    }
    function nextVidSlide() {
        vidIndex = (vidIndex + 1) % vidSlides.length;
        showVidSlide(vidIndex);
    }
    function prevVidSlide() {
        vidIndex = (vidIndex - 1 + vidSlides.length) % vidSlides.length;
        showVidSlide(vidIndex);
    }
    document.querySelector('.vid-next').onclick = nextVidSlide;
    document.querySelector('.vid-prev').onclick = prevVidSlide;
    showVidSlide(vidIndex);
});
