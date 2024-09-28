
function addTask(){
    const input = document.getElementById("input-box");
    const list = document.getElementById("lists");
    
    if (input.value === '') {
        alert("Type anything first!")
    } else {
        let li = document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    input.value='';
    saveData();
}


document.addEventListener('DOMContentLoaded', () => {

    //add buuton also tigger when user press enter key
    function handleEnterKey(event) {
        if (event.keyCode === 13) {
            addTask();
        }
      }
    

    document.getElementById("input-box").addEventListener("keydown", handleEnterKey);


    const dynamicButton = document.querySelector('#lists');
    showTask();
    if (dynamicButton !== null) {
        dynamicButton.addEventListener('click', function(e) {
            if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                saveData();

            } else if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                saveData();

            }
        },false);
    } else {
        console.error('Element not found');
    }
           

});



function saveData(){

    const lists = document.getElementById("lists");
    localStorage.setItem("data",lists.innerHTML);
}

function showTask(){  
    const lists = document.getElementById("lists");
    const savedData = localStorage.getItem("data")

    if(savedData){
        lists.innerHTML = savedData;
    }

}
