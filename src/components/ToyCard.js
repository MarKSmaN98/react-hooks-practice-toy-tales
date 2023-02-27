import React, {useState} from "react";

function ToyCard(props) {
  //console.log(props);
  const {name, image, likes} = props.toy
  const {id, onCardDelete} = props
  const[likesSet, setLikesSet] = useState(likes);
  const[deleteSet, setDeleteSet] = useState(false);
  //console.log('function: ', onCardDelete);

  const likesHandler = (e) => {
    let newLikes = likesSet + 1;
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: newLikes})
    })
      .then(res => res.json())
      .then(res => {
        setLikesSet(likesSet + 1);
      });
  }

  const deleteHandler = (e) => {
    onCardDelete(id);
  }

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likesSet} Likes </p>
      <button className="like-btn" onClick={likesHandler}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onCardDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
