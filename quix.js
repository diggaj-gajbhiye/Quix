let questionbook = [
    {
        id:"qa-1",
        question:"Q. What is the full form of DOM ?",
        options:[
            "1. Document Object Mechanism",
            "2. Drive Object Model",
            "3. Document Object Model",
            "4. Desi Omlete Model"
        ],
        correct:"3. Document Object Model"
    },
    {
        id:"qa-2",
        question:"Q. What is the full form of BOM ?",
        options:[
            "1. Box Object Mechanism",
            "2. Bro Object Model",
            "3. Browser Object Model",
            "4. Bhangar Omlete Model"
        ],
        correct:"3. Browser Object Model"
    },
    {
        id:"qa-3",
        question:"Q. What is the full form of JS ?",
        options:[
            "1. Jaspreet Singh",
            "2. Java Script",
            "3. Java Singh",
            "4. Java Sing"
        ],
        correct:"2. Java Script"
    },
    {
        id:"qa-4",
        question:"Q. HTML is used for?",
        options:[
            "1. Styling web pages",
            "2. Structuring web pages",
            "3. Hacking computers",
            "4. Making pizza"
        ],
        correct:"2. Structuring web pages"
    },
    {
        id:"qa-5",
        question:"Q. CSS mainly controls?",
        options:[
            "1. Data storage",
            "2. Page style & design",
            "3. Coffee Shop System",
            "4. Car Steering System"
        ],
        correct:"2. Page style & design"
    },
    {
        id:"qa-6",
        question:"Q. Which symbol is used for comments in JS?",
        options:[
            "1. // (double slash)",
            "2. ** (stars)",
            "3. %% (percentage)",
            "4. && (and)"
        ],
        correct:"1. // (double slash)"
    },
    {
        id:"qa-7",
        question:"Q. In CSS, which symbol is used for ID selector?",
        options:[
            "1. . (dot)",
            "2. # (hash)",
            "3. @ (at the rate)",
            "4. $ (dollar)"
        ],
        correct:"2. # (hash)"
    },
    {
        id:"qa-8",
        question:"Q. Which tag is used for inserting an image in HTML?",
        options:[
            "1. <pic>",
            "2. <image>",
            "3. <img>",
            "4. <photo>"
        ],
        correct:"3. <img>"
    },
    {
        id:"qa-9",
        question:"Q. Which of these is a programming language?",
        options:[
            "1. HTML",
            "2. CSS",
            "3. JavaScript",
            "4. WhatsApp"
        ],
        correct:"3. JavaScript"
    },
    {
        id:"qa-10",
        question:"Q. Which extension is correct for JavaScript files?",
        options:[
            "1. .html",
            "2. .js",
            "3. .css",
            "4. .java"
        ],
        correct:"2. .js"
    }
];

let questionElement= document.getElementById("question");
let optionElement = document.getElementById("option");
let scoreElement = document.getElementById("score");

let score = 0;
let Currentquestion = 0 ;

function showQuestion(){
    let {question,options,correct}=questionbook[Currentquestion];
    questionElement.textContent = question;

    options.map((opt) =>{
        let btn = document.createElement("button");
        btn.setAttribute("id", "btn");

        btn.textContent = opt;
        optionElement.append(btn);

        scoreElement.textContent = `Score : ${score}/${questionbook.length}`;

        btn.addEventListener("click", () => {
            if (opt == correct){
                score += 1;
                btn.style.backgroundColor = "#6FFF5E";
            }
            else{
                score -= 0.25;
                btn.style.backgroundColor = "#FF6666";
            }
            console.log(score);
            setTimeout(() => {
                nextQuestion();
            }, 1000)
        });
    });
} 

showQuestion()

function nextQuestion(){
    Currentquestion++;
    optionElement.textContent = " ";
    if(Currentquestion == questionbook.length){
        questionElement.textContent = "Quiz Completed !";
        optionElement.textContent = "YOU CAN SEE YOUR SCORE BELOW ⤵️";
        scoreElement.textContent = `Score : ${score} / ${questionbook.length}`;
    }
    else{
        showQuestion();
    }
}

