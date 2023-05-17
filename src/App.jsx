import React from "react";
import DrinkChoiceForm from "./DrinkChoiceForm";
import SavedDecisions from "./SavedDecisions";

function App() {
  return (
    <div>
      <h1>Drink Choice</h1>
      <DrinkChoiceForm />
      <SavedDecisions onSave={handleSave} />
    </div>
  );
}
export default App;

