import React from 'react'

const SearchBox = ({search}) => {
    return (
        <div className='pa2'>
            <input
                type='search'
                className='pa3 bg-light-blue b--green'
                placeholder='Search robots'
                onChange={search}
            />
        </div>
    )
}
export default SearchBox;