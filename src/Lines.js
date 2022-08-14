import React from 'react';
import styled from 'styled-components';

const HorizontalLines = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  z-index: 2;
`

const VerticalLines = styled(HorizontalLines)`
  flex-direction: row;
`

const HorizontalLine = styled.div`
  width: 100%;
  height: 8px;
  background-color: black;
`

const VerticalLine = styled.div`
  width: 8px;
  height: 100%;
  background-color: black;
`

const Lines = () => (
    <>
      <HorizontalLines>
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
      </HorizontalLines>
      <VerticalLines>
        <VerticalLine />
        <VerticalLine />
        <VerticalLine />
        <VerticalLine />
      </VerticalLines>
    </>
)

export default Lines;
