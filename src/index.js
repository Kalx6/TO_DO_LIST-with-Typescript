var userInput = document.getElementById("userInput");
var listContainer = document.getElementById("listContainer");
function add() {
    if (userInput.value === "") {
        alert("You Have To Write Something");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContainer === null || listContainer === void 0 ? void 0 : listContainer.appendChild(li);
        var span = document.createElement("span");
        span.className = "cancel";
        li.appendChild(span);
        saveData();
    }
    userInput.value = "";
}
listContainer === null || listContainer === void 0 ? void 0 : listContainer.addEventListener("click", function (e) {
    var _a;
    var target = e.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
        saveData();
    }
    else if (target.tagName === "SPAN") {
        (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", (listContainer === null || listContainer === void 0 ? void 0 : listContainer.innerHTML) || "");
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();
