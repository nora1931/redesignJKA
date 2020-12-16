const imgCarousel = document.querySelector(".carousel");
const carouselScrollWidth = imgCarousel.scrollWidth;

window.addEventListener('load', fotoCarousel);
window.addEventListener("mousemove", mousePos)

let hastighed = 1
let scrollStop = 100

//Start karrusel
function fotoCarousel() {
    console.log("fotoCarousel")
    self.setInterval(() => {
        if (imgCarousel.scrollLeft !== carouselScrollWidth) {
            imgCarousel.scrollTo(imgCarousel.scrollLeft + hastighed, 0);
            console.log("hastighed: " + hastighed)
        }
    }, 1);
};

function restart() {
    let timer = null;
    imgCarousel.addEventListener('scroll', function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            console.log("restart")
            imgCarousel.scrollLeft = 0;
        }, scrollStop);
    }, false);
}

function restartBack() {
    let timer = null;
    imgCarousel.addEventListener('scroll', function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            console.log("restartBack")
            imgCarousel.scrollLeft = carouselScrollWidth;
        }, scrollStop);
    }, false);
}

function mousePos(pos) {
    let enProcentAfScreen = window.innerWidth / 100 * 1;
    let procentFraMus = pos.x / enProcentAfScreen
    //    console.log(procentFraMus);
    if (procentFraMus > 95) {
        hastighed = 10
        restart()

    } else if (procentFraMus > 90) {
        hastighed = 9
        restart()

    } else if (procentFraMus > 85) {
        hastighed = 8
        restart()

    } else if (procentFraMus > 80) {
        hastighed = 7
        restart()

    } else if (procentFraMus > 75) {
        hastighed = 6
        restart()

    } else if (procentFraMus > 70) {
        hastighed = 5
        restart()

    } else if (procentFraMus > 65) {
        hastighed = 4
        restart()

    } else if (procentFraMus > 60) {
        hastighed = 3
        restart()

    } else if (procentFraMus > 55) {
        hastighed = 2
        restart()

    } else if (procentFraMus > 50) {
        hastighed = 1
        restart()

    } else if (procentFraMus > 45) {
        hastighed = -1
        restartBack()

    } else if (procentFraMus > 40) {
        hastighed = -2
        restartBack()

    } else if (procentFraMus > 35) {
        hastighed = -3
        restartBack()

    } else if (procentFraMus > 30) {
        hastighed = -4
        restartBack()

    } else if (procentFraMus > 25) {
        hastighed = -5
        restartBack()

    } else if (procentFraMus > 20) {
        hastighed = -6
        restartBack()

    } else if (procentFraMus > 15) {
        hastighed = -7
        restartBack()

    } else if (procentFraMus > 10) {
        hastighed = -8
        restartBack()

    } else if (procentFraMus > 5) {
        hastighed = -9
        restartBack()

    } else {
        hastighed = -10;
        restartBack()

    }
}
