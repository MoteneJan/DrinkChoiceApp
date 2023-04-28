import React, { useState } from "react";

function SavedDecisions() {
  const [savedData, setSavedData] = useState([]);

  function handleSave(inputValues, decision) {
    const newData = { inputValues, decision };
    setSavedData([...savedData, newData]);
  }

  return (
    <div>
      <h2>Saved Decisions</h2>
      <ul>
        {savedData.map((data, index) => (
          <li key={index}>
            <p>Input values: {JSON.stringify(data.inputValues)}</p>
            <p>Decision: {data.decision}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedDecisions;
