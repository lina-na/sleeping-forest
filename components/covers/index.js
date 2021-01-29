import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap'

export default function Covers() {
  const parentRef = useRef();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  let parent, slides;

  const getItem = (i) => {
    const n = slides.length;
    return slides[(i % n + n) % n];
  }

  const updateSlider = (way) => {
    let
      slideOnCenter,
      slideOnCenterRight,
      slideOnCenterLeft,
      slideRight,
      slideLeft,
      slideLastRight,
      slideLastLeft;

    slideOnCenter = getItem(activeSlideIndex);

    slideOnCenterLeft = getItem(activeSlideIndex - 1);
    slideLeft = getItem(activeSlideIndex - 2);
    slideLastLeft = getItem(activeSlideIndex - 3);

    slideOnCenterRight = getItem(activeSlideIndex + 1);
    slideRight = getItem(activeSlideIndex + 2);
    slideLastRight = getItem(activeSlideIndex + 3);

    const activeSlide = ReactDOM.findDOMNode(parent).getElementsByClassName('slide--active');
    activeSlide[0] && activeSlide[0].classList.remove("slide--active")
    slideOnCenter.classList.add("slide--active")

    gsap
      .timeline()
      .to(slideOnCenterRight, {
        rotate: -30, opacity: 1
      }, "<")
      .to(slideOnCenterLeft, {
        rotate: 30, opacity: 1
      }, "<")
      .to(slideOnCenter, {
        rotate: 0, opacity: 1
      }, "<")
      .to(slideLeft, {
        rotate: 60, opacity: 1
      }, "<")
      .to(slideRight, {
        rotate: -60, opacity: 1
      }, "<")
      .to(slideLastLeft, {
        rotate: 90, opacity: 0
      }, "<")
      .to(slideLastRight, {
        rotate: -90, opacity: 0
      }, "<")
  }


  useEffect(() => {
    parent = parentRef.current.parentNode
    slides = ReactDOM.findDOMNode(parent).getElementsByClassName('slide__container');



    if (slides) updateSlider()


  }, [activeSlideIndex]);

  const handlePrev = () => {
    setActiveSlideIndex(activeSlideIndex - 1);

  }

  const handleNext = () => {
    setActiveSlideIndex(activeSlideIndex + 1);

  }


  return (
    <>
      <div ref={parentRef} className="slider__container">
        <div className="slide__container">
          <div className="slide">0</div>
        </div>
        <div className="slide__container">
          <div className="slide">1</div>
        </div>
        <div className="slide__container">
          <div className="slide">2</div>
        </div>
        <div className="slide__container">
          <div className="slide">3</div>
        </div>
        <div className="slide__container">
          <div className="slide">4</div>
        </div>
        <div className="slide__container">
          <div className="slide">5</div>
        </div>
        <div className="slide__container">
          <div className="slide">6</div>
        </div>
        <div className="slide__container">
          <div className="slide">7</div>
        </div>

      </div>

      <div style={{ top: '50vh', position: 'absolute' }}>
        <button onClick={handlePrev} className="prev">prev</button>
        <button onClick={handleNext} className="next">next</button>
      </div>
    </>
  )
}