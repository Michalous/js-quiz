const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            "<script>": true,
            "<js>": false,
            "<javascript>": false,
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
            "Both the <head> and the <body> section are correct": true,
            "The <head> section": false,
            "The <body> section": false
        }
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        answers: {
            "<script src=\"xxx.js\">": true,
            "<script href=\"xxx.js\">": false,
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
            "alert(\"Hello World\");": true,
            "msgBox(\"Hello World\");": false,
            "alertBox(\"Hello World\");": false,
            "msg(\"Hello World\");": false
        }
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            "function myFunction()": true,
            "function:myFunction()": false,
            "function = myFunction()": false
        }
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answers: {
            "myFunction()": true,
            "call myFunction()": false,
            "call function myFunction()": false
        }
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            "if (i == 5)": true,
            "if i == 5 then": false,
            "if i = 5 then": false,
            "if i = 5": false
        }
    },
    {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        answers: {
            "if (i != 5)": true,
            "if i <> 5": false,
            "if (i <> 5)": false,
            "if i =! 5 then": false
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
            "for (i = 0; i <= 5; i++)": true,
            "for i = 1 to 5": false,
            "for (i = 0; i <= 5)": false,
            "for (i <= 5; i++)": false
        }
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            "//This is comment": true,
            "<!--This is comment-->": false,
            "'This is comment": false
        }
    }
]