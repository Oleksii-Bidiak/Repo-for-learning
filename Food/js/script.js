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
   const deadline = '2022-10-24'

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
      if (num < 10) {
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

   modalBtns.forEach(item => {
      item.addEventListener('click', () => {
         modal.style.display = 'block'
      })
   })

   closeBtn.addEventListener('click', () => {
      modal.style.display = 'none'
   })
})