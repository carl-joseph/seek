import React from "react"

export const CloseIcon = ({ className = "", size = 16 }) => {
    return (
        <svg className={className} width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L15 15' stroke='currentColor' strokeWidth='1.5' />
            <path d='M15 1L1 15' stroke='currentColor' strokeWidth='1.5' />
        </svg>
    )
}
