import React from 'react'
import MainComponent from './components/main'
import Header from './components/header'
import { useNProgress } from './hooks/use-nprogress'


function App() {
  useNProgress()
  return (
    <div >
      <Header />
      <MainComponent />
    </div>
  )
}

export default App;
