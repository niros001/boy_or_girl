import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {BOX_SIZE, SCRATCH_SIZE, SCRATCH_COUNT, QUESTION_MARK_DOTS} from './constants';

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

const ScratchedBox = ({color}) => (
    <Container>
      <FontAwesomeIcon
          icon={faBabyCarriage}
          color={color}
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
              />
          )))}
    </Container>
)

export default ScratchedBox;
