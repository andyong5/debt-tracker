import { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";
import "./Form.css";
function FormSub({ friends, currUser }) {
  const [name, setName] = useState(currUser);
  const [num, setNum] = useState(null);
  const [description, setDescription] = useState("");
  const [action, setAction] = useState("borrow");

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(num);
    console.log(description);
    console.log(action);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("num", num);
    formData.append("description", description);

    setDescription("");
    setNum(0);
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
      <form onSubmit={handleSubmission}>
        <div className="direction">
          {name ? null : (
            <Autocomplete suggestions={friends} />
          )}
          <input
            className="form-control-sm"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <input
            type="number"
            id="money"
            className="form-control-sm text-success sm"
            placeholder="$"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            required
          ></input>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              onClick={() => setAction("borrow")}
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
              onClick={() => setAction("return")}
            ></input>
            <label className="form-check-label">Return</label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            id="submit-btn"
            className="btn btn-primary btn-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSub;
