const films = [
{
    time: "09:00",
    rate: "G",
    name: "История игрушек 4",
    genres: ["Фэнтэзи", "драма", "комедия"],
},
{
    time: "10:00",   
    id: 15,
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
},
{
    time: "11:00",
    rate: "G",
    name: "Собачья жизнь",
    genres: ["Фэнтэзи", "драма", "комедия"],
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
{
    time: "22:30",
    rate: "G",
    name: "История игрушек 1",
    genres: ["Мультфильм", "фэнтэзи", "комедия"],
},

];


console.log(document);
let tbody = document.getElementById('table-body');
console.log(tbody.innerHTML );
tbody.innerHTML = '';


for (const film of films) {
        const filmItem = new Film(film);
        if (filmItem.isNotForAdult()) {
        tbody.innerHTML += filmItem.renderFilmTableItem();
    }
}








