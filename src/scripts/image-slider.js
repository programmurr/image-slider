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

  const rotateDotImg = (dotNum) => {
    navDots.forEach((dot, index) => {
      if (index === dotNum) {
        dot.classList.remove('hidden-dot');
        dot.classList.add('active-dot');
      } else {
        dot.classList.remove('active-dot');
        dot.classList.add('hidden-dot');
      }
    });
  };

  const nextButtonHandler = (event) => {
    const imgIndex = (carousel.findIndex((image) => image.classList.contains('active')) + 1) % carousel.length;
    rotateImg(imgIndex);
  };

  const prevButtonHandler = (event) => {
    const imgIndex = (carousel.findIndex((image) => image.classList.contains('active')) === 0)
      ? carousel.length - 1
      : carousel.findIndex((image) => image.classList.contains('active')) - 1;
    rotateImg(imgIndex);
  };

  const dotHandler = (event) => {
    // get the index of the clicked dot
    // pass that index in and fix images accordingly
    console.log(dotIndex);
    // rotateDotImg(dotIndex);
    // rotateImg(dotIndex);
  };

  nextButton.addEventListener('click', nextButtonHandler);
  prevButton.addEventListener('click', prevButtonHandler);
  navDots.forEach((dot) => {
    dot.addEventListener('click', dotHandler);
  });
};

export default imageSlider;
