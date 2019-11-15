(
    function() {
        const myQuestions = new Questions().myQuestions;
        let maxScore = 2460;

        function buildQuiz() {
            // we'll need a place to store the HTML output
            const output = [];

            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // we'll want to store the list of answer choices
                const answers = [];

                // and for each available answer...
                for (let letter in currentQuestion.answers) {
                    // noinspection JSUnfilteredForInLoop
                    answers.push(
                        `
                        <label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">${letter} : ${currentQuestion.answers[letter].questionName} 
                        </label>
                        `);
                }

                // add this question and its answers to the output
                output.push(`
                <div class="slide">
                    <div class="question card-header"><h3>${currentQuestion.question}</h3></div>
                    <div class="answers card-body"> ${answers.join("")}
                    <b><p style="margin-top: 1em">Question: ${myQuestions.indexOf(currentQuestion) + 1} of 30</p></b>
                    </div>
                </div>`
                );
            });

            // finally combine our output list into one string of HTML and put it on the page
            quizContainer.innerHTML = output.join("");
        }

        function showResults() {
            // gather answer containers from our quiz
            const answerContainers = quizContainer.querySelectorAll(".answers");

            // keep track of user's answers
            let numCorrect = 0;
            let score = 0;

            // for each question...
            myQuestions.forEach((currentQuestion, questionNumber) => {
                // find selected answer
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if(userAnswer === undefined) {
                    score += 0;
                } else {
                    for (let item in currentQuestion.answers[userAnswer]) {
                        score += currentQuestion.weight * currentQuestion.answers[userAnswer].score;
                        console.log(score)
                    }
                }


                // if answer is correct
                if (userAnswer === currentQuestion.correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[questionNumber].style.color = "lightgreen";
                }
                else {
                    answerContainer.innerHTML += `<b><p style="text-align: center">Recommended Approach: ${currentQuestion.correctAnswer}</p></b>`;
                    // if answer is wrong or blank
                    // color the answers red
                    answerContainers[questionNumber].style.color = "red";
                }
            });

            const percentScore = (score / maxScore * 100).toFixed(2);
            scoreContainer.innerHTML = `
            <br>
            <div class="alert alert-info">
                <h3>Cyber Security Effectiveness:</h3>
                <p>Your Cyber Security rating is ${percentScore}% out of 100%</p>
            </div>
            `;

            // show number of correct answers out of total
            resultsContainer.innerHTML = `
            <div class="alert alert-danger">
                <h3>Items to Consider:</h3>
                <i>${myQuestions.length - numCorrect} out of ${myQuestions.length} items selected, are bad cybersecurity practice!</i>
                <p>Please press "Previous Question" to go back and see what you are missing.</p>
            </div>`;
            if (percentScore < 50) {
                resultsContainer.innerHTML += `<div class="alert alert-danger"><h3 style="color: red;">Your company is at risk of cybersecurity breaches!</h3></div>`
            }
            if (percentScore > 80) {
                resultsContainer.innerHTML += `<div class="alert alert-success"><h3 style="color: green;">Your company is taking cybersecurity seriously, well done!</h3></div>`
            }
        }

        function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;

            if (currentSlide === 0) {
                previousButton.style.display = "none";
            } else {
                previousButton.style.display = "inline-block";
            }

            if (currentSlide === slides.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }
        }

        function showNextSlide() {
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }

        const quizContainer = document.getElementById("quiz");
        const resultsContainer = document.getElementById("results");
        const submitButton = document.getElementById("submit");
        const scoreContainer = document.getElementById("score");

        // display quiz right away
        buildQuiz();

        const previousButton = document.getElementById("previous");
        const nextButton = document.getElementById("next");
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        showSlide(0);

        // on submit, show results
        submitButton.addEventListener("click", showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
    }
)
();