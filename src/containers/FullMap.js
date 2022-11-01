import React from 'react';
import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';
import About from './AboutBottom';
import Bottom from './bottom';
import Header from './Header';
export function FullMap() {
  return (
    <Jumbotron.Container>
      <Header />
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
      <About />
      <Bottom />
    </Jumbotron.Container>
  );
}
