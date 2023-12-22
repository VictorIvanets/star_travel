"use strict";


const audio = new Audio("20af166b0a13e92.mp3")
const audio2 = new Audio("e61cdb72dc8aa8c.mp3")



document.querySelector(".btn_user").addEventListener("click", ()=>
{
    let name = document.querySelector(".input1").value
    let sname = document.querySelector(".input2").value
    let from = document.querySelector(".input3").value
    let email = document.querySelector(".input4").value
    let tel = document.querySelector(".input5").value
    document.querySelector(".user_name").textContent = name.toLocaleUpperCase().trim()
    document.querySelector(".user_sname").textContent = sname.toLocaleUpperCase().trim()
    document.querySelector(".user_from").textContent = from.toLocaleUpperCase().trim()
    document.querySelector(".user_email").textContent = email.toLocaleLowerCase().trim()
    document.querySelector(".user_tel").textContent = tel.toLocaleUpperCase().trim()
    
    document.querySelector(".user_box_1").classList.toggle("hidden")
    document.querySelector(".user_box_2").classList.toggle("hidden")
    audio2.play()
    }

);

document.querySelector(".btn_2user").addEventListener("click", ()=>
{

    document.querySelector(".user_box_2").classList.toggle("hidden")
    
    let name = document.querySelector(".input1").value
    let sname = document.querySelector(".input2").value
    let from = document.querySelector(".input3").value
    let email = document.querySelector(".input4").value
    let tel = document.querySelector(".input5").value

    document.querySelector(".user_box_3").insertAdjacentHTML("beforeend", `
<div class="user_box_1">
<p>  </p>
<p>  </p>
<p>ДЯКУЄМО ЗА РЕЄСТРАЦІЮ</p>
<p class="user1">${name.toLocaleUpperCase().trim()}</p>
<p class="user2">${sname.toLocaleUpperCase().trim()}</p>
<p class="user3">${from.toLocaleUpperCase().trim()}</p>
<p class="user4">${email.toLocaleLowerCase().trim()}</p>
<p class="user5">${tel.toLocaleUpperCase().trim()}</p>
<p>У НАЙБЛИЖЧИЙ ЧАС</p>
<p>МИ ВАМ</p>
<p>ЗАТЕЛЕФОНУЄМО</p>
<img class="icon" src="image/emoji_w200.gif" alt="">

<a class="btn_3user" href="SVUser1.html">ПРОВЕРЕНО</a>

</div>
    `);
})













