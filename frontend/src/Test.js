import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const adjust = (item, id, addorsubtract) => (event) => {
    // let items = pledges.filter((pledge) => pledge.name !== name);
    // setpledges(items);
    event.preventdefault();
    const cost = document.getelementbyid(id).value;
    if (addorsubtract) {
      console.log("adding money");
      if(item.total > 0){
        items[item.id-1].total = cost + items[item.id-1].total;
        console.log(items[item.id-1]);
      }
    } else {
      console.log("subtracting money");
      if (item.total - cost == 0) {
        console.log("delete");
      } else {
        console.log("i owe money now");
      }
      items[item.id-1].total = items[item.id-1].total - cost;
        console.log(items[item.id-1]);
    }
    const formdata = new formdata();
    // formdata.append("name", name);
    // fetch("/delete", {
    //   method: "delete",
    //   body: formdata,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("total")}
              className={getClassNamesFor("total")}
            >
              Total
            </button>
          </th>
          <th>+</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              $
              {item.total > 0 ? (
                <span className="text-success">{item.total}</span>
              ) : (
                <span className="text-danger">{item.total}</span>
              )}
            </td>
            <td>
              <form onSubmit={adjust(item, item.id + "_add", true)}>
                <input
                  id={item.id + "_add"}
                  type="number"
                  className="form-control form-control-sm text-danger"
                  placeholder="$"
                ></input>
              </form>
            </td>
            <td>
              <form onSubmit={adjust(item, item.id + "_minus", false)}>
                <input
                  id={item.id + "_minus"}
                  type="text"
                  className="form-control form-control-sm text-success"
                  placeholder="$"
                ></input>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Ta() {
  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, name: "Ada", total: 4.9 },
          { id: 2, name: "Sally", total: 1.9 },
          { id: 3, name: "Mom", total: 2.4 },
          { id: 4, name: "Dad", total: 3.9 },
          { id: 5, name: "Ally", total: 0.9 },
          { id: 6, name: "Sour Cream ", total: 2.9 },
          { id: 7, name: "Fancy French Cheese 🇫🇷", total: -99 },
        ]}
      />
    </div>
  );
}
