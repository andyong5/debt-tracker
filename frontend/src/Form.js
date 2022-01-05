import { useEffect, useState } from "react";
import "./Form.css";
function FormSub() {
  const [name, setName] = useState("");
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
    <div className="spacing">
      <form className="row" onSubmit={handleSubmission}>
        <input
          className="form-control form-control-sm"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required 
        ></input>
        <input
          type="number"
          className="form-control form-control-sm text-success sm"
          placeholder=""
          onChange={(e) => setNum(e.target.value)}
          required
        ></input>
        <input
          className="form-control form-control-sm"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormSub;
