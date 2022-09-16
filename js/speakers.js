const speakersData = [
  {
    name: 'Yachoy Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard law School',
    image: '0001.jpg',
    content: 'Benckler studies commons-based peer production, and published his seminal book The Wealth of Network in 2006.',
  },
  {
    name: 'Kilnam Chon',
    title: '',
    image: '0002.jpg',
    content: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society (ISOC) Internet Hall of Fame.',
  },
  {
    name: 'SohYeong noh',
    title: 'Director of Art Centre Nabi and a board member of Tech Meet',
    image: '0003.jpg',
    content: 'As the main venue for new media art production, promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    image: '0004.jpg',
    content: 'European ingetration, political democracy and participation of youth through online as her major condem, Reda’s report outlining potencial changes to EU copyright law was approved by the Parliamentes in July.',
  },
  {
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    image: '0005.jpg',
    content: 'Lila tretikov is the Executive Director of the Wikipedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people aroud the world every month',
  },
  {
    name: 'Tyan Merkley',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    image: '0006.jpg',
    content: 'Ryan had leading open-source projects at the Mozilla Foundations Foundation such as the open source movement.',
  },
];

for (let i = 0; i < speakersData.length; i += 1) {

  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  const speakerImg = document.createElement('div');
  speakerImg.classList.add('speaker__img');

  const cardImg = document.createElement('img');
  cardImg.src = `images/speakers/${speakersData[i].image}`;
  cardImg.alt = `${speakersData[i].name}`;

  const speakerContent = document.createElement('div');
  speakerContent.classList.add('speaker__content');

  const speakerH2 = document.createElement('h2');
  speakerH2.classList.add('speaker__h2');
  speakerH2.textContent = speakersData[i].name;

  const speakerH3 = document.createElement('h3');
  speakerH3.classList.add('speaker__h3');
  speakerH3.textContent = speakersData[i].title;

  const speakerLine = document.createElement('div');
  speakerLine.classList.add('speaker__line');

  const speakerp = document.createElement('p');
  speakerp.classList.add('speaker__p');
  speakerp.textContent = speakersData[i].content;

  speakerImg.appendChild(cardImg);
  speakerContent.appendChild(speakerH2);
  speakerContent.appendChild(speakerH3);
  speakerContent.appendChild(speakerLine);
  speakerContent.appendChild(speakerp);
  speaker.appendChild(speakerImg);
  speaker.appendChild(speakerContent);

  document.querySelector('.speakers').appendChild(speaker);

}