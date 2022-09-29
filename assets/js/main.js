window.addEventListener("click", function(){
    const audio = document.getElementById("music");
    audio.play();
    audio.volume = 0.2;
})

function SwitchTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    const theme = document.getElementById("music");
    const music = theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg"

    const audio = document.getElementById("music");
    audio.src = "assets/sounds/${music}";
    audio.play();
    audio.volume = 0.2;
}