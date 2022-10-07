/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort()

const advs = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    promoGenre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

advs.forEach(item => {
    item.remove()
})

promoGenre.textContent = 'Драма'

poster.style.backgroundImage = "url('img/bg.jpg')"

movieList.innerHTML = ''
movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `
})

// for (let i = 0; i < movieDB.movies.length; i++) {
//     const item = movieDB.movies[i]
//     const promoListItem = document.createElement('li')
//     promoListItem.classList.add('promo__interactive-item')
//     promoListItem.textContent = item
//     console.log(promoListItem)
//     promoList.insertAdjacentHTML('beforebegin', promoListItem)
// }
