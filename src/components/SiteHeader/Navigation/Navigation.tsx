import React, { useState } from 'react';
import { Link } from 'gatsby';
import Switch from 'react-switch';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { ScreenReadersOnly } from 'components';

interface NavLinks {
  name: string;
  link: string;
  target?: string;
}

interface Props {
  navLinks?: NavLinks[];
}

const DarkModeToggleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Label = styled.label`
  position: relative;
  display: block;
  margin: 0;
  cursor: pointer;

  @media (${props => props.theme.media.expandedNav}) {
    display: none;
  }
`;

const Hamburger = styled.div`
  & span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:last-child {
      transform-origin: 0 100%;
    }
  }
`;

const Menu = styled.ul`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  max-width: 300px;
  margin: 0;
  padding: 4.03rem 0 0; /* 2.5rem + rhythm(1) */
  background: white;
  list-style-type: none;
  -webkit-font-smoothing: antialiased; /* to stop flickering of text in safari */
  transform-origin: 100% 0;
  transform: translateX(
    calc(100% + 3px + 10px)
  ); /* 100% + box-shadow X-axis offset and blur */
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  box-shadow: -3px 3px 10px 0 rgba(0, 0, 0, 0.5);

  @media (${props => props.theme.media.expandedNav}) {
    position: static;
    top: auto;
    right: auto;
    padding: 0;
    background: none;
    max-width: initial;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    transform: none;
    box-shadow: none;
    justify-content: flex-end;
  }

  & li {
    list-style-type: none;
    margin: 0;
    padding: 0.5em 1rem;

    & a {
      color: ${props => props.theme.nav.color};
      text-decoration: none;
      text-transform: capitalize;

      &:focus {
        text-decoration: underline;
      }

      &:hover {
        color: ${props => props.theme.color.link.hover};
      }
    }

    @media (${props => props.theme.media.expandedNav}) {
      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

const Trigger = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;

  /*
   * Fade in menu from the right
   */
  &:checked ~ ${Menu} {
    transform: translateX(0);
    opacity: 1;
  }

  /*
   * Transform all the slices of hamburger
   * into a crossmark.
   */
  &:checked ~ label > ${Hamburger} > span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);

    /*
     * But let's hide the middle one.
     */
    &:nth-child(2) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
     * Ohyeah and the last one should go the other direction
    */
    &:last-child {
      opacity: 1;
      transform: rotate(-45deg) translate(0, -1px);
    }
  }
`;

export default ({ navLinks }: Props) => {
  const darkMode = useDarkMode();
  const [expanded, setExpanded] = useState(false);

  if (typeof document !== 'undefined') {
    document.body.classList.toggle('has-overlay', expanded);
  }

  return (
    <nav role="navigation">
      <Trigger
        type="checkbox"
        id="mainNavButton"
        tabIndex={-1}
        checked={expanded}
        onChange={() => setExpanded(!expanded)}
      />
      <Label htmlFor="mainNavButton">
        <ScreenReadersOnly>Menu</ScreenReadersOnly>
        <Hamburger>
          <span />
          <span />
          <span />
        </Hamburger>
      </Label>
      <Menu>
        {navLinks.map(link => (
          <li key={link.name}>
            {link.target ? (
              <a href={link.link} target={link.target}>
                {link.name}
              </a>
            ) : (
              <Link to={link.link}>{link.name}</Link>
            )}
          </li>
        ))}
        <li>
          <Switch
            checked={darkMode.value}
            onChange={darkMode.toggle}
            onColor="#222"
            offColor="#222"
            uncheckedIcon={
              <DarkModeToggleIcon
                style={{
                  color: '#f0c420',
                }}
              >
                <FaMoon />
              </DarkModeToggleIcon>
            }
            checkedIcon={
              <DarkModeToggleIcon
                style={{
                  color: 'orange',
                }}
              >
                <FaSun />
              </DarkModeToggleIcon>
            }
            aria-checked={darkMode.value}
            aria-label="Toggle dark mode"
          />
        </li>
      </Menu>
    </nav>
  );
};
