import logo from './logo.svg';
import './App.css';
import ButtonGrid from './components/ButtonGrid';
import Result from './components/Result';

function App() {
    return (
        <div className="App">
            <Result />
            <ButtonGrid number='0' />
        </div>
    );
}

export default App;
