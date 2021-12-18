import React from "react";

function DogInfo({ dog, onClickToggle }) {
  function handleClick() {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !dog.isGoodDog,
      }),
    })
      .then((res) => res.json())
      .then((updatedData) => onClickToggle(updatedData));
  }

  return (
    <div id="dog-summary-container">
      {dog === "" ? (
        <h2>Please select dog!</h2>
      ) : (
        <>
          <h1>DOGGO:</h1>
          <div id="dog-info">
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <button onClick={handleClick}>
              {dog.isGoodDog ? "Good" : "Bad"} Dog!
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DogInfo;
