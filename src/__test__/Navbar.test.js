import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('it should redner navbar', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const homeLink = getByText('Home');
  const newsLink = getByText('News');

  expect(homeLink).toBeInTheDocument();
  expect(newsLink).toBeInTheDocument();
});
