const modalContainer = document.getElementById('modalContainer');
const openModal = document.getElementById('openModal');
const youtubeIframe = document.getElementById('youtubeIframe');

openModal.addEventListener("click", function() {
    modalContainer.style.display = 'block';
})

window.addEventListener("click", function (e){
    if (e.target == modalContainer) {
      modalContainer.style.display = 'none'
      youtubeIframe.src = youtubeIframe.scroll;  
    }
})

function playAudio() {
    let music = document.getElementById('music');
    music.play()
}