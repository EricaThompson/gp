import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CardHolder from './components/CardHolder'

function App() {

  const today = new Date()

  const data = [{
    userId: 1, 
    postId:1, 
    post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ultricies maximus. Quisque id commodo dui. Aliquam at massa vivamus", 
    user: "gemma", 
    likes: 3, 
    rockets: 70,
    date: today
  },
    {userId: 1, postId:1, post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ultricies maximus. Quisque id commodo dui. Aliquam at massa vivamus" 
, user: "gemma", likes: 20, rockets: 2, date: today },
    {userId: 1, postId:1, post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ultricies maximus. Quisque id commodo dui. Aliquam at massa vivamus" 
, user: "gemma", likes: 30, rockets: 10, date: today }]

// console.log("console: ", today)

  return (
    <>
      <Nav />
      <h1>feed</h1>
      <CardHolder data={data} />
      <Footer />
    </>
  )
}

export default App
