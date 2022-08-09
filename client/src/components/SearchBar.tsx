import React from 'react'
export interface SearchBarProps {
  labelName: string,
  value: string,
  handleChange: Function
}

export default function SearchBar({ labelName, value, handleChange }: SearchBarProps) {
  return (
    <div className='search__searchBar'>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type="text"
        name={labelName}
        placeholder={labelName}
        value={value}
        onChange={e => handleChange(e.target.value)}
        required>
      </input>
    </div>
  )
}
