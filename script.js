let input = document.querySelector("input");
let ul = document.querySelector("ul");

input.onkeypress = function (event) { 

    if (event.keyCode === 13) { 
        let li = document.createElement("li"); 
        let span = document.createElement("span");
        let img = document.createElement("img"); 

        span.innerHTML = input.value;
        img.setAttribute("src", "images/garbage.svg");
        li.appendChild(img); 
        li.appendChild(span); 
        ul.appendChild(li);
        input.value = ""; 
    }
};

ul.onclick = function (event) {
    let target = event.target; 
    if (target.tagName === 'LI' || target.tagName === "SPAN") { 
        target.classList.toggle('checked'); 
    } else if (target.tagName === "IMG") {
        target.parentElement.remove(); 
    } 
};

document.querySelector(".clear").onclick = function () {
    ul.innerHTML = ""; 
}; 


document.querySelector(".finish").onclick = function () {   
    let deals = ul.querySelectorAll("li"); 
    for (let i = 0; i < deals.length; i = i + 1) {
        deals[i].classList.add("checked"); 
    }
}; 
    
    