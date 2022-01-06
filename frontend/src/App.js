import "./App.css";
import { useEffect, useState } from "react";
import FormSub from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}
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
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="spacing">
            <h1>Debt Collector</h1>
          </div>

          <div className="content">
            <div className="spacing">
              <Routes>
                <Route exact path="/" element={<FormSub />}/>
                <Route exact path="/" element={<FormSub />}/>
                
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
