function setVideoLogic(video, videoPlay, videoPause) {
  videoPlay.addEventListener("click", () => {
    videoPlay.classList.remove("active");
    videoPause.classList.add("active");
    video.play();
  });

  videoPause.addEventListener("click", () => {
    videoPause.classList.remove("active");
    videoPlay.classList.add("active");
    video.pause();
  });
}

export default setVideoLogic;
