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
    {
        question: 'What is the chemical symbol for Gold?',
        options: ['Ag', 'Au', 'Fe', 'Pb'],
        answer: 'Au'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Mercury'],
        answer: 'Mars'
    },
    {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        answer: '2'
    },
    {
        question: 'In which year did the Titanic sink?',
        options: ['1905', '1912', '1915', '1920'],
        answer: '1912'
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
        answer: 'Diamond'
    },
    {
        question: 'Who is the author of "1984"?',
        options: ['George Orwell', 'Aldous Huxley', 'H.G. Wells', 'Ray Bradbury'],
        answer: 'George Orwell'
    },
    {
        question: 'Which element has the atomic number 1?',
        options: ['Helium', 'Hydrogen', 'Lithium', 'Beryllium'],
        answer: 'Hydrogen'
    }
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
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('finish-button').style.display = 'inline';
    } else {
        document.getElementById('next-button').style.display = 'inline';
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
    alert(`Your score is ${score}/${questions.length}\nTime spent per question: ${timeSpent.map(time => time + ' ms').join(', ')}`);
}

window.onload = loadQuestion;
