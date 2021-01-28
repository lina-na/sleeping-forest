import { useMemo } from 'react'
const TYPE_PARTICLE = 'TYPE_PARTICLE';
const TYPE_IMAGE = 'TYPE_IMAGE';

export default function About() {

  const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const particles = (() => {
    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push({ size: getRandomSize(20, 50), type: TYPE_PARTICLE })
    }
    return array;
  })();

  const cards = [{
    backgroundImage: '/vocalists/XzA2MTA4NjEuanBn.jpg',
    name: 'Вася',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzA5MTkxMTAuanBn.jpg',
    name: 'Ира',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzA5MzA1MjkuanBn.jpg',
    name: 'Вова',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAwMjEwNzguanBn.jpg',
    name: 'Жена',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAwMjg5MjUuanBn.jpg',
    name: 'Пельмешек',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAwNTUyMTkuanBn.jpg',
    name: 'Олег',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAxMTU0NTMuanBn.jpg',
    name: 'Вероника',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAxOTE2ODkuanBn.jpg',
    name: 'Шанана',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAyMDU4MDYuanBn.jpg',
    name: 'Веселый огурец',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/XzAzNzM1NjUuanBn.jpg',
    name: 'Филипп Киркоров',
    type: TYPE_IMAGE,
  }]

  const shuffleArray = (input) => {
    const array = [...input];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = { ...array[i] };
      array[i] = { ...array[j] };
      array[j] = { ...temp };
    }
    return array;
  }

  const shuffledArray = useMemo(() => shuffleArray([...particles, ...cards]), []);

  return (
    <div>
      <div className="section">
        {shuffledArray.map(({ type, size, name, backgroundImage }, index) => 
          <div style={size && { width: size, height: size }} key={index} className={type === TYPE_IMAGE ? "img" : 'particle img'}>
            {name && <h4>{name}</h4>}
            {backgroundImage && <img src={backgroundImage} alt={name} />}
          </div>)}
      </div>
    </div>
  )
}