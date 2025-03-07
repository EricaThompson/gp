import React, { useState } from 'react'

const Post = () => {
    const [title, setTitle] = useState();
    const [post, setPost] = useState();

    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }

    console.log(title)

    const handlePost=()=>{

    }

  return (
    <div className='post'>
        <form>
            <p>New Post</p>
            
            <div><label for="title">Title</label><input className="title" name="title" type="text" onChange={e => handleTitle(e)} /></div>
            <div><label for="post">Post</label><textarea className='textarea' /></div>
            <div><input type="submit" /></div>
        </form>
    </div>
  )
}

export default Post