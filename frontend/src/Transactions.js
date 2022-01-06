
import { useEffect, useState } from "react";
import "./Form.css";
function Transactions() {
  const [name, setName] = useState("Ally");
  const [num, setNum] = useState(0);
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   fetch("/test2")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     })
  //     .catch((error) => {});
  // }, []);

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
      <h3>Transactions between {name}</h3>
    </div>
  );
}

export default Transactions;
