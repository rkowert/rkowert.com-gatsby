import * as React from 'react';

export default function AmazonBuyButton({ productId }) {
  return (
    <a
      href={`https://www.amazon.com/gp/product/${productId}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1537359835&linkCode=as2&tag=rexmac06-20&linkId=2681009eebdd0f4c2d1c73fed462dac8`}
    >
      <img
        alt="Buy from Amazon.com"
        src="https://images-na.ssl-images-amazon.com/images/G/01/associates/remote-buy-box/buy5.gif"
        width="120"
        height="28"
      />
    </a>
  );
}
