import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Formutilis from './components/formutilis'
import About from './components/about'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NewsMain from './components/NewsMain'
import NewsItem from './components/NewsItem'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar title={"React App"}/>
      <Routes>
      <Route path='/' element={<Formutilis title={"React Form"}/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/news' element={<NewsMain />} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
