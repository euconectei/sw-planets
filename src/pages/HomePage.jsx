import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { Button, } from '../components';

import numbers from '../utils/numbers';

const scroll = keyframes`
	0% { top: 100%; }
	100% { top: -170%; }
`;

const TitleGameStyled = styled.div`
  align-items: center;
	color: #000;
  display: flex;
  font-family: "Droid Sans", arial, verdana, sans-serif;
  font-size: 30px;
  justify-content: center;
	line-height: 0.8em;
	letter-spacing: -0.05em;
	text-align: center;
	text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
`;

const ScrollContainer = styled.div`
  color: #ff6;
  font-family: "Droid Sans", arial, verdana, sans-serif;
  font-size: 350%;
  overflow: hidden;
  text-align: justify;
`;

const HomePageStyled = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-rows: 100px 1fr 50px;
`;

const ScrollEffect = styled.div`
  position: relative;
  transform-origin: 50% 100%;
  transform: perspective(300px) rotateX(25deg);
  height: 100%;
`;



const ScrollText = styled.div`
  position: absolute;
	top: 100%;
  animation: ${scroll} 100s linear 4s infinite;
  

  &:after {
	position: absolute;
	content: ' ';
	left: 0;
	right: 0;
	top: 0;
	bottom: 60%;
	background-image: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
	background-image: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
	background-image: -ms-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
	background-image: -o-linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
	background-image: linear-gradient(top, rgba(0,0,0,1) 0%, transparent 100%);
	pointer-events: none;
}
`;

const HomePage = () => {
  const history = useHistory();

  const startGame = () => {
    history.push(`/planets/${numbers.random(61, 1)}`);
  };

  return (
    <HomePageStyled>
      <TitleGameStyled>STAR WARS <br /> Planets</TitleGameStyled>
      <ScrollContainer>
        <ScrollEffect>
          <ScrollText>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae temporibus a cumque aliquid aliquam, quaerat, at sed numquam itaque iusto! Quam magni libero delectus rerum, perspiciatis alias sunt eum.</p>
            <p>Voluptatibus facilis dignissimos nisi aperiam quaerat! Aut ea, reprehenderit possimus impedit enim nulla temporibus eveniet facilis, cum tenetur, minima voluptate debitis in. Itaque mollitia exercitationem, iure magni recusandae earum magnam?</p>
          </ScrollText>
        </ScrollEffect>
      </ScrollContainer>
      <div style={{ justifyContent: 'center', display: 'flex' }}>

        <Button callback={() => startGame()} value='Start Game ▸' />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;;