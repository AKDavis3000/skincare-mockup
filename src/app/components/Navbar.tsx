import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/fontawesome-svg-core';

export default function Navbar() {
  return (
    <header className="nav_wrapper">
      <ul className="nav_list">
        <li>
          {' '}
          <FontAwesomeIcon
            icon={faBars}
            size="xs"
          />
          x
        </li>
        <li>
          {' '}
          <span className="logo">
            Skin
            <div className="sparkle"></div>
            Care
          </span>
        </li>
        <li>
          {' '}
          <ul className="nav_inner_list">
            <li className="account">A</li>
            <li className="cart">C</li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
