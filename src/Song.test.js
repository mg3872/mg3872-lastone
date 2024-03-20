import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Song from './Song';

describe('Song component', () => {
  it('renders correctly with valid data', () => {
    const songData = {
      title: 'Test Song',
      artist: 'Test Artist',
      year: 2000
    };

    const { getByText } = render(<Song {...songData} />);

    expect(getByText('Test Song')).toBeInTheDocument();
    expect(getByText('Test Artist')).toBeInTheDocument();
    expect(getByText('2000')).toBeInTheDocument();
  });

  it('throws an error with invalid year data', () => {
    const songData = {
      title: 'Test Song',
      artist: 'Test Artist',
      year: 'Two Thousand'
    };

    expect(() => render(<Song {...songData} />)).toThrow();
  });
});

