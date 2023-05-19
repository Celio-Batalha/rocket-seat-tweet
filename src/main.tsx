import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, User, DotsThreeCircle, FileText, Sparkle } from '@phosphor-icons/react'

import twitterLogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <div className="layout">
        <aside className="sidebar">
          <img className="logo" src={twitterLogo} alt="Logo" />

          <nav className="main-navigation">
            <a className="active" href=""><House weight="fill" /> Home</a>
            <a href=""><Hash /> Explore</a>
            <a href=""><Bell /> Notifications</a>
            <a href=""><EnvelopeSimple /> Messages</a>
            <a href=""><BookmarkSimple /> Bookmarks</a>
            <a href=""><FileText /> Lists</a>
            <a href=""><User /> Profile</a>
            <a href=""><DotsThreeCircle /> More</a>
          </nav>
          <button className="new-tweet">Tweet</button>
        </aside>
        <div className="content">
          <main className="timeline">
            <div className="timeline-header">
              Home
              <Sparkle />
            </div>

            <form className="new-tweet-form" action="">
              <label htmlFor=""></label>
            </form>
          </main>
        </div>
      </div>
  </React.StrictMode>
)
