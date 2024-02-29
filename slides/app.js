'use strict';

const Images = [
    { 'id': '1', 'url':'./img/chrono.jpg' },
    { 'id': '2', 'url':'./img/inuyasha.jpg' },
    { 'id': '3', 'url':'./img/ippo.png' },
    { 'id': '4', 'url':'./img/tenchi.jpg' },
    { 'id': '5', 'url':'./img/tenjhotenge.jpg' },
    { 'id': '6', 'url':'./img/yuyuhakusho.jpg' },
];

const container = document.querySelector('#container-itens');

const loadImages = (images, container) =>  {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src ='${image.url}'>
        </div>
        `;
    });
};

//loadImages(Images, container);
