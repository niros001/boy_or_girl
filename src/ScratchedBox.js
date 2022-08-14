import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {BOX_SIZE, BOX_MARGIN} from './constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  margin: ${BOX_MARGIN}px;
`

const ScratchedBox = ({color}) => {
  return (
    <Container>
      <FontAwesomeIcon
          icon={faBabyCarriage}
          color={color}
          fontSize={50}
      />
    </Container>
)}

export default ScratchedBox;
