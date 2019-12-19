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

// let element_start_film_1 = document.getElementById('start_film_1');
// let element_name_film_1 = document.getElementById('name_film_1');
// let element_genre_film_1 = document.getElementById('genre_film_1');

// let element_start_film_2 = document.getElementById('start_film_2');
// let element_name_film_2 = document.getElementById('name_film_2');
// let element_genre_film_2 = document.getElementById('genre_film_2');

// let element_start_film_3 = document.getElementById('start_film_3');
// let element_name_film_3 = document.getElementById('name_film_3');
// let element_genre_film_3 = document.getElementById('genre_film_3');

// let element_start_film_4 = document.getElementById('start_film_4');
// let element_name_film_4 = document.getElementById('name_film_4');
// let element_genre_film_4 = document.getElementById('genre_film_4');

// let arr_time = ['10:00', '12:00', '14:00', '16:00'];
// let arr_film_names = ['Человек-паук', 'Собачья жизнь 2', 'История игрушек 4', 'Люди в черном: Интернэшнл'];
// let arr_genres = ['фантастика', 'боевик', 'приключения', 'фентези', 'драма', 'комедия'];


// let film = [{
//     "time": arr_time[0],
//     "name": arr_film_names[0],
//     "genres": arr_genres[0] + ", " + arr_genres[1] + ", " + arr_genres[2]
// },{
//     "time": arr_time[1],
//     "name": arr_film_names[1],
//     "genres": arr_genres[3] + ", " + arr_genres[4] + ", " + arr_genres[5] + ", " + arr_genres[2]
// },{
//     "time": arr_time[2],
//     "name": arr_film_names[2],
//     "genres": arr_genres[3] + ", " + arr_genres[5] + ", " + arr_genres[2]
// },{
//     "time": arr_time[3],
//     "name": arr_film_names[3],
//     "genres": arr_genres[0] + ", " + arr_genres[1] + ", " + arr_genres[2] + ", " + arr_genres[5]
// }]

// // let count = film.length;
    
// for(let i = 0; i < film.length; i++){
//     element_start_film = document.getElementById('start_film_' + (i + 1));
//     element_start_film.innerHTML = film[i].time;
//     element_name_film = document.getElementById('name_film_' + (i + 1));
//     element_name_film.innerHTML = film[i].name;
//     element_genre_film = document.getElementById('genre_film_' + (i + 1));
//     element_genre_film.innerHTML = film[i].genres;
// }


films = [
    film1 = {
        name: 'Человек-паук',
        start: '10:00',
        genre: [2, 4, 5],
        hire: false,
        new: true,
        description: 'Описание фильма: случайный текст случайный текст случайный текст случайный текст',
    },
    film2 = {
        name: 'Собачья жизнь 2',
        start: '12:00',
        genre: [3, 4, 1],
        hire: false,
        new: true,
        description: 'Описание фильма: случайный текст случайный текст случайный текст случайный текст',
    },
    film3 = {
        name: 'История игрушек 4',
        start: '14:00',
        genre: [1, 2, 3],
        hire: true,
        new: false,
        description: 'Описание фильма: случайный текст случайный текст случайный текст случайный текст',
    },
    film4 = {
        name: 'Люди в черном: Интернэшнл',
        start: '16:00',
        genre: [3, 4, 5],
        hire: true,
        new: false,
        description: 'Описание фильма: случайный текст случайный текст случайный текст случайный текст',
    },
    film5 = {
        name: 'История игрушек 2',
        start: '15:00',
        genre: [1, 3, 5],
        hire: true,
        new: false,
        description: 'Описание фильма: случайный текст случайный текст случайный текст случайный текст',
    },
    film6 = {
        name: 'Люди в черном 2',
        start: '16:00',
        genre: [3, 2, 1],
        hire: true,
        new: false,
        description: 'Описание фильма: случайный текст случайный текст случайный текст случайный текст',
    },
]

//Справочник жанров
const allGenres = [
    'фантастика',    //0
    'боевик',        //1
    'приключения',   //2
    'фентези',       //3
    'драма',         //4
    'комедия',       //5
]

//Для таблицы Выберите фильм
let filmsHire = []

//Для Новинок
let filmsNew = []

for (let i = 0; i < films.length; i++) {
    if (films[i].hire === true) {
        filmsHire.push(films[i])
    }
    if (films[i].hire === false && films[i].new === true) {
        filmsNew.push(films[i])
    }
}

const film = {
    getName: function() {
        console.log(this.name)
    },
    getStart: function() {
        console.log(this.start)
    },
    getGenre: function() {
        const genres = this.genre
        let arrGenres = []
        for (let i = 0; i < genres.length; i++) {
            arrGenres.push(allGenres[genres[i]])
        }
        let strGenres = arrGenres.join(', ')
    }
}

for (let i = 0; i < filmsHire.length; i++) {
    film.getName.bind(filmsHire[i])()
    film.getStart.bind(filmsHire[i])()
    film.getGenre.bind(filmsHire[i])()
}
    

//Задача 1
let arr = ["Hello", 777, false]
console.log(arr)
console.log('//////////////')
//Задача 2
let a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov',
}

for (let key in a3) {
    if (key.length > 4) {
        // a3[key]
        console.log(a3[key])
    }
}
console.log('//////////////')
//Задача 3



//Задача 4
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet']
console.log(a.length)
console.log('//////////////')

//Задача 5
let d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
a1 = [];
a2 = [];

d.forEach(function(item) {
    if (item < 0) {
        a1.push(item)
    } else {
        a2.push(item)
    }
});
console.log(a1)
console.log(a2)
console.log('//////////////')

//Задача 6
let d2 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
for (let i = 0; i < d2.length; i++) {
    if(d2[i] > d2[0]){
        d2[0] = d2[i];
    }

}
console.log(d2[0]);

console.log(d2)




//4.6 Задача 1
function getName () {
    alert(document.getElementById("4.6.1 name").value)
}


//4.6 Задача 2
function compare () {
    if ((document.getElementById("4.6.2.1").value) < (document.getElementById("4.6.2.2").value)) {
        alert(document.getElementById("4.6.2.2").value)
    } alert(document.getElementById("4.6.2.1").value)
}

//4.6 Задача 4
function assign () {
    let startRange = parseFloat(document.getElementById("4.6.4.1").value)
    let finishRange = parseFloat(document.getElementById("4.6.4.2").value)
    randomFromRange (startRange, finishRange)
}

function randomFromRange (startRange, finishRange) {
    alert(Math.floor(Math.random() * (finishRange - startRange + 1)) + startRange)
}