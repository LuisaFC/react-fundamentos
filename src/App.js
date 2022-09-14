import React from 'react';
import Post from './Post'
import Header from './Header'

function App(){
  return (
    <>
      <Header title="JStack's Blog"> 
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post 
        post={{
          title: 'Posts da semana 01',
          subtitle: 'Posts da semana 01'
        }}
      />

<Post 
        post={{
          title: 'Posts da semana 02',
          subtitle: 'Posts da semana 02'
        }}
      />
    </>
  )
}

export default App