import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'

function App() {
  return (
    <>
      <div className='p-[20px]'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/HitMeUp' element={<ContactMe />} />
        </Routes>
      </div>
    </>
  )
}

export default App
