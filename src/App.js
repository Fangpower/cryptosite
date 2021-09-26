import './App.css';
import {data} from './det.js'

function App() {
  return (
    <div className="App">
      <h1>Monsters</h1>
      <div className="MonsterDisplay">
        <div id="display">
          <h2>{data[0].Name}</h2>
          <h4>{data[0].Description}</h4>
          <img src={data[0].FilePath} alt="Failed Images" id="img"/>
        </div>
        <div id="display">
          <h2>{data[1].Name}</h2>
          <h4>{data[1].Description}</h4>
          <img src={data[1].FilePath} alt="Failed Images" id="img"/>
        </div>
        <div id="display">
          <h2>{data[2].Name}</h2>
          <h4>{data[2].Description}</h4>
          <img src={data[2].FilePath} alt="Failed Images" id="img"/>
        </div>
        <div id="display">
          <h2>{data[3].Name}</h2>
          <h4>{data[3].Description}</h4>
          <img src={data[3].FilePath} alt="Failed Images" id="img"/>
        </div>
      </div>
    </div>
  );
}

export default App;
