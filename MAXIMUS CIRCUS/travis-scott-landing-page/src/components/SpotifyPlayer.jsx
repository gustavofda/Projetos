import styled from '@emotion/styled';

const SpotifyContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 300px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpotifyPlayer = () => (
  <SpotifyContainer>
    <iframe
      title="Spotify Player"
      src="https://open.spotify.com/embed/album/18NOKLkZETa4sWwLMIm0UZ?utm"
      width="100%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </SpotifyContainer>
);

export default SpotifyPlayer;