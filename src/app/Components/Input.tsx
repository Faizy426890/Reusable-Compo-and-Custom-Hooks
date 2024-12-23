import React from 'react'
interface InputProps {  
  type?: string;
  placeholder?: string, 
  value?: string, 
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void, 
  className?: string, 
  disabled?: boolean,
}
const Input : React.FC <InputProps> = ({  
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    disabled = false,
}) => {
  return (
       <input 
       type = {type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  )
}

export default Input
