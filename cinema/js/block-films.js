const API_TOKEN = '5499449d-65c4-452f-b6e6-0f0ab98493a5';

const blockFilmsWrapper = document.getElementById('block-films-wrapper');
blockFilmsWrapper.innerHTML = '';



const renderFilmBlock = (title, posterUrl, id) => {
    const link = document.createElement('a');
    link.href = `/single/?id=${id}`;

    const wrapper = document.createElement('div');
    wrapper.classList.add('block05__movie1');
    
    const posterWrapper = document.createElement('div');
    posterWrapper.classList.add('block05__bg');
    const poster = document.createElement('img');
    poster.src =  posterUrl; 
    poster.alt = 'постер к фильму';

    posterWrapper.append(poster);
    const shadow = document.createElement('div');
    shadow.classList.add('block05__shadow');

    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.classList.add('block05__descr');
    const name = document.createElement('div');
    name.classList.add('block05__text2');
    name.textContent = title; 

    const description = document.createElement('div');
    description.classList.add('block05__text3');
    description.textContent = 'Loading...';
    wrapper.description = description;

    descriptionWrapper.append(name, description);
    
    wrapper.append(link);
    link.append(posterWrapper, shadow, descriptionWrapper);

    return [wrapper, description];

}

const getBlockFilmsData = async () => {
    try{
        const answer = await getTopFilms();
        const data = await answer.json();

        const requests = [];
        const filmsLayout = new Map();

        data.films.forEach(async (film, i) => {
            const [filmBlock, description] = renderFilmBlock(film.nameRu, film.posterUrlPreview, film.filmId);
            filmsLayout.set(film.filmId, filmBlock);
            requests.push(new Promise((resolve, reject) =>{
                setTimeout(async () => { 
                    try{
                        const answer = await getFilmDetails(film.filmId);
                        const filmData = await answer.json();
                        
                        description.textContent = filmData.description;
            
                        if (!filmData.description) {
                            filmsLayout.delete(film.filmId);
                            
                        }
                    } catch (error){
                       
                      }  
    
                        resolve();
                }, i * 300);
                
                
            }))

        });
        await Promise.all(requests);
       let i = 0;
        for ( const [id, filmLayout] of filmsLayout){
            blockFilmsWrapper.append(filmLayout);

            i++;
            if (i ===9){
                break;
            }
        }

    } catch (error) {
        console.error(error);
        }
    
}

getBlockFilmsData();