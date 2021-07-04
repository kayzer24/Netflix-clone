import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Inner, Overlay } from './styles/playes';

export const PlayerContenxt = createContext();

export default function Player({ children, ...restProp }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContenxt.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProp}>{children}</Container>
    </PlayerContenxt.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContenxt);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProp }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContenxt);

  return (
    <Button onClick={() => setShowPlayer((state) => !state)} {...restProp}>
      Play
    </Button>
  );
};
