const films = [
{
    time: "10:00",   
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
},
{
    time: "12:00",
    rate: "R",
    name: "Собачья жизнь 2",
    genres: ["Фэнтэзи", "драма", "комедия"],
},
{
    time: "14:00",
    rate: "G",
    name: "История игрушек 4",
    genres: ["Мультфильм", "фэнтэзи", "комедия"],
},
{
    time: "16:00",
    rate: "NC-17",
    name: "Люди в чёрном: Интэрнэшнл",
    genres: ["Фантастика", "боевик", "комедия"],
},
{
    time: "20:00",
    rate: "R",
    name: "Собачья жизнь 2",
    genres: ["Фэнтэзи", "драма", "комедия"],
},
{
    time: "22:00",
    rate: "NC-17",
    name: "Люди в чёрном: Интэрнэшнл",
    genres: ["Фантастика", "боевик", "комедия"],
},
];


console.log(document);
let tbody = document.getElementById('table-body');
console.log(tbody.innerHTML );
tbody.innerHTML = '';
function renderFilmTableItem(film){
    return`<tr class="movie-table__row-tbody table-tbody"> 
    <td>
    <input 
    type="checkbox2"
    class="block03__checkbox2"
    id= "${film.name.replaceAll(' ','-')}-${film.time}"
    />
    <label for="${film.name.replaceAll(' ','-')}-${film.time}">
    <svg class="check"
    width=".55rem"
     height=".45rem" 
     viewBox="0 0 11 9" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" 
clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
</svg>

    </label>
  </td>                            
    <td>${film.time}</td>
    <td>${film.name}</td>
    <td>${film.genres.join(', ')}</td>
</tr>
`;
}

for (let film of films) {
    if (!(film.rate === 'R' || film.rate === 'NC-17')) {
    tbody.innerHTML +=renderFilmTableItem(film);
    }
}

// for (let index = 0; index < films.length; index++) {
//     tbody.innerHTML +=`<tr class="movie-table__row-tbody table-tbody"> 
//     <td><img src="./images/Rectangle 2 (Stroke).png" alt="галочка" class="check"></td>                            
//     <td>${films[index].time}</td>
//     <td>${films[index].name}</td>
//     <td>${films[index].genres.join(', ')}</td>
// </tr>
// `;

// }






