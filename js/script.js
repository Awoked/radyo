function page1() {
    let page = document.querySelector("#mainContent");
    page.src = "html/page1.html";
}

function page2() {
    let page = document.querySelector("#mainContent");
    page.src = "html/page2.html";''
}



function audioPlay() {
    let audio = document.querySelector('.audio');
    let audioPPButton = document.querySelector('#playPauseButton');
    if (audioPPButton.innerHTML == "pause_circle") {
        audio.innerHTML = " ";
        audioPPButton.innerHTML = "play_circle";
    }else{
        audio.innerHTML = "<iframe class='d-none' width='0' height='0' src='https://www.youtube.com/embed/ceqgwo7U28Y?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>";
        audioPPButton.innerHTML = "pause_circle";
    }
}