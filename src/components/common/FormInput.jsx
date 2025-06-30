import React from 'react'

const FormInput = ({ type, placeholderText, className = '' }) => {
    return (
        <input type={`${type}`} placeholder={`${placeholderText}`} className={`${className} py-[10px] px-[17px] border border-[#999999] rounded-[5px] placeholder:font-normal placeholder:text-base placeholder:text-[#4D4D4D] `} />
    )
}

export default FormInput