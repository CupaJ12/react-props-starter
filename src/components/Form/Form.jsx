import { useState } from "react";

function Form({ addCreatureFunction }) {
  const [newCreatureName, setNewCreatureName] = useState("");
  const [newCreatureOrigin, setNewCreatureOrigin] = useState("");

  const handleSubmit = (event) => {
    console.log("Submit");
    event.preventDefault();
    addCreatureFunction( newCreatureName, newCreatureOrigin);
    setNewCreatureName('');
    setNewCreatureOrigin('')
  };

  return (<>
    <h1>form component</h1>
    <form onSubmit={addCreatureFunction()}>
      <label>Name:</label>
      <input
        onChange={(event) => setNewCreatureName(event.target.value)}
        value={newCreatureName}
      />
      <label>Origin:</label>
      <input
        onChange={(event) => setNewCreatureOrigin(event.target.value)}
        value={newCreatureOrigin}
      />
      <button type="submit">Add New Creature</button>
    </form>
  </>)
}

export default Form;
