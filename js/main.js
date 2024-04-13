const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const carouselImgElem = document.querySelector('.my-carousel-images');

images.forEach((curImg) => {
  const innerElem = `
  <div class="my-carousel-item" carousel-item="1">
    <img
      class="img-fluid"
      src="${curImg.image}"
      alt="Marvel's Spiderman Miles Morale picture"
    />
    <div class="item-description px-3">
      <h2>${curImg.title}</h2>
      <p>${curImg.text}</p>
    </div>
  </div>
  `;

  carouselImgElem.innerHTML += innerElem;

})

const inners = document.querySelectorAll('.my-carousel-item');
console.log(inners);

let activeIndex = 0;

inners[activeIndex].classList.add('active');

document.querySelector('.my-next').addEventListener('click', showNext);

function showNext() {
  inners[activeIndex].classList.remove('active');

  if (activeIndex < images.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }

  inners[activeIndex].classList.add('active');
}

document.querySelector('.my-previous').addEventListener('click', showPrevious);

function showPrevious() {
  inners[activeIndex].classList.remove('active');

  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
  }

  inners[activeIndex].classList.add('active');
}