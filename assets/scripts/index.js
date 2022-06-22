function buttonContinue() {
    let x = document.getElementById("intro-section");
    x.style.transform = 'translate(0,-100%)'
    x.style.transition ="1s"
    setTimeout(function(){window.location="index.html";}, 1100);
    }

    