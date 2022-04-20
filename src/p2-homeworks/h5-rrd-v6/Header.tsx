import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import style from './HW5.module.css'

function Header() {
    return (
        <div>
            <input type={"checkbox"} id={"btn"} className={style.hiddenMenuTicker}/>
            <label className={style.btnMenu} htmlFor={"btn"}>
            </label>
            <div className={style.hiddenMenu}>
                <NavLink className={({isActive})=>isActive? `${style.active} & ${style.link}`: style.link}  to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                <NavLink className={({isActive})=>isActive? `${style.active} & ${style.link}`: style.link} to={PATH.JUNIOR}>junior</NavLink>
                <NavLink className={({isActive})=>isActive? `${style.active} & ${style.link}`: style.link} to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>
            </div>
        </div>
    )
}

export default Header
