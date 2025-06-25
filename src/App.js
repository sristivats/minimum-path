import React, { useState } from 'react'
import './App.css'
import Routes from './routes';

const App = () => {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const a = e.target[0].value
    const b = e.target[1].value
    try {
      const response = await fetch(`https://minimum-path-1.onrender.com/shortd/${a}/${b}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }

    setDisplay(true)
    e.target[0].value = '';
    e.target[1].value = '';
  }

  return (
    <div className='mainContainer'>
      <div className='projectHeader'>Minimal Cost Path Finder</div>

      <div className='Maps'>
        <div className='satMap'>
        </div>
        <div className='outMap'></div>
      </div>



      <div className='formInput' >
        <form method='post' onSubmit={onsubmitHandler} className='formGroup'>
          <div className='sourceForm'>
            <label for='sorce'>Source</label>
            <input id='source' name='a' type='number' min={1} max={64} placeholder='Enter Source' className='sourceInput' required></input>
          </div>
          <div className='destinationForm'>
            <label for='destination'>Destination</label>
            <input id='destination' name='b' type='number' min={1} max={64} placeholder='Enter Destination' className='destinationInput' required ></input>
          </div>
          <button className='formButton'>Submit</button>
        </form>
      </div>


      <div className='projectDisplay'>
        {display && <Routes dataPoint={data} />}
      </div>
    </div>
  )
}

export default App;