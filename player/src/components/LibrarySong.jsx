const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) => {
  const songSelectHanlder = async () => {
    // await the song that is selected to play
    await setCurrentSong(song);
    // logic to set song
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    // set the new song to be played
    setSongs(newSongs);
    // check if song is already playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'active' : ''}`}
    >
      <h3>{song.title}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
};

export default LibrarySong;
