var max = 20;
var min = 1;
var highest_score = 0

function start_game() {
    timer = 180
    score = 0

    document.getElementById("start_button").style.display = "none";
    document.getElementById("input").style.display = "inline";
    document.getElementById("answer_button").style.display = "inline";
    document.getElementById("restart_button").style.display = "inline";
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("highest_score").innerHTML = "Highest score: " + highest_score;

    next_quiz()

    counter = setInterval(function() {
        timer -= 1
        document.getElementById("timer").innerHTML = "Timer: " + timer;
        if (timer <= 0) {
            restart_game(true)
            return
        }

    }, 1000)

}

function send_answer() {
    
    if (symbol == "+") {
        quiz_answer = Number(num1) + Number(num2);
    } else if (symbol == "-") {
        quiz_answer = num1 - num2;
    } else if (symbol == "x") {
        quiz_answer = num1 * num2;
    }
     
    answer = Number(document.getElementById("input").value);
    if (answer === quiz_answer && answer !== "") {
        score += 1;
        timer += 1
    } else {timer -= 5}

    
    document.getElementById("timer").innerHTML = "Timer: " + timer;

    if (timer <= 0) {
            clearInterval(counter);
            restart_game(true)
            return
        }

    console.log(answer)
    console.log(score)
    console.log(quiz_answer)

    document.getElementById("input").value = "";
    document.getElementById("score").innerHTML = "Score: " + score;
    next_quiz()

}

function next_quiz() {

    var random = (Math.floor(Math.random() * (3 - 1 + 1)) + 1).toString()
    if (random == 1) {
        symbol = "+"
    } else if (random == 2) {
        symbol = "-"
    } else if (random == 3) {
        symbol = "x"       
    }

    num1 = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    num2 = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    if (num1 === num2) {next_quiz()}
    document.getElementById("quiz").innerHTML = num1 + " " + symbol + " " + num2;
}

function restart_game(setHighestScore) {
    clearInterval(counter);
    if (setHighestScore) {
        highest_score = score;
        score = 0;
    } else if (!setHighestScore) {
        score = 0;
    }
    timer = 0;


    document.getElementById("quiz").innerHTML = "???";
    document.getElementById("start_button").style.display = "inline";
    document.getElementById("input").style.display = "none";
    document.getElementById("restart_button").style.display = "none";
    document.getElementById("answer_button").style.display = "none";
    document.getElementById("timer").innerHTML = "Timer: " + timer;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("highest_score").innerHTML = "Highest score: " + highest_score;

}
