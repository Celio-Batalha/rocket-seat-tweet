import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple } from '@phosphor-icons/react'

import twitterLogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <div className="layout">
        <aside className="sidebar">
          <img className="logo" src={twitterLogo} alt="Logo" />

          <nav className="main-navigation">
            <a href=""><House /> Home</a>
            <a href=""><Hash /> Explore</a>
            <a href=""><Bell /> Notifications</a>
            <a href=""><EnvelopeSimple /> Messages</a>
            <a href=""><BookmarkSimple /> Bookmarks</a>
            <a href="">Lists</a>
            <a href="">Profile</a>
            <a href="">More</a>
          </nav>

          <button className="new-tweet">Tweet</button>
        </aside>
        <div className="content">
          content
        </div>
      </div>
  </React.StrictMode>
)
