# Star Wars Quiz
**Author:** Maria Cristina Di Termine

**Category:** Javascript and HTML/CSS

**Date:** Genuary 2015

----------------------------------------------------------------------

**This is a little quiz made with javascript using a little bit HTML and CSS.**

The quiz has only 5 questions. Every question has 4 answers and only one of them is the correct one!

## Istructions:
- Change the questions inside the _quiz_ array
```js
var quiz = [{
    "question": "'Aren't you a little short for a stormtrooper?' Who said it?",
        "choices": [
        "The emperor",
        "Admiral motti",
        "Princess Leia",
        "Han Solo"],
        "correct": "Princess Leia",
},
```
- Change the answers inside the _quiz_ array and specify which is the correct one
- In the _messageScore_ function you can change the score-messages
```js
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
```

![Star Wars logo](http://moore.se/frame/uploads/2012/11/star-wars-logo.jpg)
