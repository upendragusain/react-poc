import React from 'react'

class Confirm extends React.Component {
   public render() {
      return (
         <div className="confirm-wrapperconfirm-visible">
            <div className="confirm-container">
               <div className="confirm-title-container">
                  <span>title</span>
               </div>
               <div className="confirm-content-container">
                  <p>content</p>
               </div>
               <div className="confirm-buttons-container">
                  <button className="confirm-cancel">cancel</button>
                  <button className="confirm-ok">OK</button>
               </div>
            </div>
         </div>
      )
   }
}

export default Confirm
