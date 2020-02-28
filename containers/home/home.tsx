import React from 'react';
import styled from '@emotion/styled';

export const Content = styled.div({
  fontWeight: 400,
});

export const Container = styled.div({
  maxWidth: 800,
  margin: 'auto',
  [`${Content}`]: {
    fontSize: 30,
  },
});

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente atque
        unde molestiae.
      </Content>
    </Container>
  );
};

export default Home;
