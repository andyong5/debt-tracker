import "./App.css";
import { useEffect, useState } from "react";
import FormSub from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "./Transactions";
import Home from "./Home";
// function User(props) {
//   return <h1>Hello {props.match.params.username}!</h1>;
// }
function App() {
  const [currUser, setCurrUser] = useState("Andy");
  const [friends, setFriends] = useState([]);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("currUser", currUser);
    fetch("/totals", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var fr = []
        for(var i=0; i < data.length; i++){
          fr.push(data[i].name);
        }
        setFriends(fr);
        setTotals(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="spacing">{/* <h1>Debt Collector</h1> */}</div>

          <div className="content">
            <div className="spacing">
              <Routes>
                <Route exact path="/" element={<Home friends={friends} totals={totals}/>} />
                <Route exact path="/user" element={<Transactions friends={friends} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
