import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
const Card = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const addList = (e) => {
    if(value){
        setList((prev) => {
            return [...prev, value];
          });
          setValue("");
    }
    else{
        alert('Input field is emty')
    }

  };
  const deleteItem = (id) => {
    let result = list.filter((val, index) => {
      return index !== id;
    });
    setList(result);
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="container-card container">
        <div className="sub-head">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="button" onClick={addList}>
            {" "}
            +{" "}
          </button>
        </div>
        <ol>
          {list &&
            list.map((value, index) => {
              return (
                <>
                  <div className="data-list">
                    <li key={index}>{value}</li>
                    <MdDelete
                      key={index}
                      // id={index}
                      icon={MdDelete}
                      className="icon"
                      onClick={() => deleteItem(index)}
                    />
                  </div>
                </>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Card;
