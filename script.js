const dino = document.getElementById('cat');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (cat.classList != "jump") {
        cat.classList.add("jump")
    }
    setTimeout ( function() {
        dino.classList.remove("jump")
    }, 700)
}

let isAlive = setInterval ( function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && catTop >= 140) {
        alert("Game over")
    }
}, 10)
