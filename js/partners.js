const partnersData = [
  {
    name: 'mozilla',
    image: 'mozilla.svg',
  },
  {
    name: 'google',
    image: 'google.svg',
  },
  {
    name: 'naver',
    image: 'naver.svg',
  },
  {
    name: 'daumkakao',
    image: 'daumkakao.svg',
  },
  {
    name: 'airbnb',
    image: 'airbnb.svg',
  },
];

for (let i = 0; i < partnersData.length; i += 1) {

  const partnerLi = document.createElement('li');

  const liImg = document.createElement('img');
  liImg.src = `images/svg/partners/${partnersData[i].image}`;
  liImg.alt = `${partnersData[i].name}`;

  partnerLi.appendChild(liImg);
  
  document.querySelector('.partner_list').appendChild(partnerLi);
}
