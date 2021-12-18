import React from "react";

function DogBar({ dogs, onClickRender }) {
  const dogInfo = dogs.map((dog) => (
    <span key={dog.id} onClick={() => onClickRender(dog)}>
      {dog.name}
    </span>
  ));

  return <div id="dog-bar">{dogInfo}</div>;
}

export default DogBar;
