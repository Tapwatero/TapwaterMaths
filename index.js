let x;
let y;
let solution;

window.addEventListener('load', (event) => {
    refreshNumbers();
    refreshScore();
  });

function refreshScore() {
    let correct = parseInt(localStorage.correct)
    let incorrect = parseInt(localStorage.incorrect)
    document.getElementById("score").innerText = correct + " / " + localStorage.incorrect + "\n" + (((correct+incorrect)-incorrect)/(correct+incorrect)).toFixed(2)*100 + "%"
}

function refreshNumbers() {
    operator = Math.floor((Math.random() * 3) + 1)
    switch (operator) {
        case 1:
            x = Math.floor((Math.random() * 100) + 1);
            y = Math.floor((Math.random() * 100) + 1);
            document.getElementById("question").innerText = (x + " + " + y + " =");
            solution = x + y
            break
        case 2:
            x = Math.floor((Math.random() * 100) + 1);
            y = Math.floor((Math.random() * 100) + 1);
            document.getElementById("question").innerText = (x + " - " + y + " =");
            solution = x - y
            break
        case 3:
            x = Math.floor((Math.random() * 15) + 1);
            y = Math.floor((Math.random() * 15) + 1);
            document.getElementById("question").innerText = (x + " * " + y + " =");
            solution = x * y
            break
    }
}


async function isCorrectEvent(v) {
    document.getElementById("answer").value = "";
    if (parseInt(v) == solution) {
        document.getElementById("question").classList.add("correct");
        await new Promise(res => setTimeout(res, 350));
        document.getElementById("question").classList.remove("correct");
        if (localStorage.correct) {
            localStorage.correct = Number(localStorage.correct)+1;
          } else {
            localStorage.correct = 1;
          }
        refreshNumbers();
    } else {
        document.getElementById("question").classList.add("wrong");
        await new Promise(res => setTimeout(res, 600));
        document.getElementById("question").classList.remove("wrong");
        if (localStorage.incorrect) {
            localStorage.incorrect = Number(localStorage.incorrect)+1;
          } else {
            localStorage.incorrect = 1;
          }
        refreshNumbers();
    }
    refreshScore();
}
