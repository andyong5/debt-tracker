import "./List.css";
import Ta from "./Test";
function List() {
  return (
    <div className="spacing">
      <div className="list">
        <h2>List of People</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
        </table>
        <Ta />
      </div>
    </div>
  );
}

export default List;
