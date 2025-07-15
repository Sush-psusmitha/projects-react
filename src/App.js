import './App.css';
import Result from './Result';
import { useState } from 'react';

const secretNum = Math.floor(Math.random()*10) + 1;

function App() {
       const[term, setTerm] = useState("");

       const handleChange = (e) => {
             setTerm(e.target.value) 
       }
  return (
    <>
    <h1>Guess The Number😜</h1>
    <div className="container">
       <div className="head">
       <label htmlFor='term' >Guess the number between 1 to 10</label>
       </div>
       <input type="text" id='term' name='term' 
         onChange={handleChange}
       />
       <Result secretNum={secretNum} term={term}/>

    </div>

    </>
  );
}

export default App;
