/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


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
    movieList = document.querySelectorAll('.promo__interactive-list > li'),
    form = document.querySelector('.add'),
    inputForm = form.getElementsByClassName('adding__input'),
    btnAdd = form.querySelector('button'),
    checkbox = form.querySelector('[type="checkbox"]');

advs.forEach(item => {
    item.remove()
})

promoGenre.textContent = 'Драма'

poster.style.backgroundImage = "url('img/bg.jpg')"

movieList.innerHTML = ''
movieDB.movies.forEach((item, i) => {
    let movie = item
    if (movie.length > 21) {
        movie = movie.slice(0, 19) + '...'
    }

    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${movie}
            <div class="delete"></div>
        </li>
    `
})

btnAdd.addEventListener('click', setNewFilm)

function setNewFilm(e) {
    e.preventDefault()

    const fav = checkbox.value

    if (inputForm[0].value !== '') {
        const newFilm = inputForm[0].value.split(', ').map(item => { return `${item.split('')[0].toUpperCase()}${item.slice(1)}` }).join('')
        movieDB.movies.push(newFilm)
        movieDB.movies.sort()

        if (fav) {
            console.log('Улюблений')
        }

        movieList.innerHTML = ''
        movieDB.movies.forEach((item, i) => {
            let movie = item
            if (movie.length > 21) {
                movie = movie.slice(0, 19) + '...'
            }

            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${movie}
                    <div class="delete"></div>
                </li>
            `
        })
    }
}

movieList.forEach(element => {
    element.addEventListener('click', () => {
        element.remove()
    })
});
