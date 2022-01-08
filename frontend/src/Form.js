import { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";
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
    <div>
      <h3>List of People</h3>
      <form onSubmit={handleSubmission}>
        <div className="direction">
          <Autocomplete suggestions={["Andy", "Sally", "Ally"]} />
          <input
            type="number"
            className="form-control-sm text-success sm"
            placeholder="$"
            onChange={(e) => setNum(e.target.value)}
            required
          ></input>
        </div>
        <input
          className="form-control-sm"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="borrow"
            checked
          ></input>
          <label className="form-check-label">Borrow</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="Return"
          ></input>
          <label className="form-check-label">Return</label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSub;
