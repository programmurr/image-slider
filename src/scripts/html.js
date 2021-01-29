import Pic1 from '../img/pic1.jpg';
import Pic2 from '../img/pic2.jpg';
import Pic3 from '../img/pic3.jpg';
import Pic4 from '../img/pic4.jpg';
import Dot from '../img/dot.png';

const htmlGenerator = () => {
  const contentDiv = document.createElement('div');
  contentDiv.id = 'content';

  document.body.appendChild(contentDiv);

  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  contentDiv.appendChild(headerDiv);

  const header = document.createElement('h1');
  header.id = 'header';
  header.className = 'header';
  header.textContent = 'The Image Slider';

  headerDiv.appendChild(header);

  const imageArea = document.createElement('div');
  imageArea.id = 'image-area';

  contentDiv.appendChild(imageArea);

  const imagePartitionLeft = document.createElement('div');
  imagePartitionLeft.className = 'image-partition';
  imagePartitionLeft.id = 'left';
  const imagePartitionCenter = document.createElement('div');
  imagePartitionCenter.className = 'image-partition';
  imagePartitionCenter.id = 'center';
  const imagePartitionRight = document.createElement('div');
  imagePartitionRight.className = 'image-partition';
  imagePartitionRight.id = 'right';

  imageArea.appendChild(imagePartitionLeft);
  imageArea.appendChild(imagePartitionCenter);
  imageArea.appendChild(imagePartitionRight);

  const picture1 = document.createElement('img');
  picture1.src = Pic1;
  picture1.className = 'active';
  picture1.alt = 'curious-cat';
  const picture2 = document.createElement('img');
  picture2.src = Pic2;
  picture2.className = 'hidden';
  picture2.alt = 'daft-punk';
  const picture3 = document.createElement('img');
  picture3.src = Pic3;
  picture3.className = 'hidden';
  picture3.alt = 'hong-kong';
  const picture4 = document.createElement('img');
  picture4.src = Pic4;
  picture4.className = 'hidden';
  picture4.alt = 'squish-that-cat';

  imagePartitionCenter.appendChild(picture1);
  imagePartitionCenter.appendChild(picture2);
  imagePartitionCenter.appendChild(picture3);
  imagePartitionCenter.appendChild(picture4);

  // The nav dots are generated according to the length of the carousel
  const carousel = [...document.querySelectorAll('#center img')];

  const navDotContainer = document.createElement('div');
  navDotContainer.className = 'nav-dot-container';

  contentDiv.appendChild(navDotContainer);

  carousel.forEach((image, index) => {
    const navDot = document.createElement('img');
    navDot.id = `nav-dot-${index}`;
    navDot.src = Dot;
    navDot.className = 'nav-dot';
    if (index === 0) {
      navDot.classList.add('active-dot');
    } else {
      navDot.classList.add('hidden-dot');
    }
    navDotContainer.appendChild(navDot);
  });

  // navDotContainer.appendChild(navDots);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.id = 'buttons-container';

  contentDiv.appendChild(buttonsContainer);

  const prevButton = document.createElement('button');
  prevButton.id = 'previous';
  prevButton.textContent = 'Previous';
  const nextButton = document.createElement('button');
  nextButton.id = 'next';
  nextButton.textContent = 'Next';

  buttonsContainer.appendChild(prevButton);
  buttonsContainer.appendChild(nextButton);
};

export default htmlGenerator;
