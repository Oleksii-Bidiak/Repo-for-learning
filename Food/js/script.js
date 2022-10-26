document.addEventListener('DOMContentLoaded', () => {
   // Tabs
   const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

   const hideTabsContent = () => {
      tabsContent.forEach(item => {
         item.classList.add('hide')
         item.classList.remove('show', 'fade')
      })

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active')
      })
   }

   const showTabContent = (i = 0) => {
      tabsContent[i].classList.add('show', 'fade')
      tabsContent[i].classList.remove('hide')

      tabs[i].classList.add('tabheader__item_active')
   }

   hideTabsContent()
   showTabContent()

   tabsParent.addEventListener('click', e => {
      const target = e.target

      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target === item) {
               hideTabsContent()
               showTabContent(i)
            }
         })
      }
   })

   // Timer
   const deadline = '2022-10-28'

   const getTimeRemaining = (endtime) => {
      const t = Date.parse(endtime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
         minute = Math.floor((t / (1000 * 60)) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         days,
         hours,
         minute,
         seconds
      }
   }

   const getZero = (num) => {
      if (num <= 0) {
         return 0
      } else if (num < 10 && num >= 0) {
         return `0${num}`
      }
      return num
   }

   const setClock = (selector, endtime) => {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds');

      const updateClock = () => {
         const t = getTimeRemaining(endtime)

         days.innerHTML = getZero(t.days)
         hours.innerHTML = getZero(t.hours)
         minutes.innerHTML = getZero(t.minute)
         seconds.innerHTML = getZero(t.seconds)

         if (t.total <= 0) {
            clearInterval(timeInterval)
         }
      }

      const timeInterval = setInterval(updateClock, 1000)

      updateClock()
   }

   setClock('.timer', deadline)

   // Modal

   const modalBtns = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      closeBtn = document.querySelector('[data-close]');

   const openModal = () => {
      modal.classList.toggle('show')
      document.body.style.overflow = 'hidden'
   },
      closeModal = () => {
         modal.classList.toggle('show')
         document.body.style.overflow = ''
      }

   modalBtns.forEach(item => {
      item.addEventListener('click', openModal)
   })

   closeBtn.addEventListener('click', closeModal)

   modal.addEventListener('click', e => {
      const target = e.target
      if (target === modal) {
         closeModal()
      }
   })

   document.addEventListener('keydown', e => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
         closeModal()
      }
   })

   // Cards

   class menuCard {
      constructor(src, alt, title, description, price, parentSelector) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.description = description;
         this.price = price;
         this.parent = document.querySelector(parentSelector);
         this.transfer = 41;
         this.changeToUAH()
         this.render()
      }

      changeToUAH() {
         this.price *= +this.transfer
      }

      render() {
         const element = document.createElement('div')
         element.innerHTML = `
            <div class="menu__item">
               <img src=${this.src} alt=${this.alt}>
               <h3 class="menu__item-subtitle">${this.title}</h3>
               <div class="menu__item-descr">${this.description}</div>
               <div class="menu__item-divider"></div>
               <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
               </div>
            </div>
         `

         this.parent.append(element)
      }
   }

   new menuCard(
      'img/tabs/vegy.jpg',
      'vegy',
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      '9',
      '.menu .container'
   )

   new menuCard(
      'img/tabs/elite.jpg',
      'elite',
      'Меню “Премиум”',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      '9',
      '.menu .container'
   )

   new menuCard(
      'img/tabs/post.jpg',
      'post',
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      '9',
      '.menu .container'
   )
})