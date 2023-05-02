const btn= document.querySelector(".collaps-btn")

const text = document.querySelector(".collapsible")

btn.addEventListener("click", ()=> {
  text.classList.toggle("show");
})
