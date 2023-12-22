"use strict";



const btnOpenModel = document.querySelector('.topImage__1');
const modelWindow = document.querySelector('.modal1');
const btnCloseModel = document.querySelector('.close-modal1');
const btnNextModel1 = document.querySelector('.next-modal1');
const btnBackModel1 = document.querySelector('.back-modal1')

const btnOpenModel2 = document.querySelector('.topImage__2');
const modelWindow2 = document.querySelector('.modal2');
const btnCloseModel2 = document.querySelector('.close-modal2');
const btnNextModel2 = document.querySelector('.next-modal2');
const btnBackModel2 = document.querySelector('.back-modal2')


const btnOpenModel3 = document.querySelector('.topImage__3');
const modelWindow3 = document.querySelector('.modal3');
const btnCloseModel3 = document.querySelector('.close-modal3');
const btnNextModel3 = document.querySelector('.next-modal3');
const btnBackModel3 = document.querySelector('.back-modal3')


const btnOpenModel4 = document.querySelector('.topImage__4');
const modelWindow4 = document.querySelector('.modal4');
const btnCloseModel4 = document.querySelector('.close-modal4');
const btnNextModel4 = document.querySelector('.next-modal4');
const btnBackModel4 = document.querySelector('.back-modal4')


const btnOpenModel5 = document.querySelector('.topImage__5');
const modelWindow5 = document.querySelector('.modal5');
const btnCloseModel5 = document.querySelector('.close-modal5');
const btnNextModel5 = document.querySelector('.next-modal5');
const btnBackModel5 = document.querySelector('.back-modal5')


const btnOpenModel6 = document.querySelector('.topImage__6');
const modelWindow6 = document.querySelector('.modal6');
const btnCloseModel6 = document.querySelector('.close-modal6');
const btnNextModel6 = document.querySelector('.next-modal6');
const btnBackModel6 = document.querySelector('.back-modal6')


const overlay = document.querySelector('.overlay');




//-------------------------------

btnOpenModel.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});

btnCloseModel.addEventListener('click', ()=> {
overlay.classList.toggle("hidden");
modelWindow.classList.toggle("hidden");
});

document.addEventListener("keydown", (ev)=>{
    if (ev.key == "Escape" && !modelWindow.classList.contains("hidden")){
        overlay.classList.toggle("hidden");
        modelWindow.classList.toggle("hidden");
    }
});

//-------------------------

    btnOpenModel2.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow2.classList.toggle("hidden");
    });
    
    btnCloseModel2.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow2.classList.toggle("hidden");
    });

    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow2.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow2.classList.toggle("hidden");
        }
    });

    //-----------------------

    btnOpenModel3.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow3.classList.toggle("hidden");
    });
    
    btnCloseModel3.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow3.classList.toggle("hidden");
    });
    
    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow3.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow3.classList.toggle("hidden");
        }
    });

//-------------------------------------

btnOpenModel4.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow4.classList.toggle("hidden");
    });
    
    btnCloseModel4.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow4.classList.toggle("hidden");
    });
    
    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow4.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow4.classList.toggle("hidden");
        }
    });

//------------------------------------
btnOpenModel5.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow5.classList.toggle("hidden");
    });
    
    btnCloseModel5.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow5.classList.toggle("hidden");
    });
    
    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow5.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow5.classList.toggle("hidden");
        }
    });


//------------------------------------
btnOpenModel6.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow6.classList.toggle("hidden");
    });
    
    btnCloseModel6.addEventListener('click', ()=> {
    overlay.classList.toggle("hidden");
    modelWindow6.classList.toggle("hidden");
    });
    
    document.addEventListener("keydown", (ev)=>{
        if (ev.key == "Escape" && !modelWindow6.classList.contains("hidden")){
            overlay.classList.toggle("hidden");
            modelWindow6.classList.toggle("hidden");
        }
    });


//------------------------------------







    btnNextModel1.addEventListener('click', ()=> {
        modelWindow.classList.toggle("hidden");
        modelWindow2.classList.toggle("hidden");
    })
    btnNextModel2.addEventListener('click', ()=> {
        modelWindow2.classList.toggle("hidden");
        modelWindow3.classList.toggle("hidden");
    })

    btnNextModel3.addEventListener('click', ()=> {
        modelWindow3.classList.toggle("hidden");
        modelWindow4.classList.toggle("hidden");
    })

    btnNextModel4.addEventListener('click', ()=> {
        modelWindow4.classList.toggle("hidden");
        modelWindow5.classList.toggle("hidden");
    })
    btnNextModel5.addEventListener('click', ()=> {
        modelWindow5.classList.toggle("hidden");
        modelWindow6.classList.toggle("hidden");
    })

    btnNextModel6.addEventListener('click', ()=> {
        modelWindow6.classList.toggle("hidden");
        modelWindow.classList.toggle("hidden");
    })

//////
    btnBackModel1.addEventListener('click', ()=> {
        modelWindow.classList.toggle("hidden");
        modelWindow6.classList.toggle("hidden");
    })
    btnBackModel6.addEventListener('click', ()=> {
        modelWindow6.classList.toggle("hidden");
        modelWindow5.classList.toggle("hidden");
    })

    btnBackModel5.addEventListener('click', ()=> {
        modelWindow5.classList.toggle("hidden");
        modelWindow4.classList.toggle("hidden");
    })

    btnBackModel4.addEventListener('click', ()=> {
        modelWindow4.classList.toggle("hidden");
        modelWindow3.classList.toggle("hidden");
    })
    btnBackModel3.addEventListener('click', ()=> {
        modelWindow3.classList.toggle("hidden");
        modelWindow2.classList.toggle("hidden");
    })

    btnBackModel2.addEventListener('click', ()=> {
        modelWindow2.classList.toggle("hidden");
        modelWindow.classList.toggle("hidden");
    })



    

