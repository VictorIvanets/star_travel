
class Card {
    constructor(user_name, user_sname, user_from, user_email, user_tel, parent){
        this.user_name=user_name;
        this.user_sname=user_sname;
        this.user_from=user_from;
        this.user_email=user_email;
        this.user_tel=user_tel;
        this.parent=parent;
    }

render()
{
    document.querySelector(".btn_user").insertAdjacentHTML("beforeend", `

<div class="user_box_1">
<p class="user1">${this.user_name}</p>
<p class="user2">${this.user_sname}</p>
<p class="user3">${this.user_from}</p>
<p class="user4">${this.user_email}</p>
<p class="user5">${this.user_tel}</p>
<p><a class="btn_user" href="">ОК</a></p>
</div>

    `);
}
}

document.querySelector(".btn_user").addEventListener('click', ()=> {
        new Card
            (
            posision[0], 
            posision[1], 
            posision[2], 
            posision[3], 
            posision[4], 
            ".user_box_1").render();

    }

)

/*

let posision = [
    document.querySelector(".input1").value,
    document.querySelector(".input2").value,
    document.querySelector(".input3").value,
    document.querySelector(".input4").value,
    document.querySelector(".input5").value
    ]

*/

/*
document.querySelector(".btn_user").addEventListener("click", ()=> 
{
const displayMessage = function (message)
{
document.querySelector(".user_name").textContent = message;
};
displayMessage(document.querySelector(".input1").value)

});
*/

/*
const userName = {
    name: prompt("Имя"),
    city: prompt("Город"),
    age: prompt("Вораст"),
    };
    
    
    let name1 = userName.name
    let city = userName.city
    let age = userName.age
    
    let elem1 = document.querySelector(".user_name")
    let oldElem1 = elem1.innerHTML;
    let elem2 = document.querySelector(".user_sname")
    let oldElem2 = elem2.innerHTML;
    let elem3 = document.querySelector(".user_from")
    let oldElem3 = elem3.innerHTML;
    
    elem1.textContent = `${name1}` 
    elem2.textContent = `${city}`
    elem3.textContent = `${age}`
*/

/*

    let userR = document.querySelector(".btn_user")
    userR.addEventListener("click", ()=> {

        const guess1 = (document.querySelector(".input1").value);
        const guess2 = (document.querySelector(".input2").value);
        const guess3 = (document.querySelector(".input3").value);
        const guess4 = (document.querySelector(".input4").value);
        const guess5 = (document.querySelector(".input5").value);

        const userName = {
            name: guess1,
            fam: guess2,
            city: guess3,
            mail: guess4,
            tel: guess5,
            };
    
    let name1 = userName.name
    let fam = userName.fam
    let city = userName.city
    let mail = userName.mail
    let tel = userName.tel
    
    let elem1 = document.querySelector(".user_name")
    let elem2 = document.querySelector(".user_sname")
    let elem3 = document.querySelector(".user_from")
    let elem4 = document.querySelector(".user_email")
    let elem5 = document.querySelector(".user_tel")
    
    elem1.textContent = `${name1}` 
    elem2.textContent = `${fam}` 
    elem3.textContent = `${city}` 
    elem4.textContent = `${mail}`
    elem5.textContent = `${tel}`
    
}    );
*/


