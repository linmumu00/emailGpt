import React from 'react'
import MainComponent from './components/main'
import Footer from './components/footer'
import Header from './components/header'
import { useNProgress } from './hooks/use-nprogress'


function App() {
  useNProgress()
  return (
    <div >
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

export default App;
