/* eslint-disable prettier/prettier */
import React from 'react'
import './Confirm.css'

interface IProps {
   open: boolean
   title: string
   content: string
   cancelCaption?: string
   okCaption?: string
   onOkClick: () => void
   onCancelClick: () => void
}

class Confirm extends React.Component<IProps> {
   public static defaultProps = {
      cancelCaption: 'Cancel',
      okCaption: 'Ok',
   }

   public render() {
      return (
         <div className={ this.props.open ? 'confirm-wrapper confirm-visible' : 'confirm-wrapper'}>
            <div className="confirm-container">
               <div className="confirm-title-container">
                  <span>{this.props.title}</span>
               </div>
               <div className="confirm-content-container">
                  <p>{this.props.content}</p>
               </div>
               <div className="confirm-buttons-container">
                  <button
                     className="confirm-cancel"
                     onClick={this.props.onCancelClick}
                  >
                     {this.props.cancelCaption}
                  </button>
                  <button className="confirm-ok" onClick={this.props.onOkClick}>
                     {this.props.okCaption}
                  </button>
               </div>
            </div>
         </div>
      )
   }
}

export default Confirm
