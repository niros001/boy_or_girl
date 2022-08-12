import React, {useEffect} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {BOX_SIZE} from './constants';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  margin: 4px;
`

const Canvas = styled.canvas`
  position: absolute;
  background-color: silver;
  z-index: 1;
`

const ScratchedBox = ({id, color}) => {
  useEffect(() => {
    const canvas = document.querySelector(`#scratch-box-${id}`);
    canvas.style.backgroundColor = 'transparent';
    const context = canvas.getContext('2d');
    context.fillStyle = 'silver'
    context.fillRect(0, 0, canvas.width, canvas.height)

    const onScratch = ({targetTouches, target, offsetX, offsetY}) => {
      const rect = target.getBoundingClientRect();
      const x = targetTouches ? targetTouches[0].pageX - rect.left : offsetX;
      const y = targetTouches ? targetTouches[0].pageY - rect.top : offsetY;

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
  }, [id]);

  return (
    <Container>
      <FontAwesomeIcon
          icon={faBabyCarriage}
          color={color}
          fontSize={50}
      />
      <Canvas id={`scratch-box-${id}`} width={BOX_SIZE} height={BOX_SIZE} />
    </Container>
)}

export default ScratchedBox;
