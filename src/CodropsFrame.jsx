const CodropsFrame = () => {
  return (
    <div className="frame">
      <header className="frame__header">
        <h1 className="frame__title">
          Model Texture Transition And Procedural Radial Noise Using <a target="_blank" href="https://tympanus.net/codrops/demos/?tag=webgl">WebGL</a>
        </h1>
        <a
          aria-label="Read Article"
          className="frame__back"
          href="https://tympanus.net/codrops/?p=77050"
          target="_blank"
        >
          Article
        </a>
        <a
          className="frame__prev" 
          target="_blank" 
          href="https://tympanus.net/codrops/demos/"
        >
          All demos
        </a>
        <a
          className="frame__github"
          target="_blank" 
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
