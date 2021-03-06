import { useState } from "react";
import s, { css, keyframes } from 'styled-components';
import useInterval from '../../hooks/useInterval';

const SelectorsWrapper = s.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Selector = s.div`
  background: white;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.3;
  cursor: pointer;
  transition: background, transform, opacity .4s;

  &:hover {
    background: #9ccb3b;
    opacity: 1;
    transform: scale(1.4);
  }

  ${p => p.isactive && css`
    background: #9ccb3b;
    opacity: 1;
    transform: scale(1.4);
  `}
`;

const SelectorWrapper = s.div`
  width: 20px;
  height: 20px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalLine = s.div`
  border-left: 2px solid white;
  height: 100px;
  margin: 30px 0;
`;

const Content = s.div`
  position: absolute;
  visibility: ${props => !props.active ? 'hidden' : 'visible'};
  animation: ${props => !props.active ? fadeOut : fadeIn} 1s ease-in;
  transition: visibility 1s ease-in;
  padding-right: 50px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;


const Selectors = ({ items, active, handleActiveChange }) => {
  const handleClick = (index) => {
    if (index !== active) handleActiveChange(index);

  }

  return (
    <SelectorsWrapper>
      <VerticalLine />
      {items.map((item, index) =>
        <SelectorWrapper key={index}>
          <Selector
            onClick={() => handleClick(index)}
            isactive={active === index}
          />
        </SelectorWrapper>
      )}
      <VerticalLine />
    </SelectorsWrapper>
  )
}



export default function Slider({ items }) {
  const [active, setActive] = useState(0);


  const handleActiveChange = (value) => {
    setActive(value);
  }

  useInterval(() => {
    handleActiveChange(((active + 1) % items.length + items.length) % items.length);
  }, 5000);


  return (
    <>
      <Selectors
        items={items}
        active={active}
        handleActiveChange={handleActiveChange}
      />
      {items.map((item, index) => {
        if (index === active) return <Content active>{item.content}</Content>;
        else return <Content>{item.content}</Content>
      })
      }
    </>
  )
}