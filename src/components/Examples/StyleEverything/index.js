import React, { PureComponent } from "react";
import styled from "styled-components";

class StyleEverything extends PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <p>I want to style you with styled-components</p>
      </div>
    );
  }
}

const RestyledWithStyledComponents = styled(StyleEverything)`
  color: blue;
`;

/* const Test1 = styled.div`
  color: grey;
  font-size: 16px;
`;

const Test2 = Test1.extend`
  font-size: 14px;
`; */

export default RestyledWithStyledComponents;
