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
    try{
        const answer = await getTopFilms();
        const data = await answer.json();
    
        data.films.forEach(async film => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('block05__movie1');
            
            const posterWrapper = document.createElement('div');
            posterWrapper.classList.add('block05__bg');

            const poster = document.createElement('img');
            poster.src = film.posterUrlPreview;
            poster.alt = 'постер к фильму';

            posterWrapper.append(poster);

            const shadow = document.createElement('div');
             shadow.classList.add('block05__shadow') ;

             const descriptionWrapper = document.createElement('div');
             descriptionWrapper.classList.add ('block05__descr');

             const name = document.createElement('div');
             name.textContent = film.nameRu;

             const description = document.createElement('div');
             description.classList.add('block05__text3');
             description.textContent = 'Loading...';

             descriptionWrapper.append(name, description);

            
            wrapper.append(posterWrapper, shadow, descriptionWrapper);
            
            blockFilmsWrapper.append(wrapper);

            
            
    
            const answer = await getFilmDetails(film.filmId);
            const filmData = await answer.json();
    
            
            description.textContent = filmData.description
            if (!filmData.description) {
                wrapper.remove();
                
            }
        });

    } catch (error) {
        console.error(error);
    }
    
}

getBlockFilmsData();