import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  const data = [{userId: 1, postId:1, post:"info", user: "gemma", likes: 0, rockets: 0 },
    {userId: 1, postId:1, post:"info", user: "gemma", likes: 0, rockets: 0 },
    {userId: 1, postId:1, post:"info", user: "gemma", likes: 0, rockets: 0 }]


  return (
    <>
      <Nav />
      <h1>feed</h1>
      <Card />
      <Footer />
    </>
  )
}

export default App
