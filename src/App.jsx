import { useState } from 'react'
import blogPosts from './data/posts'
import FormComponent from './components/FormComponent';
import ListItemmComponent from './components/ListItemComponent';


function App() {

  const [inputValue, setInputValue] = useState("qui")
  const [initialPosts, setInitialPost] = useState(blogPosts)


  const handleSubmit = (event) => {

    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newPost = { titolo: inputValue, id: initialPosts.length + 1, contenuto: "giusto due parole" }

      const newPostsArr = [...initialPosts, newPost]

      setInitialPost(newPostsArr)
    }


  };

  const deletePost = (postId) => {
    console.log(postId);

    const newPostsArr = initialPosts.filter((curPost) => curPost.id !== postId)
    console.log(newPostsArr)
    setInitialPost(newPostsArr)
  }

  const updatePost = (postId , newTitle) => {

    const updatePostsArr = initialPosts.map((curPost) => {
      if (curPost.id === postId) {
        return { ...curPost, titolo: {newTitle} };
      }
      return curPost;
    })
    setInitialPost(updatePostsArr)
  }


  return (
    <>
      <div className="container">

        <h1 className='pt-5 pb-3'>Lista articoli</h1>

        <ul className='list-group '>
          {initialPosts.map((curPost) =>

          (

            <ListItemmComponent key={curPost.id} curPost={curPost} deletePost={deletePost} updatePost={updatePost} />)


          )}


        </ul>




        <FormComponent handleSubmit={handleSubmit} setInputValue={setInputValue} inputValue={inputValue} />
      </div>

    </>
  )
}

export default App
