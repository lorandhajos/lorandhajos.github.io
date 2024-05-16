function UniversityProjects() {
  return (
    <article>
      <h2 className="text-2xl font-bold text-primary mt-6">University Projects</h2>
      <div className="flex flex-col">
        <h3 className="text-2xl my-3 font-bold">Year 1</h3>
        <div>
          <h4 className="text-xl font-bold">OUI</h4>
          <p className="text-lg">
            My first university project, a simple website for a fictional company, a french themed Café. The website is built with HTML, PHP, CSS, and JavaScript.
          </p>
          <a href="https://github.com/lorandhajos/GroupF-term1" className="text-primary">GitHub link</a>

          <h4 className="text-xl font-bold mt-5">Gemorskos</h4>
          <p className="text-lg mb-3">
            A more complex website for a fictional company, an online newspaper company. The website uses a MySQL database, Bootstrap and is built with HTML, PHP, CSS, and JavaScript.
          </p>
          <p className="text-lg">
            The focus of this project was on the back-end, and the underlying infrastructure.
          </p>
          <a href="https://github.com/lorandhajos/GroupC-term2" className="text-primary">GitHub link</a>

          <h4 className="text-xl font-bold mt-5">Battlebot</h4>
          <p className="text-lg">
            A maze solving robot. The robot uses an Arduino and an array of line sensors to solve a maze. The robot is programmed in C++.
          </p>
          <a href="https://github.com/lorandhajos/GroupC-term3" className="text-primary">GitHub link</a>

          <h4 className="text-xl font-bold mt-5">Innovate</h4>
          <p className="text-lg mb-3">
            As part of the Innovate project, we had to come up with an innovative idea and create a prototype. We created a prototype for a communication module for smartphones that would allow users to communicate with each other without the need for a cellular network.
          </p>
          <p className="text-lg mb-3">
            The prototype was built with an Arduino and a LoRa module inside a 3D printed case. It used a custom Android application to communicate with the module.
          </p>
          <p className="text-lg">
            The low level code for the Arduino was written in C++. The Android application was written in React Native using JavaScript that uses a custom Java module.
          </p>
          <a href="https://github.com/lorandhajos/GroupD-term4" className="text-primary">GitHub link</a>
        </div>
        <h3 className="text-2xl my-3 font-bold">Year 2</h3>
        <div>
          <h4 className="text-xl font-bold">AIS Data</h4>
          <p className="text-lg mb-3">
            First time working with a real client. The client wanted a database that would store large amounts of AIS data. The requirements were later expanded to include a web application that would allow users to view and filter the data.
          </p>
          <p className="text-lg">
            The database was built with MongoDB, the web application was built with React, and the back-end was built with Python.
          </p>

          <h4 className="text-xl font-bold mt-5">Bigshopper</h4>
          <p className="text-lg mb-3">
            A web scraper for a well known online store in the Netherlands with a frontend to display information. The application uses a Postgres database, and is built with Django, and Python.
          </p>

          <h4 className="text-xl font-bold mt-5">DatagridXL</h4>
          <p className="text-lg mb-3">
            A web application that allows easy data manipulation and visualization. The application is build with JavaScript.
          </p>
        </div>
      </div>
    </article>
  );
}

export default UniversityProjects;
