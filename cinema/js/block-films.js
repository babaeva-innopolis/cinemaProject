const blockFilmsWrapper = document.getElementById('block-films-wrapper');

blockFilmsWrapper.innerHTML = '';

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1',{
    headers: {
        accept: 'application/json', 
        'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
    }
})
.then(answer => answer.json())
.then(data => {
   
    data.films.forEach(film => {
        const filmDescId = `block-films-des-${film.filmId}`;
        blockFilmsWrapper.innerHTML +=`
        <div class="block05__movie1">
            <div class="block05__bg">   
                 <img src="${film.posterUrlPreview}" alt="Выживший">
             </div>
             <div class="block05__shadow"></div>
             <div class="block05__descr">
                    <div class="block05__text2">${film.nameRu}</div>
                    <div class="block05__text3" id="${filmDescId}"></div>
             </div>
        </div>
        `
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/${film.filmId}',{
            headers: {
                accept: 'application/json', 
                'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
            }
        })
        .then(answer => answer.json())
        .then(filmData => {
            const descElement = document.getElementById(filmDescId);
            descElement.innerText = filmData.description
            if (!filmData.description) {
                blockFilmsWrapper.removeChild(descElement.parentNode.parentNode)
                
            }
        })
    })
});