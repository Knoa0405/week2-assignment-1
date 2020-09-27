import React from 'react';

import ClickMeCounter from './ClickMeCounter';
import Buttons from './Buttons';

function Page({ count, onClick }) {
  return (
    <>
      <ClickMeCounter
        count={count}
        onClick={onClick}
      />

      <Buttons
        onClick={onClick}
      />
    </>
  );
}

export default Page;
