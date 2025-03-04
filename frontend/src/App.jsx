import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CardHolder from './components/CardHolder'
import Profile from './components/profile'
import { useEffect, useState } from 'react'
import UserActions from './components/UserActions'

function App() {

  const [user, setUser] = useState()
  const [message, setMessage] = useState("Backend ❌")
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    fetch('http://localhost:2819/')
      .then((res)=> res.json())
      .then((data)=> setMessage(data.message))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:2819/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  useEffect(()=> {
    let random = 0
    fetch('http://localhost:2819/users')
      .then((res) => res.json())
      .then((data)=> {
        random = Math.floor(Math.random() * (data.length))
        setUser(data[random])
        console.log('use effect: ',random)
      })
  }, [])

  return (
    <>
      {/* <div className="App">
        <p>{message}</p>
      </div> */}
      <Nav />
      {user ? <Profile user={user} /> : "Loading..."}
      {posts ? <CardHolder data={posts} /> : "Loading..."}
      <Footer />
    </>
  )
}

export default App
