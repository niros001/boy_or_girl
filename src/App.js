import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components';
import ScratchedBox from './ScratchedBox';
import Lines from './Lines';
import {generateBoard} from './board';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CARD_SIZE, BOX_MARGIN, WINNER_COLOR, LOOSER_COLOR} from './constants';

const Container = styled.div`
  background-repeat: repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  padding: 12px;
  font-family: Trattatello, fantasy;
`

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  touch-action: none;
  padding: ${BOX_MARGIN}px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.div`
  color: #282c34;
  font-size: 26px;
`

const Subtitle = styled(Title)`
  font-size: 17px;
  margin-top: 5px;
`

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: silver;
  z-index: 1;
`

const App = () => {
  const {board, winner} = useMemo(() => generateBoard(), []);
  useEffect(() => {
    const canvas = document.querySelector('#scratch-card');
    canvas.style.backgroundColor = 'transparent';
    let context = canvas.getContext('2d');
    context.fillStyle = 'silver'
    context.fillRect(0, 0, canvas.width, canvas.height)

    const onScratch = ({targetTouches, target, offsetX, offsetY}) => {
      const rect = target.getBoundingClientRect();
      const x = targetTouches ? targetTouches[0].pageX - rect.left - window.scrollX : offsetX;
      const y = targetTouches ? targetTouches[0].pageY - rect.top - window.scrollY : offsetY;

      context.globalCompositeOperation = 'destination-out';
      const circle = new Path2D();
      circle.arc(x, y, 20, 0, 2 * Math.PI);
      context.fill(circle);
    }

    canvas.addEventListener('mousemove', onScratch);
    canvas.addEventListener('touchmove', onScratch);
    return () => {
      canvas.removeEventListener('mousemove', onScratch);
      canvas.removeEventListener('touchmove', onScratch);
    }
  }, []);
  return (
    <Container>
      <CardWrapper>
        <Title><span style={{color: '#4978F4'}}>Boy</span> or <span style={{color: '#F247A0'}}>Girl</span>?</Title>
        <Card>
          {[...Array(3).keys()].map((i) => <Row key={i}>
            {[...Array(3).keys()].map((j) => (
                <ScratchedBox key={j} id={`${i}-${j}`} color={board[(i * 3) + j] === winner ? WINNER_COLOR : LOOSER_COLOR} winner={winner} />
            ))}
          </Row>)}
          <Canvas id="scratch-card" width={CARD_SIZE} height={CARD_SIZE} />
          <Lines />
        </Card>
        <Row>
          <Subtitle>3 X <FontAwesomeIcon icon={faBabyCarriage} color="#4978F4" fontSize={25}/> in a row is boy</Subtitle>
        </Row>
        <Row>
          <Subtitle>3 X <FontAwesomeIcon icon={faBabyCarriage} color="#F247A0" fontSize={25}/> in a row is girl</Subtitle>
        </Row>
      </CardWrapper>
    </Container>
  );
}

export default App;
