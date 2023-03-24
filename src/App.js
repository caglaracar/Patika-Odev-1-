import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

function App() {
  const [id, setId] = useState("");
  const [userList, setUserList] = useState([]);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userList.find((user) => user.id === parseInt(id));
    if (user) {
      setResult(JSON.stringify(user, null, 2));
    } else {
      setResult(`User with id ${id} not found.`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get();
        setUserList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Lütfen bir Id değeri giriniz:</label>
          <input type="text" id="id" value={id} onChange={handleChange} />
          <button type="submit">Gönder</button>
        </form>
        <div className="console">
          <pre>{result}</pre>
        </div>
      </div>
  );
}

export default App;
