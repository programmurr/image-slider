import FullDot from '../img/dot.png';
import EmptyDot from '../img/empty-dot.png';

const imageSlider = () => {
  const nextButton = document.querySelector('#next');
  const prevButton = document.querySelector('#previous');
  const carousel = [...document.querySelectorAll('#center img')];
  const navDots = [...document.querySelectorAll('.nav-dot')];

  const rotateImg = (imgNum) => {
    carousel.forEach((img, index) => {
      if (index === imgNum) {
        img.classList.remove('hidden');
        img.classList.add('active');
      } else {
        img.classList.remove('active');
        img.classList.add('hidden');
      }
    });
  };

  function rotateDots(nextIndex, currentIndex) {
    navDots[currentIndex].classList.remove('active-dot');
    navDots[currentIndex].classList.add('hidden-dot');
    navDots[currentIndex].src = EmptyDot;
    navDots[nextIndex].classList.remove('hidden-dot');
    navDots[nextIndex].classList.add('active-dot');
    navDots[nextIndex].src = FullDot;
  }

  const nextButtonHandler = (event) => {
    const nextIndex = (carousel.findIndex((image) => image.classList.contains('active')) + 1) % carousel.length;
    const currentIndex = nextIndex === 0 ? carousel.length - 1 : nextIndex - 1;
    rotateDots(nextIndex, currentIndex);
    rotateImg(nextIndex);
  };

  const prevButtonHandler = (event) => {
    const nextIndex = (carousel.findIndex((image) => image.classList.contains('active')) === 0)
      ? carousel.length - 1
      : carousel.findIndex((image) => image.classList.contains('active')) - 1;
    const currentIndex = nextIndex === carousel.length - 1 ? 0 : nextIndex + 1;
    rotateDots(nextIndex, currentIndex);
    rotateImg(nextIndex);
  };

  const dotHandler = (event) => {
    const dotIndex = (navDots.findIndex((dot) => dot.classList.contains('active-dot')));
    const imgIndex = (carousel.findIndex((image) => image.classList.contains('active')));
    navDots[dotIndex].classList.remove('active-dot');
    navDots[dotIndex].classList.add('hidden-dot');
    navDots[dotIndex].src = EmptyDot;
    carousel[imgIndex].classList.remove('active');
    carousel[dotIndex].classList.add('hidden');
    event.target.classList.remove('hidden-dot');
    event.target.classList.add('active-dot');
    event.target.src = FullDot;
    const nextIndex = (navDots.findIndex((dot) => dot.classList.contains('active-dot')));
    carousel[nextIndex].classList.remove('hidden');
    carousel[nextIndex].classList.add('active');
  };

  nextButton.addEventListener('click', nextButtonHandler);
  prevButton.addEventListener('click', prevButtonHandler);
  navDots.forEach((dot) => {
    dot.addEventListener('click', dotHandler);
  });

  const imageLoop = () => { window.setInterval(nextButtonHandler, 5000); };
  imageLoop();
};

export default imageSlider;
