import { useState } from "react";
import "./App.css";

// Default value for the array
const defaultValue = ["A", "B", "C"];

function App() {
  // State hook to manage the array and the input value
  const [array, setArray] = useState(defaultValue);
  const [value, setValue] = useState("");

  // Function to remove the first element from the array
  function removeFirstElement() {
    setArray((currentArray) => currentArray.slice(1));
  }

  // Function to remove a specific letter from the array
  function removeSpecificLetter(letter) {
    setArray((currentArray) =>
      currentArray.filter((element) => element !== letter)
    );
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

  // Function to update all instances of "A" to "H"
  function updateAtoH() {
    setArray((currentArray) =>
      currentArray.map((element) => (element === "A" ? "H" : element))
    );
  }

  // Function to add a letter at a specific index
  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      if (index >= currentArray.length) {
        // Append the letter at the end if index is out of bounds
        return [...currentArray, letter];
      } else {
        // Insert the letter at the specified index
        return [
          ...currentArray.slice(0, index),
          letter,
          ...currentArray.slice(index),
        ];
      }
    });
  }

  return (
    <>
      <div>
        {/* Button to remove the first element */}
        <button className="btn" onClick={removeFirstElement}>
          Remove First Element
        </button>

        {/* Button to remove all instances of letter "B" */}
        <button className="btn" onClick={() => removeSpecificLetter("B")}>
          Remove All B
        </button>

        {/* Button to add letter "B" to the start of the array */}
        <button className="btn" onClick={() => addToLetterStart("B")}>
          Add to Start
        </button>

        {/* Button to add letter "B" to the end of the array */}
        <button className="btn" onClick={() => addToLetterEnd("B")}>
          Add to End
        </button>

        {/* Button to clear the array */}
        <button className="btn" onClick={clear}>
          Clear
        </button>

        {/* Button to reset the array to default value */}
        <button className="btn" onClick={reset}>
          Reset
        </button>

        {/* Button to update all instances of "A" to "H" */}
        <button className="btn" onClick={updateAtoH}>
          Update A to H
        </button>

        {/* Input field for new letter */}
        <input className="input-field"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* Button to add the input value to the start of the array */}
        <button
          className="btn"
          onClick={() => {
            if (value) {
              addToLetterStart(value);
              setValue(""); // Clear the input field after adding
            }
          }}
        >
          Add to Start
        </button>

        {/* Button to add letter "d" at index 3 */}
        <button
          className="btn"
          onClick={() => addLetterAtIndex("d", 3)}
        >
          Add d at Index 3
        </button>
      </div>

      {/* Display the current state of the array */}
      <h1>{array.join(", ")}</h1>
    </>
  );
}

export default App;
