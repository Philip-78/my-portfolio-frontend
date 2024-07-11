import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Header from '../src/components/Header';

test('renders the header with correct information', () => {
  const { getByAltText, getByText } = render(<Header />);

  // Check if the profile picture is rendered
  expect(getByAltText('Philip Idiare Oghenerukevwe')).toBeInTheDocument();

  // Check if the header text is rendered
  expect(getByText('Philip Idiare Oghenerukevwe')).toBeInTheDocument();
  expect(
    getByText('Student of Innopolis University, Innopolis, Russia.')
  ).toBeInTheDocument();
});
