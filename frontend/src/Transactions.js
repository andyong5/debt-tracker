import { useEffect, useState } from "react";
import Moment from "react-moment";
import "./Transactions.css";
function Transactions() {
  const [name, setName] = useState("Ally");
  const [num, setNum] = useState(0);
  const [description, setDescription] = useState("");
  const [trans, setTrans] = useState([]);
  const [total, setTotal] = useState(500);
  const [redOrGreen, setRedOrGreen] = useState("text-success");
  const [longerThan, setLongerThan] = useState("");

  useEffect(() => {
    const d = [
      {
        id: 0,
        name: "Andy",
        date: "2022-01-04 14:08:10.310943",
        description: "hello",
        amount: 100,
      },
      {
        id: 1,
        name: "Andy",
        date: "2022-01-04 14:08:10.310943",
        description: "hello1",
        amount: -200,
      },
      {
        id: 2,
        name: "Andy",
        date: "2022-01-04 14:08:10.310943",
        description: "hello2",
        amount: 300,
      },
      {
        id: 3,
        name: "Andy",
        date: "2022-01-04 14:08:10.310943",
        description: "hello2",
        amount: 300,
      },
      {
        id: 5,
        name: "Andy",
        date: "2022-01-04 14:08:10.310943",
        description: "hello2",
        amount: 300,
      },
    ];

    setTrans(d);
    if (d.length > 9) {
      setLongerThan("tableFixHead");
    }
    console.log(trans);
    // fetch("/test2")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUsers(data);
    //   })
    //   .catch((error) => {});
  }, []);

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(num);
    console.log(description);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("num", num);
    formData.append("description", description);
    // fetch("/reveal", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if ("message" in data) {
    //       setError(true);
    //       setInputClass("nes-input is-error");
    //     } else {
    //       console.log(data);
    //       setError(false);
    //       setInputClass("nes-input");
    //       history.push("/reveal", { params: data });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setError(true);
    //   });
  };

  return (
    <div>
      <h3>Between</h3>
      <div className={longerThan}>
        <table>
          <thead>
            <tr>
              <th className="leftborder">Date</th>
              <th>Description</th>
              <th className="rightborder">Amount</th>
            </tr>
          </thead>
          {trans &&
            trans.map((tran) => (
              <tr key={tran.id}>
                <td>
                  <Moment format="MMM DDD, YYYY">{tran.date}</Moment>
                </td>
                <td>{tran.description}</td>
                {tran.amount > 0 ? (
                  <td className="text-success">${tran.amount}</td>
                ) : (
                  <td className="text-danger">${tran.amount}</td>
                )}
              </tr>
            ))}
        </table>
      </div>
      <br></br>
      <h3>
        {total > 0 ? (
          <div>
            Total {name} Owes You ={" "}
            <span className="text-success"> ${total}</span>
          </div>
        ) : (
          <div>
            Total You Owe {name} ={" "}
            <span className="text-danger"> ${total}</span>
          </div>
        )}
      </h3>
    </div>
  );
}

export default Transactions;
