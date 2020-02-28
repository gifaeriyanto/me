import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../';
import HomePage from '../../../pages';

test('Home render', () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});

test('Home Page render', () => {
  const { container } = render(<HomePage />);

  expect(container).toMatchSnapshot();
});
