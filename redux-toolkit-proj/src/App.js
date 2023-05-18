import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./feautes/User";
import Modal from "./modal";
function App() {
  const [name, setName] = React.useState("");
  const [username, setUserName] = React.useState("");

  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [displayUser, setDisplayUser] = React.useState(false);
  const [filterCard, setFilterCard] = React.useState(userList);

  const changeDisplayUser = () => {
    setDisplayUser((displayUser) => !displayUser);
  };

  const filteredItems = (id) => {
    let result = userList.filter((user) => user.id === id);
    setFilterCard(...result);
    changeDisplayUser();
  };

  return (
    <>
      <div className="App">
        <div className="addUser">
          <input
            type="text"
            value={name}
            placeholder="Name..."
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button
            onClick={() =>
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              )
            }
          >
            Add User
          </button>
        </div>
        <div className="displayUsers">
          {userList.map((user, index) => {
            return (
              <>
                <h1 key={index} onClick={() => filteredItems(user.id)}>
                  {user.name}
                </h1>
              </>
              );
              })}
                {displayUser ? (
                  <Modal
                    filterCard={filterCard}
                    dispatch={dispatch}
                  />
                ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
