import name, { getOne } from './jokes.js'

getOne().then(joke => {
    document.getElementById('joke').innerHTML = joke
})