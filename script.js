 document.addEventListener('DOMContentLoaded', () => {
    const quizzes = {
        geography: {
            title: "Географія",
            questions: [
                {
                    question: "Скільки країн у світі?",
                    answers: ["130", "85", "195", "205"],
                    correct: 2
                },
                {
                    question: "Яка країна символізується сходом сонця?",
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
                    correct: 0
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
                }
            ]
        },
 history: {
            title: "Історія",
            questions: [
                {
                    question: "Хто був першим президентом США?",
                    answers: ["Авраам Лінкольн", "Джордж Вашингтон", "Томас Джефферсон", "Джон Адамс"],
                    correct: 1
                },
                {
                    question: "У якому році почалася Друга світова війна?",
                    answers: ["1939", "1941", "1914", "1945"],
                    correct: 0
                },
                {
                    question: "Яка цивілізація побудувала піраміди в Гізі?",
                    answers: ["Римляни", "Греки", "Єгиптяни", "Вікінги"],
                    correct: 2
                },
                {
                    question: "Хто відкрив Америку для європейців у 1492 році?",
                    answers: ["Марко Поло", "Христофор Колумб", "Фернан Магеллан", "Джеймс Кук"],
                    correct: 1
                },
                {
                    question: "Яке місто було столицею Римської імперії?",
                    answers: ["Афіни", "Париж", "Рим", "Лондон"],
                    correct: 2
                },
                {
                    question: "Хто був королевою Великої Британії дуже довгий час у XIX столітті?",
                    answers: ["Єлизавета I", "Вікторія", "Анна", "Марія"],
                    correct: 1
                },
                {
                    question: "Берлінський мур упав у...",
                    answers: ["1989", "1975", "1995", "1961"],
                    correct: 0
                },
                {
                    question: "Який народ славився своїми драккарами та походами морем?",
                    answers: ["Вікінги", "Єгиптяни", "Майя", "Самураї"],
                    correct: 0
                },
                {
                    question: "Хто був відомим полководцем Франції та імператором?",
                    answers: ["Цезар", "Наполеон", "Черчилль", "Бісмарк"],
                    correct: 1
                },
                {
                    question: "Яка держава першою полетіла в космос із людиною?",
                    answers: ["США", "Німеччина", "СРСР", "Франція"],
                    correct: 2
                }
            ]
        },
science: {
            title: "Наука",
            questions: [
                {
                    question: "Яка планета найближча до Сонця?",
                    answers: ["Марс", "Меркурій", "Венера", "Юпітер"],
                    correct: 1
                },
                {
                    question: "Який газ потрібен людині для дихання?",
                    answers: ["Кисень", "Вуглекислий газ", "Азот", "Гелій"],
                    correct: 0
                },
                {
                    question: "Скільки лап у павука?",
                    answers: ["6", "10", "8", "4"],
                    correct: 2
                },
                {
                    question: "Яка найбільша планета Сонячної системи?",
                    answers: ["Земля", "Сатурн", "Юпітер", "Нептун"],
                    correct: 2
                },
                {
                    question: "Який орган перекачує кров у тілі людини?",
                    answers: ["Легені", "Мозок", "Печінка", "Серце"],
                    correct: 3
                },
                {
                    question: "При якій температурі кипить вода?",
                    answers: ["50°C", "100°C", "90°C", "120°C"],
                    correct: 1
                },
                {
                    question: "Яка з цих тварин є ссавцем?",
                    answers: ["Акула", "Дельфін", "Орел", "Крокодил"],
                    correct: 1
                },
                {
                    question: "Скільки континентів на Землі?",
                    answers: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "Як називається природний супутник Землі?",
                    answers: ["Марс", "Місяць", "Венера", "Сонце"],
                    correct: 1
                },
                {
                    question: "Яка частина рослини зазвичай росте під землею?",
                    answers: ["Листок", "Квітка", "Корінь", "Плід"],
                    correct: 2
                }
            ]
        },
 movies: {
            title: "Кіно",
            questions: [
                {
                    question: "Як називається чарівник із серії фільмів про хлопчика зі шрамом?",
                    answers: ["Гаррі Поттер", "Фродо", "Шерлок", "Тор"],
                    correct: 0
                },
                {
                    question: "Який фільм розповідає про величезний корабель, що затонув?",
                    answers: ["Аватар", "Титанік", "Гладіатор", "Матриця"],
                    correct: 1
                },
                {
                    question: "Хто живе в ананасі під водою?",
                    answers: ["Шрек", "Бетмен", "Спанч Боб", "Сімба"],
                    correct: 2
                },
                {
                    question: "Як називається зелений огр із популярного мультфільму?",
                    answers: ["Шрек", "Саллі", "Балу", "Рапунцель"],
                    correct: 0
                },
                {
                    question: "У якому фільмі є герой на ім'я Джек Горобець?",
                    answers: ["Гаррі Поттер", "Пірати Карибського моря", "Зоряні війни", "Месники"],
                    correct: 1
                },
                {
                    question: "Як називається левеня з мультфільму Disney?",
                    answers: ["Сімба", "Дамбо", "Олаф", "Мауглі"],
                    correct: 0
                },
                {
                    question: "Який супергерой має щит із зіркою?",
                    answers: ["Залізна людина", "Тор", "Капітан Америка", "Халк"],
                    correct: 2
                },
                {
                    question: "У якому мультфільмі є персонажі Ельза та Анна?",
                    answers: ["Крижане серце", "Рапунцель", "Моана", "Мулан"],
                    correct: 0
                },
                {
                    question: "Як називається школа чарівництва у Гаррі Поттері?",
                    answers: ["Хогвартс", "Нарнія", "Асгард", "Олімп"],
                    correct: 0
                },
                {
                    question: "Який герой Marvel має молот?",
                    answers: ["Локі", "Тор", "Доктор Стрендж", "Людина-павук"],
                    correct: 1
                }
            ]
        },
        cars: {
            title: "Автомобілі",
            questions: [
                {
                    question: "Яка країна походження компанії Ferrari?",
                    answers: ["Німеччина", "Франція", "Італія", "Швеція"],
                    correct: 2
                },
                {
                    question: "Який бренд автомобілів виробляє моделі Civic та Accord?",
                    answers: ["Toyota", "Honda", "Mazda", "Nissan"],
                    correct: 1
                },
                {
                    question: "У якому році був випущений перший Mercedes-Benz?",
                    answers: ["1885", "1900", "1920", "1950"],
                    correct: 0
                },
                {
                    question: "Який найшвидший серійний автомобіль у світі?",
                    answers: ["Bugatti Chiron", "Ferrari LaFerrari", "Lamborghini Aventador", "Porsche 911"],
                    correct: 0
                },
                {
                    question: "Яка країна є батьківщиною компанії Volkswagen?",
                    answers: ["Німеччина", "Австрія", "Чехія", "Франція"],
                    correct: 0
                },
                {
                    question: "Скільки циліндрів у двигуні V8?",
                    answers: ["6", "8", "10", "12"],
                    correct: 1
                },
                {
                    question: "Який найстарший автомобільний бренд все ще активний?",
                    answers: ["Peugeot", "Mercedes-Benz", "Fiat", "Daimler"],
                    correct: 0
                },
                {
                    question: "Яка компанія виробляє модель Mustang?",
                    answers: ["Chevrolet", "Ford", "Dodge", "Cadillac"],
                    correct: 1
                },
                {
                    question: "Як називається електрокар від Tesla?",
                    answers: ["Tesla Model A", "Tesla Model T", "Tesla Model S", "Tesla Model X"],
                    correct: 2
                },
                {
                    question: "Яка країна має найбільше машин на душу населення?",
                    answers: ["США", "Франція", "Японія", "Німеччина"],
                    correct: 0
                }
            ]
        },
        electronics: {
            title: "Електроніка",
            questions: [
                {
                    question: "Який бренд випустив перший смартфон?",
                    answers: ["Apple", "Nokia", "Samsung", "Motorola"],
                    correct: 3
                },
                {
                    question: "Що означає абревіатура LED?",
                    answers: ["Light Emitting Device", "Light Energy Display", "Light Emitting Diode", "Liquid Energy Display"],
                    correct: 2
                },
                {
                    question: "Яка компанія створила операційну систему Android?",
                    answers: ["Apple", "Microsoft", "Google", "Samsung"],
                    correct: 2
                },
                {
                    question: "Скільки портів USB на стандартному комп'ютері?",
                    answers: ["2", "4", "6", "Залежить від моделі"],
                    correct: 3
                },
                {
                    question: "Яка компанія випустила першу консоль для відеоігор?",
                    answers: ["Atari", "Nintendo", "Sega", "Sony"],
                    correct: 0
                },
                {
                    question: "Що означає абревіатура Wi-Fi?",
                    answers: ["Wireless Fidelity", "World Internet Freedom", "Wireless Internet Frequency", "Wide Internet Function"],
                    correct: 0
                },
                {
                    question: "Яка компанія розробляє процесори AMD?",
                    answers: ["Intel", "Advanced Micro Devices", "Nvidia", "Qualcomm"],
                    correct: 1
                },
                {
                    question: "Скільки мегапікселів у камері iPhone першого покоління?",
                    answers: ["2", "3", "5", "8"],
                    correct: 1
                },
                {
                    question: "Яка компанія є батьківщиною бренду PlayStation?",
                    answers: ["Nintendo", "Microsoft", "Sony", "Sega"],
                    correct: 2
                },
                {
                    question: "Який найпопулярніший виробник батарей?",
                    answers: ["Energizer", "Duracell", "Panasonic", "Samsung"],
                    correct: 1
                }
            ]
        }
    };

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const timerDisplay = document.getElementById('timer');
    const scoreDisplay = document.getElementById('score-display');
    const resultText = document.getElementById('result-text');
    const restartBtn = document.getElementById('restart-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const quizTitleDisplay = document.getElementById('quiz-title-display');

    const quizCards = document.querySelectorAll('.quiz-card');

    let currentQuizKey = null;
    let currentQuestions = [];
    let questionIndex = 0;
    let score = 0;
    let timer = null;
    let timeLeft = 15;

    function startTimer() {
        clearInterval(timer);
        timeLeft = 15;
        timerDisplay.textContent = `Час: ${timeLeft}`;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Час: ${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                disableAllAnswers();
                setTimeout(nextQuestion, 700);
            }
        }, 1000);
    }

    function updateScore() {
        scoreDisplay.textContent = `Бали: ${score}`;
        scoreDisplay.style.transform = "scale(1.2)";
        setTimeout(() => {
            scoreDisplay.style.transform = "scale(1)";
        }, 200);
    }
 function disableAllAnswers() {
        const allButtons = answersContainer.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => btn.disabled = true);
    }

    function showQuestion() {
        const question = currentQuestions[questionIndex];
        if (!question) return;

        startTimer();
        answersContainer.innerHTML = '';
        questionText.textContent = question.question;
        updateScore();

        question.answers.forEach((answerText, i) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.textContent = answerText;
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedButton, selectedIndex) {
        clearInterval(timer);

        const correctIndex = currentQuestions[questionIndex].correct;
        const isCorrect = selectedIndex === correctIndex;
        const allButtons = answersContainer.querySelectorAll('.answer-btn');

        if (isCorrect) {
            score++;
            selectedButton.classList.add('correct');
            updateScore();
        } else {
            selectedButton.classList.add('wrong');

            setTimeout(() => {
                allButtons[correctIndex].classList.add('correct');
            }, 300);
        }

        allButtons.forEach(btn => btn.disabled = true);

        setTimeout(nextQuestion, 1500);
    }

    function nextQuestion() {
        questionIndex++;

        if (questionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        clearInterval(timer);

        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');

        const total = currentQuestions.length;
        const accuracy = Math.round((score / total) * 100);

        resultText.textContent = `Твій результат у квізі "${quizzes[currentQuizKey].title}": ${score} / ${total} (${accuracy}%)`;
    }

    function startQuiz(quizKey) {
        currentQuizKey = quizKey;
        currentQuestions = quizzes[quizKey].questions;
        questionIndex = 0;
        score = 0;

        quizTitleDisplay.textContent = `Тема: ${quizzes[quizKey].title}`;
        scoreDisplay.textContent = 'Бали: 0';

        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');

        showQuestion();
    }

    function backToMenu() {
        clearInterval(timer);

        quizScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        startScreen.classList.remove('hide');
    }

    quizCards.forEach(card => {
        card.addEventListener('click', () => {
            const selectedQuiz = card.dataset.quiz;
            startQuiz(selectedQuiz);
        });
    });

    restartBtn.addEventListener('click', () => {
        if (currentQuizKey) {
            startQuiz(currentQuizKey);
        }
    });

    backToMenuBtn.addEventListener('click', backToMenu);
});
