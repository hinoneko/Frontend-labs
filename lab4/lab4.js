function setupToggle(element, colors) {
    if (!element) return;

    const original = {
        bg: window.getComputedStyle(element).backgroundColor,
        color: window.getComputedStyle(element).color
    };
    let state = 0;

    element.addEventListener('click', () => {
        state = (state + 1) % 3;
        if (state === 1) {
            element.style.backgroundColor = colors[0].bg;
            element.style.color = colors[0].color;
        } else if (state === 2) {
            element.style.backgroundColor = colors[1].bg;
            element.style.color = colors[1].color;
        } else {
            element.style.backgroundColor = original.bg;
            element.style.color = original.color;
        }
    });
}


setupToggle(document.getElementById('element8'), [
    { bg: '#FFE5B4', color: '#8B4513' },
    { bg: '#D7FFE0', color: '#185843' }
]);


setupToggle(document.querySelector('#element9'), [
    { bg: '#FFD1DC', color: '#C71585' },
    { bg: '#E4DBFF', color: '#322979' }
]);


const mainImage = document.getElementById('cityImage');
mainImage.addEventListener('click', () => {
    window.open('https://www.iamsterdam.com/en', '_blank');
});


const container = document.getElementById('imageContainer');
let selectedBox = null;
let scale = 1.0;


document.getElementById('addBtn').addEventListener('click', () => {
    const newBox = document.createElement('div');
    newBox.classList.add('image-box');

    const newImg = document.createElement('img');
    newImg.src = 'Amsterdam.jpg';
    newImg.alt = 'Фото міста Амстердам';
    newImg.style.transform = 'scale(1)';

    newBox.appendChild(newImg);
    container.appendChild(newBox);

    newImg.addEventListener('click', () => selectBox(newBox));
});


function selectBox(box) {
    if (!box) return;

    document.querySelectorAll('.image-box').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
    selectedBox = box;
    scale = 1.0;
}


function updateScale() {
    if (!selectedBox) return;
    const img = selectedBox.querySelector('img');
    img.style.transform = `scale(${scale})`;
}

function changeScale(factor) {
    if (!selectedBox) return;
    scale = Math.min(Math.max(scale * factor, 0.3), 3.0);
    updateScale();
}

document.getElementById('increaseBtn').addEventListener('click', () => changeScale(1.2));
document.getElementById('decreaseBtn').addEventListener('click', () => changeScale(0.8));


document.getElementById('removeBtn').addEventListener('click', () => {
    if (selectedBox) {
        selectedBox.remove();
        selectedBox = null;
    }
});