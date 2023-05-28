const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async () => {
    jokeContainer.classList.remove("fade");
    const response = await fetch(url);
    const item = await response.json();
    jokeContainer.textContent = `${item.joke}`;
    jokeContainer.classList.add("fade");
};
btn.addEventListener("click", getJoke);
getJoke();