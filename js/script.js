// 1. Создайте список элементов <li>. Добавьте обработчик события,
// который будет меня стили элементу при клике на тег li. Используйте event.target
// для получения текущего элемента, на котором произошло событие. (то есть должен быть
// один обработчик на родителе, а не на каждом теге li)
// const list = document.querySelector('ol')
// const listItems = document.querySelectorAll('.listItem')

// const changeClass = (event) => {
//     if (event.target != list) {
//         let check = true
//         for (let listItem of listItems) {
//             if (listItem.classList.contains('newClass') && listItem == event.target) {
//                 check = false
//             }
//             listItem.classList.remove('newClass')
//         }
//         if (check) {
//             event.target.classList.add('newClass')
//         }
//     }
// }
// list.addEventListener('click', changeClass)


// 2. Создайте галерею изображений (просто в ряд 3-4 фотографии) с помощью тегов <img>.
// Добавьте обработчик события, который будет выводить в консоль имя файла изображения
// (информацию из атрибута alt) при клике на него. Используйте event.target для получения элемента <img>.
// const arr = document.querySelector('.arr')
// const arr__img = document.querySelector('.arr__img')
// const whatch = (event) => {
//     if (event.target != arr) {
//         console.log(event.target.alt);
//     }
// }
// arr.addEventListener('click', whatch)

// 3.  Создайте HTML-форму с полем ввода текста и кнопкой "опубликовать". Так же создайте
// какой-нибудь пустой тег, например, с классом content, туда вы будете добавлять сообщения
// из формы. Напишите обработчик события, который будет выводить в блок content значение,
// введенное пользователем в поле ввода. Поле ввода после этого должно очищаться.
// const input = document.querySelector('input')
// const btn = document.querySelector('button')
// const content = document.querySelector('.content')

// const publish = (event) => {
//     event.preventDefault()
//     content.style.display = 'block'
//     content.innerHTML += `<p>` + input.value + `</p>`
//     input.value = ''

// }
// btn.addEventListener('click', publish)

// 4. Доработайте 3 задачу. Теперь в блок content должно публиковаться не просто сухое сообщение
// из формы ввода. А это сообщение должно быть обрамлено в тег див с каким-нибудь классом и стилизацией.
// Так же каждое сообщение должно  содержать кнопку удалить и кнопку редактировать (можете разместить их как угодно).
// const input = document.querySelector('input')
// const btn = document.querySelector('button')
// const content = document.querySelector('.content')

// const publish = (event) => {
//     event.preventDefault()
//     content.style.display = 'block'
//     content.innerHTML +=
//         `<div class='content__text'>` +
//         `<p>` + input.value + `</p>` +
//         `<button class='content__btn del'>X</button>` +
//         `<button class='content__btn edit'>Edit</button>` +
//         `</div>`;
//     input.value = ''
// }
// btn.addEventListener('click', publish)

// 5. Доработайте 4 задачу. Теперь с помощью event.target сделайте так чтобы при нажатии на кнопку удалить ваше сообщение удалялось из html.
// const input = document.querySelector('input')
// const btn = document.querySelector('button')
// const content = document.querySelector('.content')

// const publish = (event) => {
//     event.preventDefault()
//     content.style.display = 'block'
//     content.innerHTML +=
//         `<div class='content__text'>` +
//         `<p>` + input.value + `</p>` +
//         `<button class='content__btn del'>X</button>` +
//         `<button class='content__btn edit'>Edit</button>` +
//         `</div>`;
//     input.value = ''

//     const del__btns = document.querySelectorAll('.del')
//     const content__texts = document.querySelectorAll('.content__text')
//     for (let content__text of content__texts) {
//         const delete_text = (event) => {
//             for (let del__btn of del__btns) {
//                 if (event.target == del__btn) {
//                     event.target.parentNode.style.display = 'none'
//                 }
//             }
//         }
//         content__text.addEventListener('click', delete_text)
//     }

// }
// btn.addEventListener('click', publish)


//6
// const input = document.querySelector('input')
// const btn = document.querySelector('button')
// const content = document.querySelector('.content')

// const publish = (event) => {
//     event.preventDefault()
//     content.style.display = 'block'
//     content.innerHTML +=
//         `<div class='content__text'>` +
//         `<p>` + input.value + `</p>` +
//         `<button class='content__btn del'>X</button>` +
//         `<button class='content__btn edit'>Edit</button>` +
//         `</div>`;
//     input.value = ''

//     const del__btns = document.querySelectorAll('.del')
//     const content__texts = document.querySelectorAll('.content__text')
//     for (let content__text of content__texts) {
//         const delete_text = (event) => {
//             for (let del__btn of del__btns) {
//                 if (event.target == del__btn) {
//                     event.target.parentNode.style.display = 'none'
//                 }
//             }
//         }
//         content__text.addEventListener('click', delete_text)
//     }
//     const edit__btns = document.querySelectorAll('.edit')
//     for (let content__text of content__texts) {
//         const edit_text = (event) => {
//             for (let edit__btn of edit__btns) {
//                 if (event.target == edit__btn) {
//                     content__text.innerHTML += `<form action="">
//                     <input class='input_edit'type="text" placeholder="Message">
//                     <button class='send_edit'>Send</button>
//                     </form>`
//                     const send_edit = document.querySelector('.send_edit')
//                     const input_edit = document.querySelector('.input_edit')
//                     send_edit.addEventListener('click', () => {
//                         content__text.innerHTML =
//                             `<p>` + input_edit.value + `</p>` +
//                             `<button class='content__btn del'>X</button>` +
//                             `<button class='content__btn edit'>Edit</button>`;
//                     })
//                 }
//             }
//         }
//         content__text.addEventListener('click', edit_text)
//     }

// }
// btn.addEventListener('click', publish)