import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import About from '../src/components/About';

test('renders the about section with correct information', () => {
  const { getByText } = render(<About />);

  // Check if the about section content is rendered
  expect(getByText('About Me')).toBeInTheDocument();
  expect(
    getByText(
      'I am a student at Innopolis University, studying computer science.'
    )
  ).toBeInTheDocument();
});
