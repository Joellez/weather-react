import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <div className="card" />
        <div className="card-body pb-4">
          <Weather />
          <Forecast />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
