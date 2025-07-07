import React from 'react'

const SearchPreviousCustomer = ({query, onChange, placeholder="Search..."}) => {
  
    
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '1rem 1rem',
          width: '100%',
          maxWidth: '300px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          position:'relative',
          left:'37%'
        }}
      />
      </div>
  )
}

export default SearchPreviousCustomer