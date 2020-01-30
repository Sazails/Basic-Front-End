// let date = new Date();
// alert("Today's date: " + date);

//#region Github buttons
var body = document.getElementsByTagName("body")[0];

// Create element and add onClick function.
var alertButton = document.createElement("alertButton");
alertButton.addEventListener ("click", function() {
    alert("My github:\nhttps://github.com/Sazails");
});

// Apply button to view once functions have been implemented.
alertButton.innerHTML = "<h4>View my github</h4>";
body.appendChild(alertButton);

// Create element and add onClick function.
var githubButton = document.createElement("githubButton");
githubButton.addEventListener ("click", function() {
    window.open('https://github.com/Sazails');
});

// Apply button to view once functions have been implemented.
githubButton.innerHTML = "<h4>Visit my github</h4>";
body.appendChild(githubButton);
//#endregion

//#region Loop testing
// Create an input element which can only take in numbers.
var x = document.createElement("INPUT");
x.setAttribute("type", "number");

// Create a button element with the function to run the loop with iteration decided by the user.
// var startLoopButton = document.createElement("startLoopButton");
// startLoopButton.innerHTML = "<h4>Start loop</h4>"
// startLoopButton.addEventListener("click", function(){
//     var numb = document.getElementById("")
//     body.innerHTML += runLoop(x.getelement);
// });

// // Show visuals once functionality has been implemented.
// body.appendChild(x);
// body.appendChild(startLoopButton);

// function runLoop(numb){
//     var str = "";
//     try {
//         for(let x = 0; x < numb; x++){
//             str += x + ", ";
//         }
//         return str;
//     } catch (error) {
//         return "input error";
//     }
// }
//#endregion

// var numbers = [10, 20, 30, 40, 50];
// var loopStr = "";

// for(let t = 0; t < 8; t++){
//     console.log(t);
//     loopStr += t;
// }

// var loopTesting = document.createElement("loopTesting");
// loopTesting.innerHTML = "<h4>" + loopStr + "</h4>";
// body.appendChild(loopTesting);
