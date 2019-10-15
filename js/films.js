// const genre_1 = 'фантастика';
// const genre_2 = 'боевик';
// const genre_3 = 'приключения';
// const genre_4 = 'фентези';
// const genre_5 = 'драма';
// const genre_6 = 'комедия';

// let start_film_1 = '10:00';
// let start_film_2 = '12:00';
// let start_film_3 = '14:00';
// let start_film_4 = '16:00';

// let name_film_1 = 'Человек-паук';
// let name_film_2 = 'Собачья жизнь 2';
// let name_film_3 = 'История игрушек 4';
// let name_film_4 = 'Люди в черном: Интернэшнл';

// let genre_film_1 = genre_1 + ', ' + genre_2 + ', ' + genre_3;
// let genre_film_2 = genre_4 + ', ' + genre_5 + ', ' + genre_6 + genre_3;
// let genre_film_3 = genre_4 + ', ' + genre_6 + ', ' + genre_3;
// let genre_film_4 = genre_1 + ', ' + genre_2 + ', ' + genre_3 + ', ' + genre_6;

let element_start_film_1 = document.getElementById('start_film_1');
let element_name_film_1 = document.getElementById('name_film_1');
let element_genre_film_1 = document.getElementById('genre_film_1');

let element_start_film_2 = document.getElementById('start_film_2');
let element_name_film_2 = document.getElementById('name_film_2');
let element_genre_film_2 = document.getElementById('genre_film_2');

let element_start_film_3 = document.getElementById('start_film_3');
let element_name_film_3 = document.getElementById('name_film_3');
let element_genre_film_3 = document.getElementById('genre_film_3');

let element_start_film_4 = document.getElementById('start_film_4');
let element_name_film_4 = document.getElementById('name_film_4');
let element_genre_film_4 = document.getElementById('genre_film_4');

let arr_time = ['10:00', '12:00', '14:00', '16:00'];
let arr_film_names = ['Человек-паук', 'Собачья жизнь 2', 'История игрушек 4', 'Люди в черном: Интернэшнл'];
let arr_genres = ['фантастика', 'боевик', 'приключения', 'фентези', 'драма', 'комедия'];


let film = [{
    "time": arr_time[0],
    "name": arr_film_names[0],
    "genres": arr_genres[0] + ", " + arr_genres[1] + ", " + arr_genres[2]
},{
    "time": arr_time[1],
    "name": arr_film_names[1],
    "genres": arr_genres[3] + ", " + arr_genres[4] + ", " + arr_genres[5] + ", " + arr_genres[2]
},{
    "time": arr_time[2],
    "name": arr_film_names[2],
    "genres": arr_genres[3] + ", " + arr_genres[5] + ", " + arr_genres[2]
},{
    "time": arr_time[3],
    "name": arr_film_names[3],
    "genres": arr_genres[0] + ", " + arr_genres[1] + ", " + arr_genres[2] + ", " + arr_genres[5]
}]

let count = film.length;
    
for(let i = 0; i < count; i++){
    element_start_film = document.getElementById('start_film_' + (i + 1));
    element_start_film.innerHTML = film[i].time;
    element_name_film = document.getElementById('name_film_' + (i + 1));
    element_name_film.innerHTML = film[i].name;
    element_genre_film = document.getElementById('genre_film_' + (i + 1));
    element_genre_film.innerHTML = film[i].genres;
}