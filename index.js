//Her er 2 const (konstanter). De bruges til at overskueliggøre den øvige kode.
const imgCarousel = document.querySelector(".carousel");
const carouselScrollWidth = imgCarousel.scrollWidth;

//Lyt efter om hjemmesiden er loadet og om musen bevæger sig.
window.addEventListener('load', fotoCarousel);
window.addEventListener("mousemove", mousePos)

//Hastigheden karrusellen køre med. Jo højre tal jo hurdigere. Kan også være negativt tal, så kører karrusellen baglæns.
let hastighed = 1
// Antal ms (millisekunder) karrusellen skal stå stille før den restarter
let scrollStop = 100

//Start karrusel (uanset om musen har bevæget sig)
function fotoCarousel() {
    console.log("fotoCarousel")
    //setInterval er lige som setTimeout. setInterval genstrter bare automatisk.
    self.setInterval(() => {
        if (imgCarousel.scrollLeft !== carouselScrollWidth) {
            imgCarousel.scrollTo(imgCarousel.scrollLeft + hastighed, 0);
            console.log("hastighed: " + hastighed)
        }
    }, 1);
};

//Genstart karrusellen normal vej (positive tal)
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

//Genstart karrusellen baglæns (negative tal)
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

//Ændre hastigheden efter musens position
function mousePos(pos) {
    //Beregn hvor mange px en procent af skærmens bredde er
    let enProcentAfScreen = window.innerWidth / 100 * 1;

    //Dividere musens position på x-aksen med 1% af skærmens bredde. Dette gøres for at finde ud af, hvor langt til højre eller venstre på smærmen musen er. Helt til venstre er 0% og helt til højre er 100%
    let procentFraMus = pos.x / enProcentAfScreen

    //Justere hastigheden efter den procentsats musen er fra venstre
    //DER STÅR: hvis  musens procentsats er større end 95% (så altså fra 95% til 100%) så skal hastigheden være 10
    if (procentFraMus > 95) {
        hastighed = 10
        restart()
        //DER STÅR: ellers hvis  musens procentsats er større end 90% (så altså fra 90% til 95%) så skal hastigheden være 9
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

        //DER STÅR: ellers hvis  musens procentsats er større end 45% (så altså fra 45% til 50%) så skal hastigheden være -1
        //Det skal den fordi, musens procentsats er under 50% og derfor er musen på vensre side af midten.
        //-1 betyder at den kører baglæns. Jo lavere det nekative tal er jo hurdigere kører karrusellen baglæns.
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
