import React, { PureComponent } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 24px;
  background-color: ${props =>
    props.primary ? props.theme.primaryColor : props.theme.lightTextColor};
  border-radius: ${props => props.theme.radius}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 32px;
  color: ${props =>
    props.primary ? props.theme.lightTextColor : props.theme.darkTextColor};
  max-width: 70%;

  h1 {
    margin-bottom: 16px;
    font-family: ${props => props.theme.font.header},
      ${props => props.theme.font.list};
  }

  p {
    margin-bottom: 12px;
    line-height: 1.35;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

export default class SectionCard extends PureComponent {
  static defaultProps = {
    title: "Default Title",
    primary: false
  };

  render() {
    const { title, primary, children } = this.props;
    return (
      <CardContainer primary={primary}>
        <h1>{title}</h1>
        {children}
      </CardContainer>
    );
  }
}
