const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let navigationBtn = document.querySelector('.page-header__toggle');
let navigation = document.querySelector('.navigation');
let navigationBtnIconOpen = document.querySelector('.page-header__toggle-icon--open');
let navigationBtnIconClose = document.querySelector('.page-header__toggle-icon--close');
let mapWrapper = document.querySelector('.map__container');
let mapImg = document.querySelector('.map__img');

navigation.classList.remove('navigation--no-js');
navigationBtn.classList.remove('page-header__toggle--no-js');
mapWrapper.classList.remove('map__container--no-js');
mapImg.classList.add('map__img--hide');

navigationBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigation.classList.toggle('navigation--open');
  navigationBtnIconOpen.classList.toggle('page-header__toggle-icon--hide');
  navigationBtnIconClose.classList.toggle('page-header__toggle-icon--hide');
});

const map = L.map('map', { scrollWheelZoom: false })
  .setView({
    lat: 59.968137,
    lng: 30.316272,
  }, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
const marker = L.marker(
  {
    lat: 59.968137,
    lng: 30.316272,
  }
);
const mainPinIcon = L.icon({
  iconUrl: './../img/svg/pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968137,
    lng: 30.316272,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
