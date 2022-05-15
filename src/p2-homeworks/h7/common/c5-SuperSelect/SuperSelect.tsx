import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from './SuperSelect.module.css'
import s from "../../../h11/common/c7-SuperRange/SuperRange.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) =>
        <option key={i}>{o}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        if (onChange) {
            onChange(e)
        }
        // onChange, onChangeOption
    }

    // const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <select
            className={`${className} ${style.select}`}
            onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
