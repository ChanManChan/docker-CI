import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Nandagopal changed me on the feature branch for some reason/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link second', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/and save to reload./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link third', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Testing Docker/i);
  expect(linkElement).toBeInTheDocument();
});
