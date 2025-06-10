import React from 'react'

const SearchButton = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer font-medium text-[var(--gradient-1)]"
      onClick={onClick}
    >
      Search
    </button>
  )
}

export default SearchButton
