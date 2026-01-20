import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">🚀 EasyStart</div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-primary">Get Started</a>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <h1>
            Deploy your <span className="highlight">React App</span> <br />
            with ease on Easypanel.
          </h1>
          <p className="subtitle">
            A production-ready template configured with Docker, Nginx, and TypeScript.
            Focus on your code, we handle the infrastructure setup.
          </p>
          
          <div className="cta-group">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-email"
            />
            <button className="btn-hero" onClick={() => alert(`Joined waitlist with: ${email}`)}>
              Join Waitlist
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">⚡</span>
              <span className="stat-label">Fast Build</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">🐳</span>
              <span className="stat-label">Docker Ready</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 EasyStart Template. Built for Easypanel.</p>
      </footer>
    </div>
  )
}

export default App
