import './App.css';
import ClassbasedGreeting from './components/ClassbasedGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      {//<FunctionalGreetingWithProps name="Wings" /> 
      }
      <ClassbasedGreeting name="Wings" />
    </div>
  );
}

export default App;
