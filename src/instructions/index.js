import React from 'react';
import Instructions from './Instructions';

import './index.css';

import exercise1 from './exercises/exercise-01';
import exercise2 from './exercises/exercise-02';
import exercise3 from './exercises/exercise-03';

export const Exercise1Instructions = () => (
  <Instructions exercise={exercise1}/>
);

export const Exercise2Instructions = () => (
  <Instructions exercise={exercise2}/>
);

export const Exercise3Instructions = () => (
  <Instructions exercise={exercise3}/>
);
