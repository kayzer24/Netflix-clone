import React from 'react';
import { Container, Item, List, Name, Picture, Title } from './styles/profiles';

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function HeaderList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function HeaderUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />;
};

Profiles.Name = function HeaderName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
