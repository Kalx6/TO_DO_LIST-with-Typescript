const userInput = document.getElementById("userInput") as HTMLInputElement;
const listContainer = document.getElementById("listContainer");


function add():void  {
    if(userInput.value === "") {
        alert("You Have To Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContainer?.appendChild(li);

        let span = document.createElement("span");
        span.className = "cancel";
        li.appendChild(span);
        saveData();
        
    }
    userInput.value = "";
   



}


listContainer?.addEventListener("click", function(e){
    const target = e.target as HTMLInputElement;
    if (target.tagName === "LI"){
        target.classList.toggle("checked");
        saveData();
    } else if (target.tagName === "SPAN") {
        target.parentElement?.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", listContainer?.innerHTML || "");
}

function showTask() {
    listContainer!.innerHTML = localStorage.getItem("data") || "";
}
showTask();
