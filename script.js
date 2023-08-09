const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url ='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';


let getJoke = () => {
    jokeContainer.classList.remove('fade')

    //it will show in the console if done this way

    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`
        jokeContainer.classList.add('fade')
    })
    
    
}
btn.addEventListener('click', getJoke);
getJoke();