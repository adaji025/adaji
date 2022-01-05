import React from 'react'
import './Button.module.css'

const STYLES = [
    'primary_btn',
    'outline_btn',

]
const SIZES = [
    'large_btn',
    'medium_btn',

]

export default function Button({
    children, type, onClick, buttonStyle, buttonSize
}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0] 
    const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0] 
    return (
        <button className={`${styles.btn} ${checkButtonStyle} ${checkbuttonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
