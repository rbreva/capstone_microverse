const programData = [
  {
    name: 'Lecture',
    icon: 'lecture.svg',
    content: 'Listen to the speakers from various countries about the messages of sharing and opening.',
  },
  {
    name: 'CC Exhibition',
    icon: 'exhibition.svg',
    content: 'Appreciate various creations applying  license of artist, organized from Art Center.',
  },
  {
    name: 'Forum',
    icon: 'forum.svg',
    content: 'Have the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    name: 'Workshop',
    icon: 'workshop.svg',
    content: 'Try creating own work using open source license rather than just watching at it.',
  },
  {
    name: 'CC Ignite',
    icon: 'ignite.svg',
    content: 'Get opprtunities to network with CC affiliates around the world, also after the summit.',
  }
];

for (let i = 0; i < programData.length; i += 1) {

  const card = document.createElement('div');
  card.classList.add('card');

  const cardIcon = document.createElement('div');
  cardIcon.classList.add('card__icon');

  const cardImg = document.createElement('img');
  cardImg.src = `images/svg/icons/${programData[i].icon}`;

  const cardH3 = document.createElement('h3');
  cardH3.classList.add('card__h3');
  cardH3.textContent = programData[i].name;

  const cardp = document.createElement('p');
  cardp.classList.add('card__p');
  cardp.textContent = programData[i].content;

  cardIcon.appendChild(cardImg);
  card.appendChild(cardIcon);
  card.appendChild(cardH3);
  card.appendChild(cardp);

  document.querySelector('.cards').appendChild(card);

}
