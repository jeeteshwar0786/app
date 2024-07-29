const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
        answer: 'Jupiter'
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'J.K. Rowling', 'Mark Twain', 'Ernest Hemingway'],
        answer: 'Harper Lee'
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let startTime;
let timeSpent = [];

function loadQuestion() {
    if (currentQuestionIndex > 0) {
        const endTime = new Date();
        timeSpent.push(endTime - startTime);
    }
    startTime = new Date();

    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('finish-button').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    document.getElementById('next-button').style.display = 'inline';
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('finish-button').style.display = 'inline';
        document.getElementById('next-button').style.display = 'none';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
}

function showResult() {
    const endTime = new Date();
    timeSpent.push(endTime - startTime);
    alert(`Your score is ${score}/${questions.length}\nTime spent per question: ${timeSpent.join(', ')} ms`);
}

window.onload = loadQuestion;
