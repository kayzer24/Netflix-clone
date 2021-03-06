import React from 'react';
import { Break, Button, Container, Input, Text } from './styles/opt-form';

export default function OptForm({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProp }) {
  return <Input {...restProp} />;
};

OptForm.Button = function OptFormButton({ children, ...restProp }) {
  return (
    <Button {...restProp}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProp }) {
  return <Text {...restProp}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ children, ...restProp }) {
  return <Break {...restProp} />;
};
