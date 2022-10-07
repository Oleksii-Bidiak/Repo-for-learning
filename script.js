// const personalMovieDB = {
//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,

//    start: function () {
//       numberOfFilms = prompt('Скольки фільмів ви вже переглянули?', '')

//       while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//          numberOfFilms = prompt('Скільки фільмів ви вже переглянули?', '')
//       }

//       this.count = +numberOfFilms
//    },

//    rememberMyFilms: function () {
//       for (let i = 0; i < 2; i++) {
//          const movie = prompt('Один з останніх переглянутих фільмів?', ''),
//             rating = prompt('На скільки ви його оцінюєте?', '')

//          if (movie !== null || rating !== null || movie !== '' || rating !== '' || movie?.length < 50) {
//             this.movies[movie] = +rating
//          } else {
//             --i
//          }
//       }
//    },

//    detectPersonalLevel: function () {
//       if (this.count < 10) {
//          console.log('Переглянуто доволі мало фільмів')
//       } else if (this.count >= 10 && this.count < 30) {
//          console.log('Ви класичний глядач')
//       } else if (this.count >= 30) {
//          console.log('Ви кіноман')
//       } else {
//          console.log('Виникла помилка')
//       }
//    },

//    showMyDB: function () {
//       if (this.privat) {
//          console.log('It\'s a privat DB')
//       } else {
//          console.log(this)
//       }
//    },

//    writeYourGenres: function () {
//       for (let i = 0; i < 1; i++) {
//          const genres = prompt(`Введіть ваші улюблені жанри через кому`, '')

//          if (genres === null || genres === '') {
//             console.log('Ви ввели некоректні дані або не ввели взагалі')
//             i--
//          } else {
//             this.genres = genres.split(', ').map(item => { return `${item.split('')[0].toUpperCase()}${item.slice(1)}` }).sort()
//          }
//       }

//       this.genres.forEach((item, i) => {
//          console.log(`Улюблений жанр ${i + 1} - це ${item}`)
//       })
//    },

//    toggleVisibleMyDB: function () {
//       this.privat = !this.privat
//    }
// }

// personalMovieDB.writeYourGenres()

let x = 0 || "" || 2 || undefined || true || falsе; console.log(x); 