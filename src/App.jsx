import { useState } from 'react'
import blogPosts from './data/posts'


function App() {


  return (
    <>
      <div className="container">

        <h1>Lista articoli</h1>

        <ul className='list-group'>
          {blogPosts.map((curPost) =>

            (<li className='list-group-item' key={curPost.id}>{curPost.titolo}</li>)
          )}
        </ul>
      </div>


    </>
  )
}

export default App
