/* eslint-disable react/no-direct-mutation-state */
import React from 'react'
import './App.css'

import Confirm from './Confirm'

interface IState {
   confirmOpen: boolean
   confirmMessage: string
}

class App extends React.Component<{}, IState> {
   constructor(props: {}) {
      super(props)
      this.state = {
         confirmOpen: true,
         confirmMessage: 'Please hit the confirm button',
      }
   }

   private handleOkClick = () => {
      console.log('Ok Clicked!')
      this.setState({ confirmOpen: false, confirmMessage: 'Ok clicked!' })
   }

   private handleCancelClick = () => {
      console.log('Cancel clicked')
      this.setState({ confirmOpen: false, confirmMessage: 'Cancel clicked!' })
   }

   public render() {
      return (
         <div>
            <p> {this.state.confirmMessage} </p>

            <Confirm
               open={this.state.confirmOpen}
               title="React and Typescript"
               content="Are you sure?"
               onCancelClick={this.handleCancelClick}
               onOkClick={this.handleOkClick}
            />
         </div>
      )
   }
}

export default App
