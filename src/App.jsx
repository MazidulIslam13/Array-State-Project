import { useState } from "react";
import "./App.css";

// Default value for the array
const defaultValue = ["A", "B", "C"];

function App() {
  // State hook to manage the array
  const [array, setArray] = useState(defaultValue);

  // Function to remove the first element from the array
  function removeFirstElement() {
    setArray((currentArray) => currentArray.slice(1));
  }

  // Function to remove a specific letter from the array
  function removeSpecificLetter(letter) {
    setArray((currentArray) => currentArray.filter((element) => element !== letter));
  }

  // Function to add a new letter to the start of the array
  function addToLetterStart(letter) {
    setArray((currentArray) => [letter, ...currentArray]);
  }

  // Function to add a new letter to the end of the array
  function addToLetterEnd(letter) {
    setArray((currentArray) => [...currentArray, letter]);
  }

  // Function to clear the array (set it to an empty array)
  function clear() {
    setArray([]);
  }

  // Function to reset the array to its default value
  function reset() {
    setArray(defaultValue);
  }

  return (
    <>
      <div>
        {/* Button to remove the first element */}
        <button className="btn" onClick={removeFirstElement}>
          Remove First Element
        </button>

        {/* Button to remove all instances of letter "B" */}
        <button
          className="btn"
          onClick={() => removeSpecificLetter("B")}
        >
          Remove All B 
        </button>

        {/* Button to add letter "B" to the start of the array */}
        <button
          className="btn"
          onClick={() => addToLetterStart("B")}
        >
          Add to Start
        </button>

        {/* Button to add letter "B" to the end of the array */}
        <button
          className="btn"
          onClick={() => addToLetterEnd("B")}
        >
          Add to End
        </button>

        {/* Button to clear the array */}
        <button
          className="btn"
          onClick={clear}
        >
          Clear
        </button>

        {/* Button to reset the array to default value */}
        <button
          className="btn"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      
      {/* Display the current state of the array */}
      <h1>{array.join(", ")}</h1>
    </>
  );
}

export default App;
