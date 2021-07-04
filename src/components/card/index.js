import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProp }) {
  return <Group {...restProp}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProp }) {
  return <Title {...restProp}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProp }) {
  return <SubTitle {...restProp}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProp }) {
  return <Text {...restProp}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProp }) {
  return <Meta {...restProp}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...restProp }) {
  return <Entities {...restProp}>{children}</Entities>;
};

Card.Item = function CardItem({ item, children, ...restProp }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProp}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProp }) {
  return <Image {...restProp} />;
};

Card.Feature = function CardFeature({ children, category, ...restProp }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  return showFeature ? (
    <Feature {...restProp} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProp}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
