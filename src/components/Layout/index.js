import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme }) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} />
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} />
    </>
  );
}