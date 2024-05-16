function PersonalProjects() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-primary mt-6">Personal Projects</h2>
      <p className="mb-3">
        Here's a list of some of my personal projects, in approximate chronological order.
      </p>
      <div className="flex">
        <div>
          <h3 className="text-xl font-bold">Questionnaire</h3>
          <p className="text-lg mb-3">
            When I was 15 my sister asked me to create a website for her. I was already familiar with the process of building a website so I accepted. She wanted a website to conduct a university experiment. The project had a tight deadline and I had to do schoolwork in parallel. The website was built with HTML, PHP, CSS and used a MySQL database.
          </p>

          <h3 className="text-xl font-bold mt-5">Spotify song downloader</h3>
          <p className="text-lg mb-3">
            The name is a bit of a misnomer. It essentially uses the Spotify API to get a list of songs from my playlists and finds them on YouTube for download. The reason why I made this small app is to skip the Spotify ads and let me listen to them offline. Later this was the basis of a mobile app that I used to stream my music.
          </p>

          <h3 className="text-xl font-bold mt-5">Stars</h3>
          <p className="text-lg mb-3">
            When I found out about OpenCV I wanted to try it out. I decided to make a small program that would detect stars in an image taken with a very long exposure and find constellations. The program uses OpenCV to detect stars, and then uses a recursive algorithm to find constellations. The program is written in Python.
          </p>

          <h3 className="text-xl font-bold mt-5">Price tracker</h3>
          <p className="text-lg mb-3">
            I wanted to track prices of PC components, because I was planning on building a new PC. I decided to make a small program that would track prices of components on a website and send me an email when the price drops below a certain threshold. The program is written in Python.
          </p>

          <h3 className="text-xl font-bold mt-5">Radish Shooter + Salted Radish</h3>
          <p className="text-lg">
            I wanted to learn C++ so I decided to make a game engine and a game to go with it. I named the game engine Salted Radish and the game Radish Shooter. The game engine uses OpenGL and SDL2. The game is a multiplayer isometric shooter. The engine and game is written in C++. Both the game engine and the game are still in development.
          </p>
        </div>
      </div>
    </article>
  );
}

export default PersonalProjects;
