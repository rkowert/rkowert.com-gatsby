import * as React from 'react';

import buttonImage from './IndieboundBuyButton.png';

export default function IndieboundBuyButton({ productId }) {
  return (
    <a href={`https://www.indiebound.org/book/${productId}?aff=rkowert`}>
      <img alt="Buy from IndieBound.org" src={buttonImage} height="28" />
    </a>
  );
}
