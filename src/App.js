import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!</h1>
        <Search />
        <Weather />
        <Forecast />
        <Footer />
      </header>
    </div>
  );
}

export default App;
