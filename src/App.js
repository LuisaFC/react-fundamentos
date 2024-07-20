import React, { useState } from 'react';
import Post from './Post'
import Header from './Header'
import {ThemeProvider} from './ThemeContext'
import styles from './App'

function App(){

  const [posts, setPosts] = useState(
    [
      {id: Math.random(), title: 'Titulo01', subtitle: 'Sub01', likes: 20, read: false},
      {id: Math.random(), title: 'Titulo02', subtitle: 'Sub02',  likes: 40, read: true},
      {id: Math.random(), title: 'Titulo03', subtitle: 'Sub03',  likes: 50,  read: true},
    ]
  )
  
  function handleRefresh(){
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(), 
        title: `Titulo0${prevState.length + 1}`, 
        subtitle: `Sub0${prevState.length + 1}`, 
        likes: 20},
    ])
  }

  function handleRemove(postId) {
    setPosts((prevState) => prevState.filter(post => post.id !== postId))
  }
  return (
  <ThemeProvider>
      <Header> 
        <h2 className={styles.teste}>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemove}
          post={post}
        />
      ))}
    </ThemeProvider>
  )
}

export default App