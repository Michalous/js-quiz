var submit_btn = document.getElementById('submit')
var time_span = document.getElementById('time')
var questionText = document.getElementById('question-title')
var questionsPanel = document.getElementById('questions')
var start_quiz = document.getElementById('start')
var question_choices = document.getElementById('questions')
var questChoices = document.getElementById('choices')
var endScreen = document.getElementById('end-screen')
var finalScore = document.getElementById('final-score')
var initials = document.getElementById('initials')
var error_message = document.getElementById('error')

var countDown = 180 // global variable for counting down
var questionNumber = 0 // global variable to increase question number
var score = 0 // global variable of player's score 
var isGameOver = false // flag to stop interval running when all questions answered

start_quiz.addEventListener('click', main) // starts the game when button clicked

// function to start interval, checks if the game is over either because out of time or out of questions
function main() {
    document.getElementById('start-screen').classList.add('hidden')
    questionsPanel.classList.remove('hide')
    var setCountDown = setInterval(function() {
        if (countDown <= 1) {
            clearInterval(setCountDown)
            gameOver()
        }
        if (isGameOver) {
            clearInterval(setCountDown)
        }
        countDown -= 1
        time_span.innerHTML = countDown
    }, 1000)
    displayQuestion()
}

// function to display question and answers
function displayQuestion() {
    if (questionNumber >= 25) {
        gameOver()
    }
    else {
        questionText.innerText = questions[questionNumber].question
        questChoices.innerHTML = ""
        for (var key in questions[questionNumber].answers) {
            var answer_div = document.createElement('div')
            answer_div.classList.add('answer-text')
            if (questions[questionNumber].answers[key]) {
                answer_div.classList.add('correct-answer')
            }
            answer_div.innerText = key
            questChoices.appendChild(answer_div)
        }
        clickOnQuestion()
    }
}

// Function to deal with a click on answers
function clickOnQuestion() {
    var questionClicks = document.querySelectorAll('.answer-text')
    questionClicks.forEach((ques) => {
        ques.addEventListener('click', function() {
            if (ques.classList.contains('correct-answer')) {
                ques.classList.add('correct')
                // disable any subsequent clicks before new question is displayed
                questionClicks.forEach((q) => {
                    q.classList.add('nopointer')
                })
                score++
            } else {
                ques.classList.add('wrong')
                // disable any subsequent clicks before new question is displayed
                questionClicks.forEach((q) => {
                    q.classList.add('nopointer')
                })
                countDown -= 10
                document.getElementsByClassName('correct-answer')[0].classList.add('wrong-correct')
            }
            questionNumber++
            setTimeout(displayQuestion, 1000)   
        })
    })
}

// sorts out the end game stage
function gameOver() {
    isGameOver = true // countdown will stop when this is true
    questionsPanel.classList.add('hide')
    endScreen.classList.remove('hide')
    finalScore.innerText = score
    submit_btn.addEventListener('click', function() {
        if (initials.value.length == 0 || initials.value.length > 3) {
            error_message.classList.add('active')
        }
        else {
            error_message.classList.remove('active')
            localStorage.setItem(initials.value, score)
            window.location.replace("./highscores.html")
        }
    })
}