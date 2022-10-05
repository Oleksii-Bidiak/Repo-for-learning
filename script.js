let numberOfFilms

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}


const start = () => {
   numberOfFilms = +prompt('Скольки фільмів ви вже переглянули?', '')

   while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '')
   }
}

const rememberMyFilms = () => {
   for (let i = 0; i < 2; i++) {
      const movie = prompt('Один з останніх переглянутих фільмів?', ''),
         rating = prompt('На скільки ви його оцінюєте?', '')

      if (movie !== null && rating !== null && movie !== '', rating !== '', movie?.length < 50) {
         personalMovieDB.movies[movie] = +rating
      } else {
         --i
      }
   }
}

const detectPersonalLevel = () => {
   if (personalMovieDB.count < 10) {
      console.log('Переглянуто доволі мало фільмів')
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Ви класичний глядач')
   } else if (personalMovieDB.count >= 30) {
      console.log('Ви кіноман')
   } else {
      console.log('Виникла помилка')
   }
}

const showMyDB = (hiden) => {
   if (!hiden) {
      console.log(personalMovieDB)
   }
}

const writeYourGenres = () => {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш улюблений жанр під номером ${i + 1}?`, '')
   }
}

start()
rememberMyFilms()
detectPersonalLevel()
showMyDB(personalMovieDB.privat)
console.log(personalMovieDB)
