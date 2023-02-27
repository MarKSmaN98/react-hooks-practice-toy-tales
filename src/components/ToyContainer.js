import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [toyArray, setToyArray] = useState([]);
  // let toys = [];

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toyArray => {
        setToyArray(toyArray);
        setIsLoaded(true);
      });
  }, [toyArray]);

  const onCardDelete = (id) => {
    let copyArr = [...toyArray];
    copyArr = copyArr.filter(toy => {
      return (toy.id !== id);
    });
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => {
      setToyArray(copyArr);
    });
  }

  let toyList = toyArray.map((item) => {
    return (<ToyCard key={item.id} id={item.id} toy={item} onCardDelete={onCardDelete} />)
  })

  return (
    <>
      {
        isLoaded? (toyList) : (<h1>Loading....</h1>)
      }
    </>
  )

  // const OnLoadToys = () => {
  //   fetch("http://localhost:3001/toys")
  //     .then(res => res.json())
  //     .then(toyArray => {
  //       setToyArray(toyArray);
  //       setIsLoaded(true);
  //       return <RenderToys arr={toyArray}/>
  //     })
  //     return <>Loading...</>
  // }

  // const Init = () => {
  //   if(isLoaded === false) {
  //     return <OnLoadToys />
  //   }
  //   else {
  //     return <></>
  //   }
  // }


  // const RenderToys = ({arr}) => {
  //   let toyList = toyArray.map((item) => {return (<ToyCard key={item.id} id={item.id} toy={item} onCardDelete={onCardDelete} />)})
  //   return toyList
  // }

  // const AddOnToy = () => {

  // }

  // return (
  //   <div>
  //     <Init />
  //     {isLoaded? <RenderToys arr={toyArray} /> : <>Loading...</>}
  //   </div>
  // )


}

export default ToyContainer;
