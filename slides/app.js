'use strict';

const Images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/ippo.png' },
    { 'id': '4', 'url':'./img/tenchi.jpg' },
    { 'id': '5', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '6', 'url':'./img/yuyuhakusho.jpg' },
];

const containerItems = document.querySelector('#container-itens');

const loadImages = (images, container) =>  {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src ='${image.url}'>
        </div>
        `;
    });
};

loadImages(Images, containerItems);    

let items = document.querySelectorAll('.item');

const previous  = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
} 

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
