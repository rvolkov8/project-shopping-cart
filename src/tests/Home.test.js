import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/main/Home';

describe.only('Home component', () => {
  test('renders the home items correctly', () => {
    render(<Home />, { wrapper: MemoryRouter });

    expect(
      screen.getByRole('button', { name: 'Shop Now' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Welcome to Marvel Poster Universe/i)
    ).toBeInTheDocument();
  });
});
