import { useEffect, useState } from "react";
import Moment from "react-moment";
import FormSub from "./Form";
function Home({ friends, totals }) {

  const handleSubmission = (event) => {
    event.preventDefault();
    // console.log(name);
    // console.log(num);
    // console.log(description);
    // console.log(action);
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("num", num);
    // formData.append("description", description);

    // setDescription("");
    // setNum(0);
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
        <h1>List of Friends</h1>
        <table>
          <thead>
            <tr>
              <th className="leftborder">Name</th>
              <th className="rightborder">Amount</th>
            </tr>
          </thead>
          {totals &&
            totals.map((total) => (
              <tr key={total}>
                <td>{total.debitor}</td>
                {total.amount > 0 ? (
                  <td className="text-success">${total.amount}</td>
                ) : (
                  <td className="text-danger">${total.amount}</td>
                )}
              </tr>
            ))}
        </table>
        <br></br>
        <FormSub friends={friends}/>
    </div>
  );
}

export default Home;
