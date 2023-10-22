const inputbox = document.getElementById("input-box");
const listholder = document.getElementById("list-holder");
function addtask(){
    if(inputbox.value === ''){
        alert("You have to write something.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listholder.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listholder.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
saveData();
    }
}, false);
                               //For storage on local server
function saveData(){
    localStorage.setItem("data", listholder.innerHTML);
}
function displaylist(){
    listholder.innerHTML = localStorage.getItem("data");
}
displaylist();
