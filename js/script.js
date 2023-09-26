const title = document.getElementById('title1');

const subtitle = document.getElementsByClassName('subtitulo');

const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, secondTitle);
console.log(subtitles);

secondTitle.value = "DOM API";

//Creacion perfil usuario OBJ
const user = {
    name: 'Albar',
    age: 25,
    email: 'albar@mail.com',
    favFilms: ['La guerra del futuro', 'Jhon Wick', 'Era de Hielo', 'Se7en']
}

function createUser(user){
    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;
    
    const ul = document.getElementById('favfilms');
    
    user.favFilms.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element
        ul.appendChild(li);
    });
}

createUser(user);

const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputDesc = document.getElementById('desc');
/*
inputName.addEventListener('input', e => {
    document.getElementById('username').textContent = inputName.value;

}); */

const profileBtn = document.getElementById('btnName');

profileBtn.addEventListener('click', () => {
    //username.textContent = inputName.value;
    users.user3 = ({
        id: 3,
        user_name: inputName.value,
        description: inputDesc.value,
        age: inputAge.value,
        fav_music: {
            bands: [
                'Rammstein', 'AM', 'The Hu', 'Slipknot'
            ]
        }
    });
    console.log(users);
    actualizar();
});

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name:document.createElement('h2'),
        age:document.createElement('h3'),
        description:document.createElement('p'),
        bands: []
    }
    return userElements;
}
//<h1></h1>

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })
    userElements.bands = bandList;
    return userElements;
}
//<h1>Albar</h1>
//bands[<p>banda1<p>,<p>banda1<p>,<p>banda1<p>,<p>banda1<p>, ]

const renderElements = (card, elemements) => {
    card.append(elemements.user_name, elemements.age, elemements.description);
    elemements.bands.forEach(b => {
        card.append(b);
    });
}

const actualizar = () => {

    users.forEach(user => {
        const card = createCard();
        const userElements = createDescription();
        
        const elemementWithData = populateElements(user, userElements);
        renderElements(card, elemementWithData);
        
        CARD_SECTION.append(card);
    })
    console.log("---");
    console.log(users);
}