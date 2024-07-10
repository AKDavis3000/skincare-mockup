import React from 'react';
import Image from 'next/image';
import CircleText from './CircleText';

export default function Section1() {
  return (
    <section className="section1">
      <div className="burgundy">
        <p className="burgundy_p1">
          Increase your glow with our natural products
        </p>
        <p className="burgundy_p2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias a
          aspernatur iure eligendi. Voluptates quidem ipsam.
        </p>
        <CircleText />
      </div>
    </section>
  );
}

function Star() {
  return (
    <>
      <div className="star">star</div>
    </>
  );
}
