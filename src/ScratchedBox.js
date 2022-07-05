import React, {useCallback} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';

const BOX_SIZE = 90;
const SCRATCH_SIZE = 6;
const SCRATCH_COUNT = BOX_SIZE / SCRATCH_SIZE;
const QUESTION_MARK_DOTS = [21, 22, 23 ,35, 39, 49, 55, 70, 85, 99, 113, 127, 142, 157, 187];

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  margin: 5px;
`

const HiddenDot = styled.div`
  position: absolute;
  width: ${SCRATCH_SIZE}px;
  height: ${SCRATCH_SIZE}px;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  background: ${({isQuestionMark}) => (isQuestionMark ? 'gold' : 'radial-gradient(circle, rgba(73,120,244,1) 0%, rgba(242,71,160,1) 100%)')};
`

const ScratchedBox = ({data}) => {
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
        <FontAwesomeIcon
            icon={faBabyCarriage}
            color={(data === 'X') ? '#4978F4' : '#F247A0'}
            fontSize={50}
        />
        {[...Array(SCRATCH_COUNT).keys()].map((i) =>
            [...Array(SCRATCH_COUNT).keys()].map((j) => (
                <HiddenDot
                    name="dot"
                    key={`${i}-${j}`}
                    isQuestionMark={QUESTION_MARK_DOTS.includes((i * SCRATCH_COUNT) + j)}
                    top={(i * SCRATCH_SIZE)}
                    left={j * SCRATCH_SIZE}
                    onMouseMove={onScratch}
                    onTouchMove={onScratch}
                />
            )))}
      </Container>
  )
}

export default ScratchedBox;
