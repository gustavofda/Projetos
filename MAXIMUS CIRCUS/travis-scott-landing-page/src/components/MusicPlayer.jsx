import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import SpotifyPlayer from './SpotifyPlayer';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MusicPlayerButton = styled(motion.div)`
  width: 30px;
  height: 30px;
  background: url('/images/play-icon.png') no-repeat center center;
  background-size: cover;
  cursor: pointer;
  margin-left: 10px;

  &.playing {
    background: url('/images/pause-icon.png') no-repeat center center;
    background-size: cover;
  }
`;

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      {isPlaying && <SpotifyPlayer />}
      <MusicPlayerButton
        className={isPlaying ? 'playing' : ''}
        onClick={togglePlay}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </PlayerContainer>
  );
};

export default MusicPlayer;