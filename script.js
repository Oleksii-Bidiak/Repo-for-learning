console.log('Задача №1')
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
console.log(numberOfFilms)

console.log('Задача №2')
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

console.log('Задача №3')
const movies = {}
const movie = prompt('Один из последних просмотренных фильмов?', '')
const rating = +prompt('На сколько оцените его?', '')
personalMovieDB.movies[movie] = rating
console.log(personalMovieDB)
