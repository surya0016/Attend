let nodeList  = document.getElementsByTagName("LI");
for(let i =0; i<nodeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(let i = 0; i<close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display="none"
    }
}

let list = document.querySelector('ul');
list.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
},false)

function newElement(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("You must write something")
    }else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(let i = 0; i<close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display="none"
        }
    }
}

const date = new Date();
const todaysDate = date.toLocaleDateString();
document.getElementById("todaysDate").innerHTML =  `Date: ${todaysDate}`;
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click",newElement)
