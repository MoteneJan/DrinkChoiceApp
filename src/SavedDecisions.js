import React, { useState } from "react";

function SavedDecisions() {
    const [savedData, setSavedData] = useState([]);

    function handleSave(inputValues, decision) {
        const newData = { inputValues, decision };
        setSavedData([...savedData, newData]);
    }
}

export default SavedDecisions;