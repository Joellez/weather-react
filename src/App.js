import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
            <Weather defaultCity="London"/>
        </header>
      </div>
    </div>
  );
}

export default App;
