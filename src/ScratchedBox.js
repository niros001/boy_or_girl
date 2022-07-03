import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';

const SCRATCH_SIZE = 10;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100px;
  height: 100px;
  margin: 5px;
`

const HiddenDot = styled.div`
  position: absolute;
  width: ${SCRATCH_SIZE}px;
  height: ${SCRATCH_SIZE}px;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  background-color: silver;
`

const ScratchedBox = ({data}) => (
    <Container>
      <FontAwesomeIcon
          icon={faBabyCarriage}
          color={(data === 'X') ? '#4978F4' : '#F247A0'}
          fontSize={50}
      />
      {[...Array(100 / SCRATCH_SIZE).keys()].map((i) =>
          [...Array(100 / SCRATCH_SIZE).keys()].map((j) => (
              <HiddenDot
                  name="dot"
                  key={`${i}-${j}`}
                  top={(i * SCRATCH_SIZE)}
                  left={j * SCRATCH_SIZE}
                  onMouseMove={({target}) => target.style.background = 'transparent'}
                  onTouchMove={(e) => {
                    const clientX = e.touches[0].clientX;
                    const clientY = e.touches[0].clientY;
                    const hoverElement = document.elementFromPoint(clientX, clientY);
                    if (hoverElement.getAttribute('name') === 'dot') {
                      hoverElement.style.background = 'transparent'
                    }
                  }}
              />
          )))}
    </Container>
)

export default ScratchedBox;
