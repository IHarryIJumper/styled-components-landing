import React from "react";
import styled from "styled-components";
import { HMR } from "@pwa/preset-react";

import { Section } from "@components/Styles";

import Code from "@components/Code";

import Pic1 from "@assets/pic-1.jpg";
import Pic2 from "@assets/pic-2.jpg";

const Title = styled.div`
  padding: 20px;
  z-index: 2;
  position: relative;
  font-family: ${props => props.theme.font.header},
    ${props => props.theme.font.list};
  text-transform: uppercase;
  top: calc(30% - 56px);
  text-align: center;
  color: ${props => props.theme.darkTextColor};
  background-color: ${props => props.theme.lightTextColor};

  & h1 {
    font-size: 2.875em;
    font-weight: 800;
    line-height: 1;
  }

  & h3 {
    line-height: 2;
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 1.25em;
  }
`;

const ImageSection = styled.div`
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  height: 100%;
  width: 30%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;

  &:first-child {
    width: 70%;
  }
`;

const ImageSectionContainer = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
`;

const TestElementsContainer = styled.div`
  min-height: 100px;
  min-width: 50vw;
  border-radius: ${props => props.theme.radius}px;
  background-color: ${props => props.theme.darkTextColor};
  color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <div>
      <Section>
        <ImageSectionContainer>
          <ImageSection image={Pic1}>
            <div>
              <Title>
                <h1>STYLED-COMPONENTS</h1>
                <h3>Use them with style</h3>
              </Title>
            </div>
          </ImageSection>

          <ImageSection image={Pic2} />
        </ImageSectionContainer>
      </Section>
      <Section>
        <div>
          <h2>Установка</h2>
          <Code text="npm install styled-components@beta --save" />
          <Code offset label="или" text="yarn add styled-components@beta" />
        </div>
      </Section>

      <Section>
        <div>
          <h2>Здесь могут быть ваши элементы</h2>
          <TestElementsContainer>
            <span>Здесь очень пусто и одиноко... 😔</span>
          </TestElementsContainer>
        </div>
      </Section>
    </div>
  );
};

export default HMR(Home, module);
