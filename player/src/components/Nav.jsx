const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    // music player nav bar
    <nav>
      <h1>Tunez Music Player</h1>
      <button
        // sets the status of the library that our player is using
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        <h4>Music Library</h4>
      </button>
    </nav>
  );
};

export default Nav;
