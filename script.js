let images = ["pexels-charles-1851164.jpg", "pexels-john-1159577.jpg", "pexels-rasmus-svinding-35435.jpg",
    "pexels-roman-odintsov-11760851.jpg", "pexels-roman-odintsov-11760865.jpg", "pexels-valeriia-miller-2560510.jpg"

]
let i = 0

function slides() {
    document.getElementById("slide-images").src = images[i];

    if (i < (images.length - 1))
        i++
    else
        i = 0

}

setInterval(slides, 5000)

