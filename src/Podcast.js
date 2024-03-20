const Podcast = ({ season, episode, episodeTitle, onDoubleClick }) => {
  let episodeNumber = episode;
  if (season) {
    episodeNumber = `Season ${season}, Episode ${episode}`;
  } else {
    episodeNumber = `Episode ${episode}`;
  }
  const episodeDefined = episode !== undefined;
  const titleDefined = episodeTitle !== undefined;

  return (
    <div className="podcast" onDoubleClick={onDoubleClick}>
      {episodeDefined && <h3 className="podcast-episode">{episodeNumber}</h3>}
      {titleDefined
        ? <p className="podcast-title"> {episodeTitle}</p>
        : <h3 className="podcast-episode">{episodeTitle}</h3>
      }
    </div>
  );
};

export default Podcast;
