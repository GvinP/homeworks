import React, {ChangeEvent, DetailedHTMLProps, DragEvent, InputHTMLAttributes} from 'react'
import s from "./SuperDoubleRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    valueRange: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type,
        onChangeRange, valueRange,
        onChange, className,
        min, max,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, value: number) => {
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange([+e.currentTarget?.value, value])
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>, value: number) => {
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange([value, +e.currentTarget?.value])
    }

    const dragMax = (e: DragEvent<HTMLDivElement>, value: number) => {
        onChangeRange && onChangeRange([value, e.clientX])
    }
    const dragMin = (e: DragEvent<HTMLDivElement>, value: number) => {
        onChangeRange && onChangeRange([e.clientX, value])
    }

    const dropOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }


    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <div className={finalRangeClassName}>
            <div className={s.rangeControls}
                 onDragOver={dropOver}>
                <div className={s.scale} >
                    <div className={s.bar} style={{left: `${valueRange[0]}px`, width: `${valueRange[1]-valueRange[0]}px`}}></div>
                </div>
                <div className={`${s.toggle} ${s.toggleMin}`} style={{left: `${valueRange[0]}px`}}
                     draggable onDrag={(e)=>dragMin(e,valueRange[1])}></div>
                <div className={`${s.toggle} ${s.toggleMax}`} style={{left: `${valueRange[1]}px`}}
                     draggable onDrag={(e)=>dragMax(e,valueRange[0])}>
                </div>
            </div>
            <input
                type={'range'}
                onChange={(e) => onChangeCallback(e, valueRange[1])}
                className={s.visuallyHidden}
                value={valueRange[0]}
                min={min}
                // max={valueRange[1]}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={(e) => onChangeCallback2(e, valueRange[0])}
                // onInput={(e) => onChangeCallback2(e, valueRange[0])}
                className={s.visuallyHidden}
                value={valueRange[1]}
                // min={valueRange[0]}
                max={max}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperDoubleRange
