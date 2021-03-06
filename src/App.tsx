/* eslint-disable react/no-direct-mutation-state */
import React from 'react'
import './App.css'

import Confirm from './Confirm'

interface IState {
   confirmOpen: boolean
   confirmMessage: string
   countDown: number
}

class App extends React.Component<{}, IState> {
   private timer: number = 0
   private renderCount: number = 0
   constructor(props: {}) {
      super(props)
      this.state = {
         confirmOpen: true,
         confirmMessage: 'Please hit the confirm button',
         countDown: 10,
      }
   }

   public componentDidMount() {
      this.timer = window.setInterval(() => this.handleTimerTick(), 1000)
   }

   public static getDerivedStateFromProps(props: {}, state: IState) {
      //console.log('getDerivedStateFromProps', props, state)
      return null
   }

   public shouldComponentUpdate(nextProps: {}, nextState: IState) {
      //console.log('shouldComponentUpdate', nextProps, nextState)
      return true
   }

   public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
      this.renderCount += 1
      //console.log('getSnapshotBeforeUpdate', prevProps, prevState, {
      //   renderCount: this.renderCount,
      //})
      return this.renderCount
   }

   public componentDidUpdate(
      prevProps: {},
      prevState: IState,
      snapshot: number,
   ) {
      //console.log('componentDidUpdate', prevState, prevState, snapshot, {
      //   renderCount: this.renderCount,
      //})
   }

   public componentWillUnmount() {
      clearInterval()
   }

   private handleTimerTick = () => {
      this.setState(
         {
            confirmMessage: `Please hit the OK button ${this.state.countDown} secs to go`,
            countDown: this.state.countDown - 1,
         },
         () => {
            if (this.state.countDown <= 0) {
               clearInterval(this.timer)
               this.setState({
                  confirmMessage: 'Too late to confirm!',
                  confirmOpen: false,
               })
            }
         },
      )
   }

   private handleOkClick = () => {
      console.log('Ok Clicked!')
      this.setState({ confirmOpen: false, confirmMessage: 'Ok clicked!' })
      clearInterval(this.timer)
   }

   private handleCancelClick = () => {
      console.log('Cancel clicked')
      this.setState({ confirmOpen: false, confirmMessage: 'Cancel clicked!' })
      clearInterval(this.timer)
   }

   public render() {
      return (
         <div>
            <p> {this.state.confirmMessage} </p>

            <Confirm
               open={this.state.confirmOpen}
               title="React and Typescript"
               content={this.state.confirmMessage}
               onCancelClick={this.handleCancelClick}
               onOkClick={this.handleOkClick}
            />
         </div>
      )
   }
}

export default App
