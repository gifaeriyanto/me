import { Text } from '@chakra-ui/core';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';

interface ITyping {
  text: string;
  id: string;
  delay?: number;
}

export const Typing: React.FC<ITyping> = ({ text, id, delay = 0 }) => {
  const splittedText = text.split('');
  const className = `typing--${id}`;
  const [cursor, setCursor] = useState('');

  useEffect(() => {
    gsap.fromTo(
      `.${className}`,
      {
        display: 'none',
      },
      {
        delay,
        display: 'inline-block',
        ease: 'none',
        stagger: {
          each: 0.1,
        },
      },
    );
  }, []);

  useEffect(() => {
    const delayInMs = delay * 1000;
    const animDuration = splittedText.length * 100;

    const start = setTimeout(() => {
      setCursor('_');
    }, 100 + delayInMs);

    const end = setTimeout(() => {
      setCursor('');
    }, animDuration + delayInMs);

    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, []);

  return (
    <>
      {splittedText.map((letter, index) => (
        <Text
          as="span"
          whiteSpace="pre-wrap"
          className={`typing ${className}`}
          key={index}
        >
          {letter}
        </Text>
      ))}
      <Text as="span">{cursor}</Text>
    </>
  );
};
