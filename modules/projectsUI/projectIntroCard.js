const createProjectIntroCard = ({ name, description, logo, imageAlt }) => {
  const section = document.createElement('section');
  section.classList.add('section-container');

  const mastercraftCard = document.createElement('div');
  mastercraftCard.classList.add('mastercraft-card');
  section.appendChild(mastercraftCard);

  const imgWrapper = document.createElement('div');
  mastercraftCard.appendChild(imgWrapper);

  const img = document.createElement('img');
  img.src = logo;
  img.alt = imageAlt;
  img.classList.add('mastercraft-logo');
  imgWrapper.appendChild(img);

  const h1 = document.createElement('h1');
  h1.textContent = name;
  mastercraftCard.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = description;
  mastercraftCard.appendChild(p);

  const bookmarkContent = document.createElement('div');
  bookmarkContent.classList.add('bookmark-content');
  mastercraftCard.appendChild(bookmarkContent);

  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.classList.add('bamboo-btn');
  backBtn.textContent = 'Back this project';
  bookmarkContent.appendChild(backBtn);

  const bookmarkBtn = document.createElement('button');
  bookmarkBtn.classList.add('bamboo-image');
  bookmarkContent.appendChild(bookmarkBtn);

  const bookmarkImg = document.createElement('img');
  bookmarkImg.src = 'images/icon-bookmark.svg';
  bookmarkImg.alt = 'Bookmark icon';
  bookmarkImg.classList.add('bookmark-image');
  bookmarkBtn.appendChild(bookmarkImg);

  const bookmarkText = document.createElement('span');
  bookmarkText.classList.add('book-mark-text');
  bookmarkText.textContent = 'Bookmark';
  bookmarkBtn.appendChild(bookmarkText);

  return section;
}

export default createProjectIntroCard;
