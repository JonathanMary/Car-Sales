import React from 'react';

const AdditionalFeature = props => {

  const add = e => {
    console.log("INSIDE")
    props.add(props.feature)
  }
 
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={add} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
