const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


async function getUser(username) {
    try {
    const { data } = await axios(APIURL + username);

createUserCard(data);
getRepos(username);
    } catch(err) {
        if(err.response.status === 404) {
            createCardError('no profil with this username');
        }
        
    }
}


async function getRepos(username) {
    try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');

addReposToCard(data);
    } catch(err) {
  
            createCardError('problem fetching');
        }
        
    }


function createUserCard(user) {
const cardHtml = `    <div class="card">
    <img src="${user.avatar_url}" alt="" class="avatar">
    
    <div class="user-info">
    <h2>${user.login}</h2>
    <p>${user.bio}</p><ul>
<li>${user.followers}
    <li> <strong>followers</strong></li>
<li>${user.following}
    <li> <strong>followings</strong></li>
<li>${user.public_repos}
	<strong>reposetory</strong>
</li>



    </ul>
    <div id="repos"></div>
    </div>
</div>
`
main.innerHTML = cardHtml;
}

function  createCardError(msg) {
const cardHtml = `    <div class="card">

    
    <div class="user-info">
    <h2>${msg}</h2>
    <p>profil not exist</p>`
main.innerHTML = cardHtml;

}

function addReposToCard(repos) {

    const reposEl = document.getElementById('repos')

    repos.slice(0,10)
        .forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)


    })
}



form.addEventListener('submit', (e) => {
e.preventDefault();
const user = search.value;
if(user) {
    getUser(user)
    search.value = '';
}
})