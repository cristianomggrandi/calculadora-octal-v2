import { useState } from 'react';
import './App.css';
import ButtonGrid from './components/ButtonGrid';
import Result from './components/Result';

function App() {

    const [result, setResult] = useState();
    const [current, setCurrent] = useState(0);

    function handleClick(i) {
        //switch (typeof i)
        if ((typeof i) === "number") {
            setCurrent(i);
        } else {
            setCurrent(i);
        }
    }

    return (
        <div className="App">
            <Result textToShow={result ? result : current} />
            <ButtonGrid onClick={(i) => handleClick(i)} />
        </div>
    );
}

export default App;
