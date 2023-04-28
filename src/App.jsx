import React from "react";
import DrinkChoiceForm from "./DrinkChoiceForm";
import SavedDecisions from "./SavedDecisions";


function App() {
  return (
    <div>
      <h1>Drink Choice</h1>
      <DrinkChoiceForm onSave={handleSave} />
      <SavedDecisions />
    </div>
  );
}

export default App;

