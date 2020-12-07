import React from 'react'
import './App.css'

import Confirm from './Confirm'

const handleOkClick = () => {
   console.log('Ok Clikced!')
}

const handleCancelClick = () => {
   console.log('Cancel clicked')
}

interface IState {
   confirmOpen: boolean
}

class App extends React.Component<{}, IState> {
   constructor(props: {}) {
      super(props)
      this.state = {
         confirmOpen: true,
      }
   }

   public render() {
      return (
         <Confirm
            open={this.state.confirmOpen}
            title="React and Typescript"
            content="Are you sure?"
            onCancelClick={handleCancelClick}
            onOkClick={handleOkClick}
         />
      )
   }
}

export default App
