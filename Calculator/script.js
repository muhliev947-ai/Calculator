/*global Main */

const calc = Main();

const display = document.getElementById("display");

function updateDisp(){
display.innerText = calc.currentValue || "0";

const len = display.innerText.length;

if(len <= 9){
    display.style.fontSize="2rem"
}else if(len > 14){
    display.style.fontSize="1rem";
}
}

document.querySelectorAll("[data-num]").forEach(btn =>{
    btn.addEventListener("click",()=>{
        calc.inputValue(btn.dataset.num);
        updateDisp();
    });
});

document.querySelectorAll("[data-op]").forEach(btn =>{
    btn.addEventListener("click",() =>{
        calc.inputOperator(btn.dataset.op)
        updateDisp();
    })
})



document.querySelector("[data-action='cp']").addEventListener("click",()=>{
    calc.Cp();
    updateDisp();
});

document.querySelector("[data-action='sign']").addEventListener("click",()=>{
    calc.changeOp();
    updateDisp();
})

document.querySelector("[data-action='clear']").addEventListener("click",()=>{
    calc.Clear();
    updateDisp();
});


document.querySelector("[data-action='equal']").addEventListener("click",()=>{
    calc.Cal();
    updateDisp();
})