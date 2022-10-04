const numberOfFilms = +prompt('Скольки фільмів ви вже переглянули?', '')
console.log(numberOfFilms)

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const movies = {}

for (let i = 0; i < 2; i++) {
   const movie = prompt('Один з останніх переглянутих фільмів?', ''),
      rating = prompt('На скільки ви його оцінюєте?', '')

   if (movie !== null && rating !== null && movie !== '', rating !== '', movie?.length < 50) {
      personalMovieDB.movies[movie] = +rating
   } else {
      --i
   }
}

if (personalMovieDB.count < 10) {
   console.log('Переглянуто доволі мало фільмів')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('Ви класичний глядач')
} else if (personalMovieDB.count >= 30) {
   console.log('Ви кіноман')
} else {
   console.log('Виникла помилка')
}

// personalMovieDB.count < 10 ? console.log('Переглянуто доволі мало фільмів')
//    : personalMovieDB.count >= 10 && personalMovieDB.count < 30 ? console.log('Ви класичний глядач') 
//    : console.log('Ви кіноман')

console.log(personalMovieDB)


