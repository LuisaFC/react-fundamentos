import React from 'react';
import Post from './Post'
import Header from './Header'

const posts = [
  {title: 'Titulo01', subtitle: 'Sub01', likes: 20},
  {title: 'Titulo02', subtitle: 'Sub02',  likes: 40},
  {title: 'Titulo03', subtitle: 'Sub03',  likes: 50},
]

function App(){
  return (
    <>
      <Header> 
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          likes = {post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  )
}

export default App