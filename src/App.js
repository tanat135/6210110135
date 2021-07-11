import React from 'react';
import './App.css';
import WordCard from './WordCard';
import _ from 'lodash';

const word = ["CPU","Moniter","Headphone","Ram","GPU",]
const randomElement = _.sample(word);
function App() {
  return (
    <div>
      <div className="maingame"> 
            <h1>  Game </h1>
      </div> 
      
     <WordCard value={randomElement}/>
     
    </div>
  );
}


export default App;
