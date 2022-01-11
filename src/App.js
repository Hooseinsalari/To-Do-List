import './App.css';
import TodoApp from './components/TodoApp';

import bgDesc from "./img/bg-desc.jpg"

function App() {
  return (
    <div className="App">
      {/* <img src={bgDesc} /> */}
      <div className="compo">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
