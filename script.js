const ERROR_MESSAGE = `Invalid operator`;
let operate = "";
let num1 = "";
let num2 = "";
let total;
let isNew = false;
let stillOp = true;
let deleteBtn = document.querySelector("#btn-del");
let display = document.querySelector("#display p");
let allBtn = document.querySelectorAll("button");

const addNumber = (num) => {
  if (!num) {
    console.log("here");
    display.innerHTML = 0;
  } else {
    display.innerHTML = num;
  }
};

addNumber();

function checkOp() {}

function inputNum(num) {
  if (operate == "=") {
    operate = "";
    num1 = "";
    num1 += `${num}`;
    addNumber(num1);
  } else if (operate == "") {
    num1 += addPortionOrZero(num1, num);
    addNumber(num1);
  } else {
    num2 += `${num}`;
    addNumber(num2);
  }
}

function addPortionOrZero(checkNum, inputNum) {
  if (!checkNum && inputNum == ".") {
    return "0.";
  } 
  if (checkNum&&checkNum.slice(-1) == ".") {
    alert(ERROR_MESSAGE+"Only .");
    return "";
  }else {
    return `${inputNum}`;
  }
}

function equal() {
  console.log(num1);
  console.log("2x");
  console.log(num2);
  checkNo();
  if (total > 10 ** 30) {
    display.innerHTML = "NaN";
    alert("Fail to caculate! Refresh page");
    reset();
  } else {
    if (!num2 && !operate && num1) {
      addNumber(num1);
      operate = "=";
    } else {
      operate = "=";
      addNumber(Math.round(total));
    }
  }
}
function reset() {}
function doOperation() {
  let no1 = Number(num1);
  let no2 = Number(num2);
  switch (operate) {
    case "+":
      total = no1 + no2;
      num1 = `${total}`;
      num2 = "";
      operate = "";
      break;
    case "-":
      total = no1 - no2;
      num1 = `${total}`;
      num2 = "";
      operate = "";
      break;
    case "x":
      total = no1 * no2;
      num1 = `${total}`;
      num2 = "";
      operate = "";
      break;
    case "/":
      total = no1 / no2;
      num1 = `${total}`;
      num2 = "";
      operate = "";
      break;
  }
}
function checkNo() {
  if (num1 && num2) {
    doOperation();
  } else if (operate) {
    alert(ERROR_MESSAGE);
  }
}
function add() {
  checkNo();
  operate = "+";
}
function minus() {
  checkNo();
  operate = "-";
}
function multiply() {
  checkNo();
  operate = "x";
}
function divide() {
  checkNo();
  operate = "/";
}
function reset() {
  num1 = "";
  num2 = "";
  operate = "";
  addNumber();
}
function del() {
  if (num1 && num2) {
    num2 = num2.slice(0, -1);
    num2 = num2 ? num2 : "0";
    addNumber(num2);
  } else if (num1 && !num2) {
    num1 = num1.slice(0, -1);
    num1 = num1 ? num1 : "0";
    addNumber(num1);
  }
}
