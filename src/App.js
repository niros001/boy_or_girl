import './App.css';
import {useMemo} from 'react';
import ScratchedBox from './ScratchedBox';
import {generateBoard} from './board';

const App = () => {
  const board = useMemo(() => generateBoard(), []);
  return (
    <div className="container">
      <div className="card-wrapper">
        <h2>Boy or Girl?</h2>
        <div className="card">
          {[...Array(3).keys()].map((i) => <div key={i} className="row">
            {[...Array(3).keys()].map((j) => (
                <ScratchedBox key={j} data={board[(i * 3) + j]} />
            ))}
          </div>)}
        </div>
        <h4>Some rules...</h4>
        <h4>Some rules...</h4>
      </div>
    </div>
  );
}

export default App;
