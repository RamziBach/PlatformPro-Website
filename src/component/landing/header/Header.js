import React, { useState } from 'react';
import { SectionLink, Section } from 'react-scroll-section';
import Headroom from 'react-headroom';

import Menu from './menu/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Section id="home">
        <Headroom>
          <header className="header">
            <div className="lg-container">
              <div className="header-parent">
                <div id="header-socials_container" className="header-child">
                  <ul className="header-ul_parent">
                    <li>
                      <button className="menu-btn_bg">sign up</button>
                    </li>
                    <li>
                      <button className="menu-btn_border">log in</button>
                    </li>
                  </ul>
                  {/* <ul className="header-ul_parent">
                    <li>
                      <button>
                        <span>
                          <i className="header-socials fab fa-facebook-f"></i>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>
                          <i className="header-socials fab fa-twitter"></i>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>
                          <i className="header-socials fab fa-instagram"></i>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>
                          <i className="header-socials fab fa-twitch"></i>
                        </span>
                      </button>
                    </li>
                  </ul> */}
                </div>
                <div id="header-title_container" className="header-child">
                  <SectionLink section="home">
                    {({ onClick, isSelected }) => (
                      <h4
                        onClick={onClick}
                        selected={isSelected}
                        className="header-title"
                      >
                        <span
                          id="header-title_bullets1"
                          className="header-title_bullets"
                        >
                          •••
                        </span>{' '}
                        platformpro{' '}
                        <span className="header-title_bullets">•••</span>
                      </h4>
                    )}
                  </SectionLink>
                </div>
                <div id="hamburger-container" className="header-child">
                  <svg
                    onClick={() => setIsMenuOpen(true)}
                    className="header-hamburger"
                    width="100%"
                    height="100%"
                    viewBox="0 0 90 90"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    xmlnsserif="http://www.serif.com/"
                    style={{
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeMiterlimit: 1.5,
                    }}
                  >
                    <g transform="matrix(1,0,0,1,-1785.2,-21.3956)">
                      <g
                        id="hamburger"
                        transform="matrix(1,0,0,1,110,-63.8022)"
                      >
                        <g transform="matrix(0.7,0,0,1,516,0)">
                          <path
                            d="M1740,120L1700,120"
                            style={{
                              fill: 'none',
                              stroke: 'rgb(238,242,246)',
                              strokeWidth: '2.32px',
                              strokeDasharray: '74.15,113.54,0,0',
                            }}
                          />
                          <path
                            d="M1740,130L1700,130"
                            style={{
                              fill: 'none',
                              stroke: 'rgb(238,242,246)',
                              strokeWidth: '2.32px',
                              strokeDasharray: '74.15,113.54,0,0',
                            }}
                          />
                          <path
                            d="M1740,140L1700,140"
                            style={{
                              fill: 'none',
                              stroke: 'rgb(238,242,246)',
                              strokeWidth: '2.32px',
                              strokeDasharray: '74.15,113.54,0,0',
                            }}
                          />
                        </g>
                        <g transform="matrix(1,0,0,1,130,36.243)">
                          <circle
                            cx="1590"
                            cy="93.757"
                            r="36.243"
                            style={{
                              fill: 'none',
                              stroke: 'rgb(238,242,246)',
                              strokeWidth: '2px',
                            }}
                          />
                        </g>
                        <g transform="matrix(1.20857,0,0,1.20857,-201.626,16.6881)">
                          <circle
                            className="rotating-30"
                            cx="1590"
                            cy="93.757"
                            r="36.243"
                            style={{
                              fill: 'none',
                              stroke: 'rgb(238,242,246)',
                              strokeOpacity: 0.6,
                              strokeWidth: '1.65px',
                              strokeDasharray: '0,4.96,0,0',
                            }}
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </header>
        </Headroom>
      </Section>
      <Menu
        handleClose={() => setIsMenuOpen(false)}
        onClick={() => setIsMenuOpen(false)}
        isTrue={isMenuOpen}
      />
    </>
  );
};

export default Header;
