import './App.css';
import React, {useMemo} from 'react';
import ScratchedBox from './ScratchedBox';
import {generateBoard} from './board';
import {faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const App = () => {
  const board = useMemo(() => generateBoard(), []);
  return (
    <div className="container">
      <div className="card-wrapper">
        <h2><span style={{color: '#4978F4'}}>Boy</span> or <span style={{color: '#F247A0'}}>Girl</span>?</h2>
        <div className="card">
          {[...Array(3).keys()].map((i) => <div key={i} className="row">
            {[...Array(3).keys()].map((j) => (
                <ScratchedBox key={j} data={board[(i * 3) + j]} />
            ))}
          </div>)}
        </div>
        <div className="row">
          <h4>3 X <FontAwesomeIcon icon={faBabyCarriage} color="#4978F4" fontSize={25}/> in a row is boy</h4>
        </div>
        <div className="row">
          <h4>3 X <FontAwesomeIcon icon={faBabyCarriage} color="#F247A0" fontSize={25}/> in a row is girl</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
