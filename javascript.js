var product = 0;
var correct_pos = 5;

var answer1 = document.getElementById("box1");
var answer2 = document.getElementById("box2");
var answer3 = document.getElementById("box3");
var answer4 = document.getElementById("box4");


var start = document.getElementById("startreset");
var score = document.getElementById("scorevalue").innerHTML;

var timebox = document.getElementById("time");
var timevalue = document.getElementById("timevalue").innerHTML;
var gameover = document.getElementById("gameover");

var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

function startcountdown(){
    action = setInterval(function () {
        timevalue-= 1; document.getElementById("timevalue").innerHTML=timevalue;
        if(this.timevalue == "0"){ //gameover automatic restart
            stopcountdown();

            document.getElementById("scored").innerHTML = score;

            gameover.style.display = "inherit";
            document.getElementById("time").style.display = "none";
        }
    },1000);
}

function stopcountdown(){
    clearInterval(action);
    this.timevalue = "10";
    document.getElementById("timevalue").innerHTML = this.timevalue;
}

function generate_q() {
    var x = Math.ceil(Math.random() * 20);
    var y = Math.ceil(Math.random() * 20);
    product = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    correct_pos = Math.ceil(Math.random() * 4);
    document.getElementById("box" + correct_pos).innerHTML = product + "";
}

function generate_arr_a() {
    var answer_list = [product];

    var wrong_answer;
    for(i=1; i < 5; i++){
        if(i != correct_pos){
            do{
                wrong_answer = Math.ceil(Math.random() * 40) + (product - 20);
            }while(answer_list.indexOf(wrong_answer) > -1) //thats why we have already included the product

            document.getElementById("box" + i).innerHTML = wrong_answer + "";
            answer_list.push(wrong_answer);
        }
    }
}

function button_click() {
    answer1.onclick = function () {
        if (answer1.innerHTML == product + "") {
            score = parseInt(score,10) + 1;
            document.getElementById("scorevalue").innerHTML = score;
            wrong.style.display = "none";
            correct.style.display = "inherit"; //do this

            setTimeout(function(){ //after 2 seconds do this
                correct.style.display = "none";
            },1000);
            generate_q();
            generate_arr_a();
        } else {
            correct.style.display = "none";
            wrong.style.display = "inherit";
            setTimeout(function(){ //after 2 seconds do this
                wrong.style.display = "none";
            },1000);
        }
    }
    answer2.onclick = function () {
        if (answer2.innerHTML == product + "") {
            score = parseInt(score,10) + 1;
            document.getElementById("scorevalue").innerHTML = score;
            correct.style.display = "inherit"; //do this
            wrong.style.display = "none";

            setTimeout(function(){ //after 2 seconds do this
                correct.style.display = "none";
            },1000);
            generate_q();
            generate_arr_a();
        } else {
            correct.style.display = "none";
            wrong.style.display = "inherit";
            setTimeout(function(){ //after 2 seconds do this
                wrong.style.display = "none";
            },1000);
        }
    }
    answer3.onclick = function () {
        if (answer3.innerHTML == product + "") {
            score = parseInt(score,10) + 1;
            document.getElementById("scorevalue").innerHTML = score;
            correct.style.display = "inherit"; //do this
            wrong.style.display = "none";

            setTimeout(function(){ //after 2 seconds do this
                correct.style.display = "none";
            },1000);
            generate_q();
            generate_arr_a();

        } else {
            correct.style.display = "none";
            wrong.style.display = "inherit";
            setTimeout(function(){ //after 2 seconds do this
                wrong.style.display = "none";
            },1000);
        }
    }
    answer4.onclick = function () {
        if (answer4.innerHTML == product + "") {
            score = parseInt(score,10) + 1;
            document.getElementById("scorevalue").innerHTML = score;
            correct.style.display = "inherit"; //do this
            wrong.style.display = "none";

            setTimeout(function(){ //after 2 seconds do this
                correct.style.display = "none";
            },1000);
            generate_q();
            generate_arr_a();
        } else {
            correct.style.display = "none";
            wrong.style.display = "inherit";
            setTimeout(function(){ //after 2 seconds do this
                wrong.style.display = "none";
            },1000);
        }

    }
}

start.onclick=function () {

    if(start.innerText == "Start Game"){
        generate_q();
        start.innerText = "Reset Game";
        timebox.style.display = "inherit";
        startcountdown();
        generate_arr_a();
        button_click();
    }

    else  if(start.innerText=="Reset Game"){ //gameover manual restart
        stopcountdown();
        start.innerText = "Start Game";
        document.getElementById("time").style.display = "none";

        score= "0";
        document.getElementById("scorevalue").innerHTML = score;


        gameover.style.display = "none";
        document.getElementById("question").innerHTML = "";

        for(let i = 1; i < 5; i++){
            document.getElementById("box" + i).innerHTML = "";
        }
    }
}

