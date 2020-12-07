import React from 'react'
import './App.css'

import Confirm from './Confirm'

const handleOkClick = () => {
   console.log('Ok Clikced!')
}

const handleCancelClick = () => {
   console.log('Cancel clicked')
}

function App() {
   return (
      <Confirm
         open={false}
         title="React and Typescript"
         content="Are you sure?"
         onCancelClick={handleCancelClick}
         onOkClick={handleOkClick}
      />
   )
}

export default App
