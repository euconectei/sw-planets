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
  font-size: 48px;
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
  overflow: hidden;

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



const ScrollText = styled.div`
  position: absolute;
	top: 100%;
  animation: ${scroll} 90s linear 2s infinite;
  

  
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
            <p>Guerra! A República está desmoronando com os ataques do cruel Lorde Sith, Conde Dookan. Existem heróis em ambos os lados. O Mal está em toda a parte.</p>
            <p>Numa ação impressionante, o diabólico líder dos andróides, General Grievous, entrou de assalto na capital da República e seqüestrou o Chanceler Palpatine, líder do Senado Galáctico.</p>
            <p>Enquanto o Exército Separatista tenta escapar da capital sitiada com seu valoroso refém, dois cavaleiros Jedi lideram uma desesperada missão para resgatar o Chanceler cativo...</p>
            <p>Neste jogo, vamos testar seu conhecimento sobre os planetas para resgatar o Chanceler.</p>
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