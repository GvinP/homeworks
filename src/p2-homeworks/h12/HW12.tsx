import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['light', 'dark', 'red', 'green'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.theme); // useSelector
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <div>homeworks 12</div>
                <SuperSelect options={themes} onChangeOption={onChangeCallback} className={s[theme]}/>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
