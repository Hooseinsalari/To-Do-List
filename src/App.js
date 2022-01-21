import './App.css';

// component
import TodoApp from './components/TodoApp';

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
