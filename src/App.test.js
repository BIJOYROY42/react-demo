import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Bijoy/i);
  expect(nameElement).toBeInTheDocument();
});
