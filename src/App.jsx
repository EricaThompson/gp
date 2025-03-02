import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Nav />
      <div>
        
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="🧶" />
        </a> */}
      </div>
      <h1>feed</h1>
      <Card />
      <Footer />
    </>
  )
}

export default App
