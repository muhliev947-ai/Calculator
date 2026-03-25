const Main=()=>{
    let currentValue="";
    let previousValue="";
    let operator = null;

    const inputValue=(num)=>{
        if(num=="." && currentValue.includes(".")) return;
        if(num === "0" && currentValue==="0") return ;
        currentValue+=num;
    }
    const inputOperator=(op)=>{
      if(currentValue=="") return;

      if(previousValue !== ""){
        const curr = Number(currentValue);
        const prev = Number(previousValue);
        let result;

        if(operator === "*") result = curr * prev;
        else if(operator === "+") result = curr + prev;
        else if(operator === "-") result = curr-prev;
        else if(operator === "/") result = curr == 0? "Error": prev/curr;

        previousValue = String(result);
        currentValue ="";
        operator=op;
        return;
      }

      previousValue=currentValue;
      operator=op;
      currentValue="";
    }

    const Cal = ()=>{
        if(currentValue=="" || previousValue=="") return;
        const curr = Number(currentValue);
        const prev = Number(previousValue);
        let result;

        if(operator ==="*"){
            result = curr*prev;
        }
        else if(operator == "+"){
            result = curr + prev;
        }
        else if(operator === "-"){
            result = curr -prev;
        }
        else if(operator === "/"){
            result = curr === 0 ? "Error":prev / curr;
        }
       currentValue=String(result);
       previousValue ="";
       operator = null;
       return result;
    }

    const Clear=()=>{
        currentValue="";
        operator=null;
        previousValue="";
    }

    const Cp = ()=>{
        currentValue="";
    }

   const changeOp=()=>{
 if(currentValue=="") return;
 if(currentValue.includes("-")){
    currentValue=currentValue.slice(1);
 }else{
    currentValue= "-" + currentValue;
 }}
 
 const Dell =()=>{
    if(currentValue === '') return;

    const num = Number(currentValue);
    currentValue = String(num /100);
 }

  
    return {inputValue,inputOperator,Cal,Clear,Cp,changeOp,Dell,
      get currentValue(){return currentValue; }
    }
}
