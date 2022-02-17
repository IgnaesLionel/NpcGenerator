import React, { useState } from "react";
import data from "../../data/data.json";
const PnjGenerator = () => {
  const [poids, setPoids] = useState(null);
  const [taille, setTaille] = useState(null);
  const [teint, setTeint] = useState(null);
  const [carac, setCarac] = useState({ poids: null, taille: null });

  const generate = () => {
    const randomNumbers = [
      Math.floor(Math.random() * 100 + 1),
      Math.floor(Math.random() * 100 + 1),
      Math.floor(Math.random() * 100 + 1),
    ];

    const filteredPnjPoids = data[0].filter(function (carac) {
      return carac[1] <= randomNumbers[0] && carac[2] >= randomNumbers[0];
    });

    setPoids(filteredPnjPoids[0][0]);

    const filteredPnjTaille = data[1].filter(function (carac) {
      return carac[1] <= randomNumbers[1] && carac[2] >= randomNumbers[1];
    });

    setTaille(filteredPnjTaille[0][0]);

    const filteredPnjTeint = data[2].filter(function (carac) {
      return carac[1] <= randomNumbers[2] && carac[2] >= randomNumbers[2];
    });

    setTeint(filteredPnjTeint[0][0]);
  };

  const generate2 = () => {
    let randomNumbers = [
      Math.floor(Math.random() * 100 + 1),
      Math.floor(Math.random() * 100 + 1),
      Math.floor(Math.random() * 100 + 1),
    ];

    let filteredData = data[0].filter(function (carac) {
      return carac[1] <= randomNumbers[0] && carac[2] >= randomNumbers[0];
    });

    console.log(filteredData);
  };

  return (
    <div>
      <h4>Pnj Generator</h4>
      <button className="myButton" onClick={generate}>
        Générer
      </button>
      <br></br>
      Poids : {poids}
      <br></br>
      Taille : {taille}
      <br></br>
      Teint : {teint}
      <br></br>
      <button className="myButton" onClick={generate2}>
        Générer
      </button>
    </div>
  );
};

export default PnjGenerator;
