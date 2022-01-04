import "./App.css";
import List from "./List";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="spacing">
          <h1>Debt Collector</h1>
        </div>
        <div className="content">
          <List />
        </div>

      </div>
    </div>
  );
}

export default App;
