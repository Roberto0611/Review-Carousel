//Script by: Roberto Ochoa Cuevas

//var with the actual review
var num = 0;

//Get elements from the DOM
textName = document.getElementById('name');
textrol = document.getElementById('rol');
textdescription = document.getElementById('description');
prevButton = document.getElementById('prevButton');
nextButton = document.getElementById('nextButton');

//Arrays with the information
names = ["Roberto", "Juan", "Pedro"];
rolls = ["Developer", "Analyst", "Proyect manager"];
descriptions = ["Fast developer, expert in JS, young", "The best analyst of the entire world, mid age", "One of the best proyect managers in the world, has a lot of experience"];

//show the information
function showInformation(){
    textName.textContent = names[num];
    textrol.textContent = rolls[num];
    textdescription.textContent = descriptions[num];
}; 
showInformation();

//Event listener for the buttons
nextButton.addEventListener("click", function(){
    if(num == names.length - 1){ //check if there are reviews avaialable
        alert("there's no more reviews available");
    }else{//If there's still reviews available , show it
        num++;
        showInformation();
    }
});

prevButton.addEventListener("click", function(){
    if(num == 0){//check if this is the first review
        alert('this is the first review ')
    }else{ //if it's not , go back to the last review
        num--;
        showInformation();      
    }
});