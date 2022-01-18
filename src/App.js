import './App.css';


import EditModal from './components/EditModal';
import TodoApp from './components/TodoApp';

import bgDesc from "./img/bg-desc.jpg"
import bgMobile from "./img/bg-mob.jpg"

function App() {
  return (
    <div className="App">
      <img className="bannerDesc" src={bgDesc} />
      <img className="banerMob" src={bgMobile} />
      <div className="compo">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
