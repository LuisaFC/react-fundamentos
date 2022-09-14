import React from 'react';
import Post from './Post'

function App(){
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post 
        post={{
          title: 'Posts da semana 01',
          subtitle: 'Posts da semana 01'
        }}
      />
    </>
  )
}

export default App