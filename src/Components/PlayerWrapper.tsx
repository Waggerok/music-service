import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Player from './UI/Player/Player'

const PlayerWrapper: React.FC = () => {
  const currentTrack = useSelector((state: RootState) => state.tracks.currentTrack);

  return currentTrack ? <Player /> : null;
};

export default PlayerWrapper;
