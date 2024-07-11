import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Skills from '../src/components/Skills';

test('renders the skills section', () => {
  const { getByText } = render(<Skills />);

  // Check if the section title is rendered
  expect(getByText('Career skills & other interests')).toBeInTheDocument();

  // Check if tech skills are rendered
  expect(getByText('UI/UX Design')).toBeInTheDocument();
  expect(getByText('Front-End Development')).toBeInTheDocument();
  expect(getByText('Back-End Development with NestJs')).toBeInTheDocument();

  // Check if other skills are rendered
  expect(getByText('Also I Like Sports')).toBeInTheDocument();
  expect(getByText('Football')).toBeInTheDocument();
  expect(getByText('Bodybuilding')).toBeInTheDocument();
});
