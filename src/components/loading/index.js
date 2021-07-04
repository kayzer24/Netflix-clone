import React from 'react';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

export default function Loading({ src, ...restProp }) {
  return (
    <Spinner {...restProp}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
