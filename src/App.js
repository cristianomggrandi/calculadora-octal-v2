import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonGrid from './components/ButtonGrid';
import Result from './components/Result';

function App() {

    const [result, setResult] = useState(null);
    const [current, setCurrent] = useState(0);

    //TODO: insertNumber while result on screen

    function insertNumber(i) {
        setCurrent(i);
    }

    function clearValue() {
        if (current) setCurrent(0);
        else setResult(null);
    }

    function equals() {
        setResult(current);
        setCurrent(0);
    }

    function chooseOperator(operator) {
        setCurrent(operator)
    }

    function handleClick(i, type) {
        switch (type) {
            case 'number':
                insertNumber(i);
                break;
            case 'string':
                if (Button.operatorOptions.includes(i)) chooseOperator(i);
                if (i === '=') equals();
                if (i === 'C') clearValue();
        }
    }

    return (
        <div className="App">
            <Result textToShow={result ? result : current} />
            <ButtonGrid onClick={(i, type) => handleClick(i, type)} />
        </div>
    );
}

export default App;
