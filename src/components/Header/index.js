import React from 'react';

import { Container } from './styles';

export default function Header({onToggleTheme}) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>🌞</button>
    </Container>
  );
}