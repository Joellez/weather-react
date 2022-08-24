import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
            <Weather defaultCity="London"/>
          <Footer />
        </header>
      </div>
    </div>
  );
}

export default App;
