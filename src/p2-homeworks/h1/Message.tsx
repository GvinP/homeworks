import React from 'react'
import s from './Message.module.css'

type messageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageProps) {
    return (
        <div className={s.message}>
            <img className={s.img} src={props.avatar} alt={'avatar'}/>
            <div className={s.messageBody}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.messageText}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
