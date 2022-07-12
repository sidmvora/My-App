import React, { Fragment } from 'react'

const Input = props => {
    const { name, type, value, onChange, checked, options } = props

    if (type === 'text') {
        return <input name={name} type={type} value={value} onChange={onChange} />
    }
    if (type === 'textarea') {
        return <textarea name={name} value={value} onChange={onChange} />
    }
    if (type === 'radio') {
        return (
            <>
                {options.map((option) => {
                    return <Fragment key={option.value}>
                        <input name={name} type={type} checked={checked === option.value.toString()} option={option} value={option.value.toString()} onChange={onChange} />
                        {option.lable}
                    </Fragment>
                })}
            </>
        )
    }
    if (type === 'select') {
        return (
            <select name={name} id='Countrys' onChange={onChange} value={value}>
                {options.map((option) => {
                    return <option key={option.value} value={option.value} checked={option.value}>
                        {option.lable}</option>
                })}
            </select>
        )
    }
    if (type === 'checkbox') {
        return <input name={name} type={type} checked={checked} onChange={onChange} />
    }
    return (
        <div>Invalide Data</div>
    )
}
export default Input;
