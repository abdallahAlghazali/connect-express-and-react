import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/submit-data", {
        data: data,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Data:
          <input type="text" value={data} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
