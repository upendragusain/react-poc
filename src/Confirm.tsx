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

const Confirm: React.FunctionComponent<IProps>  = (props) => {
   console.log('Confirm rendering...')

   Confirm.defaultProps = {
      cancelCaption: 'Cancel',
      okCaption: 'Ok',
   }

   const [likeCount, setLikeCount] = React.useState(0)

   const handleLikeClick = () => {
      setLikeCount(likeCount + 1)
   }

   React.useEffect(() => {
      console.log('Confirm first rendering')
   }, [likeCount])

      return (
         <div className={ props.open ? 'confirm-wrapper confirm-visible' : 'confirm-wrapper'}>
            <div className="confirm-container">
               <div className="confirm-title-container">
                  <span>{props.title}</span>
               </div>
               <div className="confirm-content-container">
                  <p>{props.content}</p>
                  <button onClick={handleLikeClick}>
                     Like! {likeCount <= 5 ? likeCount : 'wow you really like it! - ' + likeCount}
                  </button>
               </div>
               <div className="confirm-buttons-container">
                  <button
                     className="confirm-cancel"
                     onClick={props.onCancelClick}
                  >
                     {props.cancelCaption}
                  </button>
                  <button className="confirm-ok" onClick={props.onOkClick}>
                     {props.okCaption}
                  </button>
               </div>
            </div>
         </div>
      )

}

const ConfirmMemo = React.memo(Confirm)
export default ConfirmMemo
