import React from 'react'

export default function SearchBar({labelName, value, handleChange}) {
  return (
    <div className='search__searchBar'>
      <label htmlFor={labelName}>{labelName}</label>
      <input 
        type="text" 
        name={labelName}
        placeholder={labelName}
        value={value}
        onChange={e => handleChange(e.target.value)}>
      </input>
    </div>
  )
}