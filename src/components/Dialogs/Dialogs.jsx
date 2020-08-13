import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
   
    let dialogsElem = props.state.dialogs.map((elem) => <Dialog name={elem.name} id={elem.id}/>)

    let messagesElem = props.state.messages.map((elem) => <Message message={elem.message}/>)

    let messageText = React.createRef();

    let btnMessage = () => {
        let text = messageText.current.value;
        alert(text);
    } 
    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.users}>
                {dialogsElem}
            </div>
            <div className={style.dialogs}>
                {messagesElem}
                <div className={style.message_form}>
                    <form action="">
                        <textarea ref={messageText}></textarea>
                        <button onClick={btnMessage}>Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;