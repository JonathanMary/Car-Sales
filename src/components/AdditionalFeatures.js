import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from '../actions';

const AdditionalFeatures = props => {
  console.log("AdditionalFeatures props: ", props)

  const add = props => {
    console.log("OUTSIDE: ", props)
    addFeature(props);
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} add={add} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
