import './App.css';
import CurrentClimate from './components/currentClimate';
import ExtendsClimate from './components/extendsClimate';
import SelectorCapital from './components/selectorCapital';


function App() {
  return (
    <div className="App">
        <SelectorCapital/>
        <CurrentClimate/>
        <ExtendsClimate/>
    </div>
  );
}

export default App;
