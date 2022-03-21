const jokes = document.getElementById('jokes')
const jokesBtn = document.getElementById('jokBtn');

jokesBtn.addEventListener('click',generatorJokes)
generatorJokes()


function generatorJokes(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com',config)
    .then(res => res.json())
    .then(data => {
        jokes.innerHTML = data.joke
    })
}