import { useMemo } from 'react'
import s from 'styled-components';

const Background = s.div`
  background-image: url("cover.jpg");
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-size: cover;
`;

const WaterflowWrapper = s.div`
  max-width: 40%;
`;

const Button = s.button`
  padding: 12px 41px 14px 40px;
  border-radius: 20px;
  background-color: #9ccb3b;
  text-transform: uppercase;
  transition: background-color .3s;

  :hover {
    background-color: #66920b;
  }
`;

const AboutContent = s.div`
  max-width: 30%;
  margin-right: 50px;
  align-self: center;

  p { 
    margin-bottom: 20px;
  }
`;

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
    <Background>
      <AboutContent>
        <p>
          Nunc quis neque tristique, porta ligula ac, lobortis leo.
          Vivamus tincidunt vulputate dignissim. Sed bibendum ante justo, vitae finibus justo pellentesque ut. In gravida magna tristique, dictum augue eget, tristique odio. Duis id placerat enim. Fusce turpis elit, pulvinar vel dapibus sed, elementum ac mauris.
        </p>
        <p>
          Cras molestie, nunc ut sollicitudin ultricies, purus leo commodo nunc, vel viverra metus arcu quis dolor.
          Curabitur lorem arcu, volutpat vitae posuere nec, iaculis quis lacus. Vestibulum in mauris sed turpis posuere ultricies.
          Suspendisse aliquet odio sit amet mauris euismod mollis. Ut sed odio eu neque blandit maximus a nec felis.
          </p>
        <br />
        <Button>Узнать Больше</Button>
      </AboutContent>

      <WaterflowWrapper>
        <div className="section">
          {typeof window !== 'undefined' && shuffledArray.map(({ type, size, name, backgroundImage }, index) =>
            <div style={size && { width: size, height: size }} key={type + index + name || size} className={type === TYPE_IMAGE ? "img" : 'particle img'}>
              {name && <h4>{name}</h4>}
              {backgroundImage && <img src={backgroundImage} alt={name} />}
            </div>)}
        </div>
      </WaterflowWrapper>
    </Background>
  )
}