import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMuffinsArray } from '../../redux/selectors';

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);
  const dispatch = useDispatch();

  return (
    <ul>
      {muffins.map(muffin => {
        const handleLike = () => {
          dispatch({
            type: 'muffins/like',
            payload: { id: muffin.id }
          });
        };

        return (
          <li key={muffin.id}>
            {muffin.name} <button onClick={handleLike}>Like</button>{' '}
            <i>{muffin.likes}</i>
          </li>
        );
      })}
    </ul>
  );
};

export default Muffins;
