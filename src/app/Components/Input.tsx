import React from 'react'
interface InputProps {  
  type?: string;
  placeholder?: string, 
  value?: string, 
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void, 
  className?: string, 
  disabled?: boolean, 
  dark?:true,
}
const Input : React.FC <InputProps> = ({  
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    disabled = false, 
    dark
}) => {
  return (
      <input 
      type = {type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`border ${dark ? 'text-gray-300' : 'text-gray-800'} border-gray-500 border-opacity-70 px-4 py-2 bg-transparent rounded-md   ${className}`}
    />
  )
}

export default Input
