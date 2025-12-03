let triviaData = {
    beowulf: [
        {
            question: "What sport is Beowulf famous for before becoming a fighter?",
            options: ["Wrestling", "Boxing", "Football"],
            answer: "Wrestling"
        },
        {
            question: "Who was Beowulf's legendary opponent?",
            options: ["Grendel", "Sekhmet", "Marie"],
            answer: "Grendel"
        },
        {
            question: "What weapon does Beowulf use?",
            options: ["A folding chair", "A sword", "A parasitic arm"],
            answer: "A folding chair"
        }
    ],

    eliza: [
        {
            question: "What parasite does Eliza host?",
            options: ["Sekhmet", "Samson", "Buer"],
            answer: "Sekhmet"
        },
        {
            question: "What does Eliza use to maintain her youth?",
            options: ["Blood", "Magic crystals", "Tears"],
            answer: "Blood"
        },
        {
            question: "Eliza's visual theme is based on which culture?",
            options: ["Egyptian", "Roman", "Greek"],
            answer: "Egyptian"
        }
    ],

    parasoul: [
        {
            question: "What group does Parasoul lead?",
            options: ["The Black Egrets", "The Medici", "The Last Hope"],
            answer: "The Black Egrets"
        },
        {
            question: "What is Parasoul's living weapon called?",
            options: ["Krieg", "Samson", "Sekhmet"],
            answer: "Krieg"
        },
        {
            question: "What is Parasoul's royal title?",
            options: ["Princess", "Queen", "Commander"],
            answer: "Princess"
        }
    ],

    painwheel: [
        {
            question: "What was Painwheel's real name?",
            options: ["Carol", "Annie", "Natalie"],
            answer: "Carol"
        },
        {
            question: "Who transformed Painwheel?",
            options: ["Valentine & Brain Drain", "Eliza", "Beowulf"],
            answer: "Valentine & Brain Drain"
        },
        {
            question: "What weapon is attached to Painwheel's back?",
            options: ["Gae Bolga wheel", "Sawblade", "Chains"],
            answer: "Gae Bolga wheel"
        }
    ],

    filia: [
        {
            question: "Which parasite is bonded to Filia?",
            options: ["Samson", "Sekhmet", "Leviathan"],
            answer: "Samson"
        },
        {
            question: "What did Filia lose before meeting Samson?",
            options: ["Her memories", "Her sister", "Her school uniform"],
            answer: "Her memories"
        },
        {
            question: "What distinct feature does Samson give Filia?",
            options: ["Living hair", "Wings", "Four arms"],
            answer: "Living hair"
        }
    ],

    blackDahlia: [
        {
            question: "Which organization does Black Dahlia work for?",
            options: ["Medici Mafia", "Black Egrets", "Lab 0"],
            answer: "Medici Mafia"
        },
        {
            question: "What weapon does Black Dahlia specialize in?",
            options: ["Arm Cannon", "Sawblade", "Grenades"],
            answer: "Arm Cannon"
        },
        {
            question: "Which body parts has Dahlia replaced?",
            options: ["Legs & right arm", "Eyes", "Heart"],
            answer: "Legs & right arm"
        }
    ],

    valentine: [
        {
            question: "What task force was Valentine part of?",
            options: ["The Last Hope", "The Medici", "Black Egrets"],
            answer: "The Last Hope"
        },
        {
            question: "Valentine's attacks are themed around what?",
            options: ["Medical tools", "Fire", "Shadows"],
            answer: "Medical tools"
        },
        {
            question: "What supernatural entity does Valentine end up serving?",
            options: ["The Skullgirl", "Sekhmet", "Samson"],
            answer: "The Skullgirl"
        }
    ],

    msfortune: [
        {
            question: "What was Ms. Fortune's ethnicity meant to be represented of?",
            options: ["Latina", "European", "Pacific Islander"],
            answer: "Latina"
        },
        {
            question: "Who amongst the Skullgirls fighters was intended to be Ms. Fortune's partner-in-crime?",
            options: ["Fukua", "Big Band", "Filia"],
            answer: "Filia"
        },
        {
            question: "What Street Fighter character does Ms. Fortune's pre-fight animation reference?",
            options: ["Juri Han", "Cammy", "Chun-Li"],
            answer: "Cammy"
        }
    ],

    marie: [
        {
            question: "Who serves Marie as one of her primary enforcers?",
            options: ["Eliza", "Robo-Fortune", "Double"],
            answer: "Double"
        },
        {
            question: "As a Skullgirl, Marie has the typical powers they provide, from immense strength, levitation and the ability to revive _____?",
            options: ["The Dead", "Plants", "Animals"],
            answer: "The Dead"
        },
        {
            question: "After arriving in New Meridian, Marie set up base in the catacombs of the _______?",
            options: ["Eiffel Tower", "Grand Cathedral", "Skull Castle"],
            answer: "Grand Cathedral"
        }
    ],

    squigly: [
        {
            question: "What is Squigly's full name (HINT: derives from Italian origin)?",
            options: ["Sienna Contiello", "Sienna Taszanci", "Sienna Morello"],
            answer: "Sienna Contiello"
        },
        {
            question: "Throughout the game, most characters assume she is one of the Skullgirl's undead minions and refer to her as a _____?",
            options: ["Puppet", "Corpse", "Frankenstein"],
            answer: "Corpse"
        },
        {
            question: "Squigly would have become a mindless servant of Bloody Marie if it wasn't for her Parasite named ____?",
            options: ["Leviathan", "Samson", "Sekhmet"],
            answer: "Leviathan"
        }
    ],

    double: [
        {
            question: "According to the Skullgirls Mobile game, when is Sister Agatha (Double)'s birthday?",
            options: ["May 10th", "Sept 20th", "Dec 1st"],
            answer: "May 10th"
        },
        {
            question: "What Church did Double start in terms of origin?",
            options: ["Church of Salvation", "Church of Trinity", "Church of the Skull"],
            answer: "Church of Trinity"
        },
        {
            question: "In terms of power and rank, who does Double fall between?",
            options: ["BOTH Aeon and Venus", "Venus", "Aeon"],
            answer: "BOTH Aeon and Venus"
        }
    ]

};


function getCharacterName() {
    let scriptTag = document.querySelector("script[data-character]");
    if (scriptTag) return scriptTag.getAttribute("data-character");

    const bodyTag = document.body.getAttribute("data-character");
    if (bodyTag) {
        return bodyTag;
    }
    return;
}

let selectedQuestions = [];
let index = 0;
let score = 0;


function startTrivia(character) {
    const pool = [...triviaData[character]];
    for (let i = pool.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[random]] = [pool[random], pool[i]];
    }
    selectedQuestions = pool.slice(0, 10);
    displayQuestion();
}


function displayQuestion() {
    let container = document.getElementById("trivia-container");
    if (index >= selectedQuestions.length) {
        showResults();
        return;
    }
    let q = selectedQuestions[index];
    container.innerHTML = `
        <h2>${q.question}</h2><div id="options">${q.options.map(option => `<button class="answer-btn" onclick="checkAnswer('${option}')">${option}</button>`)}</div>`;
}


function checkAnswer(userAnswer) {
    let correct = selectedQuestions[index].answer;
    if (userAnswer == correct) {
        score++;
    }
    index++;
    displayQuestion();
}

function showResults() {
    let container = document.getElementById("trivia-container");
    container.innerHTML = `<h2>Quiz Complete!</h2><p>You scored <strong>${score}</strong> out of ${selectedQuestions.length}.</p><button onclick="location.reload()">Play Again</button>`;
}


function addNewQuestion(evt) {
    evt.preventDefault();

    let character = getCharacterName();
    let form = document.getElementById("add-form");

    let newQuestion = {
        question: form.question.value,
        options: [
            form.option1.value,
            form.option2.value,
            form.option3.value
        ],
        answer: form.correct.value
    };
    triviaData[character].push(newQuestion);
    localStorage.setItem("triviaData", JSON.stringify(triviaData));
    displayQuestion();
    form.reset();
}


document.addEventListener("DOMContentLoaded", () => {
    let savedData = localStorage.getItem("triviaData");
    if (savedData) {
        triviaData = JSON.parse(savedData);
    }
    
    let character = getCharacterName();
    if (!character) {
        return;
    }
    startTrivia(character);
});