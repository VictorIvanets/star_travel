"use strict";


const audio = new Audio("20af166b0a13e92.mp3")
const audio2 = new Audio("e61cdb72dc8aa8c.mp3")

document.querySelector(".btn_user").addEventListener("click", ()=>
{
if (document.querySelector(".input1") != null)
{
   
    document.querySelector(".user_name").textContent = document.querySelector(".input1").value
    document.querySelector(".user_sname").textContent = document.querySelector(".input2").value
    document.querySelector(".user_from").textContent = document.querySelector(".input3").value
    document.querySelector(".user_email").textContent = document.querySelector(".input4").value
    document.querySelector(".user_tel").textContent = document.querySelector(".input5").value
    document.querySelector(".user_box_1").classList.toggle("hidden")
    document.querySelector(".user_box_2").classList.toggle("hidden")
    audio2.play()
    }
else (document.querySelector(".input1") == null)
{
    const displayMessage = function (message){
    document.querySelector(".message").textContent = message;};
    displayMessage("ВВЕДІТЬ ДАНІ")
    audio.play()
    }

}
);


let name = document.querySelector(".user_name").firstChild
let sname =  document.querySelector(".user_sname").firstChild
let from = document.querySelector(".user_from").firstChild
let email = document.querySelector(".user_email").firstChild
let tel = document.querySelector(".user_tel").firstChild

document.querySelector(".btn_2user").addEventListener("click", ()=>
{
    document.querySelector(".user_box_1").classList.toggle("hidden")
    document.querySelector(".user_box_2").classList.toggle("hidden")
    document.querySelector(".adress").insertAdjacentHTML("beforeend", `
<div class="user_box_1">
<p class="user1">${name}</p>
<p class="user2">${sname}</p>
<p class="user3">${from}</p>
<p class="user4">${email}</p>
<p class="user5">${tel}</p>
</div>
    `);

    document.querySelector(".input1").textContent
    document.querySelector(".input2").textContent
    document.querySelector(".input3").textContent
    document.querySelector(".input4").textContent
    document.querySelector(".input5").textContent
})









