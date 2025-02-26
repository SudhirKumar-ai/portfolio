document.addEventListener("DOMContentLoaded", () => {
    const videoList = document.querySelectorAll("video"); // Select all videos dynamically
    const hoverSign = document.querySelector(".hover-sign");


   const sideBar = document.querySelector('.sidebar');
   const menu= document.querySelector('.menu-icon');
   const close= document.querySelector('.close-icon');

    videoList.forEach(video => {
        video.muted = true; // Ensure the video is muted (required for autoplay in some browsers)

        video.addEventListener("mouseenter", () => {
            video.play().catch(error => console.error("Playback error:", error)); // Handle errors if any
            hoverSign.classList.add("active");
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            hoverSign.classList.remove("active");
        });

    });

menu.addEventListener("click",function(){
    sideBar.classList.add("open-sidebar")
    sideBar.classList.remove("close-sidebar")
})

close.addEventListener("click",function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})
});