// Q#1
let roundInput = document.getElementById("roundInput");
let roundResult = document.getElementById("roundResult");


function roundNumber() {
  let roundResultOperation = Math.round(roundInput.value);
  roundResult.innerText = roundResultOperation;
}

// Q#2
let randomResult = document.getElementById("randomResult");

function generateRandomNumber() {
  let randomResultOperating = Math.random();
  let randomTo6 = randomResultOperating * 6;
  randomResult.innerText = randomTo6;
}

// Q#3
let input = document.getElementById("input")
let convertedValue = document.getElementById("convertedValue");

function convertToNumber() {
let convertOperation = parseInt(input.value)
console.log();
convertedValue.innerText = `Number : ${convertOperation} .... Type of : ${typeof(convertOperation)}`

}
































// round number example


// var round_input = document.getElementById('round_input')
// var round_result = document.getElementById('round_result')
// var random_result = document.getElementById('random_result')

// function round() {
//     var roundResult = Math.round(round_input.value);
//     round_result.innerText ="==>" + roundResult
// }

// function ceil() {
//     var roundResult = Math.ceil(round_input.value);
//     round_result.innerText ="==>" + roundResult
// }

// function floor() {
//     var roundResult = Math.floor(round_input.value);
//     round_result.innerText ="==>" + roundResult
// }

// function generateRandomNumber(){
//     var random = Math.random()
//     var randomTo100 = Math.ceil(random * 6)
//     random_result.innerText = "Random=> " + random + ", Multiply By 100=> " + randomTo100
// }
