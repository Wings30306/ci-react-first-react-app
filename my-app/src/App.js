import './App.css';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
// import ClassbasedGreeting from './components/ClassbasedGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      {//<FunctionalGreetingWithProps name="Wings" /> 
      //<ClassbasedGreeting name="Wings" />
}
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
