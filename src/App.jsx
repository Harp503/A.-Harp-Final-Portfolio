import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myPicture from './assets/LinkedInpic.jpg';
import eCommerceImg from './assets/e-commerce.jpg';
import bookstoreImg from './assets/bookstore2.jpg';
import weatherImg from './assets/weather.jpg';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark Mode
  const handleToggleDark = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  // Hamburger Menu
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <> 
    {/* <!-- Navigation Bar --> */}
     <nav className="navbar">
        <div className="logo">AH</div>
         <div className="navlinks">
            <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    {/* <!-- Hamburger Navigation Bar --> */}
     <nav className="hamburger-nav">
      <div className="logo2">AH</div>
      {/* <!-- Dark Toggle on Mobile Menu --> */}
      <button id="toggle-dark" className="dark-toggle"
          onClick={handleToggleDark}> 
            <i className="fa-solid fa-moon"></i>
            </button>
        <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
          <div className="menu-links">
            <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        </div>
       </nav>
     
{/* <!-- Hero Section --> */}
  <section id="Hero" className="hero">
  <div className="intro"> 
  <h1>Welcome! I'm Alicia Harper</h1>
  <h4>App Development Student | Transitioning IT Professional</h4>
  <a href="#projects" className="button">View My Work</a>
  </div>
  </section>

    {/* <!-- About Section: Skills, Education, Interests --> */}
    <section id="About" className="About">
           <h2>Allow Me To Introduce Myself</h2>
        <img src={myPicture} alt="My picture"/> 
        <div className="about-me">
        <p>I'm an aspiring IT professional and app developer with a background in customer service, teamwork, and problem-solving. Learning new skills is part of my DNA.</p>
        </div>
        <div className="content">
        <h3>What You Should Know</h3>
        <p>Developing Skills In:</p>
        <span>HTML</span>
        <span>CSS</span>
        <span>Java Script</span>
        <span>Linux</span>
        </div>    
    </section>

    {/* <!-- Projects --> */}
          <section id="Projects" className="projects">
      <div className="container">
        <h2>Future Projects</h2>
        <div className = "project-grid">
        <div className="future-projects">
        <img src={eCommerceImg} alt="E-Commerce"/>
        <h3>E-Commerce App</h3>
        <p>Online Store using a variety of platforms</p>
        <a href="#" className="button">View Project</a>
      </div>
      <div className="future-projects">
        <img src={bookstoreImg} alt="Book Store"/>
        <h3>Book Store App</h3>
        <p>Online Book Store using a variety of platforms</p>
        <a href="https://github.com/Harp503/Bookstore-Project" className="button">View Project</a>
      </div>
      <div className="future-projects">
        <img src={weatherImg} alt="Weather App"/>
        <h3>Weather Application</h3>
        <p>Weather App using a variety of platforms</p>
        <a href="https://github.com/Harp503/Weather-App-Project" className="button">View Project</a>
      </div>
      </div>
      </div>
     </section>

    {/* <!-- Contact Section --> */}
    <section className="contact-section" id="Contact">
       <h2>Get In Touch</h2>
    <form className="contact-form"> 
       <div className="form-group">
        <input type="text" name="fullname" placeholder="Name" maxlength="30"/>
        </div>

        <div className="form-group">
        <input type="email" name="email" placeholder="Email" maxlength="30"/>
         </div>

       <div className="form-group">
        <input type="tel" id="phone" placeholder="Phone"/>
       </div> 
        
       <div className="form-group">
       <textarea name="message" placeholder="Send a message"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
  </section>

  <footer>
    <div className="container-footer">
      <p> 2025 My Portfolio. All rights reserved.</p>  
     <div className="socials">
        <a href="#">
        <i className="fa-brands fa-github fa-1xl"></i> 
        </a>
        <a href="#">
         <i className="fa-brands fa-linkedin"></i>   
        </a>
     </div>   
     </div>
  </footer>
    
    </>
  )
}

export default App
