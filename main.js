// На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt адрес ссылки, при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).

const getLinkBtn = document.querySelector('.btn-first');
const redirectBtn = document.querySelector('.btn-second');

function getLink() {
    let link;
    getLinkBtn.addEventListener('click', () => {
        link = prompt('Вставте посилання');
    });

    redirectBtn.addEventListener('click', () => {
        location.href = link;
    });
}

getLink();

// В папку images добавить изображения разных размеров: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение из этой папки, полученное случайным образом (Math.random). Размер изображения должен соотвецтвовать 80% размеров окна браузера (к примеру окно 1000px, то размер изображения 800px).

const imgBlock = document.querySelector('.img__block');

const randomNumber = Math.ceil(Math.random() * 9);

imgBlock.innerHTML = `<img style="width: ${window.innerWidth * 0.8}px; height: ${window.innerHeight * 0.8}px"; class="image" src="./images/${randomNumber}.jpg" alt="">`;