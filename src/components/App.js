import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toyArray => {
        setToyArr(toyArray);
      });
    }, []);
  
    const [toyArr, setToyArr] = useState({});
  
    const addToy = (toyObj) => {
      let newArr = [...toyArr, toyObj]
      fetch('http://localhost:3001/toys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(toyObj)
      })
      .then(res => res.json())
      .then(res => {
        setToyArr(newArr);
      });
      
    }

  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm add={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
    </>
  );
}

export default App;
