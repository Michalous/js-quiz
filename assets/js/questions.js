// JS object with questions and answers
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            "<js>": false,
            "<javascript>": false,
            "<script>": true,
            "<scripting>": false
        } 
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id=\"demo\">This is a demnostration.</p>",
        answers: {
            "document.getElementById(\"demo\").innerHTML = \"Hello World!\";": true,
            "#demo.innerHTML = \"Hello World!\";": false,
            "document.getElementByName(\"p\").innerHTML = \"Hello World!\";": false,
            "document.getElement(\"p\").innerHTML = \"Hello World!\";": false
        }
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            "The <head> section": false,
            "The <body> section": false,
            "Both the <head> and the <body> section are correct": true
        }
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers: {
            "<script href=\"xxx.js\">": false,
            "<script src=\"xxx.js\">": true,
            "script name=\"xxx.js\">": false
        }
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: {
            "False": true,
            "True": false
        }
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: {
            "msgBox(\"Hello World\");": false,
            "alert(\"Hello World\");": true,
            "alertBox(\"Hello World\");": false,
            "msg(\"Hello World\");": false
        }
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            "function:myFunction()": false,
            "function = myFunction()": false,
            "function myFunction()": true
        }
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers: {
            "call myFunction()": false,
            "myFunction()": true,
            "call function myFunction()": false
        }
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            "if i == 5 then": false,
            "if i = 5 then": false,
            "if (i == 5)": true,
            "if i = 5": false
        }
    },
    {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        answers: {
            "if i <> 5": false,
            "if (i <> 5)": false,
            "if i =! 5 then": false,
            "if (i != 5)": true
        }
    },
    {
        question: "How does a WHILE loop start?",
        answers: {
            "while (i <= 10)": true,
            "while (i <= 10; i++)": false,
            "while i = 1 to 10": false
        }
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            "for i = 1 to 5": false,
            "for (i = 0; i <= 5; i++)": true,
            "for (i = 0; i <= 5)": false,
            "for (i <= 5; i++)": false
        }
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            "<!--This is comment-->": false,
            "'This is comment": false,
            "//This is comment": true
        }
    },
    {
        question: "How to insert a comment that has more than one line?",
        answers: {
            "/*This comment has\nmore than one line*/": true,
            "<-- This comment has\nmore than one line -->": false,
            "//This comment has\nmore than one line//": false
        }
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")": false,
            "var colors = \"red\", \"green\", \"blue\"": false,
            "var colors = [\"red\", \"green\", \"blue\"]": true,
            "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")": false
        }
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: {
            "rnd(7.25)": false,
            "round(7.25)": false,
            "Math.rnd(7.25)": false,
            "Math.round(7.25)": true
        }
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: {
            "Math.max(x, y)": true,
            "top(x, y)": false,
            "Math.ceil(x, y)": false,
            "ceil(x, y)": false
        }
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called \"w2\"?",
        answers: {
            "w2 = window.open(\"http://www/w3schools.com\");": true,
            "w2 = window.new(\"http://www.w3schools.com\");": false
        }
    },
    {
        question: "JavaScript is the same as Java.",
        answers: {
            "True": false,
            "False": true
        }
    },
    {
        question: "How can you detect the client's browser's name?",
        answers: {
            "browser.name": false,
            "navigator.appName": true,
            "client.navName": false
        }
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: {
            "onchange": false,
            "onmouseover": false,
            "onmouseclick": false,
            "onclick": true
        }
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            "v carName;": false,
            "var carName;": true,
            "variable carName;": false
        }
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            "*": false,
            "-": false,
            "x": false,
            "=": true
        }
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: {
            "NaN": false,
            "true": true,
            "false": false
        }
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: {
            "Yes": true,
            "No": false
        }
    }
]