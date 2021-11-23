const API_TOKEN = '5499449d-65c4-452f-b6e6-0f0ab98493a5';

const blockFilmsWrapper = document.getElementById('block-films-wrapper');

blockFilmsWrapper.innerHTML = '';

const getKinopoiskApiData = (url) => {
    return fetch(url, {
        headers: {
            accept: 'application/json', 
            'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
        }
    });
}

const getTopFilms = () => {
    return getKinopoiskApiData('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');
}

const getFilmDetails = (id) => {
    return getKinopoiskApiData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);
}

const getBlockFilmsData = async () => {
    const answer = await getTopFilms();
    const data = await answer.json();

    data.films.forEach(async film => {
        const filmDescId = `block-films-des-${film.filmId}`;
        blockFilmsWrapper.innerHTML +=`
        <div class="block05__movie1">
            <div class="block05__bg">   
                 <img src="${film.posterUrlPreview}" alt="">
             </div>
             <div class="block05__shadow"></div>
             <div class="block05__descr">
                    <div class="block05__text2">${film.nameRu}</div>
                    <div class="block05__text3" id="${filmDescId}"></div>
             </div>
        </div>
        `;

        const answer = await getFilmDetails(film.filmId);
        const filmData = await answer.json();

        const descElement = document.getElementById(filmDescId);
        descElement.innerText = filmData.description
        if (!filmData.description) {
            blockFilmsWrapper.removeChild(descElement.parentNode.parentNode);
            
        }
    });
}

getBlockFilmsData();