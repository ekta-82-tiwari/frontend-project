
let sliderop = document.querySelector(".sliderop");
let slides = document.querySelectorAll(".reviewtrack");
let count = 0;
let foodcard = document.querySelectorAll(".foodcard");

function myFun() {
  sliderop.style.transform = `translateX(-${count * 100}%)`;
}

setInterval(function () {
  count++;
  if (count === slides.length) {
    count = 0;
  }
  myFun();
}, 3000);


foodcard.forEach(function(card){
  card.addEventListener("click",function(){
    console.log(card);
    let div = document.createElement("div");
    div.classList.add("carddetail");
    div.innerHTML=`
       <i id="icons" class="fa-solid fa-xmark"></i>
       <img src=${card.firstElementChild.src} alt="">
        <p>Eat Best Eat Delious</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorem esse?</p>
    `
     document.querySelector("body").appendChild(div)
     document.getElementById("icons").addEventListener("click",function(){
       div.remove()

     })
  })


})










