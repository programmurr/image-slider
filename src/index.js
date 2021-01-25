import './styles/style.css';
import Pic1 from './img/pic1.jpg';
import Pic2 from './img/pic2.jpg';
import Pic3 from './img/pic3.jpg';
import Pic4 from './img/pic4.jpg';

const pictureFrame = document.querySelector('#center');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#previous');

const picture1 = new Image();
picture1.src = Pic1;
const picture2 = new Image();
picture2.src = Pic2;
const picture3 = new Image();
picture3.src = Pic3;
const picture4 = new Image();
picture4.src = Pic4;

const imageArray = [picture1, picture2, picture3, picture4];
let currentIndex = 0;

picture1.className = 'visible';

pictureFrame.appendChild(picture1);

function nextImage() {
  let nextIndex = currentIndex + 1;
  if (nextIndex > imageArray.length - 1) {
    nextIndex = 0;
  }

  pictureFrame.innerHTML = '';
  imageArray[nextIndex].className = 'visible';
  pictureFrame.appendChild(imageArray[nextIndex]);
  imageArray[currentIndex].classList.remove('visible');
  currentIndex = nextIndex;
}

function previousImage() {
  let nextIndex = currentIndex - 1;
  if (nextIndex < 0) {
    nextIndex = imageArray.length - 1;
  }

  pictureFrame.innerHTML = '';
  imageArray[currentIndex].classList.remove('visible');
  imageArray[nextIndex].className = ('visible');
  pictureFrame.appendChild(imageArray[nextIndex]);
  currentIndex = nextIndex;
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', previousImage);
