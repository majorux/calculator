let Add = (a,b) => {
  return a + b;
}

let Subtract = (a,b) => {
  return a - b;
}

let Multiply = (a, b) => {
  return a * b;
}

let Divide = (a, b) => {
  return a / b;
}

let Operate = (a, b, operator) => {
  return operator(a,b);
}

let operator
const display = document.querySelector("#display")
let displayValue = ""
let buttons = document.querySelectorAll('button');
let values = [];
const oper = ["add", "subtract", "multiply", "divide"]
let previous = ""

function assign(a){
  if(a == "add"){
    operator = Add
  }else if(a == "subtract"){
    operator = Subtract;
  }else if(a == "multiply"){
    operator = Multiply;
  }else if(a == "divide"){
    operator = Divide
  }

  calc();
}
function calc(){
  if(values.length == 2){
    display.textContent = (Operate(Number(values[0]), Number(values[1]), operator))
    values = [];
    console.log(values)
  } else {
    values.push(display.textContent)}
  return;
}
buttons.forEach(button => button.addEventListener('click', function(e){
  const val = e.target;
  if(oper.includes(val.id)){
    previous = val.textContent;
    assign(this.id)
    return
  }

  if (val.textContent == "clear"){
    display.textContent = "";
    displayValue = ""
    previous = ""
    values = []
    return
  }
  if (val.id == "equals"){
    previous = val.textContent
    calc();
    return
  }
  if(Number(previous)){
    displayValue = " " + val.textContent;
    display.textContent += val.textContent;
    previous = val.textContent
  } else {
    display.textContent = val.textContent;
    previous = val.textContent;
  } 
} ))
