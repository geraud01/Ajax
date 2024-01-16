
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
// let user = 'geraud01'


function getUser(user) {

    fetch(`${url}/${user}`)
    .then((Response) => Response.json())
    .then((data) => {
        main.innerHTML = `${data.name} possui ${data.public_repos} repositórios públicos no Github como ${data.username}`
    })
    .catch((error) => console.error(`Erro:`, error.message || error ))

}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(Event.target.value)
})

