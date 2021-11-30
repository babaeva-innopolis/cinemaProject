function getRandomTime(maxValue){
    return Math.ceil(Math.random() * (maxValue + 1)) - 1
}

function getTime(minValue, maxValue){
    return String(minValue + getRandomTime (maxValue)).padStart(2, '0')
}

const getKinopoiskApiData = (url) => {
    return fetch(url, {
        headers: {
            accept: 'application/json', 
            'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
        }
    });
}

const getTopFilms = () => {
    return getKinopoiskApiData('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1');
}

const getFilmDetails = (id) => {
    return getKinopoiskApiData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`);
}