var str = null;
var num = 0;
var dateform = null;
var radio = true;
var nothing = null;

function buttonpress() {
    var str = document.getElementById("string").value;
    var num = document.getElementById("number").value;
    var dateform = document.getElementById("date").value;
    var nothing = document.getElementById("nullfield").value;
    var num = parseInt(num, 10);
    console.log(str, typeof str);
    console.log(num, typeof num);
    console.log(dateform, typeof dateform);
    console.log(nothing, typeof nothing);
    console.log(radio, typeof radio);
}

