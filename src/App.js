import './App.css';

// component
import TodoApp from './components/TodoApp';

//image
import bgDesc from "./img/bg-desc.jpg"
import bgMobile from "./img/bg-mob.jpg"

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <img className="bannerDesc" src={bgDesc} />
      <img className="banerMob" src={bgMobile} />
      <div className="compo">
        <TodoApp />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
