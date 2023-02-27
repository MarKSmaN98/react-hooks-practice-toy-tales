import React, {useState, useEffect} from "react";

function ToyForm({add}) {

  const submitFunction = (e) => {
    e.preventDefault();
    let toy = {
      name: inputName,
      image: inputImage
    }
    add(toy);
  }
  const [inputName, setInputName] = useState('');
  const nameHandler = (e) => {
    setInputName(e.target.value);

  }

  const [inputImage, setInputImage] = useState('');
  const imageHandler = (e) => {
    setInputImage(e.target.value);

  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitFunction}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={nameHandler}
          value={inputName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={imageHandler}
          value={inputImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
