import React from 'react';


function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="/photos" className="nav__link">Photos</a></li>
          <li className="nav__item"><a href="/about" className="nav__link">About</a></li>
          <li className="nav__item"><a href="/contact" className="nav__link">Contact</a></li>
        </ul>
      </nav>
      <div className="search">
        <form>
          <input type="text" placeholder="Search" className="search__input" />
          <button type="submit" className="search__button">Go</button>
        </form>
      </div>
      <div className="user">
        <ul className="user__list">
          <li className="user__item"><a href="/login" className="user__link">Login</a></li>
          <li className="user__item"><a href="/signup" className="user__link">Signup</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
