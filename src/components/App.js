import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([]);
  const [dogInfo, setDogInfo] = useState("");
  const [button, setButton] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  function handleToggleDog(updatedDog) {
    const updatedDogs = dogs.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogs(updatedDogs);
  }

  function setToggleButton() {
    setButton((button) => !button);
  }

  //filter if (button === true)
  //then return dogs.isGoodDog === true
  //if not true, then return dogs

  const filteredDog = dogs.filter((dog) =>
    button === true ? dog.isGoodDog === true : dog
  );

  // const selectedDog = dogs.find((dog) => dog.id === dogInfo.id);
  // console.log(selectedDog);

  return (
    <div className="App">
      <Filter button={button} onToggleButton={setToggleButton} />
      <DogBar dogs={filteredDog} onClickRender={setDogInfo} />
      <DogInfo dog={dogInfo} onClickToggle={handleToggleDog} />
    </div>
  );
}

export default App;
