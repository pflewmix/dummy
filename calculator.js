//java code for calculator

function add7() {
    return number + 7;
}

let number = parseInt
(prompt("Input a number to solve " + 
        "the equation: x + 7 = ? "));

alert("Your answer is: " + add7());


const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

