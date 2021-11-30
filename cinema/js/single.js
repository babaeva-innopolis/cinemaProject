const info = new URLSearchParams(location.search);

const filmid = info.get('id');

 const getFilmData = async () => {
     const filmData = await getFilmDetails(filmid).then(d => d.json());
     const header = document.getElementById('sf-header');
     const description = document.getElementById('sf-desc');
     const poster = document.getElementById('sf-poster');

     header.textContent = filmData.nameRu;
     description.textContent = filmData.description;
     poster.src = filmData.posterUrl;

     console.log(filmData);

 }
 const STAR_SELECTED_CLASS = '.sf-rating-star-selected';
 const likes = document.getElementById('sf-like');


 const getFilmMetaInfo = async () => {
     const {body: filmInfo} = await fetch(`http://inno-ijl.ru/multystub/stc-21/film/${filmid}`).then(d => d.json());
     const views = document.getElementById('sf-views');
     
     views.textContent = `${filmInfo.views} Views`;
     likes.textContent = `${filmInfo.likes} Likes`;
     const ratingNuber = filmInfo.ratings.reduce((a, b) => a+b, 0) / filmInfo.ratings.length
     const rating = String(Math.round(ratingNuber * 10) / 10).padEnd(3, '.0');
     const scoreLayout = document.getElementById('sf-rating-score');
     scoreLayout.textContent = rating;

     const stars = document.querySelector('sf-rating-star');
     for (let i = 0; i < stars.length; i++) {
        if(i >= ratingNuber - 1) break;

        const star = stars[i];
         star.classList.add(STAR_SELECTED_CLASS);
         
     }

     

    console.log(filmInfo.body);

 }


 
const likeIcon = document.querySelector('#sf-like-icon');

likeIcon.addEventListener('click', () => {
 fetch(`http://inno-ijl.ru/multystub/stc-21/film/${filmid}/like`, {
     method: 'POST',
 });
 likeIcon.classList.add('like-icon-liked');
 likes.textContent = `${filmInfo.likes} Likes`;
});

getFilmData();
getFilmMetaInfo();
