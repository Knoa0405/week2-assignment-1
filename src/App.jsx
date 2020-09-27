
import React, { useState } from 'react';

import Buttons from './Buttons';
import ClickMeCounter from './ClickMeCounter';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickButton(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <>
      <ClickMeCounter
        count={count}
        onClick={handleClickButton}
      />

      <Buttons
        onClick={handleClickButton}
      />
    </>
  );
}

export default App;
