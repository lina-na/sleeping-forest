import s from 'styled-components';
import Selectors from './carousel';

const LeftBarWrapper = s.div`
  position: absolute;
  left: 0;
  width: 40%;
  background: inherit;
  height: 100vh; 
  top: 0;
  overflow: hidden;
`;

const LeftBar = s.div`
  position: absolute;
  left: 0;
  width: 40%;
  height: 100vh; 
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


export default function Home() {

  return (
    <Background>
      <LeftBar>
        <Selectors items={items} />
      </LeftBar>
      <LeftBarWrapper>
        <SubGlass />
      </LeftBarWrapper>
    </Background>
  )
}