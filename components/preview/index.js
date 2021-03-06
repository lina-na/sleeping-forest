import s from 'styled-components'

const Image = s.img`
  border-radius: 15px; 
  width: 100%;
  object-fit: cover;
  width:220px;
  height:220px;
  margin-bottom: 10px;
`;

const ActionsWrapper = s.div`
  width:220px;
  height:220px;
  position: absolute;
  top: 5px;
  left: 5px;
  background: #00000082;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px; 
  opacity: 0;
  z-index: 2;
  transition: opacity 0.5s;
`;

const Wrapper = s.div`
  width: 230px;
  height: 300px;
  border-radius: 15px; 
  padding: 5px;
  background: black;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 7px;
  z-index: 2;
  transition: background 0.5s;
  cursor: pointer;
  position: relative;

  ${Image} { 
    filter: grayscale(100%);
    transition: filter 0.5s;
  }

  &:hover {
    background: #252525;
    ${Image} {
      filter: none;
    }

    ${ActionsWrapper} {
      opacity: 1;
    }
  }
`;



const Title = s.h4`
  font-weight: bold;
  margin: 0;
`;

const Singer = s.p`
  margin-top: 10px;
`;


const Heart = s.img`
  position: absolute; 
  right: 10px;
  top: 10px;
  width: 23px;
  height: 20px
`;

const Share = s.img`
  position: absolute; 
  left: 10px;
  top: 10px;
  width: 15px;
  height: 20px;
`;

const Play = s.img`
  width: 50px;
  height: 50px;
`;

export default function Preview({ item, index, link }) {
  return (
    <Wrapper>
      <a href={link}>
        <ActionsWrapper>
          <Share src="share.png" alt="share" />
          <Play src="play.png" alt="play" />
          <Heart src="heart.png" alt="heart" />
        </ActionsWrapper>
        <Image alt={`cover-${index}`} src={item.src} />
        <Title>{item.title}</Title>
        <Singer>{item.singer}</Singer>
      </a>
    </Wrapper>
  )
}