import React from 'react';
import { useSelector } from 'react-redux';
import { selectMuffinsArray } from '../../redux/selectors';

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);

  return (
    <ul>
      {muffins.map(muffin => {
        return <li key={muffin.id}>{muffin.name}</li>;
      })}
    </ul>
  );
};

export default Muffins;
