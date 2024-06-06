const clickBtn = document.getElementById("click-btn")
const app = document.querySelector(".app")

clickBtn.addEventListener("click", ()=>{
    app.classList.toggle("bright")
})