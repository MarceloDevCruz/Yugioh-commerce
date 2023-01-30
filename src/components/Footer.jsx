import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__createdby">
        <p className="footer__createdby-text">By Marcelo Ferreira Cruz</p>
        <BsGithub className="footer__icon" />
      </div>
      <ul className="footer__list">
        <li className="footer__list-item">Contact</li>
        <li className="footer__list-item">About Us</li>
        <li className="footer__list-item">Shop</li>
        <li className="footer__list-item">More information</li>
        <li className="footer__list-item">About Yugioh</li>
        <li className="footer__list-item">Official Rules</li>
      </ul>
    </footer>
  );
};

export default Footer;
