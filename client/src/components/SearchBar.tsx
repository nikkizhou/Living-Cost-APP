import React, { LegacyRef } from 'react'

export interface SearchBarProps {
  name: string,
  reference: LegacyRef<HTMLInputElement> | null,
}

export default function SearchBar({ name, reference }: SearchBarProps) {
  
  return (
    <div className='search__searchBar'>
      <input
        type="text"
        name={name}
        placeholder={`Enter a ${name} name`}
        ref={reference}
        required>
      </input>
    </div>
  )
}
