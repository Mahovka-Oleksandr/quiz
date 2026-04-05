document.addEventListener('DOMContentLoaded', () => {

    const questions = [
        {
            question: "Скільки країн у світі ?",
            answers: ["130", "85", "195", "205"],
            correct: 2
        },
        {
            question: "Яка країна символізується з західом сонця?",
            answers: ["Японія", "Франція", "Мексика", "Індія"],
            correct: 0
        },
        {
            question: "Як називається столиця Німеччини?",
            answers: ["Токіо", "Варшава", "Анкара", "Берлін"],
            correct: 3
        },
        {
            question: "У якій країні знаходиться Ейфелева вежа?",
            answers: ["Франція", "Естонія", "Італія", "Велика Британія"],
            correct: 0 // Виправлено: Франція під індексом 0
        },
        {
            question: "Який найбільший океан?",
            answers: ["Індійський", "Тихий", "Атлантичний", "Південний"],
            correct: 1
        },
        {
            question: "Яка пустеля є найбільшою на Землі?",
            answers: ["Сахара", "Гобі", "Антарктична пустеля", "Калахарі"],
            correct: 2
        },
        {
            question: "Яка річка протікає через місто Київ?",
            answers: ["Дунай", "Дністер", "Дніпро", "Тиса"],
            correct: 2
        },
        {
        question: "Яка країна є батьківщиною Олімпійських ігор?",
        answers: ["Італія", "Греція", "Китай", "Єгипет"],
        correct: 1
    },
    {
        question: "Яке місто називають 'Містом на воді'?",
        answers: ["Лондон", "Берлін", "Венеція", "Париж"],
        correct: 2
    },
    {
        question: "Який материк є найхолоднішим на планеті?",
        answers: ["Євразія", "Північна Америка", "Антарктида", "Австралія"],
        correct: 2
    },
    {
        question: "У якій країні знаходиться Велика Китайська стіна?",
        answers: ["Японія", "Китай", "Монголія", "Індія"],
        correct: 1
    },
    {
        question: "Який океан омиває береги Антарктиди?",
        answers: ["Атлантичний", "Тихий", "Індійський", "Південний"],
        correct: 3
    },
    {
        question: "Як називається найбільший острів у світі?",
        answers: ["Мадагаскар", "Гренландія", "Ісландія", "Крит"],
        correct: 1
    },
    {
        question: "На якому материку протікає річка Амазонка?",
        answers: ["Африка", "Азія", "Південна Америка", "Північна Америка"],
        correct: 2
    },
    {
        question: "Яка країна славиться своїми фіордами?",
        answers: ["Норвегія", "Іспанія", "Бразилія", "Австралія"],
        correct: 0
    },
    {
        question: "У якому місті знаходиться Біг-Бен?",
        answers: ["Нью-Йорк", "Лондон", "Рим", "Прага"],
        correct: 1
    },
    {
        question: "Яка протока розділяє Англію та Францію?",
        answers: ["Гібралтарська", "Берингова", "Ла-Манш", "Босфор"],
        correct: 2
    }
    ];

    // Елементи інтерфейсу
    const questionText = document.querySelector('#question-text');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const answersContainer = document.querySelector('#answers-container');
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const timerDisplay = document.querySelector('#timer');

    let questionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 15;

    // Функція запуску таймера
    function startTimer() {
        clearInterval(timer);
        timeLeft = 15;
        timerDisplay.textContent = `Час: ${timeLeft}`;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Час: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                nextQuestion();
            }
        }, 1000);
    }

    // Показуємо питання
    function showQuestion(question) {
        if (!question) return;
        
        startTimer(); // Запускаємо таймер для кожного питання
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;

        question.answers.forEach((text, i) => {
            const button = document.createElement('button');
            button.innerText = text;
            button.classList.add('answer-btn');
            button.addEventListener('click', (e) => checkAnswer(e.target, i));
            answersContainer.appendChild(button);
        });
    }

    // Перевірка відповіді
    function checkAnswer(selectedButton, i) {
        clearInterval(timer); // Зупиняємо таймер після натискання

        const isCorrect = i === questions[questionIndex].correct;
        
        if (isCorrect) {
            score++;
            selectedButton.classList.add('correct');
        } else {
            selectedButton.classList.add('wrong');
            // Підсвічуємо правильну відповідь, якщо користувач помилився
            const buttons = answersContainer.querySelectorAll('.answer-btn');
            buttons[questions[questionIndex].correct].classList.add('correct');
        }

        // Блокуємо всі кнопки після вибору
        const allButtons = document.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => btn.disabled = true);

        setTimeout(nextQuestion, 1000);
    }

    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        clearInterval(timer);
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');

        const accuracy = Math.round((score / questions.length) * 100);
        const resultText = document.getElementById('result-text');
        resultText.textContent = `Твій результат: ${score} / ${questions.length} (${accuracy}%)`;
    }

    // Слухачі подій
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);
    
    
    function showQuestion(question) {
        if (!question) return;
        
        startTimer();
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;

        // ОНОВЛЕННЯ БАЛІВ ТУТ:
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.innerText = `Бали: ${score}`;
        }

        question.answers.forEach((text, i) => {
            const button = document.createElement('button');
            button.innerText = text;
            button.classList.add('answer-btn');
            button.addEventListener('click', (e) => checkAnswer(e.target, i));
            answersContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedButton, i) {
        clearInterval(timer);

        const isCorrect = i === questions[questionIndex].correct;
        
        if (isCorrect) {
            score++; // Додаємо бал
            selectedButton.classList.add('correct');
            
            // Одразу оновлюємо табло, щоб гравець бачив прогрес
            const scoreDisplay = document.getElementById('score-display');
            if (scoreDisplay) scoreDisplay.innerText = `Бали: ${score}`;
            
        } else {
            selectedButton.classList.add('wrong');
            const buttons = answersContainer.querySelectorAll('.answer-btn');
            buttons[questions[questionIndex].correct].classList.add('correct');
        }

        const allButtons = document.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => btn.disabled = true);

        setTimeout(nextQuestion, 1000);
    }
function startGame() {
    startBtn.style.transform = "scale(0.9)"; // Кнопка ніби втискається
    
    setTimeout(() => {
        startScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }, 200); // Затримка 0.2 секунди для візуального відгуку
}
function checkAnswer(selectedButton, i) {
    clearInterval(timer);

    const isCorrect = i === questions[questionIndex].correct;
    
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct'); // Спалахує зеленим
        updateScore(); 
    } else {
        selectedButton.classList.add('wrong'); // Труситься червоним
        
        // Через 300мс показуємо, де була правильна відповідь
        setTimeout(() => {
            const buttons = answersContainer.querySelectorAll('.answer-btn');
            buttons[questions[questionIndex].correct].classList.add('correct');
        }, 300);
    }

    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Даємо гравцеві 1.5 секунди роздивитися результат перед наступним питанням
    setTimeout(nextQuestion, 1500);
}

function updateScore() {
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.innerText = `Бали: ${score}`;
        // Можна додати легкий ефект "підстрибування" балів
        scoreDisplay.style.transform = "scale(1.2)";
        setTimeout(() => scoreDisplay.style.transform = "scale(1)", 200);
    }
}
});
