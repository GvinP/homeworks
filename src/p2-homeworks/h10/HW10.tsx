import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import style from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, StateType>(state => state.loading)
    const dispatch = useDispatch()
    // const loading = false
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        },4000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <div className={style.loader}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
