import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonGrid from './components/ButtonGrid';
import Result from './components/Result';

export default function App() {
    const [result, setResult] = useState(null);
    const [current, setCurrent] = useState('0');

    function insertNumber(i) {
        i = i.toString();
        if (current === '0') {setCurrent(i); return}
        setCurrent(current + i);
    }

    function insertOperator(operator) {
        setCurrent(current + " " + operator + " ");
    }

    function clearValue() {
        if (current === '0') {setResult('0'); return;}
        setCurrent('0');
    }

    function equals() {
        let equationArray = current.split('x').join('*').split(' ');
        let tempEquationArray = [];
        for (let i = 0; i < equationArray.length; i++) {
            if (!Button.operatorOptions.includes(equationArray[i])) tempEquationArray.push(parseInt(equationArray[i], 8));
            else tempEquationArray.push(equationArray[i]);
        }
        setCurrent(Math.floor(eval(tempEquationArray.join(''))).toString(8));
        setResult(current);
    }

    function handleClick(i, type) {
        switch (type) {
            case 'number':
                insertNumber(i);
                break;
            case 'string':
                if (Button.operatorOptions.includes(i)) insertOperator(i);
                if (i === '=') equals();
                if (i === 'C') clearValue();
                break;
        }
    }

    return (
        <div className="App">
            <Result textToShow={current} />
            <ButtonGrid onClick={(i, type) => handleClick(i, type)} />
        </div>
    );
}