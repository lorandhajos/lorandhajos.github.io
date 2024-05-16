import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Header() {
    return (
     <header className="mb-4 items-center">
        <h1 className="text-3xl font-bold text-primary">
          Loránd Máté Hájos
        </h1>
        <span>
          Student at NHL Stenden
        </span>
        <img src="./assets/images/1674419178095.jpg" alt="Developer" className="w-36 h-36 md:w-56 md:h-56 rounded-full" />
        <p className="text-lg mt-2">
          I’m a student passionate about software development, currently studying IT in the Netherlands, and seeking an internship as part of my university education.
        </p>
        <div className="mt-4 flex space-x-4">
          <a href="https://www.linkedin.com/in/lmhajos/" className="text-4xl">
            <IoLogoLinkedin />
          </a>
          <a href="https://github.com/lorandhajos" className="text-4xl">
            <IoLogoGithub />
          </a>
        </div>
      </header>
    );
}

export default Header;
