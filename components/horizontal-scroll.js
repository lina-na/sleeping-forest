import React, { useReducer, useEffect, useRef } from "react";
import styled from "styled-components";

const DynamicHeightContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` }
}))`
  position: relative;
  width: 100%;
`;

const HorizontalObjectContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;  

const HorizontalObject = styled.div.attrs(({ translate }) => ({
  style: { transform: `translateX(${translate}px)` }
}))`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh;
};

const setDynamicHeight = (ref, dispatch) => {
  const objectWidth = ref.current.scrollWidth;
  dispatch({ type: "SET_OBJECT_WIDTH", objectWidth });
  const dynamicHeight = calcDynamicHeight(objectWidth);
  dispatch({ type: "SET_DYNAMIC_HEIGHT", dynamicHeight });
};

const applyScrollListener = (dispatch, containerRef) => {
  window.addEventListener("scroll", () => {
    const offsetTop = containerRef.current.offsetTop;
    dispatch({ type: "SET_DELTA_X_OFFSET_TOP", offsetTop });
  });
};

const translateReducer = (state, action) => {
  switch (action.type) {
    case "SET_DELTA_X_OFFSET_TOP":
      const deltaX = -action.offsetTop;
      return { ...state, deltaX };
    case "SET_OBJECT_WIDTH":
      return { ...state, objectWidth: action.objectWidth };
    case "SET_DYNAMIC_HEIGHT":
      return { ...state, dynamicHeight: action.dynamicHeight };
    default:
      return { ...state };
  }
};

export default ({ children }) => {
  const [translate, dispatch] = useReducer(translateReducer, {
    scrollY: 0,
    deltaX: 0,
    dynamicHeight: null,
    objectWidth: null
  });

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    setDynamicHeight(objectRef, dispatch);
  };

  useEffect(() => {
    setDynamicHeight(objectRef, dispatch);
    applyScrollListener(dispatch, containerRef);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <DynamicHeightContainer dynamicHeight={translate.dynamicHeight}>
      <HorizontalObjectContainer ref={containerRef}>
        <HorizontalObject translate={translate.deltaX} ref={objectRef}>
          {children}
        </HorizontalObject>
      </HorizontalObjectContainer>
    </DynamicHeightContainer>
  );
};
