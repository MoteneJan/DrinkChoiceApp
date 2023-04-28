import React, { useState, useEffect } from "react";
import axios from "axios";

function DrinkChoiceForm() {
    const [model, setModel] = useState("");
    const [variables, setVariables] = useState([]);

    useEffect(() => {
        // Fetch metadata from TOM API
        axios.get("https://api.example.com/tom/drink-choice/metadata").then((response) => {
            setModel(response.data.name);
            setVariables(response.data.variables);
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // Query the model and display the decision
        axios.post("https://api.example.com/tom/drink-choice/query", formData).then((response) => {
            alert(`Decision: ${response.data}`);
        });
    }
}

export default DrinkChoiceForm;