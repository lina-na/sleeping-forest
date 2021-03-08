import { useMemo } from 'react'
import s from 'styled-components';
import { Masonry, Tile } from './masonry';

const Background = s.div`
  background-image: url("cover.jpg");
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  background-size: cover;
`;

const G = s.span`
  color: #9ccb3b;
`;

const WaterflowWrapper = s.div`
  max-width: 120%;
  position: absolute;
  z-index: 10;
  pointer-events: none;
`;

const Button = s.button`
  padding: 12px 41px 14px 40px;
  border-radius: 20px;
  background-color: #9ccb3b;
  text-transform: uppercase;
  transition: background-color .3s;
  margin-bottom: 50px;

  :hover {
    background-color: #66920b;
  }
`;

const AboutContent = s.div`
  max-width: 30%;
  margin-right: 50px;
  margin-top: 10%;

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
    for (let i = 0; i < 25; i++) {
      array.push({ size: getRandomSize(20, 50), type: TYPE_PARTICLE })
    }
    for (let i = 0; i < 10; i++) {
      array.push({ size: getRandomSize(20, 50), type: TYPE_PARTICLE, color: '#9ccb3ba6' })
    }
    return array;
  })();

  const cards = [{
    backgroundImage: '/vocalists/adelinara.jpg',
    name: 'Adelinara',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/bilbybu.jpg',
    name: 'Bilbybu',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/vova.jpg',
    name: 'GautiSuede',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/zephyris.jpg',
    name: 'niZephyris',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/oliver.jpg',
    name: 'ComedyCrub',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/mapcuk.jpg',
    name: 'Mapcuk',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/kuplinov.jpg',
    name: 'Kuplinov Play',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/guzeeva.jpg',
    name: 'Larisa Guzeeva',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/kris.jpg',
    name: 'Rivamoon',
    type: TYPE_IMAGE,
  }, {
    backgroundImage: '/vocalists/shana.jpg',
    name: 'Shana',
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

  const shuffledArray = useMemo(() => shuffleArray([...particles]), []);

  let brakePoints = [350, 500, 750];
  let images = [];
  const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
  for (let i = 0; i < imgId.length; i++) {
    const ih = 200 + Math.floor(Math.random() * 10) * 15;
    images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
  }


  return (
    <Background>
      <AboutContent>
        <h1><G>A</G>bout <G>U</G>s</h1>
        <p>
          Nunc quis neque tristique, porta ligula ac, lobortis leo.
          Vivamus tincidunt vulputate dignissim. Sed bibendum ante justo, vitae finibus justo pellentesque ut. In gravida magna tristique, dictum augue eget, tristique odio. Duis id placerat enim. Fusce turpis elit, pulvinar vel dapibus sed, elementum ac mauris.
        </p>
        <br />
        <Button>Узнать Больше</Button>
      </AboutContent>


      <div style={{ display: 'flex', width: '40%', position: 'relative', overflow: 'hidden', justifyContent: 'space-evenly' }}>
        <WaterflowWrapper>
          <div className="section">
            {typeof window !== 'undefined' && shuffledArray.map(({ type, size, name, backgroundImage, color }, index) =>
              <div style={size && { width: size, height: size, backgroundColor: color }} key={type + index + name || size} className={type === TYPE_IMAGE ? "img" : 'particle img'}>
                {name && <h4>{name}</h4>}
                {backgroundImage && <img src={backgroundImage} alt={name} />}
              </div>)}
          </div>
        </WaterflowWrapper>

        <div className="masonry-container">
          <Masonry brakePoints={brakePoints}>
            {cards.map((image, id) => {
              return (
                <Tile key={id} src={image.backgroundImage} />
              )
            })}
          </Masonry>
        </div>
      </div>
    </Background>
  )
}