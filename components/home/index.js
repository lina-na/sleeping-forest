import s from 'styled-components';
import Selectors from './carousel';
import Preview from '../preview';

const LeftBarWrapper = s.div`
  position: absolute;
  left: 0;
  width: 40%;
  background: inherit;
  height: 100%; 
  top: 0;
  overflow: hidden;
`;

const LeftBar = s.div`
  position: absolute;
  left: 0;
  width: 40%;
  height: 100%; 
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 90px;
`;

const NewRelease = s.img`
  max-height: 80px;
  margin-bottom: 50px;
`;

const Boosty = s.img`
  max-height: 40px;
  margin-top: 50px;
`;

const SubGlass = s.div`
  width: 1000px; 
  height: 1000px; 
  background: inherit;  
  border: 1px solid white; 
  margin: -50px 0 0 -50px;  
  filter: blur(10px); 
  box-shadow: inset 0 0 0 4000px #00000070; 
`;

const Background = s.div`
  background-image: url("bg.png");
  width: 100%;
  height: 100%;
  position: absolute;
`

const PreviewsWrapper = s.div`
  position: absolute; 
  display: flex; 
  flex-direction: row; 
  bottom: 100px;
  left: 60%;
`;

const items = [{
  content: (
    <div>
      <NewRelease alt="new-release" src="new-release.png" />
      <p>
        Привет, ребята!
        Спешим рассказать вам, что новый релиз, который выйдет в эту субботу, уже доступен на нашем бусти.
      </p>
      <a href="https://boosty.to/sleepingforest">
        <Boosty alt="boosty" src="boosty.png" />
      </a>
    </div>
  ),
}, {
  content: (<p>Привет, ребята! Спешим рассказать вам еще что-нибудь.</p>),
}, {
  content: (<p>И еще что-нибудь.</p>)
}, {
  content: (<p> Воспользуюсь моментом и передам привет жене.</p>)
}, {
  content: (<p>Кто тут у нас такой любопытный?</p>)
}]

const previews = [{
  src: '/previews/1.jpg',
  title: 'My Own Hero',
  singer: 'KorraRous',
  link: '',
}, {
  src: '/previews/2.jpg',
  title: 'For Your Sake',
  singer: 'HayashiKi',
  link: '',
}, {
  src: '/previews/3.jpg',
  title: 'Monster vs. Angel',
  singer: 'Mapcuk',
  link: '',
}, {
  src: '/previews/4.jpg',
  title: 'Funny Little Frog',
  singer: 'Adelinara',
  link: '',
}, {
  src: '/previews/5.jpg',
  title: 'I’m bad too (Feat. DPR LIVE)',
  singer: 'Ss_ViWi_sS',
  link: '',
}]


export default function Home() {

  return (
    <Background>
      <LeftBar>
        <Selectors items={items} />
      </LeftBar>
      <LeftBarWrapper>
        <SubGlass />
      </LeftBarWrapper>

      <PreviewsWrapper>
        {previews.map((item, index) =>
          <Preview key={index} item={item} index={index} />
        )}
      </PreviewsWrapper>
    </Background>
  )
}