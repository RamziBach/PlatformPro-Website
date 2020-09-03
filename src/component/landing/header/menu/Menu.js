import React from 'react';
import { SectionLink } from 'react-scroll-section';

const Menu = props => {
  return (
    <div
      className="menu appear"
      style={{ display: props.isTrue ? 'flex' : 'none' }}
    >
      <div className="menu-ul_container2">
        <ul className="menu-ul2">
          <li onClick={props.handleClose} className="menu-ul_about2">
            <SectionLink section="about">
              {({ onClick, isSelected }) => (
                <button
                  onClick={onClick}
                  selected={isSelected}
                  className="menu-ul_btn2"
                >
                  about
                </button>
              )}
            </SectionLink>
          </li>
          <li onClick={props.handleClose} className="menu-ul_builder2">
            <SectionLink section="builder">
              {({ onClick, isSelected }) => (
                <button
                  onClick={onClick}
                  selected={isSelected}
                  className="menu-ul_btn2"
                >
                  builder
                </button>
              )}
            </SectionLink>
          </li>
          <li onClick={props.handleClose} className="menu-ul_features2">
            <SectionLink section="features">
              {({ onClick, isSelected }) => (
                <button
                  onClick={onClick}
                  selected={isSelected}
                  className="menu-ul_btn2"
                >
                  features
                </button>
              )}
            </SectionLink>
          </li>
          <li className="menu-ul_blog2">
            <button className="menu-ul_btn2">blog</button>
          </li>
          <li className="menu-ul_brand2">
            <button className="menu-ul_btn2">brand</button>
          </li>
        </ul>
      </div>
      <div className="menu-ul_container">
        <ul className="menu-ul">
          <li onClick={props.handleClose} className="menu-ul_about">
            <SectionLink section="about">
              {({ onClick, isSelected }) => (
                <button
                  onClick={onClick}
                  selected={isSelected}
                  className="menu-ul_btn"
                >
                  about
                </button>
              )}
            </SectionLink>
          </li>
          <li onClick={props.handleClose} className="menu-ul_builder">
            <SectionLink section="builder">
              {({ onClick, isSelected }) => (
                <button
                  onClick={onClick}
                  selected={isSelected}
                  className="menu-ul_btn"
                >
                  builder
                </button>
              )}
            </SectionLink>
          </li>
          <li onClick={props.handleClose} className="menu-ul_features">
            <SectionLink section="features">
              {({ onClick, isSelected }) => (
                <button
                  onClick={onClick}
                  selected={isSelected}
                  className="menu-ul_btn"
                >
                  features
                </button>
              )}
            </SectionLink>
          </li>
          <li className="menu-ul_blog">
            <button className="menu-ul_btn">blog</button>
          </li>
          <li className="menu-ul_brand">
            <button className="menu-ul_btn">brand</button>
          </li>
        </ul>
      </div>
      <svg
        className="interstellar-close"
        onClick={props.onClick}
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
        <g transform="matrix(1,0,0,1,-1785.2,-129)">
          <g id="close" transform="matrix(1,0,0,1,110,43.8022)">
            <g transform="matrix(0.7,0,0,1,516,0.0486572)">
              <g transform="matrix(0.707107,0.494975,-1.01015,0.707107,624.995,-806.307)">
                <path
                  d="M1740,120L1700,120"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(238,242,246)',
                    strokeWidth: '2.32px',
                    strokeDasharray: '74.15,113.54,0,0',
                  }}
                />
              </g>
              <g transform="matrix(0.707107,-0.494975,0.974877,0.731799,377.042,886.223)">
                <path
                  d="M1740,130L1700,130"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(238,242,246)',
                    strokeWidth: '2.36px',
                    strokeDasharray: '75.36,115.4,0,0',
                  }}
                />
              </g>
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
            <g
              id="close-dotted-ring"
              transform="matrix(1.20857,0,0,1.20857,-201.626,16.6881)"
            >
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
      <svg
        className="interstellar-menu"
        viewBox="0 0 1043 1043"
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
        <g transform="matrix(1,0,0,1,-438.5,-18.5)">
          <g
            id="interstellar-menu"
            transform="matrix(0.888889,0,0,0.888889,106.667,60)"
          >
            <g transform="matrix(1.20417,0,0,1.20417,105.036,58.3302)">
              <circle
                cx="710"
                cy="400"
                r="260"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeWidth: '2.8px',
                }}
              />
            </g>
            <g>
              <g>
                <g transform="matrix(0.514628,0,0,0.514628,325.32,268.497)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '2.19px',
                    }}
                  />
                </g>
                <g transform="matrix(0.604688,0,0,0.604688,278.039,220.984)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '1.86px',
                    }}
                  />
                </g>
                <g
                  id="dotted-ring3"
                  transform="matrix(0.717188,0,0,0.717188,218.977,161.632)"
                >
                  <circle
                    className="rotating-10"
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '3.14px',
                      strokeDasharray: '0,6.27,0,0',
                    }}
                  />
                </g>
                <g transform="matrix(1.125,-0,-0,1.125,373.312,-46.6875)">
                  <use
                    xlinkHref="#_Image1"
                    x="182"
                    y="506"
                    width="31px"
                    height="31px"
                  />
                </g>
                <g transform="matrix(0.267188,0,0,0.267188,552.75,385.031)">
                  <circle
                    cx="160"
                    cy="580"
                    r="40"
                    style={{ fill: 'rgb(238,242,246)' }}
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,729,1.27898e-13)">
                <g transform="matrix(0.514628,0,0,0.514628,325.32,268.497)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '2.19px',
                    }}
                  />
                </g>
                <g transform="matrix(0.604688,0,0,0.604688,278.039,220.984)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '1.86px',
                    }}
                  />
                </g>
                <g
                  id="dotted-ring7"
                  transform="matrix(0.717188,0,0,0.717188,218.977,161.632)"
                >
                  <circle
                    className="rotating-10"
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '3.14px',
                      strokeDasharray: '0,6.27,0,0',
                    }}
                  />
                </g>
                <g transform="matrix(1.125,-0,-0,1.125,-355.688,-46.6875)">
                  <use
                    xlinkHref="#_Image1"
                    x="830"
                    y="506"
                    width="31px"
                    height="31px"
                  />
                </g>
                <g transform="matrix(0.267188,0,0,0.267188,552.75,385.031)">
                  <circle
                    cx="160"
                    cy="580"
                    r="40"
                    style={{ fill: 'rgb(238,242,246)' }}
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,364.5,-364.5)">
                <g transform="matrix(0.514628,0,0,0.514628,325.32,268.497)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '2.19px',
                    }}
                  />
                </g>
                <g transform="matrix(0.604688,0,0,0.604688,278.039,220.984)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '1.86px',
                    }}
                  />
                </g>
                <g
                  id="dotted-ring5"
                  transform="matrix(0.717188,0,0,0.717188,218.977,161.632)"
                >
                  <circle
                    className="rotating-10"
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '3.14px',
                      strokeDasharray: '0,6.27,0,0',
                    }}
                  />
                </g>
                <g transform="matrix(1.125,-0,-0,1.125,8.8125,317.812)">
                  <use
                    xlinkHref="#_Image1"
                    x="506"
                    y="182"
                    width="31px"
                    height="31px"
                  />
                </g>
                <g transform="matrix(0.267188,0,0,0.267188,552.75,385.031)">
                  <circle
                    cx="160"
                    cy="580"
                    r="40"
                    style={{ fill: 'rgb(238,242,246)' }}
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,106.875,-258.75)">
                <g transform="matrix(0.514628,0,0,0.514628,325.32,268.497)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '2.19px',
                    }}
                  />
                </g>
                <g transform="matrix(0.604688,0,0,0.604688,278.039,220.984)">
                  <circle
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '1.86px',
                    }}
                  />
                </g>
                <g
                  id="dotted-ring4"
                  transform="matrix(0.717188,0,0,0.717188,218.977,161.632)"
                >
                  <circle
                    className="rotating-10"
                    cx="525"
                    cy="527.571"
                    r="40"
                    style={{
                      fill: 'none',
                      stroke: 'rgb(238,242,246)',
                      strokeWidth: '3.14px',
                      strokeDasharray: '0,6.27,0,0',
                    }}
                  />
                </g>
                <g transform="matrix(1.125,-0,-0,1.125,266.437,212.062)">
                  <use
                    xlinkHref="#_Image1"
                    x="277"
                    y="276"
                    width="31px"
                    height="31px"
                  />
                </g>
                <g transform="matrix(0.267188,0,0,0.267188,552.75,385.031)">
                  <circle
                    cx="160"
                    cy="580"
                    r="40"
                    style={{ fill: 'rgb(238,242,246)' }}
                  />
                </g>
              </g>
              <g transform="matrix(1,0,0,1,621,-258.75)">
                <g>
                  <g transform="matrix(0.514628,0,0,0.514628,325.32,268.497)">
                    <circle
                      cx="525"
                      cy="527.571"
                      r="40"
                      style={{
                        fill: 'none',
                        stroke: 'rgb(238,242,246)',
                        strokeWidth: '2.19px',
                      }}
                    />
                  </g>
                  <g transform="matrix(0.604688,0,0,0.604688,278.039,220.984)">
                    <circle
                      cx="525"
                      cy="527.571"
                      r="40"
                      style={{
                        fill: 'none',
                        stroke: 'rgb(238,242,246)',
                        strokeWidth: '1.86px',
                      }}
                    />
                  </g>
                  <g
                    id="dotted-ring6"
                    transform="matrix(0.717188,0,0,0.717188,218.977,161.632)"
                  >
                    <circle
                      className="rotating-10"
                      cx="525"
                      cy="527.571"
                      r="40"
                      style={{
                        fill: 'none',
                        stroke: 'rgb(238,242,246)',
                        strokeWidth: '3.14px',
                        strokeDasharray: '0,6.27,0,0',
                      }}
                    />
                  </g>
                  <g transform="matrix(1.125,-0,-0,1.125,-247.688,212.062)">
                    <use
                      xlinkHref="#_Image2"
                      x="755.308"
                      y="283.982"
                      width="31.095px"
                      height="31.095px"
                      transform="matrix(0.971726,0,0,0.971726,0,0)"
                    />
                  </g>
                </g>
                <g transform="matrix(0.267188,0,0,0.267188,552.75,385.031)">
                  <circle
                    cx="160"
                    cy="580"
                    r="40"
                    style={{ fill: 'rgb(238,242,246)' }}
                  />
                </g>
              </g>
              <g transform="matrix(0.847817,0,0,0.847817,620.873,200.873)">
                <circle
                  cx="400"
                  cy="400"
                  r="429.998"
                  style={{
                    fill: 'none',
                    stroke: 'rgb(238,242,246)',
                    strokeOpacity: 0.6,
                    strokeWidth: '7.96px',
                  }}
                />
              </g>
            </g>
            <g transform="matrix(1.39187,0,0,1.39187,-292.686,-72.4242)">
              <circle
                cx="900"
                cy="440"
                r="160"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeWidth: '3.23px',
                }}
              />
            </g>
            <g transform="matrix(1.08035,0,0,1.08035,-12.3138,36.0285)">
              <circle
                cx="900"
                cy="466.49"
                r="180"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeWidth: '3.12px',
                }}
              />
            </g>
            <g transform="matrix(2.05714,0,0,2.05714,-901.714,-406.286)">
              <circle
                cx="905"
                cy="460"
                r="70"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeWidth: '1.64px',
                }}
              />
            </g>
            <g transform="matrix(1.15878,0,0,1.15878,322.669,192.365)">
              <circle
                cx="550"
                cy="300"
                r="133.591"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeWidth: '1.94px',
                }}
              />
            </g>
            <g
              id="dotted-ring2"
              transform="matrix(1.54298,0,0,1.54298,-505.832,-216.061)"
            >
              <circle
                className="rotating-negative"
                cx="950"
                cy="490"
                r="120"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeOpacity: 0.6,
                  strokeWidth: '2.19px',
                  strokeDasharray: '0,6.56,0,0',
                }}
              />
            </g>
            <g transform="matrix(1.028,0,0,1.028,137.6,97.96)">
              <rect
                x="550"
                y="180"
                width="500"
                height="500"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeOpacity: 0.6,
                  strokeWidth: '3.28px',
                  strokeDasharray: '0,6.57,0,0',
                }}
              />
            </g>
            <g transform="matrix(0.790115,0.790115,-0.790115,0.790115,952.099,10.623)">
              <rect
                x="110"
                y="100"
                width="460"
                height="460"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeOpacity: 0.6,
                  strokeWidth: '3.02px',
                  strokeDasharray: '0,6.04,0,0',
                }}
              />
            </g>
            <g transform="matrix(0.209826,0,0,0.209826,771.157,373.417)">
              <path
                d="M1081.12,603.28C858.55,412.64 858.55,412.64 635.98,603.28C635.86,603.38 635.74,603.49 635.61,603.59C613.93,622.16 601.45,649.28 601.45,677.83L601.45,909.99C601.45,938.54 613.92,965.66 635.61,984.23C635.73,984.33 635.85,984.44 635.98,984.54C858.55,1175.18 858.55,1175.18 1081.12,984.54C1192.41,889.22 1198.55,841.56 1198.55,793.9C1198.55,746.26 1192.4,698.6 1081.12,603.28ZM709.8,613.34C709.8,581.11 746.44,560.72 776.3,576.33L941.13,662.48C939.46,705.89 919.63,755.22 873.27,755.22L792.25,755.22C762.57,755.22 734.39,763.32 709.8,777.33L709.8,613.34ZM1113.73,825.79L777.17,1011.06C747.3,1027.5 709.8,1007.16 709.8,974.51L709.8,925.01C709.8,879.41 749.1,837.89 792.25,837.89L873.27,837.89C957,837.89 1007.25,774.96 1023.24,705.39L1112.86,752.23C1143.28,768.12 1143.77,809.25 1113.73,825.79Z"
                style={{ fill: 'rgb(238,242,246)', fillRule: 'nonzero' }}
              />
            </g>
            <g
              id="dotted-ring1"
              transform="matrix(1.16198,0,0,1.16198,541.689,334.857)"
            >
              <circle
                className="rotating-100"
                cx="360"
                cy="176.547"
                r="503.453"
                style={{
                  fill: 'none',
                  stroke: 'rgb(238,242,246)',
                  strokeOpacity: 0.6,
                  strokeWidth: '2.9px',
                  strokeDasharray: '0,26.14,0,0',
                }}
              />
            </g>
          </g>
        </g>
        <defs>
          <image
            id="_Image1"
            width="31px"
            height="31px"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACqklEQVRIib2XUWsaQRDHf3cUCWJtWkKREJLWvpTQx9Lv/wH6GEIfgikSShBpJIiIHG4f9j93c+tZvSgZGLzTc37/nZ2d3ctoYSGEfNczWZat942XtQDmidt3BlsnvlPIVriDvhGko2vvZkXiKwko/ieiES5wLkAHOJF35SdOlEGWwEK+lK/027pJwAbcgQ3aA/rAKfBB1z2JMPgCmAPPwF9gpuu5E7EhoAYX2FJq0DNgID8HPkpIT88VgsyACfBHPgGmTkQBFF5AOW9JqrsCDIBLYCj/BFxIQE/ig4JPgAfgNzCSd5LsrEMIZQ34orH7EwceAl+Bb/IrNi0D3sq/SOCZBmDx/SpY1UaezHNPf74U+Lv8XQO4ya6I09XRvVW/FV9ho/cjt1H3iWkdarRtwGbv9b8VVSH64lsZEKq5tpSfO3hbsBdwTSy6KXEVPBPnvgDWeZLyLnE5DYhz1zTHbeyz4gwUtytOHkLIfZu0Ku/r4YsDwWa2OvpURZgb1MOtqZwSi+4YdkYcdY96ZyzhUDUX39WOYdYRDVwWed7waQ/s3PH2tMzFrfHsxm+LtjOFI8GDi+s5tbQbdEm1No9hfo0bAw/32+KcuCanR4LbGvcCaiM3+EJKbZM4hj0oXq3BAOTaYazhL6Tykbg73R8IvlecR8Vd4PZ2v+tY2mfE/XhEXKOnxFbZ1p6AW+BO8WYkaU/PYUuqtI+o2uEP2vX4J+AncEMcuaXd4JTwLMvWIQSodqEp1YHRvr8m9upddk8c8Q3wCxgr3pzkOJUeJnzqc/fdQgHG7HeSudPnmDjfPuWllXA3eoPZ8WdFNRVjql5tU+ILdSKYP8PNcFXuz3CHnF6tV6eN6WWn1wYBr3tuTwTgICZk1xtLCeQlbyxbRLzeu9oOIdsDtnhL/QcwfEMqSFTWKgAAAABJRU5ErkJggg=="
          />
          <image
            id="_Image2"
            width="32px"
            height="32px"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAClUlEQVRYhc2XUWvbQAyAPzshhBBGKCGQUcLoQ7eHUbr//ydGn8roQwllgRBKCGEUk97t4SRbvtiJvXhjAnGh1NJ3Op2kS2gh3vu0yf8lSeKa2kxaOE0jxazOrFbPwtQCRI77NWrlUKMnQSoBxLnqQHQY6cBAHIAMeIs0E3WAq4I4AjDO+8bZGPgATGQdA6MI4BewB3bAVta9gTlUQZTCWOFcnU6BmVEFGcinmXG8NrqRv6EQ3vvSceQAkfOR7HIKfASugU/AQn7PBGBojO/E6QuwBJ6jKKUSpRJEnEh65up8AdwAX4Bb0TnVMgc+AyvgB3AVAUCRlOUImN0P5KOJ7PwG+ArcA3dAr8Z5DKIRsjmiieoAp1GwdP1o99ey83vgWwPHVnrmm4wQetXMwJTOxybejHDmt4Sd/6ncUSSnqoVwaUXmTwRgIQBNwl4nPbGxoLg9Q/GVeu/TuNqNCBHQI6hLuDYyF1tTsa2JmapjC6A5cCXEXclMbI4pV9AcAAOgUZh0CKCFa2QAjiKgEAoyoDtRe0dNrFF//5sS93NbMLIO/WhnVPtHAOpci4be3a5kJ1qqARbAGYA98EpoLF3JWmxqe86jEAPo7jeErrbqwPlKbG3Edj4bAKTSFhXgjaKnLwld7f0C5+9iYyk2t0TDiV4JC6B9/Zni/rZtRioPwKPYWlMRgbhXaw5sCEVDCwc0b8cQdv4AfCdEQI9gT5GE5ABJkjjvPRS3YEu5aOjIdWogUdGB5FHWJ+An5U7o6iYiRxEFFU3OrRhqM5K9yDd299VDqYmCOrTFyQJMCY2laih9FWfxUFo6ezuUnhvLtTldMpaXik88lv9/D5MIAuqfZvaNaGvJ5U+zEyD/7nF6BuaktHme/wYWkEpzxGEnPgAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  );
};

export default Menu;
