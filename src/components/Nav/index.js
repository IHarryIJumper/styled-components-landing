import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import media from "@components/MediaQueries";

const NavContainer = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  padding: 0 32px;
  position: relative;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
  top: 0;
  a,
  a:visited {
    transition: color ${props => props.theme.transition.medium}ms ease-out;
    color: ${props =>
      props.shadow ? props.theme.lightTextColor : props.theme.darkTextColor};
  }

  &:before, &:after {
    content: "";
    transition: opacity ${props => props.theme.transition.medium}ms ease-out;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    will-change: opacity;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  &:before {
    background-color: ${props => props.theme.lightTextColor};
    opacity: ${props => (!props.shadow ? 0.7 : 0)};
  }

  &:after {
    background-color: ${props => props.theme.darkTextColor};
    opacity: ${props => (props.shadow ? 1 : 0)};
  }

  ${media.mobile`
		font-size: 75%;
		padding: 0 16px
	`};
`;

const NavLink = styled.li`
  position: relative;
  margin-left: 24px;
  list-style: none;
  float: right;
  z-index: 1;

  ${media.mobile`
		margin-left: 16px
	`};
`;

const NavLinks = styled.ul`
  ${NavLink} {
    display: inline-block;
    float: none;
    margin-left: 0;
    margin-right: 24px;
    ${media.mobile`
			margin-left: 0;
			margin-right: 16px;
		`};
  }
`;

const ExternalLink = styled.a`
  position: relative;
`;

export default class Nav extends Component {
  state = {
    shadow: false
  };

  componentDidMount() {
    addEventListener("scroll", this.scrollEvent, { passive: true });
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.scrollEvent);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { shadow } = this.state;
    return shadow !== nextState.shadow;
  }

  scrollEvent = () => {
    const shadow = window.pageYOffset > 0;
    this.setState({ shadow });
  };

  render() {
    const { shadow } = this.state;

    return (
      <NavContainer shadow={shadow}>
        <NavLinks>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
        </NavLinks>

        <NavLinks>
          <NavLink>
            <ExternalLink href="https://geekbrains.ru/events/1060">
              Вебинар
            </ExternalLink>
          </NavLink>
          <NavLink>
            <ExternalLink href="https://geekbrains.ru/">
              GeekBrains
            </ExternalLink>
          </NavLink>
        </NavLinks>
      </NavContainer>
    );
  }
}
