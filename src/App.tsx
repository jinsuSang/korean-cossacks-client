import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { Colors } from './color/Color'
import Translate from './translate/Translate'

function App() {
  document.body.style.backgroundColor = Colors.CreamyPeach
  document.body.style.width = '100%'
  document.body.style.height = '100vh'
  return (
    <div>
      <CssBaseline />
      <Translate />
    </div>
  )
}

export default App
