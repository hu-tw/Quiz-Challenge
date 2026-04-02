// Audio Setup
const correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
const wrongSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
// Final Result Sounds
const winFinalSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'); 
const loseFinalSound = new Audio('https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3');

const questions = [
    { question: "What is the fastest land animal?", answers: [{text: "Cheetah", correct: true}, {text: "Lion", correct: false}, {text: "Gazelle", correct: false}] },
    { question: "What is the chemical symbol for water?", answers: [{text: "CO2", correct: false}, {text: "H2O", correct: true}, {text: "O2", correct: false}] },
    { question: "Which is the largest planet in our solar system?", answers: [{text: "Jupiter", correct: true}, {text: "Saturn", correct: false}, {text: "Earth", correct: false}] },
    { question: "What is the liquid metal at room temperature?", answers: [{text: "Mercury", correct: true}, {text: "Silver", correct: false}, {text: "Iron", correct: false}] },
    { question: "How many teeth does an adult human have?", answers: [{text: "32", correct: true}, {text: "28", correct: false}, {text: "30", correct: false}] },
    { question: "Where is the smallest bone in the human body?", answers: [{text: "Ear", correct: true}, {text: "Foot", correct: false}, {text: "Nose", correct: false}] },
    { question: "Which gas do plants absorb?", answers: [{text: "Oxygen", correct: false}, {text: "Carbon Dioxide", correct: true}, {text: "Nitrogen", correct: false}] },
    { question: "Which planet is closest to the Sun?", answers: [{text: "Mercury", correct: true}, {text: "Venus", correct: false}, {text: "Mars", correct: false}] },
    { question: "What material is a diamond made of?", answers: [{text: "Iron", correct: false}, {text: "Carbon", correct: true}, {text: "Gold", correct: false}] },
    { question: "How many colors are in a rainbow?", answers: [{text: "7", correct: true}, {text: "6", correct: false}, {text: "8", correct: false}] },
    { question: "Which is the largest continent?", answers: [{text: "Africa", correct: false}, {text: "Asia", correct: true}, {text: "Europe", correct: false}] },
    { question: "What is the capital of Italy?", answers: [{text: "Rome", correct: true}, {text: "Milan", correct: false}, {text: "Naples", correct: false}] },
    { question: "Where is the Nile River located?", answers: [{text: "Africa", correct: true}, {text: "South America", correct: false}, {text: "Asia", correct: false}] },
    { question: "What is the smallest country in the world?", answers: [{text: "Vatican City", correct: true}, {text: "Monaco", correct: false}, {text: "Malta", correct: false}] },
    { question: "Which ocean is the largest?", answers: [{text: "Atlantic", correct: false}, {text: "Pacific", correct: true}, {text: "Indian", correct: false}] },
    { question: "What is the capital of Iraq?", answers: [{text: "Baghdad", correct: true}, {text: "Basra", correct: false}, {text: "Erbil", correct: false}] },
    { question: "Where are the Pyramids of Giza?", answers: [{text: "Egypt", correct: true}, {text: "Sudan", correct: false}, {text: "Jordan", correct: false}] },
    { question: "What is the highest mountain in the world?", answers: [{text: "Everest", correct: true}, {text: "K2", correct: false}, {text: "Alps", correct: false}] },
    { question: "In which city is 'Big Ben' located?", answers: [{text: "Paris", correct: false}, {text: "London", correct: true}, {text: "Berlin", correct: false}] },
    { question: "What is the capital of Morocco?", answers: [{text: "Rabat", correct: true}, {text: "Casablanca", correct: false}, {text: "Fez", correct: false}] },
    { question: "Who discovered America?", answers: [{text: "Columbus", correct: true}, {text: "Magellan", correct: false}, {text: "Cook", correct: false}] },
    { question: "In which year did WWII end?", answers: [{text: "1945", correct: true}, {text: "1918", correct: false}, {text: "1939", correct: false}] },
    { question: "Who wrote 'Hamlet'?", answers: [{text: "Shakespeare", correct: true}, {text: "Dickens", correct: false}, {text: "Mark Twain", correct: false}] },
    { question: "Which pharaoh is associated with the Sphinx?", answers: [{text: "Khufu", correct: false}, {text: "Khafre", correct: true}, {text: "Tut", correct: false}] },
    { question: "Capital of the Umayyad Caliphate?", answers: [{text: "Damascus", correct: true}, {text: "Baghdad", correct: false}, {text: "Medina", correct: false}] },
    { question: "First human in space?", answers: [{text: "Neil Armstrong", correct: false}, {text: "Yuri Gagarin", correct: true}, {text: "Buzz Aldrin", correct: false}] },
    { question: "Birthplace of Prophet Muhammad ﷺ?", answers: [{text: "Mecca", correct: true}, {text: "Medina", correct: false}, {text: "Jerusalem", correct: false}] },
    { question: "Oldest known civilization?", answers: [{text: "Egyptian", correct: false}, {text: "Sumerian", correct: true}, {text: "Greek", correct: false}] },
    { question: "Who founded the field of Algebra?", answers: [{text: "Al-Khwarizmi", correct: true}, {text: "Ibn Sina", correct: false}, {text: "Galileo", correct: false}] },
    { question: "Nickname of Hamza bin Abdul-Muttalib?", answers: [{text: "Lion of God", correct: true}, {text: "The Truthful", correct: false}, {text: "The Wise", correct: false}] },
    { question: "How many players on a basketball court?", answers: [{text: "5", correct: true}, {text: "6", correct: false}, {text: "11", correct: false}] },
    { question: "All-time World Cup top scorer?", answers: [{text: "Miroslav Klose", correct: true}, {text: "Pele", correct: false}, {text: "Messi", correct: false}] },
    { question: "Where were 2024 Olympics held?", answers: [{text: "Japan", correct: false}, {text: "France", correct: true}, {text: "USA", correct: false}] },
    { question: "Sport that uses a shuttlecock?", answers: [{text: "Tennis", correct: false}, {text: "Badminton", correct: true}, {text: "Golf", correct: false}] },
    { question: "Minutes in a football half?", answers: [{text: "45", correct: true}, {text: "40", correct: false}, {text: "60", correct: false}] },
    { question: "Winner of 2022 FIFA World Cup?", answers: [{text: "France", correct: false}, {text: "Argentina", correct: true}, {text: "Brazil", correct: false}] },
    { question: "Rings on the Olympic flag?", answers: [{text: "5", correct: true}, {text: "4", correct: false}, {text: "6", correct: false}] },
    { question: "Sport called 'Game of Kings'?", answers: [{text: "Chess", correct: true}, {text: "Polo", correct: false}, {text: "Tennis", correct: false}] },
    { question: "Strings on an Oud?", answers: [{text: "5 or 6", correct: true}, {text: "4", correct: false}, {text: "8", correct: false}] },
    { question: "Country with most World Cup titles?", answers: [{text: "Germany", correct: false}, {text: "Brazil", correct: true}, {text: "Italy", correct: false}] },
    { question: "Co-founder of Apple Inc.?", answers: [{text: "Steve Jobs", correct: true}, {text: "Bill Gates", correct: false}, {text: "Mark Zuckerberg", correct: false}] },
    { question: "Most popular search engine?", answers: [{text: "Yahoo", correct: false}, {text: "Google", correct: true}, {text: "Bing", correct: false}] },
    { question: "What does WWW stand for?", answers: [{text: "World Wide Web", correct: true}, {text: "Web Wide World", correct: false}, {text: "World Web Wide", correct: false}] },
    { question: "Currency of Japan?", answers: [{text: "Yuan", correct: false}, {text: "Yen", correct: true}, {text: "Won", correct: false}] },
    { question: "Heaviest internal organ?", answers: [{text: "Heart", correct: false}, {text: "Liver", correct: true}, {text: "Brain", correct: false}] },
    { question: "Ship of the Desert?", answers: [{text: "Horse", correct: false}, {text: "Camel", correct: true}, {text: "Elephant", correct: false}] },
    { question: "Months in Hijri year?", answers: [{text: "10", correct: false}, {text: "12", correct: true}, {text: "13", correct: false}] },
    { question: "Origin of 'Atlas'?", answers: [{text: "Roman", correct: false}, {text: "Greek", correct: true}, {text: "Persian", correct: false}] },
    { question: "How many heart valves?", answers: [{text: "2", correct: false}, {text: "4", correct: true}, {text: "3", correct: false}] },
    { question: "Language for Web structure?", answers: [{text: "HTML", correct: true}, {text: "Python", correct: false}, {text: "Java", correct: false}] }
];

let shuffledQuestions, currentQuestionIndex, score;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score-text');
const progressBar = document.getElementById('progress-bar');
const quizContent = document.getElementById('quiz-content');
const qNumberText = document.getElementById('question-number');
const curScoreText = document.getElementById('current-score');

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    quizContent.classList.remove('hide');
    scoreContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    qNumberText.innerText = `Question: ${currentQuestionIndex + 1}/10`;
    curScoreText.innerText = `Score: ${score}`;
    progressBar.style.width = `${(currentQuestionIndex / 10) * 100}%`;

    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) button.dataset.correct = "true";
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        correctSound.play();
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        wrongSound.play();
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add('correct');
        button.disabled = true;
    });
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizContent.classList.add('hide');
    scoreContainer.classList.remove('hide');
    progressBar.style.width = '100%';
    const resultIcon = document.getElementById('result-icon');
    
    if (score >= 6) {
        resultIcon.innerHTML = '🏆';
        scoreText.innerHTML = `Excellent! You scored <b style="color:var(--success)">${score}</b> out of 10`;
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        winFinalSound.play();
    } else {
        resultIcon.innerHTML = '🎯';
        scoreText.innerHTML = `Keep practicing! You scored <b style="color:var(--error)">${score}</b> out of 10`;
        loseFinalSound.play();
    }
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
});

startQuiz();