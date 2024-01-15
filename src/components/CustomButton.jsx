import React from 'react'

const CustomButton = ({ title, btnType, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[46px] text-white min-h-[52px] px-4 rounded-[10px] width-[85px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton