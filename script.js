const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke(){
    const response = await fetch(url);
    const item = await response.json();
    jokeContainer.textContent = `${item.joke}`;
    console.log(item.joke)
};
getJoke();
