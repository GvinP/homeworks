import React from 'react'
import image from './Error404.png'
import style from './Error404.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../Pages";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

function Error404() {
    return (
        <div className={style.container}>
            <div className={style.error}>404</div>
            <div className={style.errorText}>Page not found!</div>
            <img src={image} className={style.image}/>
            <NavLink to={PATH.PRE_JUNIOR}><SuperButton>Back to home page</SuperButton></NavLink>
        </div>
    )
}

export default Error404
