const CodropsFrame = () => {
  return (
    <div className="frame">
      <header className="frame__header">
        <h1 className="frame__title">
          Model Texture Transition And Procedural Radial Noise Using WebGL
        </h1>
        <a
          aria-label="Read Article"
          className="frame__back"
          href="https://tympanus.net/codrops/?p=77050"
          target="_blank"
        >
          <span className="oh__inner">Article</span>
          <svg width="18px" height="18px" viewBox="0 0 24 24">
            <path
              vectorEffect="non-scaling-stroke"
              d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
            ></path>
          </svg>
        </a>
        <a
          className="frame__prev"
          href="https://tympanus.net/Development/ScrollBlurTypography/"
        >
          Previous Demo
        </a>
        <a
          className="frame__github"
          href="https://github.com/mohAmineBrs/codrops-noise-transition/"
        >
          Github
        </a>
      </header>
      <button className="click__anywhere">Click Anywhere</button>
    </div>
  );
};

export default CodropsFrame;
