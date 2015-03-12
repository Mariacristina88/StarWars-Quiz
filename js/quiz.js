var quiz = [{
    "question": "'Aren't you a little short for a stormtrooper?' Who said it?",
        "choices": [
        "The emperor",
        "Admiral motti",
        "Princess Leia",
        "Han Solo"],
        "correct": "Princess Leia",
}, {
    "question": "What was the original name of 'Return of the Jedi'?",
        "choices": [
        "The end of the empire",
        "The new republic",
        "Return of the jedi",
        "Revenge of the jedi"],
        "correct": "Revenge of the jedi",
}, {
    "question": "What is Count Dooku's Sith name?",
        "choices": [
        "Darth Tyranus",
        "Darth Rex",
        "Darth Sidious",
        "Darth Maul"],
        "correct": "Darth Tyranus",
}, {
    "question": "'Adventure. Excitement. A Jedi craves not these things.' Who said it?",
        "choices": [
        "Qui-Gon Jinn",
        "Yoda",
        "Obi-wan Kenobi",
        "Luke skywalker"],
        "correct": "Yoda",
}, {
    "question": "What special concession did George Lucas make to Samuel L. Jackson when he joined the 'Star Wars' prequels?",
        "choices": [
        "Lucas cast Jackson's nephew as a youngling",
        "Lucas let Jackson help design his own action figure",
        "Lucas gave Jackson the only curse word in the series",
        "Lucas gave Jackson a purple lightsaber"],
        "correct": "Lucas gave Jackson a purple lightsaber",
}

];
var questionIndex = 0;
var score = 0;         
var quizObject = quiz[questionIndex];


createQueAnsWindow(quizObject);   


//Question function will take one object question and display the question with choices
function createQueAnsWindow(que) {
    var questionNumer = document.createElement("div");
    questionNumer.setAttribute("id", "q" + questionIndex);
     document.getElementById("quiz").appendChild(questionNumer);

    
    var questionText = document.createElement("p");
    questionNumer.appendChild(questionText);
    qst = quizObject.question;
    questionText.innerHTML = qst;
    
    var answerText = document.createElement("div");
    answerText.setAttribute("id", "answer");
    questionNumer.appendChild(answerText);
    
    for (var j = 0; j < que.choices.length; j++) {
        var input = document.createElement("INPUT");
        var br = document.createElement("BR");
        ans = que.choices[j];
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "ans" + j);

        //label
        var l = document.createElement("label");
        l.setAttribute("for", "ans" + j);
        l.innerHTML = ans;

        answerText.appendChild(l);
        answerText.appendChild(input);
        answerText.appendChild(br);
    }
    
};


var validateAns = function () {
    var f = document.getElementById("answer");
    var correct = quiz[questionIndex].correct;
    var labels = f.getElementsByTagName('label');
    
    for (var i = 0; i < labels.length; i++) {
        var forId = labels[i].getAttribute("for");
        var checkBox = document.getElementById(forId);
        
        if (checkBox.checked) {
            if (labels[i].innerHTML == correct) {
                alert("Correct answer!");
                score += 1;
                
            } else { 
                alert("Wrong answer!");
            } 
        }
    } 
    nextQuestion();
    
};


function nextQuestion () {
    
    var curDiv = document.getElementById("q" + questionIndex);
    questionIndex++;
    curDiv.remove();
    quizObject = quiz[questionIndex];
    if (questionIndex <= 4){
        createQueAnsWindow(quizObject);
    } else { 
        messageScore();
    }
    
};

function messageScore () {

    var message = document.getElementById("message");

    if (score <= 2) {
        var createNode = "You need to watch again the movies!";
        message.innerHTML = createNode;
    }
    else if (score < 5) {
        var createNode3 = "You have much to learn young padawan!";
        message.innerHTML = createNode3;
    } else {
        var createNode2 = "The force is strong in you young jedi!";
        message.innerHTML = createNode2;
    }
};