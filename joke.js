const jokeElement=document.getElementById("joke");
const getJokeBtn=document.getElementById("getJokeBtn");
const apiUrl= "https://hindi-jokes-api.onrender.com/jokes?api_key=88239267f11e7fa143f27eb1fb06";

function jokeGenerator(){
    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(output){
        // console.log(output.jokeContent)
        jokeElement.innerHTML=output.jokeContent
    })
    .catch(function(){

    })
}

jokeGenerator();

getJokeBtn.addEventListener("click",jokeGenerator)