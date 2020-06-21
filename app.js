/* to solve the given query */
function solve(){
    var id = document.getElementById("field");
    id.value = eval(id.value);
}

/* to clear the field */
function clearAll(){
    var id = document.getElementById("field");
    id.value = "";
}

function clearToZero(){
    var id = document.getElementById("field");
    id.value = "0";
}

/* to display the input in field */
function show(num){
    var display = document.getElementById("field");
    display.value += num;
}