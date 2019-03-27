import * as React from 'react';

export default function IndieboundBuyButton({ productId }) {
  return (
    <a href={`https://www.indiebound.org/book/${productId}?aff=rkowert`}>
      <img
        alt="Buy from IndieBound.org"
        src="/indiebound-buy-button.png"
        height="28"
      />
    </a>
  );
}
