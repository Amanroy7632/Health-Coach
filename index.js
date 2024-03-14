const searchForm=document.querySelector(".search-form");
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchData=document.getElementById("search");
    console.log(searchData.value);
    searchForm.reset();
})
const inputDiv=document.querySelector(".input-container");
inputDiv.addEventListener("click",()=>{
  inputDiv.classList.add("border")
  setTimeout(() => {
    inputDiv.classList.remove("border")
  }, 5000);
})
function changeBackgoundColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`

}
document.querySelector(".hamburg-icon").addEventListener("click",()=>{
    const hamburgIcon = document.querySelector(".hamburg-icon");
            const navBarIcon = document.querySelector(".nav-ul");
            hamburgIcon.classList.toggle("changeIcon");
            navBarIcon.classList.toggle("show-menu");
            // document.getElementsByClassName("menubar");
            // document.querySelector(".navbar").classList.toggle("dark-mode");
})
// setInterval(()=>{
//     document.querySelector("header").style.backgroundColor=changeBackgoundColor();
// },1000)