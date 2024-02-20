let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }   else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log ("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
    } else {
    console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


showMyDB(personalMovieDB.privat)



function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGeners();


// let company = prompt ('Какое официальное название JavaScript?', '' );

// if (company == 'ECMAScript' ) {
//     alert('Верно!');
// } else {
//     alert ('Не знаете ? "ECMAScript"!');
// }

// let number = prompt('Введите число', 0);

// if (number > 0) {
//     alert (1);
// } else if (number < 0) {
//     alert(-1)
// }
// else if (number == 0) {
//     alert(0);
// }
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = ''
// };

// if (!(age >= 14 && age <= 90));

// if (age < 14 || age > 90);

// let userName = prompt("Кто там?", '');
// if (userName === 'Админ') {
//     let pass = prompt('Пароль?', '');
//     if (pass === 'Я главный') {
//         alert( 'Здравстуйте!' );
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     }else {
//         alert('Неверный пароль' );
//     }
// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }

