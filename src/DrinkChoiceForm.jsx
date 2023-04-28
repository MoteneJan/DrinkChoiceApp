import React, { useState, useEffect, useRef } from "react";
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

    if (isAuthenticated) {
      // Query the model and display the decision
      axios.post("https://api.example.com/tom/drink-choice/query", formData).then((response) => {
        alert(`Decision: ${response.data}`);
      });
    }
  }

    return (
        <div>
          <h2>{model}</h2>

         
          <form onSubmit={handleSubmit}>
            {variables.map((variable) => (
              <div key={variable.name}>
                <label>{variable.label}</label>
                <input name={variable.name} type={variable.type} required={variable.required} />
              </div>
            ))}
            <button type="submit">Get Decision</button>
          </form>
          
        </div>
    );
}
export default DrinkChoiceForm;