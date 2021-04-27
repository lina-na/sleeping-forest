import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap'

const AUDIO = [
  {
    title: 'In The Long Run',
    subtitle: 'Port Isla',
    image: 'http://piers.io/codepen/music-player/port-isla/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/port-isla/audio.m4a'
  },
  {
    title: 'Lament',
    subtitle: 'Piers Olenski',
    image: 'http://piers.io/codepen/music-player/piers-olenski/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/piers-olenski/audio.mp3'
  },
  {
    title: 'Beach Ball Dinner',
    subtitle: 'Man Bro Dude',
    image: 'http://piers.io/codepen/music-player/man-bro-dude/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/man-bro-dude/audio.mp3'
  },
  {
    title: 'Beach Ball Dinner',
    subtitle: 'Man Bro Dude',
    image: 'http://piers.io/codepen/music-player/man-bro-dude/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/man-bro-dude/audio.mp3'
  },
  {
    title: 'In The Long Run',
    subtitle: 'Port Isla',
    image: 'http://piers.io/codepen/music-player/port-isla/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/port-isla/audio.m4a'
  },
  {
    title: 'Lament',
    subtitle: 'Piers Olenski',
    image: 'http://piers.io/codepen/music-player/piers-olenski/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/piers-olenski/audio.mp3'
  },
  {
    title: 'Beach Ball Dinner',
    subtitle: 'Man Bro Dude',
    image: 'http://piers.io/codepen/music-player/man-bro-dude/thumb.jpg',
    audio: 'http://piers.io/codepen/music-player/man-bro-dude/audio.mp3'
  },
];

const AudioBubble = (props) => {
  const [strokeDashoffset, setStrokeDashoffset] = useState();
  const audio = useRef();
  const progress = useRef();
  const [duration, setDuration] = useState();
  const [pathLength, setPathLength] = useState();



  useEffect(() => {
    audio.current.addEventListener('loadedmetadata', () => {
      console.log('!!!!!!!!', audio.current.duration)
      setDuration(audio.current.duration);
    });

    if (audio.current.readyState >= 2) {
      setDuration(audio.current.duration);
    }
    setPathLength(progress.current.getTotalLength());
    console.log('kek', audio.current.duration)
    setStrokeDashoffset(progress.current.getTotalLength())

    return () => {
      audio.current.removeEventListener('loadedmetadata', () => {
        setDuration(audio.current.duration);
      })
    }

  }, [audio])

  useEffect(() => {
    let progressLoop;
    if (props.active) {
      const progressUpdater = () => {
        updateProgressBar();
        console.log('here')
        progressLoop = requestAnimationFrame(progressUpdater);
      };
      audio.current.play();
      progressLoop = requestAnimationFrame(progressUpdater);
      audio.current.addEventListener('ended', props.onComplete);
    } else {
      cancelAnimationFrame(progressLoop);
      audio.current.addEventListener('ended', props.onComplete);
      audio.current.pause();
      stop()
      audio.current.currentTime = 0;
      setStrokeDashoffset(pathLength)

    }

    return () => {
      cancelAnimationFrame(progressLoop);

      audio.current.removeEventListener('ended', props.onComplete);
    }

  }, [props.active])

  const updateProgressBar = () => {
    const currentTime = audio.current.currentTime;

    const percentage = (currentTime / duration);
    const tmp = percentage * pathLength;

    console.log('per', currentTime, percentage, duration, pathLength)


    setStrokeDashoffset(pathLength - tmp)
  }
  const handleClick = () => {
    props.setActive();
  }

  return (
    <figure
      className={`audio-bubble ${props.className} ${props.active && 'audio-bubble--active'}`}
    >
      <audio
        src={props.audio}
        ref={audio}
      />
      <button
        onClick={handleClick}
        className="audio-bubble__button"
      >
        <svg
          viewBox="0 0 200 200"
          className="audio-bubble__progress"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="97"
            strokeWidth="3"
            fill="none"
            ref={progress}
            style={{ strokeDashoffset: strokeDashoffset }}
          />
        </svg>
        <img
          className="audio-bubble__image"
          src={props.image}
          alt={props.title}
        />
        {!props.active &&
          <svg className="audio-bubble__play" viewBox="0 0 109.4 124.5">
            <path
              fill="#fff"
              d="M106.4 57L9 .8C5-1.5 0 1.4 0 6v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.4 4-8.2 0-10.5z"
            />
          </svg>
        }
        {props.active &&
          <svg className="audio-bubble__pause" viewBox="0 0 120.2 124.5">
            <path
              fill="#fff"
              d="M114.2 124.5c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6h-36c-3.3 0-6 2.7-6 6v112.5c0 3.3 2.7 6 6 6h36zM42 124.5c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6H6C2.7 0 0 2.7 0 6v112.5c0 3.3 2.7 6 6 6h36z"
            />
          </svg>
        }
      </button>
      {/* <figcaption className="audio-bubble__meta">
          <p className="audio-bubble__title">{this.props.title}</p>
          <p className="audio-bubble__subtitle">{this.props.subtitle}</p>
        </figcaption> */}
    </figure>
  );

}

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: null };
  }
  onComplete() {
    this.setState({
      activeIndex: null
    });
  }
  setActive(i) {
    const index = i === this.state.activeIndex ? null : i;
    this.setState({
      activeIndex: index
    });
  }
  render() {
    return (
      <div className="player">
        <svg className="player__wave" viewBox="0 0 1354 128.8">
          <path
            fill="none"
            stroke="#ab2e36"
            d="M.3 29.9c41.3-9.3 110.6-22.7 197-27 354.8-17.8 514.5 140.6 813 123 78.5-4.6 198.1-23.3 343-96"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </svg>
        <h1 className="player__title">New releases</h1>
        <div className="player__items">
          {AUDIO.map((audio, i) =>
            <AudioBubble
              active={this.state.activeIndex === i}
              key={audio.title}
              title={audio.title}
              subtitle={audio.subtitle}
              image={audio.image}
              audio={audio.audio}
              setActive={this.setActive.bind(this, i)}
              onComplete={this.onComplete.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}


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

  const [activeIndex, setActiveIndex] = useState();
  const onComplete = () => {
    setActiveIndex(null)
  }
  const setActive = (i) => {
    console.log(i)
    const index = i === activeIndex ? null : i;
    setActiveIndex(index);
  }


  return (
    <>
      <div id="vinyl" ref={parentRef} className="slider__container">

        <div id="inner">
          <div id="label">
            <div id="hole"></div>
          </div>
        </div>


        {AUDIO.map((audio, i) =>
          <div className="slide__container">
            <AudioBubble
              active={activeIndex === i}
              key={audio.title}
              title={audio.title}
              subtitle={audio.subtitle}
              image={audio.image}
              audio={audio.audio}
              setActive={() => setActive(i)}
              onComplete={onComplete}
              className="slide"
            />
          </div>
        )}

      </div>

      <div style={{ top: '50vh', position: 'absolute' }}>
        <button onClick={handlePrev} className="prev">prev</button>
        <button onClick={handleNext} className="next">next</button>
      </div>
    </>
  )
}