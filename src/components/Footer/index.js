import React, { PureComponent } from "react";
import styled, { keyframes } from "styled-components";

import HeartIcon from "@assets/twitter_heart.png";

export const FOOTER_EXTENDED_SIZE = 200;
export const FOOTER_NORMAL_SIZE = 48;

const FooterContainer = styled.footer`
  font-size: 60%;
  font-weight: 800;
  background-color: ${props => props.theme.darkTextColor};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: ${props => props.theme.font.header};
  border-top: 2px solid rgba(34, 40, 49, 0.3);
  color: rgba(255, 255, 255, 0.65);
  justify-content: center;
  align-items: center;
  display: flex;
  height: ${props =>
    props.extend ? FOOTER_EXTENDED_SIZE : FOOTER_NORMAL_SIZE}px;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  transition: height ${props => props.theme.transition.medium}ms ease-out;

  span a {
    color: inherit;
    transition: color ${props => props.theme.transition.medium}ms;
  }

  a:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const HeartMove = keyframes`
	0% {
		background-position: left;
	}
	50% {
		background-position: right;
	}
	100% {
		background-position: right;
	}
`;

const Heart = styled.i`
  width: 40px;
  height: 40px;
  background: transparent url(${HeartIcon}) no-repeat;
  background-size: 2900%;
  margin: 0 -8px;

  &:hover {
    background-position: right;
    animation: ${HeartMove} 800ms steps(28) forwards;
  }
`;

export default class Footer extends PureComponent {
  state = {
    extend: false
  };

  componentDidMount() {
    addEventListener("scroll", this.scrollEvent, { passive: true });
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.scrollEvent);
  }

  scrollEvent = () => {
    const { extend } = this.state;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.setState({ extend: true });
    } else {
      if (extend) {
        this.setState({ extend: false });
      }
    }
  };

  render() {
    const { extend } = this.state;
    return (
      <FooterContainer extend={extend}>
        <span>{this.state.extend}</span>
        <span>Made with </span>
        <Heart />
        <span>
          {" "}
          by <a href="https://github.com/iharryijumper">Andrey Menshikh</a>
        </span>
      </FooterContainer>
    );
  }
}
