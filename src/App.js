import './App.css';

function App() {
  return (
    <div className="App">
      {/* ===== HEADER ===== */}
      <header className="header">
        <h1>👋 Makochukwu Ifiorah</h1>
        <p className="title">Software Engineering Student | Full-Stack Developer</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="/resume.pdf" download className="resume-btn">📄 Download Resume</a>
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a fourth-year Software Engineering student at the University of Calgary who loves 
          building things that solve real problems. Recently, I built an AI-powered Afrobeats 
          recommender using React, Flask, and Groq LLM — combining my passion for music with 
          full-stack development. I thrive in collaborative Agile teams and enjoy turning 
          complex ideas into clean, working products.
        </p>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        {/* Project 1: Afrobeats Recommender */}
        <div className="project-card">
          <h3>🎵 Afrobeats Recommender</h3>
          <p>
            AI-powered web app that recommends Afrobeats songs based on user mood and activity. 
            Uses Groq LLM to recommend artists and maps them to real songs.
          </p>
          <p><strong>Tech:</strong> React, Flask, Groq API, Python, REST APIs, CSS</p>
          <div className="project-links">
            <a href="https://github.com/itsmakky/AfrobeatsRecommender" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="coming-soon">Live Demo (Coming Soon)</span>
          </div>
        </div>

        {/* Project 2: Software Testing Project */}
        <div className="project-card">
          <h3>🧪 Software Testing Project</h3>
          <p>
            Developed a 15+ page formal test plan covering boundary conditions, special cases, 
            and 10+ user workflows. Executed 20+ automated test cases using Selenium IDE and 
            15+ manual scripted tests, achieving 95% test coverage. Identified and reported 
            8 critical defects before production, saving 10+ hours of debugging time.
          </p>
          <p><strong>Tech:</strong> Selenium IDE, Test Planning, Manual Testing, Agile, Unit Testing, GUI Testing</p>
        </div>

        {/* Project 3: Stock Advisor */}
        <div className="project-card">
          <h3>📊 Stock Advisor (Stock Buddy)</h3>
          <p>
            AI financial assistant integrating Google Gemini LLM and Yahoo Finance API. 
            Provides real-time stock insights and recommendations. 
            Achieved &lt;2s response time for 100+ simulated users.
          </p>
          <p><strong>Tech:</strong> Flask, Python, Google Gemini API, Yahoo Finance API, REST APIs</p>
        </div>

        {/* Project 4: Maze City Quest */}
        <div className="project-card">
          <h3>🏰 Maze City Quest</h3>
          <p>
            3D game developed with a 6-person cross-functional team using Unity and C#. 
            Led the animation implementation, bringing game characters and environments to life. 
            Managed 50+ commits and resolved 10+ merge conflicts through Git.
          </p>
          <p><strong>Tech:</strong> Unity, C#, Git, Agile</p>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <span>React</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>Flask</span>
        <span>C#</span>
        <span>Unity</span>
        <span>Java</span>
        <span>C++</span>
        <span>SQL</span>
        <span>Git</span>
        <span>REST APIs</span>
        <span>LLM Integration</span>
        <span>Selenium</span>
        <span>Node.js</span>
        <span>NumPy</span>
        <span>Pandas</span>
        <span>Linux</span>
        <span>Azure DevOps</span>
        <span>Agile</span>
        <span>HTML/CSS</span>
        <span>VS Code</span>
      </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>📧 <a href="mailto:makochukwu.ifiora1@ucalgary.ca">Email</a></p>
        <p>📞 (587) 581-8037</p>
        <p>🐙 <a href="https://github.com/itsmakky" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/makochukwuifiorah" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 Makochukwu Ifiorah. Built with React ❤️</p>
      </footer>
    </div>
  );
}

export default App;