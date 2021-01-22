import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '.';

afterEach(cleanup);

describe('Application renders', () => {
  it('renders', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
