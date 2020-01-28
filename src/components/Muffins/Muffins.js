import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMuffinsArray,
  selectMuffinsLoading,
  selectMuffinsLoadError
} from '../../redux/muffins';
import { likeMuffin, loadMuffins } from '../../redux/muffins';

const Muffins = () => {
  const muffins = useSelector(selectMuffinsArray);
  const muffinsLoading = useSelector(selectMuffinsLoading);
  const loadError = useSelector(selectMuffinsLoadError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMuffins());
  }, []);

  return muffinsLoading ? (
    <p>Loading...</p>
  ) : loadError ? (
    <p>{loadError}</p>
  ) : muffins.length ? (
    <ul>
      {muffins.map(muffin => {
        const handleLike = () => {
          dispatch(likeMuffin(muffin.id));
        };

        return (
          <li key={muffin.id}>
            {muffin.name} <button onClick={handleLike}>Like</button>{' '}
            <i>{muffin.likes}</i>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Oh no! Muffins have finished!</p>
  );
};

export default Muffins;
