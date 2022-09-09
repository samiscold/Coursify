const startQuiz = document.querySelector('.startQuiz');
const introQuiz = document.querySelector('.intro-quiz')
const quizesPart = document.querySelector('.quizes-part')

function goToQuiz() {
    introQuiz.classList.add('hidden')
    quizesPart.classList.remove('hidden')
}

startQuiz.addEventListener('click', goToQuiz)

const Questions = [{
    id: 0,
    q: "Qka eshte DPR ?",
    a: [{ text: "Developer", isCorrect: false },
    { text: "Develop pro", isCorrect: false },
    { text: "Device-pixel-ratio", isCorrect: true },
    { text: "Developemt pixel ratio", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Cili eshte me i mir Spotify vs Apple Music ?",
    a: [{ text: "Apple Music", isCorrect: false, },
    { text: "Asnjera", isCorrect: false },
    { text: "Spotify", isCorrect: false },
    { text: "Nje Zot e di", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Sa eshte per CD bitrate? ?",
    a: [{ text: "1501 kb/s", isCorrect: false },
    { text: "1211 kb/s", isCorrect: false },
    { text: "1411 kb/s", isCorrect: true },
    { text: "1800 kb/s", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Cili format preferohet per Web ?",
    a: [{ text: "JPG", isCorrect: false },
    { text: "SVG", isCorrect: true },
    { text: "WebP", isCorrect: false },
    { text: "PNG", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Qka nenkupton RGB ?",
    a: [{ text: "Red Green Blue", isCorrect: true },
    { text: "Red Green Background", isCorrect: false },
    { text: "Red Green Blur", isCorrect: false },
    { text: "Range Go Blue", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Bashkësia më e popullarizuar e ngjyrave primare për burim drite ndriçues përmban: të kuqen (Red) , të gjelbrën (Green), të kaltrën (Blue)",
    a: [{ text: "True", isCorrect: true },
    { text: "False", isCorrect: false },
    { text: null, isCorrect: null },
    { text: null, isCorrect: null }
    ]

},

]

// Set start
var start = true;
var selected = "";

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const questionNum = document.getElementById("questionNum");
    const question = document.getElementById("question");


    // Setting the question text
    questionNum.innerHTML = "Pyetja " + (Questions[id].id + 1) + ": "
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    if (Questions[id].a[2].text == null) {
        op3.classList.add('hidden')
        op4.classList.add('hidden')
    } else {
        op3.classList.remove('hidden')
        op4.classList.remove('hidden')
    }

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    // var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#ee6001";
        op1.style.color = "white"
        op2.style.backgroundColor = "transparent";
        op2.style.color = "#ee6001"
        op3.style.backgroundColor = "transparent";
        op3.style.color = "#ee6001"
        op4.style.backgroundColor = "transparent";
        op4.style.color = "#ee6001"
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "transparent";
        op1.style.color = "#ee6001"
        op2.style.backgroundColor = "#ee6001";
        op2.style.color = "white"
        op3.style.backgroundColor = "transparent";
        op3.style.color = "#ee6001"
        op4.style.backgroundColor = "transparent";
        op4.style.color = "#ee6001"
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "transparent";
        op1.style.color = "#ee6001"
        op2.style.backgroundColor = "transparent";
        op2.style.color = "#ee6001"
        op3.style.backgroundColor = "#ee6001";
        op3.style.color = "white"
        op4.style.backgroundColor = "transparent";
        op4.style.color = "#ee6001"
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "transparent";
        op1.style.color = "#ee6001"
        op2.style.backgroundColor = "transparent";
        op2.style.color = "#ee6001"
        op3.style.backgroundColor = "transparent";
        op3.style.color = "#ee6001"
        op4.style.backgroundColor = "#ee6001";
        op4.style.color = "white"
        selected = op4.value;
    })




    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const finish = document.querySelector('.finish')
const nextB = document.getElementsByClassName('nextB')[0];
var id = 0;
let correctAns = 0;
let wrongAns = 0;

nextB.addEventListener("click", () => {
    start = false;
    if (selected == 'true') {
        correctAns++;
    } else {
        wrongAns++;
    }
    if (id < Questions.length - 1) {
        id++;
        iterate(id);
        console.log(id);
        op1.style.backgroundColor = "transparent";
        op2.style.backgroundColor = "transparent";
        op3.style.backgroundColor = "transparent";
        op4.style.backgroundColor = "transparent";
        op1.style.color = "#ee6001"
        op2.style.color = "#ee6001"
        op3.style.color = "#ee6001"
        op4.style.color = "#ee6001"


    } else {
        nextB.classList.add('hidden')
        finish.classList.remove('hidden')
    }

})

const score = document.querySelector('.scores');
const panel = document.querySelector('.panel');

finish.addEventListener('click', () => {
    // Chart pie
    var xValues = ["Sakta", "Pasakta"];
    var yValues = [correctAns, wrongAns];
    var barColors = [
        "green",
        "red",
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        }
    });

    document.querySelector('#score').textContent = correctAns;
    score.classList.remove('hidden')
    panel.classList.add('hidden');

    clearInterval(counter);
    sec.textContent = "Time Off";

})

// timer

let time = 600;
let sec = document.querySelector('.timer_sec');
let counter;


function startTimer() {
    counter = setInterval(timer, 1000);
    function timer() {
        if (time >= 0) {
            sec.textContent = time;
            time--;
        } else {
            sec.textContent = "Time Off";

            var xValues = ["Sakta", "Pasakta"];
            var yValues = [correctAns, wrongAns];
            var barColors = [
                "green",
                "red",
            ];

            new Chart("myChart", {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                }
            });

            document.querySelector('#score').textContent = correctAns;
            score.classList.remove('hidden')
            panel.classList.add('hidden');
            clearInterval(counter);
        }
    }
}

startQuiz.addEventListener('click', startTimer)


