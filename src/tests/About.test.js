import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/main/About';

describe('About component', () => {
  test('renders the About component correctly', () => {
    render(<About />);
    expect(
      screen.getByText(/Welcome to Marvel Poster Universe/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Curating Marvel's Finest Artwork/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/At Marvel Poster Universe/i)).toBeInTheDocument();
    expect(screen.getByText(/Our mission/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Transform Your Living Space with Premium Quality Marvel Posters/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/With our carefully selected/i)
    ).toBeInTheDocument();
  });
});
