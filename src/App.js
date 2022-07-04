import './App.css';
import React, {useMemo} from 'react';
import styled from 'styled-components';
import ScratchedBox from './ScratchedBox';
import {generateBoard} from './board';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Title = styled.div`
  color: #282c34;
  font-size: 26px;
`

const Subtitle = styled(Title)`
  font-size: 17px;
  margin-top: 5px;
`

const App = () => {
  const board = useMemo(() => generateBoard(), []);
  return (
    <div className="container">
      <div className="card-wrapper">
        <Title><span style={{color: '#4978F4'}}>Boy</span> or <span style={{color: '#F247A0'}}>Girl</span>?</Title>
        <div className="card">
          {[...Array(3).keys()].map((i) => <div key={i} className="row">
            {[...Array(3).keys()].map((j) => (
                <ScratchedBox key={j} data={board[(i * 3) + j]} />
            ))}
          </div>)}
        </div>
        <div className="row">
          <Subtitle>3 X <FontAwesomeIcon icon={faBabyCarriage} color="#4978F4" fontSize={25}/> in a row is boy</Subtitle>
        </div>
        <div className="row">
          <Subtitle>3 X <FontAwesomeIcon icon={faBabyCarriage} color="#F247A0" fontSize={25}/> in a row is girl</Subtitle>
        </div>
      </div>
    </div>
  );
}

export default App;
