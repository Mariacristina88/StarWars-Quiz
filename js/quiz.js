var quiz = [{
    "question": "'Aren't you a little short for a stormtrooper?' Who said it?",
        "choices": [
        "The emperor",
        "Admiral motti",
        "Princess Leia",
        "Han Solo"],
        "correct": "Princess Leia",
        "explanation": "",
}, {
    "question": "What was the original name of 'Return of the Jedi'?",
        "choices": [
        "The end of the empire",
        "The new republic",
        "Return of the jedi",
        "Revenge of the jedi"],
        "correct": "Revenge of the jedi",
        "explanation": "",
}, {
    "question": "What is Count Dooku's Sith name?",
        "choices": [
        "Darth Tyranus",
        "Darth Rex",
        "Darth Sidious",
        "Darth Maul"],
        "correct": "Darth Tyranus",
        "explanation": "",
}, {
    "question": "'Adventure. Excitement. A Jedi craves not these things.' Who said it?",
        "choices": [
        "Qui-Gon Jinn",
        "Yoda",
        "Obi-wan Kenobi",
        "Luke skywalker"],
        "correct": "Yoda",
        "explanation": "",
}, {
    "question": "What special concession did George Lucas make to Samuel L. Jackson when he joined the 'Star Wars' prequels?",
        "choices": [
        "Lucas cast Jackson's nephew as a youngling",
        "Lucas let Jackson help design his own action figure",
        "Lucas gave Jackson the only curse word in the series",
        "Lucas gave Jackson a purple lightsaber"],
        "correct": "Lucas gave Jackson a purple lightsaber",
        "explanation": "",
}

];
var questionIndex = 0;
var z = document.getElementById("quiz");
var score = 0;         
var quizObject = quiz[questionIndex];


createQueAnsWindow(quizObject);
   



//question function will take one object question and display the question with choices
function createQueAnsWindow(que) {
    //console.log(que);
    var y = document.createElement("div");
    y.setAttribute("id", "q" + questionIndex);
     document.getElementById("quiz").appendChild(y);

    
    var x = document.createElement("p");
    y.appendChild(x);
    qst = quizObject.question;
    x.innerHTML = qst;
    
    var a = document.createElement("div");
    a.setAttribute("id", "answer");
    y.appendChild(a);
    
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

        a.appendChild(l);
        a.appendChild(input);
        a.appendChild(br);
    }
    
};


var validateAns = function () {
    var f = document.getElementById("answer");
    var correct = quiz[questionIndex].correct;
    var labels = f.getElementsByTagName('label');
    
    //   console.log(labels);
    for (var i = 0; i < labels.length; i++) {
        var forId = labels[i].getAttribute("for");
        var checkBox = document.getElementById(forId);
      //  console.log(i);
        
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