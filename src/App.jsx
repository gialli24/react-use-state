import './App.css'

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

import { languages } from './assets/js/languages'

function App() {

  return (
    <>
      <AppHeader />
      <AppMain languages={languages} />
    </>
  )
}

export default App
