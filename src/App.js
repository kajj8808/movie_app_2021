import React from "react";
import PropTypes from "prop-types";

const cards = [
  {
    id : 1,
    name : "Initial",
    image : "https://static.wikia.nocookie.net/princess-connect/images/a/aa/6KyaruUB_%28gif%29.gif",
    rating : 9.0
  },
  {
    id : 2,
    name : "Summer",
    image : "https://static.wikia.nocookie.net/princess-connect/images/1/13/FullArtSummerKyaru.png",
    rating : 9.5
  },
  {
    id : 3,
    name : "New Year",
    image : "https://static.wikia.nocookie.net/princess-connect/images/1/10/FullArtNewYearKyaru.png",
    rating : 10
  },
  {
    id : 4,
    name : "Princess",
    image : "https://static.wikia.nocookie.net/princess-connect/images/2/2a/FullArtPKyaru.png",
    rating : 9.5
  }
]

const renderCards = (card) =>{
  return <Karyl key = {card.id} name = {card.name} image = {card.image} rating = {card.rating} />
}

const Karyl = ({ name , image , rating }) =>{
  return(
    <div>
      <h1> Karyl / {name} </h1>
      <h4> {rating} </h4>
      <img src = {image} alt = {name}></img>

    </div>
  )
}

Karyl.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};


function App() {
  return (
    <div>
      {cards.map(renderCards)}
    </div>
  );

}

export default App;
