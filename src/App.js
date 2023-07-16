import logo from './logo.svg';
import './App.css';
import { Input } from './input/Input';
import { Card } from './card/Card';
import { useWeatch } from './context/WeatherContext';
import { useEffect } from 'react';

function App() {

  const weatch =  useWeatch()


  useEffect(() => {
      // get courent locetion 
      weatch.featchCurentLocetion()
  }, [])
  
  return (
    <div className="App">
      <h2>Weatch Forecast</h2>
      <Input />
      <button onClick={weatch.featchData}>Search</button>
      <Card />
    </div>
  );
}

export default App;
