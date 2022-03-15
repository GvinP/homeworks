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
            <img className={s.img} src={props.avatar}></img>yar
            <div className={s.meesageBody}>
                <div>
                    <div>{props.name}</div>
                    <div>{props.message}</div>
                </div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
