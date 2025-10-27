// Thay link YouTube hoặc nhúng video khác tại `videoUrl`
const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"; // <-- thay link ở đây

const envelope = document.getElementById("envelope");
const videoContainer = document.getElementById("videoContainer");

function createVideoFrame(url){
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  return iframe;
}

function openEnvelope(){
  if(envelope.classList.contains("open")){
    // đóng lại: remove nội dung video
    envelope.classList.remove("open");
    envelope.setAttribute("aria-pressed", "false");
    videoContainer.innerHTML = "";
  } else {
    // mở: show video + giữ lời chúc
    envelope.classList.add("open");
    envelope.setAttribute("aria-pressed", "true");
    // chèn iframe video (lần đầu)
    if(!videoContainer.querySelector("iframe")){
      const iframe = createVideoFrame(videoUrl);
      videoContainer.appendChild(iframe);
    }
  }
}

// click to open
envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("keydown", (e)=>{
  // support Enter / Space
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    openEnvelope();
  }
});

// create decorative hearts in background
(function makeHearts(){
  const bg = document.querySelector('.hearts-bg');
  if(!bg) return;
  const hearts = 5;
  const symbols = ['❤️','💖','💘','💕','💗'];
  for(let i=0;i<hearts;i++){
    const s = document.createElement('span');
    s.textContent = symbols[i % symbols.length];
    bg.appendChild(s);
  }
})();
