import "./App.css";
import { useEffect, useState } from "react";
import FormSub from "./Form";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("/test2")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     })
  //     .catch((error) => {});
  // }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="spacing">
          <h1>Debt Collector</h1>
        </div>
        <div className="content">
          <div className="spacing">
            <div className="list">
              <h2>List of People</h2>
              <FormSub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
