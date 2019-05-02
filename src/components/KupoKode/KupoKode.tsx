import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Moogle from './Moogle';

const MAX_MOOGLES = 64;

const KupoStyle = createGlobalStyle`
h1,h2,h3,h4,h5,h6,
a,
h1 a,h2 a,h3 a,h4 a,h5 a,h6 a,
a:link{color:#cc0066 !important;font-family:"Comic Sans MS", "Marker Felt", sans-serif !important;}
`;

const kupoifyHeadings = () => {
  const i = 6;
  for (let i = 2; i < 7; ++i) {
    // Get all headings of this level
    const headings = document.getElementsByTagName(`h${i}`);
    // Loop throught all the headings
    for (let j = 0; j < headings.length; ++j) {
      let target = headings[j];
      if (target.children.length) {
        target = target.lastElementChild;
      }
      target.innerHTML = `${target.innerHTML}, Kupo!`;
    }
  }
};

export default function() {
  const [moogles, setMoogles] = useState([]);

  function addMoogle() {
    if (moogles.length >= MAX_MOOGLES) return;

    const randomHeight = Math.random() * 0.75;
    const windowHeight = document.documentElement.clientHeight;
    const moogle = {
      index: Math.floor(Math.random() * 9),
      left: `${Math.round(Math.random() * 90)}%`,
      mirrored: Math.floor(Math.random() * 2) === 1,
      top: `${Math.round(windowHeight * randomHeight)}px`,
    };
    moogles.push(moogle);
    setMoogles([...moogles]);

    if (moogles.length === 1) {
      kupoifyHeadings();
    }
  }

  useEffect(() => {
    const keys = [];
    const konami =
      'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';

    function handleKeyDown(event: KeyboardEvent) {
      // Store this key
      keys.push(event.key);

      // Has the full code been typed?
      if (keys.toString().indexOf(konami) >= 0) {
        // Stop listening for the code
        document.removeEventListener('keydown', handleKeyDown);
        addMoogle();
        document.addEventListener('keydown', addMoogle);
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', addMoogle);
    };
  }, []);

  return (
    <div id="KupoKode">
      {moogles.length > 0 ? <KupoStyle /> : null}
      {moogles.map((moogle, i) => (
        <Moogle
          key={`${i}:${moogle.index}`}
          index={moogle.index}
          left={moogle.left}
          onClick={addMoogle}
          top={moogle.top}
        />
      ))}
    </div>
  );
}
