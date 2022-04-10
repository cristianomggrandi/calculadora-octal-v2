import React, { useState } from 'react';
import './App.css';
import ButtonGrid from './components/ButtonGrid';
import Result from './components/Result';

function App() {
    const [result, setResult] = useState();
    const [current, setCurrent] = useState(0);

    return (
        <div className="App">
            <Result textToShow={result ? result : current}/>
            <ButtonGrid />
        </div>
    );
}

export default App;
