import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CardHolder from './components/CardHolder'

function App() {

  const today = new Date()

  console.log(today)

  const data = [{
      userId: 2,
      postId: 7,
      post: "Explored a new hiking trail today! The view from the top was absolutely breathtaking. Nature never disappoints.",
      user: "liam",
      likes: 25,
      rockets: 18,
      date: new Date("2025-03-01T14:45:32-05:00"),
      show: false,
      pin: false
    },
    {
      userId: 5,
      postId: 13,
      post: "Finally finished my painting! Took me weeks, but I’m so proud of how it turned out. Art is therapy.",
      user: "sophia",
      likes: 40,
      rockets: 30,
      date: new Date("2025-02-28T19:12:10-05:00"),
      show: false,
      pin: false
    },
    {
      userId: 3,
      postId: 9,
      post: "Just baked some homemade cookies, and they turned out amazing! Nothing beats fresh-out-of-the-oven treats.",
      user: "noah",
      likes: 32,
      rockets: 21,
      date: new Date("2025-03-02T10:30:45-05:00"),
      show: false,
      pin: false
    },
    {
      userId: 4,
      postId: 21,
      post: "Had a relaxing evening watching the sunset by the lake. The colors were unreal. Moments like these make life beautiful.",
      user: "mia",
      likes: 28,
      rockets: 35,
      date: new Date("2025-03-03T06:55:20-05:00"),
      show: false,
      pin: false
    },
    {
      userId: 6,
      postId: 15,
      post: "Tried a new coffee blend today, and I think I found my new favorite! Nothing like a good cup to start the day.",
      user: "oliver",
      likes: 20,
      rockets: 14,
      date: new Date("2025-03-02T08:15:05-05:00"),
      show: false,
      pin: false
    },
    {
      userId: 1,
      postId: 3,
      post: "Just saw the most incredible shooting star! Made a wish. Fingers crossed it comes true!",
      user: "gemma",
      likes: 37,
      rockets: 42,
      date: new Date("2025-03-02T23:23:55-05:00"),
      show: false,
      pin: false
    }]

// console.log("console: ", today)

  return (
    <>
      <Nav />
      <h1 className='feed'>inbox</h1>
      <CardHolder data={data} />
      <Footer />
    </>
  )
}

export default App
