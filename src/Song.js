const Song = ({ title, artist, year, onDoubleClick }) => {
  return (
    <div className="song" onDoubleClick={onDoubleClick}>
      <h3 className="song-title">{title}</h3>
      <p className="song-artist">Artist: {artist}</p>
      <p className="song-year">Year: {year}</p>
    </div>
  );
};

export default Song;
