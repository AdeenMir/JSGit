import React from 'react'



const Search = ({searchTerm,setSearchTerm})=>{
  return(
    <div className='search'>
  <input 
    type='text' 
    placeholder='Search through thousands of movies'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <img src="search.svg" alt="search" className="search-icon" />
</div>

  )
}

export default Search