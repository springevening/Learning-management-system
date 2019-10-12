import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import MainPage from './components/main-page/MainPage'
import ScribblePad from './components/scribble-pad/ScribblePad'
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/scribble' component={ScribblePad} />
        {/* <Route path="/webcamrec" component={WebCamRecorder} />
      <Route path="/audiorec" component={AudioRecorder} /> */}
      </Switch>
    </div>
  )
}

export default App
