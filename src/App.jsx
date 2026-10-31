import { useState } from "react";
import "./App.css";
import durgeshPhoto from "./assets/durgesh.png";











function App() {
const [menuOpen, setMenuOpen] = useState(false);

const scrollTo = (id) => {
document.getElementById(id)?.scrollIntoView({
behavior: "smooth",
});
setMenuOpen(false);
};

return ( <main className="portfolio"> <div className="background-glow glow-one"></div> <div className="background-glow glow-two"></div>


  <header className="navbar">
    <button
      className="logo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Go to home"
    >
      D<span>Y</span>.
    </button>

    <nav className={menuOpen ? "nav-links active" : "nav-links"}>
      <button onClick={() => scrollTo("home")}>Home</button>
      <button onClick={() => scrollTo("about")}>About</button>
      <button onClick={() => scrollTo("skills")}>Skills</button>
      <button onClick={() => scrollTo("projects")}>Projects</button>
      <button onClick={() => scrollTo("contact")}>Contact</button>
    </nav>

    <div className="nav-actions">
      <button
        className="theme-button"
        aria-label="Decorative theme icon"
        title="Dark theme"
      >
        ☼
      </button>

      <button className="hire-button" onClick={() => scrollTo("contact")}>
        Let's Talk ↗
      </button>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕":  "☰"}
      </button>
    </div>
  </header>

  <section className="hero" id="home">
    <div className="hero-content">
      <div className="availability">
        <span className="status-dot"></span>
        AVAILABLE FOR OPPORTUNITIES
      </div>

      <p className="eyebrow">HELLO, I'M</p>

      <h1>
        Durgesh
        <br />
        <span>Yadav.</span>
      </h1>

      <h2>
        Frontend <span>Developer</span>
      </h2>

      <p className="hero-description">
        I build modern, responsive, and interactive digital experiences that combine creative ideas with clean, efficient code. I focus on creating visually appealing websites that deliver smooth performance, seamless user experiences, and meaningful functionality across all devices. With a passion for frontend development and modern web technologies, I turn ideas into engaging digital solutions while paying attention to every detail, from design and animations to responsiveness and usability. My goal is to create websites that not only look amazing but also provide real value to users.

        
      </p>

      <div className="hero-buttons">
        <button
          className="primary-button"
          onClick={() => scrollTo("projects")}
        >
          Explore My Work ↗
        </button>

        <button
          className="secondary-button"
          onClick={() => scrollTo("contact")}
        >
          Get In Touch
        </button>
      </div>

      <div className="social-links">
        <span>FIND ME ON</span>

        <a href="https://github.com/durgesh-yadav786" target="_blank" rel="noreferrer" aria-label="GitHub">
          GH
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          in
        </a>

        <a href="https://www.instagram.com/y.durgeah/?__pwa=1#" target="_blank" rel="noreferrer" aria-label="Instagram">
          IG
        </a>
      </div>
    </div>

    <div className="hero-visual">
      <div className="orbit orbit-one"></div>
      <div className="orbit orbit-two"></div>

      <div className="profile-frame">
        <div className="profile-placeholder">
          <div className="avatar-halo"></div>


<img
  src={durgeshPhoto}
  alt="Durgesh - Frontend Developer"
  className="developer-avatar"
/>
          <div className="avatar-label">
            <span className="label-dot"></span>
            CREATIVE MINDSET
          </div>
        </div>
      </div>

      <div className="floating-card code-card">
        <span className="code-symbol">&lt;/&gt;</span>
        <div>
          <strong>Clean Code</strong>
          <small>Built with passion</small>
        </div>
      </div>

      <div className="floating-card react-card">
        <span className="react-symbol">✳</span>
        <div>
          <strong>React.js</strong>
          <small>My go-to toolkit</small>
        </div>
      </div>

      <div className="visual-caption">
        <span>01 / 04</span>
        <span className="caption-line"></span>
        <span>CREATIVE DEVELOPER</span>
      </div>
    </div>

    <button
      className="scroll-indicator"
      onClick={() => scrollTo("about")}
      aria-label="Scroll down"
    >
      <span></span>
      SCROLL TO EXPLORE
    </button>
  </section>

  <section className="info-section" id="about">
    <span className="section-number">01 — ABOUT ME</span>
    <h2>
      Turning ideas into <span>digital reality.</span>
    </h2>
    <p>
      I'm Durgesh, a passionate Frontend Developer who enjoys creating modern, beautiful, responsive, and user-friendly websites. I love turning creative ideas and designs into real digital experiences using clean code and modern web technologies. I focus on building websites that look great, work smoothly on all devices, and provide a simple and enjoyable experience for users. I'm continuously learning new technologies, improving my development skills, and exploring creative ways to make websites more interactive and engaging. My goal is to build meaningful digital experiences that combine creativity, functionality, and performance.

    </p>
  </section>

  <section className="info-section" id="skills">
    <span className="section-number">02 — MY SKILLS</span>
    <h2>
      Technologies I <span>work with.</span>
    </h2>

    <div className="skill-list">
      {["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Git"].map(
        (skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        )
      )}
    </div>
  </section>

  <section className="info-section" id="projects">
    <span className="section-number">03 — SELECTED WORK</span>
    <h2>
      Things I've <span>been building.</span>
    </h2>

    <div className="project-grid">
      <article className="project-card">
        <span>01 / WEB DEVELOPMENT</span>
        <h3>Modern Blog Platform</h3>
        <p>A modern blog experience with a clean interface and engaging content.</p>
        <span className="project-tech">React · CSS · JavaScript</span>
      </article>

      <article className="project-card">
        <span>02 / WEB DEVELOPMENT</span>
        <h3>Vehicle Parking Website</h3>
        <p>A parking management website designed to simplify booking and administration.</p>
        <span className="project-tech">Vue · Python · SQLite</span>
      </article>

      <article className="project-card">
        <span>03 / FRONTEND</span>
        <h3>Creative Landing Page</h3>
        <p>A responsive landing page focused on modern visuals and smooth interactions.</p>
        <span className="project-tech">HTML · CSS · JavaScript</span>
      </article>
    </div>
  </section>

  <section className="info-section contact-section" id="contact">
    <span className="section-number">04 — GET IN TOUCH</span>
    <h2>
      Have an idea? Let's <span>build it.</span>
    </h2>
    <p>
      Looking for a frontend developer or want to discuss a project?
      I'd love to hear from you.
    </p>
<div className="contact-buttons">
  <a
    className="primary-button contact-button"
    href="https://www.instagram.com/y.durgeah/?__pwa=1#"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram ↗
  </a>

<a
className="primary-button contact-button"
href="mailto:d7709215@gmail.com"

>


Email Me ✉


  </a>
</div>
  </section>

  <footer className="footer">
    <span>© {new Date().getFullYear()} Durgesh Yadav</span>
    <span>DESIGNED WITH PASSION <span className="footer-heart">♥</span></span>
  </footer>
</main>

);
}

export default App;
