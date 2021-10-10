const films = [
{
    time: "10:00",
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
},
{
    time: "12:00",
    name: "Собачья жизнь 2",
    genres: ["Фэнтэзи", "драма", "комедия"],
},
{
    time: "14:00",
    name: "История игрушек 4",
    genres: ["Мультфильм", "фэнтэзи", "комедия"],
},
{
    time: "16:00",
    name: "Люди в чёрном: Интэрнэшнл",
    genres: ["Фантастика", "боевик", "комедия"],
},
];


console.log(document);
let tbody = document.getElementById('table-body');
console.log(tbody.innerHTML );
tbody.innerHTML = '';

for (let film of films) {
    tbody.innerHTML +=`<tr class="movie-table__row-tbody table-tbody"> 
    <td><img src="./images/Rectangle 2 (Stroke).png" alt="галочка" class="check"></td>                            
    <td>${film.time}</td>
    <td>${film.name}</td>
    <td>${film.genres.join(', ')}</td>
</tr>
`;
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






