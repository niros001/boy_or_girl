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
    let context = canvas.getContext('2d');
    context.fillStyle = 'silver'
    context.fillRect(0, 0, canvas.width, canvas.height)

    const onScratch = ({targetTouches, offsetX, offsetY}) => {
      let x, y;
      if (targetTouches) {
        const {clientX, clientY} = targetTouches[0];
        const elementFromPoint = document.elementFromPoint(clientX, clientY);
        if (elementFromPoint?.tagName === 'CANVAS') {
          const rect = elementFromPoint.getBoundingClientRect();
          x = targetTouches[0].pageX - rect.left - window.scrollX;
          y = targetTouches[0].pageY - rect.top - window.scrollY;
          context = elementFromPoint.getContext('2d');
        }
      } else {
        x = offsetX;
        y = offsetY;
      }

      if (x && y) {
        context.globalCompositeOperation = 'destination-out';
        const circle = new Path2D();
        circle.arc(x, y, 20, 0, 2 * Math.PI);
        context.fill(circle);
      }
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
