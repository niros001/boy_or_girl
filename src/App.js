import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';
import ScratchedBox from './ScratchedBox';
import {generateBoard} from './board';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SCRATCH_SIZE, WINNER_COLOR, LOOSER_COLOR} from './constants';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  touch-action: none;
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

const App = () => {
  const {board, winner} = useMemo(() => generateBoard(), []);

  const onScratch = useCallback(({touches, clientX, clientY}) => {
    const x = touches ? touches[0].clientX : clientX;
    const y = touches ? touches[0].clientY : clientY;
    const elements = [];
    elements.push(document.elementFromPoint(x - SCRATCH_SIZE, y));
    elements.push(document.elementFromPoint(x, y - SCRATCH_SIZE));
    elements.push(document.elementFromPoint(x, y));
    elements.push(document.elementFromPoint(x, y + SCRATCH_SIZE));
    elements.push(document.elementFromPoint(x + SCRATCH_SIZE, y));
    elements.forEach((element) => {
      if (element && (element.getAttribute('name') === 'dot')) {
        element.style.background = 'transparent'
      }
    })
  }, [])

  return (
    <Container>
      <CardWrapper>
        <Title><span style={{color: '#4978F4'}}>Boy</span> or <span style={{color: '#F247A0'}}>Girl</span>?</Title>
        <Card
            onMouseMove={onScratch}
            onTouchMove={onScratch}
        >
          {[...Array(3).keys()].map((i) => <Row key={i}>
            {[...Array(3).keys()].map((j) => (
                <ScratchedBox key={j} color={board[(i * 3) + j] === winner ? WINNER_COLOR : LOOSER_COLOR} winner={winner} />
            ))}
          </Row>)}
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
