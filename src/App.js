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
      <div className="component">
        <TodoApp />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
