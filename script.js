const images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuTbYHX4guqqhARZ_u2-ZPTaGEUCdsslDaA&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUAF2vrlqb1b1VYbQeeIieKX9ORqWW5EvvA&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94cn1WbeqHekCixMvQfZIGwLp46-C4idwAw&s'];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('updateimg').src = images[currentIndex];
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 2000);



// for accordian 
$(document).ready(function () {
    $(".upper").click(function () {
        $(".lower").slideToggle("slow");
    });
})
$(document).ready(function () {
    $(".upper2").click(function () {
        $(".lower2").slideToggle("slow");
    });
})
$(document).ready(function () {
    $(".upper3").click(function () {
        $(".lower3").slideToggle("slow");
    });
})
$(document).ready(function () {
    $(".upper4").click(function () {
        $(".lower4").slideToggle("slow");
    });
})