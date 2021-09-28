import './App.css';
import Todo from './components/todo';
function App() {
  return (
    <div className="todo">
        <Todo text="todo1" />
        <Todo text="todo2" />
        <Todo text="todo3" />
        <Todo text="todo4" />
    </div>
    
  );
}

export default App;
