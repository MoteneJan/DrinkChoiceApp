import React, { useState, useEffect, useRef} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function DrinkChoiceForm() {
  const [model, setModel] = useState("");
  const [variables, setVariables] = useState([]);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch metadata from TOM API
      axios.get("https://api.example.com/tom/drink-choice/metadata").then((response) => {
        setModel(response.data.name);
        setVariables(response.data.variables);
      });
    }
  }, [isAuthenticated]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    axios.post('/api/drinks', { name, type, rating })
      .then((response) => {
        console.log('Drink saved successfully');
      })
      .catch((error) => {
        console.error(error);
      });

    if (isAuthenticated) {
      // Query the model and display the decision
      axios.post("https://api.example.com/tom/drink-choice/query", formData).then((response) => {
        alert(`Decision: ${response.data}`);
      });
    }
  }

  return (
    <div>
      <h1>Drink Choice Model</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={DrinkName} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          <input type="text" value={type} onChange={(event) => setType(event.target.value)} />
        </label>
        <br />
        <label>
          <input type="number" value={rating} onChange={(event) => setRating(event.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
export default DrinkChoiceForm;