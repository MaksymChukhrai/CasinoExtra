// // Для элементов с одинаковым тегом (например, все <div>)
// const elementsByTag = document.getElementsByTagName('div');
// for (let i = 0; i < elementsByTag.length; i++) {
//     const element = elementsByTag[i];
//     const link = document.createElement('a');
//     link.href = 'https://evropakipr.com/'; // Здесь можно указать URL ссылки
//     link.textContent = 'Новости Кипра'; // Текст ссылки
//     element.appendChild(link);
// }

// ___________________________________________________________
// // Для элементов с одинаковым классом (например, все с классом 'example-class')
// const elementsByClass = document.querySelectorAll('.example-class');
// elementsByClass.forEach(element => {
//     const link = document.createElement('a');
//     link.href = '#'; // Здесь можно указать URL ссылки
//     link.textContent = 'Ссылка'; // Текст ссылки
//     element.appendChild(link);
// });
// ___________________________________________________________

// Выбираем все изображения на странице
const images = document.querySelectorAll('img');

// Проходимся по каждому изображению и добавляем ссылку
images.forEach(image => {
    const link = document.createElement('a');
    link.href = 'https://evropakipr.com/'; // Здесь можно указать URL ссылки

    image.parentNode.insertBefore(link, image.nextSibling);
    link.appendChild(image);
});