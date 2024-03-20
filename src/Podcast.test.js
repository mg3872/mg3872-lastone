import React from 'react';
import { render } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast component', () => {
  it('renders correctly with valid data', () => {
    const podcastData = {
      title: 'Test Podcast',
      season: 1,
      episode: 'First Episode'
    };

    const { getByText } = render(<Podcast {...podcastData} />);

    expect(getByText('Test Podcast')).toBeInTheDocument();
    expect(getByText('Season 1')).toBeInTheDocument();
    expect(getByText('First Episode')).toBeInTheDocument();
  });

  it('renders correctly when season attribute is missing', () => {
    const podcastData = {
      title: 'Test Podcast',
      episode: 'First Episode'
    };

    const { getByText } = render(<Podcast {...podcastData} />);

    expect(getByText('Test Podcast')).toBeInTheDocument();
    expect(getByText('First Episode')).toBeInTheDocument();
    expect(() => getByText('Season')).toThrow();
  });
});

